import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Import lab data (we need to read the file directly as it's an ES module)
// For simplicity in this script, we'll read data.js as text and parse it, 
// or we can just import it if we set "type": "module" in package.json.
// Let's assume we can read it or use a subset for testing.

const LABS_FILE_PATH = '../data.js';
const OUTPUT_FILE = '../jobs.json'; // We will write to jobs.json which the frontend can then load

// Keywords to look for
const JOB_KEYWORDS = [
    'position', 'opening', 'opportunity', 'career', 'join', 'recruit',
    'vacancy', 'phd', 'postdoc', 'student', 'fellow', 'hiring', 'work with us'
];

async function loadLabs() {
    try {
        // Import data.js directly as a module
        const module = await import(LABS_FILE_PATH);
        return module.default;
    } catch (e) {
        console.error("Error loading data.js:", e);
        console.log("Using fallback/test data.");
        return [
            { pi: "David Baker", website: "https://www.bakerlab.org/", institution: "University of Washington", country: "United States" },
            { pi: "Dek Woolfson", website: "https://woolfsonlab.wordpress.com/", institution: "University of Bristol", country: "United Kingdom" }
        ];
    }
}

async function scrapeLab(browser, lab) {
    if (!lab.website || lab.website.toLowerCase() === 'na') return [];

    // STRICT RULE: If hiringStatus is 'closed', do not scrape.
    if (lab.hiringStatus === 'closed') {
        console.log(`Skipping ${lab.pi} (Hiring Status: Closed)`);
        return [];
    }

    const targetUrl = lab.jobsUrl || lab.website;
    console.log(`Scraping ${lab.pi} (${targetUrl})...`);

    const page = await browser.newPage();

    try {
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // If we have a specific jobsUrl, we ONLY check that page.
        // If not, we fall back to the old logic of finding links (though most now have jobsUrl).
        let pagesToCheck = [targetUrl];

        if (!lab.jobsUrl) {
            try {
                await page.goto(lab.website, { waitUntil: 'networkidle2', timeout: 30000 });
                // 1. Find "Jobs" or "Join Us" link if no specific jobsUrl provided
                const jobLinks = await page.evaluate((keywords) => {
                    const links = Array.from(document.querySelectorAll('a'));
                    return links
                        .filter(a => keywords.some(kw => a.textContent.toLowerCase().includes(kw) || a.href.toLowerCase().includes(kw)))
                        .map(a => a.href)
                        .filter((v, i, a) => a.indexOf(v) === i) // Unique
                        .slice(0, 3); // Limit to top 3 likely links
                }, JOB_KEYWORDS);
                if (jobLinks.length > 0) pagesToCheck = jobLinks;
            } catch (e) {
                console.warn(`Failed to visit homepage for ${lab.pi}: ${e.message}`);
            }
        }

        const jobs = [];

        for (const link of pagesToCheck) {
            try {
                await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 15000 });
            } catch (e) {
                console.warn(`Failed to visit ${link}: ${e.message}`);
                continue;
            }

            const content = await page.content();
            const $ = cheerio.load(content);
            // Remove unwanted elements
            $('script, style, noscript, nav, header, footer, svg, .nav, .menu, .cookie-banner').remove();

            const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
            const lowerText = bodyText.toLowerCase();

            // Keywords that strongly suggest a job listing
            const strongKeywords = [
                'postdoc', 'phd student', 'graduate student', 'research assistant', 'open position',
                'hiring', 'openings', 'join the lab', 'work with us', 'interested in joining'
            ];

            // Find the first occurrence of a strong keyword
            const foundKeyword = strongKeywords.find(kw => lowerText.includes(kw));

            if (foundKeyword) {
                // Try to find the specific element containing the keyword for a better snippet
                let snippet = "";

                // Helper to find text node
                const elements = $('p, li, div, h1, h2, h3, h4, h5, h6');
                for (let i = 0; i < elements.length; i++) {
                    const el = $(elements[i]);
                    const text = el.text().replace(/\s+/g, ' ').trim();
                    if (text.toLowerCase().includes(foundKeyword) && text.length > 20 && text.length < 500) {
                        snippet = text;
                        break;
                    }
                }

                // Fallback if no specific element found or snippet is too short
                if (!snippet || snippet.length < 50) {
                    const index = lowerText.indexOf(foundKeyword);
                    snippet = bodyText.substring(Math.max(0, index - 50), Math.min(bodyText.length, index + 250));
                }

                // Clean up snippet
                snippet = snippet.replace(/Skip to main content/gi, '')
                    .replace(/Toggle navigation/gi, '')
                    .replace(/position: absolute/gi, '') // CSS leak
                    .replace(/\{.*?\}/g, '') // JS/CSS code
                    .trim();

                if (snippet.length > 20) {
                    jobs.push({
                        id: `job_${lab.pi.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`,
                        labInfo: {
                            pi: lab.pi,
                            institution: lab.institution,
                            country: lab.country,
                            website: lab.website
                        },
                        position: {
                            title: `Open Position (${foundKeyword})`, // More specific title
                            type: foundKeyword.includes('postdoc') ? 'postdoc' : 'phd',
                            deadline: "See website"
                        },
                        description: {
                            summary: snippet + "..."
                        },
                        application: {
                            url: link
                        },
                        tags: ["protein-design", "detected"]
                    });
                    break; // Found a job on this page, move to next lab (or maybe check other pages? usually one is enough)
                }
            }
        }

        await page.close();
        return jobs;

    } catch (error) {
        console.error(`Error scraping ${lab.pi}:`, error.message);
        await page.close();
        return [];
    }
}

// Helper to normalize URLs for comparison
function normalizeUrl(url) {
    if (!url) return '';
    try {
        // Force https and remove trailing slash for consistency
        let u = new URL(url);
        // We can't force https if the original was http, but we can standardise
        // Let's just strip trailing slash and whitespace
        return url.trim().replace(/\/+$/, '').toLowerCase();
    } catch (e) {
        return url.trim().replace(/\/+$/, '').toLowerCase();
    }
}

async function main() {
    const labData = await loadLabs();
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Read existing jobs to preserve ALL of them (Smart Preservation)
    const jobsFilePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../jobs.js');
    let existingJobs = [];
    try {
        const fileContent = await fs.readFile(jobsFilePath, 'utf-8');
        // Extract JSON part
        const match = fileContent.match(/const jobsData = (\[.*\]);/s);
        if (match) {
            existingJobs = JSON.parse(match[1]);
        }
    } catch (e) {
        console.warn("Could not read existing jobs.js, starting fresh.", e.message);
    }

    // Create a Set of normalized URLs for fast lookup
    // We use a Map to track which URLs we have, to avoid duplicates
    const existingUrls = new Set(existingJobs.map(job => normalizeUrl(job.application.url)));

    console.log(`Loaded ${existingJobs.length} existing jobs. These will be preserved.`);

    // Start with existing jobs. We will APPEND new findings.
    const allJobs = [...existingJobs];

    for (const lab of labData) {
        // We no longer skip "curated" labs. We scrape everyone, but only ADD if new.

        const jobs = await scrapeLab(browser, lab);

        for (const job of jobs) {
            const normUrl = normalizeUrl(job.application.url);

            if (existingUrls.has(normUrl)) {
                console.log(`Preserving existing entry for: ${job.labInfo.pi} (${job.application.url})`);
                // Do NOT overwrite. The existing entry (manual or old) wins.
            } else {
                console.log(`Adding NEW job for: ${job.labInfo.pi}`);
                allJobs.push(job);
                existingUrls.add(normUrl); // Add to set so we don't add it twice in same run
            }
        }

        // Add a small delay to be polite
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    await browser.close();

    // Write to jobs.js
    const jsContent = `const jobsData = ${JSON.stringify(allJobs, null, 4)};\n\nexport default jobsData;`;

    await fs.writeFile(jobsFilePath, jsContent);

    console.log(`Scraping complete. Total jobs: ${allJobs.length}. Saved to jobs.js`);
}

main();

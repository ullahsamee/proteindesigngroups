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

    console.log(`Scraping ${lab.pi} (${lab.website})...`);
    const page = await browser.newPage();

    try {
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        await page.goto(lab.website, { waitUntil: 'networkidle2', timeout: 30000 });

        // 1. Find "Jobs" or "Join Us" link
        const jobLinks = await page.evaluate((keywords) => {
            const links = Array.from(document.querySelectorAll('a'));
            return links
                .filter(a => keywords.some(kw => a.textContent.toLowerCase().includes(kw) || a.href.toLowerCase().includes(kw)))
                .map(a => a.href)
                .filter((v, i, a) => a.indexOf(v) === i) // Unique
                .slice(0, 3); // Limit to top 3 likely links
        }, JOB_KEYWORDS);

        const jobs = [];

        // If no specific job links found, check the homepage itself
        const pagesToCheck = jobLinks.length > 0 ? jobLinks : [lab.website];

        for (const link of pagesToCheck) {
            if (link !== lab.website) {
                try {
                    await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 15000 });
                } catch (e) { continue; }
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
                    break;
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

async function main() {
    const labs = await loadLabs();
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const allJobs = [];

    // Scrape all labs
    const labsToScrape = labs;

    for (const lab of labsToScrape) {
        const jobs = await scrapeLab(browser, lab);
        allJobs.push(...jobs);
        // Add a small delay to be polite
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    await browser.close();

    // Write to jobs.json
    // In a real scenario, we might want to merge with existing jobs or update a DB
    // For this static site approach, we overwrite jobs.json (or jobs.js)

    // We need to write it as a JS file so the frontend can import it easily
    const jsContent = `const jobsData = ${JSON.stringify(allJobs, null, 4)};\n\nexport default jobsData;`;

    await fs.writeFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../jobs.js'), jsContent);

    console.log(`Scraping complete. Found ${allJobs.length} jobs. Saved to jobs.js`);
}

main();

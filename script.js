import labData from './data.js';
import jobsData from './jobs.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, serverTimestamp, query, orderByChild, startAt, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
    apiKey: "AIzaSyB3Rgs76H2zAUClwjWSMpjIRMqjz2lVYXE",
    authDomain: "protein-design-labs.firebaseapp.com",
    databaseURL: "https://protein-design-labs-default-rtdb.firebaseio.com",
    projectId: "protein-design-labs",
    storageBucket: "protein-design-labs.firebasestorage.app",
    messagingSenderId: "786686180026",
    appId: "1:786686180026:web:200173ea55d8cffc99a083"
};

// Initialize Firebase
let db = null;
try {
    // Only initialize if config is valid (not default placeholders)
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        const app = initializeApp(firebaseConfig);
        db = getDatabase(app);
    } else {
        console.warn("Firebase not configured. Using simulation mode. See FIREBASE_SETUP.md");
    }
} catch (e) {
    console.error("Firebase initialization failed:", e);
}

const labsGrid = document.getElementById('labsGrid');
const searchInput = document.getElementById('searchInput');
const regionTabs = document.getElementById('regionTabs');
const tabBtns = document.querySelectorAll('.tab-btn');
const themeToggle = document.getElementById('themeToggle');
const universitySelect = document.getElementById('universitySelect');
const countrySelect = document.getElementById('countrySelect');
const sortSelect = document.getElementById('sortSelect');

// Stats Elements
const totalLabsEl = document.getElementById('totalLabs');
const totalCountriesEl = document.getElementById('totalCountries');
const topRegionEl = document.getElementById('topRegion');

// Job Board & New Sections
const jobsGrid = document.getElementById('jobsGrid');
const jobsSection = document.getElementById('jobsSection');
const statsSection = document.getElementById('statsSection');
const newslineSection = document.getElementById('newsline');
// labsGrid is already defined above as labsGrid
const filtersBar = document.querySelector('.filters-bar');

let currentRegion = 'all';
let searchQuery = '';
let currentUniversity = '';
let currentCountry = '';
let currentSort = 'name';
let jobSearchQuery = '';
let jobTypeFilter = 'all';

// Initialize
function init() {
    updateStats();
    updateNewsline();
    populateUniversities();
    populateCountries();
    loadTheme();
    renderLabs();
    renderJobs(); // Initial render of jobs
    setupEventListeners();
}

async function updateNewsline() {
    const newslineContent = document.getElementById('newslineContent');
    if (!newslineContent) return;

    let displayLabs = [];
    const TARGET_COUNT = 15;
    const DAYS_TO_TRACK = 7;

    // 1. Try to fetch REAL trending data from Firebase (Last 7 Days)
    if (db) {
        try {
            const dbRef = ref(db, 'click_events');
            // Calculate cutoff timestamp (ms)
            const cutoff = Date.now() - (DAYS_TO_TRACK * 24 * 60 * 60 * 1000);

            // Query events after cutoff
            const recentClicksQuery = query(dbRef, orderByChild('timestamp'), startAt(cutoff));
            const snapshot = await get(recentClicksQuery);

            if (snapshot.exists()) {
                const events = snapshot.val();

                // Aggregate counts per PI
                const counts = {};
                Object.values(events).forEach(event => {
                    if (event.pi) {
                        counts[event.pi] = (counts[event.pi] || 0) + 1;
                    }
                });

                // Sort by count desc
                const topPIs = Object.entries(counts)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 10) // Get top 10
                    .map(([pi]) => pi);

                // Map to lab objects
                const trending = topPIs.map(piName => labData.find(lab => lab.pi === piName)).filter(Boolean);
                displayLabs = [...trending];
            }
        } catch (e) {
            console.error("Error fetching trending data:", e);
        }
    }

    // 2. Fill the rest with Random "Featured" Labs
    const existingPIs = new Set(displayLabs.map(l => l.pi));
    const availableLabs = labData.filter(l => !existingPIs.has(l.pi));
    const shuffled = [...availableLabs].sort(() => 0.5 - Math.random());

    const needed = TARGET_COUNT - displayLabs.length;
    if (needed > 0) {
        displayLabs = [...displayLabs, ...shuffled.slice(0, needed)];
    }

    // Create marquee track
    const track = document.createElement('div');
    track.className = 'newsline-track';

    // Create items
    const createItems = () => {
        return displayLabs.map((lab, index) => {
            // Determine if this lab gets an award
            // Only the first 3 items AND if they came from the "trending" list (index < existingPIs.size)
            // But since we mixed them, we can just check if they are in the top 3 of the final list?
            // No, "Featured" labs shouldn't get awards.
            // We know the first 'existingPIs.size' items are the trending ones.

            let badge = '';
            if (index < existingPIs.size) {
                if (index === 0) badge = '🥇';
                else if (index === 1) badge = '🥈';
                else if (index === 2) badge = '🥉';
            }

            return `
                <div class="newsline-item" onclick="trackClick('${lab.pi}', '${lab.website}')">
                    <span class="fi fi-${getCountryCode(lab.country)}"></span>
                    <strong>${badge} ${lab.pi}</strong>
                    <span class="newsline-inst">@ ${lab.institution}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <div class="newsline-separator">•</div>
            `;
        }).join('');
    };

    // Duplicate content for smooth infinite scroll
    track.innerHTML = createItems() + createItems();
    newslineContent.innerHTML = '';
    newslineContent.appendChild(track);

    // --- NEW: Populate Top Trending Card ---
    const topTrendingList = document.getElementById('topTrendingList');
    if (topTrendingList) {
        // Take top 10 from the display list (which is already sorted/backfilled)
        const top10 = displayLabs.slice(0, 10);

        topTrendingList.innerHTML = top10.map((lab, index) => {
            let badge = '';
            if (index === 0) badge = '🥇';
            else if (index === 1) badge = '🥈';
            else if (index === 2) badge = '🥉';
            else badge = `<span style="display:inline-block; width:20px; text-align:center; color:#888; font-size:12px;">${index + 1}</span>`;

            return `
                <div class="region-stat-item" onclick="trackClick('${lab.pi}', '${lab.website}')" style="cursor:pointer;">
                    <span class="region-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;">
                        ${badge} ${lab.pi}
                    </span>
                    <span class="fi fi-${getCountryCode(lab.country)}"></span>
                </div>
            `;
        }).join('');
    }
}

// Global click tracker
window.trackClick = (pi, url) => {
    window.open(url, '_blank');

    // Anti-Spam Cooldown (1 Hour)
    const COOLDOWN_MS = 60 * 60 * 1000; // 1 Hour
    const storageKey = `lastClick_${pi}`;
    const lastClick = localStorage.getItem(storageKey);
    const now = Date.now();

    // If clicked recently, do NOT track to Firebase
    if (lastClick && (now - parseInt(lastClick)) < COOLDOWN_MS) {
        console.log(`Click for ${pi} ignored (cooldown active).`);
        return;
    }

    if (db) {
        const eventsRef = ref(db, 'click_events');
        push(eventsRef, {
            pi: pi,
            timestamp: serverTimestamp() // Server-side time
        }).then(() => {
            // Save timestamp to prevent spamming
            localStorage.setItem(storageKey, now.toString());
        }).catch(err => console.error("Tracking failed", err));
    }
};

function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderLabs();
    });

    // Tabs
    regionTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            // Update active state
            tabBtns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const selectedRegion = e.target.dataset.region;

            // Handle Positions Tab
            if (selectedRegion === 'positions') {
                labsGrid.style.display = 'none';
                statsSection.style.display = 'none';
                newslineSection.style.display = 'none';
                document.querySelector('.secondary-filters').style.display = 'none';

                jobsSection.style.display = 'block';
                return;
            } else {
                // Show Labs View
                labsGrid.style.display = 'grid';
                statsSection.style.display = 'grid';
                newslineSection.style.display = 'flex';
                document.querySelector('.secondary-filters').style.display = 'flex';
                jobsSection.style.display = 'none';
            }

            if (selectedRegion === 'country') {
                // Show country select, hide others if needed or just focus
                countrySelect.style.display = 'block';
                currentRegion = 'all'; // Reset region filter effectively
                // Maybe clear other filters?
            } else {
                countrySelect.style.display = 'none';
                currentRegion = selectedRegion;
                currentCountry = ''; // Reset country filter
                countrySelect.value = '';
            }

            // Clear search and university filter for better UX
            searchInput.value = '';
            searchQuery = '';
            universitySelect.value = '';
            currentUniversity = '';

            renderLabs();
        }
    });

    // University Filter
    universitySelect.addEventListener('change', (e) => {
        currentUniversity = e.target.value;
        renderLabs();
    });

    // Country Filter
    countrySelect.addEventListener('change', (e) => {
        currentCountry = e.target.value;
        renderLabs();
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderLabs();
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'dark');
    });
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    if (isDark) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

function updateStats() {
    // Total Labs
    totalLabsEl.textContent = labData.length;

    // Unique Countries
    const countries = new Set(labData.map(lab => lab.country).filter(Boolean));
    totalCountriesEl.textContent = countries.size;

    // Top Regions
    const regionCounts = {};

    // Helper to map country to region
    const getRegionForCountry = (country) => {
        const name = getCountryName(country);
        const regionMap = {
            'United States': 'North America',
            'Canada': 'North America',
            'China': 'Asia',
            'Japan': 'Asia',
            'South Korea': 'Asia',
            'Singapore': 'Asia',
            'Taiwan': 'Asia',
            'India': 'Asia',
            'Germany': 'EMEA',
            'United Kingdom': 'EMEA',
            'Switzerland': 'EMEA',
            'France': 'EMEA',
            'Israel': 'EMEA',
            'Spain': 'EMEA',
            'Netherlands': 'EMEA',
            'Sweden': 'EMEA',
            'Denmark': 'EMEA',
            'Italy': 'EMEA',
            'Austria': 'EMEA',
            'Belgium': 'EMEA',
            'Finland': 'EMEA',
            'Norway': 'EMEA',
            'Poland': 'EMEA',
            'Portugal': 'EMEA',
            'Czech Republic': 'EMEA',
            'Slovenia': 'EMEA',
            'Saudi Arabia': 'EMEA',
            'Australia': 'Asia', // Often grouped with APAC
            'New Zealand': 'Asia',
            'Brazil': 'South America',
            'Chile': 'South America'
        };
        return regionMap[name] || 'Other';
    };

    labData.forEach(lab => {
        let region = lab.region;

        // If region is Global, try to map from country
        if (region === 'Global' || !region) {
            region = getRegionForCountry(lab.country);
        }

        // Normalize Asia
        if (region === 'Asia') {
            // Keep as Asia
        }

        if (region && region !== 'Other') {
            regionCounts[region] = (regionCounts[region] || 0) + 1;
        }
    });

    // Sort and get top 5
    const sortedRegions = Object.entries(regionCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);

    const topRegionsList = document.getElementById('topRegionsList');
    if (topRegionsList) {
        topRegionsList.innerHTML = sortedRegions.map(([region, count]) => {
            let displayRegion = region;
            let displayCount = count;

            if (region === 'Asia') {
                displayRegion = '<span class="fi fi-cn"></span> China/Asia';
            } else if (region === 'North America') {
                displayRegion = '<span class="fi fi-us"></span> North America';
            } else if (region === 'EMEA') {
                displayRegion = '<span class="fi fi-eu"></span> EMEA';
            }

            return `
                <div class="region-stat-item">
                    <span class="region-name">${displayRegion}</span>
                    <span class="region-count">${displayCount}</span>
                </div>
            `;
        }).join('');
    }
}

function populateUniversities() {
    const universities = new Set(labData.map(lab => lab.institution).filter(Boolean));
    const sortedUniversities = Array.from(universities).sort();

    sortedUniversities.forEach(uni => {
        const option = document.createElement('option');
        option.value = uni;
        option.textContent = uni;
        universitySelect.appendChild(option);
    });
}

function populateCountries() {
    const countries = new Set(labData.map(lab => getCountryName(lab.country)).filter(Boolean));
    const sortedCountries = Array.from(countries).sort();

    sortedCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

function renderLabs() {
    labsGrid.innerHTML = '';

    let filteredLabs = labData.filter(lab => {
        // Region Filter
        let labRegion = lab.region || '';
        const regionMatch = currentRegion === 'all' ||
            (labRegion && labRegion.includes(currentRegion)) ||
            (currentRegion === 'North America' && lab.country.includes('United States')); // Fallback

        // Search Filter
        const searchMatch = !searchQuery ||
            (lab.pi && lab.pi.toLowerCase().includes(searchQuery)) ||
            (lab.institution && lab.institution.toLowerCase().includes(searchQuery)) ||
            (lab.country && lab.country.toLowerCase().includes(searchQuery));

        // University Filter
        const uniMatch = !currentUniversity || lab.institution === currentUniversity;

        // Country Filter
        const countryMatch = !currentCountry || getCountryName(lab.country) === currentCountry;

        return regionMatch && searchMatch && uniMatch && countryMatch;
    });

    // Sorting
    filteredLabs.sort((a, b) => {
        if (currentSort === 'name') {
            return (a.pi || '').localeCompare(b.pi || '');
        } else if (currentSort === 'institution') {
            return (a.institution || '').localeCompare(b.institution || '');
        }
        return 0;
    });

    if (filteredLabs.length === 0) {
        labsGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>No labs found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
        return;
    }

    filteredLabs.forEach(lab => {
        const card = createLabCard(lab);
        labsGrid.appendChild(card);
    });
}

function createLabCard(lab) {
    const article = document.createElement('article');
    article.className = 'lab-card';

    // Website button
    let websiteBtn = '';
    if (lab.website && lab.website.toLowerCase() !== 'na') {
        websiteBtn = `
                <button onclick="trackClick('${lab.pi}', '${lab.website}')" class="lab-link" style="border:none; cursor:pointer;">
                    <i class="fa-solid fa-globe"></i> Lab Website
                </button>
            `;
    }

    article.innerHTML = `
            <div class="lab-header">
                <div class="lab-info">
                    <div class="lab-institution">${lab.institution || 'Unknown Institution'}</div>
                    <h2 class="lab-pi">${lab.pi || 'Unknown PI'}</h2>
                    <div class="lab-location">
                        <span class="fi fi-${getCountryCode(lab.country)}"></span>
                        <span>${getCountryName(lab.country) || ''}</span>
                    </div>
                </div>
                ${lab.image ? `<img src="${lab.image}" alt="${lab.pi}" class="pi-image">` : ''}
            </div>

            <div class="lab-links">
                ${websiteBtn}
            </div>
        `;

    return article;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Helper functions for flags
function getCountryCode(countryString) {
    if (!countryString) return '';
    // Extract country name (remove emoji if present)
    const countryName = getCountryName(countryString);

    const countryMap = {
        'United States': 'us',
        'China': 'cn',
        'Germany': 'de',
        'United Kingdom': 'gb',
        'Switzerland': 'ch',
        'Canada': 'ca',
        'France': 'fr',
        'Japan': 'jp',
        'Israel': 'il',
        'Spain': 'es',
        'Netherlands': 'nl',
        'Sweden': 'se',
        'Denmark': 'dk',
        'Italy': 'it',
        'Australia': 'au',
        'South Korea': 'kr',
        'Singapore': 'sg',
        'Austria': 'at',
        'Belgium': 'be',
        'Finland': 'fi',
        'Norway': 'no',
        'India': 'in',
        'Brazil': 'br',
        'Poland': 'pl',
        'Portugal': 'pt',
        'Czech Republic': 'cz',
        'Chile': 'cl',
        'Slovenia': 'si',
        'Saudi Arabia': 'sa',
        'Taiwan': 'tw'
    };

    return countryMap[countryName] || 'xx';
}

function getCountryName(countryString) {
    if (!countryString) return '';
    // Remove emojis and trim
    return countryString.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').trim();
}

// Start
init();

// --- JOB BOARD LOGIC ---

// Variables moved to top

// Variables moved to top

function renderJobs() {
    if (!jobsGrid) return;

    jobsGrid.innerHTML = '';

    const filteredJobs = jobsData.filter(job => {
        const matchesType = jobTypeFilter === 'all' || job.position.type === jobTypeFilter;
        const matchesSearch = !jobSearchQuery ||
            job.position.title.toLowerCase().includes(jobSearchQuery) ||
            job.labInfo.pi.toLowerCase().includes(jobSearchQuery) ||
            job.description.summary.toLowerCase().includes(jobSearchQuery) ||
            (job.tags && job.tags.some(tag => tag.toLowerCase().includes(jobSearchQuery)));

        return matchesType && matchesSearch;
    });

    if (filteredJobs.length === 0) {
        jobsGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">💼</div>
                <h3>No positions found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    filteredJobs.forEach(job => {
        jobsGrid.appendChild(createJobCard(job));
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'job-card';

    const typeLabel = {
        'phd': 'PhD Student',
        'postdoc': 'Postdoc',
        'research-scientist': 'Research Scientist',
        'faculty': 'Faculty'
    }[job.position.type] || job.position.type;

    card.innerHTML = `
        <div class="job-header">
            <div class="job-type-badge ${job.position.type}">${typeLabel}</div>
            <div class="job-date">Deadline: ${job.position.deadline || 'Open'}</div>
        </div>
        <h3 class="job-title">${job.position.title}</h3>
        <div class="job-lab-info">
            <strong>${job.labInfo.pi}</strong> @ ${job.labInfo.institution}
            <span class="fi fi-${getCountryCode(job.labInfo.country)}"></span>
        </div>
        <p class="job-summary">${truncateText(job.description.summary, 150)}</p>
        <div class="job-tags">
            ${(job.tags || []).map(tag => `<span class="job-tag">#${tag}</span>`).join('')}
        </div>
        <a href="${job.application.url}" target="_blank" class="apply-btn">Apply Now <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    `;

    return card;
}

// Update Event Listeners for Jobs
const jobSearchInput = document.getElementById('jobSearchInput');
const jobTypeSelect = document.getElementById('jobTypeSelect');

if (jobSearchInput) {
    jobSearchInput.addEventListener('input', (e) => {
        jobSearchQuery = e.target.value.toLowerCase();
        renderJobs();
    });
}

if (jobTypeSelect) {
    jobTypeSelect.addEventListener('change', (e) => {
        jobTypeFilter = e.target.value;
        renderJobs();
    });
}

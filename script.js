import labData from './data.js';

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

let currentRegion = 'all';
let searchQuery = '';
let currentUniversity = '';
let currentCountry = '';
let currentSort = 'name';

// Initialize
function init() {
    updateStats();
    populateUniversities();
    populateCountries();
    loadTheme();
    renderLabs();
    setupEventListeners();
}

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
        `}).join('');
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
            <a href="${lab.website}" target="_blank" class="lab-link">
                <i class="fa-solid fa-globe"></i> Lab Website
            </a>
        `;
    }

    article.innerHTML = `
        <div class="lab-header">
            <div class="lab-institution">${lab.institution || 'Unknown Institution'}</div>
            <h2 class="lab-pi">${lab.pi || 'Unknown PI'}</h2>
            <div class="lab-location">
                <span class="fi fi-${getCountryCode(lab.country)}"></span>
                <span>${getCountryName(lab.country) || ''}</span>
            </div>
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

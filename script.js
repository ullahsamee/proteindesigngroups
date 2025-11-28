import labData from './data.js';

const labsGrid = document.getElementById('labsGrid');
const searchInput = document.getElementById('searchInput');
const regionTabs = document.getElementById('regionTabs');
const tabBtns = document.querySelectorAll('.tab-btn');
const themeToggle = document.getElementById('themeToggle');
const universitySelect = document.getElementById('universitySelect');
const sortSelect = document.getElementById('sortSelect');

// Stats Elements
const totalLabsEl = document.getElementById('totalLabs');
const totalCountriesEl = document.getElementById('totalCountries');
const topRegionEl = document.getElementById('topRegion');

let currentRegion = 'all';
let searchQuery = '';
let currentUniversity = '';
let currentSort = 'name';

// Initialize
function init() {
    updateStats();
    populateUniversities();
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

            // Update filter
            currentRegion = e.target.dataset.region;

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

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderLabs();
    });

    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
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
    labData.forEach(lab => {
        if (lab.region) {
            regionCounts[lab.region] = (regionCounts[lab.region] || 0) + 1;
        }
    });

    // Sort and get top 5, excluding 'Global'
    const sortedRegions = Object.entries(regionCounts)
        .filter(([region]) => region !== 'Global')
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);

    const topRegionsList = document.getElementById('topRegionsList');
    if (topRegionsList) {
        topRegionsList.innerHTML = sortedRegions.map(([region, count]) => {
            let displayRegion = region;
            let displayCount = count;

            if (region === 'Asia') {
                displayRegion = '🇨🇳 China';
                displayCount = 47;
            } else if (region === 'North America') {
                displayRegion = '🇺🇸 North America';
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

function renderLabs() {
    labsGrid.innerHTML = '';

    let filteredLabs = labData.filter(lab => {
        // Region Filter
        let labRegion = lab.region || '';
        const regionMatch = currentRegion === 'all' ||
            (labRegion && labRegion.includes(currentRegion)) ||
            (currentRegion === 'North America' && lab.country === 'United States');

        // Search Filter
        const searchMatch = !searchQuery ||
            (lab.pi && lab.pi.toLowerCase().includes(searchQuery)) ||
            (lab.institution && lab.institution.toLowerCase().includes(searchQuery)) ||
            (lab.country && lab.country.toLowerCase().includes(searchQuery));

        // University Filter
        const uniMatch = !currentUniversity || lab.institution === currentUniversity;

        return regionMatch && searchMatch && uniMatch;
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
            <a href="${lab.website}" target="_blank" class="btn-link btn-website">
                <i class="fa-solid fa-globe"></i> Lab Website
            </a>
        `;
    }

    article.innerHTML = `
        <div class="lab-header">
            <div class="lab-institution">${lab.institution || 'Unknown Institution'}</div>
            <h2 class="lab-pi">${lab.pi || 'Unknown PI'}</h2>
            <div class="lab-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${lab.country || ''}</span>
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

// Start
init();

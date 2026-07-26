'use strict';

const playerData = {
  2008: {
    first:  { name: 'Cristiano Ronaldo', rank: '1st', goals: 42, assists: 10, kp: 1.8, dribbles: 3.5, bc: 12, rating: 8.20 },
    second: { name: 'Lionel Messi',      rank: '2nd', goals: 16, assists: 13, kp: 2.1, dribbles: 4.0, bc: 15, rating: 8.00 },
    third:  { name: 'Fernando Torres',   rank: '3rd', goals: 33, assists:  4, kp: 1.0, dribbles: 1.5, bc:  8, rating: 7.60 }
  },
  2009: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 47, assists: 14, kp: 2.5, dribbles: 4.5, bc: 20, rating: 8.67 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 26, assists:  9, kp: 2.0, dribbles: 3.0, bc: 14, rating: 8.10 },
    third:  { name: 'Xavi',              rank: '3rd', goals: 10, assists: 22, kp: 3.2, dribbles: 1.0, bc: 18, rating: 7.90 }
  },
  2010: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 60, assists: 17, kp: 2.8, dribbles: 5.0, bc: 25, rating: 8.54 },
    second: { name: 'Andrés Iniesta',    rank: '2nd', goals:  9, assists: 15, kp: 2.2, dribbles: 3.0, bc: 12, rating: 7.80 },
    third:  { name: 'Xavi',              rank: '3rd', goals:  8, assists: 20, kp: 3.1, dribbles: 0.8, bc: 16, rating: 7.80 }
  },
  2011: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 59, assists: 30, kp: 3.0, dribbles: 5.2, bc: 35, rating: 8.60 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 53, assists: 15, kp: 1.9, dribbles: 2.5, bc: 18, rating: 8.20 },
    third:  { name: 'Xavi',              rank: '3rd', goals: 14, assists: 15, kp: 2.8, dribbles: 1.0, bc: 15, rating: 7.90 }
  },
  2012: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 91, assists: 22, kp: 2.7, dribbles: 5.5, bc: 30, rating: 8.80 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 63, assists: 13, kp: 1.8, dribbles: 2.2, bc: 16, rating: 8.30 },
    third:  { name: 'Andrés Iniesta',    rank: '3rd', goals:  8, assists: 18, kp: 2.4, dribbles: 3.2, bc: 14, rating: 7.90 }
  },
  2013: {
    first:  { name: 'Cristiano Ronaldo', rank: '1st', goals: 69, assists: 15, kp: 2.0, dribbles: 2.5, bc: 18, rating: 8.35 },
    second: { name: 'Lionel Messi',      rank: '2nd', goals: 45, assists: 16, kp: 2.5, dribbles: 4.8, bc: 22, rating: 8.40 },
    third:  { name: 'Franck Ribéry',     rank: '3rd', goals: 22, assists: 18, kp: 2.8, dribbles: 4.0, bc: 15, rating: 8.10 }
  },
  2014: {
    first:  { name: 'Cristiano Ronaldo', rank: '1st', goals: 61, assists: 21, kp: 2.2, dribbles: 2.2, bc: 22, rating: 8.40 },
    second: { name: 'Lionel Messi',      rank: '2nd', goals: 58, assists: 22, kp: 3.0, dribbles: 5.0, bc: 25, rating: 8.50 },
    third:  { name: 'Arjen Robben',      rank: '3rd', goals: 21, assists: 15, kp: 2.5, dribbles: 4.2, bc: 18, rating: 8.10 }
  },
  2015: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 52, assists: 26, kp: 3.3, dribbles: 5.5, bc: 35, rating: 8.60 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 57, assists: 17, kp: 1.8, dribbles: 1.8, bc: 16, rating: 8.20 },
    third:  { name: 'Neymar Jr.',        rank: '3rd', goals: 41, assists: 16, kp: 2.8, dribbles: 4.8, bc: 20, rating: 8.30 }
  },
  2016: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 51, assists: 25, kp: 3.5, dribbles: 5.1, bc: 32, rating: 8.45 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 55, assists: 17, kp: 1.5, dribbles: 1.5, bc: 15, rating: 8.10 },
    third:  { name: 'Luis Suárez',       rank: '3rd', goals: 59, assists: 22, kp: 1.8, dribbles: 1.2, bc: 20, rating: 8.20 }
  },
  2017: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 54, assists: 16, kp: 3.2, dribbles: 5.3, bc: 28, rating: 8.50 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 53, assists: 13, kp: 1.6, dribbles: 1.4, bc: 14, rating: 8.10 },
    third:  { name: 'Neymar Jr.',        rank: '3rd', goals: 30, assists: 20, kp: 3.5, dribbles: 6.2, bc: 22, rating: 8.40 }
  },
  2018: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 51, assists: 19, kp: 3.4, dribbles: 5.0, bc: 34, rating: 8.60 },
    second: { name: 'Cristiano Ronaldo', rank: '2nd', goals: 49, assists: 13, kp: 1.5, dribbles: 1.6, bc: 15, rating: 8.00 },
    third:  { name: 'Luka Modrić',       rank: '3rd', goals:  4, assists: 10, kp: 2.0, dribbles: 1.8, bc: 10, rating: 7.60 }
  },
  2019: {
    first:  { name: 'Lionel Messi',      rank: '1st', goals: 50, assists: 16, kp: 3.1, dribbles: 5.4, bc: 29, rating: 8.50 },
    second: { name: 'Kylian Mbappé',     rank: '2nd', goals: 39, assists: 15, kp: 2.0, dribbles: 3.5, bc: 18, rating: 8.00 },
    third:  { name: 'Cristiano Ronaldo', rank: '3rd', goals: 39, assists: 10, kp: 1.3, dribbles: 1.5, bc: 12, rating: 7.80 }
  },
  2020: {
    first:  { name: 'Robert Lewandowski', rank: '1st', goals: 45, assists: 10, kp: 1.5, dribbles: 1.2, bc: 12, rating: 8.10 },
    second: { name: 'Cristiano Ronaldo',  rank: '2nd', goals: 41, assists:  6, kp: 1.1, dribbles: 1.3, bc: 10, rating: 7.80 },
    third:  { name: 'Lionel Messi',       rank: '3rd', goals: 26, assists: 24, kp: 3.0, dribbles: 4.5, bc: 22, rating: 8.40 }
  },
  2021: {
    first:  { name: 'Lionel Messi',        rank: '1st', goals: 40, assists: 15, kp: 2.9, dribbles: 4.8, bc: 25, rating: 8.30 },
    second: { name: 'Robert Lewandowski',  rank: '2nd', goals: 69, assists: 10, kp: 1.2, dribbles: 1.0, bc: 15, rating: 8.10 },
    third:  { name: 'Karim Benzema',       rank: '3rd', goals: 38, assists: 14, kp: 2.0, dribbles: 1.5, bc: 18, rating: 7.90 }
  },
  2022: {
    first:  { name: 'Lionel Messi',  rank: '1st', goals: 35, assists: 30, kp: 3.0, dribbles: 3.5, bc: 30, rating: 8.25 },
    second: { name: 'Kylian Mbappé', rank: '2nd', goals: 56, assists: 17, kp: 2.0, dribbles: 3.2, bc: 20, rating: 8.00 },
    third:  { name: 'Luka Modrić',   rank: '3rd', goals:  8, assists:  9, kp: 2.2, dribbles: 1.5, bc: 12, rating: 7.60 }
  },
  2023: {
    first:  { name: 'Erling Haaland', rank: '1st', goals: 52, assists:  9, kp: 0.8, dribbles: 0.5, bc: 10, rating: 7.60 },
    second: { name: 'Lionel Messi',   rank: '2nd', goals: 28, assists: 12, kp: 2.5, dribbles: 3.0, bc: 18, rating: 8.00 },
    third:  { name: 'Kylian Mbappé',  rank: '3rd', goals: 52, assists: 14, kp: 1.8, dribbles: 3.5, bc: 15, rating: 7.90 }
  },
  2024: {
    first:  { name: 'Vinícius Júnior',  rank: '1st', goals: 24, assists: 11, kp: 2.4, dribbles: 3.8, bc: 20, rating: 7.66 },
    second: { name: 'Rodri',            rank: '2nd', goals: 10, assists: 12, kp: 2.1, dribbles: 1.5, bc: 10, rating: 7.80 },
    third:  { name: 'Jude Bellingham',  rank: '3rd', goals: 23, assists: 13, kp: 2.0, dribbles: 2.2, bc: 15, rating: 7.70 }
  },
  2025: {
    first:  { name: 'Lamine Yamal', rank: '1st', goals: 16, assists: 11, kp: 2.8, dribbles: 3.5, bc: 22, rating: 8.23 },
    second: { name: 'Harry Kane',   rank: '2nd', goals: 36, assists:  8, kp: 1.5, dribbles: 1.0, bc: 14, rating: 8.14 },
    third:  { name: 'Michael Olise',rank: '3rd', goals: 15, assists: 19, kp: 2.9, dribbles: 3.8, bc: 18, rating: 7.84 }
  }
};

// Normalization peaks (historical maxima across all years)
const PEAKS = { goals: 91, assists: 30, kp: 3.5, dribbles: 6.2, bc: 35, ratingMin: 7.5, ratingMax: 8.8 };

// Chart palette
const PALETTE = [
  { border: '#c5a059', bg: 'rgba(197,160,89,0.2)',  fill: true,  dash: []     },
  { border: '#9ca3af', bg: 'rgba(156,163,175,0.1)', fill: false, dash: [5, 5] },
  { border: '#b45309', bg: 'rgba(180, 83, 9, 0.1)', fill: false, dash: [2, 2] }
];

const CARD_COLORS = [
  { border: '#c5a059', bg: 'rgba(197,160,89,0.08)' },
  { border: '#9ca3af', bg: 'rgba(156,163,175,0.08)' },
  { border: '#b45309', bg: 'rgba(180,83,9,0.08)'    }
];

// --- State ------------------------------------------------------------------
let radarChartInstance = null;
let trendChartInstance = null;
let currentYear = 2012;

// --- DOM refs ---------------------------------------------------------------
const yearSelectorEl   = document.getElementById('year-selector');
const dashboardEl      = document.getElementById('comparison-dashboard');
const cardsContainerEl = document.getElementById('player-cards-container');
const displayYearEl    = document.getElementById('display-year');
const chartLegendEl    = document.getElementById('chart-legend');
const ctxRadar         = document.getElementById('radarChart').getContext('2d');
const ctxTrend         = document.getElementById('trendChart').getContext('2d');

// --- Helpers ----------------------------------------------------------------
function normalize(p) {
  return [
    (p.goals    / PEAKS.goals)    * 100,
    (p.assists  / PEAKS.assists)  * 100,
    (p.kp       / PEAKS.kp)       * 100,
    (p.dribbles / PEAKS.dribbles) * 100,
    (p.bc       / PEAKS.bc)       * 100,
    ((p.rating - PEAKS.ratingMin) / (PEAKS.ratingMax - PEAKS.ratingMin)) * 100
  ];
}

function buildPlayerCard(p, idx) {
  const { border, bg } = CARD_COLORS[idx];
  const isFirst = idx === 0;

  const card = document.createElement('div');
  card.className = 'stat-card';
  card.style.borderLeftColor = border;
  card.style.background      = `linear-gradient(135deg, ${bg} 0%, #ffffff 60%)`;

  card.innerHTML = `
    <div class="stat-card-header">
      <div>
        <span class="stat-card-rank">${p.rank} Place</span>
        <span class="stat-card-name">${p.name}</span>
      </div>
      <div style="text-align:right">
        <span class="stat-card-rating-value" style="color:${isFirst ? '#c5a059' : '#374151'}">${p.rating.toFixed(2)}</span>
        <span class="stat-card-rating-label">Rating</span>
      </div>
    </div>
    <div class="stat-card-stats">
      <div><span>${p.goals}</span><span>Goals</span></div>
      <div><span>${p.assists}</span><span>Assists</span></div>
      <div><span>${p.kp}</span><span>Key P.</span></div>
      <div><span>${p.dribbles}</span><span>Dribs</span></div>
      <div><span>${p.bc}</span><span>Big Ch.</span></div>
    </div>
  `;
  return card;
}

// --- Year Selector ----------------------------------------------------------
function createYearButtons() {
  Object.keys(playerData).forEach(year => {
    const btn = document.createElement('button');
    btn.textContent = year;
    btn.className   = 'year-btn' + (Number(year) === currentYear ? ' active' : '');
    btn.setAttribute('aria-pressed', String(Number(year) === currentYear));
    btn.addEventListener('click', () => selectYear(Number(year)));
    yearSelectorEl.appendChild(btn);
  });
}

function selectYear(year) {
  if (year === currentYear) return;
  currentYear = year;

  yearSelectorEl.querySelectorAll('.year-btn').forEach(btn => {
    const active = Number(btn.textContent) === year;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  updateUI(year);
}

// --- UI Update --------------------------------------------------------------
function updateUI(year) {
  const data = playerData[year];
  const players = [data.first, data.second, data.third];

  // Fade out → update → fade in
  dashboardEl.style.opacity = '0';

  setTimeout(() => {
    displayYearEl.textContent = year;

    // Rebuild player cards with DOM API (no innerHTML splicing)
    cardsContainerEl.replaceChildren(...players.map(buildPlayerCard));

    updateRadar(players);
    dashboardEl.style.opacity = '1';
  }, 280);
}

// --- Radar Chart ------------------------------------------------------------
function updateRadar(players) {
  const labels   = ['Goals', 'Assists', 'Key Passes', 'Dribbles', 'Big Chances', 'Rating'];
  const datasets = players.map((p, i) => ({
    label:              `${p.rank}: ${p.name}`,
    data:               normalize(p),
    backgroundColor:    PALETTE[i].bg,
    borderColor:        PALETTE[i].border,
    pointBackgroundColor: PALETTE[i].border,
    borderWidth:        i === 0 ? 3 : 2,
    borderDash:         PALETTE[i].dash,
    fill:               PALETTE[i].fill
  }));

  // Legend
  chartLegendEl.replaceChildren(...datasets.map(d => {
    const item  = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot" style="background:${d.borderColor}"></span>
                      <span class="legend-label">${d.label}</span>`;
    return item;
  }));

  if (radarChartInstance) {
    radarChartInstance.data.datasets = datasets;
    radarChartInstance.update('active');
  } else {
    radarChartInstance = new Chart(ctxRadar, {
      type: 'radar',
      data: { labels, datasets },
      options: {
        maintainAspectRatio: false,
        animation: { duration: 400 },
        scales: {
          r: {
            angleLines:  { color: 'rgba(0,0,0,0.1)' },
            grid:        { color: 'rgba(0,0,0,0.05)' },
            pointLabels: { font: { size: 10, weight: 'bold' }, color: '#666' },
            ticks:       { display: false, max: 100, min: 0 }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.dataset.label} — Relative Peak Score`
            }
          }
        }
      }
    });
  }
}

// --- Trend Chart ------------------------------------------------------------
function renderTrendChart() {
  const years      = Object.keys(playerData);
  const goalData   = years.map(y => playerData[y].first.goals);
  const ratingData = years.map(y => playerData[y].first.rating);

  trendChartInstance = new Chart(ctxTrend, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Goals (1st Place)',
          data:  goalData,
          borderColor:     '#ef4444',
          backgroundColor: 'rgba(239,68,68,0.15)',
          yAxisID:   'y',
          tension:   0.4,
          pointRadius: 4,
          fill: true
        },
        {
          label: 'Match Rating (1st Place)',
          data:  ratingData,
          borderColor:     '#c5a059',
          backgroundColor: 'rgba(197,160,89,0.15)',
          yAxisID:   'y1',
          tension:   0.4,
          pointRadius: 4,
          fill: true
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'bottom',
          labels:   { color: '#94a3b8', font: { size: 10 }, usePointStyle: true }
        }
      },
      scales: {
        x:  {
          grid:  { display: false },
          ticks: { color: '#94a3b8', maxRotation: 45 }
        },
        y:  {
          type: 'linear', display: true, position: 'left',
          grid:  { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: 'Goals', color: '#94a3b8' }
        },
        y1: {
          type: 'linear', display: true, position: 'right',
          grid:  { drawOnChartArea: false },
          ticks: { color: '#94a3b8' },
          title: { display: true, text: 'Rating', color: '#94a3b8' }
        }
      }
    }
  });
}

// --- Hamburger Menu --------------------------------------------------------
function initHamburger() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
  }

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('.nav-link-item').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && e.target !== hamburger) closeMenu();
  });

  // Close menu if window resizes to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMenu();
  });
}

// --- Bootstrap --------------------------------------------------------------
function init() {
  createYearButtons();
  updateUI(currentYear);
  renderTrendChart();
  initHamburger();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

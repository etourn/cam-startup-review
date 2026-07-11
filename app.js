const startups = [
  { name: 'Wonder Ventures', sector: 'Tourism', stage: 'Early', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Flexible, meaningful travel experiences connecting visitors with local communities and sustainable destinations.', support: 'B2B partners, hotels, guides, restaurants, and marketing strategy mentors.', supportTag: 'Partnerships', funding: 'Bootstrapped', website: 'wonderventures.kh (demo)' },
  { name: 'Zoneer', sector: 'PropTech', stage: 'Early', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Digital property management platform replacing paper notes, Excel sheets, and scattered messaging.', support: 'Law firms, insurance partners, mentors, and investment partners.', supportTag: 'Investment', funding: 'Pre-seed raised', website: 'zoneer.kh (demo)' },
  { name: 'HikaruLab', sector: 'F&B', stage: 'Revenue', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'One-stop solution for cafe and bakery shops, starting with classic-grade matcha powder.', support: 'Distribution partners, cafes, marketing and distribution mentors.', supportTag: 'Distribution', funding: 'Revenue-generating', website: 'hikarulab.kh (demo)' },
  { name: 'QlinicOS', sector: 'HealthTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'AI-powered clinical operations platform for documentation, triage, and patient care coordination.', support: 'Healthcare mentors, clinic/hospital pilots, telecom/public sector partners.', supportTag: 'Pilot programs', funding: 'Prototype stage', website: 'qlinicos.kh (demo)' },
  { name: 'VADATA', sector: 'Data', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Market insights platform helping early-stage founders make faster, smarter market decisions.', support: 'Government data partners, researchers, licensing and verification advisors.', supportTag: 'Partnerships', funding: 'Prototype stage', website: 'vadata.kh (demo)' },
  { name: 'Byte Lab', sector: 'EdTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Robotic solutions and educational robotics kits for schools and hands-on learning.', support: 'Educational partners and supply chain partners.', supportTag: 'Distribution', funding: 'Prototype stage', website: 'bytelab.kh (demo)' },
  { name: 'LoopIt', sector: 'FoodTech', stage: 'Pilot', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Platform helping cafes, bakeries, supermarkets and marts sell end-of-day food at discounted prices.', support: 'Cafes, bakeries, supermarkets, universities, and pilot partners.', supportTag: 'Pilot programs', funding: 'Piloting', website: 'loopit.kh (demo)' },
  { name: 'MiniLab', sector: 'EdTech', stage: 'Revenue', founder: 'Sample Founder', location: 'Cambodia', desc: 'Plug-and-play robotics and IoT kits turning classrooms into creative labs.', support: 'Private schools, retail distribution, and local manufacturing partners.', supportTag: 'Distribution', funding: 'Revenue-generating', website: 'minilab.kh (demo)' },
  { name: 'Tokkatot', sector: 'AgriTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Smart chicken farming system integrating IoT, automation, and AI for poultry households.', support: 'Agriculture experts, IoT advisors, cooperatives, and hardware suppliers.', supportTag: 'Mentorship', funding: 'Prototype stage', website: 'tokkatot.kh (demo)' },
  { name: 'PayNear', sector: 'FinTech', stage: 'Pilot', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Mobile micro-payment platform for informal market vendors without bank accounts.', support: 'Banking partners, regulatory advisors, and seed investors.', supportTag: 'Investment', funding: 'Raising pre-seed', website: 'paynear.kh (demo)' },
  { name: 'StaffLoop', sector: 'HRTech', stage: 'Early', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Shift-based hiring platform connecting hospitality businesses with verified part-time workers.', support: 'Hospitality partners, verification agencies, and recruiters.', supportTag: 'Talent & hiring', funding: 'Bootstrapped', website: 'staffloop.kh (demo)' }
];

const ecosystem = [
  { category: 'Startups', linkOut: true, note: 'All profiled startups appear in the full directory above.' },
  { category: 'Investors', actors: [
    { name: 'Mekong Angel Network', role: 'Angel investor network', website: 'mekongangels.kh (demo)' },
    { name: 'Khmer Ventures Capital', role: 'Early-stage VC fund', website: 'khmerventures.kh (demo)' },
    { name: 'Emerging Markets Innovation Fund', role: 'Corporate venture arm', website: 'emif.kh (demo)' }
  ]},
  { category: 'Incubators & Accelerators', actors: [
    { name: 'TechoStartup Center', role: 'National incubator program', website: 'techostartup.gov.kh (demo)' },
    { name: 'Impact Hub Phnom Penh', role: 'Accelerator & startup programs', website: 'impacthub.kh (demo)' },
    { name: 'Smart Axiata Digital Accelerator', role: 'Corporate accelerator', website: 'smart.com.kh (demo)' }
  ]},
  { category: 'Universities', actors: [
    { name: 'Royal University of Phnom Penh', role: 'Entrepreneurship center', website: 'rupp.edu.kh (demo)' },
    { name: 'Institute of Technology of Cambodia', role: 'STEM & engineering programs', website: 'itc.edu.kh (demo)' },
    { name: 'CamEd Business School', role: 'Career & startup readiness office', website: 'cam-ed.com (demo)' }
  ]},
  { category: 'Government Actors', actors: [
    { name: 'Ministry of Economy and Finance', role: 'Digital economy policy body', website: 'mef.gov.kh (demo)' },
    { name: 'National Council for Science, Technology & Innovation', role: 'Innovation & STI strategy', website: 'ncsti.gov.kh (demo)' },
    { name: 'General Department of Digital Economy', role: 'Startup support programs', website: 'dtc.gov.kh (demo)' }
  ]},
  { category: 'Corporate Innovation', actors: [
    { name: 'ABA Bank Innovation Lab', role: 'Banking innovation partner', website: 'ababank.com (demo)' },
    { name: 'Smart Axiata', role: 'Telecom innovation partner', website: 'smart.com.kh (demo)' },
    { name: 'Wing Bank', role: 'Fintech corporate partner', website: 'wingbank.com.kh (demo)' }
  ]},
  { category: 'Development Partners', actors: [
    { name: 'UNDP Cambodia', role: 'Innovation & SDG programs', website: 'undp.org/cambodia (demo)' },
    { name: 'GIZ Cambodia', role: 'Private sector development', website: 'giz.de (demo)' },
    { name: 'The Asia Foundation', role: 'Entrepreneurship ecosystem grants', website: 'asiafoundation.org (demo)' }
  ]},
  { category: 'Co-working Spaces', actors: [
    { name: 'The Desk Cowork', role: 'Coworking & community space', website: 'thedesk.asia (demo)' },
    { name: 'Emerald Hub', role: 'Coworking & event venue', website: 'emeraldhub.kh (demo)' }
  ]},
  { category: 'Media & Events', actors: [
    { name: 'Cambodia Startup Review', role: 'Ecosystem media & demo days', website: 'csr.toptimize.kh (demo)' },
    { name: 'Techo Startup Demo Day', role: 'Annual pitch competition', website: 'techostartup.gov.kh (demo)' }
  ]}
];

const insights = [
  { title: 'Why Cambodia Needs a Startup Intelligence Platform', category: 'Ecosystem Analysis', summary: 'A neutral platform can help partners see trends, gaps, and opportunities beyond informal networks.' },
  { title: 'Founder Story: Building for Local Problems', category: 'Founder Story', summary: 'How Cambodian founders are turning practical challenges into startup opportunities.' },
  { title: 'What Sponsors Want from Startup Ecosystem Platforms', category: 'Sponsor Insight', summary: 'Visibility, credibility, ESG alignment, and curated access to innovation pipelines.' }
];

const events = [
  { date: 'Mar 14, 2026', time: '2:00 PM', name: 'CSR Founding Partner Roundtable', organizer: 'Toptimize', type: 'Roundtable', venue: 'Phnom Penh (in person)', description: 'A closed-door session introducing CSR to prospective Founding Partners and gathering early feedback on the sponsorship model.', registrationLink: '#partners' },
  { date: 'Apr 9, 2026', time: '9:00 AM', name: 'Cambodia Startup Mapping Sprint', organizer: 'CSR', type: 'Workshop', venue: 'Hybrid', description: 'A working session with ecosystem actors to validate and expand the startup and ecosystem actor database.', registrationLink: '#submit' },
  { date: 'May 22, 2026', time: '6:00 PM', name: 'Founder Visibility Demo Night', organizer: 'CSR Partners', type: 'Demo Day', venue: 'Phnom Penh (in person)', description: 'Selected startups pitch to investors and corporate partners, with CSR profiling each founder story afterward.', registrationLink: '#submit' }
];

/* ============================================================
   Google Forms configuration
   ------------------------------------------------------------
   Replace FORM_ID and every entry.XXXXXXXXX below with the real
   values from your Google Form.

   How to get them:
   1. Open your Google Form -> click the three dots -> "Get pre-filled link".
   2. Fill in each field with a placeholder answer and click "Get link".
   3. Copy the generated URL. It looks like:
      https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?usp=pp_url&entry.111111111=x&entry.222222222=y
   4. FORM_ID is the long string after /d/e/ and before /viewform.
   5. Each entry.NNNNNNNNN=... pair tells you which entry ID maps to
      which field, in the order you filled them in.
   6. The submission action URL is the same but with "formResponse"
      instead of "viewform":
      https://docs.google.com/forms/d/e/FORM_ID/formResponse
   ============================================================ */

const GOOGLE_FORMS_CONFIG = {
  startupForm: {
    actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScgX6HGAoLq4IZRso6A3bbVVWHRpZYc0Jo64k8c0Wh0IgdXrg/formResponse',
    fields: {
      startupName: 'entry.2106712111',
      founderName: 'entry.1316012350',
      email: 'entry.568754407',
      sector: 'entry.570246667',
      website: 'entry.856772887',
      description: 'entry.1771432047',
      support: 'entry.985532554'
    }
  },
  partnerForm: {
    actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSej_E33pex8YftuCxZdOUfzJClOJ9QvFeMdlw284Ci_sCimdA/formResponse',
    fields: {
      organization: 'entry.2106712111',
      contactPerson: 'entry.1316012350',
      email: 'entry.568754407',
      phone: 'entry.982477544',
      interest: 'entry.570246667',
      message: 'entry.1771432047'
    }
  },
  feedbackForm: {
    actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScULjc4fJ8pzRlEE2wcXHKPsRu4mYqubB3W6i6BQJawVxJC6Q/formResponse',
    fields: {
      role: 'entry.2106712111',
      useful: 'entry.1316012350',
      feature: 'entry.568754407'
    }
  }
};

const startupGrid = document.getElementById('startupGrid');
const searchInput = document.getElementById('searchInput');
const sectorFilter = document.getElementById('sectorFilter');
const stageFilter = document.getElementById('stageFilter');
const supportFilter = document.getElementById('supportFilter');
const startupCount = document.getElementById('startupCount');

function uniqueValues(key) { return [...new Set(startups.map(s => s[key]))].sort(); }
function populateFilters() {
  uniqueValues('sector').forEach(v => sectorFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
  uniqueValues('stage').forEach(v => stageFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
  uniqueValues('supportTag').forEach(v => supportFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
}
function initials(name) { return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(); }
function renderStartups() {
  const term = searchInput.value.toLowerCase();
  const sector = sectorFilter.value;
  const stage = stageFilter.value;
  const supportTag = supportFilter.value;
  const filtered = startups.filter(s => {
    const matchesTerm = [s.name, s.sector, s.stage, s.desc, s.support].join(' ').toLowerCase().includes(term);
    const matchesSector = sector === 'all' || s.sector === sector;
    const matchesStage = stage === 'all' || s.stage === stage;
    const matchesSupport = supportTag === 'all' || s.supportTag === supportTag;
    return matchesTerm && matchesSector && matchesStage && matchesSupport;
  });
  startupCount.textContent = `${filtered.length} startup profile${filtered.length === 1 ? '' : 's'} shown`;
  if (!filtered.length) {
    startupGrid.innerHTML = `<div class="empty-state">No startups match these filters yet. Try clearing a filter, or <a href="#submit">submit a startup</a> to add one.</div>`;
    return;
  }
  startupGrid.innerHTML = filtered.map(s => `
    <article class="startup-card">
      <div class="startup-card-head">
        <div class="avatar">${initials(s.name)}</div>
        <div>
          <h3>${s.name}</h3>
          <p class="muted small">${s.location} • ${s.founder}</p>
        </div>
      </div>
      <div class="tags"><span class="tag">${s.sector}</span><span class="tag gold">${s.stage}</span><span class="tag funding">${s.funding}</span></div>
      <p>${s.desc}</p>
      <div class="support"><strong>Support needed:</strong> ${s.support}</div>
      <span class="card-link">${s.website}</span>
    </article>
  `).join('');
}

const donutColors = ['#0f172a', '#1e3a8a', '#1d4ed8', '#0891b2', '#0d9488', '#f59e0b', '#d97706', '#92400e', '#64748b'];

function getEcosystemSlices() {
  return ecosystem.map(e => e.linkOut
    ? { category: e.category, count: startups.length, type: 'startups' }
    : { category: e.category, count: e.actors.length, type: 'actors', actors: e.actors }
  );
}

function buildBigDonut(slices) {
  const size = 260, stroke = 34;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const cx = size / 2, cy = size / 2;
  const total = slices.reduce((sum, s) => sum + s.count, 0);
  let offset = 0;
  const circles = slices.map((s, i) => {
    const seg = (s.count / total) * c;
    const color = donutColors[i % donutColors.length];
    const dashoffset = -offset;
    offset += seg;
    return `<circle class="donut-seg" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${Math.max(seg - 3, 1)} ${c}" stroke-dashoffset="${dashoffset}"
      data-index="${i}" data-category="${s.category}" data-count="${s.count}"></circle>`;
  }).join('');
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" class="donut big">
    <g transform="rotate(-90 ${cx} ${cy})">${circles}</g>
    <text x="${cx}" y="${cy - 10}" text-anchor="middle" dominant-baseline="central" class="donut-label">${total}</text>
    <text x="${cx}" y="${cy + 16}" text-anchor="middle" dominant-baseline="central" class="donut-sublabel">organizations mapped</text>
  </svg>`;
}

function renderEcosystemDetail(slice) {
  const panel = document.getElementById('ecosystemDetail');
  const entries = slice.type === 'startups'
    ? startups.map(s => ({ name: s.name, role: `${s.sector} · ${s.stage}`, website: s.website }))
    : slice.actors;
  panel.innerHTML = `
    <div class="detail-header"><h3>${slice.category}</h3><span class="badge">${slice.count} org${slice.count === 1 ? '' : 's'}</span></div>
    <div class="detail-list">
      ${entries.map(a => `
        <div class="actor-item">
          <div class="actor-name">${a.name}</div>
          <div class="muted small">${a.role}</div>
          <div class="card-link small">${a.website}</div>
        </div>
      `).join('')}
    </div>`;
}

function renderEcosystemSearchResults(term) {
  const panel = document.getElementById('ecosystemDetail');
  const slices = getEcosystemSlices();
  const matches = [];
  slices.forEach(s => {
    const entries = s.type === 'startups'
      ? startups.map(st => ({ name: st.name, role: `${st.sector} · ${st.stage}`, website: st.website }))
      : s.actors;
    entries.filter(a => [a.name, a.role].join(' ').toLowerCase().includes(term))
      .forEach(a => matches.push({ ...a, category: s.category }));
  });
  if (!matches.length) {
    panel.innerHTML = `<div class="empty-state">No organizations match "${term}".</div>`;
    return;
  }
  panel.innerHTML = `
    <div class="detail-header"><h3>Search results</h3><span class="badge">${matches.length} match${matches.length === 1 ? '' : 'es'}</span></div>
    <div class="detail-list">
      ${matches.map(a => `
        <div class="actor-item">
          <div class="actor-name">${a.name} <span class="muted small">— ${a.category}</span></div>
          <div class="muted small">${a.role}</div>
          <div class="card-link small">${a.website}</div>
        </div>
      `).join('')}
    </div>`;
}

function renderEcosystem() {
  const term = (document.getElementById('ecosystemSearch')?.value || '').toLowerCase();
  const chartCol = document.getElementById('ecosystemChart');
  const slices = getEcosystemSlices();
  chartCol.innerHTML = buildBigDonut(slices);
  if (term) {
    renderEcosystemSearchResults(term);
  } else {
    document.getElementById('ecosystemDetail').innerHTML = `<p class="muted">Hover a slice for a quick look. Click a slice to see the full list of organizations.</p>`;
  }
}
function renderInsights() {
  document.getElementById('insightGrid').innerHTML = insights.map(i => `
    <article class="insight-card"><span class="badge">${i.category}</span><h3>${i.title}</h3><p>${i.summary}</p><a href="#" class="read-more">Read preview →</a></article>
  `).join('');
}
function renderEvents() {
  document.getElementById('eventList').innerHTML = events.map(e => `
    <article class="event-card">
      <div class="event-date">${e.date}<div class="muted small">${e.time}</div></div>
      <div>
        <div class="tags"><span class="badge event-type">${e.type}</span></div>
        <h3>${e.name}</h3>
        <p class="muted small">${e.organizer} • ${e.venue}</p>
        <p>${e.description}</p>
      </div>
      <a class="button secondary small" href="${e.registrationLink}">Register interest</a>
    </article>
  `).join('');
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}
function handleForms() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const type = form.id.replace('Form','');
      const data = Object.fromEntries(new FormData(form).entries());
      const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
      submissions.unshift({ type, data, date: new Date().toLocaleString() });
      localStorage.setItem('csrSubmissions', JSON.stringify(submissions.slice(0, 6)));
      form.reset();
      updateSubmissionLog();
      alert('Thank you. This prototype captured your submission locally for testing.');
    });
  });
}
function updateSubmissionLog() {
  const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
  const log = document.getElementById('submissionLog');
  if (!submissions.length) { log.innerHTML = '<p class="muted">No prototype submissions yet.</p>'; return; }
  log.innerHTML = submissions.map(s => `<div class="log-item">${s.type} submission captured • ${s.date}</div>`).join('');
}
function setupEcosystemTooltip() {
  const tooltip = document.createElement('div');
  tooltip.id = 'ecoTooltip';
  tooltip.className = 'eco-tooltip';
  document.body.appendChild(tooltip);
  const chartCol = document.getElementById('ecosystemChart');

  function showTooltip(seg, x, y) {
    tooltip.innerHTML = `<strong>${seg.dataset.category}</strong><span>${seg.dataset.count} organization${seg.dataset.count === '1' ? '' : 's'}</span><span class="tooltip-link">Click to see full details</span>`;
    tooltip.style.left = `${x + 16}px`;
    tooltip.style.top = `${y + 16}px`;
    tooltip.classList.add('visible');
  }
  function hideTooltip() { tooltip.classList.remove('visible'); }

  chartCol.addEventListener('mouseover', e => {
    const seg = e.target.closest('.donut-seg');
    if (seg) showTooltip(seg, e.clientX, e.clientY);
  });
  chartCol.addEventListener('mousemove', e => {
    const seg = e.target.closest('.donut-seg');
    if (seg) { tooltip.style.left = `${e.clientX + 16}px`; tooltip.style.top = `${e.clientY + 16}px`; }
  });
  chartCol.addEventListener('mouseout', e => {
    if (e.target.closest('.donut-seg')) hideTooltip();
  });
  chartCol.addEventListener('click', e => {
    const seg = e.target.closest('.donut-seg');
    if (!seg) return;
    const slices = getEcosystemSlices();
    const slice = slices[Number(seg.dataset.index)];
    if (slice) renderEcosystemDetail(slice);
    hideTooltip();
  });
}

function setupMobileNav() {
  document.getElementById('mobileMenu').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
}

populateFilters();
renderStartups();
renderEcosystem();
renderInsights();
renderEvents();
setupTabs();
handleForms();
updateSubmissionLog();
setupMobileNav();
setupEcosystemTooltip();
[searchInput, sectorFilter, stageFilter, supportFilter].forEach(el => el.addEventListener('input', renderStartups));
document.getElementById('ecosystemSearch').addEventListener('input', renderEcosystem);
/* ============================================================
   CSR data model
   Matches the approved Day 1 data model. Sample/demo data only.
   ============================================================ */

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
  { category: 'Startups', items: ['Digital services', 'Tourism', 'HealthTech', 'AgriTech'] },
  { category: 'Investors', items: ['Angel investors', 'VCs', 'Corporate venture teams'] },
  { category: 'Incubators & Accelerators', items: ['University programs', 'Corporate accelerators', 'Startup hubs'] },
  { category: 'Universities', items: ['Entrepreneurship centers', 'STEM departments', 'Career offices'] },
  { category: 'Government Actors', items: ['Digital economy bodies', 'Startup support programs', 'Skills agencies'] },
  { category: 'Corporate Innovation', items: ['Telecoms', 'Banks', 'Technology firms'] },
  { category: 'Development Partners', items: ['Donors', 'NGOs', 'International agencies'] },
  { category: 'Media & Events', items: ['Startup media', 'Demo days', 'Pitch events'] }
];
 
const insights = [
  { title: 'Why Cambodia Needs a Startup Intelligence Platform', category: 'Ecosystem Analysis', summary: 'A neutral platform can help partners see trends, gaps, and opportunities beyond informal networks.' },
  { title: 'Founder Story: Building for Local Problems', category: 'Founder Story', summary: 'How Cambodian founders are turning practical challenges into startup opportunities.' },
  { title: 'What Sponsors Want from Startup Ecosystem Platforms', category: 'Sponsor Insight', summary: 'Visibility, credibility, ESG alignment, and curated access to innovation pipelines.' }
];
 
const events = [
  { date: 'Mar 2026', name: 'CSR Founding Partner Roundtable', organizer: 'Toptimize', type: 'Roundtable', location: 'Phnom Penh' },
  { date: 'Apr 2026', name: 'Cambodia Startup Mapping Sprint', organizer: 'CSR', type: 'Workshop', location: 'Hybrid' },
  { date: 'May 2026', name: 'Founder Visibility Demo Night', organizer: 'CSR Partners', type: 'Demo Day', location: 'Phnom Penh' }
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

/* ============================================================
   DOM references
   ============================================================ */

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
 
function renderEcosystem() {
  document.getElementById('ecosystemGrid').innerHTML = ecosystem.map(e => `
    <article class="ecosystem-card"><h3>${e.category}</h3><ul>${e.items.map(i => `<li>${i}</li>`).join('')}</ul></article>
  `).join('');
}
function renderInsights() {
  document.getElementById('insightGrid').innerHTML = insights.map(i => `
    <article class="insight-card"><span class="badge">${i.category}</span><h3>${i.title}</h3><p>${i.summary}</p><a href="#" class="read-more">Read preview →</a></article>
  `).join('');
}
function renderEvents() {
  document.getElementById('eventList').innerHTML = events.map(e => `
    <article class="event-card"><div class="event-date">${e.date}</div><div><h3>${e.name}</h3><p class="muted">${e.organizer} • ${e.location}</p></div><span class="badge event-type">${e.type}</span></article>
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

/* ============================================================
   Form handling: submit silently to Google Forms, log locally
   for on-page confirmation only (not as the system of record).
   ============================================================ */

function submitToGoogleForm(formKey, data) {
  const config = GOOGLE_FORMS_CONFIG[formKey];
  if (!config) return Promise.resolve();

  const body = new FormData();
  Object.entries(config.fields).forEach(([localName, entryId]) => {
    if (data[localName] !== undefined) {
      body.append(entryId, data[localName]);
    }
  });

  // no-cors: Google Forms doesn't return a readable response, this is
  // the standard pattern for posting to formResponse from another origin.
  return fetch(config.actionUrl, { method: 'POST', mode: 'no-cors', body })
    .catch(err => console.error('Google Form submission failed:', err));
}

function handleForms() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const type = form.id.replace('Form', '');
      const data = Object.fromEntries(new FormData(form).entries());

      await submitToGoogleForm(form.id, data);

      const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
      submissions.unshift({ type, date: new Date().toLocaleString() });
      localStorage.setItem('csrSubmissions', JSON.stringify(submissions.slice(0, 6)));
      form.reset();
      updateSubmissionLog();
      alert('Thank you. Your submission has been sent.');
    });
  });
}

function updateSubmissionLog() {
  const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
  const log = document.getElementById('submissionLog');
  if (!submissions.length) { log.innerHTML = '<p class="muted">No submissions yet this session.</p>'; return; }
  log.innerHTML = submissions.map(s => `<div class="log-item">${s.type} submission sent &bull; ${s.date}</div>`).join('');
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
[searchInput, sectorFilter, stageFilter, supportFilter].forEach(el => el.addEventListener('input', renderStartups));

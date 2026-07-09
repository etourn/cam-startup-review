/* ============================================================
   CSR data model
   Matches the approved Day 1 data model. Sample/demo data only.
   ============================================================ */

const startups = [
  { name: 'Wonder Ventures', sector: 'Tourism', stage: 'Early', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Flexible, meaningful travel experiences connecting visitors with local communities and sustainable destinations.', problem: 'Travelers struggle to find authentic, community-based trips beyond standard tour packages.', website: 'wonderventures.example', funding: 'Bootstrapped', support: 'B2B partners, hotels, guides, restaurants, and marketing strategy mentors.' },
  { name: 'Zoneer', sector: 'PropTech', stage: 'Early', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Digital property management platform replacing paper notes, Excel sheets, and scattered messaging.', problem: 'Small landlords and property managers rely on manual, error-prone record keeping.', website: 'zoneer.example', funding: 'Pre-seed', support: 'Law firms, insurance partners, mentors, and investment partners.' },
  { name: 'HikaruLab', sector: 'F&B', stage: 'Revenue', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'One-stop solution for cafe and bakery shops, starting with classic-grade matcha powder.', problem: 'Cafes struggle to source consistent, quality matcha at fair wholesale prices.', website: 'hikarulab.example', funding: 'Revenue-generating', support: 'Distribution partners, cafes, marketing and distribution mentors.' },
  { name: 'QlinicOS', sector: 'HealthTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'AI-powered clinical operations platform for documentation, triage, and patient care coordination.', problem: 'Clinics lose time on manual documentation instead of patient care.', website: 'qlinicos.example', funding: 'Seed (raising)', support: 'Healthcare mentors, clinic/hospital pilots, telecom/public sector partners.' },
  { name: 'VADATA', sector: 'Data', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Market insights platform helping early-stage founders make faster, smarter market decisions.', problem: 'Founders lack access to reliable, localized market data before making decisions.', website: 'vadata.example', funding: 'Pre-seed', support: 'Government data partners, researchers, licensing and verification advisors.' },
  { name: 'Byte Lab', sector: 'EdTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Robotic solutions and educational robotics kits for schools and hands-on learning.', problem: 'Schools lack affordable, hands-on STEM learning tools.', website: 'bytelab.example', funding: 'Bootstrapped', support: 'Educational partners and supply chain partners.' },
  { name: 'LoopIt', sector: 'FoodTech', stage: 'Pilot', founder: 'Sample Founder', location: 'Phnom Penh', desc: 'Platform helping cafes, bakeries, supermarkets and marts sell end-of-day food at discounted prices.', problem: 'Food businesses throw away unsold inventory at the end of each day.', website: 'loopit.example', funding: 'Pre-seed', support: 'Cafes, bakeries, supermarkets, universities, and pilot partners.' },
  { name: 'MiniLab', sector: 'EdTech', stage: 'Revenue', founder: 'Sample Founder', location: 'Cambodia', desc: 'Plug-and-play robotics and IoT kits turning classrooms into creative labs.', problem: 'Teachers need ready-to-use STEM kits without technical setup overhead.', website: 'minilab.example', funding: 'Revenue-generating', support: 'Private schools, retail distribution, and local manufacturing partners.' },
  { name: 'Tokkatot', sector: 'AgriTech', stage: 'Prototype', founder: 'Sample Founder', location: 'Cambodia', desc: 'Smart chicken farming system integrating IoT, automation, and AI for poultry households.', problem: 'Smallholder poultry farmers lack tools to monitor flock health and conditions.', website: 'tokkatot.example', funding: 'Pre-seed', support: 'Agriculture experts, IoT advisors, cooperatives, and hardware suppliers.' }
];

// Ecosystem Actor: Organization name, category, description, website, contact, role in ecosystem
const ecosystemActors = [
  { org: 'Mekong Angels Network', category: 'Investors', description: 'Early-stage angel syndicate backing Cambodian founders.', website: 'mekongangels.example', contact: 'hello@mekongangels.example', role: 'Provides pre-seed and seed capital.' },
  { org: 'Impact Hub Phnom Penh', category: 'Incubators & Accelerators', description: 'Coworking and accelerator space supporting early founders.', website: 'impacthubpp.example', contact: 'programs@impacthubpp.example', role: 'Runs cohort-based incubation programs.' },
  { org: 'RUPP Entrepreneurship Center', category: 'Universities', description: 'University center connecting student founders with mentors.', website: 'rupp.example', contact: 'entrepreneurship@rupp.example', role: 'Sources early founder talent and campus programs.' },
  { org: 'Digital Economy & Society Council', category: 'Government Actors', description: 'National body coordinating Cambodia\u2019s digital economy policy.', website: 'dresc.example', contact: 'info@dresc.example', role: 'Sets policy and funding programs for the digital economy.' },
  { org: 'ABA Innovation Lab', category: 'Corporate Innovation', description: 'Banking-sector innovation team piloting fintech partnerships.', website: 'abalab.example', contact: 'innovation@abalab.example', role: 'Pilots and co-invests with fintech and payments startups.' },
  { org: 'Mekong Development Partners', category: 'Development Partners', description: 'International donor program funding SME and startup growth.', website: 'mdp.example', contact: 'grants@mdp.example', role: 'Funds ecosystem-building grants and technical assistance.' },
  { org: 'Startup Cambodia Media', category: 'Media & Events', description: 'Independent media covering the local founder community.', website: 'startupcambodia.example', contact: 'editor@startupcambodia.example', role: 'Covers founder stories and hosts demo events.' },
  { org: 'CamTech Ventures', category: 'Investors', description: 'Seed-to-Series A fund focused on Southeast Asian tech.', website: 'camtechvc.example', contact: 'deals@camtechvc.example', role: 'Leads and co-leads priced seed rounds.' }
];

// Article/Insight: Title, category, author, image, summary, body, date, tags
const insights = [
  { title: 'Why Cambodia Needs a Startup Intelligence Platform', category: 'Ecosystem Analysis', author: 'CSR Editorial Team', date: 'Jan 2026', tags: ['Ecosystem', 'Data'], summary: 'A neutral platform can help partners see trends, gaps, and opportunities beyond informal networks.', body: 'Cambodia\u2019s startup activity is real but scattered across informal networks, private group chats, and one-off event lists. A neutral, continuously updated platform lets founders, sponsors, and policymakers see the same picture \u2014 who exists, what stage they are at, and where the gaps are \u2014 instead of relying on who happens to be in the room.' },
  { title: 'Founder Story: Building for Local Problems', category: 'Founder Story', author: 'CSR Editorial Team', date: 'Feb 2026', tags: ['Founders', 'AgriTech'], summary: 'How Cambodian founders are turning practical challenges into startup opportunities.', body: 'The strongest early-stage companies in Cambodia are not copying regional trends \u2014 they are solving problems the founders lived through directly, from smallholder farming to informal retail. This piece profiles three founders building for problems they know first-hand.' },
  { title: 'What Sponsors Want from Startup Ecosystem Platforms', category: 'Sponsor Insight', author: 'CSR Editorial Team', date: 'Mar 2026', tags: ['Sponsors', 'Partnerships'], summary: 'Visibility, credibility, ESG alignment, and curated access to innovation pipelines.', body: 'Conversations with prospective Founding Partners point to four consistent asks: credible visibility, alignment with ESG and CSR commitments, curated (not overwhelming) access to relevant startups, and clear separation between sponsor content and editorial coverage.' }
];

// Event: Name, organizer, date, time, venue, type, description, registration link
const events = [
  { date: 'Mar 2026', time: '5:30 PM', name: 'CSR Founding Partner Roundtable', organizer: 'Toptimize', type: 'Roundtable', venue: 'Phnom Penh', description: 'Invite-only roundtable introducing CSR to prospective Founding Partners.', registrationLink: '#partners' },
  { date: 'Apr 2026', time: '9:00 AM', name: 'Cambodia Startup Mapping Sprint', organizer: 'CSR', type: 'Workshop', venue: 'Hybrid', description: 'A working session to crowdsource and verify startup profiles for the directory.', registrationLink: '#submit' },
  { date: 'May 2026', time: '6:00 PM', name: 'Founder Visibility Demo Night', organizer: 'CSR Partners', type: 'Demo Day', venue: 'Phnom Penh', description: 'Selected founders pitch to sponsors, investors, and ecosystem partners.', registrationLink: '#submit' }
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
const startupCount = document.getElementById('startupCount');

function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function uniqueValues(key) { return [...new Set(startups.map(s => s[key]))].sort(); }
function populateFilters() {
  uniqueValues('sector').forEach(v => sectorFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
  uniqueValues('stage').forEach(v => stageFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
}

function renderStartups() {
  const term = searchInput.value.toLowerCase();
  const sector = sectorFilter.value;
  const stage = stageFilter.value;
  const filtered = startups.filter(s => {
    const matchesTerm = [s.name, s.sector, s.stage, s.desc, s.problem, s.support].join(' ').toLowerCase().includes(term);
    const matchesSector = sector === 'all' || s.sector === sector;
    const matchesStage = stage === 'all' || s.stage === stage;
    return matchesTerm && matchesSector && matchesStage;
  });
  startupCount.textContent = `${filtered.length} startup profile${filtered.length === 1 ? '' : 's'} shown`;
  startupGrid.innerHTML = filtered.map(s => `
    <article class="startup-card">
      <div class="card-top">
        <span class="logo-placeholder">${initials(s.name)}</span>
        <div class="tags"><span class="tag">${s.sector}</span><span class="tag gold">${s.stage}</span></div>
      </div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <p class="problem"><strong>Problem solved:</strong> ${s.problem}</p>
      <p class="muted"><strong>Location:</strong> ${s.location} | <strong>Founder:</strong> ${s.founder}</p>
      <p class="muted"><strong>Funding:</strong> ${s.funding} | <strong>Website:</strong> ${s.website}</p>
      <div class="support"><strong>Support needed:</strong> ${s.support}</div>
    </article>
  `).join('');
}

function renderEcosystem() {
  const categories = [...new Set(ecosystemActors.map(a => a.category))];
  document.getElementById('ecosystemGrid').innerHTML = categories.map(cat => {
    const actors = ecosystemActors.filter(a => a.category === cat);
    return `
      <article class="ecosystem-card">
        <h3>${cat}</h3>
        ${actors.map(a => `
          <div class="actor">
            <p class="actor-name">${a.org}</p>
            <p class="muted">${a.description}</p>
            <p class="actor-role"><strong>Role:</strong> ${a.role}</p>
            <p class="muted small">${a.website} &middot; ${a.contact}</p>
          </div>
        `).join('')}
      </article>
    `;
  }).join('');
}

function renderInsights() {
  document.getElementById('insightGrid').innerHTML = insights.map((i, idx) => `
    <article class="insight-card">
      <div class="insight-image">${i.category}</div>
      <span class="badge">${i.category}</span>
      <h3>${i.title}</h3>
      <p class="muted small">${i.author} &middot; ${i.date}</p>
      <p>${i.summary}</p>
      <div class="tags">${i.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <p class="insight-body" id="insight-body-${idx}" hidden>${i.body}</p>
      <button type="button" class="read-more" data-target="insight-body-${idx}">Read preview &rarr;</button>
    </article>
  `).join('');

  document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const isHidden = target.hasAttribute('hidden');
      target.toggleAttribute('hidden');
      btn.textContent = isHidden ? 'Show less \u2191' : 'Read preview \u2192';
    });
  });
}

function renderEvents() {
  document.getElementById('eventList').innerHTML = events.map(e => `
    <article class="event-card">
      <div class="event-date">${e.date}<br><span class="event-time">${e.time}</span></div>
      <div>
        <h3>${e.name}</h3>
        <p class="muted">${e.organizer} &bull; ${e.venue}</p>
        <p class="muted small">${e.description}</p>
      </div>
      <div class="event-side">
        <span class="badge event-type">${e.type}</span>
        <a href="${e.registrationLink}" class="button secondary small">Register</a>
      </div>
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
[searchInput, sectorFilter, stageFilter].forEach(el => el.addEventListener('input', renderStartups));

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

const ecosystemChartData = [
  { key: 'gov', label: 'Government & Regulators', color: 'var(--eco-c1)', orgs: [
    ['Ministry of Economy and Finance', 'Policy'],
    ['Ministry of Post and Telecommunications', 'Regulator'],
    ['National Bank of Cambodia', 'Regulator'],
    ['General Department of Taxation', 'Policy'],
    ['Cambodia Investment Board (CDC)', 'Policy'],
    ['Ministry of Commerce', 'Regulator'],
    ['National ICT Development Authority', 'Policy'],
    ['Ministry of Industry, Science, Tech & Innovation', 'Policy'],
    ['Phnom Penh SEZ Authority', 'Regulator'],
    ['National Council for Sustainable Development', 'Policy']
  ]},
  { key: 'vc', label: 'Investors & VC Funds', color: 'var(--eco-c2)', orgs: [
    ['Insignia Ventures Partners', 'VC'],
    ['Genesis Capital', 'VC'],
    ['Mekong Business Initiative', 'Investor']
  ]},
  { key: 'acc', label: 'Accelerators & Incubators', color: 'var(--eco-c3)', orgs: [
    ['Impact Hub Phnom Penh', 'Incubator'],
    ['SmallWorld Cambodia', 'Accelerator'],
    ['Emerging Markets Consulting Labs', 'Accelerator']
  ]},
  { key: 'uni', label: 'Universities & Research', color: 'var(--eco-c4)', orgs: [
    ['Royal University of Phnom Penh', 'University'],
    ['Institute of Technology of Cambodia', 'University'],
    ['CamTech University', 'Research']
  ]},
  { key: 'cowork', label: 'Coworking & Innovation Hubs', color: 'var(--eco-c5)', orgs: [
    ['Lakehouse Coworking', 'Coworking'],
    ['Factory Phnom Penh', 'Innovation Hub'],
    ['Emerald Hub', 'Coworking']
  ]},
  { key: 'media', label: 'Media & Community', color: 'var(--eco-c6)', orgs: [
    ['Cambodia Startup Review', 'Media'],
    ['Techsauce Cambodia', 'Community'],
    ['Startup Cambodia FB Group', 'Community']
  ]},
  { key: 'corp', label: 'Corporates & Enterprise Partners', color: 'var(--eco-c7)', orgs: [
    ['Smart Axiata', 'Corporate'],
    ['ABA Bank', 'Corporate'],
    ['Wing Bank', 'Corporate'],
    ['Prince Group Digital', 'Corporate']
  ]},
  { key: 'ngo', label: 'NGOs & Development Partners', color: 'var(--eco-c8)', orgs: [
    ['USAID Cambodia', 'Development'],
    ['GIZ Cambodia', 'Development']
  ]},
  { key: 'prof', label: 'Professional Services & Mentors', color: 'var(--eco-c9)', orgs: [
    ['DFDL Legal', 'Legal'],
    ['Mekong Strategic Partners', 'Advisory']
  ]}
].map(d => ({ ...d, count: d.orgs.length }));

const insights = [
  {
    title: 'Why Cambodia Needs a Startup Intelligence Platform',
    category: 'Ecosystem Analysis',
    author: 'CSR Editorial Team',
    date: 'Feb 18, 2026',
    readTime: '4 min read',
    tags: ['Ecosystem', 'Visibility'],
    summary: 'A neutral platform can help partners see trends, gaps, and opportunities beyond informal networks.',
    body: [
      'Cambodia\u2019s startup ecosystem has grown quickly over the last few years, but most of what happens inside it is still tracked informally \u2014 through personal networks, scattered social posts, and word of mouth rather than any shared source of record.',
      'That makes it hard for founders to get discovered, hard for sponsors and investors to see the full picture, and hard for the ecosystem to tell its own story to a regional or global audience.',
      'A neutral, non-political platform that simply maps who exists and what is happening \u2014 without picking winners \u2014 can close that visibility gap for everyone at once.'
    ]
  },
  {
    title: 'Founder Story: Building for Local Problems',
    category: 'Founder Story',
    author: 'Sample Contributor',
    date: 'Mar 2, 2026',
    readTime: '3 min read',
    tags: ['Founder Story', 'Local Innovation'],
    summary: 'How Cambodian founders are turning practical challenges into startup opportunities.',
    body: [
      'Some of the most resilient Cambodian startups did not start from a pitch deck \u2014 they started from an everyday problem the founder ran into personally, whether that was managing a family shop, farming poultry, or finding shift work in hospitality.',
      'Building for a genuinely local problem, in the local context, often means a longer runway before the business looks "investable" by outside standards \u2014 but it also means the product fits the market from day one.',
      'This is a placeholder founder story for prototype testing. In production, this space would carry a real, permissioned founder interview.'
    ]
  },
  {
    title: 'What Sponsors Want from Startup Ecosystem Platforms',
    category: 'Sponsor Insight',
    author: 'CSR Editorial Team',
    date: 'Mar 20, 2026',
    readTime: '5 min read',
    tags: ['Sponsor Insight', 'ESG'],
    summary: 'Visibility, credibility, ESG alignment, and curated access to innovation pipelines.',
    body: [
      'When corporates and development partners evaluate ecosystem sponsorships, they are usually weighing four things: credible visibility, alignment with ESG or CSR goals, early access to a pipeline of founders, and confidence that the platform will stay editorially independent.',
      'That last point is often the deciding factor \u2014 sponsors want their name next to something trusted, which means the platform cannot let sponsorship influence rankings or coverage.',
      'CSR is designed around that separation from day one: sponsorship funds the platform\u2019s operations, but it never determines who gets covered or how.'
    ]
  }
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

/* ============================================================
   Analytics (placeholder)
   ------------------------------------------------------------
   Provider-agnostic event tracker. Every meaningful interaction
   below (form submissions, validation failures, filter usage,
   tab switches, ecosystem clicks, insight opens, CTA clicks)
   already calls trackEvent(name, props) — nothing else needs to
   change when a real provider is wired up.

   Right now ANALYTICS_ENABLED is false, so events just log to the
   console for visibility during development. To go live:
   1. Load a provider's script tag in index.html (GA4, Plausible, etc).
   2. Flip ANALYTICS_ENABLED to true below.
   3. Uncomment the relevant provider call inside trackEvent().
   ============================================================ */
const ANALYTICS_ENABLED = true;

function trackEvent(name, props = {}) {
  const payload = { event: name, ...props };
  if (!ANALYTICS_ENABLED) {
    console.info('[analytics:placeholder]', payload);
    return;
  }
  // GA4 (gtag.js):
  window.gtag?.('event', name, props);
  // Plausible:
  // window.plausible?.(name, { props });
  // Segment/other:
  // window.analytics?.track(name, props);
}

// Small debounce so free-typing in search/filter fields doesn't fire
// an analytics event per keystroke.
function debounce(fn, wait = 500) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

const startupGrid = document.getElementById('startupGrid');
const searchInput = document.getElementById('searchInput');
const sectorFilter = document.getElementById('sectorFilter');
const stageFilter = document.getElementById('stageFilter');
const supportFilter = document.getElementById('supportFilter');
const startupCount = document.getElementById('startupCount');

function uniqueValues(key) { return [...new Set(startups.map(s => s[key]))].sort(); }
function populateFilters() {
  if (!sectorFilter) return; // this page has no directory grid (e.g. homepage teaser only)
  uniqueValues('sector').forEach(v => sectorFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
  uniqueValues('stage').forEach(v => stageFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
  uniqueValues('supportTag').forEach(v => supportFilter.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
}
function initials(name) { return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(); }
function renderStartups() {
  if (!startupGrid) return; // this page has no directory grid (e.g. homepage teaser only)
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

// Ecosystem donut widget: scroll-linked reveal, hover quick-look, click for
// full org list, and a live search across all mapped organizations.
function initEcosystemChart() {
  const svg = document.getElementById('ecoDonutSvg');
  const track = document.getElementById('ecoScrollTrack');
  const legendEl = document.getElementById('ecoLegend');
  const totalNumEl = document.getElementById('ecoTotalNum');
  const infoCard = document.getElementById('ecoInfoCard');
  const searchInput = document.getElementById('ecosystemSearch');
  if (!svg || !track) return;

  const svgNS = 'http://www.w3.org/2000/svg';
  const cx = 150, cy = 150, r = 100, sw = 34, gap = 1.6;
  const total = ecosystemChartData.reduce((s, d) => s + d.count, 0);

  function polarToCartesian(cx, cy, r, angleDeg) {
    const a = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }
  function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, endAngle);
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }

  let angle = 0;
  const segEls = [];

  ecosystemChartData.forEach(d => {
    const sweep = (d.count / total) * 360;
    const startA = angle + gap / 2;
    const endA = angle + sweep - gap / 2;
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', describeArc(cx, cy, r, startA, endA));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', d.color);
    path.setAttribute('stroke-width', sw);
    path.setAttribute('stroke-linecap', 'round');
    path.classList.add('eco-segment');
    path.dataset.key = d.key;
    svg.appendChild(path);

    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    path.addEventListener('mouseenter', () => showQuickLook(d));
    path.addEventListener('mouseleave', () => { if (activeKey !== d.key) showDefault(); });
    path.addEventListener('click', () => selectSegment(d));

    segEls.push({ path, len, data: d });
    angle += sweep;

    const item = document.createElement('div');
    item.className = 'item';
    item.id = 'eco-legend-' + d.key;
    item.innerHTML = `<span class="sw" style="background:${d.color}"></span>${d.label}`;
    legendEl.appendChild(item);
  });

  const n = ecosystemChartData.length;
  track.style.height = (n * 55 + 100) + 'vh';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getTargetProgress() {
    const rect = track.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const progress = scrollable > 0 ? (-rect.top) / scrollable : (rect.top < 0 ? 1 : 0);
    return Math.max(0, Math.min(1, progress));
  }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  let smoothProgress = 0;
  function render() {
    const target = reduceMotion ? 1 : getTargetProgress();
    smoothProgress += (target - smoothProgress) * (reduceMotion ? 1 : 0.12);
    if (Math.abs(target - smoothProgress) < 0.0005) smoothProgress = target;

    let runningCount = 0;
    segEls.forEach((s, i) => {
      const windowStart = i / n;
      const windowSize = 1 / n;
      let local = (smoothProgress - windowStart) / windowSize;
      local = Math.max(0, Math.min(1, local));
      const eased = easeOutCubic(local);
      s.path.style.strokeDashoffset = s.len * (1 - eased);
      runningCount += s.data.count * eased;

      const legendItem = document.getElementById('eco-legend-' + s.data.key);
      if (legendItem) legendItem.classList.toggle('on', local > 0.05);
    });
    totalNumEl.textContent = Math.round(runningCount);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  let activeKey = null;

  function showDefault() {
    infoCard.innerHTML = `<p class="hint">Hover a slice for a quick look. Click a slice to see the full list of organizations.</p>`;
  }
  function showQuickLook(d) {
    if (activeKey) return;
    infoCard.innerHTML = `
      <div class="eco-info-head"><div class="dot" style="background:${d.color}"></div><div class="title">${d.label}</div></div>
      <div class="eco-info-count">${d.count} organization${d.count > 1 ? 's' : ''} mapped</div>
      <p class="hint" style="margin:0">Click this slice to see the full list.</p>`;
  }
  function selectSegment(d) {
    activeKey = d.key;
    segEls.forEach(s => s.path.classList.toggle('active', s.data.key === d.key));
    renderList(d);
    trackEvent('ecosystem_segment_click', { category: d.label, count: d.count });
  }
  function renderList(d) {
    const items = d.orgs.map(([name, role]) => `<li><span>${name}</span><span class="role">${role}</span></li>`).join('');
    infoCard.innerHTML = `
      <div class="eco-info-head"><div class="dot" style="background:${d.color}"></div><div class="title">${d.label}</div></div>
      <div class="eco-info-count">${d.count} organization${d.count > 1 ? 's' : ''} mapped</div>
      <ul class="eco-org-list">${items}</ul>`;
  }

  const trackEcosystemSearch = debounce(term => trackEvent('ecosystem_search', { term }));
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    trackEcosystemSearch(searchInput.value);
    if (!q) {
      activeKey = null;
      segEls.forEach(s => s.path.classList.remove('active'));
      showDefault();
      return;
    }
    const matches = [];
    ecosystemChartData.forEach(d => {
      d.orgs.forEach(([name, role]) => {
        if (name.toLowerCase().includes(q) || role.toLowerCase().includes(q) || d.label.toLowerCase().includes(q)) {
          matches.push({ name, role, label: d.label, color: d.color });
        }
      });
    });
    if (!matches.length) {
      infoCard.innerHTML = `<p class="hint">No organizations or roles match "${searchInput.value}".</p>`;
      return;
    }
    const items = matches.map(m => `<li><b>${m.name}</b><span>${m.role} · ${m.label}</span></li>`).join('');
    infoCard.innerHTML = `<ul class="eco-search-results">${items}</ul>`;
  });
}
const insightTints = [
  ['#0f172a', '#1e3a8a'],
  ['#1d4ed8', '#0891b2'],
  ['#0d9488', '#0f172a'],
  ['#92400e', '#f59e0b']
];

function renderInsights() {
  const [featured, ...rest] = insights;
  const featuredEl = document.getElementById('insightFeatured');
  if (featured) {
    const idx = 0;
    featuredEl.innerHTML = `
      <div class="insight-featured-media" style="--tint1:${insightTints[idx % insightTints.length][0]};--tint2:${insightTints[idx % insightTints.length][1]}">
        <span class="featured-tag">Recent post</span>
      </div>
      <div class="insight-featured-content">
        <div class="insight-meta"><span class="badge">${featured.category}</span><span class="muted small">${featured.date} • ${featured.readTime}</span></div>
        <h3>${featured.title}</h3>
        <p>${featured.summary}</p>
        <div class="tags">${featured.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="insight-footer">
          <span class="muted small">By ${featured.author}</span>
          <button type="button" class="read-more" data-insight="0">Read preview →</button>
        </div>
      </div>`;
  }

  // Only 3 demo articles exist right now, so this renders as a single
  // page with no pagination controls rather than faking extra pages of
  // duplicate content to match a template. Add pagination here once
  // there's enough real content to justify it.
  document.getElementById('insightGrid').innerHTML = rest.map((i, gridIdx) => {
    const realIdx = gridIdx + 1;
    const tint = insightTints[realIdx % insightTints.length];
    return `
    <article class="insight-card">
      <div class="insight-thumb" style="--tint1:${tint[0]};--tint2:${tint[1]}"><span>${i.category}</span></div>
      <div class="insight-card-body">
        <div class="insight-meta"><span class="muted small">${i.date} • ${i.readTime}</span></div>
        <h3>${i.title}</h3>
        <p>${i.summary}</p>
        <div class="tags">${i.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="insight-footer">
          <span class="muted small">By ${i.author}</span>
          <button type="button" class="read-more" data-insight="${realIdx}">Read preview →</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function openInsightModal(idx) {
  const i = insights[idx];
  if (!i) return;
  trackEvent('insight_open', { title: i.title, category: i.category });
  const overlay = document.getElementById('insightModalOverlay');
  const modal = document.getElementById('insightModal');
  modal.innerHTML = `
    <button type="button" class="modal-close" id="insightModalClose" aria-label="Close preview">✕</button>
    <div class="modal-meta"><span class="badge">${i.category}</span><span class="muted small">${i.date}</span><span class="muted small">By ${i.author}</span></div>
    <h3>${i.title}</h3>
    <div class="modal-body">${i.body.map(p => `<p>${p}</p>`).join('')}</div>
    <div class="tags modal-tags">${i.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <p class="muted small modal-demo-note">Sample content for prototype desirability testing — not a published article.</p>
  `;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('insightModalClose').addEventListener('click', closeInsightModal);
}
function closeInsightModal() {
  const overlay = document.getElementById('insightModalOverlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}
function setupInsightModal() {
  document.getElementById('insights').addEventListener('click', e => {
    const btn = e.target.closest('.read-more');
    if (btn) openInsightModal(Number(btn.dataset.insight));
  });
  const overlay = document.getElementById('insightModalOverlay');
  overlay.addEventListener('click', e => { if (e.target === overlay) closeInsightModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeInsightModal(); });
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
      trackEvent('form_tab_switch', { tab: btn.dataset.tab });
    });
  });
}

/* ============================================================
   Validation-ready interactions
   ------------------------------------------------------------
   Declarative rules per form, checked on submit (and re-checked
   per-field as the person types once a field has been flagged).
   Native browser validation is off (novalidate on each <form>)
   so every form gets the same inline-error styling and copy.
   ============================================================ */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,}$/;

const FORM_RULES = {
  startupForm: {
    startupName: { required: true, label: 'Startup name' },
    founderName: { required: true, label: 'Founder name' },
    email: { required: true, pattern: EMAIL_RE, message: 'Enter a valid email address.' },
    description: { required: true, minLength: 20, message: 'Give a few more words so reviewers know what the startup does (20+ characters).' },
    website: { pattern: /^https?:\/\/.+\..+/, message: 'Enter a full URL starting with http:// or https://, or leave this blank.' }
  },
  partnerForm: {
    organization: { required: true, label: 'Organization' },
    contactPerson: { required: true, label: 'Contact person' },
    email: { required: true, pattern: EMAIL_RE, message: 'Enter a valid email address.' },
    phone: { required: true, pattern: PHONE_RE, message: 'Enter a valid phone number.' }
  },
  feedbackForm: {
    feature: { required: true, minLength: 3, label: 'Most valuable feature' }
  }
};

function fieldErrorEl(field) { return field.closest('label')?.querySelector('.field-error') || null; }

function showFieldError(field, message) {
  field.classList.add('invalid');
  field.setAttribute('aria-invalid', 'true');
  const errEl = fieldErrorEl(field);
  if (errEl) { errEl.textContent = message; errEl.classList.add('visible'); }
}
function clearFieldError(field) {
  field.classList.remove('invalid');
  field.removeAttribute('aria-invalid');
  const errEl = fieldErrorEl(field);
  if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
}

// Validates one field against its rule; returns an error message, or '' if valid.
function checkField(field, rule) {
  const value = field.value.trim();
  if (rule.required && !value) return `${rule.label || 'This field'} is required.`;
  if (value && rule.minLength && value.length < rule.minLength) return rule.message || `${rule.label || 'This field'} is too short.`;
  if (value && rule.pattern && !rule.pattern.test(value)) return rule.message || `${rule.label || 'This field'} looks invalid.`;
  return '';
}

// Validates the whole form; shows/clears inline errors; returns list of invalid field names.
function validateForm(form) {
  const rules = FORM_RULES[form.id] || {};
  const invalidFields = [];
  Object.entries(rules).forEach(([name, rule]) => {
    const field = form.elements[name];
    if (!field) return;
    const message = checkField(field, rule);
    if (message) { showFieldError(field, message); invalidFields.push(name); }
    else clearFieldError(field);
  });
  return invalidFields;
}

// Live-clear a field's error as soon as it becomes valid again, so people
// aren't stuck staring at a red box after they've already fixed it.
function setupLiveValidation() {
  Object.entries(FORM_RULES).forEach(([formId, rules]) => {
    const form = document.getElementById(formId);
    if (!form) return;
    Object.entries(rules).forEach(([name, rule]) => {
      const field = form.elements[name];
      if (!field) return;
      field.addEventListener('input', () => {
        if (!field.classList.contains('invalid')) return;
        if (!checkField(field, rule)) clearFieldError(field);
      });
    });
  });
}

function showFormMessage(form, type, text) {
  const msgEl = form.querySelector('.form-message');
  if (!msgEl) return;
  msgEl.textContent = text;
  msgEl.className = `form-message ${type}`;
  msgEl.hidden = false;
}
function hideFormMessage(form) {
  const msgEl = form.querySelector('.form-message');
  if (msgEl) msgEl.hidden = true;
}

function handleForms() {
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      hideFormMessage(form);
      const type = form.id.replace('Form','');

      // Honeypot check — bots fill every field, humans never see this one.
      if (form.elements.companyWebsite && form.elements.companyWebsite.value) {
        trackEvent('form_spam_blocked', { form: form.id });
        return; // silently drop — don't tell the bot it was caught
      }

      const invalidFields = validateForm(form);
      if (invalidFields.length) {
        trackEvent('form_validation_error', { form: form.id, fields: invalidFields });
        showFormMessage(form, 'error', 'Please fix the highlighted fields before submitting.');
        const firstInvalid = form.elements[invalidFields[0]];
        firstInvalid.focus();
        firstInvalid.classList.add('shake');
        firstInvalid.addEventListener('animationend', () => firstInvalid.classList.remove('shake'), { once: true });
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      trackEvent('form_submit_attempt', { form: form.id });

      // Send to the matching Google Form, if configured.
      const config = GOOGLE_FORMS_CONFIG[form.id];
      let sendFailed = false;
      if (config) {
        const gBody = new URLSearchParams();
        Object.entries(config.fields).forEach(([localKey, entryId]) => {
          if (data[localKey] !== undefined) gBody.append(entryId, data[localKey]);
        });
        try {
          // Google Forms' formResponse endpoint doesn't send CORS headers,
          // so the browser can't read the response — mode: 'no-cors' is
          // expected here and the request still lands in the Sheet.
          await fetch(config.actionUrl, { method: 'POST', mode: 'no-cors', body: gBody });
        } catch (err) {
          sendFailed = true;
          console.error('Google Forms submission failed:', err);
        }
      } else {
        console.warn(`No GOOGLE_FORMS_CONFIG entry for form id "${form.id}" — submission was only saved locally.`);
      }

      // Also keep a local log for demo/testing visibility in this prototype.
      const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
      submissions.unshift({ type, data, date: new Date().toLocaleString() });
      localStorage.setItem('csrSubmissions', JSON.stringify(submissions.slice(0, 6)));
      form.reset();
      updateSubmissionLog();

      if (sendFailed) {
        trackEvent('form_submit_error', { form: form.id });
        showFormMessage(form, 'error', 'Something went wrong sending this — please try again in a moment.');
      } else {
        trackEvent('form_submit_success', { form: form.id });
        showFormMessage(form, 'success', 'Thank you — your submission has been sent.');
      }
    });
  });
}
function updateSubmissionLog() {
  const submissions = JSON.parse(localStorage.getItem('csrSubmissions') || '[]');
  const log = document.getElementById('submissionLog');
  if (!submissions.length) { log.innerHTML = '<p class="muted">No prototype submissions yet.</p>'; return; }
  log.innerHTML = submissions.map(s => `<div class="log-item">${s.type} submission captured • ${s.date}</div>`).join('');
}
function setupMobileNav() {
  document.getElementById('mobileMenu').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
}

// Any CTA with data-tab-link jumps to the Get Involved section AND opens
// the matching form tab, so a "Request Partnership Discussion" button
// actually lands on a visible, active Partner Inquiry form instead of a
// hidden .form-panel.
function setupTabLinks() {
  document.querySelectorAll('[data-tab-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      trackEvent('cta_click', { target: link.dataset.tabLink });
      const btn = document.querySelector(`.tab-btn[data-tab="${link.dataset.tabLink}"]`);
      if (btn) btn.click();
      document.getElementById('submit').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Keep the hero "sample profiles" metric honest as the sample data set grows,
// instead of a hardcoded number that can silently drift out of sync.
populateFilters();
renderStartups();
initEcosystemChart();
renderInsights();
renderEvents();
setupTabs();
handleForms();
setupLiveValidation();
updateSubmissionLog();
setupMobileNav();
setupInsightModal();
setupTabLinks();

const trackDirectoryFilter = debounce(() => trackEvent('directory_filter', {
  term: searchInput?.value,
  sector: sectorFilter?.value,
  stage: stageFilter?.value,
  supportTag: supportFilter?.value
}));
if (searchInput) {
  [searchInput, sectorFilter, stageFilter, supportFilter].forEach(el => el.addEventListener('input', () => { renderStartups(); trackDirectoryFilter(); }));
}


(function () {
  const items = document.querySelectorAll('.feature-item');
  const card = document.getElementById('featureCard');
  const tag = document.getElementById('featureTag');
  const name = document.getElementById('featureName');
  const desc = document.getElementById('featureDesc');

  if (!items.length || !card) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        items.forEach((i) => i.classList.remove('active'));
        entry.target.classList.add('active');

        card.style.opacity = 0;
        setTimeout(() => {
          tag.textContent = entry.target.dataset.tag;
          name.textContent = entry.target.dataset.name;
          desc.textContent = entry.target.dataset.desc;
          card.style.opacity = 1;
        }, 200);
      }
    });
  }, {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0
  });

  items.forEach((item) => observer.observe(item));
})();

(function () {
  const featureSection = document.getElementById('feature');
  const card = document.getElementById('featureCard');
  if (!featureSection || !card) return;

  const popObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        card.classList.add('in-view');
        popObserver.unobserve(featureSection); // only animate once
      }
    });
  }, {
    threshold: 0.3 // fires once ~30% of the section is visible
  });

  popObserver.observe(featureSection);
})();
# Cambodia Startup Review — Homepage (Day 2 draft, revised per Day 1 sign-off)

Static HTML/CSS/JS build — continuing on the original approved prototype,
per the Day 1 tool choice decision. Visual direction (navy/gold/white,
Inter, pill buttons, rounded cards) already matched the approved brief, so
that stayed the same. What changed:

- **Data model** expanded to match the approved field list for Startup
  Profile, Ecosystem Actor, Event, and Article/Insight
- **Ecosystem section** rebuilt as real actor cards (organization, category,
  description, website, contact, role) instead of category tag-lists
- **Startup Submission form**: added Website/Social and Support Needed
- **Partner Inquiry form**: added Phone/Telegram
- **Backend**: forms now POST to Google Forms instead of saving to
  localStorage. See setup steps below — this is the one piece that needs
  your input before it's live.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8080
```

Visit http://localhost:8080

## Deploy to Vercel

```bash
npx vercel
```

Static site, no build step — Vercel will serve it as-is.

## Required setup: connect the Google Form

The forms are wired to submit silently to a Google Form (which lands in a
connected Google Sheet), but the placeholder IDs in `app.js` need to be
replaced with your real ones:

1. Create a Google Form with the matching fields (see `GOOGLE_FORMS_CONFIG`
   at the top of `app.js` for the exact field names needed per form).
2. In the Form editor, open the three-dot menu → **Get pre-filled link**.
3. Fill in each field with a placeholder answer, click **Get link**, and
   copy the generated URL. It'll look like:
   `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?usp=pp_url&entry.111111111=x&entry.222222222=y`
4. The long string after `/d/e/` and before `/viewform` is your **FORM_ID**.
5. Each `entry.NNNNNNNNN=...` pair tells you which entry ID maps to which
   field (in the order you filled them in).
6. In `app.js`, for each of the three forms (`startupForm`, `partnerForm`,
   `feedbackForm`):
   - Set `actionUrl` to `https://docs.google.com/forms/d/e/FORM_ID/formResponse`
     (same ID, `formResponse` instead of `viewform`)
   - Replace each `entry.REPLACE_ME` with the real entry ID for that field
7. You'll need a separate Google Form (and separate set of entry IDs) for
   each of the three forms, since they capture different fields — or one
   combined form with a "submission type" question, if you'd rather manage
   just one Sheet.

Until this is done, submissions will fail silently (the on-page "Thank you"
message still shows, but nothing reaches a Sheet) — so this should be the
first thing checked before sharing the link externally.

## Sitemap reference

- **Explore & discover** (Startup Directory, Ecosystem Map, Insights,
  Events): browsing, search, and filtering only — nothing here is saved
  or sent anywhere. The directory search/filter only changes what's
  displayed on the page.
- **Convert & engage** (Submit Startup, Partner Inquiry, Feedback): the
  only place user data flows into the system, via the Google Form
  connection above.

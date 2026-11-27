# Prisca Vo, MBA - Academic Portfolio

Read-only, bilingual (English / Vietnamese) academic portfolio for **Vo Thi Minh Phuong (Prisca Vo), MBA**, Lecturer & Subject Leader.

Built with React 19, Vite, Tailwind CSS v4, React Router, react-i18next and Motion.

> Working on this repo with an AI assistant? Start with **`PROJECT_HISTORY.md`**: decisions, timeline, open items and tool pitfalls.

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (React hooks rules included) |
| `npm run check:i18n` | Fails if the Vietnamese files miss or add keys compared with English |

## Pages

| Route | Page | Content file |
|---|---|---|
| `/` | Home: profile, objective, education, stats, highlights | `src/i18n/locales/*/home.json` |
| `/teaching` | Teaching: appointments, courses, awards, certifications | `teaching.json` |
| `/research` | Research: publication, PhD proposal, interests | `research.json` |
| `/industry` | Industry experience | `industry.json` |
| `/talks` | Talks & Community | `talks.json` |
| `/evidence` | Evidence portfolio (cards by evidence code) | `evidence.json` + `EVIDENCE_FILES` in `src/config/site.js` |

Old URLs (`/about`, `/recognition`, `/talks-events`, `/other`) redirect to the new pages.

## Project structure

```
public/                      static files served as-is (favicon, later: images/, files/)
scripts/check-i18n.js        EN/VI key parity check
src/
  main.jsx                   entry: fonts, global CSS, i18n, <App />
  App.jsx                    route table
  config/site.js             language-neutral data: contact, nav, CV / portrait / evidence URLs
  i18n/
    index.js                 i18next setup (auto-loads every locales/<lang>/<page>.json)
    locales/en/*.json        English text, one file per page + common.json
    locales/vi/*.json        Vietnamese text, same keys
  layouts/RootLayout.jsx     header, page transition, footer
  pages/                     one file per route
  components/
    layout/                  Header, Footer, LanguageSwitcher, scroll progress, back to top
    ui/                      Button, Card, Chip, PageHeader, Timeline, Accordion, Portrait...
    motion/                  Reveal, CountUp, PageTransition
    ErrorBoundary.jsx        isolates a crashing page and logs the component stack
  hooks/useContent.js        t() + list() helpers per page namespace, document title
  lib/utils.js               cn() class merge helper, easing
  styles/index.css           Tailwind import + brand tokens (@theme)
```

## Editing content

- **Text:** edit the JSON file for that page in **both** `locales/en` and `locales/vi`, then run `npm run check:i18n`. No visible text is hard-coded in components.
- **Portrait:** put the photo in `public/images/` and set `SITE.portraitUrl` in `src/config/site.js` (e.g. `'/images/portrait.jpg'`).
- **CV download:** put the PDF in `public/files/` and set `SITE.cvUrl`.
- **Evidence scans:** put files in `public/evidence/` and fill `EVIDENCE_FILES` in `src/config/site.js` (e.g. `'E-04': { thumb: '/evidence/E-04.jpg', file: '/evidence/E-04.pdf' }`).

## Brand

| Role | Colour | Usage |
|---|---|---|
| Base | White `#FFFFFF`, Navy 50 `#F3F5F7` | page and alternate section backgrounds |
| Primary | Maastricht Blue `#0A2338`, Navy 950 `#061827` | text, hero, page headers, footer, feature cards |
| Accent | Gold `#B8914A` (rules), `#C9A15A` (text on navy, 6.7:1), `#8C6A2B` (text on white, 5.0:1) | used sparingly: rules, dates, active nav |

Font: Montserrat (variable, includes the Vietnamese subset).

## Deploy (Vercel)

Import the repository in Vercel; framework preset **Vite**. `vercel.json` rewrites all paths to `index.html` so deep links such as `/research` work on refresh.

`legacy/` holds the earlier single-file version and the UI showcase; it is not part of the build.

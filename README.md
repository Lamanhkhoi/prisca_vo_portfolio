# Prisca Vo, MBA - Academic Portfolio

Read-only, bilingual (English / Vietnamese) academic portfolio for **Vo Thi Minh Phuong (Prisca Vo), MBA**, Lecturer & Subject Leader.

Built with React 19, Vite, Tailwind CSS v4, React Router, react-i18next and Motion.

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
| `/` | Home | `src/i18n/locales/*/home.json` |
| `/about` | About | `about.json` |
| `/research` | Research | `research.json` |
| `/talks-events` | Talks & Events | `talks.json` |
| `/recognition` | Recognition | `recognition.json` |
| `/other` | Other (non-academic) | `other.json` |

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
- **Evidence portfolio:** set `SITE.evidenceUrl` (Drive link or a PDF in `public/files/`).

## Brand

| Role | Colour | Usage |
|---|---|---|
| 60% | White `#FFFFFF` | page background |
| 30% | Maastricht Blue `#0A2338` (+ tints) | text, stats band, buttons, footer, section tints |
| 10% | Lime Green `#30D848` | accents only: active nav, bars, dots, progress bar |

Lime is never used for text on white (contrast 1.9:1). Green text uses `#1C812B` (5.0:1).
Font: Montserrat (variable, includes the Vietnamese subset).

## Deploy (Vercel)

Import the repository in Vercel; framework preset **Vite**. `vercel.json` rewrites all paths to `index.html` so deep links such as `/research` work on refresh.

`legacy/` holds the earlier single-file version and the UI showcase; it is not part of the build.

# Coastal Retirement Life

A production-ready coastal living and beach retirement lifestyle blog for adults over 50. Built with React + Vite + Tailwind CSS, pre-rendered to **static HTML** so every page is fully crawlable and readable **with JavaScript disabled** — designed to pass Google Ads review (no thin content, no JS-only shell, real business identity throughout).

- **Live business:** Coastal Retirement Life
- **Email:** coastalretirementlife@gmail.com · **Phone:** (843) 618-5401
- **Address:** 511 Ocean Harbor Blvd, Charleston, SC 29403

---

## Tech stack

| Concern | Choice |
| --- | --- |
| UI | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (custom coastal design system) |
| Routing | React Router DOM 6 |
| Pre-rendering | **react-snap** (static HTML per route) |
| Meta tags | react-helmet-async |
| Server | Express + compression |
| Analytics | Google Analytics 4 + Consent Mode v2 |

### Why it passes Google Ads review
- **Static pre-rendering** via `react-snap`: `npm run build` produces a real `index.html` for every route with the full article text, headings, testimonials, FAQs, and legal copy baked in. View Source shows content even with JS off.
- **No thin content:** every page has 600+ words of original copy; the homepage exceeds 3,000 characters.
- **Real business identity** in the footer, contact page, and JSON-LD (`Organization` + `FAQPage`).
- **Consent Mode v2:** analytics/ads storage default to `denied` until the user accepts the cookie banner.
- **Local images only** — all imagery is downloaded into `src/assets/images/` and imported as ES modules. No CDN hotlinking.

---

## Project structure

```
.
├── index.html                 # GA + Consent Mode v2 in <head>, <noscript> fallback
├── server.js                  # Express: compression, static serving, prerendered SPA fallback
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── Procfile / app.json        # Heroku
├── amplify.yml                # AWS Amplify
├── netlify.toml / vercel.json # Netlify / Vercel
├── scripts/
│   └── download-images.sh     # Re-download all local imagery from source
├── public/
│   ├── robots.txt             # Allows all crawling + sitemap location
│   ├── sitemap.xml            # All routes
│   ├── favicon.svg
│   └── og-default.jpg         # Open Graph image
└── src/
    ├── main.jsx               # hydrateRoot when pre-rendered, else createRoot
    ├── App.jsx                # Routes + layout
    ├── index.css              # Tailwind layers + accordion CSS
    ├── utils/analytics.js     # trackEvent / trackPageView / consent helpers
    ├── data/
    │   ├── site.js            # Business identity + nav
    │   └── content.js         # Categories, testimonials, FAQs, 12 articles
    ├── assets/
    │   ├── images.js          # All images imported as ES modules
    │   └── images/            # hero/ beaches/ wellness/ homes/ community/ blog/ travel/ lifestyle/
    ├── components/            # Navbar, Footer, SEO, Accordion, CookieBanner, Newsletter, ...
    └── pages/                 # Home, About, Blog, Community, Contact, 6 topic pages, 3 legal, 404
```

---

## Installation

Requires **Node.js 20.x**.

```bash
npm install
```

If you ever need to re-fetch the local imagery:

```bash
bash scripts/download-images.sh
```

## npm scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server (hot reload) at `http://localhost:5173` |
| `npm run build` | Vite production build **+ react-snap pre-render** (runs automatically as `postbuild`) |
| `npm run preview` | Preview the built `dist/` with Vite |
| `npm start` | Serve `dist/` with the Express production server (`server.js`) |

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build      # outputs pre-rendered static HTML into dist/
npm start          # serves dist/ via Express with compression on PORT (default 8080)
```

**Verify pre-rendering:** open `dist/index.html` (or any `dist/<route>/index.html`) in a text editor — you should see the full article and section text, not an empty `<div id="root">`.

> If your CI/build environment cannot download the Chromium that `react-snap` uses, set `PUPPETEER_SKIP_DOWNLOAD` off and ensure a Chrome is available, or run the build on a machine/container with Chromium. The Vite build output in `dist/` remains a valid SPA even if pre-rendering is skipped.

---

## Deployment

### Heroku
1. `heroku create coastal-retirement-life`
2. Push the repo. Heroku runs `npm install` → `npm run build` (build step) and starts via the `Procfile` (`node server.js`).
3. `heroku open`

### Vercel
- Import the repo. Vercel reads `vercel.json`: build command `npm run build`, output `dist`, `cleanUrls` on. Static pre-rendered HTML is served directly — no server needed.

### Netlify
- New site from Git. `netlify.toml` sets build command `npm run build`, publish dir `dist`, Node 20, and a 404 fallback.

### AWS Amplify
- Connect the repo; Amplify uses `amplify.yml` (build `npm run build`, artifacts from `dist`). For SPA route refreshes, the per-route `index.html` files generated by react-snap mean clean URLs resolve directly.

---

## Accessibility & SEO
- Semantic HTML5 landmarks, skip-to-content link, keyboard-navigable menus and accordions, visible focus states, ARIA labels, strong contrast.
- Canonical URLs, Open Graph + Twitter Card meta, `Organization` and `FAQPage` JSON-LD, `robots.txt`, and `sitemap.xml`.

## License
© Coastal Retirement Life. All rights reserved.

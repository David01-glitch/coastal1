// Static pre-render: serves the built SPA, visits every route with a headless
// browser, and writes fully-rendered static HTML to dist/<route>/index.html.
// Result: real article content, headings, FAQs, and meta exist in View Source
// even with JavaScript disabled. Uses the system Chrome via puppeteer-core
// (no multi-hundred-MB Chromium download).
import express from 'express';
import compression from 'compression';
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = 45678;

const ROUTES = [
  '/', '/about', '/blog', '/community', '/contact',
  '/coastal-living', '/beach-retirement-guides', '/oceanfront-travel',
  '/retirement-wellness', '/tropical-home-design', '/active-senior-lifestyle',
  '/legal/privacy', '/legal/terms', '/legal/refund', '/404',
];

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ];
  return candidates.find((p) => fs.existsSync(p));
}

function startServer() {
  const app = express();
  app.use(compression());
  app.use(express.static(DIST, { index: 'index.html' }));
  // SPA fallback so client-side routing renders each route.
  app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')));
  return new Promise((resolve) => {
    const server = app.listen(PORT, () => resolve(server));
  });
}

async function run() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('dist/index.html not found — run the Vite build first.');
    process.exit(1);
  }
  // Prefer a system Chrome if available (faster local dev); otherwise puppeteer
  // uses its own bundled Chromium downloaded by `npm install`. Works on CI
  // (Amplify, Vercel, Netlify, Heroku) without any Chrome pre-installation.
  const executablePath = findChrome();
  const launchOpts = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  };
  if (executablePath) launchOpts.executablePath = executablePath;

  const server = await startServer();
  const browser = await puppeteer.launch(launchOpts);

  let count = 0;
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
      // Ensure React has mounted real content into #root.
      await page.waitForFunction(
        () => {
          const r = document.getElementById('root');
          return r && r.children.length > 0 && document.title && document.title.length > 0;
        },
        { timeout: 30000 }
      );
      let html = await page.content();
      html = '<!doctype html>\n' + html.replace(/^<!DOCTYPE html>\s*/i, '');

      const outDir = route === '/' ? DIST : path.join(DIST, route);
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = route === '/404'
        ? path.join(DIST, '404.html')
        : path.join(outDir, 'index.html');
      fs.writeFileSync(outFile, html, 'utf8');
      await page.close();
      count++;
      console.log(`  ✓ pre-rendered ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`\nPre-rendered ${count} routes to static HTML.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

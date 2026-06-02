import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 8080;

const app = express();

// Gzip/brotli-friendly compression for all responses.
app.use(compression());
app.disable('x-powered-by');

// Long-cache fingerprinted assets; never cache HTML so updates are instant.
app.use(
  express.static(DIST, {
    redirect: false,
    setHeaders(res, filePath) {
      if (/\.(js|css|woff2?|jpg|jpeg|png|webp|svg|gif|ico)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  })
);

// SPA fallback that prefers the PRE-RENDERED static HTML for each route.
// react-snap writes <route>/index.html, so crawlers and no-JS users get real content.
app.get('*', (req, res) => {
  const cleanPath = req.path.replace(/\/+$/, '');
  const candidates = [
    path.join(DIST, cleanPath, 'index.html'),
    path.join(DIST, `${cleanPath}.html`),
  ];
  for (const file of candidates) {
    if (file.startsWith(DIST) && fs.existsSync(file)) {
      return res.sendFile(file);
    }
  }
  // Fall back to the pre-rendered 404 if present, else the app shell.
  const notFound = path.join(DIST, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  return res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Coastal Retirement Life running on http://localhost:${PORT}`);
});

import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

// Renders all per-page meta into <head>. react-snap bakes this into static HTML.
export default function SEO({ title, description, path = '/', image, type = 'website', jsonLd }) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description || site.description;
  const canonical = `${site.url}${path === '/' ? '' : path}`;
  const ogImage = image || `${site.url}/og-default.jpg`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

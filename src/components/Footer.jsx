import { Link } from 'react-router-dom';
import { site, fullAddress } from '../data/site.js';

const columns = [
  {
    title: 'Explore',
    links: [
      { to: '/coastal-living', label: 'Coastal Living' },
      { to: '/beach-retirement-guides', label: 'Retirement Guides' },
      { to: '/oceanfront-travel', label: 'Oceanfront Travel' },
      { to: '/retirement-wellness', label: 'Wellness' },
    ],
  },
  {
    title: 'More',
    links: [
      { to: '/tropical-home-design', label: 'Coastal Home Design' },
      { to: '/active-senior-lifestyle', label: 'Active Living' },
      { to: '/blog', label: 'Blog' },
      { to: '/community', label: 'Community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
      { to: '/legal/privacy', label: 'Privacy' },
      { to: '/legal/terms', label: 'Terms' },
      { to: '/legal/refund', label: 'Refund Policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ocean-100 bg-ocean-fade">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-xl text-ocean-900">
            Coastal <span className="text-seafoam-600">Retirement Life</span>
          </p>
          <p className="mt-3 max-w-sm text-ocean-800/80">{site.tagline}</p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-ocean-800/80">
            {fullAddress}<br />
            <a href={`tel:${site.phoneHref}`} className="hover:text-ocean-700">{site.phone}</a><br />
            <a href={`mailto:${site.email}`} className="hover:text-ocean-700">{site.email}</a>
          </address>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ocean-700">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-ocean-800/80 transition hover:text-ocean-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-ocean-100">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-ocean-700/80 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link to="/legal/privacy" className="hover:text-ocean-700">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-ocean-700">Terms</Link>
            <Link to="/legal/refund" className="hover:text-ocean-700">Refund</Link>
            <Link to="/about" className="hover:text-ocean-700">About</Link>
            <Link to="/contact" className="hover:text-ocean-700">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, site } from '../data/site.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ocean-100/70 bg-coastalwhite/85 backdrop-blur supports-[backdrop-filter]:bg-coastalwhite/70">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-2xl bg-ocean-600 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 17c2 1.5 3.5 1.5 5.5 0S12 15.5 14 17s3.5 1.5 5.5 0" strokeLinecap="round" />
              <path d="M3 13c2 1.5 3.5 1.5 5.5 0S12 11.5 14 13s3.5 1.5 5.5 0" strokeLinecap="round" />
              <circle cx="17" cy="6.5" r="2.5" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold leading-tight text-ocean-900">
            Coastal <span className="text-seafoam-600">Retirement Life</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 8).map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'text-ocean-700' : 'text-ocean-800/80 hover:text-ocean-700'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="ml-2 rounded-xl bg-ocean-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-ocean-700">
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-ocean-200 text-ocean-700 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" className={`accordion-panel lg:hidden ${open ? 'open' : ''}`}>
        <div className="accordion-inner">
          <ul className="container-page grid gap-1 pb-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 text-base font-medium transition ${
                      isActive ? 'bg-ocean-50 text-ocean-700' : 'text-ocean-800 hover:bg-ocean-50'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="px-3 pt-2 text-sm text-ocean-700">
              <a href={`tel:${site.phoneHref}`} className="hover:underline">{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

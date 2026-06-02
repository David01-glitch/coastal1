import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { img } from '../assets/images.js';
import { navLinks } from '../data/site.js';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you were looking for has drifted out to sea. Explore our coastal living and beach retirement guides instead." path="/404" />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={img.beaches.cove} alt="Quiet, empty coastal cove" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ocean-900/70" />
        </div>
        <div className="container-page py-28 text-center text-coastalwhite">
          <p className="text-6xl font-display sm:text-7xl">404</p>
          <h1 className="mt-4 text-3xl text-white sm:text-4xl">This page has drifted out to sea</h1>
          <p className="mx-auto mt-4 max-w-xl text-coastalwhite/90">
            We could not find the page you were looking for. It may have moved, or the link may be incomplete.
            Let’s get you back to calmer waters.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">Return home</Link>
            <Link to="/blog" className="btn-ghost bg-white/10 text-white hover:bg-white/20">Browse the blog</Link>
          </div>
        </div>
      </section>

      <nav aria-label="Popular pages" className="container-page my-16 text-center">
        <h2 className="text-xl text-ocean-900">Popular destinations</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="rounded-full border border-ocean-200 bg-white px-4 py-2 text-sm font-medium text-ocean-700 transition hover:bg-ocean-50">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

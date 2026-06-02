import { testimonials } from '../data/content.js';
import SectionHeading from './SectionHeading.jsx';

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="container-page my-20">
      <SectionHeading
        center
        id="testimonials-heading"
        eyebrow="Reader Stories"
        title="From readers who made the move"
        intro="Real notes from members of the Coastal Retirement Life community, shared with their permission."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.name} className="card flex flex-col gap-5 p-7">
            <svg className="h-8 w-8 text-seafoam-300" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M12 8H6a2 2 0 00-2 2v8a2 2 0 002 2h4v4a4 4 0 01-4 4v2a6 6 0 006-6V10a2 2 0 00-2-2zm14 0h-6a2 2 0 00-2 2v8a2 2 0 002 2h4v4a4 4 0 01-4 4v2a6 6 0 006-6V10a2 2 0 00-2-2z" />
            </svg>
            <blockquote className="text-ocean-800/90">“{t.quote}”</blockquote>
            <figcaption className="mt-auto flex items-center gap-4">
              <img src={t.image} alt={`${t.name}, reader from ${t.location}`} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-ocean-900">{t.name}</p>
                <p className="text-sm text-ocean-600/80">{t.location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

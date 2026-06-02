import SEO from './SEO.jsx';
import { site } from '../data/site.js';

export default function LegalPage({ title, path, description, updated, intro, sections }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <header className="border-b border-ocean-100 bg-ocean-fade">
        <div className="container-page py-16">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">{title}</h1>
          <p className="mt-4 text-ocean-700/80">Last updated: {updated}</p>
        </div>
      </header>

      <article className="container-page my-14">
        <div className="prose-coastal mx-auto max-w-3xl">
          {intro.map((p, i) => (
            <p key={i} className="text-lg">{p}</p>
          ))}

          {sections.map((s, i) => (
            <section key={i} aria-labelledby={`sec-${i}`}>
              <h2 id={`sec-${i}`}>{i + 1}. {s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li, k) => (
                    <li key={k}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section aria-labelledby="legal-contact">
            <h2 id="legal-contact">Contact us</h2>
            <p>
              If you have any questions about this policy, please contact us at{' '}
              <a href={`mailto:${site.email}`} className="text-ocean-700 underline">{site.email}</a>, by phone at{' '}
              <a href={`tel:${site.phoneHref}`} className="text-ocean-700 underline">{site.phone}</a>, or by mail at{' '}
              {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

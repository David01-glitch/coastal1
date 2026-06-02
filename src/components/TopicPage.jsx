import SEO from './SEO.jsx';
import PageHero from './PageHero.jsx';
import SectionHeading from './SectionHeading.jsx';
import Accordion from './Accordion.jsx';
import ArticleCard from './ArticleCard.jsx';
import Newsletter from './Newsletter.jsx';
import { site } from '../data/site.js';
import { posts } from '../data/content.js';

// Data-driven template shared by all six topic pages.
export default function TopicPage({
  path,
  seoTitle,
  seoDescription,
  hero,
  intro,
  features = [],
  deepDives = [],
  relatedSlugs = [],
  faqItems = [],
}) {
  const related = posts.filter((p) => relatedSlugs.includes(p.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seoTitle,
    description: seoDescription,
    image: `${site.url}/og-default.jpg`,
    author: { '@type': 'Organization', name: site.name },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      email: site.email,
      telephone: site.phone,
    },
    mainEntityOfPage: `${site.url}${path}`,
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} path={path} type="article" jsonLd={jsonLd} />
      <PageHero {...hero} />

      <section className="container-page py-16">
        <div className="prose-coastal mx-auto max-w-3xl text-lg">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {features.map((f, i) => (
        <section key={i} className="container-page my-12">
          <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>figure]:order-last' : ''}`}>
            <figure className="overflow-hidden rounded-3xl shadow-card">
              <img src={f.image} alt={f.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </figure>
            <div>
              <h2 className="text-2xl sm:text-3xl">{f.heading}</h2>
              <div className="prose-coastal mt-4">
                {f.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {deepDives.length > 0 && (
        <section className="container-page my-20">
          <SectionHeading
            center
            eyebrow="In Depth"
            title="Explore the full guide"
            intro="Each section below opens in place — no new tabs, no pop-ups. Tap to read more whenever you like."
          />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-2 shadow-card sm:p-6">
            {deepDives.map((d, i) => (
              <Accordion key={i} summary={d.summary} toggleLabel="Read guide" defaultOpen={i === 0}>
                {d.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Accordion>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="container-page my-20">
          <SectionHeading eyebrow="Keep Reading" title="Related articles" />
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {faqItems.length > 0 && (
        <section className="container-page my-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading center eyebrow="Questions" title="Frequently asked questions" />
            <div className="mt-10 rounded-3xl bg-white p-2 shadow-card sm:p-6">
              {faqItems.map((f, i) => (
                <Accordion key={i} summary={f.q} toggleLabel="Answer" defaultOpen={i === 0}>
                  <p>{f.a}</p>
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}

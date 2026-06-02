import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FaqSection from '../components/FaqSection.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Accordion from '../components/Accordion.jsx';
import { img } from '../assets/images.js';
import { site, fullAddress } from '../data/site.js';
import { categories, posts, faqs } from '../data/content.js';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const wellnessHighlights = [
  { title: 'Move gently, daily', text: 'Twenty unhurried minutes on the boardwalk protects your joints and lifts your mood — no gym required.', image: img.wellness.walking },
  { title: 'Eat with the seasons', text: 'Fresh Lowcountry seafood, garden greens, and plenty of water keep energy steady through warm coastal days.', image: img.wellness.tea },
  { title: 'Rest like it matters', text: 'Ten quiet minutes watching the tide does as much for the nervous system as any workout. Stillness is a practice.', image: img.wellness.stretch },
];

export default function Home() {
  const trending = posts.slice(0, 6);

  return (
    <>
      <SEO path="/" jsonLd={orgJsonLd} />
      <SEO path="/" jsonLd={faqJsonLd} />

      {/* 1. Oceanfront hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={img.hero.oceanfront} alt="Calm oceanfront shoreline at sunrise near Charleston, South Carolina" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/80 via-ocean-800/55 to-seafoam-700/30" />
        </div>
        <div className="container-page py-28 sm:py-36">
          <div className="max-w-2xl text-coastalwhite">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-seafoam-200">Coastal living · Beach retirement · After 50</p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-white sm:text-6xl">
              Your calmest, brightest chapter begins by the sea
            </h1>
            <p className="mt-6 text-lg text-coastalwhite/90 sm:text-xl">
              {site.name} is an editorial guide for adults over 50 who dream of the shore — honest beach
              retirement advice, oceanfront travel, airy home design, and wellness for an unhurried second act.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/beach-retirement-guides" className="btn-primary">Start your retirement guide</Link>
              <Link to="/coastal-living" className="btn-ghost bg-white/10 text-white hover:bg-white/20">Explore coastal living</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro band for crawlable, substantial copy */}
      <section className="border-b border-ocean-100 bg-ocean-fade">
        <div className="container-page grid gap-8 py-14 md:grid-cols-3">
          {[
            ['Honest, not salesy', 'We are a reader-funded lifestyle blog — never a brokerage. No commissions, no pressure, just experience.'],
            ['Written for life after 50', 'Every guide is shaped around how we actually move, travel, and live now — gentle, practical, and real.'],
            ['Rooted on the Southeast coast', 'From Charleston to the Carolina and Georgia shores, our reporting is local, first-hand, and lived-in.'],
          ].map(([t, d]) => (
            <div key={t}>
              <h2 className="text-xl text-ocean-900">{t}</h2>
              <p className="mt-2 text-ocean-800/80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured lifestyle categories */}
      <section aria-labelledby="cats-heading" className="container-page my-20">
        <SectionHeading center id="cats-heading" eyebrow="Where to Begin" title="Featured lifestyle categories" intro="Six gentle paths into coastal retirement. Wander wherever your heart leans today." />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} to={c.to} className="card group overflow-hidden hover:-translate-y-1 hover:shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.image} alt={`${c.title} — coastal retirement`} loading="lazy" className="h-full w-full object-cover transition duration-500 ease-gentle group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-ocean-900">{c.title}</h3>
                <p className="mt-2 text-ocean-800/80">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-seafoam-600">Explore<span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Trending coastal articles */}
      <section aria-labelledby="trending-heading" className="container-page my-20">
        <SectionHeading id="trending-heading" eyebrow="Most Loved" title="Trending coastal articles" intro="Open any story to read the full guide right here — no new tabs, no pop-ups." />
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/blog" className="btn-ghost">Browse all articles</Link>
        </div>
      </section>

      {/* 5. Retirement wellness highlights */}
      <section aria-labelledby="wellness-heading" className="bg-seafoam-50/70 py-20">
        <div className="container-page">
          <SectionHeading center id="wellness-heading" eyebrow="Feel Well" title="Retirement wellness highlights" intro="Sustainable habits built for the coast and for life after 50 — gentle on the body, generous to the spirit." />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {wellnessHighlights.map((w) => (
              <div key={w.title} className="card overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={w.image} alt={w.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-ocean-900">{w.title}</h3>
                  <p className="mt-2 text-ocean-800/80">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/retirement-wellness" className="btn-primary">See the wellness guide</Link>
          </div>
        </div>
      </section>

      {/* 6. Beach community stories */}
      <section aria-labelledby="community-heading" className="container-page my-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-3xl shadow-card">
            <img src={img.community.dock} alt="Friends gathered on a sunlit coastal dock at a beach retirement community" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
          <div>
            <p className="eyebrow">Beach Community Stories</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Belonging is what turns an address into a home</h2>
            <p className="mt-4 prose-coastal">
              A house near the water is wonderful, but it is community that makes a coastal life. Across the
              Southeast, our readers are joining walking clubs, tending shared gardens, and gathering for
              sunset suppers on the dock. These small, repeated kindnesses are the quiet engine of a long,
              happy retirement.
            </p>
            <div className="mt-4 rounded-3xl bg-white p-2 shadow-card sm:p-4">
              <Accordion summary="“We arrived knowing no one — and found our people by the marina.”" toggleLabel="Read story" defaultOpen>
                <p>
                  When Margaret and Daniel moved to Mount Pleasant, they knew exactly two people in the state.
                  Within a season, a Tuesday-morning walking group had become a standing dinner club, and the
                  marina had become the place everyone seemed to drift toward at golden hour. “We did not move
                  for the view,” Margaret told us. “We stayed for the people who share it.”
                </p>
                <p>
                  Their advice for newcomers is simple: be the one who reaches out first. Host a small porch
                  gathering, learn your neighbors’ names, and say yes to invitations even when you would rather
                  stay in. Community rarely arrives unbidden — it is built, one friendly conversation at a time.
                </p>
              </Accordion>
            </div>
            <Link to="/community" className="btn-ghost mt-6">Meet the community</Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Newsletter */}
      <Newsletter />

      {/* 9. FAQ */}
      <FaqSection intro="A few honest answers about who we are and how we can help." />

      {/* 10. Contact section */}
      <section aria-labelledby="home-contact" className="container-page my-20">
        <div className="overflow-hidden rounded-3xl bg-ocean-800 text-coastalwhite">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-seafoam-200">Say Hello</p>
              <h2 id="home-contact" className="mt-2 text-3xl sm:text-4xl text-white">We would love to hear from you</h2>
              <p className="mt-4 text-coastalwhite/85">
                Have a town to recommend, a question about coastal retirement, or a story to share? A real
                member of our team will personally reply. We read every message.
              </p>
              <Link to="/contact" className="mt-7 inline-flex btn-ghost bg-white/10 text-white hover:bg-white/20">Go to contact page</Link>
            </div>
            <div className="rounded-2xl bg-white/10 p-6">
              <dl className="space-y-4 text-coastalwhite/90">
                <div>
                  <dt className="text-sm uppercase tracking-wide text-seafoam-200">Email</dt>
                  <dd><a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a></dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-wide text-seafoam-200">Phone</dt>
                  <dd><a href={`tel:${site.phoneHref}`} className="hover:underline">{site.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-sm uppercase tracking-wide text-seafoam-200">Studio</dt>
                  <dd>{fullAddress}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { img } from '../assets/images.js';
import { site, fullAddress } from '../data/site.js';

const values = [
  ['Honesty over hype', 'We publish the unglamorous details — insurance, humidity, real costs — because trust matters more than a pretty postcard.'],
  ['Independence', 'We are reader-funded and never accept payment to recommend a town, builder, or product. Our only loyalty is to you.'],
  ['Respect for the reader', 'We write for capable adults with decades of wisdom, not a stereotype. Warm, clear, and never condescending.'],
  ['Local and lived-in', 'Our reporting comes from the Southeast coast we call home — Charleston, the Lowcountry, and the shores beyond.'],
];

const team = [
  { name: 'Eleanor Hayes', role: 'Founder & Editor', image: img.lifestyle.reading, bio: 'A former community-magazine editor who moved to Charleston at 58 and never looked back.' },
  { name: 'Dr. Naomi Pierce', role: 'Wellness Contributor', image: img.wellness.yoga, bio: 'A retired physician writing about gentle, sustainable movement and healthy aging by the water.' },
  { name: 'Marcus Bell', role: 'Home & Garden Writer', image: img.homes.airy, bio: 'A coastal interior designer with a soft spot for driftwood textures and salt-tolerant gardens.' },
  { name: 'Patricia Lowe', role: 'Travel Editor', image: img.travel.harbor, bio: 'A lifelong traveler who now seeks out the gentlest, most beautiful corners of the Southeast coast.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="The story behind Coastal Retirement Life — an independent, reader-funded lifestyle blog helping adults over 50 plan and savor a beautiful life by the sea."
        path="/about"
      />
      <PageHero
        eyebrow="Our Story"
        title="A love letter to the coast, and to second chapters"
        intro="Coastal Retirement Life began with one move, one porch, and one stubborn belief: the years after 50 can be the most beautiful of all."
        image={img.hero.balcony}
        imageAlt="Sunlit oceanfront balcony overlooking the water"
      />

      <section className="container-page py-16">
        <div className="prose-coastal mx-auto max-w-3xl text-lg">
          <h2>How it started</h2>
          <p>
            In the spring of {site.founded}, our founder Eleanor Hayes packed up a four-bedroom house in the
            Midwest, sold most of what she owned, and drove east toward a small rented apartment two blocks
            from the Charleston harbor. She was 58, recently widowed, and quietly terrified. What she found by
            the water surprised her: not an ending, but a beginning.
          </p>
          <p>
            The mornings were slower and the light was softer. Neighbors waved. A Tuesday walking group became
            a dinner club. And the questions that had kept her up at night — Where should I live? Can I afford
            this? Will I be lonely? — turned out to be questions thousands of others were asking too, with
            almost no honest, warm, advertisement-free guidance to be found.
          </p>
          <p>
            So Eleanor started writing. First a newsletter to a handful of friends, then a small blog, and
            eventually the publication you are reading today. Coastal Retirement Life exists to be the trusted
            companion she wished she had — practical where you need facts, gentle where you need reassurance,
            and always, always on your side.
          </p>

          <h2>Our mission</h2>
          <p>
            We help adults over 50 imagine, plan, and savor a life by the sea. That means honest guides to
            choosing a coastal town, downsizing without regret, and budgeting for the real cost of paradise.
            It means wellness rooted in how our bodies actually move now, home design that makes a smaller
            space feel boundless, and travel that is gentle on the knees and rich for the soul. Most of all,
            it means treating you as the capable, curious adult you are.
          </p>
          <p>
            We are not a real-estate brokerage, a financial advisor, or a relocation agency. We sell nothing
            but our newsletter, which is free. We are simply storytellers who believe the coast has room for
            one more dreamer — and that good information, kindly delivered, can change a life.
          </p>
        </div>
      </section>

      <section className="bg-seafoam-50/70 py-20">
        <div className="container-page">
          <SectionHeading center eyebrow="What We Believe" title="Four values guide everything we publish" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(([t, d]) => (
              <div key={t} className="card p-7">
                <h3 className="text-xl text-ocean-900">{t}</h3>
                <p className="mt-2 text-ocean-800/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page my-20">
        <SectionHeading center eyebrow="The People" title="Meet the team" intro="A small, devoted group of writers who live and breathe the coastal life they cover." />
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="card overflow-hidden text-center">
              <div className="aspect-square overflow-hidden">
                <img src={m.image} alt={`${m.name}, ${m.role}`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-ocean-900">{m.name}</h3>
                <p className="text-sm font-medium text-seafoam-600">{m.role}</p>
                <p className="mt-2 text-sm text-ocean-800/80">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-ocean-800/80">
          Questions or a story to share? Reach us at{' '}
          <a href={`mailto:${site.email}`} className="font-medium text-ocean-700 underline">{site.email}</a>{' '}
          or visit our <Link to="/contact" className="font-medium text-ocean-700 underline">contact page</Link>. Our studio is at {fullAddress}.
        </p>
      </section>

      <Newsletter />
    </>
  );
}

import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { img } from '../assets/images.js';
import { posts } from '../data/content.js';

const allCategories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Blog() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="The Blog"
        description="In-depth, original articles on coastal living, beach retirement planning, oceanfront travel, wellness after 50, and airy coastal home design."
        path="/blog"
      />
      <PageHero
        eyebrow="The Journal"
        title="Stories, guides, and gentle wisdom from the coast"
        intro="Twelve in-depth reads covering everything from choosing a beach town to designing a serene, light-filled home. Open any article to read it in full, right here."
        image={img.beaches.boardwalk}
        imageAlt="Wooden boardwalk leading toward a quiet beach at golden hour"
      />

      <section className="container-page my-12">
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter articles by category">
          {allCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === c ? 'bg-ocean-600 text-white' : 'border border-ocean-200 bg-white text-ocean-700 hover:bg-ocean-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}

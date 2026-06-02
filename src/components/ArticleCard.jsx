import { useState, useId } from 'react';

// Blog/article preview card with INLINE expandable full content.
// Full body text is always rendered in the DOM (present in static HTML);
// JS only animates the reveal. Never opens a modal, tab, or new page.
export default function ArticleCard({ post }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <article className="card flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={`${post.title} — coastal retirement lifestyle`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 ease-gentle hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-coastalwhite/90 px-3 py-1 text-xs font-semibold text-ocean-700">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ocean-600/80">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
        </div>
        <h3 className="mt-3 text-xl leading-snug text-ocean-900">{post.title}</h3>
        <p className="mt-2 text-ocean-800/80">{post.excerpt}</p>

        <div id={`article-${id}`} className={`accordion-panel mt-1 ${open ? 'open' : ''}`}>
          <div className="accordion-inner">
            <div className="prose-coastal pt-3">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={`article-${id}`}
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-seafoam-600 transition hover:text-seafoam-700"
        >
          {open ? 'Show less' : 'Read more'}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"
          >
            <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}

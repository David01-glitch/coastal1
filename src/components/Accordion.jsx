import { useState, useId } from 'react';

// Accessible inline accordion. The panel content is always present in the DOM
// (so it appears in static HTML / with JS disabled); JS only toggles a CSS class
// that animates height + opacity. No modals, redirects, or popups.
export default function Accordion({ summary, children, defaultOpen = false, toggleLabel = 'Read more' }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-ocean-100 py-2">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-3 text-left"
      >
        <span className="font-display text-lg text-ocean-900">{summary}</span>
        <span className="flex items-center gap-2 text-sm font-medium text-seafoam-600">
          <span className="hidden sm:inline">{open ? 'Show less' : toggleLabel}</span>
          <svg
            className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-gentle ${open ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div id={`panel-${id}`} className={`accordion-panel ${open ? 'open' : ''}`}>
        <div className="accordion-inner">
          <div className="prose-coastal pb-5 pr-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

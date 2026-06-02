import Accordion from './Accordion.jsx';
import SectionHeading from './SectionHeading.jsx';
import { faqs } from '../data/content.js';

export default function FaqSection({ items = faqs, title = 'Frequently asked questions', intro }) {
  return (
    <section aria-labelledby="faq-heading" className="container-page my-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading center id="faq-heading" eyebrow="Good to Know" title={title} intro={intro} />
        <div className="mt-10 rounded-3xl bg-white p-2 shadow-card sm:p-6">
          {items.map((f, i) => (
            <Accordion key={i} summary={f.q} toggleLabel="Answer" defaultOpen={i === 0}>
              <p>{f.a}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

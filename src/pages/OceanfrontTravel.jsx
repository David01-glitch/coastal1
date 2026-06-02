import TopicPage from '../components/TopicPage.jsx';
import { img } from '../assets/images.js';

export default function OceanfrontTravel() {
  return (
    <TopicPage
      path="/oceanfront-travel"
      seoTitle="Oceanfront Travel"
      seoDescription="Gentle, beautiful coastal travel for adults over 50 — the best Southeast beach towns, sunset dining, and packing tips for comfortable, joyful trips."
      hero={{
        eyebrow: 'Oceanfront Travel',
        title: 'Unhurried escapes along the Southeast coast',
        intro: 'Travel that is gentle on the knees and rich for the soul — walkable harbor towns, slow sunset dinners, and the freedom of a lighter bag.',
        image: img.travel.island,
        imageAlt: 'Quiet island road lined with palms near the coast',
      }}
      intro={[
        'The best coastal travel after 50 is measured in conversations, not miles. It favors walkable towns over packed itineraries, benches and shade over endless hikes, and long, lingering dinners over rushed reservations. The goal is not to see everything — it is to feel rested and quietly delighted.',
        'From the marsh-laced Lowcountry to the moss-draped islands of Georgia and the riverfront towns of the Carolinas, the Southeast is full of gentle, welcoming places. These guides help you find them, savor them, and travel through them with ease.',
      ]}
      features={[
        {
          heading: 'Towns built for a slower pace',
          image: img.travel.harbor,
          imageAlt: 'Peaceful harbor view with moored boats',
          paragraphs: [
            'The towns we return to share a few traits: a walkable center, benches and shade, fresh local seafood, and a community that feels lived-in rather than rented. Beaufort, Tybee Island, St. Simons, Southport, and Fernandina Beach all reward slow wandering.',
            'Travel like a resident. Arrive midweek, eat where the locals eat, and leave room in the day for nothing in particular. The slow pace is not a compromise — it is the destination.',
          ],
        },
        {
          heading: 'The art of the unhurried evening',
          image: img.blog.dining,
          imageAlt: 'Waterfront table set for sunset dining',
          paragraphs: [
            'There is a particular magic to dining as the sun goes down over the water. Check the day’s sunset, reserve a table forty-five minutes before, and ask for the seat that catches the light — most waterfront restaurants know exactly which one it is.',
            'Order to linger. Start with a chilled local oyster, share a plate, and let the evening unfold course by course. When the candles are lit, resist the rush to leave; a short walk along the water is the perfect, gentle end to a coastal day.',
          ],
        },
      ]}
      deepDives={[
        {
          summary: 'Best Beach Towns in the Southeast',
          paragraphs: [
            'Beaufort, South Carolina and its quiet cousin in North Carolina both reward slow wandering with waterfront boardwalks and shaded squares. Tybee Island near Savannah keeps things small and barefoot, while St. Simons offers gentle bike paths beneath moss-draped oaks.',
            'On the North Carolina coast, Southport charms with tree-lined streets and an easy ferry to Bald Head Island, where golf carts replace cars entirely. Fernandina Beach on Amelia Island blends a historic downtown with wide, flat sands perfect for a morning stroll.',
          ],
        },
        {
          summary: 'Retirement Travel Packing Tips',
          paragraphs: [
            'The secret to joyful travel after 50 is packing less and planning more. Build a single carry-on around a neutral palette so every top pairs with every bottom, and you spare your back at every transfer.',
            'Pack broken-in walking shoes, a sun hat, polarized sunglasses, and light layers for cool harbor evenings. Keep a full medication list — dosages and your physician’s contact — in both your phone and your wallet, and carry a backup pair of reading glasses in your personal item.',
          ],
        },
        {
          summary: 'Sunset Dining Along the Coast',
          paragraphs: [
            'Turn an ordinary dinner into the highlight of the day with a little timing. Reserve for forty-five minutes before sunset so you are seated as the light begins its show, and request a table facing the water when you book.',
            'Sunset dining is a slow procession of small pleasures, not a quick bite. Share plates, sip something cool, and let the meal stretch. The coast’s freshest seafood needs little embellishment — and neither does a good evening.',
          ],
        },
      ]}
      relatedSlugs={['best-beach-towns-in-the-southeast', 'retirement-travel-packing-tips', 'sunset-dining-along-the-coast']}
      faqItems={[
        { q: 'What makes a beach town good for travelers over 50?', a: 'Walkability, shade and benches, accessible waterfronts, and good local food. We favor towns where you can park once and stroll, rather than ones built around long drives or strenuous hikes.' },
        { q: 'How do I travel comfortably with medications?', a: 'Keep all medications in your carry-on, never a checked bag, with a printed list of names, dosages, and your doctor’s contact. A small daily organizer and a backup of essentials prevents most travel-day worries.' },
        { q: 'When is the best time to visit the Southeast coast?', a: 'Late spring and early fall offer warm water with gentler heat and thinner crowds. Midweek arrivals almost always mean quieter towns, easier tables, and a more restful trip.' },
      ]}
    />
  );
}

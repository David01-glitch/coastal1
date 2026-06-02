import TopicPage from '../components/TopicPage.jsx';
import { img } from '../assets/images.js';

export default function CoastalLiving() {
  return (
    <TopicPage
      path="/coastal-living"
      seoTitle="Coastal Living"
      seoDescription="The everyday rhythm of life by the water — salt-air mornings, slower afternoons, downsizing with grace, and a relaxed daily routine for adults over 50."
      hero={{
        eyebrow: 'Coastal Living',
        title: 'The unhurried art of living by the water',
        intro: 'Coastal living is less a location than a tempo — softer mornings, slower afternoons, and a daily rhythm that finally has room to breathe.',
        image: img.beaches.charleston,
        imageAlt: 'Calm Charleston shoreline with gentle morning waves',
      }}
      intro={[
        'There is a particular quality to a day spent near the sea. The light arrives gently, the air carries salt and possibility, and time seems to loosen its grip. For adults over 50, coastal living offers something rare: permission to slow down without feeling idle, to simplify without feeling diminished.',
        'But a beautiful life by the water is built on practical choices as much as romantic ones — how you shape your days, what you choose to carry into a smaller home, and how you weave yourself into a community. This guide gathers the everyday wisdom that turns a coastal address into a genuinely good life.',
      ]}
      features={[
        {
          heading: 'Mornings that set a calmer tone',
          image: img.lifestyle.coffee,
          imageAlt: 'Coffee on a porch overlooking the ocean at sunrise',
          paragraphs: [
            'The coast rewards early risers. The hour after dawn is cooler, quieter, and softer in every sense — the perfect time for a slow walk to the water or a cup of coffee on the porch before the day asks anything of you.',
            'A small, repeatable morning ritual does more for wellbeing than any grand plan. The content matters less than the consistency: a reliable, gentle start tells the body it is safe to relax into the day.',
          ],
        },
        {
          heading: 'A home that holds only what you love',
          image: img.homes.airy,
          imageAlt: 'Airy, light-filled coastal living room',
          paragraphs: [
            'Living well by the sea often means living with less. Downsizing, done gently and without pressure, is one of the most freeing acts of this chapter — every object you keep earns its place by being loved or genuinely useful.',
            'The lighter your home, the more it can breathe with you. Flexible furnishings, clear sightlines to the view, and a restrained palette make even a modest space feel generous and calm.',
          ],
        },
      ]}
      deepDives={[
        {
          summary: 'How to Downsize for Beach Living',
          paragraphs: [
            'Downsizing is rarely about square footage; it is about deciding what your next chapter is for. Before sorting a single drawer, picture the life you want at the coast — long porch mornings, friends over for supper, a guest room for the grandchildren — and let that picture guide what comes with you.',
            'Work one room at a time over weeks, not a weekend, using four labeled zones: keep, gift, sell, and let go. Photographs preserve sentimental objects without the shelf space, and a single well-chosen keepsake honors a loved one better than a basement of boxes. Be gentle with yourself; letting go of a family home stirs real grief, and that is healthy.',
          ],
        },
        {
          summary: 'Creating a Relaxed Daily Routine',
          paragraphs: [
            'Retirement removes the scaffolding of a work schedule, and that freedom can be unexpectedly disorienting. A gentle daily rhythm — not a rigid timetable — restores purpose while preserving spaciousness. The coast offers natural anchors: the morning light, the tide chart, the cooling of evening.',
            'Build the day around one meaningful activity and one bit of connection — tending the garden and meeting a friend, volunteering and calling a grandchild. Two intentional anchors are plenty; the rest can stay gloriously open. Close the day deliberately, with a sunset or a line of gratitude, so freedom feels like a gift rather than a void.',
          ],
        },
        {
          summary: 'A Coastal Garden That Loves Salt Air',
          paragraphs: [
            'Gardening by the sea has its own rulebook. Salt spray, sandy soil, and steady wind defeat many classic favorites, but salt-tolerant plantings — sea oats, beach rosemary, muhly grass, native palmetto — thrive with little fuss and reward you with color, movement, and calm.',
            'Improve the soil, mulch generously to hold moisture and suppress weeds, and raise your beds to a comfortable working height to spare your back. Design for relaxation, not just for show: a shaded bench and a fragrant herb by the door turn the garden into a place you actually sit in.',
          ],
        },
      ]}
      relatedSlugs={['how-to-downsize-for-beach-living', 'creating-a-relaxed-daily-routine', 'a-coastal-garden-that-loves-salt-air']}
      faqItems={[
        { q: 'Do I need to live oceanfront to enjoy coastal living?', a: 'Not at all. A short walk or drive to the water, a bright home full of natural light, and a slower daily rhythm capture most of the magic at a fraction of the cost — and far less insurance.' },
        { q: 'Is downsizing really worth the emotional effort?', a: 'Most readers tell us the freedom on the other side is profound. A lighter home means less maintenance, less cost, and more time and energy for the people and pursuits that matter. Go slowly and be kind to yourself.' },
        { q: 'How do I keep busy without a work schedule?', a: 'Build two gentle anchors into each day — one meaningful activity and one moment of connection — and leave the rest open. Purpose, not packed hours, is what makes retirement feel rich.' },
      ]}
    />
  );
}

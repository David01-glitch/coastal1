import TopicPage from '../components/TopicPage.jsx';
import { img } from '../assets/images.js';

export default function TropicalHomeDesign() {
  return (
    <TopicPage
      path="/tropical-home-design"
      seoTitle="Coastal Home Design"
      seoDescription="Airy, light-filled coastal home design for retirement — driftwood textures, ocean tones, and restful, flexible spaces that make a smaller home feel boundless."
      hero={{
        eyebrow: 'Coastal Home Design',
        title: 'Light, calm, and the beauty of less',
        intro: 'A serene coastal home is built on daylight first and objects second. Here is how texture, a restrained palette, and thoughtful flow turn even a modest space into a peaceful retreat.',
        image: img.homes.interior,
        imageAlt: 'Bright, airy coastal interior with natural textures',
      }}
      intro={[
        'The best coastal interiors feel like a deep breath. They are airy without being empty, textured without being busy, and above all generous with natural light. For a retirement home, good design is also quietly practical — a space that is beautiful today and easy to live in for decades.',
        'You do not need a large budget or an oceanfront address to create this feeling. A few guiding principles — light, texture, a calm palette, and furniture you can truly live with — will transform almost any room into a restful, light-filled retreat.',
      ]}
      features={[
        {
          heading: 'Let the light lead',
          image: img.homes.patio,
          imageAlt: 'Sunlit oceanfront patio with comfortable seating',
          paragraphs: [
            'Before choosing a single paint color, study how the sun moves through your rooms. South-facing spaces can carry cooler whites and seafoam tones; rooms that see less light warm up beautifully with sandy beige and driftwood gray.',
            'Keep window treatments sheer and simple so daylight is never the price you pay for privacy. A clear sightline to a view — even a sliver of sky or garden — always feels more luxurious than a crowded wall.',
          ],
        },
        {
          heading: 'Texture over clutter',
          image: img.homes.kitchen,
          imageAlt: 'Bright white coastal kitchen with natural accents',
          paragraphs: [
            'Texture does the heavy lifting in a calm interior. Linen slipcovers, jute rugs, rattan accents, and weathered wood add depth and warmth without noise. A restrained palette of three or four coastal tones, repeated throughout, creates a sense of flow.',
            'Choose furniture you can actually live with — rounded edges, washable fabrics, and pieces light enough to rearrange. Small, thoughtful choices make a home both safer and more flexible as needs change.',
          ],
        },
      ]}
      deepDives={[
        {
          summary: 'Designing a Relaxing Coastal Home',
          paragraphs: [
            'A relaxing coastal home is built on light first and objects second. Study the sun, choose a palette that flatters each room’s daylight, and keep window treatments sheer so the light is never sacrificed for privacy.',
            'Texture brings depth without clutter, and a restrained palette repeated throughout makes a smaller space feel generous and intentional. Leave room for the view and the quiet — a single piece of driftwood and an uninterrupted sightline outshine any crowded shelf.',
          ],
        },
        {
          summary: 'Designing for ease and longevity',
          paragraphs: [
            'Thoughtful design quietly supports independence. Keep primary living on a single level where you can, raise a favorite chair’s seat height slightly, and add well-placed grab points disguised as design — a sturdy towel bar, a handsome stair rail.',
            'Choose slip-resistant flooring, generous lighting at transitions, and lever handles that are kind to hands. None of this needs to look clinical; the most graceful accessible homes simply feel comfortable and effortless to move through.',
          ],
        },
        {
          summary: 'A palette inspired by the shore',
          paragraphs: [
            'Borrow your colors from the view: ocean blues, seafoam greens, sandy beiges, soft coral, and the warm gray of driftwood. Used together in gentle proportions, they create a calm that feels both timeless and unmistakably coastal.',
            'Anchor the scheme with coastal white on walls and trim, let natural materials carry the warmth, and add a single soft coral or sunset-peach accent for life. Restraint is the secret — a few well-chosen tones always feel more serene than many.',
          ],
        },
      ]}
      relatedSlugs={['designing-a-relaxing-coastal-home', 'a-coastal-garden-that-loves-salt-air', 'how-to-downsize-for-beach-living']}
      faqItems={[
        { q: 'Can a small home still feel airy and luxurious?', a: 'Absolutely — and often more so. Abundant light, a restrained palette, clear sightlines, and a few natural textures make a compact space feel calm and generous, without the upkeep of a larger home.' },
        { q: 'How do I make a home safer without it looking clinical?', a: 'Choose design that does double duty: a handsome stair rail, a sturdy towel bar near the bath, slip-resistant flooring, and good lighting at transitions. Graceful accessible homes simply feel comfortable to move through.' },
        { q: 'What colors work best for a coastal home?', a: 'Lean on ocean blue, seafoam green, sandy beige, driftwood gray, and coastal white, with a single soft coral or peach accent. Repeat three or four tones throughout for a restful, cohesive flow.' },
      ]}
    />
  );
}

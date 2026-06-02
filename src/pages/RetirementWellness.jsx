import TopicPage from '../components/TopicPage.jsx';
import { img } from '../assets/images.js';

export default function RetirementWellness() {
  return (
    <TopicPage
      path="/retirement-wellness"
      seoTitle="Retirement Wellness"
      seoDescription="Gentle, sustainable wellness for adults over 50 — oceanfront movement that protects your joints, nourishing habits, restful routines, and lasting calm."
      hero={{
        eyebrow: 'Retirement Wellness',
        title: 'Feel strong, rested, and at ease by the sea',
        intro: 'Wellness after 50 is not about punishing routines. It is about gentle, sustainable habits you can keep for decades — and the coast is one of the most forgiving places to begin.',
        image: img.wellness.yoga,
        imageAlt: 'Person practicing gentle yoga on a quiet beach at sunrise',
      }}
      intro={[
        'The years after 50 are a wonderful time to befriend your body again — not to push it, but to support it. Sustainable wellness rests on four quiet pillars: gentle movement, nourishing food, real rest, and steady connection. Neglect one and the others struggle to compensate.',
        'The encouraging truth is that small, regular efforts compound dramatically. Research consistently shows meaningful gains in strength, balance, and mood even when people begin in their seventies and eighties. The coast simply makes it easier — soft sand, flat boardwalks, and the quiet, measurable calm of the surf.',
      ]}
      features={[
        {
          heading: 'Movement that protects your joints',
          image: img.wellness.walking,
          imageAlt: 'Couple walking together along the shoreline',
          paragraphs: [
            'Walking on firm, damp sand near the waterline is easier on the knees than soft, dry sand, and it gently strengthens the small stabilizing muscles in the ankles and hips. Twenty unhurried minutes before the heat arrives is a perfect daily dose.',
            'Two or three times a week, add light resistance — a band, light dumbbells, or chair-supported squats. Maintaining muscle is the single most protective thing most of us can do for our independence as we age.',
          ],
        },
        {
          heading: 'Rest is a practice, not a reward',
          image: img.wellness.tea,
          imageAlt: 'Calming cup of tea by a sunlit window',
          paragraphs: [
            'Wellness is also stillness. Many readers tell us that ten quiet minutes watching the tide — no phone, no to-do list — does as much for them as any workout. The nervous system softens, and sleep that night comes easier.',
            'Pair gentle days with steady hydration and a protein-forward breakfast, and your energy will hold from morning to sunset. Let the ocean, not the clock, set the pace.',
          ],
        },
      ]}
      deepDives={[
        {
          summary: 'Oceanfront Wellness Routines',
          paragraphs: [
            'Begin with a twenty-minute morning walk before the heat arrives, choosing the firm sand near the waterline to protect your knees. Add a few minutes of slow, supported stretching afterward, using a bench or railing for balance.',
            'Two or three times a week, layer in light resistance with a band, light dumbbells, or body-weight squats. Consistency matters far more than intensity — the goal is a routine you can happily keep for decades, not one you dread.',
          ],
        },
        {
          summary: 'Balance and fall prevention',
          paragraphs: [
            'Balance work is the quiet hero of healthy aging. Standing on one foot while you brush your teeth, gentle tai chi, and heel-to-toe walking all train the systems that keep you steady — and fall prevention protects independence more than almost anything else.',
            'Practice near a counter or sturdy chair, breathe steadily, and progress slowly. A few minutes most days yields results you can feel within weeks: surer footing, more confidence, and a body you trust on uneven sand.',
          ],
        },
        {
          summary: 'Nourishment and rest',
          paragraphs: [
            'Eat with the seasons and lean on what the coast does best — fresh seafood, garden greens, and plenty of water through warm days. A protein-forward breakfast steadies energy and helps preserve the muscle that strength training builds.',
            'Protect your sleep as fiercely as your movement. A consistent wind-down, a darkened room, and a screen-free final half hour tell the body the day is complete. Rested, hydrated, and gently active is a combination that ages beautifully.',
          ],
        },
      ]}
      relatedSlugs={['oceanfront-wellness-routines', 'healthy-active-living-after-50', 'creating-a-relaxed-daily-routine']}
      faqItems={[
        { q: 'I haven’t exercised in years. Is it safe to start now?', a: 'For most people, gentle walking and supported stretching are very safe to begin at any age — but always check with your physician first, especially if you have heart, joint, or balance concerns. Start small and build slowly.' },
        { q: 'How much movement do I really need?', a: 'A daily twenty-minute walk plus two short strength and balance sessions a week covers the essentials. Consistency beats intensity every time; a routine you enjoy is one you will actually keep.' },
        { q: 'Does living near the ocean really help wellbeing?', a: 'Time near water is associated with lower stress and improved mood, and the coast’s flat, soft surfaces make gentle movement more accessible. The calm you feel watching the tide is real and worth building into your day.' },
      ]}
    />
  );
}

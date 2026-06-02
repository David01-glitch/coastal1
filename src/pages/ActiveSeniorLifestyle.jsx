import TopicPage from '../components/TopicPage.jsx';
import { img } from '../assets/images.js';

export default function ActiveSeniorLifestyle() {
  return (
    <TopicPage
      path="/active-senior-lifestyle"
      seoTitle="Active Senior Lifestyle"
      seoDescription="Stay strong, social, and curious after 50 — the clubs, hobbies, strength habits, and community connections that keep a coastal retirement vibrant."
      hero={{
        eyebrow: 'Active Senior Lifestyle',
        title: 'Stay strong, social, and curious',
        intro: 'A vibrant retirement is built on four quiet pillars — strength, balance, connection, and purpose. Here is how to keep all four thriving by the sea.',
        image: img.wellness.walking,
        imageAlt: 'Active senior couple walking briskly along the beach',
      }}
      intro={[
        'Active living after 50 is less about intensity and more about consistency, connection, and a reason to get up in the morning. The encouraging news is that small, regular efforts compound dramatically — people make meaningful gains in strength and mobility even when they begin in their seventies and eighties.',
        'The coast makes the active life easy and joyful. Flat boardwalks invite daily walks, marinas and gardens become gathering points, and the gentle pace leaves room for the hobbies and friendships that keep a retirement genuinely alive.',
      ]}
      features={[
        {
          heading: 'Strength and balance, the quiet heroes',
          image: img.wellness.stretch,
          imageAlt: 'Gentle stretching session by the sea',
          paragraphs: [
            'Strength training twice a week protects bone density and the muscle that keeps you steady on your feet. You do not need a gym — bands, light dumbbells, and chair-supported movements work beautifully at home.',
            'Balance work — standing on one foot, gentle tai chi, heel-to-toe walking — is the unsung hero of staying independent. A few minutes most days measurably reduces the risk of falls.',
          ],
        },
        {
          heading: 'Connection is medicine',
          image: img.community.garden,
          imageAlt: 'Friends gathering in a community garden',
          paragraphs: [
            'Loneliness carries health risks comparable to smoking, while a strong social circle is linked to longer, happier lives. Joining one group — a walking club, a garden circle, a card game, a volunteer crew — is among the most powerful things you can do for your health.',
            'The coast makes this effortless. Shared sunsets and walkable downtowns are natural gathering points; for newcomers, a friendly group is the fastest path from stranger to friend.',
          ],
        },
      ]}
      deepDives={[
        {
          summary: 'Healthy Active Living After 50',
          paragraphs: [
            'Active living rests on four pillars: strength, balance, cardiovascular health, and connection. Strength training twice weekly, daily walking for the heart, and a little balance work cover the physical essentials without ever requiring a gym.',
            'Connection may be the most underrated medicine of all, and purpose the spark that turns healthy habits into a life you look forward to. Find your reason to rise — a grandchild, a garden, a craft, a cause — and the rest follows.',
          ],
        },
        {
          summary: 'How Communities Help Active Seniors Thrive',
          paragraphs: [
            'A house near the water is wonderful, but it is community that turns an address into a life. The strongest coastal communities make connection effortless — shared docks, walkable downtowns, community gardens, and lending libraries create natural, low-pressure places to meet.',
            'Clubs and volunteer groups give social life structure, and for newcomers they are the fastest route from stranger to friend. If you are moving somewhere new, be the one who reaches out first; community is built one friendly conversation at a time.',
          ],
        },
        {
          summary: 'Hobbies that keep the mind bright',
          paragraphs: [
            'Curiosity is its own kind of fitness. Learning a new skill — watercolor, birdwatching, kayaking, a musical instrument — builds new neural pathways and gives the week a rhythm of small, satisfying progress.',
            'The coast offers a natural curriculum: shell identification, tide-pool exploration, photography of the changing light, or simply tending a salt-tolerant garden. Pair a hobby with a group and you nourish body, mind, and friendship all at once.',
          ],
        },
      ]}
      relatedSlugs={['healthy-active-living-after-50', 'how-communities-help-active-seniors-thrive', 'oceanfront-wellness-routines']}
      faqItems={[
        { q: 'What is the single most important habit for active aging?', a: 'If we had to choose one: regular strength and balance work. Preserving muscle and steadiness protects your independence more than almost anything else — and it is never too late to start.' },
        { q: 'How do I make new friends after moving in retirement?', a: 'Join one group within your first season and be the one who reaches out first. Walking clubs, garden circles, and volunteer crews are welcoming by nature and the fastest path from newcomer to neighbor.' },
        { q: 'I’m not very social. Can I still thrive?', a: 'Yes. Even a single regular connection — a weekly coffee, a walking partner — delivers real benefits. Start small, choose a low-pressure setting, and let it grow at your own pace.' },
      ]}
    />
  );
}

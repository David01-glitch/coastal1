import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Accordion from '../components/Accordion.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { img } from '../assets/images.js';
import { site } from '../data/site.js';

const clubs = [
  ['Sunrise Walking Group', 'A gentle 30-minute stroll along the boardwalk every weekday at 7am. Benches every quarter mile, no one left behind.', img.wellness.walking],
  ['Marina Supper Club', 'A rotating Friday potluck on the docks. Bring a dish, a chair, and a story. Sunset included.', img.community.marina],
  ['Coastal Garden Circle', 'Saturday mornings tending the community beds — salt-tolerant natives, herbs, and a lot of laughter.', img.community.garden],
  ['Seaside Reading Café', 'A relaxed book chat over coffee at the corner café. New members and quiet listeners always welcome.', img.community.cafe],
];

const stories = [
  {
    summary: 'Finding friendship at 67, two states from home',
    paragraphs: [
      'When Carol relocated to Beaufort after retiring, she worried she had left her whole social world behind. “I had spent forty years building friendships,” she said, “and suddenly I was the new person who knew no one.” The first month was lonely. Then a neighbor invited her to the Saturday garden circle.',
      'Within weeks Carol had a standing coffee date, a reason to be up early, and three people who noticed when she was under the weather. “The garden was never really about the tomatoes,” she laughs. “It was about belonging. I just needed one door to open.”',
    ],
  },
  {
    summary: 'How a walking group became a lifeline',
    paragraphs: [
      'Edward joined the Sunrise Walking Group reluctantly, mostly to quiet his doctor. He expected to last a week. Two years later he is the one who texts newcomers the meeting spot and makes sure no one walks alone.',
      'After a brief hospital stay last winter, it was the walking group that brought meals, drove him to appointments, and walked the route past his window so he would not feel forgotten. “You think you join for the exercise,” he says. “You stay for the people who show up.”',
    ],
  },
];

export default function Community() {
  return (
    <>
      <SEO
        title="Community"
        description="Meet the Coastal Retirement Life community — walking groups, supper clubs, garden circles, and the friendships that make a beach retirement thrive."
        path="/community"
      />
      <PageHero
        eyebrow="Together by the Sea"
        title="A community that waves hello"
        intro="The shore is more beautiful shared. Meet the clubs, neighbors, and gatherings that turn a coastal address into a real, rooted life."
        image={img.community.dock}
        imageAlt="Group of friends gathered on a sunlit dock at a coastal community"
      />

      <section className="container-page py-16">
        <div className="prose-coastal mx-auto max-w-3xl text-lg">
          <p>
            Decades of research keep arriving at the same gentle truth: the people around us shape our health
            and happiness as much as anything we eat or any exercise we do. A strong community is linked to
            longer, brighter lives — and the coast, with its shared sunsets and unhurried pace, makes connection
            wonderfully easy.
          </p>
          <p>
            The Coastal Retirement Life community is not a gated club or a paid membership. It is the loose,
            warm web of readers, walking partners, gardeners, and neighbors who have found one another along the
            Southeast shore. Below are a few of the gatherings our readers love most — and a couple of true
            stories about how belonging changed everything.
          </p>
        </div>
      </section>

      <section className="container-page my-12">
        <SectionHeading center eyebrow="Gather" title="Clubs and gatherings" intro="Low-pressure, easy to join, and always glad to see a new face." />
        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {clubs.map(([t, d, image]) => (
            <div key={t} className="card flex flex-col overflow-hidden sm:flex-row">
              <div className="sm:w-2/5">
                <img src={image} alt={t} loading="lazy" className="h-48 w-full object-cover sm:h-full" />
              </div>
              <div className="p-6 sm:w-3/5">
                <h3 className="text-xl text-ocean-900">{t}</h3>
                <p className="mt-2 text-ocean-800/80">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page my-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading center eyebrow="Real Stories" title="Belonging, in their words" />
          <div className="mt-10 rounded-3xl bg-white p-2 shadow-card sm:p-6">
            {stories.map((s, i) => (
              <Accordion key={i} summary={s.summary} toggleLabel="Read story" defaultOpen={i === 0}>
                {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="container-page my-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl bg-ocean-fade p-10 shadow-card">
          <h2 className="text-3xl">Want to start something where you live?</h2>
          <p className="mt-4 text-ocean-800/85">
            Tell us your town and what you would love to gather around — walking, gardening, books, kayaks,
            sunsets. We will share resources and help connect you with readers nearby.
          </p>
          <Link to="/contact" className="btn-primary mt-7">Reach out to us</Link>
          <p className="mt-4 text-sm text-ocean-700/80">Or email <a href={`mailto:${site.email}`} className="underline">{site.email}</a></p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

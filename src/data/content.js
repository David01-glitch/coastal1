import { img } from '../assets/images.js';

export const categories = [
  {
    slug: 'coastal-living',
    to: '/coastal-living',
    title: 'Coastal Living',
    image: img.beaches.charleston,
    blurb:
      'The everyday rhythm of life by the water — salt air mornings, slower afternoons, and a community that waves hello.',
  },
  {
    slug: 'beach-retirement-guides',
    to: '/beach-retirement-guides',
    title: 'Beach Retirement Guides',
    image: img.community.marina,
    blurb:
      'Practical, honest planning — choosing a town, budgeting, downsizing, and settling into a place that feels like home.',
  },
  {
    slug: 'oceanfront-travel',
    to: '/oceanfront-travel',
    title: 'Oceanfront Travel',
    image: img.travel.town,
    blurb:
      'Unhurried coastal escapes, harbor towns, and the kind of trips that are gentle on the knees and rich on the soul.',
  },
  {
    slug: 'retirement-wellness',
    to: '/retirement-wellness',
    title: 'Retirement Wellness',
    image: img.wellness.yoga,
    blurb:
      'Movement, rest, and nourishment designed for life after 50 — sustainable habits, not punishing routines.',
  },
  {
    slug: 'tropical-home-design',
    to: '/tropical-home-design',
    title: 'Coastal Home Design',
    image: img.homes.interior,
    blurb:
      'Airy, light-filled interiors with driftwood textures and ocean tones that make a smaller home feel boundless.',
  },
  {
    slug: 'active-senior-lifestyle',
    to: '/active-senior-lifestyle',
    title: 'Active Senior Lifestyle',
    image: img.wellness.walking,
    blurb:
      'Staying strong, social, and curious — the clubs, hobbies, and routines that keep retirement vibrant.',
  },
];

export const testimonials = [
  {
    quote:
      'We spent two years agonizing over where to retire. Coastal Retirement Life gave us the honest, unglamorous details — flood zones, walkability, the real cost of a sea view — that finally helped us choose Mount Pleasant. Eighteen months in and we have never looked back.',
    name: 'Margaret & Daniel R.',
    location: 'Mount Pleasant, SC',
    image: img.lifestyle.couple,
  },
  {
    quote:
      'I downsized from a four-bedroom house to a bright two-bedroom near the marina. The downsizing checklist here walked me through it room by room. I kept what mattered and let the rest go — and I sleep better than I have in years.',
    name: 'Carol T.',
    location: 'Beaufort, SC',
    image: img.lifestyle.reading,
  },
  {
    quote:
      'At 63 I thought my best walking days were behind me. The gentle oceanfront wellness routines got me moving again — twenty minutes on the boardwalk each morning. My doctor noticed. So did my grandchildren.',
    name: 'Edward M.',
    location: 'Tybee Island, GA',
    image: img.wellness.walking,
  },
  {
    quote:
      'The travel guides are written for people like me — they tell you where the benches are, which ferries are easy to board, and where to find a quiet table at sunset. It is travel writing that respects how I actually move through the world now.',
    name: 'Patricia L.',
    location: 'Wilmington, NC',
    image: img.travel.harbor,
  },
];

export const faqs = [
  {
    q: 'Is Coastal Retirement Life a real publication or a place to buy property?',
    a: 'We are an independent editorial lifestyle blog — not a real-estate brokerage, financial advisor, or relocation agency. We publish original guides, interviews, and stories to help adults over 50 imagine and plan a life near the coast. We do not sell homes, manage money, or take commissions on any property.',
  },
  {
    q: 'Who writes the articles?',
    a: 'Our small editorial team is led by founder Eleanor Hayes, a former community-magazine editor who relocated to Charleston in her late fifties. Articles draw on first-hand reporting, interviews with retirees, and conversations with local guides, designers, and wellness instructors along the Southeast coast.',
  },
  {
    q: 'Do I have to live on the ocean to enjoy this site?',
    a: 'Not at all. Many of our readers live inland and visit the coast a few times a year, while others are years away from retiring and simply love the dream. Our wellness, home design, and lifestyle guides translate beautifully to any setting that values light, calm, and gentle movement.',
  },
  {
    q: 'How often do you publish new content?',
    a: 'We publish two to four in-depth articles each month, plus seasonal travel features and an occasional reader story. Joining our free newsletter is the easiest way to receive each new guide along with a short, unhurried note from the editor.',
  },
  {
    q: 'Is the newsletter free, and will you share my email?',
    a: 'The newsletter is completely free, and we will never sell, rent, or share your email address. You can unsubscribe with one click at any time. See our Privacy Policy for the full details on how we handle your information.',
  },
  {
    q: 'Can I suggest a town, topic, or share my own retirement story?',
    a: 'We would love that. Many of our best features began as reader emails. Write to us at coastalretirementlife@gmail.com with your idea, your town, or your story, and a member of our team will personally reply.',
  },
];

// Full long-form articles. `body` paragraphs are rendered in HTML and revealed
// inline via a CSS accordion — the text exists in source even with JS disabled.
export const posts = [
  {
    slug: 'best-coastal-cities-for-retirement',
    title: 'Best Coastal Cities for Retirement in the Southeast',
    category: 'Beach Retirement Guides',
    author: 'Eleanor Hayes',
    readingTime: '9 min read',
    date: 'March 4, 2024',
    image: img.blog.cities,
    excerpt:
      'From Charleston’s cobblestone charm to the quiet marshes of the Lowcountry, here is how to weigh climate, cost, healthcare, and walkability when choosing where to spend your coastal retirement.',
    body: [
      'Choosing where to retire by the coast is less about finding the prettiest postcard and more about finding the place where your ordinary Tuesday feels good. We always tell readers to start with the unglamorous list before the romantic one: proximity to quality healthcare, the real cost of homeowners and flood insurance, summer humidity, and how far you have to drive for a gallon of milk.',
      'Charleston, South Carolina remains a favorite for its walkable historic core, a genuinely excellent medical community, and an airport that makes visiting grandchildren simple. The trade-off is price — the peninsula commands a premium. Many retirees find better value just across the rivers in Mount Pleasant, James Island, or Summerville, where you keep the culture and lose some of the cost.',
      'Further south, Beaufort and the Sea Islands offer a slower, marsh-laced pace with a fraction of the traffic. Savannah, Georgia pairs a beloved historic district with a lower cost of living than its South Carolina neighbors. On the North Carolina coast, Wilmington balances a riverfront downtown with nearby beaches at Wrightsville and Carolina Beach, and it has a growing roster of physicians.',
      'Whichever town tempts you, rent before you buy. Spend a full month — ideally in August, the hardest month — before committing. Walk the neighborhood at night, sit in the local coffee shop on a weekday, and notice whether you feel like a visitor or a resident. The right coastal city is the one that already feels a little like home before you have unpacked a single box.',
    ],
  },
  {
    slug: 'how-to-downsize-for-beach-living',
    title: 'How to Downsize for Beach Living Without Regret',
    category: 'Coastal Living',
    author: 'Eleanor Hayes',
    readingTime: '8 min read',
    date: 'February 18, 2024',
    image: img.blog.downsizing,
    excerpt:
      'A calm, room-by-room approach to letting go — so the home you carry to the coast holds only what you love and use.',
    body: [
      'Downsizing is rarely about square footage; it is about deciding what your next chapter is for. Before you sort a single drawer, picture the life you want at the coast: long mornings on the porch, friends over for supper, a guest room for the grandchildren. Let that picture, not guilt or sentiment, guide what comes with you.',
      'Work one room at a time and give yourself weeks, not a weekend. We recommend four labeled zones — keep, gift, sell, and let go — and a firm rule that nothing moves back into the keep pile once it has left. Photographs of sentimental objects preserve the memory while freeing the shelf; a single well-chosen keepsake honors a loved one better than a basement full of boxes.',
      'Coastal homes ask for lighter, more flexible furnishings. Heavy dark wood and formal dining sets rarely suit an airy beach interior, and they are expensive to move. Sell them locally and let your new home tell you what it needs once you are living in the light. Measure doorways and elevators before moving day — many a beloved sofa has met its match at a stairwell.',
      'Finally, be gentle with yourself. Letting go of the family home stirs real grief, and that is healthy. Mark the moment, thank the house, and walk toward the water knowing that the life ahead has room to breathe.',
    ],
  },
  {
    slug: 'oceanfront-wellness-routines',
    title: 'Oceanfront Wellness Routines for a Calmer Body and Mind',
    category: 'Retirement Wellness',
    author: 'Dr. Naomi Pierce',
    readingTime: '7 min read',
    date: 'February 2, 2024',
    image: img.blog.wellness,
    excerpt:
      'Gentle, sustainable routines built around the shoreline — movement that protects your joints and a rhythm that protects your peace.',
    body: [
      'The coast is one of the most forgiving places to stay active after 50. Sand offers natural cushioning, the flat boardwalk is endlessly walkable, and the sound of the surf does quiet, measurable good for the nervous system. The goal is not intensity; it is consistency you can keep for decades.',
      'Begin with a twenty-minute morning walk before the heat arrives. Walking on firm, damp sand near the waterline is easier on the knees than soft, dry sand, and it gently strengthens the small stabilizing muscles in the ankles and hips. Add a few minutes of slow, supported stretching afterward, using a bench or railing for balance.',
      'Two or three times a week, layer in light resistance — a resistance band, a pair of light dumbbells, or simply your own body weight in chair-supported squats. Maintaining muscle is the single most protective thing most of us can do for our independence as we age. Pair movement with hydration and a protein-forward breakfast, and your energy through the day will follow.',
      'Wellness is also stillness. Many readers tell us that ten quiet minutes watching the tide — no phone, no to-do list — does as much for them as any workout. Build a routine that honors both the body and the breath, and let the ocean set the pace.',
    ],
  },
  {
    slug: 'designing-a-relaxing-coastal-home',
    title: 'Designing a Relaxing Coastal Home',
    category: 'Coastal Home Design',
    author: 'Marcus Bell',
    readingTime: '8 min read',
    date: 'January 20, 2024',
    image: img.blog.homeDesign,
    excerpt:
      'How light, texture, and a restrained palette turn even a modest space into a serene, airy retreat by the sea.',
    body: [
      'A relaxing coastal home is built on light first and objects second. Before you choose a single paint color, study how the sun moves through your rooms. South-facing spaces can carry cooler whites and seafoam tones; rooms that see less light warm up beautifully with sandy beige and driftwood gray. Keep window treatments sheer and simple so the daylight is never the price you pay for privacy.',
      'Texture does the heavy lifting in a calm interior. Linen slipcovers, jute rugs, rattan accents, and weathered wood add depth without clutter or noise. A restrained palette — three or four coastal tones repeated throughout the home — creates a sense of flow that makes a smaller space feel generous and intentional rather than sparse.',
      'Choose furniture you can actually live with. Rounded edges, washable fabrics, and pieces light enough to rearrange make a home both safer and more flexible as needs change. Raise the seat height slightly on a favorite chair, add a few well-placed grab points disguised as design, and keep primary living on a single level where you can.',
      'Finally, leave room for the view and for the quiet. Resist the urge to fill every wall. A single piece of driftwood, a bowl of beach glass, and an uninterrupted sightline to the water will always feel more luxurious than a crowded shelf.',
    ],
  },
  {
    slug: 'healthy-active-living-after-50',
    title: 'Healthy Active Living After 50',
    category: 'Active Senior Lifestyle',
    author: 'Dr. Naomi Pierce',
    readingTime: '7 min read',
    date: 'January 8, 2024',
    image: img.blog.active,
    excerpt:
      'The simple, social habits that keep retirement vigorous — strength, balance, connection, and a reason to get up in the morning.',
    body: [
      'Active living after 50 rests on four pillars: strength, balance, cardiovascular health, and connection. Neglect any one and the others struggle to compensate. The encouraging news is that small, regular efforts compound dramatically — research consistently shows meaningful gains in strength and mobility even when people begin in their seventies and eighties.',
      'Strength training twice a week protects bone density and the muscle that keeps you steady on your feet. Balance work — standing on one foot while brushing your teeth, gentle tai chi, heel-to-toe walking — is the quiet hero of fall prevention. Add a daily walk for the heart, and you have covered the essentials without ever stepping into a gym if you prefer not to.',
      'Connection may be the most underrated medicine of all. Loneliness carries health risks comparable to smoking, while a strong social circle is linked to longer, happier lives. Join a walking club, a community garden, a card group, or a volunteer crew. The coast makes this easy — shared sunsets are natural gathering points.',
      'Above all, find a reason to rise. Purpose, whether it is a grandchild, a garden, a craft, or a cause, is what turns healthy habits into a life you genuinely look forward to.',
    ],
  },
  {
    slug: 'budgeting-for-coastal-retirement',
    title: 'Budgeting for Coastal Retirement: An Honest Breakdown',
    category: 'Beach Retirement Guides',
    author: 'Eleanor Hayes',
    readingTime: '10 min read',
    date: 'December 14, 2023',
    image: img.blog.budget,
    excerpt:
      'The line items most people forget — insurance, maintenance, and the true cost of paradise — laid out plainly so there are no surprises.',
    body: [
      'A coastal retirement budget lives or dies on the line items people forget. The mortgage or rent is the easy part. The surprises tend to be insurance, ongoing maintenance against salt and humidity, and the lifestyle spending that a beautiful setting quietly encourages. Plan for all three and the dream stays affordable.',
      'Homeowners insurance near the water often costs several times the national average, and separate flood and wind policies are common requirements. Before you fall in love with a property, get an actual insurance quote for that specific address — not an estimate — and fold the real number into your monthly math. Ask neighbors what they pay; the difference between two streets can be striking.',
      'Salt air is relentless. Budget annually for exterior upkeep — repainting, rust prevention on fixtures, HVAC servicing, and roof inspections. A reasonable rule of thumb is one to two percent of the home’s value each year for maintenance, weighted higher for older or oceanfront properties. Building this into your plan prevents a single repair from becoming a crisis.',
      'Finally, give your lifestyle a number. Coastal towns invite dining out, boating, golf, and travel, and those joys add up. A simple monthly fun budget keeps spontaneity alive without anxiety. The retirees who thrive are rarely the wealthiest — they are the ones whose plan matches the life they actually want to live.',
    ],
  },
  {
    slug: 'best-beach-towns-in-the-southeast',
    title: 'Best Beach Towns in the Southeast for a Slower Pace',
    category: 'Oceanfront Travel',
    author: 'Patricia Lowe',
    readingTime: '8 min read',
    date: 'November 30, 2023',
    image: img.blog.towns,
    excerpt:
      'Eight walkable, welcoming towns where the pace is gentle, the seafood is fresh, and a porch is never far away.',
    body: [
      'Not every beach town is built for a slower pace. The ones we return to share a few traits: a walkable center, benches and shade, fresh local seafood, and a community that feels lived-in rather than rented. Here are the Southeastern towns our readers love most for an unhurried day or a long, easy stay.',
      'Beaufort, South Carolina and its quiet cousin across the state line, Beaufort, North Carolina, both reward slow wandering — waterfront boardwalks, shaded squares, and porches made for afternoon tea. Tybee Island near Savannah keeps things small and barefoot, while St. Simons Island offers gentle bike paths beneath moss-draped oaks.',
      'On the North Carolina coast, Southport charms with its tree-lined streets and easy ferry to Bald Head Island, where golf carts replace cars entirely. Fernandina Beach on Florida’s Amelia Island blends a historic downtown with wide, flat sands perfect for a morning stroll. Each of these towns proves that the best coastal travel is measured in conversations, not miles.',
      'Wherever you go, travel like a resident. Arrive midweek, eat where the locals eat, and leave room in the day for nothing in particular. The slow pace is the destination.',
    ],
  },
  {
    slug: 'retirement-travel-packing-tips',
    title: 'Retirement Travel Packing Tips for Easy, Joyful Trips',
    category: 'Oceanfront Travel',
    author: 'Patricia Lowe',
    readingTime: '6 min read',
    date: 'November 12, 2023',
    image: img.blog.packing,
    excerpt:
      'Pack lighter, move easier, and protect your peace of mind with a system built for comfortable coastal travel after 50.',
    body: [
      'The secret to joyful travel after 50 is packing less and planning more. A lighter bag means less strain on your back and shoulders, easier transfers, and fewer things to track. We swear by a single carry-on built around a neutral color palette so every top pairs with every bottom and a week’s wardrobe fits in a small case.',
      'Comfort is non-negotiable on the coast. Pack broken-in walking shoes, a packable sun hat, polarized sunglasses, and lightweight layers for cool harbor evenings. A compact daypack carries water, a refillable snack, and any midday medications. Speaking of which — keep a full list of your medications, dosages, and your physician’s contact in both your phone and a printed card in your wallet.',
      'Organize by system, not by pile. Packing cubes turn a chaotic suitcase into tidy drawers; one cube for tops, one for bottoms, one for essentials. Keep a small kit of chargers, adapters, and a backup pair of reading glasses in your personal item so a delayed bag never derails the trip.',
      'Above all, protect your peace of mind. Photograph your passport and insurance card, share your itinerary with a family member, and build in buffer time between connections. Unhurried travel is the only kind worth doing.',
    ],
  },
  {
    slug: 'creating-a-relaxed-daily-routine',
    title: 'Creating a Relaxed Daily Routine by the Water',
    category: 'Coastal Living',
    author: 'Eleanor Hayes',
    readingTime: '6 min read',
    date: 'October 28, 2023',
    image: img.blog.routine,
    excerpt:
      'Structure and serenity are not opposites. Here is how a gentle daily rhythm makes coastal retirement feel both purposeful and free.',
    body: [
      'Retirement removes the scaffolding of a work schedule, and for many people that freedom is unexpectedly disorienting. A gentle daily rhythm — not a rigid timetable — restores a sense of purpose while preserving the spaciousness you worked so hard to earn. The coast offers natural anchors: the morning light, the tide chart, the cooling of evening.',
      'Start the day with a small, repeatable ritual. A walk to the water, coffee on the porch, ten minutes of reading or stretching — the content matters less than the consistency. A reliable morning sets a calm tone that carries through the hours that follow.',
      'Build the middle of the day around one meaningful activity and one bit of connection. That might be tending the garden and meeting a friend for lunch, or volunteering in the morning and calling a grandchild in the afternoon. Two intentional anchors are enough; the rest can stay gloriously open.',
      'Close the day deliberately. Watching the sunset, jotting a line of gratitude, or simply sitting quietly tells the body the day is complete. A relaxed routine is not about filling time — it is about giving your days a gentle shape so that freedom feels like a gift rather than a void.',
    ],
  },
  {
    slug: 'how-communities-help-active-seniors-thrive',
    title: 'How Communities Help Active Seniors Thrive',
    category: 'Active Senior Lifestyle',
    author: 'Marcus Bell',
    readingTime: '7 min read',
    date: 'October 9, 2023',
    image: img.blog.thrive,
    excerpt:
      'The quiet power of belonging — how clubs, neighbors, and shared spaces turn a coastal address into a real community.',
    body: [
      'A house near the water is a wonderful thing, but it is community that turns a coastal address into a life. Decades of research point to the same conclusion: the people around us shape our health, our resilience, and our happiness as we age, often more than diet or exercise alone.',
      'The strongest coastal communities make connection effortless. Shared docks and marinas, walkable downtowns, community gardens, and lending libraries create natural, low-pressure places to bump into a neighbor. When you tour a potential town, notice whether public life happens out in the open — that visibility is a sign of a community you can join rather than merely live beside.',
      'Clubs and volunteer groups give structure to social life. A weekly walking group, a shell-collecting society, a kayak club, or a beach-cleanup crew offers companionship and purpose in equal measure. For newcomers, these groups are the fastest path from stranger to friend, and most welcome new faces warmly.',
      'If you are moving somewhere new, be the one who reaches out first. Host a small porch gathering, learn your neighbors’ names, say yes to invitations. Community rarely arrives unbidden; it is built, one friendly conversation at a time — and the coast, with its shared sunsets and slow pace, gives you endless reasons to begin.',
    ],
  },
  {
    slug: 'sunset-dining-along-the-coast',
    title: 'Sunset Dining Along the Coast: A Slow Evening Guide',
    category: 'Oceanfront Travel',
    author: 'Patricia Lowe',
    readingTime: '6 min read',
    date: 'September 22, 2023',
    image: img.blog.dining,
    excerpt:
      'How to turn an ordinary dinner into the highlight of a coastal day — timing, tables, and the art of the unhurried evening.',
    body: [
      'There is a particular magic to dining as the sun goes down over the water, and a little planning turns it from a nice meal into the centerpiece of the day. The first rule is timing: check the day’s sunset, then reserve a table for forty-five minutes before it. You will be seated and settled as the light begins its show.',
      'Ask for the right table. Most waterfront restaurants know exactly which seats catch the sunset, and a polite request when you book often secures one. If the prime tables are gone, an early drink at the bar facing the water is a lovely consolation — and frequently the better seat.',
      'Order to linger. Sunset dining is not about a quick bite; it is about a slow procession of small pleasures. Start with a chilled local oyster or a cup of she-crab soup, share a plate, and let the evening unfold course by course. The coast’s freshest seafood needs little embellishment.',
      'When the light is gone and the candles are lit, resist the rush to leave. A short walk along the water afterward — to settle the meal and the mind — is the perfect, unhurried end to a coastal day.',
    ],
  },
  {
    slug: 'a-coastal-garden-that-loves-salt-air',
    title: 'A Coastal Garden That Loves Salt Air',
    category: 'Coastal Living',
    author: 'Marcus Bell',
    readingTime: '7 min read',
    date: 'September 5, 2023',
    image: img.blog.garden,
    excerpt:
      'Low-maintenance, salt-tolerant plantings that reward you with color and calm — gardening designed for ease and joy.',
    body: [
      'Gardening by the sea has its own rulebook. Salt spray, sandy soil, and steady wind defeat many classic garden favorites, but a thoughtfully chosen coastal garden can be both stunning and refreshingly low-maintenance — exactly what most of us want more of in retirement.',
      'Choose plants that evolved for the conditions. Sea oats, beach rosemary, muhly grass, oleander, and native palmetto thrive on salt air and shrug off drought once established. Ornamental grasses add movement and sound as the breeze passes through, while succulents store their own water and ask almost nothing of you in return.',
      'Improve the soil and let mulch do the work. A generous layer of mulch holds moisture, suppresses weeds, and protects roots from the heat — meaning less watering and less weeding for you. Raised beds at a comfortable working height save your back and make tending the garden a pleasure rather than a chore.',
      'Design for relaxation, not just for show. A bench in the shade, a small water feature to soften the wind, and a fragrant herb or two near the door turn the garden into a place you actually sit in. The best coastal gardens give back far more peace than they ask in effort.',
    ],
  },
];

export const featuredSlugs = [
  'best-coastal-cities-for-retirement',
  'oceanfront-wellness-routines',
  'designing-a-relaxing-coastal-home',
];

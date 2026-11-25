// Tours and day trips used by the Tours pages, the Tour Finder and the Trip Planner.
// Travel times are approximate one-way drives from the Cancún Hotel Zone.
// No prices here on purpose: tour prices change constantly. Add a priceFromUSD only
// with a "checked" month once Esteban (or the tour affiliate) confirms it.

export type Interest =
  | 'sea-life' | 'ruins' | 'cenotes' | 'theme-parks' | 'beach' | 'adrenaline' | 'food-culture' | 'party' | 'nature';

export interface Tour {
  slug: string;
  name: string;
  short: string;
  interests: Interest[];
  kids: 'great' | 'ok' | 'no';
  energy: 1 | 2 | 3; // 1 = easy, 3 = active
  length: 'half' | 'full';
  travel: string;
  months?: number[]; // 1–12, only for seasonal tours
  localTip: string;
  goodFor: string;
  skipIf: string;
  where?: [number, number]; // approximate map pin
  reviewed?: { videoId?: string; chapters?: { label: string; start: number }[]; videoDate?: string; verdict?: string; notes?: string[]; prices?: { text: string; checked: string } };
}

export const INTEREST_LABELS: Record<Interest, string> = {
  'sea-life': 'Sea life & snorkeling',
  ruins: 'Mayan ruins & history',
  cenotes: 'Cenotes (natural pools)',
  'theme-parks': 'Eco & theme parks',
  beach: 'Islands & beaches',
  adrenaline: 'Adrenaline',
  'food-culture': 'Food & local culture',
  party: 'Party & nightlife',
  nature: 'Nature & wildlife',
};

export const TOURS: Tour[] = [
  {
    slug: 'whale-shark-tour-cancun', where: [21.2587, -86.748], name: 'Swim with whale sharks',
    short: 'Boat out to open water and snorkel next to the biggest fish on the planet.',
    interests: ['sea-life', 'nature', 'adrenaline'], kids: 'ok', energy: 3, length: 'full',
    travel: 'Boats leave from Cancún or Isla Mujeres; the sharks are 1–2+ hours offshore',
    months: [6, 7, 8, 9],
    localTip: 'Season runs roughly June to September, with July and August the most reliable. Take seasickness pills before you board — the open sea can be rough.',
    goodFor: 'Confident swimmers who want a once-in-a-lifetime animal encounter.',
    skipIf: 'You get badly seasick or are not comfortable in deep open water.',
  },
  {
    slug: 'chichen-itza-day-trip', where: [20.6843, -88.5678], name: 'Chichén Itzá day trip',
    short: 'The famous pyramid of El Castillo, usually combined with a cenote swim and lunch in Valladolid.',
    interests: ['ruins', 'cenotes', 'food-culture'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 2.5–3 hours each way',
    localTip: 'Leave as early as possible. The site gets hot and crowded by late morning, and there is very little shade.',
    goodFor: 'First-timers who want to see the most famous Mayan site in Mexico.',
    skipIf: 'You hate long bus days — it is a lot of time on the road.',
  },
  {
    slug: 'isla-mujeres-day-trip', where: [21.232, -86.731], name: 'Isla Mujeres day trip',
    short: 'Ferry or catamaran to a laid-back island with calm, shallow beaches and golf carts.',
    interests: ['beach', 'sea-life', 'food-culture'], kids: 'great', energy: 1, length: 'full',
    travel: 'Short ferry ride from Puerto Juárez or the Hotel Zone',
    localTip: 'Rent a golf cart and drive to Punta Sur at the south tip, then end the day at Playa Norte for sunset.',
    goodFor: 'Anyone who wants an easy, cheap, beautiful day without a big tour.',
    skipIf: 'You want wild, empty beaches — Playa Norte gets busy.',
  },
  {
    slug: 'catamaran-isla-mujeres', where: [21.145, -86.762], name: 'Catamaran party to Isla Mujeres',
    short: 'Open bar, music and a snorkel stop on the way to the island.',
    interests: ['party', 'beach', 'sea-life'], kids: 'no', energy: 2, length: 'full',
    travel: 'Leaves from the Hotel Zone marinas',
    localTip: 'Choose a smaller boat if you care more about snorkeling than partying — the big ones are loud and crowded.',
    goodFor: 'Groups of friends and bachelor or bachelorette trips.',
    skipIf: 'You want a quiet day or are travelling with kids.',
  },
  {
    slug: 'xcaret-park', where: [20.58, -87.1197], name: 'Xcaret park',
    short: 'Huge eco-park with underground rivers, animals, beaches and a big Mexican night show.',
    interests: ['theme-parks', 'nature', 'food-culture', 'sea-life'], kids: 'great', energy: 2, length: 'full',
    travel: 'About 1 hour 15 minutes south',
    localTip: 'Stay for the evening show (Xcaret México Espectacular) — it is the best part and many people leave before it.',
    goodFor: 'Families and first-timers who want a lot in one day.',
    skipIf: 'You dislike crowds and organised attractions.',
  },
  {
    slug: 'xel-ha-park', where: [20.3186, -87.3583], name: 'Xel-Há park',
    short: 'Eco-park in a natural inlet: float down a river, cliff jumps, a rope walk, a zipline into the water and a huge waterslide tower.',
    interests: ['theme-parks', 'sea-life', 'beach', 'nature'], kids: 'great', energy: 1, length: 'full',
    travel: 'About 1 hour 20 minutes from Cancún; about 45 minutes from Playa del Carmen',
    localTip: 'Get the all-inclusive ticket — it only costs about $40 more for adults ($20 for kids) and includes three restaurants and a good open bar. Arrive at opening if you want to do everything.',
    goodFor: 'Travellers who are not staying at an all-inclusive and want a relaxed day in nature with food and drinks included.',
    skipIf: "You're already at a big all-inclusive resort, or you want real reef snorkeling or lots of adventure (pick Xplor instead).",
    reviewed: {
      videoId: 'WliNeiRTrXg', videoDate: '2026-04',
      chapters: [{ label: 'Tickets & info', start: 15 }, { label: 'Vibe', start: 97 }, { label: 'Activities', start: 266 }, { label: 'Scenic tower', start: 384 }, { label: 'Food & drinks', start: 487 }, { label: 'Is it worth it?', start: 597 }],
      verdict: "Worth it if you're not staying at an all-inclusive and want a relaxing day in nature. If your resort already has pools, a beach and unlimited food and drinks, it feels like more of the same.",
      notes: [
        'Two tickets with the same activities: Light (soft drinks only) and All-Inclusive (breakfast, lunch, three restaurants and an open bar with well-known brands).',
        'The best activities: the two cliff jumps, the rope walk, the zipline into the water and the scenic tower waterslide — one of the most fun things I have ever done.',
        'Snorkeling is mostly sand and a few fish. For real snorkeling, do a reef tour in Puerto Morelos.',
        'Even with crowds in February, the park is so big it never felt packed, and restaurant lines move fast.',
        'We arrived at 11 and finished everything around 6 p.m. Get there at opening if you also want paid extras.',
      ],
    },
  },
  {
    slug: 'xplor-park', where: [20.5905, -87.13], name: 'Xplor park',
    short: 'Ziplines, amphibious jeeps, underground river swims and cave rafting.',
    interests: ['adrenaline', 'theme-parks', 'cenotes'], kids: 'ok', energy: 3, length: 'full',
    travel: 'About 1 hour 15 minutes south',
    localTip: 'There are height and age limits on some rides; check them before you book with kids.',
    goodFor: 'Active travellers, teens and anyone who wants adrenaline.',
    skipIf: 'You are afraid of heights or enclosed caves.',
  },
  {
    slug: 'cenote-tour', where: [20.835, -87.05], name: 'Cenote swimming tour',
    short: 'Swim in crystal-clear natural sinkholes in the jungle — open, cave and semi-open cenotes.',
    interests: ['cenotes', 'nature', 'adrenaline'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Ruta de los Cenotes near Puerto Morelos is about 40 minutes away',
    localTip: 'Most cenotes ask you to shower first and use no sunscreen, to protect the water. Bring water shoes.',
    goodFor: 'Anyone who wants something uniquely Yucatán in half a day.',
    skipIf: 'You are uncomfortable in deep or dark water.',
  },
  {
    slug: 'tulum-ruins-and-beach', where: [20.2148, -87.429], name: 'Tulum ruins & beach',
    short: 'Mayan ruins on a cliff over the Caribbean, often paired with a cenote and Tulum town.',
    interests: ['ruins', 'beach', 'cenotes', 'food-culture'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 2 hours south',
    localTip: 'The ruins are small — an hour is enough. Spend the rest of the day at the beach or a cenote.',
    goodFor: 'People who want ruins and beach in the same day.',
    skipIf: 'You only have one day for ruins and want the biggest site (pick Chichén Itzá).',
  },
  {
    slug: 'cozumel-snorkel', where: [20.5083, -86.9458], name: 'Cozumel reef snorkel',
    short: 'Some of the best reef snorkeling in Mexico, reached by ferry from Playa del Carmen.',
    interests: ['sea-life', 'beach', 'nature'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 1 hour to Playa del Carmen, then a ferry',
    localTip: 'Use reef-safe sunscreen. The current can be strong, so stick with your guide.',
    goodFor: 'Snorkelers who want real coral and lots of fish.',
    skipIf: 'You get seasick — the Cozumel ferry can be choppy.',
  },
  {
    slug: 'holbox-day-trip', where: [21.5229, -87.3794], name: 'Holbox island',
    short: 'Car-free island with sandbars, flamingos and a slow, barefoot vibe.',
    interests: ['beach', 'nature', 'food-culture'], kids: 'ok', energy: 1, length: 'full',
    travel: 'About 2 hours to Chiquilá, then a ferry',
    localTip: 'Better as an overnight stay than a day trip — you lose most of the day in transit.',
    goodFor: 'Couples and relaxed travellers who like small, quiet places.',
    skipIf: 'You only have one or two free days.',
  },
  {
    slug: 'valladolid-and-cenotes', where: [20.6896, -88.2016], name: 'Valladolid & cenotes',
    short: 'Colourful colonial town with great Yucatecan food and cenotes nearby.',
    interests: ['food-culture', 'cenotes', 'ruins'], kids: 'ok', energy: 1, length: 'full',
    travel: 'About 2 hours west',
    localTip: 'Try cochinita pibil and a marquesita in the main square.',
    goodFor: 'Travellers who want real Mexico outside the resort bubble.',
    skipIf: 'You came only for the beach.',
  },
  {
    slug: 'jungle-tour-speedboat', where: [21.1, -86.77], name: 'Jungle tour speedboat',
    short: 'Drive your own speedboat through the mangroves of the lagoon, then snorkel the reef.',
    interests: ['adrenaline', 'sea-life', 'nature'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Leaves from the Hotel Zone lagoon side',
    localTip: 'Sit in front if you want speed and spray, at the back if you want to stay dry.',
    goodFor: 'A fun half-day without leaving the Hotel Zone.',
    skipIf: 'You want a calm, slow nature trip.',
  },
  {
    slug: 'musa-underwater-museum', where: [21.031, -86.78], name: 'MUSA underwater museum',
    short: 'Snorkel or dive over hundreds of underwater sculptures that became an artificial reef.',
    interests: ['sea-life', 'nature'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Boats leave from the Hotel Zone or Isla Mujeres',
    localTip: 'Visibility is best on calm days; if it is windy, ask to reschedule.',
    goodFor: 'Something different from a normal reef snorkel.',
    skipIf: 'You expect a museum on land — it is all underwater.',
  },
  {
    slug: 'crococun-zoo', where: [20.866, -86.894], name: 'Crococun Zoo',
    short: 'Small guided zoo where you feed parrots and deer, hold a snake and a baby crocodile, and walk among the crocodiles.',
    interests: ['nature', 'adrenaline'], kids: 'great', energy: 1, length: 'half',
    travel: 'Just outside Cancún on the way to Puerto Morelos',
    localTip: 'Buy the animal food bag at the entrance (about $5) — you use it from the very first stop.',
    goodFor: 'Families and anyone who wants an up-close animal experience in a short morning or afternoon.',
    skipIf: 'You expect a big, polished park like the Xcaret ones.',
    reviewed: {
      videoId: '7byIwY88o6c', videoDate: '2025-09',
      chapters: [{ label: 'Prices', start: 20 }, { label: 'Wildlife', start: 69 }, { label: 'Hands-on', start: 127 }, { label: 'Crocodiles', start: 222 }, { label: 'Verdict', start: 313 }],
      verdict: 'Absolutely worth it for the price. It is not as upscale as the Xcaret parks, but it is much cheaper, and walking among the crocodiles is something you will remember.',
      notes: [
        'The guided tour takes about 1 hour 10 minutes, in English or Spanish.',
        'You feed parrots and turtles, hold a snake and a baby crocodile, pet Mexican hairless dogs and feed deer — the baby deer come right up to you.',
        'Monkeys roam free, so they are not always there.',
        'Food and drinks are not included, but prices inside are reasonable.',
      ],
      prices: { text: 'Adults 839 MXN (~$45), kids 665 MXN (~$35), ages 0–5 free, seniors 60+ 513 MXN (~$27)', checked: '2025-09' },
    },
  },
  {
    slug: 'mercado-23-cancun', where: [21.168, -86.8277], name: 'Mercado 23 local market',
    short: "Walk Cancún's local market: crafts and luchador masks, cochinita and chicharrón, exotic fruit, chilies, Mexican candy and fresh tortillas.",
    interests: ['food-culture'], kids: 'ok', energy: 1, length: 'half',
    travel: 'Downtown Cancún, about 20–30 minutes from the Hotel Zone',
    localTip: 'Come for the variety, not the bargains: locals told us everyday groceries are often cheaper at the supermarket, but the market has things you will never find there.',
    goodFor: 'Foodies and curious travellers who want to see how locals shop and eat.',
    skipIf: "You don't like heat and crowds — there's no air conditioning.",
    reviewed: {
      videoId: '6QrZUG7GmAU', videoDate: '2023-11',
      chapters: [{ label: 'Pork snacks', start: 75 }, { label: 'Drinks & cheese', start: 305 }, { label: 'Exotic fruit', start: 418 }, { label: 'Chilies', start: 628 }, { label: 'Candy', start: 1026 }, { label: 'Tortillas', start: 1261 }, { label: 'Verdict', start: 1372 }],
      verdict: 'A fun, real slice of local life with food and fruit you will not find in a supermarket. Go for the experience, not for the cheapest prices.',
      notes: [
        'Try the pork snacks: cochinita-style pork with crispy skin was a 9/10 for me; a kilo of pork belly was about 350 pesos.',
        'Cool off with a creamy frozen bolis (coconut was great) and try horchata or tamarind water.',
        'Fruit is around 25 pesos a kilo, with exotic fruits you rarely see elsewhere.',
        'Whole stalls of dried chilies, Mexican candy like Pulparindo and Mazapán, and a tortilla shop making them fresh in the back.',
      ],
    },
  },
  {
    slug: 'cancun-taco-tour', where: [21.161, -86.827], name: 'Downtown taco & food night',
    short: 'Eat where locals eat in downtown Cancún: tacos al pastor, marquesitas, mezcal.',
    interests: ['food-culture', 'party'], kids: 'great', energy: 1, length: 'half',
    travel: 'About 20–30 minutes from the Hotel Zone',
    localTip: 'Parque de las Palapas on a weekend evening is the easy, safe place to start.',
    goodFor: 'Foodies and anyone tired of the resort buffet.',
    skipIf: 'You never want to leave the resort.',
  },
  {
    slug: 'coco-bongo-night', where: [21.1338, -86.7465], name: 'Night out in the party zone',
    short: 'Coco Bongo and the clubs at Punta Cancún — shows, acrobats and big-club nights.',
    interests: ['party'], kids: 'no', energy: 2, length: 'half',
    travel: 'In the Hotel Zone, around Km 9 (Punta Cancún)',
    localTip: 'Buy tickets from official sellers only, and keep your drink in sight.',
    goodFor: 'Groups and couples who want one big night.',
    skipIf: 'Loud clubs are not your thing.',
  },
];

export const tourBySlug = (slug: string) => TOURS.find((t) => t.slug === slug);

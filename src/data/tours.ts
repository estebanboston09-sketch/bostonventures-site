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
  reviewed?: { videoId?: string };
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
    slug: 'whale-shark-tour-cancun', name: 'Swim with whale sharks',
    short: 'Boat out to open water and snorkel next to the biggest fish on the planet.',
    interests: ['sea-life', 'nature', 'adrenaline'], kids: 'ok', energy: 3, length: 'full',
    travel: 'Boats leave from Cancún or Isla Mujeres; the sharks are 1–2+ hours offshore',
    months: [6, 7, 8, 9],
    localTip: 'Season runs roughly June to September, with July and August the most reliable. Take seasickness pills before you board — the open sea can be rough.',
    goodFor: 'Confident swimmers who want a once-in-a-lifetime animal encounter.',
    skipIf: 'You get badly seasick or are not comfortable in deep open water.',
    reviewed: {},
  },
  {
    slug: 'chichen-itza-day-trip', name: 'Chichén Itzá day trip',
    short: 'The famous pyramid of El Castillo, usually combined with a cenote swim and lunch in Valladolid.',
    interests: ['ruins', 'cenotes', 'food-culture'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 2.5–3 hours each way',
    localTip: 'Leave as early as possible. The site gets hot and crowded by late morning, and there is very little shade.',
    goodFor: 'First-timers who want to see the most famous Mayan site in Mexico.',
    skipIf: 'You hate long bus days — it is a lot of time on the road.',
  },
  {
    slug: 'isla-mujeres-day-trip', name: 'Isla Mujeres day trip',
    short: 'Ferry or catamaran to a laid-back island with calm, shallow beaches and golf carts.',
    interests: ['beach', 'sea-life', 'food-culture'], kids: 'great', energy: 1, length: 'full',
    travel: 'Short ferry ride from Puerto Juárez or the Hotel Zone',
    localTip: 'Rent a golf cart and drive to Punta Sur at the south tip, then end the day at Playa Norte for sunset.',
    goodFor: 'Anyone who wants an easy, cheap, beautiful day without a big tour.',
    skipIf: 'You want wild, empty beaches — Playa Norte gets busy.',
  },
  {
    slug: 'catamaran-isla-mujeres', name: 'Catamaran party to Isla Mujeres',
    short: 'Open bar, music and a snorkel stop on the way to the island.',
    interests: ['party', 'beach', 'sea-life'], kids: 'no', energy: 2, length: 'full',
    travel: 'Leaves from the Hotel Zone marinas',
    localTip: 'Choose a smaller boat if you care more about snorkeling than partying — the big ones are loud and crowded.',
    goodFor: 'Groups of friends and bachelor or bachelorette trips.',
    skipIf: 'You want a quiet day or are travelling with kids.',
  },
  {
    slug: 'xcaret-park', name: 'Xcaret park',
    short: 'Huge eco-park with underground rivers, animals, beaches and a big Mexican night show.',
    interests: ['theme-parks', 'nature', 'food-culture', 'sea-life'], kids: 'great', energy: 2, length: 'full',
    travel: 'About 1 hour 15 minutes south',
    localTip: 'Stay for the evening show (Xcaret México Espectacular) — it is the best part and many people leave before it.',
    goodFor: 'Families and first-timers who want a lot in one day.',
    skipIf: 'You dislike crowds and organised attractions.',
  },
  {
    slug: 'xel-ha-park', name: 'Xel-Há park',
    short: 'All-inclusive snorkeling park in a natural inlet, with tubing, ziplines and food included.',
    interests: ['theme-parks', 'sea-life', 'beach'], kids: 'great', energy: 1, length: 'full',
    travel: 'About 1 hour 30 minutes south',
    localTip: 'Arrive at opening. The snorkel areas are clearest and calmest in the morning.',
    goodFor: 'Families with kids who are new to snorkeling.',
    skipIf: 'You want to snorkel a real reef with lots of coral.',
  },
  {
    slug: 'xplor-park', name: 'Xplor park',
    short: 'Ziplines, amphibious jeeps, underground river swims and cave rafting.',
    interests: ['adrenaline', 'theme-parks', 'cenotes'], kids: 'ok', energy: 3, length: 'full',
    travel: 'About 1 hour 15 minutes south',
    localTip: 'There are height and age limits on some rides; check them before you book with kids.',
    goodFor: 'Active travellers, teens and anyone who wants adrenaline.',
    skipIf: 'You are afraid of heights or enclosed caves.',
  },
  {
    slug: 'cenote-tour', name: 'Cenote swimming tour',
    short: 'Swim in crystal-clear natural sinkholes in the jungle — open, cave and semi-open cenotes.',
    interests: ['cenotes', 'nature', 'adrenaline'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Ruta de los Cenotes near Puerto Morelos is about 40 minutes away',
    localTip: 'Most cenotes ask you to shower first and use no sunscreen, to protect the water. Bring water shoes.',
    goodFor: 'Anyone who wants something uniquely Yucatán in half a day.',
    skipIf: 'You are uncomfortable in deep or dark water.',
  },
  {
    slug: 'tulum-ruins-and-beach', name: 'Tulum ruins & beach',
    short: 'Mayan ruins on a cliff over the Caribbean, often paired with a cenote and Tulum town.',
    interests: ['ruins', 'beach', 'cenotes', 'food-culture'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 2 hours south',
    localTip: 'The ruins are small — an hour is enough. Spend the rest of the day at the beach or a cenote.',
    goodFor: 'People who want ruins and beach in the same day.',
    skipIf: 'You only have one day for ruins and want the biggest site (pick Chichén Itzá).',
  },
  {
    slug: 'cozumel-snorkel', name: 'Cozumel reef snorkel',
    short: 'Some of the best reef snorkeling in Mexico, reached by ferry from Playa del Carmen.',
    interests: ['sea-life', 'beach', 'nature'], kids: 'ok', energy: 2, length: 'full',
    travel: 'About 1 hour to Playa del Carmen, then a ferry',
    localTip: 'Use reef-safe sunscreen. The current can be strong, so stick with your guide.',
    goodFor: 'Snorkelers who want real coral and lots of fish.',
    skipIf: 'You get seasick — the Cozumel ferry can be choppy.',
  },
  {
    slug: 'holbox-day-trip', name: 'Holbox island',
    short: 'Car-free island with sandbars, flamingos and a slow, barefoot vibe.',
    interests: ['beach', 'nature', 'food-culture'], kids: 'ok', energy: 1, length: 'full',
    travel: 'About 2 hours to Chiquilá, then a ferry',
    localTip: 'Better as an overnight stay than a day trip — you lose most of the day in transit.',
    goodFor: 'Couples and relaxed travellers who like small, quiet places.',
    skipIf: 'You only have one or two free days.',
  },
  {
    slug: 'valladolid-and-cenotes', name: 'Valladolid & cenotes',
    short: 'Colourful colonial town with great Yucatecan food and cenotes nearby.',
    interests: ['food-culture', 'cenotes', 'ruins'], kids: 'ok', energy: 1, length: 'full',
    travel: 'About 2 hours west',
    localTip: 'Try cochinita pibil and a marquesita in the main square.',
    goodFor: 'Travellers who want real Mexico outside the resort bubble.',
    skipIf: 'You came only for the beach.',
  },
  {
    slug: 'jungle-tour-speedboat', name: 'Jungle tour speedboat',
    short: 'Drive your own speedboat through the mangroves of the lagoon, then snorkel the reef.',
    interests: ['adrenaline', 'sea-life', 'nature'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Leaves from the Hotel Zone lagoon side',
    localTip: 'Sit in front if you want speed and spray, at the back if you want to stay dry.',
    goodFor: 'A fun half-day without leaving the Hotel Zone.',
    skipIf: 'You want a calm, slow nature trip.',
  },
  {
    slug: 'musa-underwater-museum', name: 'MUSA underwater museum',
    short: 'Snorkel or dive over hundreds of underwater sculptures that became an artificial reef.',
    interests: ['sea-life', 'nature'], kids: 'ok', energy: 2, length: 'half',
    travel: 'Boats leave from the Hotel Zone or Isla Mujeres',
    localTip: 'Visibility is best on calm days; if it is windy, ask to reschedule.',
    goodFor: 'Something different from a normal reef snorkel.',
    skipIf: 'You expect a museum on land — it is all underwater.',
  },
  {
    slug: 'cancun-taco-tour', name: 'Downtown taco & food night',
    short: 'Eat where locals eat in downtown Cancún: tacos al pastor, marquesitas, mezcal.',
    interests: ['food-culture', 'party'], kids: 'great', energy: 1, length: 'half',
    travel: 'About 20–30 minutes from the Hotel Zone',
    localTip: 'Parque de las Palapas on a weekend evening is the easy, safe place to start.',
    goodFor: 'Foodies and anyone tired of the resort buffet.',
    skipIf: 'You never want to leave the resort.',
  },
  {
    slug: 'coco-bongo-night', name: 'Night out in the party zone',
    short: 'Coco Bongo and the clubs at Punta Cancún — shows, acrobats and big-club nights.',
    interests: ['party'], kids: 'no', energy: 2, length: 'half',
    travel: 'In the Hotel Zone, around Km 9 (Punta Cancún)',
    localTip: 'Buy tickets from official sellers only, and keep your drink in sight.',
    goodFor: 'Groups and couples who want one big night.',
    skipIf: 'Loud clubs are not your thing.',
  },
];

export const tourBySlug = (slug: string) => TOURS.find((t) => t.slug === slug);

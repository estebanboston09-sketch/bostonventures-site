// One place for links and settings used across the site.
export const SITE = {
  name: 'BostonVentures',
  tagline: 'Honest reviews from a local. Cancún & the Riviera Maya.',
  youtube: 'https://www.youtube.com/@BostonVentures',
  youtubeSubscribe: 'https://www.youtube.com/@BostonVentures?sub_confirmation=1',
  email: 'hello@bostonventurestravel.com', // placeholder until the domain is bought
};

export const AFFILIATE = {
  transfers: {
    name: 'USA Transfers',
    url: 'https://booking.usa-transfers.com/affiliate_2604',
  },
  esim: {
    name: 'Holafly',
    url: 'https://holafly.sjv.io/c/7373093/3856277/24764',
    code: 'BOSTONVENTURES',
    deal: '5% off travel eSIMs with code BOSTONVENTURES',
  },
  // Not approved yet — buttons fall back to the hotel's official site.
  hotelBooking: null as null | { name: string; url: (hotelName: string) => string },
  tours: null as null | { name: string; url: (q: string) => string },
};

export const AREAS: Record<string, { label: string; blurb: string }> = {
  'hotel-zone': { label: 'Hotel Zone', blurb: 'The 22 km strip of beach resorts, nightlife and malls between the sea and the lagoon.' },
  'downtown': { label: 'Downtown Cancún', blurb: 'Where locals live: cheaper hotels, real Mexican food, no beach on your doorstep.' },
  'costa-mujeres': { label: 'Costa Mujeres', blurb: 'Newer, quieter resort area north of Cancún, close to the Isla Mujeres ferries.' },
  'south-cancun': { label: 'South of the Hotel Zone', blurb: 'Big resorts between the airport and Puerto Morelos — easy airport access, far from nightlife.' },
  'puerto-morelos': { label: 'Puerto Morelos', blurb: 'Small fishing town between Cancún and Playa, with a reef right offshore.' },
  'playa-del-carmen': { label: 'Playa del Carmen', blurb: 'Walkable beach town about 50 minutes south, with Quinta Avenida and ferries to Cozumel.' },
  'tulum': { label: 'Tulum', blurb: 'Boho beach hotels, ruins on a cliff and cenotes, about 2 hours from Cancún airport.' },
  'riviera-maya': { label: 'Riviera Maya', blurb: 'Big resort strip between Playa del Carmen and Tulum, about an hour or more from Cancún airport.' },
  'isla-mujeres': { label: 'Isla Mujeres', blurb: 'Small, relaxed island a short ferry ride from Cancún, with calm beaches.' },
};

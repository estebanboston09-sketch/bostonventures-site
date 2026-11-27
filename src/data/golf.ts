// Golf courses in Cancún and the Riviera Maya.
// Facts come from the official course/resort pages and GolfPass/GolfNow listings in `sources`.
// Prices change by season and tee time, so we only show a "from" price when we found a current one,
// with the date we checked. Map pins are approximate.

export type GolfArea = 'cancun' | 'south-cancun' | 'riviera-maya';

export interface Course {
  slug: string;
  name: string;
  area: GolfArea;
  where: string;            // plain-English location
  at: [number, number];     // approximate pin
  holes: string;            // "18 holes, par 72"
  yards?: string;           // back tees
  designer: string;
  opened?: number;
  access: string;           // who can play
  includes?: string;        // what the green fee includes (as published)
  price?: { text: string; checked: string; source: string };
  level: 'beginner' | 'all' | 'challenging';
  highlights: string[];
  heads: string[];          // honest things to know
  hotels: string[];         // resorts with on-site access, packages or guest rates (named by the course/resort)
  siteHotels?: string[];    // slugs of hotels on THIS site with a golf link to this course
  siteNotes?: Record<string, string>; // what that link is, per hotel slug
  sources: string[];
  mapQuery: string;         // what to search on Google Maps (satellite view of the course)
  golfers?: {               // our own-words summary of public golfer reviews
    rating?: number; count?: number; recommend?: number;
    summary: string; praise: string[]; complaints: string[];
    basedOn: string; url: string;
  };
}

export const AREA_LABELS: Record<GolfArea, string> = {
  cancun: 'Cancún (Hotel Zone, downtown, Costa Mujeres)',
  'south-cancun': 'South of Cancún, near the airport',
  'riviera-maya': 'Riviera Maya (Puerto Morelos to Tulum)',
};

export const COURSES: Course[] = [
  {
    slug: 'iberostar-cancun-golf-club', name: 'Iberostar Cancún Golf Club', area: 'cancun',
    where: 'Hotel Zone, Km 17, on the lagoon', at: [21.0745, -86.781],
    holes: '18 holes, par 72', yards: '6,735 yards', designer: 'Isao Aoki', opened: 1994,
    access: 'Open to visitors, not only Iberostar guests.',
    includes: 'Shared cart, tees, driving range, and unlimited snacks and drinks at a stand on the course. Free return transfers from Hotel Zone hotels for 2 or more players.',
    price: { text: 'From about $144 per golfer (GolfNow prepaid deal)', checked: '2026-11', source: 'https://www.golfnow.com/tee-times/facility/3450' },
    level: 'all',
    highlights: ['The only course on the main Hotel Zone strip', 'Lagoon views, and a small Maya ruin by the course', 'Food and drinks included in the green fee'],
    heads: ['Walking is not allowed; carts only', 'Rounds take about 4.5 hours', 'Twilight rates start at 2 pm (3 pm in summer)'],
    hotels: ['Iberostar Selection Cancún', 'Iberostar Selection Coral Cancún'],
    siteHotels: ['iberostar-selection-cancun'],
    siteNotes: { 'iberostar-selection-cancun': 'Next door. Iberostar sells golf packages (1 round, 3 rounds or unlimited for 7 days) when you book the room.' },
    sources: ['https://iberostar.com/en/golf/cancun-golf-club', 'https://www.golfpass.com/travel-advisor/courses/22445-iberostar-cancun-golf-club'],
    mapQuery: "Iberostar Cancun Golf Club, Cancún",
    golfers: {"rating": 3.6, "count": 93, "recommend": 82, "summary": "A friendly, relaxed resort course with lagoon views. Golfers like that food and drinks are included; the main gripes are extra costs and soggy spots after rain or aeration.", "praise": ["Friendly starters and cart staff", "Food and drinks included adds real value", "Lagoon views and lots of wildlife", "Fair for mixed skill levels, not too intimidating", "Wide fairways in good shape"], "complaints": ["Club rentals cost extra, even on packages", "Wet, muddy patches after aeration or rain", "Lots of water: lost balls, and crocodiles in the lagoon", "Some wanted faster greens"], "url": "https://www.golfpass.com/travel-advisor/courses/22445-iberostar-cancun-golf-club", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'puerto-cancun-golf-club', name: 'Puerto Cancún Golf Club', area: 'cancun',
    where: 'Between downtown and the start of the Hotel Zone', at: [21.152, -86.801],
    holes: '18 holes, par 72', yards: '7,241 yards', designer: 'Tom Weiskopf', opened: 2013,
    access: 'Public.',
    level: 'challenging',
    highlights: ['Some holes along the Caribbean, others on the marina canals', 'The 18th green sits on an island in the canal', 'Reviewers often call it one of the best-kept courses in Cancún'],
    heads: ['Wind off the sea changes your club choice a lot', 'Golf carts are listed as an extra charge', 'The closest course to downtown'],
    hotels: [],
    sources: ['https://www.golfpass.com/travel-advisor/courses/34820-puerto-cancun-golf-club'],
    mapQuery: "Puerto Cancun Golf Club, Cancún",
    golfers: {"rating": 4.5, "count": 207, "recommend": 90, "summary": "One of the best-rated courses near Cancún. Golfers rave about the condition and the sea and marina views; the main complaint is the price.", "praise": ["Excellent, well-groomed course", "Beautiful water views, the Caribbean holes and the island green", "Friendly check-in and starters", "Relaxed pace with little waiting"], "complaints": ["Green fees feel high to many golfers", "Some construction work disrupted rounds", "Food and drink service can be hit or miss", "Rental clubs get criticized; long and tough from the back tees"], "url": "https://www.golfpass.com/travel-advisor/courses/34820-puerto-cancun-golf-club", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'playa-mujeres-golf-club', name: 'Playa Mujeres Golf Club', area: 'cancun',
    where: 'Costa Mujeres, north of Cancún', at: [21.2455, -86.8095],
    holes: '18 holes, par 72, plus a short course', yards: '7,218 yards', designer: 'Greg Norman', opened: 2006,
    access: 'Resort guests and outside visitors can play. Reserve ahead.',
    includes: 'Cart (with GPS), practice balls, water and tees.',
    level: 'challenging',
    highlights: ['Holes run from jungle to the beach, with ocean views', 'Strong daily wind makes it a real test', 'Floodlit putting green for night practice'],
    heads: ['Narrow fairways squeezed by thick vegetation', 'Far from the Hotel Zone; easiest if you stay in Costa Mujeres'],
    hotels: ['Secrets Playa Mujeres', 'Dreams Playa Mujeres', 'Other resorts inside Playa Mujeres'],
    sources: ['https://playamujeres.com.mx/golf/', 'https://www.hyattinclusivecollection.com/en/resorts-hotels/dreams/mexico/playa-mujeres-golf-spa-resort/activities/golf/', 'https://www.golfpass.com/travel-advisor/courses/22448-playa-mujeres-golf-club'],
    mapQuery: "Playa Mujeres Golf Club, Cancún",
    golfers: {"rating": 4.4, "count": 7, "recommend": 100, "summary": "Few online reviews, but they're positive: great condition and ocean holes. Expect wind, jungle and a higher price.", "praise": ["Course in great condition", "Interesting layout with ocean views", "Attentive staff and cart service", "Uncrowded, comfortable pace"], "complaints": ["Expensive, and food and drinks aren't included", "Jungle and thick rough eat balls", "Strong wind and tricky greens", "Bugs and heat; bring repellent"], "url": "https://www.golfpass.com/travel-advisor/courses/22448-playa-mujeres-golf-club", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'moon-palace-golf', name: 'Moon Spa & Golf Club (Moon Palace)', area: 'south-cancun',
    where: 'At Moon Palace, south of the airport', at: [21.006, -86.836],
    holes: '27 holes (Dunes, Jungle, Lakes nines)', designer: 'Jack Nicklaus', opened: 2002,
    access: 'Open to the public; Palace Resorts guests can add golf packages.',
    includes: 'Golfers report food and drinks are included with the round.',
    price: { text: 'From about $190 (GolfNow)', checked: '2026-11', source: 'https://www.golfpass.com/travel-advisor/courses/22450-moon-spa-golf-club-jungle-course' },
    level: 'all',
    highlights: ['Jack Nicklaus\' first course in Cancún', 'Three different nines you can combine', 'Golf academy on site'],
    heads: ['Can get busy with resort guests; arrive early', 'Rental clubs reported at $75–90', 'Carts only, no walking'],
    hotels: ['Moon Palace Cancún', 'The Grand at Moon Palace', 'Other Palace Resorts (golf packages)'],
    siteHotels: ['moon-palace-cancun', 'le-blanc-spa-resort-cancun'],
    siteNotes: { 'moon-palace-cancun': 'On site: 27 holes at the resort, and guests can add golf packages.', 'le-blanc-spa-resort-cancun': 'Palace Resorts has offered golf packages for Le Blanc guests at the Moon Palace course. Check current offers.' },
    sources: ['https://www.golfpass.com/travel-advisor/courses/22450-moon-spa-golf-club-jungle-course', 'https://www.travelpulse.com/news/hotels-and-resorts/palace-resorts-invites-guests-to-make-their-vacations-golf-inclusive'],
    mapQuery: "Moon Spa & Golf Club, Moon Palace, Cancún",
    golfers: {"rating": 4.4, "count": 74, "recommend": 81, "summary": "A well-kept Nicklaus course in a jungle and wetland setting, with food and drinks included. Golfers' complaints are mostly about prices at the pro shop and rentals.", "praise": ["Jungle and wetland scenery with wildlife", "Well-kept fairways and greens", "Friendly staff and a fast pace", "Food and drinks included with the round", "Three nines give variety"], "complaints": ["Pro shop prices (balls, gloves, sunscreen) are high", "Rental clubs are expensive", "Unannounced closures of the range or holes", "Wet fairways or aeration on some visits"], "url": "https://www.golfpass.com/travel-advisor/courses/22450-moon-spa-golf-club-jungle-course", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'riviera-cancun-golf', name: 'Riviera Cancún Golf Club', area: 'south-cancun',
    where: 'South end, near the airport', at: [21.0136, -86.8235],
    holes: '18 holes, par 72', yards: '7,060 yards', designer: 'Jack Nicklaus (Signature)', opened: 2008,
    access: 'Open to the public.',
    includes: 'Golfers report food and drinks are included with the round.',
    price: { text: 'From about $180 (GolfNow)', checked: '2026-11', source: 'https://www.golfpass.com/travel-advisor/courses/22433-riviera-cancun-golf-resorts' },
    level: 'challenging',
    highlights: ['Mangroves, lagoons and a few holes with sea views', 'Very contoured Nicklaus greens', 'Hard Rock Hotel Cancún has offered golf packages here'],
    heads: ['Crocodiles live in the water hazards. Never go in after a ball', 'In 2026 reviews, a few holes were closed for work. Ask when you book'],
    hotels: ['Hard Rock Hotel Cancún (golf offers)'],
    siteHotels: ['hard-rock-hotel-cancun'],
    siteNotes: { 'hard-rock-hotel-cancun': 'The hotel has offered golf packages at this course. Check current offers.' },
    sources: ['https://www.golfpass.com/travel-advisor/courses/22433-riviera-cancun-golf-resorts', 'https://hotel.hardrock.com/cancun/files/6134/Golfing_Offer_Cancun_Fact_Sheet.pdf'],
    mapQuery: "Riviera Cancun Golf Club, Cancún",
    golfers: {"rating": 2.4, "count": 296, "recommend": 28, "summary": "Recent golfer reviews are poor. People still like the Nicklaus layout and the staff, but many report bad conditions and slow play.", "praise": ["Friendly staff in the pro shop and restaurant", "Scenic Nicklaus layout with water and wildlife", "Food and drinks on the course", "Nice clubhouse"], "complaints": ["Poor conditions: thin fairways, rough bunkers, closed holes", "Slow play with few marshals", "Less drink service than before", "Expensive balls, rentals and transport"], "url": "https://www.golfpass.com/travel-advisor/courses/22433-riviera-cancun-golf-resorts", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'el-tinto-cancun-country-club', name: 'El Tinto at Cancún Country Club', area: 'south-cancun',
    where: 'Highway 307, about 7 minutes from the airport', at: [21.0, -86.862],
    holes: '18 holes, par 72', yards: '7,439 yards', designer: 'Nick Price', opened: 2012,
    access: 'Open to the public.',
    price: { text: 'From about $111 (GolfNow)', checked: '2026-11', source: 'https://www.golfpass.com/travel-advisor/courses/34664-cancun-country-club-el-tinto-golf-course' },
    level: 'challenging',
    highlights: ['The longest course in the area', 'Formerly TPC Cancún', 'Good value compared with the resort courses'],
    heads: ['Strict dress code and pace of play', 'Golfers say the fee includes little food or drink, and hotel pickup costs extra'],
    hotels: ['Park Hyatt Riviera Maya (preferred access, 15 minutes away)'],
    sources: ['https://www.golfpass.com/travel-advisor/courses/34664-cancun-country-club-el-tinto-golf-course', 'https://golf.com/travel/best-cancun-golf-courses/'],
    mapQuery: "El Tinto Golf Course Cancun Country Club",
    golfers: {"rating": 4.0, "count": 148, "recommend": 85, "summary": "A big, well-designed course close to the airport. Golfers like the layout and staff; the weak spots are value and amenities.", "praise": ["Friendly, helpful staff", "Good layout with wide fairways, water and bunkers", "Smooth, playable greens", "Often a quick pace", "Nice clubhouse"], "complaints": ["Overwatered fairways and muddy lies", "Value: rentals and green fees feel high", "Range or restaurant sometimes closed; old carts", "Insects on some days"], "url": "https://www.golfpass.com/travel-advisor/courses/34664-cancun-country-club-el-tinto-golf-course", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'vidanta-nicklaus-par-3', name: 'Nicklaus Design Course at Vidanta', area: 'riviera-maya',
    where: 'Vidanta Riviera Maya, near Puerto Morelos', at: [20.815, -86.893],
    holes: '18 holes, par 54 (all par 3s)', yards: '2,923 yards', designer: 'Jack Nicklaus', opened: 2003,
    access: 'Resort stay not required.',
    level: 'beginner',
    highlights: ['A par-3 course, but some holes are over 200 yards', 'Water on most holes', 'A good choice for a short round or for newer golfers'],
    heads: ['Bring extra balls; there\'s a lot of water', 'Some golfers report slow play'],
    hotels: ['Vidanta Riviera Maya resorts'],
    sources: ['https://vidanta.com/web/riviera-maya/the-nicklaus-design-course', 'https://www.golfpass.com/travel-advisor/courses/22449-vidanta-riviera-maya'],
    mapQuery: "Vidanta Golf Riviera Maya Nicklaus par 3",
    golfers: {"rating": 3.6, "count": 206, "recommend": 68, "summary": "A fun, tricky par-3 course with lots of water. Golfers enjoy the design but many feel it's pricey for a par 3.", "praise": ["Creative, water-heavy par-3 layout", "Friendly staff", "Jungle setting and wildlife", "Usually a quick round"], "complaints": ["Pricey for a par-3 course, plus expensive balls and drinks", "Greens and bunkers not always in good shape", "Some slow rounds and few marshals", "Hard to find inside the huge resort"], "url": "https://www.golfpass.com/travel-advisor/courses/22449-vidanta-riviera-maya", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'iberostar-playa-paraiso-golf-club', name: 'Iberostar Playa Paraíso Golf Club', area: 'riviera-maya',
    where: 'Playa Paraíso, between Puerto Morelos and Playa del Carmen', at: [20.745, -86.963],
    holes: '18 holes, par 72', yards: '6,800 yards', designer: 'P.B. Dye', opened: 2005,
    access: 'Resort stay not required.',
    level: 'challenging',
    highlights: ['Hosted the 2016 World Amateur Team Championships', 'Deep bunkers and rolling greens', 'Lighted driving range'],
    heads: ['Not long, but you need straight tee shots', 'Golfers say food and drinks were included'],
    hotels: ['JOIA Paraíso', 'Iberostar Selection Paraíso Maya', 'Iberostar Selection Paraíso Lindo', 'Iberostar Waves Paraíso Beach', 'Iberostar Waves Paraíso del Mar'],
    sources: ['https://www.iberostar.com/en/inspiration-guide/holidays/the-best-destinations-for-golf/', 'https://www.golfpass.com/travel-advisor/courses/22447-iberostar-playa-paraiso-golf-club'],
    mapQuery: "Iberostar Playa Paraiso Golf Club",
    golfers: {"rating": 4.7, "count": 55, "recommend": 99, "summary": "One of the highest-rated courses in the area. Golfers call it immaculate and tough but fair.", "praise": ["Immaculate turf and greens", "Challenging P.B. Dye design, tough but fair", "Helpful, attentive staff", "Jungle views and a Maya ruin", "Food, drinks and range balls for resort guests"], "complaints": ["Coatis raided carts and bags at some tees", "Fewer range balls than advertised", "Rental clubs are pricey", "Carts without GPS; limited snacks on course"], "url": "https://www.golfpass.com/travel-advisor/courses/22447-iberostar-playa-paraiso-golf-club", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'el-camaleon-mayakoba', name: 'El Camaleón Mayakoba', area: 'riviera-maya',
    where: 'Mayakoba, just north of Playa del Carmen', at: [20.684, -87.029],
    holes: '18 holes, par 72', yards: '7,116 yards', designer: 'Greg Norman', opened: 2006,
    access: 'Open to visitors. Mayakoba hotel guests get special rates.',
    includes: 'Cart with GPS and unlimited practice balls.',
    level: 'challenging',
    highlights: ['Hosted the first PGA TOUR event outside the US and Canada (2007)', 'Jungle, mangroves and beachfront holes in one round', 'Caddies available if you book ahead'],
    heads: ['Usually the most expensive round in the region', 'Check for aeration and tournament blackout dates'],
    hotels: ['Fairmont Mayakoba', 'Rosewood Mayakoba', 'Banyan Tree Mayakoba', 'Andaz Mayakoba'],
    sources: ['https://www.rosewoodhotels.com/en/mayakoba-riviera-maya/experiences/x-golf', 'https://elr.fairmont.com/mayakoba-riviera-maya/golf/overviewelcamaleon', 'https://www.banyantree.com/mexico/mayakoba/experiences/el-camaleon-golf-course'],
    mapQuery: "El Camaleon Golf Course Mayakoba",
    golfers: {"rating": 4.6, "count": 71, "recommend": 92, "summary": "The famous one, and golfers say it lives up to it: great condition and varied holes. The catch is the price.", "praise": ["Excellent condition", "Varied holes: ocean, canals and mangroves", "Quick pace of play", "Strong clubhouse and staff", "Fun, fast greens"], "complaints": ["Expensive; value is its lowest score", "Aeration or sanding without warning", "Thick rough and mangroves eat balls", "Few extras included for the price"], "url": "https://www.golfpass.com/travel-advisor/courses/22439-el-camaleon-mayakoba-golf-club", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'gran-coyote-golf', name: 'Gran Coyote Golf', area: 'riviera-maya',
    where: 'A few minutes north of Playa del Carmen', at: [20.66, -87.05],
    holes: '18 holes, par 71', designer: 'Nick Price', opened: 2011,
    access: 'Public.',
    level: 'all',
    highlights: ['Formerly Grand Coral', 'Wide fairways, lots of water and sand', 'Golfers often call it good value near Playa del Carmen'],
    heads: ['Some golfers find the greens slow'],
    hotels: [],
    sources: ['https://www.golfpass.com/travel-advisor/courses/32083-gran-coyote-golf-riviera-maya', 'https://www.golfnow.com/courses/-904-gran-coyote-golf-details'],
    mapQuery: "Gran Coyote Golf Playa del Carmen",
    golfers: {"rating": 4.8, "count": 142, "recommend": 98, "summary": "The best-rated course on this page in golfer reviews. Great condition, friendly staff and a smooth pace.", "praise": ["Excellent condition, quick greens", "Very friendly staff", "Smooth pace, often an open course", "Fun, scenic jungle layout", "Good value for the area"], "complaints": ["Green fees feel high to some, especially replays", "Small food choice, no clubhouse bar", "Jungle, water and bunkers punish misses"], "url": "https://www.golfpass.com/travel-advisor/courses/32083-gran-coyote-golf-riviera-maya", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'hard-rock-golf-club-riviera-maya', name: 'Hard Rock Golf Club Riviera Maya', area: 'riviera-maya',
    where: 'Playacar, Playa del Carmen', at: [20.6119, -87.0873],
    holes: '18 holes, par 72', yards: '7,136 yards', designer: 'Robert von Hagge', opened: 1994,
    access: 'Open to visitors.',
    level: 'challenging',
    highlights: ['Formerly Playacar Golf Club', 'Jungle course with Maya ruins nearby', 'Inside the Playacar resort area'],
    heads: ['Target golf: narrow fairways and small greens', 'Bring extra balls'],
    hotels: ['Hard Rock Hotel Riviera Maya', 'Playacar hotels'],
    sources: ['https://www.top100golfcourses.com/golf-course/hard-rock-riviera-maya', 'https://www.golfpass.com/travel-advisor/courses/22446-hard-rock-golf-club-riviera-maya'],
    mapQuery: "Hard Rock Golf Club Riviera Maya Playacar",
    golfers: {"rating": 3.6, "count": 420, "recommend": 56, "summary": "Mixed reviews. Golfers like the all-inclusive deal and the jungle holes, but many complain about old carts and slow play.", "praise": ["Food, drinks and range included", "Friendly starters and bar staff", "Varied jungle holes", "Fast greens and good sand on many days", "Frequent beverage cart"], "complaints": ["Old carts that are hard to steer", "Slow play at times", "No GPS or hole guides", "Low-quality rentals and range"], "url": "https://www.golfpass.com/travel-advisor/courses/22446-hard-rock-golf-club-riviera-maya", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
  {
    slug: 'puerto-aventuras-golf', name: 'Puerto Aventuras Golf Club', area: 'riviera-maya',
    where: 'Puerto Aventuras, south of Playa del Carmen', at: [20.5, -87.23],
    holes: '9 holes, par 36', designer: 'Thomas Leman', opened: 1991,
    access: 'Public.',
    level: 'beginner',
    highlights: ['The cheapest golf in the Riviera Maya', 'Relaxed, good for a quick nine'],
    heads: ['Only 9 holes', 'Golfers say rental clubs are old'],
    hotels: [],
    sources: ['https://www.golfpass.com/travel-advisor/courses/22430-puerto-aventuras-golf-racquet-club', 'https://www.1golf.eu/en/club/club-de-golf-puerto-aventuras/'],
    mapQuery: "Puerto Aventuras Golf Club",
  },
  {
    slug: 'pga-riviera-maya', name: 'PGA Riviera Maya', area: 'riviera-maya',
    where: 'Near Akumal, about 25 minutes from Tulum', at: [20.405, -87.33],
    holes: '18 holes, par 72, plus a 9-hole par-3 course', yards: '7,272 yards', designer: 'Robert Trent Jones II', opened: 2010,
    access: 'Open to the public. Bahia Principe guests get discounts.',
    price: { text: 'From about $125 (GolfNow)', checked: '2026-11', source: 'https://www.golfpass.com/travel-advisor/courses/32078-riviera-maya-golf-club-championship-course' },
    level: 'challenging',
    highlights: ['Hosted a Korn Ferry Tour event (Tulum Championship, April 2026)', 'Cut through jungle with lakes and cenotes', 'The only course near Tulum'],
    heads: ['About 1.5 hours from Cancún', 'Bahia Principe golf packages include transfers from their hotels'],
    hotels: ['Bahia Principe Akumal, Cobá, Tulum and Sian Ka\'an resorts', 'Hilton Tulum (25 minutes)'],
    sources: ['https://www.bahia-principe.com/en/golf-resorts', 'https://www.hilton.com/en/hotels/cunhihh-hilton-tulum-riviera-maya-all-inclusive-resort/enhance-your-stay/golf', 'https://www.pgatour.com/korn-ferry-tour/tournaments/2026/tulum-championship-at-pga-riviera-maya/H2026171/course-stats'],
    mapQuery: "PGA Riviera Maya golf Akumal",
    golfers: {"rating": 4.5, "count": 143, "recommend": 83, "summary": "A highly rated jungle course with lakes and cenotes. Golfers love the condition; the downsides are the distance and long rounds.", "praise": ["Excellent fairways and greens", "Memorable holes with lakes, cenotes and jungle", "Beautiful setting", "Friendly staff", "Good value for Bahia Principe guests"], "complaints": ["Slow rounds, especially in midday heat", "Some tee-time booking problems", "Far away; taxis are expensive", "Hard for beginners; lost balls"], "url": "https://www.golfpass.com/travel-advisor/courses/32078-riviera-maya-golf-club-championship-course", "basedOn": "GolfPass golfer reviews, read Nov 2026"},
  },
];

export const LEVEL_LABEL = { beginner: 'Easy-going', all: 'All levels', challenging: 'Challenging' } as const;

// Hotels on this site that have a direct golf link (on-site course, package or guest rate).
export const golfForHotel = (slug: string) => COURSES.filter((c) => c.siteHotels?.includes(slug));

export const GOLF_TIPS: [string, string][] = [
  ['🌤️ Best season', 'November to April is cooler and drier, and it\'s high season for golf. From May to October it\'s hot and humid, so book the first tee time of the day. Afternoon storms are common in summer.'],
  ['👕 Dress code', 'Every course asks for golf attire: a collared shirt, golf shorts or pants, and soft-spike shoes. No denim, no tank tops.'],
  ['🛺 Carts', 'Most resort courses require a cart and don\'t allow walking. The cart is usually included in the green fee.'],
  ['🍹 Food and drinks', 'Many courses here include snacks and drinks, and some include a full meal. Ask when you book, because it varies a lot.'],
  ['💸 Save money', 'Twilight rates (usually after 1–3 pm) and online prepaid tee times are often much cheaper than booking at the hotel desk. Prepaid times may pair you with other golfers.'],
  ['🎒 Clubs', 'Every course rents clubs, but quality and prices vary. If you play 3 or more rounds, bringing your own usually pays off, even with the airline bag fee.'],
  ['🐊 Wildlife', 'Iguanas are everywhere, and some courses have crocodiles in the water. Take the drop. Never go into the water or mangroves for a ball.'],
  ['⛳ Bring balls', 'Water and jungle eat balls, and balls are expensive at the pro shop. Pack a dozen more than you think.'],
  ['🚕 Getting there', 'Ask if the course or your hotel includes a transfer. Iberostar Cancún includes one for 2+ players from the Hotel Zone. Otherwise, a private transfer or taxi is easiest with clubs.'],
];

export const GOLF_FAQ: [string, string][] = [
  ['Is there a golf course in the Cancún Hotel Zone?', 'Yes. The Iberostar Cancún Golf Club (18 holes, Km 17) is the only course on the main Hotel Zone strip. Riviera Cancún is at the far south end, near the airport. The old Pok-Ta-Pok club at Km 7.5 is listed as closed, so don\'t plan on it.'],
  ['What is the best golf course in Cancún?', 'El Camaleón at Mayakoba is the most famous; it hosted PGA TOUR events. Near Cancún, Puerto Cancún and Playa Mujeres get some of the best reviews for condition and views.'],
  ['Which Cancún all-inclusive has a golf course?', 'Moon Palace has 27 Jack Nicklaus holes on site. Iberostar Selection Cancún is next to the Iberostar course. In Costa Mujeres, Secrets and Dreams Playa Mujeres are on the Greg Norman course. In the Riviera Maya: the Mayakoba hotels, the Iberostar Playa Paraíso resorts and the Bahia Principe resorts near Akumal.'],
  ['How much is a round of golf in Cancún?', 'In November 2026, online prices for 18 holes started around $110–190 per golfer at the courses we checked, with twilight rates lower. El Camaleón at Mayakoba usually costs more. Prices change by season and time of day, so check before you book.'],
  ['When is the best time to golf in Cancún?', 'November to April, early in the day. It\'s high season, so book tee times ahead. Summer golf is possible, but take the first tee time to beat the heat.'],
  ['Can I play if I\'m not staying at the resort?', 'Yes, at almost every course on this page. Hotel guests often get lower rates or packages.'],
];

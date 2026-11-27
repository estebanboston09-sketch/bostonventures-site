// Local-guide notes per area, used by the day planner. Only well-known, stable places
// (no prices, no opening hours that change). Pins are approximate.

export type GuideArea = 'hotel-zone-north' | 'hotel-zone-south' | 'downtown' | 'costa-mujeres' | 'puerto-morelos' | 'playa-del-carmen' | 'tulum';

export interface AreaGuide {
  label: string;
  at: [number, number];
  vibe: string;
  gettingAround: string;
  evenings: { title: string; text: string }[];   // rotated across the trip
  sunset: string;
  rainy: string[];
  nearby: { title: string; text: string; link?: string }[]; // easy half-day ideas close to the area
}

export const AREA_GUIDE: Record<GuideArea, AreaGuide> = {
  'hotel-zone-north': {
    label: 'Hotel Zone (north, Km 3–12: Playa Tortugas to La Isla)', at: [21.13, -86.75],
    vibe: 'The lively part of the Hotel Zone: calm-water beaches, restaurants and the party center within a short ride.',
    gettingAround: 'The R-1 and R-2 public buses run up and down Kukulcán Boulevard all day and are the cheapest way around. Taxis are everywhere; agree on the price before you get in.',
    evenings: [
      { title: 'Dinner on the lagoon', text: 'The restaurants on the lagoon side of Kukulcán face west, so book a table for sunset and eat with the sky turning orange over the water.' },
      { title: 'La Isla mall stroll', text: 'Walk the canals at La Isla (Km 12.5), with shops, restaurants and a waterfront promenade. Easy, safe, good for all ages.' },
      { title: 'Party center (Km 9)', text: 'Coco Bongo, Mandala and the bars around Punta Cancún. Shows start late; eat dinner first.', },
      { title: 'Downtown tacos', text: 'Take a taxi or the R-1/R-2 bus downtown to Parque de las Palapas for tacos, marquesitas and a local crowd. Much cheaper than the Hotel Zone.' },
    ],
    sunset: 'Sunset is over the lagoon (west), not the sea. Any lagoon-side restaurant or the bridge areas along Kukulcán give the best view.',
    rainy: ['Museo Maya de Cancún (Km 16.5), with the San Miguelito ruins next door', 'La Isla mall and its aquarium', 'A spa afternoon at your resort'],
    nearby: [
      { title: 'Isla Mujeres by ferry', text: 'Ferries leave from Playa Tortugas and Playa Caracol in the Hotel Zone. Rent a golf cart on the island and swim at Playa Norte.', link: '/tours/isla-mujeres-day-trip' },
      { title: 'Playa Delfines and the Cancún sign', text: 'The big public beach at the south end, with the colorful CANCÚN letters on the lookout. Strong waves: swim only when the flag allows.' },
      { title: 'Downtown market morning', text: 'Mercado 23 and Mercado 28 for local food, fruit and souvenirs at local prices.', link: '/tours/mercado-23-cancun' },
    ],
  },
  'hotel-zone-south': {
    label: 'Hotel Zone (south, Km 12–25: La Isla to Punta Nizuc)', at: [21.07, -86.775],
    vibe: 'The open-sea side: wide, bright beaches and bigger waves, quieter than the north end.',
    gettingAround: 'The R-1 and R-2 buses run along Kukulcán to downtown. The party center and La Isla are a short taxi ride north.',
    evenings: [
      { title: 'Sunset on the lagoon', text: 'Head to a lagoon-side restaurant around Km 12–16 for sunset over the water, then dinner.' },
      { title: 'La Isla mall', text: 'Canals, shops and restaurants at Km 12.5. A relaxed evening out without the party crowd.' },
      { title: 'Downtown tacos', text: 'Taxi downtown to Parque de las Palapas for tacos and marquesitas with locals.' },
      { title: 'Night out at Km 9', text: 'The party center (Coco Bongo, Mandala) is about 15–20 minutes north by taxi.' },
    ],
    sunset: 'Watch the sunset over the lagoon from the west side of Kukulcán; from beach-side hotels, the sky over the sea turns pink just after.',
    rainy: ['Museo Maya de Cancún (Km 16.5) and the San Miguelito ruins', 'El Rey ruins (Km 17–18), a small Maya site in the Hotel Zone', 'La Isla mall'],
    nearby: [
      { title: 'Playa Delfines and the Cancún sign', text: 'The public beach with the CANCÚN letters, a few minutes away. Waves can be strong; follow the flags.' },
      { title: 'MUSA underwater museum', text: 'Snorkel or dive over underwater sculptures off Punta Nizuc and Isla Mujeres.', link: '/tours/musa-underwater-museum' },
      { title: 'Jungle tour speedboat', text: 'Drive your own speedboat through the lagoon mangroves, then snorkel a reef.', link: '/tours/jungle-tour-speedboat' },
    ],
  },
  downtown: {
    label: 'Downtown Cancún', at: [21.162, -86.827],
    vibe: 'Where locals live and eat: cheaper, more authentic, and 15–20 minutes from the beaches.',
    gettingAround: 'Walk around the center; R-1/R-2 buses on Avenida Tulum take you to the Hotel Zone beaches. Taxis are cheap downtown.',
    evenings: [
      { title: 'Parque de las Palapas', text: 'The heart of downtown at night: food stalls, marquesitas, families and street music, especially on weekends.', },
      { title: 'Taco night', text: 'Do a self-guided taco crawl around the center. Al pastor and cochinita pibil are the local must-tries.', },
      { title: 'Malecón Tajamar', text: 'A walk along the lagoon boardwalk at sunset, popular with local runners and families.' },
      { title: 'Hotel Zone night out', text: 'Bus or taxi to the party center at Km 9 for Coco Bongo and the bars.' },
    ],
    sunset: 'Malecón Tajamar on the lagoon is the local sunset walk.',
    rainy: ['Mercado 28 for souvenirs under cover', 'Plaza Las Américas mall', 'Museo Maya de Cancún in the Hotel Zone'],
    nearby: [
      { title: 'Beach morning in the Hotel Zone', text: 'Bus to Playa Langosta or Playa Tortugas (calm water) and back by lunch.' },
      { title: 'Isla Mujeres from Puerto Juárez', text: 'The main ferry terminal is a short taxi ride north of downtown.', link: '/tours/isla-mujeres-day-trip' },
      { title: 'Mercado 23', text: 'The most local market in town: fruit, spices, piñatas and cheap breakfast.', link: '/tours/mercado-23-cancun' },
    ],
  },
  'costa-mujeres': {
    label: 'Costa Mujeres / Playa Mujeres', at: [21.245, -86.81],
    vibe: 'Newer, quieter resort strip north of Cancún, facing Isla Mujeres. Most people stay at the resort; plan transport for every outing.',
    gettingAround: 'There is little to walk to outside the resorts. Use taxis or pre-booked transport; downtown and the Puerto Juárez ferry are the closest outings.',
    evenings: [
      { title: 'Resort night', text: 'Most evenings here are at the resort: shows, à la carte dinners and a quiet beach walk.' },
      { title: 'Downtown dinner', text: 'Taxi downtown to Parque de las Palapas for tacos and marquesitas with a local crowd.' },
      { title: 'Puerto Cancún marina', text: 'Waterfront restaurants and a walk by the marina between downtown and the Hotel Zone.' },
      { title: 'Hotel Zone night out', text: 'The party center at Km 9 is about 30 minutes away by taxi; plan a ride back.' },
    ],
    sunset: 'Beaches here face east to Isla Mujeres, so sunrise is the show. Go to downtown or the lagoon for sunset.',
    rainy: ['Spa afternoon at your resort', 'Downtown markets (Mercado 28) under cover', 'Museo Maya de Cancún in the Hotel Zone'],
    nearby: [
      { title: 'Isla Mujeres', text: 'The Puerto Juárez ferry is the closest terminal to Costa Mujeres. Golf cart around the island and swim at Playa Norte.', link: '/tours/isla-mujeres-day-trip' },
      { title: 'Whale sharks (Jun–Sep)', text: 'Boats leave from the Cancún and Isla Mujeres side, close to Costa Mujeres.', link: '/tours/whale-shark-tour-cancun' },
      { title: 'Golf at Playa Mujeres', text: 'The Greg Norman course is right in the area.', link: '/golf/playa-mujeres-golf-club' },
    ],
  },
  'puerto-morelos': {
    label: 'Puerto Morelos', at: [20.85, -86.875],
    vibe: 'A small fishing town between Cancún and Playa del Carmen, with a protected reef right off the beach.',
    gettingAround: 'The town center is walkable. Taxis and colectivo vans on Highway 307 connect to Cancún and Playa del Carmen.',
    evenings: [
      { title: 'Town square and the leaning lighthouse', text: 'Walk the little plaza and the famous leaning lighthouse, then seafood at a local restaurant.' },
      { title: 'Fresh fish dinner', text: 'The town is known for simple seafood places right on the sand.' },
      { title: 'Playa del Carmen night', text: '5th Avenue is about 30 minutes south by taxi.' },
      { title: 'Resort night', text: 'Most resorts here are quiet at night: dinner, a show and an early start for tomorrow.' },
    ],
    sunset: 'The beach faces east (sunrise side). For a sunset view, look west from the town pier area or go to a cenote in the late afternoon.',
    rainy: ['Crococun zoo is close by', 'Spa afternoon', 'Cenotes are good even on cloudy days'],
    nearby: [
      { title: 'Reef snorkel from town', text: 'Boats leave from the town beach to the Puerto Morelos reef national park, minutes offshore.' },
      { title: 'Ruta de los Cenotes', text: 'A road of cenotes just inland from town: swimming, zip lines and jungle.', link: '/tours/cenote-tour' },
      { title: 'Crococun zoo', text: 'Small, hands-on zoo with crocodiles, monkeys and deer. Great with kids.', link: '/tours/crococun-zoo' },
    ],
  },
  'playa-del-carmen': {
    label: 'Playa del Carmen', at: [20.63, -87.073],
    vibe: 'A walkable beach town with 5th Avenue as its spine: restaurants, bars and shops a few steps from the sea.',
    gettingAround: 'Walk most of it. Colectivo vans on Highway 307 run to Tulum and the parks; ferries leave for Cozumel.',
    evenings: [
      { title: '5th Avenue', text: 'Walk Quinta Avenida from the Cozumel ferry dock north, with dinner on a side street (they are usually cheaper).' },
      { title: 'Parque Fundadores', text: 'The beach plaza with the big Portal Maya sculpture; there are often free performances at night.' },
      { title: 'Calle 12 night out', text: 'The bar and club street off 5th Avenue.' },
      { title: 'Taco night off the strip', text: 'Locals eat a few blocks inland from 5th Avenue, at half the price.' },
    ],
    sunset: 'Beaches face east. For sunset, a rooftop bar on 5th Avenue works best.',
    rainy: ['Shops along 5th Avenue and Paseo del Carmen', 'Cenotes nearby', 'Xenses or Río Secreto (underground river)'],
    nearby: [
      { title: 'Xcaret or Xplor', text: 'The big parks are about 10 minutes south.', link: '/tours/xcaret-park' },
      { title: 'Cozumel reef', text: 'Ferry across from the main dock for some of the best snorkeling in Mexico.', link: '/tours/cozumel-snorkel' },
      { title: 'Punta Esmeralda beach', text: 'A local favorite at the north end of town, where a small cenote spring meets the sea.' },
    ],
  },
  tulum: {
    label: 'Tulum', at: [20.211, -87.465],
    vibe: 'Jungle, ruins on a cliff and a beach road of boutique hotels. Spread out: plan bikes, taxis or a car.',
    gettingAround: 'Bikes work in town and to some cenotes. Taxis between town and the beach road are expensive; agree on the price first.',
    evenings: [
      { title: 'Tulum town dinner', text: 'Avenida Tulum and its side streets have cheaper, very good food compared with the beach road.' },
      { title: 'Beach road dinner', text: 'Candlelit restaurants in the jungle along the hotel zone. Book ahead in high season.' },
      { title: 'Resort night', text: 'Early night: the ruins and cenotes are best first thing in the morning.' },
      { title: 'Sunset at a cenote or lagoon', text: 'Head inland for a late swim, then dinner in town.' },
    ],
    sunset: 'Beaches face east. For sunset, go inland to a lagoon or rooftop in town.',
    rainy: ['Cenotes (you get wet anyway)', 'Spa or temazcal', 'Cobá ruins under the jungle canopy'],
    nearby: [
      { title: 'Tulum ruins first thing', text: 'Be at the gate at opening to beat the heat and the tour buses.', link: '/tours/tulum-ruins-and-beach' },
      { title: 'Cenotes by bike', text: 'Several cenotes are a short ride from town on the road to Cobá.', link: '/tours/cenote-tour' },
      { title: 'Xel-Há park', text: 'About 15 minutes north: snorkeling, floating and an all-inclusive day.', link: '/tours/xel-ha-park' },
    ],
  },
};

/** Pick the guide area for a hotel area + location. */
export function guideAreaFor(area: string, loc?: { lat: number; lng: number }): GuideArea {
  if (area === 'hotel-zone') return loc && loc.lat < 21.11 ? 'hotel-zone-south' : 'hotel-zone-north';
  if (area === 'south-cancun') return 'hotel-zone-south';
  if (area === 'downtown' || area === 'isla-mujeres') return 'downtown';
  if (area === 'costa-mujeres') return 'costa-mujeres';
  if (area === 'puerto-morelos') return 'puerto-morelos';
  if (area === 'playa-del-carmen' || area === 'riviera-maya') return loc && loc.lat < 20.45 ? 'tulum' : 'playa-del-carmen';
  if (area === 'tulum') return 'tulum';
  return 'hotel-zone-north';
}

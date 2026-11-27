// Seaweed (sargassum) levels from the official SEMA Quintana Roo "Semáforo del Sargazo".
// Update `report` and the levels from the latest semáforo (the nightly task does this).
// Pins are approximate beach locations; beaches without a reliable spot have no `at`.
export type Level = 'none' | 'low' | 'moderate' | 'abundant' | 'excessive';

export const LEVELS: Record<Level, { label: string; es: string; color: string; advice: string }> = {
  none: { label: 'No seaweed', es: 'Sin sargazo', color: '#2563EB', advice: 'Clear when checked.' },
  low: { label: 'Low', es: 'Bajo', color: '#22B07D', advice: 'A little seaweed may wash up. Usually fine for swimming.' },
  moderate: { label: 'Moderate', es: 'Moderado', color: '#F2C230', advice: 'Visible patches on the sand and in the water.' },
  abundant: { label: 'Abundant', es: 'Abundante', color: '#F08A24', advice: 'Lots of seaweed. Pick another beach if you can.' },
  excessive: { label: 'Excessive', es: 'Excesivo', color: '#D7263D', advice: 'Thick piles and smell. Not a beach day here.' },
};

export const REPORT = {
  date: '2026-11-26',
  source: 'Semáforo del Sargazo, SEMA Quintana Roo (Red de Monitoreo del Sargazo)',
  officialUrl: 'https://www.facebook.com/search/top?q=Red%20de%20Monitoreo%20del%20Sargazo%20de%20Quintana%20Roo',
  north: { total: 100, excessive: 0, abundant: 0, moderate: 2, low: 95, none: 3 },
  south: { total: 40, excessive: 3, abundant: 3, moderate: 4, low: 28, none: 2 },
};

export type Beach = { name: string; area: string; level: Level; at?: [number, number] };

export const BEACHES: Beach[] = [
  // Cancún
  { area: 'Cancún', name: 'Playa Las Perlas', level: 'low', at: [21.1525, -86.8155] },
  { area: 'Cancún', name: 'Playa Langosta', level: 'low', at: [21.1425, -86.79] },
  { area: 'Cancún', name: 'Playa Tortugas', level: 'low', at: [21.1405, -86.781] },
  { area: 'Cancún', name: 'Playa Caracol', level: 'low', at: [21.1385, -86.748] },
  { area: 'Cancún', name: 'Playa Gaviota Azul', level: 'low', at: [21.1345, -86.7465] },
  { area: 'Cancún', name: 'Playa Chac-Mool', level: 'low', at: [21.131, -86.7455] },
  { area: 'Cancún', name: 'Playa Marlín', level: 'low', at: [21.107, -86.758] },
  { area: 'Cancún', name: 'Playa Ballenas', level: 'low', at: [21.0905, -86.768] },
  { area: 'Cancún', name: 'Playa San Miguel', level: 'low', at: [21.079, -86.773] },
  { area: 'Cancún', name: 'Playa Delfines', level: 'low', at: [21.06, -86.78] },
  { area: 'Cancún', name: 'Playa Coral', level: 'moderate', at: [21.044, -86.7845] },
  { area: 'Cancún', name: 'Punta Nizuc', level: 'low', at: [21.034, -86.779] },
  // Isla Mujeres
  { area: 'Isla Mujeres', name: 'Playa Norte', level: 'low', at: [21.262, -86.751] },
  { area: 'Isla Mujeres', name: 'Playa Centro', level: 'low', at: [21.256, -86.746] },
  { area: 'Isla Mujeres', name: 'Playa Mia', level: 'low', at: [21.236, -86.738] },
  { area: 'Isla Mujeres', name: 'Playa Lancheros', level: 'low', at: [21.2215, -86.734] },
  { area: 'Isla Mujeres', name: 'Punta Sur', level: 'low', at: [21.205, -86.715] },
  // Puerto Morelos
  { area: 'Puerto Morelos', name: 'Puerto Morelos Norte', level: 'low', at: [20.865, -86.87] },
  { area: 'Puerto Morelos', name: 'Puerto Morelos Centro', level: 'low', at: [20.847, -86.875] },
  { area: 'Puerto Morelos', name: 'Punta Brava', level: 'low', at: [20.822, -86.888] },
  // Playa del Carmen
  { area: 'Playa del Carmen', name: 'Playa Colosio', level: 'low', at: [20.656, -87.049] },
  { area: 'Playa del Carmen', name: 'Punta Esmeralda', level: 'low', at: [20.645, -87.058] },
  { area: 'Playa del Carmen', name: 'Playa Caribe', level: 'low', at: [20.6395, -87.0615] },
  { area: 'Playa del Carmen', name: 'Playa El Recodo', level: 'low', at: [20.6365, -87.0635] },
  { area: 'Playa del Carmen', name: 'Playa Mamitas', level: 'low', at: [20.634, -87.065] },
  { area: 'Playa del Carmen', name: 'Playacar Fase 1', level: 'low', at: [20.616, -87.076] },
  { area: 'Playa del Carmen', name: 'Playacar Fase 2', level: 'low', at: [20.602, -87.086] },
  // Cozumel
  { area: 'Cozumel', name: 'Punta Molas', level: 'moderate', at: [20.591, -86.734] },
  { area: 'Cozumel', name: 'Playa Xhanan', level: 'abundant' },
  { area: 'Cozumel', name: 'Playa El Castillo', level: 'moderate', at: [20.517, -86.788] },
  { area: 'Cozumel', name: 'Playa Mezcalitos', level: 'moderate', at: [20.476, -86.813] },
  { area: 'Cozumel', name: 'Playa Chumul', level: 'moderate' },
  { area: 'Cozumel', name: 'Isla de la Pasión', level: 'moderate', at: [20.537, -86.933] },
  { area: 'Cozumel', name: 'Playa Las Uvas', level: 'low', at: [20.4745, -86.979] },
  { area: 'Cozumel', name: 'Chankanaab', level: 'low', at: [20.441, -86.997] },
  { area: 'Cozumel', name: 'San Francisco', level: 'low', at: [20.37, -87.023] },
  { area: 'Cozumel', name: 'Playa Mia', level: 'low', at: [20.362, -87.028] },
  { area: 'Cozumel', name: 'El Cielo', level: 'low' },
  { area: 'Cozumel', name: 'Palancar', level: 'low', at: [20.316, -87.017] },
  // Tulum
  { area: 'Tulum', name: 'Tulum ruins beach', level: 'low', at: [20.2145, -87.429] },
  { area: 'Tulum', name: 'Tulum hotel zone north', level: 'low', at: [20.201, -87.433] },
  { area: 'Tulum', name: 'Punta Piedra', level: 'low', at: [20.17, -87.451] },
  { area: 'Tulum', name: 'Tulum hotel zone south', level: 'low', at: [20.148, -87.462] },
  { area: 'Tulum', name: 'Arco Maya', level: 'low' },
  // Holbox
  { area: 'Holbox', name: 'Holbox Centro', level: 'moderate', at: [21.524, -87.379] },
  { area: 'Holbox', name: 'Punta Cocos', level: 'low', at: [21.515, -87.4] },
  { area: 'Holbox', name: 'Punta Mosquito', level: 'low', at: [21.535, -87.355] },
  // Mahahual (south zone)
  { area: 'Mahahual', name: 'Mahahual (10 beaches)', level: 'low', at: [18.713, -87.709] },
];

// Typical year, for planning. 2026 was a record year: it started about two months early
// and kept going past September (Por Esto, Oct 2026). Peak is June–July (Red de Monitoreo).
export const SEASON = [
  { m: 'Jan', risk: 'low' }, { m: 'Feb', risk: 'low' }, { m: 'Mar', risk: 'low' }, { m: 'Apr', risk: 'moderate' },
  { m: 'May', risk: 'abundant' }, { m: 'Jun', risk: 'excessive' }, { m: 'Jul', risk: 'excessive' }, { m: 'Aug', risk: 'abundant' },
  { m: 'Sep', risk: 'moderate' }, { m: 'Oct', risk: 'moderate' }, { m: 'Nov', risk: 'low' }, { m: 'Dec', risk: 'low' },
] as const;

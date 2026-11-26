// Facts worked out automatically for every hotel page from data the site already has.
import { BEACHES, LEVELS, REPORT } from '../data/sargassum';

type LatLng = { lat: number; lng: number };
const R = 6371;
export const km = (a: LatLng, b: LatLng) => {
  const dLat = ((b.lat - a.lat) * Math.PI) / 180, dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};

// Landmarks (approximate points).
export const PLACES = {
  airport: { name: 'Cancún airport (CUN)', lat: 21.0365, lng: -86.8771 },
  party: { name: 'Party zone (Coco Bongo, Km 9)', lat: 21.1338, lng: -86.7465 },
  laIsla: { name: 'La Isla mall (Km 12.5)', lat: 21.1105, lng: -86.765 },
  downtown: { name: 'Downtown (Parque de las Palapas)', lat: 21.1619, lng: -86.8275 },
  ferry: { name: 'Isla Mujeres ferry (Puerto Juárez)', lat: 21.1846, lng: -86.8072 },
};

/** "450 m" or "3.2 km", plus a walking time when it's walkable. */
export const distanceText = (k: number) => {
  const road = k * 1.3; // straight line → rough street distance
  const txt = road < 1 ? `${Math.round(road * 10) * 100} m` : `${road.toFixed(road < 10 ? 1 : 0)} km`;
  const walk = road <= 2 ? ` · ~${Math.max(2, Math.round((road / 5) * 60))} min walk` : road <= 25 ? ` · ~${Math.max(5, Math.round(road * 2 + 3))} min by car` : '';
  return txt + walk;
};

export function distances(area: string, loc?: LatLng) {
  if (!loc) return [];
  const list = area === 'hotel-zone' || area === 'downtown' || area === 'costa-mujeres'
    ? [PLACES.party, PLACES.laIsla, PLACES.downtown, PLACES.ferry]
    : [PLACES.downtown];
  return list.map((p) => ({ name: p.name, text: distanceText(km(loc, p)) }));
}

/** What the sea is usually like, from where the hotel is. */
export function beachType(area: string, loc?: LatLng): { label: string; note: string } | null {
  if (area === 'downtown') return { label: 'No beach', note: 'Downtown is inland. The nearest good beaches are in the Hotel Zone, 20–30 minutes away by bus or taxi.' };
  if (area === 'hotel-zone' && loc) {
    if (loc.lat > 21.137) return { label: 'Calm bay', note: 'This part of the Hotel Zone faces north into the bay: gentle water, good for kids and weak swimmers, and usually much less seaweed.' };
    if (loc.lat > 21.12) return { label: 'Punta Cancún: mixed', note: 'Near the tip of the Hotel Zone. Some beaches face the calm bay, others the open sea with small to moderate waves.' };
    return { label: 'Open Caribbean', note: 'East-facing open sea: turquoise water, wider beaches and stronger waves and currents. Check the flag color before swimming.' };
  }
  const map: Record<string, { label: string; note: string }> = {
    'costa-mujeres': { label: 'Usually calm', note: 'North of Cancún, facing Isla Mujeres. Water is often calmer than the Hotel Zone, but seaweed can arrive in season.' },
    'isla-mujeres': { label: 'Calm (north beaches)', note: 'Playa Norte and the west side are calm and shallow; the east side is rocky open sea.' },
    'puerto-morelos': { label: 'Reef-protected', note: 'A reef just offshore keeps the water fairly calm and makes snorkeling easy.' },
    'south-cancun': { label: 'Open coast', note: 'Between Cancún and Puerto Morelos. Conditions vary by spot; seaweed can arrive in season.' },
    'playa-del-carmen': { label: 'Mostly calm', note: 'Cozumel island shelters this coast, so waves are usually small.' },
    'riviera-maya': { label: 'Varies by bay', note: 'Some hotels sit on calm, reef-protected bays; others face open sea. Check photos of the hotel beach.' },
    tulum: { label: 'Open sea', note: 'Open Caribbean with some waves. Seaweed can be heavy in season.' },
  };
  return map[area] ?? null;
}

/** Nearest beach on the official seaweed report, if one is close enough. */
export function seaweedNear(loc?: LatLng) {
  if (!loc) return null;
  const near = BEACHES.filter((b) => b.at)
    .map((b) => ({ b, d: km(loc, { lat: b.at![0], lng: b.at![1] }) }))
    .sort((a, b) => a.d - b.d)[0];
  if (!near || near.d > 8) return null;
  const lv = LEVELS[near.b.level];
  return { beach: near.b.name, area: near.b.area, level: lv.label, color: lv.color, advice: lv.advice, date: REPORT.date, distance: distanceText(near.d) };
}

/** Private van price range from the airport, from the fair price checker data. */
export function transferEstimate(area: string, airportMinutes?: number) {
  // Only the Hotel Zone range is checked (see /tools/fair-prices); farther areas cost more.
  return area === 'hotel-zone' ? 'about $30–65 USD each way for the whole van' : null;
}

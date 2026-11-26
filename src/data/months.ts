// Cancún month-by-month planning data.
// Weather: long-term averages (weather2travel.com, weather-atlas.com). Hurricanes: Atlantic season
// is Jun 1 – Nov 30, peak Aug–Oct (NOAA). Seaweed: typical year (see sargassum.ts).
// Crowds/prices: holiday calendars (US/Canada spring break, Mexican Semana Santa and summer, Christmas).
export type Lvl = 1 | 2 | 3; // 1 = low, 2 = medium, 3 = high
export type Month = {
  m: string; name: string; highC: number; seaC: number; rainDays: number;
  hurricane: 0 | Lvl; seaweed: Lvl; crowds: Lvl; prices: Lvl;
  note: string; wildlife?: string;
};
export const MONTHS: Month[] = [
  { m: 'Jan', name: 'January', highC: 28, seaC: 26, rainDays: 6, hurricane: 0, seaweed: 1, crowds: 2, prices: 2, note: 'Busy the first week after New Year, then calmer. Cooler nights; a "norte" cold front can bring a windy, cloudy day or two.' },
  { m: 'Feb', name: 'February', highC: 28, seaC: 26, rainDays: 5, hurricane: 0, seaweed: 1, crowds: 3, prices: 3, note: 'Peak dry season and Canadian winter escapes. Coolest sea of the year. Book early.' },
  { m: 'Mar', name: 'March', highC: 29, seaC: 26, rainDays: 3, hurricane: 0, seaweed: 1, crowds: 3, prices: 3, note: 'Driest month, but US spring break fills the Hotel Zone party strip. Families and couples may prefer Costa Mujeres or Playa del Carmen.' },
  { m: 'Apr', name: 'April', highC: 31, seaC: 27, rainDays: 3, hurricane: 0, seaweed: 2, crowds: 2, prices: 2, note: 'Semana Santa (Easter week) is huge for Mexican travelers; the rest of the month is quieter. Seaweed can start arriving.' },
  { m: 'May', name: 'May', highC: 32, seaC: 28, rainDays: 7, hurricane: 0, seaweed: 3, crowds: 1, prices: 1, note: 'Hot, sunny and cheaper. Seaweed usually builds this month, so check the seaweed map.', wildlife: 'Sea turtle nesting starts.' },
  { m: 'Jun', name: 'June', highC: 32, seaC: 28, rainDays: 11, hurricane: 1, seaweed: 3, crowds: 2, prices: 2, note: 'Hurricane season starts (June is usually quiet). Short afternoon storms. Peak seaweed.', wildlife: 'Whale shark season begins.' },
  { m: 'Jul', name: 'July', highC: 33, seaC: 29, rainDays: 11, hurricane: 2, seaweed: 3, crowds: 3, prices: 3, note: 'Mexican and European summer holidays make it busy. Hot and humid. Peak seaweed.', wildlife: 'Whale sharks and turtle hatchlings.' },
  { m: 'Aug', name: 'August', highC: 33, seaC: 29, rainDays: 13, hurricane: 3, seaweed: 3, crowds: 3, prices: 2, note: 'Hottest month and busy until mid-August. Hurricane risk rises; get travel insurance.', wildlife: 'Whale sharks and turtle hatchlings.' },
  { m: 'Sep', name: 'September', highC: 32, seaC: 29, rainDays: 14, hurricane: 3, seaweed: 2, crowds: 1, prices: 1, note: 'Cheapest and quietest month, but the rainiest and the peak of hurricane season.', wildlife: 'Last whale sharks of the season.' },
  { m: 'Oct', name: 'October', highC: 31, seaC: 28, rainDays: 13, hurricane: 3, seaweed: 2, crowds: 1, prices: 1, note: 'Low prices and few crowds. Still hurricane season and quite rainy. Seaweed usually fading.' },
  { m: 'Nov', name: 'November', highC: 29, seaC: 27, rainDays: 8, hurricane: 1, seaweed: 1, crowds: 2, prices: 2, note: 'Weather improves fast and seaweed is usually gone. US Thanksgiving week gets busy. A great value month.' },
  { m: 'Dec', name: 'December', highC: 28, seaC: 26, rainDays: 7, hurricane: 0, seaweed: 1, crowds: 2, prices: 3, note: 'Early December is lovely and fair-priced. From about Dec 20 to Jan 2 it is the most expensive time of the year.' },
];

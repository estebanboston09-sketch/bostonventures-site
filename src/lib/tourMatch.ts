import type { Interest, Tour } from '../data/tours';

export interface Prefs {
  interests: Interest[];
  month?: number; // 1–12
  kids: 'none' | 'young' | 'teens';
  energy: 1 | 2 | 3;
}

export interface Match { tour: Tour; score: number; why: string[]; warn?: string }

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function rankTours(tours: Tour[], p: Prefs): Match[] {
  const out: Match[] = [];
  for (const t of tours) {
    const why: string[] = [];
    let warn: string | undefined;
    let s = 0;
    if (p.kids !== 'none' && t.kids === 'no') continue;
    if (t.months && p.month && !t.months.includes(p.month)) continue; // out of season
    const hits = t.interests.filter((i) => p.interests.includes(i));
    if (p.interests.length && !hits.length) continue;
    s += hits.length * 3 + (hits[0] === t.interests[0] ? 2 : 0);
    if (hits.length) why.push(`Matches: ${hits.length} of your interests`);
    if (p.kids === 'young' && t.kids === 'great') { s += 2; why.push('Great with young kids'); }
    if (p.kids === 'young' && t.energy === 3) { s -= 2; warn = 'Check age and height limits for young kids'; }
    const de = Math.abs(t.energy - p.energy);
    s += de === 0 ? 2 : de === 1 ? 0 : -2;
    if (de === 0) why.push(['', 'Easy-going', 'Moderate effort', 'Active day'][t.energy]);
    if (t.months && p.month) { s += 3; why.push(`In season in ${MONTHS[p.month - 1]}`); }
    if (t.reviewed) { s += 0.5; why.push('Reviewed on the channel'); }
    out.push({ tour: t, score: s, why, warn });
  }
  return out.sort((a, b) => b.score - a.score);
}

export function seasonNote(month?: number): string[] {
  if (!month) return [];
  const notes: string[] = [];
  if ([12, 1, 2, 3, 4].includes(month)) notes.push('Dry season: the best weather of the year, and the busiest and most expensive time to visit.');
  if ([5, 6, 7, 8, 9, 10].includes(month)) notes.push('Sargassum seaweed can hit Caribbean beaches in the warmer months. Ask your hotel about it, and keep Isla Mujeres or cenotes as a backup plan.');
  if ([6, 7, 8, 9, 10, 11].includes(month)) notes.push('Hurricane season runs June to November. Most days are fine, but get travel insurance and watch the forecast.');
  if ([6, 7, 8, 9].includes(month)) notes.push('Whale shark season! This is the time to swim with them.');
  if (month === 3 || month === 4) notes.push('Spring break and Easter bring big crowds and higher prices — book early.');
  return notes;
}

export { MONTHS };

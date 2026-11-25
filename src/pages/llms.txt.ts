// /llms.txt — a plain-text map of the site for AI assistants (ChatGPT, Claude, Gemini, Perplexity).
// Built automatically from the hotel, guide and tour data, so it is always up to date.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { TOURS } from '../data/tours';
import { SITE, AREAS } from '../lib/site';
import { overallScore } from '../lib/score';

export const GET: APIRoute = async ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const hotels = (await getCollection('hotels')).filter((h) => !h.data.needsReview);
  const reviewed = hotels.filter((h) => h.data.review).sort((a, b) => (overallScore(b.data.review) ?? 0) - (overallScore(a.data.review) ?? 0));
  const others = hotels.filter((h) => !h.data.review).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const guides = (await getCollection('guides')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const line = (h: any) => {
    const d = h.data; const s = overallScore(d.review);
    const bits = [AREAS[d.area]?.label, d.allInclusive ? 'all-inclusive' : null, d.adultsOnly ? 'adults-only' : 'kids welcome', s != null ? `Esteban's score ${s}/10` : null].filter(Boolean).join(', ');
    return `- [${d.name}](${u(`/hotels/${h.id}`)}): ${bits}.${d.review?.verdict ? ' ' + d.review.verdict : ''}`;
  };
  const body = `# ${SITE.name}

> Free English travel guide to Cancún and the Riviera Maya (Mexico), written by Esteban, a hotel reviewer who lives in Cancún and runs the YouTube channel ${SITE.youtube}. Honest hotel reviews with his own scores from real stays, tour advice, airport tips, safety and money guides, and free trip tools.

Scores are Esteban's own (out of 10, the average of his category scores) from stays shown in his videos. Pages marked "not reviewed yet" contain facts from official hotel sites and a summary of public guest reviews, not his opinion.

## Hotels Esteban reviewed (best score first)
${reviewed.map(line).join('\n')}

## Other hotels (facts and traveler summary)
${others.map(line).join('\n')}

## Guides
- [Cancún airport guide](${u('/guides/cancun-airport')}): terminals, transfers, taxis and tips.
${guides.map((g) => `- [${g.data.title}](${u(`/guides/${g.id}`)}): ${g.data.description}`).join('\n')}

## Tours and day trips
${TOURS.map((t) => `- [${t.name}](${u(`/tours/${t.slug}`)}): ${t.short}`).join('\n')}

## Free tools
- [Hotel matcher](${u('/tools/hotel-match')}): answer a few questions, get matching hotels.
- [Tour finder](${u('/tools/tour-finder')}): tours ranked by your interests, energy and month.
- [Trip planner](${u('/tools/trip-planner')}): a day-by-day plan you can share.
- [Fair price checker](${u('/tools/fair-prices')}): pesos/dollars converter and fair prices for taxis, tips and tours.
- [Compare hotels](${u('/hotels/compare')}): side-by-side scores and facts.
- [Map](${u('/map')}): hotels and tours on one map.

## About
- [About Esteban](${u('/about')})
- [How we review](${u('/review-policy')})
- [Affiliate disclosure](${u('/affiliate-disclosure')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

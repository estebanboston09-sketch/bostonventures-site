// /chat-data.json — everything the AI chat is allowed to know, built from the site's own data
// on every deploy. The chat only answers from these chunks, so new hotels/guides are included automatically.
import { COURSES, GOLF_TIPS } from '../data/golf';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { TOURS } from '../data/tours';
import { PRIVATE_TOURS, DEST_LABELS, COMMON } from '../data/privateTours';
import { TERMINALS } from '../data/airport';
import { MONTHS } from '../data/months';
import { BEACHES, LEVELS, REPORT } from '../data/sargassum';
import { AREAS, AFFILIATE } from '../lib/site';
import { overallScore } from '../lib/score';

const clean = (s = '') => s.replace(/<[^>]+>/g, ' ').replace(/[#*_>`]|\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
const list = (a?: string[]) => (a && a.length ? a.join('; ') : '');

export const GET: APIRoute = async () => {
  const chunks: { title: string; url: string; text: string }[] = [];
  const hotels = (await getCollection('hotels')).filter((h) => !h.data.needsReview);
  for (const h of hotels) {
    const d: any = h.data; const s = overallScore(d.review);
    chunks.push({
      title: d.name, url: `/hotels/${h.id}`,
      text: [
        `${d.name} — ${AREAS[d.area]?.label ?? d.area}. ${d.allInclusive ? 'All-inclusive' : 'Room only'}. ${d.adultsOnly ? 'Adults only' : 'Kids welcome'}.`,
        s != null ? `Esteban reviewed it in a video: score ${s}/10. ${d.review?.verdict ?? ''}` : 'Esteban has NOT reviewed this hotel yet (facts from the official site and public guest reviews).',
        d.review?.scores?.length ? `Category scores: ${d.review.scores.map((x: any) => `${x.label} ${x.value}`).join(', ')}.` : '',
        d.review?.pros?.length ? `Pros: ${list(d.review.pros)}.` : '', d.review?.cons?.length ? `Cons: ${list(d.review.cons)}.` : '',
        d.review?.pricePaid ? `Price Esteban paid: ${d.review.pricePaid}.` : '',
        d.priceRangeUSD ? `Typical price: $${d.priceRangeUSD.low}–${d.priceRangeUSD.high} per night.` : '',
        d.bestFor?.length ? `Best for: ${d.bestFor.join(', ')}.` : '',
        d.about ? `About: ${clean(d.about)}` : '', d.amenities?.length ? `Amenities: ${list(d.amenities)}.` : '',
        d.dining?.length ? `Restaurants and bars: ${d.dining.map((x: any) => `${x.name} (${x.type})`).join('; ')}.` : '',
        d.practical?.length ? `Practical: ${d.practical.map((x: any) => `${x.label}: ${x.value}`).join('; ')}.` : '',
        d.travelers?.summary ? `What other travelers say: ${d.travelers.summary} Praise: ${list(d.travelers.praise)}. Complaints: ${list(d.travelers.complaints)}.` : '',
        clean(h.body ?? '').slice(0, 1200),
      ].filter(Boolean).join(' '),
    });
  }
  for (const g of await getCollection('guides')) {
    const d: any = g.data;
    chunks.push({ title: d.title, url: `/guides/${g.id}`, text: `${d.title}. ${d.description} ${clean(g.body ?? '').slice(0, 3500)} ${d.faqs.map((f: any) => `Q: ${f.q} A: ${f.a}`).join(' ')}` });
  }
  for (const t of TOURS) {
    chunks.push({ title: t.name, url: `/tours/${t.slug}`, text: `Tour: ${t.name}. ${t.short} Travel: ${t.travel}. Kids: ${t.kids}. ${t.length === 'full' ? 'Full day' : 'Half day'}. ${t.months ? `Season: months ${t.months.join(', ')}.` : ''} Local tip: ${t.localTip} Good for: ${t.goodFor} Skip if: ${t.skipIf} ${t.reviewed ? `Esteban went: ${t.reviewed.verdict ?? ''} ${list(t.reviewed.notes)} ${t.reviewed.prices ? `Prices (${t.reviewed.prices.checked}): ${t.reviewed.prices.text}` : ''}` : ''}` });
  }
  for (const t of PRIVATE_TOURS) {
    chunks.push({ title: t.name, url: `/tours/private/${t.slug}`, text: `Private tour (book with USA Transfers, Esteban's recommended company): ${t.name}. Places: ${t.dests.map((d) => DEST_LABELS[d]).join(', ')}. ${t.short} Runs: ${t.days}. ${t.duration ?? ''}. Price from $${t.price.adult} ${t.price.label}${t.price.table ? ` (2 people: $${t.price.table.find(([n]) => n === 2)?.[1]} each)` : ''}${t.price.kid ? `, kids $${t.price.kid}` : ''}. ${COMMON.tax} Stops: ${t.stops.map((s) => s.name + ': ' + s.text).join(' ')} Included: ${t.included.join('; ')}. Not included: ${t.notIncluded.join('; ')}. Notes: ${t.notes.join(' ')} ${COMMON.cancel}` });
  }
  chunks.push({ title: 'Cancún airport terminals', url: '/guides/cancun-airport', text: TERMINALS.map((t: any) => `${t.id ?? t.name}: ${JSON.stringify(t).replace(/["{}\[\]]/g, ' ')}`).join(' ').slice(0, 4000) });
  chunks.push({ title: 'Golf in Cancún and the Riviera Maya', url: '/golf', text: 'Golf courses: ' + COURSES.map((c) => `${c.name} (${c.where}): ${c.holes}${c.yards ? ', ' + c.yards : ''}, designed by ${c.designer}${c.opened ? ', opened ' + c.opened : ''}. ${c.access} ${c.includes ? 'Green fee includes: ' + c.includes : ''} ${c.price ? `Price: ${c.price.text} (checked ${c.price.checked}).` : 'No current price on file.'} ${c.highlights.join('. ')}. Good to know: ${c.heads.join('. ')}. ${c.hotels.length ? 'Golf hotels: ' + c.hotels.join(', ') + '.' : ''}`).join(' ') + ' Pok-Ta-Pok (Hotel Zone Km 7.5) is listed as closed. Tips: ' + GOLF_TIPS.map(([t, d]) => d).join(' ') });
  chunks.push({ title: 'Best time to visit Cancún (month by month)', url: '/tools/best-time', text: MONTHS.map((m) => `${m.name}: high ${m.highC}°C, sea ${m.seaC}°C, ${m.rainDays} rain days, hurricane risk ${['none', 'low', 'medium', 'high'][m.hurricane]}, seaweed ${['', 'low', 'medium', 'high'][m.seaweed]}, crowds ${['', 'low', 'medium', 'high'][m.crowds]}, prices ${['', 'low', 'medium', 'high'][m.prices]}. ${m.note} ${m.wildlife ?? ''}`).join(' ') });
  chunks.push({ title: `Seaweed (sargassum) map, official report ${REPORT.date}`, url: '/tools/seaweed-map', text: `Seaweed levels from ${REPORT.source}, report dated ${REPORT.date}. ` + BEACHES.map((b) => `${b.name} (${b.area}): ${LEVELS[b.level].label}`).join('; ') + '. Seaweed season usually builds in April–May, peaks June–July, eases Sept–Oct; Nov–March usually clear. Bay-side beaches (Playa Norte, Las Perlas, Langosta, Tortugas, Caracol) get less.' });
  chunks.push({ title: 'Fair prices, tips and the Visitax', url: '/tools/fair-prices', text: 'Airport taxi to Hotel Zone 900–1,200 pesos. Private transfer $30–65 USD per van one way. Shared shuttle $15–22 per person. ADO bus 140 pesos. Uber Hotel Zone to airport about 400–600 pesos. Tips: housekeeping 20–50 pesos per night, bellhop 25–50, bartender 40–50 per round, restaurants 10–15%. Visitax tourist tax: 293 pesos per foreign visitor age 4+, paid online at the official Visitax site. Pay card machines in MXN, not USD. Real trip cost calculator: /tools/trip-cost.' });
  chunks.push({ title: 'Esteban\'s recommended partners', url: '/', text: `Airport transfers: Esteban recommends ${AFFILIATE.transfers.name} (private van, fixed price, booked online): ${AFFILIATE.transfers.url}. eSIM: ${AFFILIATE.esim.name}, ${AFFILIATE.esim.deal}: ${AFFILIATE.esim.url}. These are affiliate links (Esteban earns a small commission at no extra cost).` });
  return new Response(JSON.stringify(chunks), { headers: { 'content-type': 'application/json' } });
};

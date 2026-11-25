import { marked } from 'marked';

export interface Section { title: string; score: number | null; html: string; start: number | null }

// Splits a review body into "## Heading — 9.5" sections and links each to the matching video chapter.
const KEYS: [RegExp, RegExp][] = [
  [/room|bubble|inside/i, /room|inside|bubble|tour/i],
  [/food|dining|restaurant|buffet/i, /food|dining|buffet|restaurant/i],
  [/beach|pool/i, /beach|pool/i],
  [/activit|entertain|vibe|atmosphere|kids/i, /activit|entertain|kids|water sports/i],
  [/service/i, /service|check-in/i],
  [/spa/i, /spa/i],
  [/cenote/i, /cenote/i],
  [/property/i, /hotel tour|tour/i],
];

export function splitSections(body: string, chapters: { label: string; start: number }[] = []) {
  const parts = body.split(/^## /m);
  const intro = parts.shift()?.trim() ?? '';
  const sections: Section[] = parts.map((p) => {
    const nl = p.indexOf('\n');
    const head = (nl === -1 ? p : p.slice(0, nl)).trim();
    const text = nl === -1 ? '' : p.slice(nl + 1).trim();
    const m = head.match(/^(.*?)\s+—\s+([\d.]+)/);
    const title = (m ? m[1] : head).trim();
    const score = m ? Number(m[2]) : null;
    let start: number | null = null;
    for (const [h, c] of KEYS) {
      if (h.test(title)) { const ch = chapters.find((x) => c.test(x.label)); if (ch) { start = ch.start; break; } }
    }
    return { title, score, html: marked.parse(text, { async: false }) as string, start };
  });
  return { intro: intro ? (marked.parse(intro, { async: false }) as string) : '', sections };
}

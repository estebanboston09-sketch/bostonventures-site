// BostonVentures AI chat. Answers ONLY from /chat-data.json (built from the site's own hotels, guides,
// tours and tools on every deploy). Switch to Claude by setting CHAT_PROVIDER to "claude" in wrangler.jsonc.

const SYSTEM = `You are the BostonVentures travel helper on bostonventurestravel.com, the site of Esteban, a hotel reviewer who lives in Cancún.
Rules:
- Answer ONLY with facts from the SITE INFO below. If the answer is not there, say you don't have that on the site yet and suggest checking the official source. Never invent prices, scores, restaurants or facts.
- Only Esteban's reviewed hotels have his scores. For others, say he has not reviewed them yet.
- Keep answers short: 2–5 sentences or a short list. Friendly, plain English (reply in Spanish if the user writes in Spanish).
- When useful, link the relevant page as a relative link in markdown, like [Barceló Maya](/hotels/barcelo-maya).
- For airport transfers you may recommend Esteban's partner when relevant, and say it is an affiliate link.
- Only talk about travel to Cancún, the Riviera Maya and Mexico. Politely decline anything else.
- No medical, legal or visa advice beyond what the site says; point to official sources.`;

const STOP = new Set('the a an and or of to in on for is are was it i my me we you what which how do does can with at be from this that best good near hotel hotels cancun cancún any there about should'.split(' '));
const words = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z0-9]+/g)?.filter((w) => w.length > 2 && !STOP.has(w)) ?? [];

let cache = null;
async function getChunks(env, url) {
  if (cache) return cache;
  const r = await env.ASSETS.fetch(new URL('/chat-data.json', url));
  cache = await r.json();
  return cache;
}

function pick(chunks, query) {
  const q = words(query);
  const scored = chunks.map((c) => {
    const t = words(c.title), body = c.text.toLowerCase();
    let s = 0;
    for (const w of q) { if (t.includes(w)) s += 5; if (body.includes(w)) s += 1; }
    return { c, s };
  }).sort((a, b) => b.s - a.s);
  const top = scored.filter((x) => x.s > 0).slice(0, 5).map((x) => x.c);
  return top.length ? top : chunks.filter((c) => /recommended partners|Best time|Fair prices/.test(c.title));
}

const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

async function askCloudflare(env, messages) {
  const out = await env.AI.run(env.CF_MODEL, { messages, max_tokens: 700, temperature: 0.3, chat_template_kwargs: { enable_thinking: false }, reasoning_effort: 'none' });
  const r = out?.response;
  if (typeof r === 'string' && r.trim()) return r;
  if (r && typeof r === 'object') return JSON.stringify(r);
  const c = out?.choices?.[0]?.message?.content;
  if (typeof c === 'string') return c;
  if (Array.isArray(c)) return c.map((p) => p.text ?? '').join('');
  return out?.output_text ?? out?.result?.response ?? '';
}

async function askClaude(env, system, messages) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: env.CLAUDE_MODEL, max_tokens: 450, temperature: 0.3, system, messages }),
  });
  if (!r.ok) throw new Error('claude ' + r.status);
  const d = await r.json();
  return d.content?.map((b) => b.text ?? '').join('') ?? '';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/chat') return env.ASSETS.fetch(request);
    if (request.method === 'GET') return json({ ok: true, provider: env.CHAT_PROVIDER });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
    const origin = request.headers.get('origin') || '';
    if (origin && !/bostonventurestravel\.com$|workers\.dev$|localhost/.test(new URL(origin).hostname)) return json({ error: 'Forbidden' }, 403);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }
    const history = (Array.isArray(body.messages) ? body.messages : [])
      .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-6).map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
    if (!history.length || history[history.length - 1].role !== 'user') return json({ error: 'Bad request' }, 400);

    const userText = history.filter((m) => m.role === 'user').slice(-2).map((m) => m.content).join(' ');
    const chunks = pick(await getChunks(env, request.url), userText);
    const info = chunks.map((c) => `### ${c.title} (page: ${c.url})\n${c.text.slice(0, 2500)}`).join('\n\n');
    const system = `${SYSTEM}\n\nSITE INFO:\n${info}`;

    try {
      const useClaude = env.CHAT_PROVIDER === 'claude' && env.ANTHROPIC_API_KEY;
      const answer = useClaude ? await askClaude(env, system, history) : await askCloudflare(env, [{ role: 'system', content: system }, ...history]);
      return json({ answer: answer.trim() || "Sorry, I couldn't answer that one. Try asking another way.", sources: chunks.slice(0, 3).map((c) => ({ title: c.title, url: c.url })) });
    } catch (e) {
      console.log('chat error', String(e));
      return json({ busy: true, answer: "The chat is busy right now (it's free and has a daily limit). Please try again later, or browse the hotel reviews and tools." }, 200);
    }
  },
};

# BostonVentures SEO plan: one new guide per night

Site: https://bostonventurestravel.com. It is a guide in **English** for American and Canadian tourists (mostly aged 35–54), written in Esteban's voice as a local in Cancún.

The nightly scheduled task writes **one guide per night**. Each guide goes to its own branch, and Esteban approves it before it goes live. Pushing to `main` publishes the live site, so never push a guide straight to `main`.

## Method (follow every time)

1. **Pick tonight's guide.** Use the first row of the list below whose file `src/content/guides/<slug>.md` does not exist on `main` yet.
   - If a branch `guia/<slug>` for an earlier guide exists and was never merged, do **not** start a new one. Remind Esteban that the draft is still waiting for his OK, and send its screenshot again.
2. **Research.**
   - Use WebSearch for the target search, and read what the top results cover.
   - Open (WebFetch) every source a number, price, rule or date comes from. Prefer official sources: government, the airport, the operator's own website.
   - **Never invent** prices, laws, statistics, schedules or hotel facts. If you can't confirm something, leave it out or say "check before you go".
3. **Use Esteban's own material first.**
   - Read the hotel files in `src/content/hotels/` and the tours in `src/data/tours.ts`.
   - Quote or summarize his real verdicts and scores where they fit, and link those pages. They are the site's edge over other travel sites.
   - Never make up a personal experience he didn't have. "I" statements must come from his reviews and videos.
4. **Write `src/content/guides/<slug>.md`** using the frontmatter schema in `src/content.config.ts`:
   - **`title`:** leads with the search phrase. Plain and specific, with no clickbait.
   - **`shortAnswer`:** 2–3 sentences that fully answer the search. A reader who stops here should have the answer.
   - **Body:** 700–1,300 words. Use `##` sections a reader can scan (each becomes a jump link). Use short paragraphs, real numbers with "as of <month year>", and practical local tips.
   - **`faqs`:** 3–5 real questions people ask (check Google's "People also ask").
   - **Links:** `relatedHotels` and `relatedTours` take the slugs of existing pages only. Inside the text, link to at least 2 other pages on the site.
   - **`affiliates`:** add `transfers` and/or `esim` only where they genuinely help the reader (airport, getting around, arriving).
   - **`sources`:** every page you opened that a fact came from.
   - **`updated`:** the current month, e.g. `2026-11`.
5. **Build and check.**
   - Run `npm run build`; it must pass. The schema rejects missing fields.
   - Serve `dist/` and check the page with Playwright at 390 px and 1280 px wide: no sideways scrolling, and the short answer and FAQs show.
6. **Commit on a new branch `guia/<slug>`** and push only that branch.

## Quality checklist (all must be true before sending to Esteban)
- [ ] It answers the search better than the current top result, in fewer words.
- [ ] Every number, price or rule has a source in `sources` that was actually opened.
- [ ] Nothing is copied or closely paraphrased from another site. Guides never quote or summarize TripAdvisor or Google reviews (hotel pages have their own labelled "What other travelers say" box, see below).
- [ ] It sounds like Esteban: first person, direct, honest, no hype words ("stunning", "paradise", "hidden gem").
- [ ] It links to at least 2 existing pages (hotels, tours, tools or guides).
- [ ] No photos from other websites.
- [ ] It is not a near-copy of an existing guide. Each guide answers a different question.

## Guide list (in order)

| # | Slug | Target search | Category |
|---|------|---------------|----------|
| 1 | cancun-airport-to-hotel-zone | how to get from cancun airport to hotel zone | arrival |
| 2 | best-esim-for-mexico | best esim for mexico travel | arrival |
| 3 | is-cancun-safe | is cancun safe | safety |
| 4 | hotel-zone-vs-downtown-cancun | hotel zone vs downtown cancun | areas |
| 5 | cancun-sargassum-season | cancun sargassum season | seasons |
| 6 | cancun-vs-playa-del-carmen-vs-tulum | cancun vs playa del carmen vs tulum | areas |
| 7 | cheapest-all-inclusive-cancun | cheapest all inclusive cancun | hotels |
| 8 | best-all-inclusive-cancun-for-families | best all inclusive cancun for families | hotels |
| 9 | best-adults-only-all-inclusive-cancun | best adults only all inclusive cancun | hotels |
| 10 | pesos-or-dollars-in-cancun | should i use pesos or dollars in cancun | money |
| 11 | tipping-in-cancun | how much to tip in cancun | money |
| 12 | best-time-to-visit-cancun | best time to visit cancun | seasons |
| 13 | cancun-hurricane-season | cancun hurricane season | seasons |
| 14 | chichen-itza-from-cancun | chichen itza from cancun | day-trips |
| 15 | isla-mujeres-from-cancun | isla mujeres day trip from cancun | day-trips |
| 16 | xcaret-vs-xel-ha-vs-xplor | xcaret vs xel ha vs xplor | day-trips |
| 17 | cenotes-near-cancun | best cenotes near cancun | day-trips |
| 18 | whale-shark-season-cancun | whale shark season cancun | seasons |
| 19 | cancun-tourist-tax-visitax | cancun tourist tax visitax | arrival |
| 20 | uber-and-taxis-in-cancun | is there uber in cancun | arrival |
| 21 | can-you-drink-the-water-in-cancun | can you drink the water in cancun | safety |
| 22 | cancun-airport-timeshare-scam | cancun airport timeshare scam | safety |
| 23 | renting-a-car-in-cancun | renting a car in cancun | planning |
| 24 | what-to-pack-for-cancun | what to pack for cancun | planning |
| 25 | cancun-with-kids | cancun with kids | planning |
| 26 | local-food-to-try-in-cancun | local food to try in cancun | food |
| 27 | cancun-nightlife | cancun nightlife guide | planning |
| 28 | holbox-from-cancun | holbox from cancun | day-trips |
| 29 | cozumel-from-cancun | cozumel day trip from cancun | day-trips |
| 30 | cancun-weather-by-month | cancun weather by month | seasons |

When the list runs out, pick the next question tourists search that no guide answers yet. Check Google's "People also ask" and autocomplete for "cancun …", and add the row here in the same commit.

## After Esteban approves
Merge `guia/<slug>` into `main` and push. The site deploys automatically and the sitemap updates itself. Then send him the live link, `https://bostonventurestravel.com/guides/<slug>`, and remind him to request indexing in Google Search Console (URL inspection → **Request indexing**).


## Nightly hotel batch (20 hotels per night, goal: every hotel in Cancún and the Riviera Maya)

Esteban wants every major Cancún / Riviera Maya hotel on the site. Each night, **in addition to the guide**, add the next 20 hotels from the list below (rows marked ⭐ first: those are hotels visitors searched for and didn't find) that are not marked ✅ (and whose file does not exist on `main`). Mark each one you add with ✅ and its slug in the same commit.

**When fewer than 20 hotels are left on the list, extend the list first** (commit the new rows in the same branch): add the next most-reviewed hotels on TripAdvisor's Cancún, Costa Mujeres, Puerto Morelos, Playa del Carmen, Riviera Maya, Tulum, Isla Mujeres and Cozumel hotel lists that are not on the site yet. Order: big resorts and all-inclusives first, then boutique hotels, then downtown/budget hotels. Keep going until every hotel with a real following is covered.

1. **Facts** (official hotel website first, then big booking sites only to cross-check): name, brand, area (schema enum), all-inclusive, adults-only, rooms, restaurants, minutes from CUN airport, `highlights`, `goodToKnow`, approximate `location` pin, `officialUrl`, `sources`, `factsChecked`. If two sources disagree on a number, leave the number out.
2. **`about`:** 2–3 sentences in our own words. Never copy the hotel's marketing text.
3. **`amenities`:** 4–7 short chips. **`dining`:** restaurants/bars with cuisine (official site). **`practical`:** check-in/out, minimum age, pools, dress code, fees, shuttle, pets, anything a traveler must know. **`officialUrl`:** the hotel's site (powers the "official photos" button). Match the detail of the existing pages, e.g. jw-marriott-cancun.md.
4. **`travelers`:** read what public reviews say (TripAdvisor, Expedia, Oyster, Booking.com pages that actually open or appear in search). Write `summary`, 3–5 `praise` and 3–4 `complaints` **in our own words**. Never quote a review, never copy star ratings or scores, never invent a theme you didn't read. `links` = the real review page URL you found. `basedOn` = which sites + month.
5. **Photos (every hotel needs its OWN photo; never reuse another hotel's photo):** Esteban works with Booking.com and approved using hotel photos (Nov 2026). Use the hotel's **official website**: WebFetch its `officialUrl` and ask for absolute image URLs whose filename/alt shows the exterior, aerial view, pool or beach (not rooms, food, logos). Put 1–3 of them in `photos` as `{"src": "<url>", "alt": "<Hotel>: official photo", "credit": "Photo: <Hotel>", "creditUrl": "<officialUrl>"}`, best exterior/aerial first. Never use guest photos from TripAdvisor or Google reviews. Only if the official site gives no usable URL, fall back to a free Pexels/Unsplash photo of that exact hotel, or a labelled area photo (`area: true`) that no other hotel uses yet.
6. **`extras`** (see `src/content.config.ts`), from the official site first and big booking sites to cross-check, one short fact per line, never guessed:
   - `rooms`: room types, sizes, swim-up rooms, family or connecting rooms.
   - `kids`: kids' club ages, teen club, babysitting, water park.
   - `diningRules`: reservations, dress codes, which restaurants cost extra.
   - `extraCosts`: resort fees, cabanas, premium drinks, shuttle, spa.
   - `awards`: Forbes, AAA, MICHELIN, Travelers' Choice, with the year.
   - `dayPass`: whether outsiders can buy one, and the price with the month checked.
   - `accessibility`: accessible rooms, elevators, stairs to the beach.
   - `warnings`: timeshare pitches, renovations, shared beach, no service animals.
   - `pools`: how many, adults-only pool, swim-up, heated, lazy river, kids' splash area.
   - `activities`: what's included: shows, classes, kayaks, snorkel gear, gym, tennis/pickleball.
   - `spa`: hydrotherapy free or paid, age limits, rough treatment prices (with month).
   - `wifi`: free or paid, rooms or lobby only, listed speed, what guests say.
   - `built`: "Opened 1998, renovated 2024" (only if a source says so).
   - From public reviews, **in our own words, never quoted**: `beachReality` (swimmable? red flags? seaweed? lounger rush?), `walkable` (what's within a short walk), `bestRooms` and `avoidRooms` (rooms/buildings/floors guests recommend or warn about).
   - **`ratings`** (top-level, not inside extras): the public rating you actually read, e.g. `{"site":"TripAdvisor","score":4.7,"outOf":5,"count":15184,"rank":"#9 of 252 hotels in Cancún","url":"…","checked":"Nov 2026"}`, plus Expedia (x/10), Booking.com (`{"site":"Booking.com","outOf":10,…}`, url `https://www.booking.com/hotel/mx/<slug>.html`) and Google (`{"site":"Google","outOf":5,…}`, url `https://www.google.com/maps/search/?api=1&query=<hotel name>`). TripAdvisor (`/Hotel_Review-d…`) and Expedia (`…Hotel-Information`) pages open with WebFetch. Booking.com and Google usually don't open from the cloud: if a browser tool is available use it; otherwise skip them and list those hotels under "Need Booking/Google ratings" in the summary so they can be added from a browser later. Only current numbers you read on the live page — never old search-snippet numbers — and skip a site with under 50 reviews. The compare page and hotel page average every rating (each turned into /10) into the Guest score, so a wrong number shows up everywhere.
   - `dining` items can have a `note`: buffet / à la carte / reservations needed / extra cost.
   - Check that every review/booking URL is for this exact hotel (names like Royalton CHIC vs Royalton Suites get mixed up).
   Leave out anything you can't confirm, and add each page you used to `sources`. Beach type, seaweed, distances, transfer price and the FAQ are worked out automatically from `location` and `area`, so every hotel needs an accurate `location` pin.
7. **Backfill:** each night, also fill the missing `extras` fields above (including the new ones: pools, activities, spa, wifi, beachReality, walkable, bestRooms, avoidRooms, built) and `ratings` for the next 10 hotels already on the site that don't have them yet, reviewed hotels included (never touch Esteban's `review` scores or text). Put them on the same `hoteles/<YYYY-MM-DD>` branch.
8. Every new hotel has `needsReview: true`. `bestFor` only from facts (adults-only → adults-only, kids club → families, etc.).
9. Build must pass. Commit them all on one branch `hoteles/<YYYY-MM-DD>` and push only that branch. In the nightly message, list the new hotel names and say: "Reply OK hotels to publish them."
10. On "OK hotels": set `needsReview: false` on that batch's hotels (Esteban's approval is the review; this makes them visible to Google and the AI chat), then merge into main and push.

### Hotel list (in order)
| # | Hotel | Area | Status |
|---|---|---|---|
| 1 | Le Blanc Spa Resort Cancún | hotel-zone | ✅ added as `le-blanc-spa-resort-cancun` |
| 2 | Hyatt Zilara Cancún | hotel-zone | ✅ added as `hyatt-zilara-cancun` |
| 3 | Iberostar Selection Cancún | hotel-zone | ✅ added as `iberostar-selection-cancun` |
| 4 | Nizuc Resort & Spa | hotel-zone | ✅ added as `nizuc-resort-and-spa` |
| 5 | Kempinski Hotel Cancún | hotel-zone | ✅ added as `kempinski-hotel-cancun` |
| 6 | Marriott Cancún All-Inclusive | hotel-zone | ✅ added as `marriott-cancun-all-inclusive` |
| 7 | Riu Palace Peninsula | hotel-zone | ✅ added as `riu-palace-peninsula` |
| 8 | Riu Palace Kukulkan | hotel-zone | ✅ added as `riu-palace-kukulkan` |
| 9 | Riu Cancún | hotel-zone | ✅ added as `riu-cancun` |
| 10 | Royalton Chic Cancún | hotel-zone | ✅ added as `royalton-chic-cancun` |
| 11 | Royalton Suites Cancún | hotel-zone | ✅ duplicate: same property as `royalton-chic-cancun` (renamed 2020) |
| 12 | Paradisus Cancún | hotel-zone | ✅ added as `paradisus-cancun` |
| 13 | Breathless Cancún Soul (now Amàre Cancún) | hotel-zone | ✅ added as `amare-cancun` |
| 14 | Dreams Natura Resort & Spa | puerto-morelos | ✅ added as `dreams-natura-resort-and-spa` |
| 15 | Finest Playa Mujeres | costa-mujeres | ✅ added as `finest-playa-mujeres` |
| 16 | Excellence Playa Mujeres | costa-mujeres | ✅ added as `excellence-playa-mujeres` |
| 17 | Atelier Playa Mujeres | costa-mujeres | ✅ added as `atelier-playa-mujeres` |
| 18 | Majestic Elegance Costa Mujeres | costa-mujeres | ✅ added as `majestic-elegance-costa-mujeres` |
| 19 | Grand Palladium Costa Mujeres | costa-mujeres | ✅ added as `grand-palladium-costa-mujeres` |
| 20 | TRS Coral Hotel | costa-mujeres | ✅ added as `trs-coral-hotel` |
| 21 | Sun Palace | hotel-zone | ✅ added as `sun-palace` |
| 22 | Beach Palace | hotel-zone |
| 23 | Grand Velas Riviera Maya | riviera-maya |
| 24 | Secrets Maroma Beach | riviera-maya |
| 25 | Iberostar Grand Paraíso | riviera-maya |
| 26 | Valentin Imperial Riviera Maya | riviera-maya |
| 27 | The Fives Beach Hotel | playa-del-carmen |
| 28 | Hard Rock Hotel Riviera Maya | riviera-maya |
| 29 | Bahia Principe Grand Tulum | tulum |

## Nightly seaweed map refresh

1. Search the news for the latest SEMA Quintana Roo "Semáforo del Sargazo" (zona norte y sur). Use only reports that name beaches and levels.
2. If it is newer than `REPORT.date` in `src/data/sargassum.ts`, update `REPORT` (date and counts) and each beach's `level`. Never guess a level; keep the old one if a beach is not named, and do not add pins without a known location.
3. Commit it on the same `hoteles/<YYYY-MM-DD>` branch as the hotel batch (never straight to `main`), and mention the new report date in the nightly message so Esteban approves it with "OK hotels".

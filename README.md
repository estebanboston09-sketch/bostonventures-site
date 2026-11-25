# BostonVentures website

Honest Cancún & Riviera Maya travel guide. Astro static site, deployed on Cloudflare Pages (push to `main` = live).

## Add or edit a hotel
One file per hotel in `src/content/hotels/<slug>.md`. The file name is the page address (`/hotels/<slug>`).
- Set `needsReview: false` once you've checked the basic facts — the page then shows in Google and the sitemap.
- Add a `review:` block only after a real stay. Scores are out of 10 in steps of 0.5. Never estimate scores.
- Text written below the `---` lines appears on the page (local tips, what to know).

## Add or edit a tour
`src/data/tours.ts`. Tours power the Tours pages, the Tour Finder and the Trip Planner.

## Affiliate links
`src/lib/site.ts`. Hotel booking and tour affiliates are `null` until approved.

## Run locally
`npm install`, then `npm run dev`.

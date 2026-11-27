import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const score = z.number().min(0).max(10).multipleOf(0.5);

// One Markdown file per hotel in src/content/hotels/.
// A missing required field stops the build, so a half-filled hotel can't go live by accident.
const hotels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hotels' }),
  schema: z.object({
    name: z.string(),
    brand: z.string().optional(),
    area: z.enum(['hotel-zone', 'downtown', 'costa-mujeres', 'south-cancun', 'puerto-morelos', 'playa-del-carmen', 'tulum', 'isla-mujeres', 'riviera-maya', 'other']),
    address: z.string().optional(),
    allInclusive: z.boolean(),
    adultsOnly: z.boolean(),
    rooms: z.number().optional(),
    // 1 = budget, 2 = mid-range, 3 = premium, 4 = luxury. A rough level, not a price.
    priceLevel: z.number().int().min(1).max(4).optional(),
    priceRangeUSD: z.object({ low: z.number(), high: z.number() }).optional(),
    airportMinutes: z.number().optional(),
    restaurants: z.number().optional(),
    beach: z.string().optional(),
    // Only Esteban's own photos/video frames, or photos with written permission. Files go in public/hotels/<slug>/.
    // credit/creditUrl/license: required for free-licensed photos (e.g. Wikimedia Commons) — shown under the photo.
    photos: z.array(z.object({ src: z.string(), alt: z.string(), credit: z.string().optional(), creditUrl: z.string().url().optional(), license: z.string().optional(), area: z.boolean().optional() /* true = photo of the area, not this hotel */ })).default([]),
    // Short description written in our own words from the hotel's official site (never copied text).
    about: z.string().optional(),
    amenities: z.array(z.string()).default([]),
    // Restaurants/bars from the hotel's official site.
    dining: z.array(z.object({ name: z.string(), type: z.string(), note: z.string().optional() /* buffet, reservations, extra cost… */ })).default([]),
    // Check-in, minimum age, Wi-Fi, fees, dress code… { label, value } from official sources.
    practical: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    // Summary in our own words of what travelers commonly mention in public reviews. No copied reviews, no star ratings.
    travelers: z.object({
      summary: z.string(),
      praise: z.array(z.string()).default([]),
      complaints: z.array(z.string()).default([]),
      basedOn: z.string(), // e.g. "TripAdvisor and Google reviews, read Nov 2026"
      links: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    }).optional(),
    // Extra checked details (official site first, big booking sites to cross-check). Each list item is one short fact.
    extras: z.object({
      rooms: z.array(z.string()).default([]),          // room types, sizes, swim-up, family/connecting rooms
      kids: z.array(z.string()).default([]),           // kids' club ages, teen club, babysitting, water park
      diningRules: z.array(z.string()).default([]),    // reservations, dress code, which restaurants cost extra
      extraCosts: z.array(z.string()).default([]),     // resort fees, cabanas, premium drinks, shuttle, spa
      awards: z.array(z.string()).default([]),         // Forbes, AAA, Michelin, Travelers' Choice (with year)
      dayPass: z.string().optional(),                  // whether outsiders can buy a day pass, and the price
      accessibility: z.array(z.string()).default([]),  // accessible rooms, elevators, stairs to the beach
      warnings: z.array(z.string()).default([]),       // timeshare pitches, renovations, shared beach…
      pools: z.array(z.string()).default([]),          // how many, adults-only pool, swim-up, heated, lazy river, kids splash
      activities: z.array(z.string()).default([]),     // what's included: shows, classes, kayaks, snorkel gear, gym, tennis
      spa: z.array(z.string()).default([]),            // hydrotherapy free or paid, age limits, rough treatment prices
      wifi: z.string().optional(),                      // free? rooms or lobby only? what guests say about speed
      beachReality: z.array(z.string()).default([]),   // swimmable? red flags often? lounger rush? (reviews + official)
      walkable: z.array(z.string()).default([]),       // what's within walking distance
      bestRooms: z.array(z.string()).default([]),      // rooms/buildings guests recommend (reviews, own words)
      avoidRooms: z.array(z.string()).default([]),     // rooms/buildings guests warn about (noise, no view…)
      built: z.string().optional(),                     // "Opened 1998, renovated 2024"
    }).optional(),
    // Public ratings shown with their source and date. Only numbers we actually read on the site.
    ratings: z.array(z.object({ site: z.string(), score: z.number(), outOf: z.number(), count: z.number().optional(), rank: z.string().optional(), url: z.string().url(), checked: z.string() })).default([]),
    highlights: z.array(z.string()).default([]),
    goodToKnow: z.array(z.string()).default([]),
    bestFor: z.array(z.enum(['families', 'couples', 'adults-only', 'party', 'budget', 'luxury', 'groups', 'honeymoon', 'theme-parks', 'quiet', 'nightlife', 'foodies'])),
    officialUrl: z.string().url().optional(),
    location: z.object({ lat: z.number(), lng: z.number() }).optional(), // approximate map pin
    sources: z.array(z.object({ url: z.string().url(), checked: z.string() })).default([]),
    factsChecked: z.string().optional(), // "2026-11" — month the facts were last checked
    // true = Esteban still needs to confirm these basic facts before launch
    needsReview: z.boolean().default(false),
    review: z
      .object({
        videoId: z.string().optional(),
        videoDate: z.string().optional(), // "2026-07" — when the video was published
        visited: z.string().optional(), // "2026-07"
        // Categories differ between videos, so scores are a list. Only scores Esteban actually gave.
        scores: z.array(z.object({ label: z.string(), value: score })).default([]),
      scoresAdded: z.string().optional(), // set when Esteban scored after the video
      overall: z.number().min(0).max(10).optional(), // set by hand; otherwise the average when 4+ categories are scored
        chapters: z.array(z.object({ label: z.string(), start: z.number() })).default([]),
        verdict: z.string().optional(),
        pros: z.array(z.string()).default([]),
        cons: z.array(z.string()).default([]),
        roomStayed: z.string().optional(),
        pricePaid: z.string().optional(),
        comped: z.boolean().default(false),
      })
      .optional(),
  }),
});

// One Markdown file per guide in src/content/guides/. Written by the nightly SEO run (see docs/seo-plan.md),
// published only after Esteban approves the branch.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),                 // H1, leads with the search phrase
    seoTitle: z.string().optional(),   // <title> if different from title
    description: z.string().max(170), // meta description
    targetSearch: z.string(),          // the Google search this page answers
    category: z.enum(['arrival', 'money', 'safety', 'areas', 'seasons', 'day-trips', 'food', 'hotels', 'planning']),
    emoji: z.string().default('🌴'),
    shortAnswer: z.string(),           // 2–3 sentence answer box at the top
    updated: z.string(),               // "2026-11"
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    relatedHotels: z.array(z.string()).default([]), // hotel slugs
    relatedTours: z.array(z.string()).default([]),  // tour slugs
    affiliates: z.array(z.enum(['transfers', 'esim'])).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).min(1),
  }),
});

export const collections = { hotels, guides };

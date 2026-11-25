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
    photos: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    highlights: z.array(z.string()).default([]),
    goodToKnow: z.array(z.string()).default([]),
    bestFor: z.array(z.enum(['families', 'couples', 'adults-only', 'party', 'budget', 'luxury', 'groups', 'honeymoon', 'theme-parks', 'quiet', 'nightlife', 'foodies'])),
    officialUrl: z.string().url().optional(),
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
        overall: z.number().min(0).max(10).optional(), // set by hand; otherwise the average when 4+ categories are scored
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

export const collections = { hotels };

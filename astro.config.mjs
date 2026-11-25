import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';

// Hotels still marked needsReview: true stay out of the sitemap (they are also noindex).
const drafts = fs.readdirSync('./src/content/hotels')
  .filter((f) => /needsReview:\s*true/.test(fs.readFileSync(`./src/content/hotels/${f}`, 'utf8')))
  .map((f) => `/hotels/${f.replace(/\.md$/, '')}`);

// Change `site` to the real domain once it's bought.
export default defineConfig({
  site: 'https://bostonventurestravel.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !drafts.some((d) => page.endsWith(d)) && !page.endsWith('/404') })],
  vite: { plugins: [tailwindcss()] },
});

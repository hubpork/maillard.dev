import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://www.maillard.dev',
  integrations: [
    sitemap(),
    mdx(),
    svelte(),
    tailwind()
  ],
  compressHTML: true,
  image: {
    experimentalLayout: 'constrained',
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  experimental: {
    responsiveImages: true
  }
});

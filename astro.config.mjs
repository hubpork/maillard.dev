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
    responsiveImages: true,
    fonts: [
      {
        name: "contentFont",
        cssVariable: "--contentFont",
        provider: "local",
        variants: [
          {
            src: [
              "./src/assets/fonts/quicksand-v30-latin-regular.woff2",
            ]
          }
        ]
      },
      {
        name: "logoFont",
        cssVariable: "--logoFont",
        provider: "local",
        variants: [
          {
            src: [
              "./src/assets/fonts/gasoek-one-v3-latin-regular.woff2",
            ]
          }
        ]
      },
      {
        name: "headingFont",
        cssVariable: "--headingFont",
        provider: "local",
        variants: [
          {
            src: [
              "./src/assets/fonts/playfair-display-v30-latin-800.woff2",
            ]
          }
        ]
      },
      {
        name: "leadFont",
        cssVariable: "--leadFont",
        provider: "local",
        variants: [
          {
            src: [
              "./src/assets/fonts/quicksand-v30-latin-600.woff2",
            ]
          }
        ]
      }
    ]
  }
});

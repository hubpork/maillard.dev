import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['de', 'en']),
    slug_de: z.string().optional(),
    slug_en: z.string().optional(),
    pubDate: z.string().transform((str) => new Date(str)),
    heroImage: z.string(),
    description: z.string(),
    linktext: z.string()
  })
});

export const collections = {
  blog: blogCollection
};

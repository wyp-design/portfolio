import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ base: './src/content/works', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    focus: z.array(z.string()),
    role: z.string(),
    client: z.string().optional(),
    status: z.string().default('Published'),
    cover: z.string(),
    preview: z.string().optional(),
    gallery: z
      .array(
        z.object({
          image: z.string(),
          caption: z.string()
        })
      )
      .default([]),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999)
  })
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    language: z.enum(['EN', 'CN']).default('EN'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { works, blog };

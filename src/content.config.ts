import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Content lives in /content (outside src) so Diogo can edit it without touching code.
// Files starting with "_" are templates and are not loaded.
const projects = defineCollection({
  loader: glob({ pattern: ['*.md', '!_*.md'], base: './content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    roleLabel: z.string(),
    tagline: z.string(),
    context: z.string().optional(),
    diogosPart: z.array(z.string()),
    stack: z.array(z.string()),
    badge: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.url(), description: z.string() }))
      .default([]),
    visual: z.enum(['adapters-diagram', 'sync-diagram', 'ffhs-terminal', 'image', 'none']).default('none'),
    image: z.string().optional(),
    award: z.string().optional(),
    caseStudy: z.string().optional(),
    timeline: z.object({ phases: z.array(z.string()), total: z.string() }).optional(),
  }),
});

export const collections = { projects };

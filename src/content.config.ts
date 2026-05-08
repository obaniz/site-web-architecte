import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Optionnel dans le schema Astro (le slug reel vient du nom de fichier),
    // mais Pages CMS ecrit ce champ dans le frontmatter : on l'accepte.
    slug: z.string().optional(),
    category: z.array(z.enum(['habitat', 'medical', 'petite-enfance', 'bureaux', 'commerces', 'erp'])).min(1).max(2),
    location: z.string(),
    description: z.string(),
    heroImage: z.string(),
    images: z.array(z.string()).optional(),
    order: z.number().default(0),
    listed: z.boolean().default(true),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
  }),
});

export const collections = { projects };

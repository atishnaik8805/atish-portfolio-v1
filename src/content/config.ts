import { defineCollection, reference, z } from 'astro:content';

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    startDate: z.date(),
    endDate: z.date().or(z.string()), // Allow "Present"
    achievements: z.array(z.string()),
    skills: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    techTags: z.array(z.string()),
    demoUrl: z.string().url(),
    sourceUrl: z.string().url().optional(),
    coverImage: z.string(), 
    relatedArticles: z.array(reference('blog')).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    lastUpdated: z.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
    coverImage: image().optional(),
    externalUrl: z.string().url().optional(),
    platform: z.enum(['Medium', 'LinkedIn', 'Dev.to']).optional(),
    relatedProject: reference('projects').optional(),
  }),
});

export const collections = {
  experience,
  projects,
  blog,
};

# Data Model: Developer Portfolio and Blog

All structured data is managed via **Astro Content Collections** using Zod for validation.

## 1. Work Experience (`experience` collection)
- **Format**: YAML
- **Schema**:
```typescript
import { defineCollection, z } from 'astro:content';

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
```

## 2. Project Showcase (`projects` collection)
- **Format**: YAML
- **Schema**:
```typescript
import { defineCollection, reference, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    techTags: z.array(z.string()),
    demoUrl: z.string().url(),
    sourceUrl: z.string().url().optional(),
    coverImage: image(), // Astro Image transformation
    relatedArticles: z.array(reference('blog')).optional(),
  }),
});
```

## 3. Blog Articles (`blog` collection)
- **Format**: Markdown (.md)
- **Schema**:
```typescript
import { defineCollection, reference, z } from 'astro:content';

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
```

## 4. Tech Stack (`config.ts` or local JSON)
- **Format**: JSON or TS Object
- **Schema**:
```typescript
export interface TechStackItem {
  category: 'Frontend' | 'Backend' | 'AI' | 'DevOps';
  name: string;
  iconSlug: string; // From Simple Icons
}
```

## Relationships
- **Project -> Blog**: 1:N (A project can have multiple related case studies/articles).
- **Blog -> Project**: N:1 (An article can refer back to a single primary project).

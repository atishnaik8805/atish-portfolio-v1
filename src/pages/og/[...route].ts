import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: await import.meta.glob('/src/content/blog/*.md', { eager: true }),
  getImageOptions: (path, page: any) => ({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    bgGradient: [[24, 24, 27], [39, 39, 42]],
    border: { color: [63, 63, 70], width: 20 },
    padding: 60,
  }),
});

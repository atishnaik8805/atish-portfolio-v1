# Atish Naik's Developer Portfolio & Blog

A modern, high-performance portfolio and blog built with Astro 4.x, Tailwind CSS, and React.

## Features

- 🎯 **MVP Portfolio**: Professional summary and social connections.
- 🏗️ **Work Experience**: Interactive timeline of career growth.
- 🍱 **Project Showcase**: Bento-style grid with featured and standard projects.
- ✍️ **Markdown Blog**: Technical deep-dives with automatic reading time calculation.
- 🌓 **Dark/Light Mode**: Seamless theme switching with system persistence.
- 🖼️ **Dynamic OG Images**: Automatic social share preview generation.
- ♿ **Accessibility**: Audited for WCAG 2.1 Level AA compliance.
- 🧪 **Test Suite**: Comprehensive E2E (Playwright) and Unit (Vitest) coverage.

## Tech Stack

- **Framework**: [Astro 4.x](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev) & [Simple Icons](https://simpleicons.org)
- **Validation**: [Zod](https://zod.dev)
- **Content Management**: Astro Content Collections (Markdown/YAML)
- **Testing**: [Playwright](https://playwright.dev) & [Vitest](https://vitest.dev)
- **Analytics**: Vercel Analytics (configured for deployment)

## Getting Started

### Prerequisites

- Node.js v18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e
```

## Project Structure

- `src/content/`: YAML/Markdown source files for experience, projects, and blog.
- `src/components/`: Modular Astro and React components.
- `src/layouts/`: Base layout and SEO configurations.
- `src/pages/`: File-based routing for index, blog hub, and individual posts.
- `tests/`: Playwright E2E test suites.

## Accessibility

The project has been audited for accessibility using `@axe-core/playwright` and meets WCAG 2.1 Level AA standards.

## Deployment

Optimized for deployment on [Vercel](https://vercel.com) with automatic static site generation (SSG).

# Implementation Plan: Developer Portfolio and Blog

**Branch**: `001-portfolio-blog` | **Date**: 2026-03-29 | **Spec**: [specs/001-portfolio-blog/spec.md](spec.md)
**Input**: Feature specification from `/specs/001-portfolio-blog/spec.md`

## Summary

Build a high-performance developer portfolio and blog for Atish Naik using **Astro** and **Tailwind CSS**. The site features a bento-style project grid, a chronological work experience timeline, and a Markdown-powered blog with tag-based filtering. All structured data will be managed via **Astro Content Collections** with Zod validation to ensure type safety and performance. Deployment will be on **Vercel** utilizing its native analytics and free-tier features.

## Technical Context

**Language/Version**: TypeScript 5.x  
**Primary Dependencies**: Astro 4.x, Tailwind CSS 3.x, Zod, Lucide React, Simple Icons, Satori (for OG images)  
**Storage**: Git-based (Astro Content Collections: YAML and Markdown)  
**Testing**: Playwright (E2E), Vitest (Unit)  
**Target Platform**: Web (Vercel)
**Project Type**: Static Site (SSG)  
**Performance Goals**: Lighthouse 99-100, <1s load time on mobile  
**Constraints**: WCAG AA compliance, English-only, System fonts only, No runtime DB  
**Scale/Scope**: 3-5 Projects, 4-6 Experience entries, Blog with tag filtering

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Performance First**: Using Astro (SSG) + Tailwind CSS + System Fonts.
- [x] **Zero-Cost Infrastructure**: Vercel Free Tier + Git-based content.
- [x] **Spec-Driven Development**: `spec.md` and `plan.md` completed.
- [x] **Code over Comments**: Strict TypeScript with Zod schemas.
- [x] **Framework Alignment**: Astro (preferred for zero-JS blog performance).
- [x] **Content Collections**: Used for all structured data.
- [x] **Forbidden Patterns**: No heavy libraries, no runtime DBs, no inline styles.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-blog/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (to be created)
```

### Source Code (repository root)

```text
src/
├── content/             # Astro Content Collections
│   ├── blog/            # Markdown articles
│   ├── experience/      # YAML work history
│   ├── projects/        # YAML project data
│   └── config.ts        # Zod schemas
├── components/          # Reusable UI components
│   ├── UI/              # Primitive components (Button, Card)
│   ├── Hero/            # Hero section components
│   ├── Blog/            # Blog-specific components
│   └── SEO/             # Meta and OG image components
├── layouts/             # Page layouts
├── pages/               # Astro routes (/, /blog, /blog/[slug])
├── styles/              # Global styles (Tailwind directives)
├── utils/               # Helper functions (date formatting, etc.)
└── config.ts            # Global project config (social handles, etc.)

public/
├── fonts/               # (Optional) if system fonts are bundled
├── images/              # Static assets not co-located with content
└── resume.pdf           # Professional CV
```

**Structure Decision**: Single Astro project structure focusing on Content Collections for data management and Islands Architecture for minimal client-side JS (theme toggle and blog filtering).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

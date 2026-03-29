# Research: Developer Portfolio and Blog

## Technical Decisions

### 1. Dynamic OG Image Generation
- **Decision**: Use `astro-og-canvas`.
- **Rationale**: It provides a high-level wrapper for generating consistent, high-quality OG images from titles and descriptions without the boilerplate of Satori. Given the requirement for a professional and performant site, this fits perfectly with minimal overhead.
- **Alternatives Considered**: 
    - `satori`: Rejected for this MVP as it requires more manual font management and CSS-to-SVG-to-PNG conversion logic. If complex branding is needed later, we can migrate.

### 2. Tag-Based Filtering Interaction
- **Decision**: "Island Strategy" with Nano Stores and View Transitions.
- **Rationale**: Keeps the core list as static HTML for SEO and speed. Use a small interactive island for the filter chips. View Transitions API (native in Astro 6) will handle the smooth layout shifts when filtering.
- **Alternatives Considered**: 
    - Full React/SPA filtering: Rejected as it goes against "Zero-JS by default" principle.
    - SSR-only filtering: Rejected as it's not "instant" enough for the 2026 UX standard.

### 3. Content Relationships
- **Decision**: Astro `reference()` in Zod schema.
- **Rationale**: Provides native type safety and build-time validation for links between Projects and Articles.
- **Implementation**: 
    - `projects` collection will reference `blog` entries via an array of IDs.
    - `blog` collection will reference a `projects` entry (optional).

### 4. Image Optimization
- **Decision**: `astro:assets` with co-located media.
- **Rationale**: Simplifies management by keeping images next to their content files. Astro handles the conversion to WebP/AVIF and resizing automatically.

### 5. Analytics
- **Decision**: Vercel Analytics (Native).
- **Rationale**: Zero-config, privacy-focused, and integrated directly into the Vercel dashboard.

## Needs Clarification (Resolved)

| Unknown | Finding |
|---------|---------|
| Dynamic OG Image | Use `astro-og-canvas` for speed/simplicity. |
| Tag Filtering | Nano Stores + View Transitions for "app-like" feel. |
| Content Relationships | Use Astro's `reference()` function in `config.ts`. |
| Tech Stack Icons | Simple Icons (local SVGs) as per spec. |

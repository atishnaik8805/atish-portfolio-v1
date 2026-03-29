# Project Constitution: Professional Developer Portfolio

## I. Core Principles
*   **Performance First:** The site must achieve 90+ scores on Google Lighthouse for Performance, SEO, and Accessibility.
*   **Zero-Cost Infrastructure:** All hosting, databases, and services must operate within the free tiers of Vercel, Cloudflare, or GitHub.
*   **Spec-Driven Development:** No implementation should occur without a verified `spec.md` and `plan.md`.
*   **Code over Comments:** Prioritize clean, self-documenting code with TypeScript.

## II. Technology Stack
*   **Framework:** Astro (preferred for zero-JS blog performance) or Next.js (App Router).
*   **Styling:** Tailwind CSS (utility-first, no external CSS files).
*   **Content:** Markdown or MDX for blog posts and project descriptions (no external DB for content).
*   **Deployment:** Vercel or Cloudflare Pages (Git-based CI/CD).
*   **Components:** Accessible, reusable components using Shadcn/ui or primitive HTML/CSS.

## III. Architectural Patterns
*   **Islands Architecture:** (If using Astro) Use React/Vue components only where interactivity is required.
*   **Content Collections:** Use strictly typed schemas for Blogs and Projects.
*   **Social Integration:** 
    *   Centralized `config.ts` for social handles (GitHub, LinkedIn, Twitter/X).
    *   Use SVG icons (Simple Icons/Lucide) for all external links.
*   **Metadata:** Global SEO component to handle Open Graph tags and meta descriptions for every page.

## IV. Social & Identity Requirements
*   **Name:** Atish Naik
*   **Experience Level:** 8+ Years (Senior Software Developer).
*   **Primary Links:**
    *   GitHub: Must link to active repos.
    *   LinkedIn: Professional profile link.
    *   Twitter/X: Tech-focused handle.
*   **Visuals:** Minimalist, dark-mode-first aesthetic.

## V. Forbidden Patterns
*   **No Heavy Libraries:** Do not use heavy UI frameworks (e.g., Bootstrap, Material UI).
*   **No Runtime DBs:** Avoid using a database for blog content; keep it in Git.
*   **No Inline Styles:** Use Tailwind classes exclusively.
*   **No "Vibe Coding":** The AI must not suggest features or libraries not explicitly defined in this constitution without approval.

## VI. Testing & Quality
*   **Responsive Design:** Mobile-first approach is mandatory.
*   **Accessibility:** Must adhere to WCAG AA standards.
*   **Validation:** All TypeScript types must be strictly defined (no `any`).
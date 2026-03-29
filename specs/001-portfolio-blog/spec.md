# Feature Specification: Developer Portfolio and Blog

**Feature Branch**: `001-portfolio-blog`  
**Created**: 2026-03-29  
**Status**: Draft  
**Input**: User description: "for @.context\explainer.md use this file as the description of what we have to achieve"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Portfolio Identity & Core Connections (Priority: P1)

As a recruiter or collaborator, I want to see Atish Naik's professional summary, access his social profiles (GitHub, LinkedIn, Twitter/X), and download his resume so that I can understand his expertise and connect with him immediately.

**Why this priority**: This is the core purpose of the portfolio—identity, connectivity, and professional evidence.

**Independent Test**: Verify the Hero section displays the correct title, all social links are functional, and the resume download link points to a valid file.

**Acceptance Scenarios**:

1. **Given** the portfolio home page, **When** it loads, **Then** I see the title "Senior Software Developer | AI Enthusiast" and Atish's name clearly displayed.
2. **Given** the social link matrix, **When** I click a social icon, **Then** I am taken to the corresponding verified profile in a new tab.
3. **Given** the navigation or hero section, **When** I click the "Resume" link, **Then** I am prompted to download or view a PDF version of Atish's CV.

---

### User Story 2 - Proof of Expertise: Projects & Experience (Priority: P1)

As a potential employer, I want to browse a bento-style grid of projects and a chronological timeline of work experience so that I can verify Atish's 8+ years of technical skills and past achievements.

**Why this priority**: Essential for demonstrating professional value and technical depth.

**Independent Test**: Verify the "Work Experience" and "Project Showcase" sections are populated with data. Project cards must have a primary "Live Demo" action and a secondary "Source" link (no internal detail pages).

**Acceptance Scenarios**:

1. **Given** a project card, **When** I click the primary action or card body, **Then** I am taken directly to the external live demo.
2. **Given** a project card, **When** I click the "Source" link or GitHub icon, **Then** I am taken to the source repository.
3. **Given** the Work Experience section, **When** I scroll through the timeline, **Then** I see roles, dates, and key accomplishments in chronological order.

---

### User Story 3 - Technical Deep Dive: Markdown Blog (Priority: P2)

As a reader or fellow developer, I want to read technical articles hosted on a dedicated blog section so that I can learn from Atish's insights and experience.

**Why this priority**: Builds authority and improves SEO, but the site's primary function (portfolio) remains viable without it in the absolute first MVP slice.

**Independent Test**: Adding a Markdown file to the content directory should automatically generate a new blog post with a reading time estimate and SEO-friendly URL accessible via a dedicated `/blog` route.

**Acceptance Scenarios**:

1. **Given** the Blog Hub (`/blog`), **When** I click an article title, **Then** I am navigated to a standalone article page where the full Markdown content renders correctly.
2. **Given** any page, **When** I look at the navigation bar, **Then** I see links for "Home" and "Blog".

---

### User Story 4 - Seamless Visual Experience & Performance (Priority: P3)

As a user, I want the site to load instantly and adapt to my system's dark/light mode preference so that I have a modern and comfortable browsing experience.

**Why this priority**: Enhances the professional impression but doesn't change the content's core value.

**Independent Test**: Measure page load speed and toggle between themes to ensure visual consistency and system preference detection.

**Acceptance Scenarios**:

1. **Given** the site on any device, **When** it loads, **Then** it feels "instant" and achieves a high Lighthouse score (target 99+).
2. **Given** the theme toggle, **When** I switch from Light to Dark mode, **Then** the entire UI updates smoothly without page reloads.

### Edge Cases

- **Mobile Responsiveness**: Layout elements (like the bento grid) must stack gracefully on small screens without overlapping or breaking.
- **Broken Social Links**: Manual verification of all external URLs (socials/demos) must be performed before production deployment.
- **Empty Blog State**: If no Markdown files exist, the Blog Hub should show a clean "Coming Soon" or empty state rather than a broken layout.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Hero section MUST display name, title, and a high-impact professional introduction (Short paragraph: 2-3 sentences, ~40-60 words).
- **FR-013**: System MUST use a multi-page navigation structure with dedicated routes for Home (`/`), Blog Hub (`/blog`), and Article pages (`/blog/[slug]`).
- **FR-002**: Work Experience section MUST provide a chronological view of professional roles (Target: 4-6 entries).
- **FR-003**: Project Showcase MUST use a bento-grid layout on the Home Page with a clear hierarchy: one large "Featured Project" card and 2-3 standard-sized cards (Total: 3-5 projects). Additional projects should wrap into a new row of standard cards. Primary action leads to the Live Demo; secondary action leads to the Source code.
- **FR-004**: Social Link Matrix MUST include functional, verified links to GitHub, LinkedIn, and Twitter/X, displayed as a clean Iconic Grid (uniform social icons) in the Hero and Footer.
- **FR-008**: System will NOT include a contact form; email (via `mailto:`) and social links are the primary communication channels, displayed in the Hero and Footer.
- FR-005: System MUST manage all structured data (Projects, Experience, Articles) using **Astro Content Collections** with **YAML** data files and Zod schema validation.
- **FR-006**: System MUST support a Dark/Light mode toggle with automatic system preference detection, LocalStorage persistence, and a **smooth CSS transition (200-300ms)** for theme-related colors.
- **FR-007**: Every page MUST include automated SEO metadata and dynamically generated Open Graph (OG) images (via Satori/Astro-OG-Canvas) derived from page titles and tags.
- **FR-010**: Home Page MUST feature a "Latest Posts" snippet showing the 2-3 most recent articles.
- **FR-011**: System MUST use Vercel Analytics (native, privacy-focused) to track engagement and performance metrics.
- **FR-012**: Blog articles MUST include "Next Post" and "Previous Post" navigation links at the bottom.
- **FR-014**: Blog Hub MUST include an interactive tag-based filtering system using the established "Flat Tags" taxonomy.
- **FR-015**: System MUST use Astro's built-in image optimization (`astro:assets`) for a single static representative image (WebP/AVIF) per project or article. No multi-image galleries or auto-playing videos/GIFs are required for MVP.
- **FR-016**: Blog system MUST support a `draft` flag in article frontmatter to exclude unfinished content from production builds.
- **FR-017**: Blog Hub MUST support external article links (e.g., Medium, LinkedIn) that open in a new tab. External links MUST display a platform-specific icon and an external link indicator.
- **FR-018**: System MUST provide a direct link to a PDF resume in the Hero and/or Navigation sections. The link MUST open in a new tab to utilize the browser's native PDF viewer.
- **FR-019**: System MUST be strictly English-only for the MVP to maintain architectural simplicity and performance.
- **FR-020**: System MUST use native system fonts (e.g., Inter, San Francisco, Roboto) to ensure zero Cumulative Layout Shift (CLS) and "instant" load times (SC-001).
- **FR-021**: System MUST include a dedicated "Tech Stack" section on the Home Page, displaying categorized icons for core technologies (Frontend, Backend, AI) using local SVGs from the Simple Icons library, organized in Labeled Rows.
- **FR-009**: System will NOT include a search feature for the MVP; content discovery relies on tags and navigation.

### Key Entities

- **Professional Role**: Represents a work history entry (Title, Company, Date Range, Achievements).
- **Project**: Represents a technical project (Name, Description, Tech Tags, Demo URL, Source URL, Related Article Slugs [Optional, Array of Slugs], Optimized Media [WebP/AVIF]).
- **Article**: Represents a technical blog post (Markdown format OR External Link: Title, Description, Content [Optional], External URL [Optional], Slug, Flat Tags, Publish Date, Last Updated Date [Optional], Reading Time [Optional], Draft Status, Related Project Slug [Optional], Cover Image [Optional, Optimized Media: WebP/AVIF]).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Site achieves a Lighthouse performance score of 99-100 on desktop.
- **SC-002**: Initial page load time is under 1 second on mobile devices (using optimized formats like WebP/AVIF).
- **SC-003**: 100% responsive layout across mobile, tablet, and desktop viewports.
- **SC-004**: Zero accessibility violations (WCAG 2.1 Level AA compliance).

## Clarifications

### Session 2026-03-29
- Q: Content Data Format → A: YAML (FR-005)
- Q: External Blog Link UI → A: Platform Badge + Outbound Icon (FR-017)
- Q: Project Case Study Integration → A: Optional "Read Case Study" link if article exists
- Q: Dark Mode Transition Style → A: Animated Fade (200-300ms)
- Q: Blog Tag Filtering Interaction → A: Client-side (Instant) filtering
- Q: Blog Article Excerpt Source → A: Explicit `description` field (Zod validated)
- Q: Tech Stack Categorization → A: Labeled Rows (FR-021)
- Q: Project Detail Views → A: Strict (No internal pages; link directly to external URLs)
- Q: Social Link Matrix Structure → A: Iconic Grid (Uniform social icons) (FR-004)
- Q: Relationship Cardinality → A: 1:N (One project, many articles via Related Article Slugs array)
- Q: Resume Access Behavior → A: Open in new tab (FR-018)
- Q: Blog Article Visuals → A: Add coverImage field (FR-015)
- Q: Tech Stack Icons → A: Simple Icons (Local SVGs) (FR-021)
- Q: Blog Article Metadata → A: Publish/Updated dates only
- Q: Localization → A: English only
- Q: Typography → A: System fonts (Inter/San Francisco/Roboto)
- Q: 404 Error Handling → A: Custom themed 404 page
- Q: Blog Excerpts → A: Display short excerpts/descriptions
- Q: Syntax Highlighting → A: Shiki (Build-time)
- Q: Project Grid Overflow → A: Additional row of standard cards
- Q: Project Media Diversity → A: Static only (Optimized WebP/AVIF)
- Q: Project & Experience Scale → A: Small/Curated (3-5 projects, 4-6 roles)
- Q: Project Hierarchy → A: Single Hero + Small Grid (1 large feature + 2-3 standard cards). (FR-003)
- Q: Project Link Behavior → A: Primary Demo / Secondary Source (Clear "Live Demo" button + GitHub link). (FR-003)
- Q: Resume Integration → A: Direct Link/Download (PDF resume in Hero/Nav). (FR-018)
- Q: Blog Taxonomy → A: Flat Tags (for flexible filtering). (FR-014)
- Q: Blog Content Source → A: Support both Internal (Markdown) and External (Medium/LinkedIn) links. (FR-017)
- Q: Draft Support → A: Support draft field (FR-016)
- Q: Deployment Platform → A: Vercel (Free Tier)
- Q: Image Management → A: Local Processing (astro:assets) (FR-015)
- Q: Blog Discovery → A: Tag-based filtering (Interactive chips) (FR-014)
- Q: Navigation Structure → A: Multi-page (Home, Blog Hub, Articles) (FR-013)
- Q: Framework Selection → A: Astro
- Q: Portfolio Data Source → A: JSON
- Q: Content Management → A: Astro Content Collections (with Zod validation)
- Q: Blog Post Format → A: Markdown (.md)
- Q: Image Storage → A: Co-located (with content files)
- Q: Hero Visuals → A: Professional Headshot (FR-001)
- Q: Project Hierarchy → A: Featured Highlight (1-2 projects) (FR-003)
- Q: Blog Navigation → A: Home Page Snippet (Latest 2-3 posts) (FR-010)
- Q: SEO/OG Strategy → A: Dynamic Generation (from titles/tags) (FR-007)
- Q: Analytics Platform → A: Vercel Analytics (FR-011)
- Q: Theme Persistence → A: LocalStorage (FR-006)
- Q: Blog Taxonomy → A: Flat Tags (for flexible filtering)
- Q: Project Link Behavior → A: New Tab (for external links) (FR-003)
- Q: Blog Post Navigation → A: Next/Prev Links (FR-012)
- Q: Project Media Format → A: Optimized WebP/AVIF (SC-002)

## Assumptions

- **Content Source**: Structured data (roles/projects/articles) will be managed via **Astro Content Collections** (JSON or YAML for data, Markdown for blog) with Zod validation.
- **Design & Components**: Custom-built UI components using **Tailwind CSS** to ensure zero bloat and precise "bento" layout control.
- **Hosting Tier**: Deployment will be on **Vercel** (Free Tier).
- **Media Hosting**: Project and blog media will be **co-located** with their respective content files and served via Astro's image optimization (WebP/AVIF).
- **Design System**: Use of Astro + Tailwind is the foundation for achieving performance targets.

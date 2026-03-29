# Tasks: Developer Portfolio and Blog

**Input**: Design documents from `specs/001-portfolio-blog/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Playwright (E2E) and Vitest (Unit) are included as requested in the implementation plan.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Exact file paths are included in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Astro 4.x project with TypeScript in root
- [x] T002 Configure Tailwind CSS 3.x in `tailwind.config.mjs` and `src/styles/globals.css`
- [x] T003 [P] Install dependencies: `lucide-react`, `simple-icons`, `zod`, `astro-og-canvas`, `vitest`, `@playwright/test`
- [x] T004 [P] Configure Vitest in `vitest.config.ts`
- [x] T005 [P] Configure Playwright in `playwright.config.ts`
- [x] T006 Create project directory structure per `plan.md` (src/content, src/components, src/layouts, etc.)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Implement Content Collections configuration with Zod schemas in `src/content/config.ts` (Experience, Projects, Blog)
- [x] T008 [P] Setup base Layout component with system fonts in `src/layouts/BaseLayout.astro`
- [x] T009 [P] Create SEO Meta component in `src/components/SEO/Meta.astro`
- [x] T010 [P] Define Global Configuration (social handles, site URL) in `src/config.ts`
- [x] T011 Implement Dark/Light mode logic with LocalStorage persistence in `src/components/UI/ThemeToggle.astro`
- [x] T012 Setup initial Tailwind theme for dark/light transitions in `tailwind.config.mjs`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Portfolio Identity & Core Connections (Priority: P1) 🎯 MVP

**Goal**: Display Atish's professional summary, social profiles, and resume.

**Independent Test**: Verify Hero section displays correct title, social links work, and resume download is functional.

### Tests for User Story 1

- [x] T013 [P] [US1] Create Playwright E2E test for Hero and Social links in `tests/e2e/hero.spec.ts`
- [x] T014 [P] [US1] Unit test for Social Link component in `src/components/UI/SocialLinks.test.ts`

### Implementation for User Story 1

- [x] T015 [P] [US1] Create Social Link Matrix component in `src/components/UI/SocialLinks.astro` (using Simple Icons)
- [x] T016 [US1] Create Hero section component in `src/components/Hero/Hero.astro` (Name, Title, Intro, Socials)
- [x] T017 [P] [US1] Add PDF resume to `public/resume.pdf`
- [x] T018 [US1] Implement Home Page base structure in `src/pages/index.astro` including Hero
- [x] T019 [US1] Create Footer component with Social Links in `src/components/UI/Footer.astro`
- [x] T020 [US1] Create Navigation component with Home, Blog, and Resume links in `src/components/UI/Navbar.astro`

**Checkpoint**: User Story 1 is fully functional and testable independently.

---

## Phase 4: User Story 2 - Proof of Expertise: Projects & Experience (Priority: P1)

**Goal**: Browse bento-style project grid and chronological work experience timeline.

**Independent Test**: Verify Experience and Project sections are populated from Content Collections; cards link to external URLs.

### Tests for User Story 2

- [x] T021 [P] [US2] Create Playwright E2E test for Project links and Experience visibility in `tests/e2e/portfolio.spec.ts`
- [x] T022 [P] [US2] Unit test for date formatting utility in `src/utils/date.test.ts`

### Implementation for User Story 2

- [x] T023 [P] [US2] Create seed data for Experience in `src/content/experience/` (YAML)
- [x] T024 [P] [US2] Create seed data for Projects in `src/content/projects/` (YAML)
- [x] T025 [P] [US2] Implement date formatting utility in `src/utils/date.ts`
- [x] T026 [P] [US2] Create Experience Timeline item component in `src/components/Experience/TimelineItem.astro`
- [x] T027 [US2] Create Work Experience section in `src/components/Experience/Experience.astro`
- [x] T028 [P] [US2] Create Project Card component in `src/components/Projects/ProjectCard.astro` (Bento style)
- [x] T029 [US2] Create Project Showcase grid in src/components/Projects/ProjectGrid.astro (Featured + Standard cards with conditional sizing)
- [x] T030 [US2] Update `src/pages/index.astro` to include Experience and Project sections

**Checkpoint**: User Story 2 is fully functional and testable independently.

---

## Phase 5: User Story 3 - Technical Deep Dive: Markdown Blog (Priority: P2)

**Goal**: Dedicated blog section with Markdown articles and tag-based filtering.

**Independent Test**: Adding a .md file generates a post; tag filtering updates the list instantly.

### Tests for User Story 3

- [x] T031 [P] [US3] Create Playwright E2E test for Blog navigation and filtering in `tests/e2e/blog.spec.ts`
- [x] T032 [P] [US3] Unit test for reading time calculation in `src/utils/readingTime.test.ts`

### Implementation for User Story 3

- [x] T033 [P] [US3] Create sample Markdown articles in `src/content/blog/`
- [x] T034 [P] [US3] Implement reading time utility in `src/utils/readingTime.ts`
- [x] T035 [P] [US3] Create Article Card component in src/components/Blog/ArticleCard.astro (including platform icons and outbound indicators for external links)
- [x] T036 [US3] Create Blog Hub page in src/pages/blog/index.astro (filtering out draft articles in production)
- [ ] T037 [US3] Implement Tag Filter interactive component in `src/components/Blog/TagFilter.tsx` (using Nano Stores)
- [x] T038 [US3] Create Blog Post page template in src/pages/blog/[slug].astro (ensuring draft articles return 404 in production)
- [x] T039 [US3] Implement Next/Prev article navigation in `src/components/Blog/PostNavigation.astro`
- [x] T040 [US3] Add "Latest Posts" snippet to Home Page in `src/components/Blog/LatestPosts.astro` and update `src/pages/index.astro`

**Checkpoint**: User Story 3 is fully functional and testable independently.

---

## Phase 6: User Story 4 - Seamless Visual Experience & Performance (Priority: P3)

**Goal**: Instant load times, dark/light transitions, and dynamic OG images.

**Independent Test**: Verify Lighthouse performance score (99+) and theme transition smoothness.

### Tests for User Story 4

- [x] T041 [P] [US4] Create Playwright test for system theme detection and persistence in `tests/e2e/theme.spec.ts`
- [ ] T042 [P] [US4] Performance audit using Lighthouse (targeting 99+ on Mobile and Desktop)

### Implementation for User Story 4

- [x] T043 [P] [US4] Implement Tech Stack section with categorized rows in `src/components/Home/TechStack.astro`
- [x] T044 [P] [US4] Configure Dynamic OG Image generation in `src/pages/og/[...route].ts` using `astro-og-canvas`
- [x] T045 [US4] Refine CSS transitions for theme switching (200-300ms) in `src/styles/globals.css`
- [ ] T046 [US4] Audit and optimize all images using `astro:assets` and WebP/AVIF formats
- [x] T047 [US4] Implement Custom themed 404 page in `src/pages/404.astro`

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T048 [P] Final Accessibility audit (WCAG AA) across all pages
- [ ] T049 [P] Setup Vercel Analytics integration in `src/layouts/BaseLayout.astro`
- [x] T050 [P] Documentation updates (README.md, etc.)
- [x] T051 Final run and validation of `specs/001-portfolio-blog/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - US1 and US2 are P1 and should be prioritized.
  - US3 and US4 can proceed once P1 stories are stable.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Foundation ready. No dependencies on other stories.
- **User Story 2 (P1)**: Foundation ready. Can integrate with US1 (linking to home) but is independent.
- **User Story 3 (P2)**: Foundation ready. Depends on Blog content collection from Phase 2.
- **User Story 4 (P3)**: Enhances visual experience of all previous stories.

---

## Parallel Example: User Story 2

```bash
# Implement data and utilities in parallel:
Task: "Create seed data for Experience in src/content/experience/"
Task: "Create seed data for Projects in src/content/projects/"
Task: "Implement date formatting utility in src/utils/date.ts"

# Then build UI components:
Task: "Create Experience Timeline item component in src/components/Experience/TimelineItem.astro"
Task: "Create Project Card component in src/components/Projects/ProjectCard.astro"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Phase 1 & 2 (Setup & Foundation).
2. Complete Phase 3 (US1 - Identity).
3. Complete Phase 4 (US2 - Proof of Expertise).
4. **STOP and VALIDATE**: Verify the core portfolio is functional.

### Incremental Delivery

1. Foundation → Base Layout and Content Schemas ready.
2. US1 → Name, Title, Socials, Resume live.
3. US2 → Experience and Projects grid live.
4. US3 → Blog and Tag filtering live.
5. US4 → Performance, OG Images, and Polish.

---

## Notes

- [P] tasks = different files, no dependencies.
- [Story] label maps task to specific user story for traceability.
- Verify tests fail before implementing.
- Each story is designed to be independently functional and testable.

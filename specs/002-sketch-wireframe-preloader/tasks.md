# Tasks: Sketch-based Wireframe Preloader

**Input**: Design documents from `/specs/002-sketch-wireframe-preloader/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- File paths are relative to the project root.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Install dependencies: `npm install roughjs framer-motion`
- [X] T002 Download and add "Architects Daughter" font to `public/fonts/architects-daughter.woff2`
- [X] T003 [P] Create directory structure `src/components/UI/Preloader/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Implement `sessionStorage` utility in `src/utils/preloader.ts`
- [X] T005 [P] Create base CSS for preloader and noise filter in `src/components/UI/Preloader/styles.css`
- [X] T006 Define `PreloaderPhase` and `WireframeElement` types in `src/components/UI/Preloader/types.ts`
- [X] T007 [P] Create `PreloaderConfig` with `WIREFRAME_LAYOUT` in `src/components/UI/Preloader/config.ts`

---

## Phase 3: User Story 1 - Engaging First Load (Priority: P1) 🎯 MVP

**Goal**: Display a unique, hand-drawn wireframe of the site being constructed to visually engage first-time visitors.

**Independent Test**: Clear session storage, open the site. Verify the blank "paper" background appears and the wireframe (Navbar, Hero, Projects, Blog) is sketched sequentially over 3 seconds before fading out to reveal site content.

### Implementation for User Story 1

- [X] T008 [P] [US1] Create `SketchCanvas.tsx` with Rough.js initialization in `src/components/UI/Preloader/SketchCanvas.tsx`
- [X] T009 [US1] Implement drawing logic with `requestAnimationFrame` and 80% overlap timing in `src/components/UI/Preloader/SketchCanvas.tsx`
- [X] T010 [US1] Create `Preloader.astro` component in `src/components/UI/Preloader/Preloader.astro`
- [X] T011 [US1] Integrate `Preloader.astro` into `src/layouts/BaseLayout.astro`
- [X] T012 [US1] Implement fade-out transition using Framer Motion in `src/components/UI/Preloader/Preloader.astro`
- [X] T013 [P] [US1] Add E2E test for initial load animation in `tests/e2e/preloader.spec.ts`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - User-Controlled Experience (Priority: P2)

**Goal**: Allow visitors to skip the preloader animation to access site content immediately.

**Independent Test**: Start the animation, click the "Skip Animation" button or press `Esc`. Verify the preloader is immediately removed (0ms delay) and site content is shown.

### Implementation for User Story 2

- [X] T014 [P] [US2] Create `SkipButton.tsx` with Rough.js border style in `src/components/UI/Preloader/SkipButton.tsx`
- [X] T015 [US2] Implement skip logic and keyboard listeners (Esc/Enter) in `src/components/UI/Preloader/Preloader.astro`
- [X] T016 [P] [US2] Add E2E test for skip functionality in `tests/e2e/preloader.spec.ts`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Returning Visitor Optimization (Priority: P3)

**Goal**: Automatically skip the preloader for returning visitors in the same session.

**Independent Test**: Complete or skip the animation, then refresh the page. Verify the site content is shown immediately without the preloader.

### Implementation for User Story 3

- [X] T017 [US3] Implement session check and early return logic in `src/components/UI/Preloader/Preloader.astro`
- [X] T018 [P] [US3] Add E2E test for session persistence in `tests/e2e/preloader.spec.ts`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T019 [P] Add `prefers-reduced-motion` check for auto-skip in `src/utils/preloader.ts`
- [X] T020 [P] Implement adaptive (single-column) layout for mobile in `src/components/UI/Preloader/config.ts`
- [X] T021 [P] Add accessibility labels and `aria-hidden` attributes in `src/components/UI/Preloader/Preloader.astro`
- [X] T022 [P] Performance validation: Verify <100ms render start (SC-001), 60fps targets, and Lighthouse performance goals (SC-004)
- [X] T023 Run `quickstart.md` validation tests
- [X] T024 [P] Implement silent failure timeout (e.g., 2s) to reveal content if libraries or fonts fail to load in `src/components/UI/Preloader/Preloader.astro`

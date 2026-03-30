# Implementation Plan: Sketch-based Wireframe Preloader

**Branch**: `002-sketch-wireframe-preloader` | **Date**: 2026-03-30 | **Spec**: [specs/002-sketch-wireframe-preloader/spec.md](spec.md)
**Input**: Feature specification from `/specs/002-sketch-wireframe-preloader/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Implement a Sketch-based Wireframe Preloader that visualizes the construction of the portfolio as if it's being drawn on a board in real-time. This feature uses Rough.js for hand-drawn aesthetics and Framer Motion for smooth transitions. It features a paper-textured background, sequential sketching of site sections (Navbar, Hero, Projects, Blog), and a "Skip Animation" option. The preloader is global but only plays once per session.

## Technical Context

**Language/Version**: TypeScript 5.x + Astro 4.x
**Primary Dependencies**: Rough.js, Framer Motion, "Architects Daughter" (Google Font)
**Storage**: `sessionStorage` (key: `portfolio_preloader_seen`)
**Testing**: Vitest, Playwright (E2E)
**Target Platform**: Web (Modern Browsers)
**Project Type**: Web Application (Astro)
**Performance Goals**: 
- Render start < 100ms
- Total duration: 3.0s (+/- 100ms)
- 60fps drawing (using rAF)
- < 5% Lighthouse performance impact
**Constraints**: 
- Respect `prefers-reduced-motion` (Auto-Skip)
- Silent failure on library/font load errors
- Fixed position (z-index: 9999)
**Scale/Scope**: Global preloader integrated via `BaseLayout.astro`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Performance First**: Plan includes specific SC-004 Lighthouse goals and rAF requirement.
- [x] **Zero-Cost Infrastructure**: No external DB or paid services required.
- [x] **Spec-Driven Development**: Directly derived from `002-sketch-wireframe-preloader/spec.md`.
- [x] **Code over Comments**: Will use TypeScript for state management and animation logic.
- [x] **Technology Stack**: Astro/Tailwind used. Rough.js/Framer Motion verified as acceptable for interactivity.
- [x] **Forbidden Patterns**: No heavy UI frameworks like Bootstrap. No inline styles (using Tailwind/CSS-in-JS if needed for dynamic canvas).

## Project Structure

### Documentation (this feature)

```text
specs/002-sketch-wireframe-preloader/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A)
└── tasks.md             # Phase 2 output (generated separately)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── UI/
│       └── Preloader/
│           ├── Preloader.astro
│           ├── SketchCanvas.tsx
│           ├── SkipButton.tsx
│           └── styles.css (for SVG noise filter)
├── layouts/
│   └── BaseLayout.astro (modified to include Preloader)
├── utils/
│   └── preloader.ts (session storage logic)
└── styles/
    └── globals.css (font imports)

tests/
└── e2e/
    └── preloader.spec.ts
```

**Structure Decision**: Single project structure within the existing Astro project. Components will be organized under `src/components/UI/Preloader/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |

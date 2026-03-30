# Feature Specification: Implement Sketch-based Wireframe Preloader

**Feature Branch**: `002-sketch-wireframe-preloader`  
**Created**: 2026-03-30  
**Status**: Draft  
**Input**: User description: "Implement a Sketch-based Wireframe Preloader that visualizes the construction of the portfolio as if it's being drawn on a board in real-time using Rough.js and Framer Motion."

## Clarifications

### Session 2026-03-30
- Q: Which specific hex codes should be used for the "paper" and "pen" in light mode? → A: Paper: #FDFBF7 (Cream), Pen: #1A1A1B (Off-black).
- Q: What should be the specific drawing order for the sections? → A: Top-Down Sequential (Navbar -> Hero -> Projects -> Blog).
- Q: What layout strategy should be used for the wireframe? → A: Common layout (Navbar, Footer) + Generic sections (Hero, Projects, Blog).
- Q: On which pages should the preloader be active for a first-time visitor? → A: Any page (Global) - Preloader plays once per session on the first page visited.
- Q: How should the preloader behave if the user has a `prefers-reduced-motion` system preference enabled? → A: Auto-Skip - Immediately bypass the animation and show content to respect accessibility preferences.
- Q: What is the fallback behavior if the required animation libraries (Rough.js or Framer Motion) fail to load? → A: Silent Failure - Immediately hide the preloader overlay and show the main content.
- Q: Should user interactions (clicks, scrolls) be blocked until the preloader transition starts? → A: Partial Block (Except Skip) - Block clicks to underlying site elements until the transition starts, but allow the "Skip Animation" button and scrolling.
- Q: How should the "paper-textured" background be implemented? → A: CSS/SVG Filter (Noise) - Generates a procedural grain/texture effect dynamically for high performance and theme flexibility.
- Q: Which specific handwritten-style font should be used for the labels? → A: "Architects Daughter" (Google Font).
- Q: What should be the primary stroke (pen) color for the dark mode "Blueprint" theme? → A: White / Light Gray (#F3F4F6).
- Q: What visual style should the "Skip Animation" button follow? → A: Hand-drawn/Sketch style using a Rough.js border for consistency.
- Q: How should the sequential sketching of sections (Hero, Projects, Blog) be timed? → A: Slight overlap (e.g., start the next section when the previous is 80% complete) for a more fluid feel.
- Q: What specific sessionStorage key should be used for tracking if the preloader has been seen? → A: `portfolio_preloader_seen`.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Engaging First Load (Priority: P1)

As a first-time visitor, I want to see a unique, hand-drawn wireframe of the site being constructed so that I am visually engaged during the initial load and immediately perceive the site's developer-centric, architectural identity.

**Why this priority**: This is the core value proposition of the feature, setting the brand tone and architectural identity of the portfolio.

**Independent Test**: Can be tested by opening the site in a fresh incognito window. The preloader should appear, draw the wireframe, and then reveal the site content.

**Acceptance Scenarios**:

1. **Given** a user visiting the site for the first time, **When** the page starts loading, **Then** a blank "paper" background appears and a wireframe of the site is sketched in real-time.
2. **Given** the sketch animation is complete, **When** the final stroke is drawn, **Then** the wireframe transitions smoothly to reveal the actual site content.

---

### User Story 2 - User-Controlled Experience (Priority: P2)

As a visitor who has seen the animation before or is in a hurry, I want to be able to skip the preloader so that I can access the site content immediately.

**Why this priority**: Essential for good UX, ensuring the preloader doesn't become a barrier to accessing information.

**Independent Test**: Can be tested by clicking the "Skip Animation" button immediately after the preloader appears. The animation should stop and the site content should appear instantly.

**Acceptance Scenarios**:

1. **Given** the preloader is active and animating, **When** the "Skip Animation" button is clicked, **Then** the preloader is immediately removed and the main site content is shown without delay.

---

### User Story 3 - Returning Visitor Optimization (Priority: P3)

As a returning visitor in the same session, I want the preloader to be skipped automatically so that I don't have to watch the animation every time I navigate back to the home page or refresh.

**Why this priority**: Improves efficiency for engaged users who are browsing multiple pages or frequently returning.

**Independent Test**: Can be tested by completing the animation (or skipping it), then refreshing the page or navigating back. The preloader should not reappear.

**Acceptance Scenarios**:

1. **Given** a user has already seen or skipped the preloader in the current session, **When** they refresh the page or return to the site, **Then** the site content is shown immediately without the preloader animation.

---

## Edge Cases

- **Slow Network / Library Failure**: If assets (like fonts, Rough.js, or Framer Motion) fail to load or take too long, the preloader should silently fail and reveal the site content immediately.
- **Mobile Devices**: The system MUST use an Adaptive (Single-column) layout for the wireframe on mobile devices to accurately reflect the actual site structure while maintaining the "sketch" aesthetic.
- **JavaScript Disabled / Reduced Motion**: The site should remain accessible; the preloader should be bypassed immediately if JavaScript is unavailable or if `prefers-reduced-motion` is detected.

## Requirements *(mandatory)*

### Functional Requirements

- FR-001: System MUST display a "paper-textured" background overlay on initial load using a performant CSS/SVG Noise Filter with a subtle "boiling" animation (2-4 fps grain updates) that adapts to the user's theme (e.g., Cream (#FDFBF7) paper with Off-black (#1A1A1B) pen for light mode, Dark Slate/Blueprint with White (#F3F4F6) pen for dark mode).
- FR-002: System MUST animate the drawing of a browser viewport and navbar using "hand-drawn" style lines (Rough.js).
- FR-003: System MUST sequentially sketch representational boxes for the common layout (Navbar) and generic representation of sections (Hero, Projects, and Blog) in a Top-Down Sequential order with a slight overlap (e.g., next section starts at 80% completion of the previous) to create a fluid drawing effect.
- FR-004: System MUST pencil in minimalist labels (e.g., `<Navbar />`, `<Hero />`) using the "Architects Daughter" handwritten-style font to identify each representational box.
- FR-005: System MUST provide an immediately visible "Skip Animation" button positioned in the Top-Right corner with padding, using a hand-drawn/sketch style (Rough.js border) for consistency. Pressing the `Esc` or `Enter` keys MUST also trigger the skip action, which results in an **Immediate Reveal (0ms)** of the site content.
- FR-006: System MUST transition from the wireframe to the actual site content immediately after the last minimalist label is finished drawing, targeting a total duration of exactly 3.0 seconds for the entire sequence.
- FR-007: System MUST use session-based storage (`sessionStorage.setItem('portfolio_preloader_seen', 'true')`) to ensure the preloader only plays once per session on the very first landing page visited (Global). Internal navigation between pages must NOT re-trigger the animation.
- FR-008: System MUST transition the wireframe and "Skip Animation" button to the content using a dissolve/fade effect where the entire preloader layer fades out as the main site content fades in.
- FR-009: System MUST use a `fixed` position (z-index: 9999) for the preloader overlay to ensure it remains viewport-locked and fills the screen even if the user scrolls. It MUST set `aria-hidden="true"` on the overlay to hide it from screen readers, while blocking all pointer events to the underlying site content (except for the "Skip Animation" button). Scrolling MUST remain enabled.
- FR-010: System MUST utilize `requestAnimationFrame` (rAF) to target a consistent 60fps for all Rough.js drawing operations, ensuring fluid and performant sketching.
- FR-011: System MUST configure Rough.js with a "Medium" roughness (1.5 - 2.0) and moderate bowing (1.0 - 1.5) to achieve a balanced hand-drawn aesthetic that is stylized yet clear.

### Key Entities *(include if feature involves data)*

- **Preloader State**: Tracks the current phase of the animation (Canvas -> Layout -> Sections -> Labels -> Transition) and user interactions (Skipped).
- **User Session Persistence**: A flag stored in the browser to indicate whether the preloader has been encountered in the current session.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- SC-001: Preloader begins rendering within 100ms of the initial page load event.
- SC-002: The complete drawing sequence and transition to content finishes in exactly 3.0 seconds (+/- 100ms jitter).
- SC-003: The "Skip Animation" button responds to clicks in under 50ms, triggering an immediate transition.
- **SC-004**: Lighthouse performance scores for "Total Blocking Time" and "Largest Contentful Paint" do not decrease by more than 5% compared to the baseline.

## Assumptions

- **A-001**: Users have JavaScript enabled (necessary for Rough.js and Framer Motion).
- **A-002**: The "Architects Daughter" font will be a self-hosted, subsetted woff2 asset to ensure minimal load time and prevent FOUT, with a `cursive` fallback defined in CSS to handle any loading delays.
- **A-003**: The "sketch" logic doesn't need to be pixel-perfect relative to the final site layout, as it's meant to be a representative wireframe.
- **A-004**: The preloader will be integrated globally via `BaseLayout.astro`.

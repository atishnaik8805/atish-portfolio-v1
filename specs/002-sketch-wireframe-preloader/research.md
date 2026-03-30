# Research: Sketch-based Wireframe Preloader

## Decision: Rough.js on Canvas for Drawing Animation
**Rationale**: Rough.js on Canvas provides the most flexibility for the "sketching" effect. While SVG is easier for path animations (`stroke-dashoffset`), Canvas allows for better performance when handling many overlapping "rough" strokes and the "boiling" jitter effect.
**Alternatives considered**: 
- SVG with CSS `stroke-dashoffset`: Easier to animate but harder to achieve the "jittery" redraw effect efficiently.
- Framer Motion paths: Good for simple SVGs, but Rough.js generates complex multiple paths for a single "rough" line.

## Decision: GPU-Accelerated "Boiling" Paper Texture
**Rationale**: Animating SVG filter primitives (`feTurbulence`) is CPU-intensive and causes "repaint storms". Instead, a static SVG/PNG noise texture will be applied to a large pseudo-element, and its `transform` (translate/rotate) will be updated at a low frequency (4-6 fps) via CSS/JS to simulate the "boiling" grain effect without recalculating noise.
**Alternatives considered**: 
- Animating `seed` in SVG Filter: Rejected due to high CPU usage (SC-004 violation).

## Decision: Self-hosted WOFF2 "Architects Daughter" Font
**Rationale**: Self-hosting avoids external DNS lookups, enables `preload`, and ensures layout stability (Core Web Vitals).
**Alternatives considered**: 
- Google Fonts API: Rejected for performance (connection overhead) and privacy (GDPR).

## Decision: Manual Coordinate Interpolation for "Drawing" Effect
**Rationale**: Rough.js doesn't support "partial drawing" natively. I will implement a utility to interpolate between line start/end points over the 3-second duration, triggering `rc.line` or `rc.rectangle` calls within a `requestAnimationFrame` loop.
**Alternatives considered**: 
- `rough.js` SVG paths with `stroke-dashoffset`: Difficult because Rough.js draws multiple strokes per line.

## Technical Clarifications Resolved:
- **Drawing Order**: Navbar -> Hero -> Projects -> Blog (Top-Down Sequential).
- **Timing**: 3.0s total, 80% overlap for fluid transition.
- **Accessibility**: Skip immediately if `prefers-reduced-motion` is detected.
- **Persistence**: `sessionStorage` key `portfolio_preloader_seen`.

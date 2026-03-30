# Data Model: Sketch-based Wireframe Preloader

## Entities

### `PreloaderPhase` (Enumeration)
Tracks the lifecycle of the preloader animation.

| Phase | Description |
|-------|-------------|
| `INIT` | Initializing libraries and checking session. |
| `SKETCHING_LAYOUT` | Drawing the main browser/viewport frame and navbar. |
| `SKETCHING_SECTIONS` | Drawing representational boxes for Hero, Projects, Blog. |
| `PENCILING_LABELS` | Adding minimalist handwritten labels. |
| `TRANSITIONING` | Fading out the preloader and revealing site content. |
| `COMPLETE` | Preloader removed from DOM; session flag set. |

### `WireframeElement` (Interface)
Defines a single representational element to be sketched on the canvas.

```typescript
interface WireframeElement {
  id: string;
  type: 'rectangle' | 'line' | 'text';
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  startPercent: number; // 0 to 100 relative to phase duration
  durationPercent: number; // Duration relative to phase
  options?: any; // Rough.js specific options (roughness, bowing)
}
```

### `PreloaderConfig` (Constant)
Static configuration for the wireframe layout.

```typescript
const WIREFRAME_LAYOUT: WireframeElement[] = [
  // Navbar
  { id: 'nav', type: 'rectangle', x: 20, y: 20, width: 960, height: 60, startPercent: 0, durationPercent: 20 },
  // Hero
  { id: 'hero', type: 'rectangle', x: 20, y: 100, width: 960, height: 300, startPercent: 15, durationPercent: 30 },
  // Projects
  { id: 'projects', type: 'rectangle', x: 20, y: 420, width: 960, height: 200, startPercent: 40, durationPercent: 30 },
  // Blog
  { id: 'blog', type: 'rectangle', x: 20, y: 640, width: 960, height: 200, startPercent: 65, durationPercent: 30 }
];
```

## Storage

- **Storage Type**: `sessionStorage`
- **Key**: `portfolio_preloader_seen`
- **Value**: `"true"` (string representation of boolean)
- **Scope**: Entire site (Global)
- **Lifecycle**: Cleared when the browser tab/session is closed.

## State Transitions

1. `INIT` -> Check `sessionStorage` -> If `seen` or `reduced-motion` -> `COMPLETE`.
2. `INIT` -> `SKETCHING_LAYOUT` (Duration: 0.5s)
3. `SKETCHING_LAYOUT` -> `SKETCHING_SECTIONS` (Duration: 1.5s, starts with overlap)
4. `SKETCHING_SECTIONS` -> `PENCILING_LABELS` (Duration: 0.5s)
5. `PENCILING_LABELS` -> `TRANSITIONING` (Duration: 0.5s fade)
6. `TRANSITIONING` -> `COMPLETE` -> Set `sessionStorage: true`.
7. **Any Phase** -> Skip Button Clicked -> `COMPLETE`.

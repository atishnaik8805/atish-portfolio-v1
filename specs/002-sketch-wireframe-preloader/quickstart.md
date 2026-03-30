# Quickstart: Sketch-based Wireframe Preloader

## Prerequisites
- **Rough.js**: For hand-drawn canvas rendering.
- **Framer Motion**: For smooth transitions and state-based animation triggers.
- **Architects Daughter Font**: Self-hosted in `public/fonts/`.

## Local Setup

1.  **Install dependencies**:
    ```bash
    npm install roughjs framer-motion
    ```

2.  **Add the font**:
    Download "Architects Daughter" WOFF2 from [google-webfonts-helper](https://gwfh.mranix.com/fonts/architects-daughter?subsets=latin) and place it in `public/fonts/architects-daughter.woff2`.

3.  **Include the component**:
    The preloader is integrated globally in `src/layouts/BaseLayout.astro`:
    ```astro
    ---
    import Preloader from '../components/UI/Preloader/Preloader.astro';
    ---
    <html lang="en">
      <body>
        <Preloader />
        <main id="main-content">
          <slot />
        </main>
      </body>
    </html>
    ```

## Testing Locally

1.  **Clear Session**:
    Open Browser DevTools -> Application -> Session Storage -> Delete `portfolio_preloader_seen`.
2.  **Refresh Page**:
    The sketch animation should play for exactly 3 seconds and then fade out.
3.  **Skip Button**:
    Click the "Skip Animation" button in the top right to immediately bypass the preloader.

## Implementation Details
- **Rough.js Roughness**: 1.5 - 2.0 (configured in `PreloaderConfig`).
- **Texture**: SVG filter defined in `src/components/UI/Preloader/styles.css`.
- **Boiling Animation**: Managed via `requestAnimationFrame` updates to `transform: translate()` on the texture overlay.

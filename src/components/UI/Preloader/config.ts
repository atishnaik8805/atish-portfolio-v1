import type { WireframeElement } from './types';

export const CANVAS_WIDTH = 1000;
export const CANVAS_HEIGHT = 860;

const DESKTOP_LAYOUT: WireframeElement[] = [
  // Navbar
  { id: 'nav', type: 'rectangle', x: 20, y: 20, width: 960, height: 60, startPercent: 0, durationPercent: 15, options: { roughness: 1.5, strokeWidth: 2 } },
  { id: 'nav-logo', type: 'text', x: 40, y: 60, text: 'PORTFOLIO', startPercent: 5, durationPercent: 10, options: { fontSize: 24 } },
  { id: 'nav-item-1', type: 'rectangle', x: 700, y: 35, width: 60, height: 30, startPercent: 8, durationPercent: 10, options: { roughness: 1.0 } },
  { id: 'nav-item-2', type: 'rectangle', x: 780, y: 35, width: 60, height: 30, startPercent: 10, durationPercent: 10, options: { roughness: 1.0 } },
  { id: 'nav-item-3', type: 'rectangle', x: 860, y: 35, width: 80, height: 30, startPercent: 12, durationPercent: 10, options: { roughness: 1.2, strokeWidth: 2 } },

  // Hero
  { id: 'hero', type: 'rectangle', x: 20, y: 100, width: 960, height: 300, startPercent: 15, durationPercent: 25, options: { roughness: 1.2 } },
  { id: 'hero-title', type: 'text', x: 60, y: 180, text: 'ATISH NAIK', startPercent: 25, durationPercent: 10, options: { fontSize: 48 } },
  { id: 'hero-subtitle', type: 'line', x: 60, y: 220, width: 300, height: 0, startPercent: 30, durationPercent: 10, options: { strokeWidth: 2 } },
  { id: 'hero-btn', type: 'rectangle', x: 60, y: 280, width: 150, height: 50, startPercent: 35, durationPercent: 10, options: { roughness: 1.5, fill: 'rgba(0,0,0,0.05)' } },
  { id: 'hero-img', type: 'circle', x: 750, y: 240, width: 180, startPercent: 20, durationPercent: 20, options: { roughness: 1.8 } },

  // Projects
  { id: 'projects-title', type: 'text', x: 20, y: 440, text: 'PROJECTS', startPercent: 40, durationPercent: 10, options: { fontSize: 32 } },
  { id: 'proj-1', type: 'rectangle', x: 60, y: 460, width: 260, height: 120, startPercent: 50, durationPercent: 15, options: { roughness: 1.2 } },
  { id: 'proj-2', type: 'rectangle', x: 350, y: 460, width: 260, height: 120, startPercent: 55, durationPercent: 15, options: { roughness: 1.2 } },
  { id: 'proj-3', type: 'rectangle', x: 640, y: 460, width: 260, height: 120, startPercent: 60, durationPercent: 15, options: { roughness: 1.2 } },

  // Blog
  { id: 'blog-title', type: 'text', x: 20, y: 660, text: 'LATEST POSTS', startPercent: 65, durationPercent: 10, options: { fontSize: 32 } },
  { id: 'blog-1', type: 'line', x: 60, y: 690, width: 800, height: 0, startPercent: 75, durationPercent: 10, options: { strokeWidth: 2 } },
  { id: 'blog-2', type: 'line', x: 60, y: 730, width: 800, height: 0, startPercent: 80, durationPercent: 10, options: { strokeWidth: 2 } },
  { id: 'blog-3', type: 'line', x: 60, y: 770, width: 600, height: 0, startPercent: 85, durationPercent: 10, options: { strokeWidth: 2 } }
];

const MOBILE_LAYOUT: WireframeElement[] = [
  // Navbar
  { id: 'nav', type: 'rectangle', x: 10, y: 10, width: 280, height: 40, startPercent: 0, durationPercent: 15, options: { roughness: 1.5 } },
  { id: 'nav-logo', type: 'text', x: 20, y: 35, text: 'PORTFOLIO', startPercent: 5, durationPercent: 10, options: { fontSize: 16 } },
  // Hamburger
  { id: 'ham-1', type: 'line', x: 250, y: 20, width: 20, height: 0, startPercent: 10, durationPercent: 5, options: { strokeWidth: 2 } },
  { id: 'ham-2', type: 'line', x: 250, y: 26, width: 20, height: 0, startPercent: 12, durationPercent: 5, options: { strokeWidth: 2 } },
  { id: 'ham-3', type: 'line', x: 250, y: 32, width: 20, height: 0, startPercent: 14, durationPercent: 5, options: { strokeWidth: 2 } },

  // Hero
  { id: 'hero-title', type: 'text', x: 20, y: 100, text: 'ATISH NAIK', startPercent: 20, durationPercent: 15, options: { fontSize: 24 } },
  { id: 'hero-img', type: 'circle', x: 220, y: 100, width: 50, startPercent: 15, durationPercent: 20, options: { roughness: 1.8 } },
  { id: 'hero-subtitle', type: 'line', x: 20, y: 120, width: 150, height: 0, startPercent: 25, durationPercent: 10, options: { strokeWidth: 2 } },
  { id: 'hero-btn', type: 'rectangle', x: 20, y: 150, width: 100, height: 30, startPercent: 35, durationPercent: 10, options: { roughness: 1.5 } },

  // Projects
  { id: 'projects-title', type: 'text', x: 10, y: 235, text: 'PROJECTS', startPercent: 40, durationPercent: 10, options: { fontSize: 20 } },
  { id: 'proj-1', type: 'rectangle', x: 20, y: 250, width: 260, height: 80, startPercent: 50, durationPercent: 20, options: { roughness: 1.2 } },

  // Blog
  { id: 'blog-title', type: 'text', x: 10, y: 370, text: 'BLOG', startPercent: 65, durationPercent: 10, options: { fontSize: 20 } },
  { id: 'blog-1', type: 'line', x: 20, y: 390, width: 240, height: 0, startPercent: 75, durationPercent: 10, options: { strokeWidth: 2 } },
  { id: 'blog-2', type: 'line', x: 20, y: 410, width: 240, height: 0, startPercent: 80, durationPercent: 10, options: { strokeWidth: 2 } }
];

export const getWireframeLayout = (isMobile: boolean) => isMobile ? MOBILE_LAYOUT : DESKTOP_LAYOUT;
export const getCanvasDimensions = (isMobile: boolean) => isMobile ? { width: 300, height: 480 } : { width: 1000, height: 860 };

export const ANIMATION_DURATION = 5000;
export const FADE_DURATION = 500;

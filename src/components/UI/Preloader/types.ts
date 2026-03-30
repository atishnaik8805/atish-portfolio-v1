export enum PreloaderPhase {
  INIT = 'INIT',
  SKETCHING_LAYOUT = 'SKETCHING_LAYOUT',
  SKETCHING_SECTIONS = 'SKETCHING_SECTIONS',
  PENCILING_LABELS = 'PENCILING_LABELS',
  TRANSITIONING = 'TRANSITIONING',
  COMPLETE = 'COMPLETE'
}

export type ElementType = 'rectangle' | 'line' | 'text' | 'circle';

export interface WireframeElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  startPercent: number; // 0 to 100 relative to phase duration
  durationPercent: number; // Duration relative to phase
  options?: any; // Rough.js specific options (roughness, bowing)
}

const PRELOADER_KEY = 'portfolio_preloader_seen';

export const hasSeenPreloader = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(PRELOADER_KEY) === 'true';
};

export const setSeenPreloader = (): void => {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(PRELOADER_KEY, 'true');
};

export const shouldSkipPreloader = (): boolean => {
  if (typeof window === 'undefined') return true;
  
  // Skip if already seen in this session
  if (hasSeenPreloader()) return true;
  
  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  
  return false;
};

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SketchCanvas from './SketchCanvas';
import SkipButton from './SkipButton';
import { shouldSkipPreloader, setSeenPreloader } from '../../../utils/preloader';

const PreloaderWrapper: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleComplete = useCallback(() => {
    setIsExiting(true);
    setSeenPreloader();
    // Dispatch event for other potential listeners
    window.dispatchEvent(new CustomEvent('preloader-complete'));
  }, []);

  useEffect(() => {
    if (!shouldSkipPreloader()) {
      setIsVisible(true);

      // T024: Silent failure timeout (5s)
      const timeoutId = setTimeout(() => {
        if (!isExiting) {
          handleComplete();
          console.warn('Preloader exited due to timeout.');
        }
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isExiting, handleComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleComplete();
      }
    };

    if (isVisible && !isExiting) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, isExiting, handleComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          id="preloader"
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio construction animation"
        >
          <div className="preloader-noise" aria-hidden="true"></div>
          <div className="sr-only" aria-live="polite">
            The site is being constructed. This will take about 3 seconds.
          </div>
          <SketchCanvas onComplete={handleComplete} />
          <SkipButton onClick={handleComplete} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreloaderWrapper;

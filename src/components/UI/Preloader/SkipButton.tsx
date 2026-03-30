import React, { useEffect, useRef } from 'react';
import rough from 'roughjs';

interface SkipButtonProps {
  onClick: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ onClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const strokeColor = isDark ? '#f3f4f6' : '#1a1a1b';
    const rc = rough.canvas(canvas);
    
    // Clear the canvas before drawing
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // Draw a rough border around the button area
    rc.rectangle(2, 2, 136, 36, {
      roughness: 1.5,
      stroke: strokeColor,
      strokeWidth: 1.5,
      seed: 42
    });
  }, [isDark]);

  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 right-8 md:top-8 md:bottom-auto z-[10000] flex items-center justify-center bg-transparent p-0 transition-transform hover:scale-105 active:scale-95 focus:outline-none"
      aria-label="Skip preloader animation"
    >
      <canvas
        ref={canvasRef}
        width="140"
        height="40"
        className="pointer-events-none"
      />
      <span 
        className={`absolute inset-0 flex items-center justify-center font-['Architects_Daughter'] text-sm font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
      >
        Skip Animation
      </span>
    </button>
  );
};

export default SkipButton;

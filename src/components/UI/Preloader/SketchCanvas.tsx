import React, { useEffect, useRef, useState } from 'react';
import rough from 'roughjs';
import { getWireframeLayout, getCanvasDimensions, ANIMATION_DURATION } from './config';

interface SketchCanvasProps {
  onComplete: () => void;
}

const SketchCanvas: React.FC<SketchCanvasProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const strokeColor = isDark ? '#f3f4f6' : '#1a1a1b';
    const layout = getWireframeLayout(isMobile);
    const rc = rough.canvas(canvas);
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = (progress / ANIMATION_DURATION) * 100;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      layout.forEach((el) => {
        const elementStart = el.startPercent;
        const options = { ...el.options, stroke: strokeColor };
        
        // Handle theme-aware fill if element specifies a generic fill
        if (options.fill === 'rgba(0,0,0,0.05)' && isDark) {
          options.fill = 'rgba(255,255,255,0.05)';
        }

        if (progressPercent >= elementStart) {
          const elementProgress = Math.min(
            1,
            (progressPercent - elementStart) / el.durationPercent
          );

          if (el.type === 'rectangle' && el.width && el.height) {
            const x = el.x;
            const y = el.y;
            const w = el.width;
            const h = el.height;

            const sideProgress = elementProgress * 4;

            if (sideProgress > 0) {
              const p1 = Math.min(1, sideProgress);
              rc.linearPath([[x, y], [x + w * p1, y]], { ...options, seed: 1 });
            }
            if (sideProgress > 1) {
              const p2 = Math.min(1, sideProgress - 1);
              rc.linearPath([[x + w, y], [x + w, y + h * p2]], { ...options, seed: 2 });
            }
            if (sideProgress > 2) {
              const p3 = Math.min(1, sideProgress - 2);
              rc.linearPath([[x + w, y + h], [x + w - w * p3, y + h]], { ...options, seed: 3 });
            }
            if (sideProgress > 3) {
              const p4 = Math.min(1, sideProgress - 3);
              rc.linearPath([[x, y + h], [x, y + h - h * p4]], { ...options, seed: 4 });
            }
          } else if (el.type === 'line' && el.width !== undefined && el.height !== undefined) {
             // For line, width and height can represent end relative to x, y or absolute coordinates.
             // Let's assume width and height are relative offset from x, y
             rc.linearPath([[el.x, el.y], [el.x + el.width * elementProgress, el.y + el.height * elementProgress]], options);
          } else if (el.type === 'circle' && el.width !== undefined) {
            rc.circle(el.x, el.y, el.width * elementProgress, options);
          } else if (el.type === 'text' && el.text) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.font = `${el.options?.fontSize || 20}px 'Architects Daughter'`;
              ctx.fillStyle = strokeColor;
              ctx.globalAlpha = elementProgress;
              ctx.fillText(el.text, el.x, el.y);
              ctx.globalAlpha = 1.0;
            }
          }
        }
      });

      if (progress < ANIMATION_DURATION) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onComplete();
          window.dispatchEvent(new CustomEvent('preloader-complete'));
        }, 500);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete, isMobile]);

  const { width, height } = getCanvasDimensions(isMobile);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ 
          width: '100%', 
          height: 'auto', 
          maxWidth: isMobile ? '300px' : '1000px',
          padding: '20px'
        }}
      />
    </div>
  );
};

export default SketchCanvas;

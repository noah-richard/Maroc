import { useState, useEffect, useRef } from 'react';

interface MouseParallaxCoords {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
}

export const useMouseParallax = (damping = 0.07) => {
  const [coords, setCoords] = useState<MouseParallaxCoords>({ x: 0, y: 0 });
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only run on fine-pointer devices
    if (typeof window === 'undefined') return;
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;

      // Calculate normalized position (-1 to 1)
      const normX = (e.clientX - halfWidth) / halfWidth;
      const normY = (e.clientY - halfHeight) / halfHeight;

      targetRef.current = {
        x: Math.max(-1, Math.min(1, normX)),
        y: Math.max(-1, Math.min(1, normY))
      };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    // Animation frame loop with lerp for silky inertia
    const loop = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      const diffX = target.x - current.x;
      const diffY = target.y - current.y;

      if (Math.abs(diffX) > 0.001 || Math.abs(diffY) > 0.001) {
        current.x += diffX * damping;
        current.y += diffY * damping;

        setCoords({
          x: Number(current.x.toFixed(4)),
          y: Number(current.y.toFixed(4))
        });
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [damping]);

  return coords;
};

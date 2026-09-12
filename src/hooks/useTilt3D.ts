import { useState, useRef, useCallback, useEffect } from 'react';

interface TiltOptions {
  maxTilt?: number; // Maximum tilt angle in degrees
  perspective?: number; // Perspective distance in px
  scale?: number; // Scale factor on hover
  speed?: number; // Transition speed on exit in ms
  glare?: boolean; // Whether to calculate specular glare coordinates
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
  glareX: number;
  glareY: number;
  isHovered: boolean;
}

export const useTilt3D = (options: TiltOptions = {}) => {
  const {
    maxTilt = 7,
    perspective = 800,
    scale = 1.025,
    speed = 500,
    glare = true
  } = options;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isSupported, setIsSupported] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }
    return false;
  });

  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    isHovered: false
  });

  // Listen to media query changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handleChange = (e: MediaQueryListEvent) => setIsSupported(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!isSupported) return;

      const element = elementRef.current;
      if (!element) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        const x = (clientX - rect.left) / rect.width; // 0 to 1
        const y = (clientY - rect.top) / rect.height; // 0 to 1

        const rotateX = (0.5 - y) * (maxTilt * 2);
        const rotateY = (x - 0.5) * (maxTilt * 2);

        setTilt({
          rotateX: Number(rotateX.toFixed(2)),
          rotateY: Number(rotateY.toFixed(2)),
          scale,
          glareX: Number((x * 100).toFixed(1)),
          glareY: Number((y * 100).toFixed(1)),
          isHovered: true
        });
      });
    },
    [isSupported, maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isSupported) return;
    setTilt((prev) => ({ ...prev, isHovered: true, scale }));
  }, [isSupported, scale]);

  const handleMouseLeave = useCallback(() => {
    if (!isSupported) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 50,
      glareY: 50,
      isHovered: false
    });
  }, [isSupported]);

  const transformStyle: React.CSSProperties = isSupported && tilt.isHovered
    ? {
        transform: `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, 1)`,
        transition: 'transform 120ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform'
      }
    : {
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: 'transform'
      };

  const glareStyle: React.CSSProperties = glare && isSupported && tilt.isHovered
    ? {
        opacity: 0.35,
        background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`,
        transition: 'opacity 250ms ease'
      }
    : {
        opacity: 0,
        transition: `opacity ${speed}ms ease`
      };

  return {
    ref: elementRef,
    style: transformStyle,
    glareStyle,
    isHovered: tilt.isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

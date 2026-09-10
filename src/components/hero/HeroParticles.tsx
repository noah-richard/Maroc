import React, { useMemo } from 'react';
import './HeroParticles.css';

interface HeroParticlesProps {
  mouseX?: number;
  mouseY?: number;
  scrollY?: number;
}

interface Particle {
  id: number;
  left: number; // %
  top: number; // %
  size: number; // px
  duration: number; // s
  delay: number; // s
  depth: number; // parallax factor
  opacity: number;
}

export const HeroParticles: React.FC<HeroParticlesProps> = ({
  mouseX = 0,
  mouseY = 0,
  scrollY = 0
}) => {
  // Generate deterministic particles to prevent SSR/hydration mismatch
  const particles: Particle[] = useMemo(() => [
    { id: 1, left: 15, top: 22, size: 3, duration: 18, delay: 0, depth: 0.18, opacity: 0.4 },
    { id: 2, left: 28, top: 45, size: 4, duration: 22, delay: 2, depth: 0.28, opacity: 0.5 },
    { id: 3, left: 42, top: 18, size: 2, duration: 16, delay: 4, depth: 0.12, opacity: 0.3 },
    { id: 4, left: 55, top: 38, size: 3, duration: 20, delay: 1, depth: 0.22, opacity: 0.45 },
    { id: 5, left: 68, top: 26, size: 4, duration: 24, delay: 5, depth: 0.32, opacity: 0.55 },
    { id: 6, left: 82, top: 48, size: 3, duration: 19, delay: 3, depth: 0.20, opacity: 0.4 },
    { id: 7, left: 22, top: 70, size: 2, duration: 25, delay: 6, depth: 0.15, opacity: 0.35 },
    { id: 8, left: 75, top: 72, size: 3, duration: 21, delay: 2.5, depth: 0.25, opacity: 0.45 },
    { id: 9, left: 35, top: 32, size: 3, duration: 17, delay: 3.5, depth: 0.18, opacity: 0.3 },
    { id: 10, left: 62, top: 60, size: 4, duration: 23, delay: 1.5, depth: 0.30, opacity: 0.5 },
    { id: 11, left: 88, top: 20, size: 2, duration: 18, delay: 4.5, depth: 0.14, opacity: 0.35 },
    { id: 12, left: 10, top: 52, size: 3, duration: 22, delay: 0.8, depth: 0.24, opacity: 0.4 }
  ], []);

  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p) => {
        const moveX = mouseX * p.depth * 28;
        const moveY = mouseY * p.depth * 28 - scrollY * p.depth * 0.4;

        return (
          <span
            key={p.id}
            className="hero-particles__dot"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              transform: `translate3d(${moveX}px, ${moveY}px, 0)`
            }}
          />
        );
      })}
    </div>
  );
};

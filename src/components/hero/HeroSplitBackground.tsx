import React from 'react';
import seaDefaultImage from '../../assets/Mer.jpg';
import mountainDefaultImage from '../../assets/Montagnes.jpg';
import './Hero.css';

interface HeroSplitBackgroundProps {
  seaImageUrl?: string;
  mountainImageUrl?: string;
}

export const HeroSplitBackground: React.FC<HeroSplitBackgroundProps> = ({
  seaImageUrl = seaDefaultImage,
  mountainImageUrl = mountainDefaultImage
}) => {
  return (
    <div className="hero-split-bg" aria-hidden="true">
      {/* RIGHT UNIVERSE: CÔTÉ MONTAGNE (Static, sharp, zero movement) */}
      <div
        className="hero-split-bg__layer hero-split-bg__layer--mountain"
        style={{
          backgroundImage: `url(${mountainImageUrl})`
        }}
      />

      {/* LEFT UNIVERSE: CÔTÉ MER (Static, sharp, zero movement) */}
      <div
        className="hero-split-bg__layer hero-split-bg__layer--sea"
        style={{
          backgroundImage: `url(${seaImageUrl})`
        }}
      />

      {/* DIAGONAL DIVIDER ACCENT LINE */}
      <div className="hero-split-bg__diagonal-edge" />

      {/* SEAMLESS CINEMATIC VIGNETTE */}
      <div className="hero-split-bg__vignette" />
    </div>
  );
};

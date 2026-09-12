import React from 'react';
import { DestinationCard } from './DestinationCard';
import {
  COASTAL_DESTINATIONS,
  INLAND_DESTINATIONS,
  type HomeDestination
} from '../../data/destinations.data';
import heroCoastalBg from '../../assets/hero-coastal.jpg';
import heroAtlasBg from '../../assets/hero-atlas.jpg';
import './MoroccoHero.css';
import './MoroccoHeroSplit.css';
import './MoroccoHeroResponsive.css';

interface MoroccoHeroProps {
  onSelectDestination?: (slug: string) => void;
}

export const MoroccoHero: React.FC<MoroccoHeroProps> = ({ onSelectDestination }) => {
  return (
    <section className="morocco-hero" aria-label="Découvre le Maroc — Immersion et Destinations">
      {/* 01. SPLIT DUAL CINEMATIC BACKGROUNDS */}
      <div className="morocco-hero__backgrounds" aria-hidden="true">
        {/* Left Side: Univers Océan */}
        <div
          className="morocco-hero__bg-panel morocco-hero__bg-panel--coastal"
          style={{ backgroundImage: `url(${heroCoastalBg})` }}
        />

        {/* Right Side: Univers Atlas (with diagonal clip) */}
        <div
          className="morocco-hero__bg-panel morocco-hero__bg-panel--atlas"
          style={{ backgroundImage: `url(${heroAtlasBg})` }}
        />

        {/* Glowing Golden Diagonal Divider Line */}
        <div className="morocco-hero__diagonal-glow" />

        {/* Cinematic Atmospheric Lighting Vignette */}
        <div className="morocco-hero__vignette" />
      </div>

      {/* 02. HERO INNER CONTENT WRAPPER */}
      <div className="morocco-hero__content">
        {/* TOP CENTRAL EDITORIAL HEADLINE */}
        <div className="morocco-hero__center-header">
          <span className="morocco-hero__micro-signature">TERRES D'ÉMOTIONS</span>
          <h1 className="morocco-hero__title font-serif">Découvre le Maroc</h1>
          <p className="morocco-hero__subtitle font-serif">Une ville. Une histoire. Un voyage.</p>
          
          {/* Moroccan Star Emblem & Delicate Dividers */}
          <div className="morocco-hero__emblem" aria-hidden="true">
            <span className="morocco-hero__emblem-line" />
            <svg
              className="morocco-hero__emblem-star"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" stroke="#D4A373" strokeWidth="1" strokeOpacity="0.85" />
              {/* Moroccan 5-point star */}
              <polygon
                points="12,4.5 14.2,9.3 19.5,9.6 15.4,13.2 16.7,18.3 12,15.4 7.3,18.3 8.6,13.2 4.5,9.6 9.8,9.3"
                stroke="#D4A373"
                strokeWidth="0.9"
                fill="none"
              />
            </svg>
            <span className="morocco-hero__emblem-line" />
          </div>
        </div>

        {/* SPLIT INTERACTIVE SECTIONS (OCEAN VS ATLAS) */}
        <div className="morocco-hero__split-grid">
          {/* LEFT UNIVERSE: OCÉAN */}
          <div className="morocco-hero__universe morocco-hero__universe--ocean">
            {/* Poetic quote */}
            <p className="morocco-hero__quote font-script">
              « Là où l'océan révèle la beauté du Maroc »
            </p>

            {/* Category tag */}
            <div className="morocco-hero__tag">
              <svg className="morocco-hero__tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M2 10c3-3 5 3 8 0s5 3 8 0 4-3 4-3" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2 14c3-3 5 3 8 0s5 3 8 0 4-3 4-3" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>VILLES CÔTIÈRES</span>
            </div>

            {/* 2x2 Cities Grid */}
            <div className="morocco-hero__cards-grid">
              {COASTAL_DESTINATIONS.map((city: HomeDestination) => (
                <DestinationCard
                  key={city.id}
                  destination={city}
                  onClick={onSelectDestination}
                />
              ))}
            </div>
          </div>

          {/* RIGHT UNIVERSE: ATLAS */}
          <div className="morocco-hero__universe morocco-hero__universe--atlas">
            {/* Poetic quote */}
            <p className="morocco-hero__quote font-script">
              « Des montagnes majestueuses aux villes impériales »
            </p>

            {/* Category tag */}
            <div className="morocco-hero__tag">
              <svg className="morocco-hero__tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 18l6-10 4 6 3-4 5 8H3z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>VILLES INTÉRIEURES</span>
            </div>

            {/* 2x2 Cities Grid */}
            <div className="morocco-hero__cards-grid">
              {INLAND_DESTINATIONS.map((city: HomeDestination) => (
                <DestinationCard
                  key={city.id}
                  destination={city}
                  onClick={onSelectDestination}
                />
              ))}
            </div>

            {/* Bottom Right Poetic Signature */}
            <div className="morocco-hero__signature font-script" aria-hidden="true">
              Le Maroc vous attend...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { HeroSplitBackground } from './HeroSplitBackground';
import { DestinationBar } from './DestinationBar';
import { SearchEngine } from '../search/SearchEngine';
import { COASTAL_DESTINATIONS, MOUNTAIN_DESTINATIONS } from '../../data/destinations.data';
import './Hero.css';

interface HeroProps {
  onSelectDestination?: (city: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectDestination }) => {
  return (
    <section className="hero" aria-label="Hero DecouvreLeMaroc">
      {/* 01. DUAL PHOTOGRAPHIC BACKGROUND (STATIC, CRISP & FAITHFUL) */}
      <HeroSplitBackground />

      {/* 02. HERO CONTENT CONTAINER */}
      <div className="hero__container">
        {/* TOP INTERACTIVE DESTINATIONS & ATMOSPHERE HEADERS */}
        <div className="hero__top-row">
          {/* CÔTÉ MER (LEFT) */}
          <div className="hero__universe hero__universe--sea">
            <div className="hero__universe-text">
              <span className="hero__universe-title font-script">Côté Mer</span>
              <p className="hero__universe-subtitle">
                Des villes vibrantes, des horizons infinis
              </p>
            </div>
            <DestinationBar
              title="Villes côtières"
              destinations={COASTAL_DESTINATIONS}
              onSelectCity={onSelectDestination}
            />
          </div>

          {/* CÔTÉ MONTAGNE (RIGHT) */}
          <div className="hero__universe hero__universe--mountain">
            <div className="hero__universe-text">
              <span className="hero__universe-title font-script">Côté Montagne</span>
              <p className="hero__universe-subtitle">
                Des paysages uniques, une culture authentique
              </p>
            </div>
            <DestinationBar
              title="Villes de l'Atlas"
              destinations={MOUNTAIN_DESTINATIONS}
              onSelectCity={onSelectDestination}
            />
          </div>
        </div>

        {/* 03. CENTRAL EDITORIAL HEADLINE (STATIC & PERFECTLY SOLID) */}
        <div className="hero__center-headline">
          <h1 className="hero-title">
            Tout le <span className="highlight">Maroc</span>
            <br />
            à portée de main
          </h1>
          <p className="hero-subtitle">
            Hébergements • Voitures • Restaurants • Expériences
          </p>
          <p className="hero-tagline">
            Voyagez autrement
          </p>
        </div>

        {/* 04. FLOATING SEARCH ENGINE */}
        <div className="hero__search-wrapper">
          <SearchEngine />
        </div>
      </div>
    </section>
  );
};

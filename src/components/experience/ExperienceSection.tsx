import React from 'react';
import { StatCounter } from './StatCounter';
import { Button } from '../common/Button/Button';
import { Icon } from '../common/Icon/Icon';
import { useInView } from '../../hooks/useInView';
import { useScrollParallax } from '../../hooks/useScrollParallax';
import './ExperienceSection.css';

interface ExperienceSectionProps {
  onStartAdventure?: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onStartAdventure }) => {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const scrollY = useScrollParallax();

  // Gentle scroll-linked rotation for the authentic Moroccan seal
  const stampRotation = (scrollY * 0.05) % 360;

  return (
    <section
      ref={ref}
      className={`experience-section ${isInView ? 'is-in-view' : ''}`}
      aria-label="Expériences et confiance"
    >
      <div className="experience-section__container">
        {/* LEFT COLUMN: EDITORIAL STATEMENT & PRIMARY CTA */}
        <div className={`experience-section__left ${isInView ? 'is-revealed' : ''}`}>
          <h2 className="experience-section__title font-serif">
            Vivez des expériences
            <br />
            inoubliables <span className="highlight">au Maroc</span>
          </h2>
          <p className="experience-section__subtitle">
            Des plages de l'Atlantique aux sommets de l'Atlas, chaque voyage raconte une histoire.
          </p>
          <div className="experience-section__cta-wrap">
            <Button
              variant="secondary"
              size="lg"
              onClick={onStartAdventure}
              rightIcon={<Icon name="arrow-right" size={18} />}
              className="experience-section__btn"
            >
              Commencer l'aventure
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: STATS METRICS & EMBOSSED MOROCCAN STAMP */}
        <div className={`experience-section__right ${isInView ? 'is-revealed' : ''}`}>
          <div className="experience-section__stats-grid">
            <StatCounter
              icon="home"
              value="+10 000"
              label="Hébergements"
              targetNumber={10000}
              prefix="+"
              isInView={isInView}
            />
            <StatCounter
              icon="car"
              value="1 500"
              label="Véhicules"
              targetNumber={1500}
              isInView={isInView}
            />
            <StatCounter
              icon="utensils"
              value="5 000"
              label="Restaurants"
              targetNumber={5000}
              isInView={isInView}
            />
            <StatCounter
              icon="star"
              value="Des milliers"
              label="d'avis voyageurs"
              isInView={isInView}
            />
          </div>

          {/* AUTHENTIC EMBOSSED MOROCCAN WATERMARK STAMP WITH PARALLAX ROTATION */}
          <div className="experience-section__stamp-wrap" aria-hidden="true">
            <img
              src="/images/stamp-morocco.svg"
              alt=""
              className="experience-section__stamp"
              style={{
                transform: `translate3d(0, ${Math.sin(scrollY * 0.01) * 5}px, 0) rotate(${stampRotation}deg)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Breadcrumb } from '../../layout/Breadcrumb/Breadcrumb';
import { DestinationWeather } from './DestinationWeather';
import { Icon } from '../../common/Icon/Icon';
import type { CityDestination } from '../../../types/destinationPage';
import './DestinationHero.css';
import './DestinationHeroResponsive.css';

interface DestinationHeroProps {
  destination: CityDestination;
  onOpenGallery?: () => void;
}

export const DestinationHero: React.FC<DestinationHeroProps> = ({
  destination,
  onOpenGallery
}) => {
  return (
    <section className="destination-hero" aria-label={`Présentation de ${destination.name}`}>
      {/* BACKGROUND PHOTOGRAPHY WITH CINEMATIC VIGNETTE */}
      <div className="destination-hero__bg">
        <img
          src={destination.heroImageUrl}
          alt={`Panorama emblématique de ${destination.name}`}
          className="destination-hero__bg-img"
        />
        <div className="destination-hero__overlay" />
      </div>

      <div className="destination-hero__container">
        {/* TOP ROW: BREADCRUMB & WEATHER WIDGET */}
        <div className="destination-hero__top-bar">
          <Breadcrumb
            items={[
              { label: 'Destinations', href: '/#destinations' },
              { label: destination.name, isCurrent: true }
            ]}
          />
          <DestinationWeather weather={destination.weather} />
        </div>

        {/* CENTER CONTENT: BADGE, CITY NAME, DESCRIPTION */}
        <div className="destination-hero__content">
          <span className="destination-hero__badge">{destination.heroBadge}</span>
          <h1 className="destination-hero__title font-serif">{destination.name}</h1>
          <p className="destination-hero__description">{destination.heroDescription}</p>
        </div>

        {/* BOTTOM ROW: QUICK INFOS (CLIMAT, À NE PAS MANQUER, SITUATION) & GALLERY CTA */}
        <div className="destination-hero__bottom-row">
          <div className="destination-hero__quick-infos">
            {/* CLIMAT */}
            <div className="destination-hero__info-item">
              <span className="destination-hero__info-icon" aria-hidden="true">
                <Icon name="sun" size={20} color="#E5B27E" />
              </span>
              <div className="destination-hero__info-text">
                <span className="destination-hero__info-label">Climat</span>
                <span className="destination-hero__info-val">{destination.quickInfo.climate}</span>
              </div>
            </div>

            {/* À NE PAS MANQUER */}
            <div className="destination-hero__info-item">
              <span className="destination-hero__info-icon" aria-hidden="true">
                <Icon name="star" size={20} color="#E5B27E" />
              </span>
              <div className="destination-hero__info-text">
                <span className="destination-hero__info-label">À ne pas manquer</span>
                <span className="destination-hero__info-val">{destination.quickInfo.mustSee}</span>
              </div>
            </div>

            {/* SITUATION */}
            <div className="destination-hero__info-item">
              <span className="destination-hero__info-icon" aria-hidden="true">
                <Icon name="map-pin" size={20} color="#E5B27E" />
              </span>
              <div className="destination-hero__info-text">
                <span className="destination-hero__info-label">Situation</span>
                <span className="destination-hero__info-val">{destination.quickInfo.location}</span>
              </div>
            </div>
          </div>

          {/* GALLERY MODAL BUTTON */}
          <button
            type="button"
            className="destination-hero__gallery-btn"
            onClick={onOpenGallery}
            aria-label={`Ouvrir la galerie photo de ${destination.name}`}
          >
            <Icon name="image" size={17} />
            <span>Voir la galerie</span>
          </button>
        </div>
      </div>
    </section>
  );
};

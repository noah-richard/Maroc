import React from 'react';
import type { Destination } from '../../types/destination';
import { Icon } from '../common/Icon/Icon';
import { useTilt3D } from '../../hooks/useTilt3D';
import './PopularDestinations.css';

interface DestinationCardProps {
  destination: Destination;
  onClick?: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onClick
}) => {
  const {
    ref,
    style,
    glareStyle,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  } = useTilt3D({
    maxTilt: 6.5,
    perspective: 850,
    scale: 1.035,
    speed: 450,
    glare: true
  });

  return (
    <article
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="destination-card"
      onClick={() => onClick?.(destination)}
      tabIndex={0}
      role="button"
      aria-label={`Découvrir la destination ${destination.name} - ${destination.subtitle}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(destination);
        }
      }}
    >
      <div className="destination-card__media">
        <img
          src={destination.imageUrl}
          alt={destination.altText}
          loading="lazy"
          className="destination-card__img"
        />
        <div className="destination-card__overlay" />
        {/* SPECULAR INTERACTIVE LIGHT SHEEN */}
        <div className="destination-card__glare" style={glareStyle} aria-hidden="true" />
      </div>

      <div className="destination-card__content">
        <div className="destination-card__info">
          <h3 className="destination-card__name">{destination.name}</h3>
          <p className="destination-card__subtitle">{destination.subtitle}</p>
        </div>

        <div className="destination-card__action" aria-hidden="true">
          <span className="destination-card__arrow-btn">
            <Icon name="arrow-right" size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};

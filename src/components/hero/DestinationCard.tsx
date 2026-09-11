import React from 'react';
import { Link } from 'react-router-dom';
import type { HomeDestination } from '../../data/destinations.data';
import './DestinationCard.css';

interface DestinationCardProps {
  destination: HomeDestination;
  onClick?: (slug: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(destination.slug);
    }
  };

  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="destination-card group"
      onClick={handleClick}
      aria-label={`Découvrir la destination ${destination.name}`}
    >
      {/* Background Image Container */}
      <div className="destination-card__media">
        <img
          src={destination.image}
          alt={destination.altText || `Vue photographique de ${destination.name}`}
          className="destination-card__img"
          loading="lazy"
        />
        {/* Subtle cinematic gradient overlays */}
        <div className="destination-card__overlay" aria-hidden="true" />
      </div>

      {/* Card Content (City Name & Action Arrow) */}
      <div className="destination-card__content">
        <span className="destination-card__name font-serif">{destination.name}</span>
        <div className="destination-card__arrow" aria-hidden="true">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="destination-card__arrow-icon"
          >
            <path d="M4 10h12" />
            <path d="M11 5l5 5-5 5" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

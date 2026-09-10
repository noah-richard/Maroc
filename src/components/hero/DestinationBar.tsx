import React from 'react';
import { Icon } from '../common/Icon/Icon';
import './Hero.css';

interface DestinationBarProps {
  destinations: { name: string; slug: string }[];
  onSelectCity?: (cityName: string) => void;
  title?: string;
  className?: string;
}

export const DestinationBar: React.FC<DestinationBarProps> = ({
  destinations,
  onSelectCity,
  title = 'Destinations',
  className = ''
}) => {
  return (
    <div className={`destination-bar ${className}`}>
      <div className="destination-bar__header">
        <span className="destination-bar__icon" aria-hidden="true">
          <Icon name="map-pin" size={13} color="#E5B27E" />
        </span>
        <span className="destination-bar__header-title">{title}</span>
      </div>
      <ul className="destination-bar__list">
        {destinations.map((dest) => (
          <li key={dest.slug} className="destination-bar__item">
            <button
              type="button"
              className="destination-bar__btn"
              onClick={() => onSelectCity?.(dest.slug || dest.name)}
              aria-label={`Découvrir ${dest.name}`}
            >
              <span className="destination-bar__btn-name">{dest.name}</span>
              <span className="destination-bar__btn-arrow" aria-hidden="true">
                <Icon name="arrow-right" size={12} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

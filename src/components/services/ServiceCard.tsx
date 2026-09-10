import React from 'react';
import type { ServiceOffering } from '../../types/service';
import { Icon } from '../common/Icon/Icon';
import { useTilt3D } from '../../hooks/useTilt3D';
import './ServicesSection.css';

interface ServiceCardProps {
  service: ServiceOffering;
  onClick?: (service: ServiceOffering) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const {
    ref,
    style,
    glareStyle,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  } = useTilt3D({
    maxTilt: 4.5,
    perspective: 900,
    scale: 1.02,
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
      className="service-card"
      onClick={() => onClick?.(service)}
      tabIndex={0}
      role="button"
      aria-label={`En savoir plus sur le service ${service.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(service);
        }
      }}
    >
      <div className="service-card__media">
        <img
          src={service.imageUrl}
          alt={service.altText}
          loading="lazy"
          className="service-card__img"
        />
        <div className="service-card__glare" style={glareStyle} aria-hidden="true" />
      </div>

      <div className="service-card__body">
        <div className="service-card__icon-badge" aria-hidden="true">
          <Icon name={service.iconType} size={22} />
        </div>

        <div className="service-card__details">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__description">{service.description}</p>
        </div>

        <div className="service-card__action" aria-hidden="true">
          <span className="service-card__arrow-btn">
            <Icon name="arrow-right" size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};

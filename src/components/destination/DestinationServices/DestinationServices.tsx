import React from 'react';
import type { ServiceCounters } from '../../../types/destinationPage';
import './DestinationServices.css';

interface DestinationServicesProps {
  services: ServiceCounters;
  cityName: string;
  onSelectCategory?: (category: 'hotels' | 'restaurants' | 'sites' | 'cars' | 'apartments') => void;
  onContactClick?: () => void;
}

export const DestinationServices: React.FC<DestinationServicesProps> = ({
  services,
  cityName,
  onSelectCategory,
  onContactClick,
}) => {
  const serviceItems = [
    {
      id: 'hotels' as const,
      title: 'Hôtels',
      count: `+${services.hotelsCount ?? services.hotels} disponibles`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7v14M21 7v14M3 12h18M7 7h10M9 21V12M15 21V12" />
        </svg>
      ),
    },
    {
      id: 'restaurants' as const,
      title: 'Restaurants',
      count: `+${services.restaurantsCount ?? services.restaurants} adresses`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
    },
    {
      id: 'sites' as const,
      title: 'Sites touristiques',
      count: `+${services.sitesCount ?? services.attractions} incontournables`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      id: 'cars' as const,
      title: 'Voitures',
      count: `+${services.carsCount ?? services.cars} véhicules`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L16 10l-2.7-4.1C13 5.3 12.3 5 11.5 5H6.5c-.8 0-1.5.3-1.8.9L2 10l-1.5 1.1C.3 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
          <circle cx="6" cy="17" r="2.5" />
          <circle cx="16" cy="17" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'apartments' as const,
      title: 'Appartements',
      count: `+${services.apartmentsCount ?? services.apartments} logements`,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M3 9h6M3 15h6M15 9h6M15 15h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="destination-services-section" aria-label={`Services disponibles à ${cityName}`}>
      <div className="destination-services-container">
        <div className="destination-services-grid">
          {serviceItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="destination-service-card"
              onClick={() => onSelectCategory?.(item.id)}
            >
              <div className="service-card-icon-wrap">{item.icon}</div>
              <div className="service-card-text">
                <span className="service-card-title">{item.title}</span>
                <span className="service-card-count">{item.count}</span>
              </div>
            </button>
          ))}

          {/* Contact Card */}
          <button
            type="button"
            className="destination-service-card destination-service-contact"
            onClick={onContactClick}
          >
            <div className="service-contact-content">
              <span className="service-contact-label">Une question ?</span>
              <span className="service-contact-cta">
                Contactez notre équipe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

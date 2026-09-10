import React from 'react';
import type { Advertisement } from '../../../types/destinationPage';
import { FeaturedAdCarousel } from './FeaturedAdCarousel';
import { StaticAdCard } from './StaticAdCard';
import './AdvertisingZone.css';

interface AdvertisingZoneProps {
  featuredAds: Advertisement[];
  staticAds: Advertisement[];
  cityName: string;
}

export const AdvertisingZone: React.FC<AdvertisingZoneProps> = ({
  featuredAds,
  staticAds,
  cityName,
}) => {
  return (
    <section className="advertising-zone-section" aria-label={`Bons plans et offres à ${cityName}`}>
      <div className="advertising-zone-container">
        <div className="advertising-zone-heading">
          <div className="zone-heading-badge">BONS PLANS DU MOMENT</div>
          <h2 className="zone-heading-title">Expériences exclusives & Offres partenaires</h2>
          <p className="zone-heading-subtitle">
            Profitez de réductions négociées pour votre séjour à {cityName}
          </p>
        </div>

        <div className="advertising-zone-grid">
          {/* Left Column: Carousel */}
          <div className="advertising-carousel-col">
            <FeaturedAdCarousel ads={featuredAds} />
          </div>

          {/* Right Column: Static Ads */}
          <div className="advertising-static-col">
            {staticAds.map((ad) => (
              <StaticAdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

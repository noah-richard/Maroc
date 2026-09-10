import React from 'react';
import './States.css';

export const DestinationSkeleton: React.FC = () => {
  return (
    <div className="destination-skeleton-page" aria-busy="true" aria-label="Chargement de la destination...">
      <div className="skeleton-hero shimmer" />
      <div className="skeleton-container">
        <div className="skeleton-services-bar">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card shimmer" />
          ))}
        </div>
        <div className="skeleton-content-grid">
          <div className="skeleton-main shimmer" />
          <div className="skeleton-sidebar shimmer" />
        </div>
      </div>
    </div>
  );
};

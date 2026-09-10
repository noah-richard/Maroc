import React from 'react';
import type { TrustPoint } from '../../../types/destinationPage';
import './CityTrust.css';

interface CityTrustSectionProps {
  trustPoints: TrustPoint[];
}

export const CityTrustSection: React.FC<CityTrustSectionProps> = ({ trustPoints }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-check':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'badge-percent':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="9" y1="15" x2="15" y2="9" />
            <circle cx="9.5" cy="9.5" r=".5" fill="currentColor" />
            <circle cx="14.5" cy="14.5" r=".5" fill="currentColor" />
          </svg>
        );
      case 'headphones':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        );
      case 'lock':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
    }
  };

  return (
    <section className="city-trust-section" aria-label="Pourquoi réserver avec DecouvreLeMaroc">
      <div className="city-trust-container">
        <div className="city-trust-grid">
          {trustPoints.map((point) => (
            <div key={point.id} className="city-trust-item">
              <div className="city-trust-icon-box">{getIcon(point.icon)}</div>
              <div className="city-trust-info">
                <h4 className="city-trust-title">{point.title}</h4>
                <p className="city-trust-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

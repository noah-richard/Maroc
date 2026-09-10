import React from 'react';
import type { Advertisement } from '../../../types/destinationPage';

interface StaticAdCardProps {
  ad: Advertisement;
}

export const StaticAdCard: React.FC<StaticAdCardProps> = ({ ad }) => {
  const badge = ad.badge || ad.tag;
  const sponsor = ad.sponsor || ad.advertiser;
  const description = ad.description || ad.subtitle;
  const link = ad.ctaLink || ad.linkHref || '#';

  return (
    <div className="static-ad-card">
      <div className="static-ad-image-wrap">
        <img src={ad.imageUrl} alt={ad.title} className="static-ad-image" />
        {badge && <span className="static-ad-badge">{badge}</span>}
      </div>

      <div className="static-ad-body">
        <div className="static-ad-header">
          <h4 className="static-ad-title">{ad.title}</h4>
          {sponsor && <span className="static-ad-sponsor">{sponsor}</span>}
        </div>
        <p className="static-ad-desc">{description}</p>
        <a
          href={link}
          className="static-ad-link"
          onClick={(e) => {
            if (link === '#') e.preventDefault();
          }}
        >
          {ad.ctaText}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

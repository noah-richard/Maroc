import React from 'react';
import type { FeaturedExperience } from '../../../types/destinationPage';
import './CityFeatured.css';

interface CityFeaturedSectionProps {
  features: FeaturedExperience[];
  cityName: string;
}

export const CityFeaturedSection: React.FC<CityFeaturedSectionProps> = ({
  features,
  cityName,
}) => {
  if (!features || !features.length) return null;

  return (
    <section className="city-featured-section" aria-label={`À la une à ${cityName}`}>
      <div className="city-featured-container">
        <div className="city-featured-header">
          <span className="city-featured-badge">À NE PAS MANQUER</span>
          <h2 className="city-featured-title">Expériences inoubliables à {cityName}</h2>
          <p className="city-featured-subtitle">
            Des moments d'exception sélectionnés pour vous faire vivre le Maroc authentique
          </p>
        </div>

        <div className="city-featured-grid">
          {features.map((exp) => {
            const badge = exp.badge || exp.tag;
            const duration = exp.duration || exp.metaInfo;
            const rating = exp.rating ?? 4.9;
            const reviewsCount = exp.reviewsCount ?? 142;
            const description =
              exp.description || exp.metaInfo || 'Une activité immersive au cœur de la tradition marocaine.';

            return (
              <article key={exp.id} className="featured-exp-card">
                <div className="featured-exp-image-wrap">
                  <img src={exp.imageUrl} alt={exp.title} className="featured-exp-image" />
                  {badge && <span className="featured-exp-badge">{badge}</span>}
                  {duration && (
                    <span className="featured-exp-duration">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {duration}
                    </span>
                  )}
                </div>

                <div className="featured-exp-content">
                  <div className="featured-exp-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="exp-score">{rating.toFixed(1)}</span>
                    <span className="exp-reviews">({reviewsCount} retours)</span>
                  </div>

                  <h3 className="featured-exp-title">{exp.title}</h3>
                  <p className="featured-exp-desc">{description}</p>

                  <div className="featured-exp-footer">
                    <div className="featured-exp-status-col">
                      <span className="exp-status-badge">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>Expérience premium</span>
                      </span>
                    </div>

                    <a
                      href="#best-options-section"
                      className="featured-exp-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('best-options-section');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      <span>Demander les disponibilités</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

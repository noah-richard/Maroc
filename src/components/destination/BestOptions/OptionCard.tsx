import React, { useState } from 'react';
import type { RecommendationItem } from '../../../types/destinationPage';

interface OptionCardProps {
  item: RecommendationItem;
}

export const OptionCard: React.FC<OptionCardProps> = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite || false);

  const title = item.title || item.name;
  const displayPrice =
    item.price ||
    (item.priceStartingFrom
      ? `${item.priceStartingFrom.toLocaleString('fr-FR')} ${item.currency || 'MAD'}`
      : 'Sur demande');

  const categoryLabels: Record<string, string> = {
    hotels: 'Hôtel & Riad',
    restaurants: 'Gastronomie',
    sites: 'Incontournable',
    attractions: 'Incontournable',
    cars: 'Location de voiture',
    apartments: 'Appartement & Villa',
  };

  return (
    <article className="option-card" aria-label={title}>
      <div className="option-card-image-wrap">
        <img src={item.imageUrl} alt={title} className="option-card-image" />
        <span className="option-card-category-badge">
          {categoryLabels[item.category] || item.category}
        </span>
        <button
          type="button"
          className={`option-card-fav-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isFavorite ? '#ef4444' : 'none'}
            stroke={isFavorite ? '#ef4444' : 'currentColor'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="option-card-body">
        {/* Rating & Location */}
        <div className="option-card-meta-row">
          <div className="option-card-rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="rating-score">{item.rating.toFixed(1)}</span>
            <span className="rating-count">({item.reviewsCount})</span>
          </div>

          <div className="option-card-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{item.location}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="option-card-title">{title}</h3>

        {/* Tags / Features */}
        {item.tags && item.tags.length > 0 && (
          <div className="option-card-tags">
            {item.tags.slice(0, 3).map((tag: string, idx: number) => (
              <span key={idx} className="option-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="option-card-footer">
          <div className="option-price-wrap">
            <span className="option-price-label">À partir de</span>
            <span className="option-price-val">
              {displayPrice}{' '}
              {item.pricePeriod && (
                <span className="option-price-period">/ {item.pricePeriod}</span>
              )}
            </span>
          </div>

          <a
            href={item.link || '#'}
            className="option-cta-btn"
            onClick={(e) => {
              if ((item.link || '#') === '#') e.preventDefault();
            }}
          >
            Découvrir
          </a>
        </div>
      </div>
    </article>
  );
};

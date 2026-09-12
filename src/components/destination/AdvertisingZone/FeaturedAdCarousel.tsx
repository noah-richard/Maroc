import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Advertisement } from '../../../types/destinationPage';
import './FeaturedAdCarousel.css';
import './FeaturedAdCarouselResponsive.css';

interface FeaturedAdCarouselProps {
  ads: Advertisement[];
}

export const FeaturedAdCarousel: React.FC<FeaturedAdCarouselProps> = ({ ads }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevAds, setPrevAds] = useState(ads);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Sync index reset when ads change without cascading effect
  if (prevAds !== ads) {
    setPrevAds(ads);
    setCurrentIndex(0);
    setDragOffset(0);
  }

  const nextSlide = useCallback(() => {
    if (ads.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  }, [ads.length]);

  const prevSlide = useCallback(() => {
    if (ads.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  }, [ads.length]);

  // Autoplay timer: 5 seconds, pauses on hover or drag
  useEffect(() => {
    if (ads.length <= 1 || isPaused || isDragging) return;
    timerRef.current = window.setInterval(() => nextSlide(), 5000);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [ads.length, isPaused, isDragging, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (ads.length <= 1) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(Math.max(-150, Math.min(150, diff)));
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleTouchCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (ads.length <= 1) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(Math.max(-150, Math.min(150, diff)));
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  if (!ads.length) return null;

  return (
    <div
      className={`featured-ad-carousel ${isDragging ? 'is-dragging' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label="Sélection d'institutions en vedette"
    >
      <div
        className="carousel-track-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="carousel-track"
          style={{
            width: `${ads.length * 100}%`,
            transform: `translateX(calc(-${currentIndex * (100 / ads.length)}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1)',
          }}
        >
          {ads.map((ad, idx) => {
            const badge = ad.badge || ad.tag;
            const description = ad.description || ad.subtitle;
            const ctaLink = ad.ctaLink || ad.linkHref || '#';
            const sponsor = ad.sponsor || ad.advertiser;

            return (
              <div
                key={ad.id || idx}
                className="carousel-slide"
                style={{ width: `${100 / ads.length}%` }}
                aria-hidden={idx !== currentIndex}
              >
                <img
                  src={ad.imageUrl}
                  alt={ad.title}
                  className="carousel-ad-image"
                  draggable={false}
                />
                <div className="carousel-ad-overlay" />

                <div className="carousel-ad-content">
                  {badge && <span className="carousel-ad-badge">{badge}</span>}
                  <h3 className="carousel-ad-title">{ad.title}</h3>
                  <p className="carousel-ad-description">{description}</p>
                  <div className="carousel-ad-footer">
                    <a
                      href={ctaLink}
                      className="carousel-ad-cta"
                      onClick={(e) => {
                        if (ctaLink === '#') e.preventDefault();
                      }}
                    >
                      {ad.ctaText || 'Découvrir'}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    {sponsor && (
                      <span className="carousel-ad-sponsor">Par {sponsor}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      {ads.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-nav-btn carousel-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Institution précédente"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-nav-btn carousel-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Institution suivante"
          >
            ›
          </button>
        </>
      )}

      {/* Centered Dots matching Mockup */}
      {ads.length > 1 && (
        <div className="carousel-dots" role="tablist">
          {ads.map((ad, idx) => (
            <button
              key={ad.id || idx}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Aller à l'institution ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

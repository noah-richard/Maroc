import React, { useEffect, useCallback } from 'react';
import type { GalleryImage } from '../../../types/destinationPage';
import './GalleryModal.css';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  cityName: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
  cityName,
}) => {
  const currentImage = images[currentIndex] || images[0];

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !images.length) return null;

  return (
    <div
      className="gallery-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galerie photos de ${cityName}`}
    >
      <div
        className="gallery-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="gallery-modal-header">
          <div className="gallery-modal-title-group">
            <h3 className="gallery-modal-title">{cityName} — Galerie</h3>
            <span className="gallery-modal-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <button
            className="gallery-modal-close"
            onClick={onClose}
            aria-label="Fermer la galerie"
          >
            ✕
          </button>
        </div>

        {/* Main Stage */}
        <div className="gallery-modal-stage">
          <button
            className="gallery-nav-btn gallery-nav-prev"
            onClick={handlePrev}
            aria-label="Photo précédente"
          >
            ‹
          </button>

          <div className="gallery-main-image-wrap">
            <img
              src={currentImage.url}
              alt={currentImage.alt || `${cityName} photo ${currentIndex + 1}`}
              className="gallery-main-image"
            />
            {(currentImage.caption || currentImage.title) && (
              <div className="gallery-caption">
                <span>{currentImage.caption || currentImage.title}</span>
              </div>
            )}
          </div>

          <button
            className="gallery-nav-btn gallery-nav-next"
            onClick={handleNext}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </div>

        {/* Thumbnails strip */}
        <div className="gallery-thumbnails-strip">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              type="button"
              className={`gallery-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => onSelectIndex(idx)}
              aria-label={`Aller à la photo ${idx + 1}`}
            >
              <img src={img.thumbnailUrl || img.url} alt="" className="gallery-thumb-img" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

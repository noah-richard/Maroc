import React, { useState, useEffect } from 'react';
import type { RecommendationItem } from '../../../types/destinationPage';
import { Icon } from '../Icon/Icon';
import './EstablishmentModal.css';

interface EstablishmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: RecommendationItem | null;
  cityName?: string;
}

export const EstablishmentModal: React.FC<EstablishmentModalProps> = ({
  isOpen,
  onClose,
  item,
  cityName = 'Maroc'
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryDate, setInquiryDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 personnes');
  const [guestContact, setGuestContact] = useState('');
  const [guestNotes, setGuestNotes] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'hotels':
        return 'Hôtel & Riad';
      case 'restaurants':
        return 'Table & Gastronomie';
      case 'attractions':
        return 'Incontournable & Visite';
      case 'cars':
        return 'Location de véhicule';
      case 'apartments':
        return 'Appartement & Résidence';
      default:
        return 'Établissement';
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestContact.trim()) return;
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je consulte DécouvreLeMaroc et je souhaite demander les disponibilités pour « ${item.name} » à ${cityName}.`
  );
  const whatsappUrl = `https://wa.me/212600000000?text=${whatsappMessage}`;

  return (
    <div className="est-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="est-modal-container"
        onClick={(e) => e.stopPropagation()}
        aria-labelledby="est-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          className="est-modal-close"
          onClick={onClose}
          aria-label="Fermer la fiche établissement"
        >
          <Icon name="x" size={20} />
        </button>

        {/* Modal Media Banner */}
        <div className="est-modal-hero">
          <img src={item.imageUrl} alt={item.name} className="est-modal-img" />
          <div className="est-modal-hero-gradient" />
          <div className="est-modal-hero-content">
            <span className="est-modal-category-chip">
              <Icon name="tag" size={13} />
              {getCategoryLabel(item.category)}
            </span>
            <h2 id="est-modal-title" className="est-modal-title">
              {item.name}
            </h2>
            <div className="est-modal-location">
              <Icon name="map-pin" size={16} />
              <span>{item.location || `${cityName}, Maroc`}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="est-modal-body">
          {/* Price & Status Bar */}
          <div className="est-modal-info-strip">
            <div className="est-modal-price-box">
              <span className="est-modal-price-label">Tarif disponible</span>
              <span className="est-modal-price-val">
                {item.price || (item.priceStartingFrom ? `À partir de ${item.priceStartingFrom} MAD` : 'Tarifs sur demande')}
              </span>
            </div>
            <div className="est-modal-reassurance-chip">
              <Icon name="shield-check" size={16} />
              <span>Contact direct sans frais de réservation</span>
            </div>
          </div>

          {/* Amenities & Characteristics */}
          <div className="est-modal-section">
            <h3 className="est-modal-section-title">Prestations & Caractéristiques</h3>
            <div className="est-modal-amenities-grid">
              <div className="est-amenity-item">
                <span className="est-amenity-bullet" />
                <span>Accueil et interlocuteur dédié à l’arrivée</span>
              </div>
              <div className="est-amenity-item">
                <span className="est-amenity-bullet" />
                <span>Situation privilégiée à {cityName}</span>
              </div>
              <div className="est-amenity-item">
                <span className="est-amenity-bullet" />
                <span>Wi-Fi & confort soigné</span>
              </div>
              <div className="est-amenity-item">
                <span className="est-amenity-bullet" />
                <span>Conseils de conciergerie locale</span>
              </div>
            </div>
          </div>

          {/* Operational Contacts & Action */}
          <div className="est-modal-section est-modal-action-zone">
            <h3 className="est-modal-section-title">
              Disponibilités & Mise en relation
            </h3>
            <p className="est-modal-notice">
              Nous ne proposons pas de paiement direct en ligne pour cet établissement : vous êtes directement mis en relation avec le lieu ou notre conciergerie pour vérifier les disponibilités aux dates de votre choix.
            </p>

            <div className="est-modal-buttons">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="est-modal-btn est-modal-btn--whatsapp"
              >
                <Icon name="phone" size={18} />
                <span>Contacter l’établissement via WhatsApp</span>
              </a>
            </div>

            {/* Quick Inquiry Form */}
            <div className="est-modal-inquiry-box">
              <h4 className="est-inquiry-title">
                Ou envoyer une demande de disponibilité :
              </h4>

              {formSubmitted ? (
                <div className="est-inquiry-success" role="status">
                  <Icon name="check" size={20} />
                  <div>
                    <strong>Demande bien enregistrée !</strong>
                    <p>Notre équipe et l'établissement reviendront vers vous rapidement au {guestContact}.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="est-inquiry-form">
                  <div className="est-inquiry-row">
                    <div className="est-inquiry-field">
                      <label htmlFor="inquiry-date">Dates souhaitées</label>
                      <input
                        type="text"
                        id="inquiry-date"
                        placeholder="Ex : 15 au 20 du mois prochain"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                      />
                    </div>
                    <div className="est-inquiry-field">
                      <label htmlFor="inquiry-guests">Voyageurs</label>
                      <select
                        id="inquiry-guests"
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(e.target.value)}
                      >
                        <option>1 voyageur</option>
                        <option>2 personnes</option>
                        <option>Famille (3-4 personnes)</option>
                        <option>Groupe (5+ personnes)</option>
                      </select>
                    </div>
                  </div>

                  <div className="est-inquiry-field">
                    <label htmlFor="inquiry-contact">Votre Email ou Téléphone (WhatsApp)</label>
                    <input
                      type="text"
                      id="inquiry-contact"
                      required
                      placeholder="nom@exemple.com ou +33 / +221 / +212..."
                      value={guestContact}
                      onChange={(e) => setGuestContact(e.target.value)}
                    />
                  </div>

                  <div className="est-inquiry-field">
                    <label htmlFor="inquiry-notes">Précisions (optionnel)</label>
                    <input
                      type="text"
                      id="inquiry-notes"
                      placeholder="Demande particulière, heure d’arrivée, chambre avec vue..."
                      value={guestNotes}
                      onChange={(e) => setGuestNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="est-inquiry-submit">
                    <span>Demander les disponibilités</span>
                    <Icon name="arrow-right" size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

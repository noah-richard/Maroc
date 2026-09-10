import React from 'react';
import type { SupportContact } from '../../../types/destinationPage';

interface ContactSupportCardProps {
  contact: SupportContact;
  cityName: string;
}

export const ContactSupportCard: React.FC<ContactSupportCardProps> = ({
  contact,
  cityName,
}) => {
  const avatar =
    contact.advisorAvatar ||
    contact.agentAvatarUrl ||
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80';
  const name = contact.advisorName || `Conseiller Local ${cityName}`;
  const role = contact.advisorRole || 'Expert Voyage & Réservations';
  const availability = contact.workingHours || contact.availability || 'Disponible 7j/7 de 8h à 22h';
  const whatsappNumber = contact.whatsappNumber || '+212612345678';
  const phoneNumber = contact.phoneNumber || contact.phoneDisplay || '+212 6 12 34 56 78';

  const whatsappUrl =
    contact.whatsappUrl ||
    `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Bonjour, je prépare mon voyage à ${cityName} et j'aimerais avoir des recommandations.`
    )}`;

  return (
    <div className="contact-support-card" id="destination-support-card">
      <div className="support-card-glow" />

      {/* Header with Advisor Avatar & Online Status */}
      <div className="support-card-header">
        <div className="support-avatar-wrap">
          <img src={avatar} alt={name} className="support-avatar" />
          <span className="support-status-indicator" title="Conseiller en ligne" />
        </div>
        <div className="support-header-info">
          <span className="support-badge">ASSISTANCE DIRECTE</span>
          <h4 className="support-advisor-name">{name}</h4>
          <span className="support-advisor-role">{role}</span>
        </div>
      </div>

      {/* Body Copy */}
      <div className="support-card-body">
        <h3 className="support-pitch-title">
          {contact.headline || "Besoin d'un conseil sur mesure ?"}
        </h3>
        <p className="support-pitch-desc">
          {contact.subheadline ||
            `Notre équipe locale basée à ${cityName} vous oriente gratuitement pour vos réservations, itinéraires et bonnes adresses. Réponse en moins de 5 minutes 7j/7.`}
        </p>

        <div className="support-hours-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Disponibilité : {availability}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="support-card-actions">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="support-btn support-btn-whatsapp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.905 2.796.905 3.18 0 5.767-2.587 5.768-5.766 0-3.182-2.587-5.77-5.768-5.792zm0-2.172c4.418 0 8 3.582 8 8 0 4.419-3.582 8-8 8a7.96 7.96 0 0 1-3.82-.969L2 21l1.838-5.992A7.954 7.954 0 0 1 4.03 12c0-4.418 3.582-8 8-8z" />
          </svg>
          Discuter sur WhatsApp
        </a>

        <a href={`tel:${whatsappNumber}`} className="support-btn support-btn-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Appeler {phoneNumber}
        </a>
      </div>
    </div>
  );
};

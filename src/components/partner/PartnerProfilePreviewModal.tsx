import React from 'react';
import {
  X,
  MapPin,
  Star,
  ShieldCheck,
  Check,
  Calendar,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import type { PartnerProfile, PartnerOnboardingDraft } from '../../types/partner';
import './PartnerProfilePreviewModal.css';

interface PartnerProfilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile?: PartnerProfile | null;
  draft?: PartnerOnboardingDraft | null;
}

export const PartnerProfilePreviewModal: React.FC<PartnerProfilePreviewModalProps> = ({
  isOpen,
  onClose,
  profile,
  draft
}) => {
  if (!isOpen) return null;

  // Compute unified display fields between profile or draft
  const title = profile?.offer.title || draft?.offerTitle || 'Séjour & Expérience d’Exception';
  const businessName = profile?.business.name || draft?.businessName || 'Établissement Partenaire';
  const city = profile?.business.city || draft?.city || 'Marrakech';
  const categoryLabel = profile?.business.subCategory || 'Riad & Expérience';
  const coverImage = profile?.media.coverImage || draft?.coverImage || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80';
  const startingPrice = profile?.offer.startingPrice || draft?.startingPrice || 1200;
  const priceUnit = profile?.offer.priceUnit || draft?.priceUnit || 'par nuit';
  const description = profile?.offer.description || draft?.description || 'Présentation de votre offre d’exception sur la plateforme DécouvreLeMaroc.';
  const amenities = profile?.offer.amenities || draft?.amenities || ['Wi-Fi Haut Débit', 'Petit-déjeuner inclus', 'Climatisation'];
  const includedItems = profile?.offer.includedItems || draft?.includedItems || ['Thé d’accueil royal', 'Assistance conciergerie 7j/7'];
  const notIncludedItems = profile?.offer.notIncludedItems || draft?.notIncludedItems || ['Taxe de séjour', 'Dépenses personnelles'];
  const gallery = profile?.media.gallery?.length ? profile.media.gallery : draft?.gallery?.length ? draft.gallery : [coverImage];
  const isVerified = profile?.verification.status === 'verified';

  return (
    <div className="partner-preview-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="partner-preview-container" onClick={e => e.stopPropagation()}>
        {/* Modal Top Floating Bar */}
        <div className="partner-preview-topbar">
          <div className="partner-preview-topbar__badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>Aperçu en Direct — Vue Voyageur sur DécouvreLeMaroc</span>
          </div>
          <button
            type="button"
            className="partner-preview-close-btn"
            onClick={onClose}
            aria-label="Fermer l'aperçu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content Simulated Public Page */}
        <div className="partner-preview-body">
          {/* Simulated Breadcrumb */}
          <div className="partner-preview-breadcrumb">
            <span>Accueil</span>
            <span>›</span>
            <span>Destinations</span>
            <span>›</span>
            <span>{city}</span>
            <span>›</span>
            <span className="text-primary font-bold">{businessName}</span>
          </div>

          {/* Hero Banner with Cover Photo */}
          <div className="partner-preview-hero">
            <img src={coverImage} alt={businessName} className="partner-preview-hero__img" />
            <div className="partner-preview-hero__overlay" />

            <div className="partner-preview-hero__content">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="partner-chip partner-chip--amber">
                  {categoryLabel}
                </span>
                {isVerified && (
                  <span className="partner-chip partner-chip--verified">
                    <ShieldCheck size={14} /> Partenaire Vérifié DLM
                  </span>
                )}
                <div className="partner-chip partner-chip--rating">
                  <Star size={13} fill="#F59E0B" className="text-amber-400" />
                  <strong>{profile?.stats.rating || '5.0'}</strong>
                  <span className="opacity-80">({profile?.stats.reviewsCount || '1'} avis)</span>
                </div>
              </div>

              <h1 className="partner-preview-title font-serif">{businessName}</h1>
              <p className="partner-preview-tagline">{title}</p>

              <div className="partner-preview-meta">
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin size={14} className="text-primary" />
                  <span>{city}, Maroc</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Main Presentation */}
          <div className="partner-preview-grid">
            {/* Left Column: Description, Amenities, Included */}
            <div className="partner-preview-main-col">
              {/* Photo Gallery Strip */}
              {gallery.length > 1 && (
                <div className="partner-preview-gallery-strip">
                  {gallery.slice(0, 4).map((img, i) => (
                    <img key={i} src={img} alt={`Galerie ${i + 1}`} className="partner-preview-thumb" />
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="partner-preview-card">
                <h3 className="partner-preview-card__title">À propos de cet établissement</h3>
                <p className="partner-preview-desc">{description}</p>
              </div>

              {/* Amenities */}
              {amenities.length > 0 && (
                <div className="partner-preview-card">
                  <h3 className="partner-preview-card__title">Équipements & Prestations</h3>
                  <div className="partner-preview-amenities-grid">
                    {amenities.map((item, idx) => (
                      <div key={idx} className="partner-preview-amenity-item">
                        <Check size={14} className="text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Included / Not Included */}
              <div className="partner-preview-card">
                <h3 className="partner-preview-card__title">Détails de l'Offre</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                      Inclus dans la formule :
                    </h4>
                    <ul className="partner-preview-bullet-list">
                      {includedItems.map((inc, i) => (
                        <li key={i}>
                          <Check size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Non inclus :
                    </h4>
                    <ul className="partner-preview-bullet-list">
                      {notIncludedItems.map((notInc, i) => (
                        <li key={i}>
                          <span className="text-slate-400 font-bold mr-1">•</span>
                          <span>{notInc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking Widget (Simulated Client View) */}
            <div className="partner-preview-sidebar-col">
              <div className="partner-preview-booking-box">
                <div className="flex items-baseline justify-between mb-4 border-b border-[#E8E2D9] pb-3">
                  <div>
                    <span className="text-xs text-slate-500 block">Tarif officiel direct</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl font-bold text-primary">
                        {startingPrice.toLocaleString('fr-FR')} MAD
                      </span>
                      <span className="text-xs text-slate-600">/ {priceUnit}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Meilleur Tarif Garanti
                  </span>
                </div>

                <div className="space-y-2.5 mb-4 text-xs">
                  <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E2D9] flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary" /> Dates disponibles
                    </span>
                    <span className="font-bold text-slate-800">Réservation en direct</span>
                  </div>

                  <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E2D9] flex items-center justify-between">
                    <span className="text-slate-600 flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-emerald-700" /> Conditions
                    </span>
                    <span className="font-bold text-emerald-800">Annulation flexible</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-3 px-4 bg-primary hover:bg-[#B54231] text-white font-bold rounded-xl text-sm transition-all shadow-md text-center block mb-3 cursor-default"
                  onClick={e => e.preventDefault()}
                >
                  Réserver cet Établissement
                </button>

                <p className="text-[11px] text-center text-slate-500 m-0">
                  Réservation directe sécurisée gérée par DécouvreLeMaroc. Aucun frais caché.
                </p>

                <div className="mt-4 pt-4 border-t border-[#E8E2D9] text-xs text-slate-600 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-primary" />
                    <span>Ligne conciergerie : +212 (0) 524 43 00 00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-primary" />
                    <span>Assistance WhatsApp 7j/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

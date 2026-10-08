import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import type { PlatformAdBanner } from '../types/admin';
import {
  Megaphone,
  Plus,
  Search,
  Trash2,
  Edit2,
  ExternalLink,
  X
} from 'lucide-react';


export const AdminAdvertisingPage: React.FC = () => {
  const { adBanners, addAdBanner, updateAdBanner, deleteAdBanner, toggleAdBanner } = useAdmin();

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<PlatformAdBanner | null>(null);

  // Form
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [tag, setTag] = useState('');
  const [ctaText, setCtaText] = useState('Découvrir l\'Offre');
  const [imageUrl, setImageUrl] = useState('');
  const [linkHref, setLinkHref] = useState('');
  const [advertiser, setAdvertiser] = useState('');
  const [citySlug, setCitySlug] = useState('');
  const [isActive, setIsActive] = useState(true);

  const openCreateModal = () => {
    setEditingBanner(null);
    setTitle('');
    setSubtitle('');
    setTag('PARTENAIRE OFFICIEL');
    setCtaText('Réserver');
    setImageUrl('https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80');
    setLinkHref('/club');
    setAdvertiser('Office National Marocain du Tourisme');
    setCitySlug('');
    setIsActive(true);
    setIsModalOpen(true);
  };

  const openEditModal = (ad: PlatformAdBanner) => {
    setEditingBanner(ad);
    setTitle(ad.title);
    setSubtitle(ad.subtitle);
    setTag(ad.tag);
    setCtaText(ad.ctaText);
    setImageUrl(ad.imageUrl);
    setLinkHref(ad.linkHref);
    setAdvertiser(ad.advertiser);
    setCitySlug(ad.citySlug || '');
    setIsActive(ad.isActive);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBanner) {
      updateAdBanner(editingBanner.id, {
        title,
        subtitle,
        tag,
        ctaText,
        imageUrl,
        linkHref,
        advertiser,
        citySlug: citySlug.trim() || undefined,
        isActive
      });
    } else {
      addAdBanner({
        title,
        subtitle,
        tag,
        ctaText,
        imageUrl,
        linkHref,
        advertiser,
        citySlug: citySlug.trim() || undefined,
        isActive
      });
    }
    setIsModalOpen(false);
  };

  const filtered = adBanners.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.advertiser.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-users-page">
      {/* Header */}
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Megaphone size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Bannières & Campagnes Publicitaires</h1>
            <p className="admin-page-subtitle">
              Gérez les encarts promotionnels, annonceurs partenaires et offres sponsorisées affichées sur les pages villes.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <button
            type="button"
            className="admin-btn-primary"
            onClick={openCreateModal}
          >
            <Plus size={16} />
            <span>Créer une Campagne Pub</span>
          </button>
        </div>
      </div>

      {/* Info Callout */}
      <div className="admin-cms-callout">
        <div className="flex items-center gap-3">
          <Megaphone size={22} className="text-primary shrink-0" />
          <div className="text-xs">
            <strong className="font-bold">Régie Publicitaire Intégrée :</strong> Les bannières actives sont injectées dans les pages de destination correspondantes (ou sur toutes les villes si aucune ville n'est spécifiée).
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="admin-chip admin-chip--emerald">
            {adBanners.filter(b => b.isActive).length} actives
          </span>
          <span className="admin-chip">
            {adBanners.length} campagnes
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="admin-filter-bar">
        <div className="admin-filter-search">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            className="admin-filter-input"
            placeholder="Rechercher par titre de campagne ou annonceur..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid of Ads or Empty State */}
      {filtered.length === 0 ? (
        <div className="admin-empty-state">
          <Megaphone size={40} className="text-slate-400 mb-3" />
          <h3 className="font-bold text-base text-[#0F2937]">Aucune campagne publicitaire trouvée</h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">Créez votre première annonce sponsorisée pour valoriser un riad ou partenaire.</p>
          <button type="button" className="admin-btn-primary" onClick={openCreateModal}>
            <Plus size={16} />
            <span>Créer une Campagne Pub</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(ad => (
          <div
            key={ad.id}
            className={`rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-sm ${
              ad.isActive
                ? 'bg-white border-[#E8E2D9]'
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}
          >
            {/* Visual Cover */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider shadow-sm">
                {ad.tag}
              </span>

              <button
                type="button"
                className={`absolute top-3 right-3 text-xs px-2.5 py-0.5 rounded-full font-bold transition-all shadow-sm ${
                  ad.isActive
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-white'
                }`}
                onClick={() => toggleAdBanner(ad.id)}
              >
                {ad.isActive ? 'Active' : 'En pause'}
              </button>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[11px] text-primary font-bold uppercase tracking-wider mb-1">
                  Annonceur : {ad.advertiser}
                </div>
                <h4 className="font-serif text-base font-bold text-slate-900 leading-snug">
                  {ad.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                  {ad.subtitle}
                </p>
                {ad.citySlug && (
                  <div className="mt-2 text-[11px] text-slate-500">
                    Cible : Villes de <strong className="text-slate-800 capitalize">{ad.citySlug}</strong>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <a
                  href={ad.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-700 flex items-center gap-1 hover:text-primary"
                >
                  <span>{ad.ctaText}</span>
                  <ExternalLink size={12} />
                </a>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    className="admin-action-icon-btn"
                    onClick={() => openEditModal(ad)}
                    title="Modifier la campagne"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    className="admin-action-icon-btn text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                    onClick={() => {
                      if (window.confirm(`Supprimer la campagne "${ad.title}" ?`)) {
                        deleteAdBanner(ad.id);
                      }
                    }}
                    title="Supprimer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      )}

      {/* Editor Modal */}
      {isModalOpen && (
        <div className="admin-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="city-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal__header">
              <div className="admin-modal__title-box">
                <div className="admin-modal__icon">
                  <Megaphone size={22} />
                </div>
                <div>
                  <h3 className="admin-modal__title">
                    {editingBanner ? 'Modifier la Campagne Publicitaire' : 'Nouvelle Campagne Publicitaire'}
                  </h3>
                  <p className="admin-modal__subtitle">
                    Configurez l'accroche, l'image et le bouton d'action du sponsor.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="admin-modal__close"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="city-modal__form">
              <div className="city-modal__grid">
                <div className="city-modal__inputs-col">
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Titre de la Campagne *</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="ex. Royal Mansour Marrakech"
                        required
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label">Nom de l'Annonceur *</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={advertiser}
                        onChange={e => setAdvertiser(e.target.value)}
                        placeholder="ex. Groupe Royal Mansour"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Sous-titre / Message Incitatif *</label>
                    <textarea
                      rows={2}
                      className="admin-form-input"
                      value={subtitle}
                      onChange={e => setSubtitle(e.target.value)}
                      placeholder="ex. L'excellence de l'hospitalité marocaine avec accès exclusif au spa pour tout séjour de 3 nuits..."
                      required
                    />
                  </div>

                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Badge Promo (Tag)</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={tag}
                        onChange={e => setTag(e.target.value)}
                        placeholder="ex. PRIVILÈGE PARTENAIRE"
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label">Libellé du Bouton (CTA)</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={ctaText}
                        onChange={e => setCtaText(e.target.value)}
                        placeholder="ex. Découvrir l'Offre"
                        required
                      />
                    </div>
                  </div>

                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Lien Cible (URL ou interne)</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={linkHref}
                        onChange={e => setLinkHref(e.target.value)}
                        placeholder="https://... ou /destinations/marrakech"
                        required
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label">Cible Ville (Laisser vide pour toutes)</label>
                      <input
                        type="text"
                        className="admin-form-input"
                        value={citySlug}
                        onChange={e => setCitySlug(e.target.value)}
                        placeholder="ex. marrakech ou dakhla"
                      />
                    </div>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-form-label">Image de la Bannière (URL)</label>
                    <input
                      type="url"
                      className="admin-form-input"
                      value={imageUrl}
                      onChange={e => setImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-toggle-label">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={e => setIsActive(e.target.checked)}
                        className="admin-toggle-input"
                      />
                      <span className="admin-toggle-slider" />
                      <span className="admin-toggle-text">
                        <strong>Campagne Active Immédiatement</strong>
                        <small className="block text-xs text-slate-500">Injecter la bannière sur les pages publiques</small>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Right Live Preview Column */}
                <div className="city-modal__preview-col">
                  <div className="city-preview-label">
                    <span>Aperçu de l'Encart Publicitaire</span>
                  </div>

                  <div className="rounded-2xl border border-[#E8E2D9] overflow-hidden bg-white shadow-sm flex flex-col justify-between">
                    <div className="relative h-36 w-full overflow-hidden">
                      <img
                        src={imageUrl || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80'}
                        alt={title || 'Aperçu'}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t" />

                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider">
                        {tag || 'PARTENAIRE'}
                      </span>

                      <span className={`absolute top-2.5 right-2.5 text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'
                      }`}>
                        {isActive ? 'Active' : 'Pause'}
                      </span>
                    </div>

                    <div className="p-4 bg-white">
                      <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-0.5">
                        {advertiser || 'Annonceur'}
                      </div>
                      <h4 className="font-serif text-sm font-bold text-slate-900 leading-snug">
                        {title || 'Titre de la Campagne'}
                      </h4>
                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                        {subtitle || 'Texte descriptif de votre offre sponsorisée...'}
                      </p>
                      <div className="pt-3 mt-3 border-t border-[#E8E2D9] flex items-center justify-between">
                        <span className="text-xs font-bold text-primary flex items-center gap-1">
                          <span>{ctaText || 'Découvrir'}</span>
                          <ExternalLink size={11} />
                        </span>
                        {citySlug && (
                          <span className="text-[10px] text-slate-500 capitalize">
                            {citySlug}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-modal__footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="admin-btn-primary"
                >
                  {editingBanner ? 'Enregistrer les Modifications' : 'Lancer la Campagne'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

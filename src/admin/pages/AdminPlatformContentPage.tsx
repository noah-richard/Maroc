import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Sliders,
  Sparkles,
  Save,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Bell,
  Eye,
  CheckCircle2,
  Globe,
  ExternalLink,
  Clock,
  User,
  Quote,
  Flame,
  Check
} from 'lucide-react';
import './AdminPlatformContentPage.css';

export const AdminPlatformContentPage: React.FC = () => {
  const { platformConfig, updatePlatformConfig } = useAdmin();

  // Local form state initialized from context
  const [formData, setFormData] = useState({ ...platformConfig });
  const [activeTab, setActiveTab] = useState<'hero' | 'announcement' | 'club' | 'contact'>('hero');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setSaveSuccess(false);
  };

  const handlePerkChange = (index: number, field: 'title' | 'description' | 'tag', value: string) => {
    setFormData(prev => {
      const updatedPerks = [...prev.clubPerks];
      updatedPerks[index] = { ...updatedPerks[index], [field]: value };
      return { ...prev, clubPerks: updatedPerks };
    });
    setSaveSuccess(false);
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    updatePlatformConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  return (
    <div className="admin-platform-page">
      {/* 01. Page Header */}
      <div className="admin-page-header">
        <div className="flex items-center gap-3">
          <div className="admin-page-icon">
            <Sliders size={22} />
          </div>
          <div>
            <h1 className="admin-page-title">Contenu & Textes de la Plateforme</h1>
            <p className="admin-page-subtitle">
              Personnalisez les messages d'accueil, le bandeau d'alerte, les privilèges du Club et les coordonnées de la conciergerie.
            </p>
          </div>
        </div>

        <div className="admin-page-header__actions">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn-secondary"
            title="Consulter le site public"
          >
            <ExternalLink size={15} />
            <span>Voir le Site Public</span>
          </a>
          <button
            type="button"
            className="admin-btn-primary"
            onClick={() => handleSave()}
            id="btn-save-platform-content"
          >
            <Save size={16} />
            <span>Enregistrer les Modifications</span>
          </button>
        </div>
      </div>

      {/* 02. Success Notification */}
      {saveSuccess && (
        <div className="admin-success-banner" role="alert">
          <div className="admin-success-banner__content">
            <div className="admin-success-banner__icon">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <strong>Modifications enregistrées !</strong> Les nouveaux textes et paramètres ont été synchronisés et sont appliqués instantanément sur tout le site public.
            </div>
          </div>
          <button
            type="button"
            className="admin-action-icon-btn"
            onClick={() => setSaveSuccess(false)}
            aria-label="Fermer la notification"
          >
            ✕
          </button>
        </div>
      )}

      {/* 03. Luxury Navigation Tabs */}
      <nav className="admin-content-tabs" aria-label="Onglets d'édition CMS">
        <button
          type="button"
          className={`admin-content-tab-btn ${activeTab === 'hero' ? 'admin-content-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('hero')}
        >
          <div className="admin-content-tab-btn__icon">
            <Sparkles size={15} />
          </div>
          <span>Page d'Accueil & Hero</span>
        </button>

        <button
          type="button"
          className={`admin-content-tab-btn ${activeTab === 'announcement' ? 'admin-content-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('announcement')}
        >
          <div className="admin-content-tab-btn__icon">
            <Bell size={15} />
          </div>
          <span>Bandeau d'Annonce & Alertes</span>
          {formData.announcementActive && (
            <span className="admin-pulse-dot" style={{ marginLeft: 2 }} title="Bandeau actuellement actif" />
          )}
        </button>

        <button
          type="button"
          className={`admin-content-tab-btn ${activeTab === 'club' ? 'admin-content-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('club')}
        >
          <div className="admin-content-tab-btn__icon">
            <Award size={15} />
          </div>
          <span>Le Club DécouvreLeMaroc</span>
        </button>

        <button
          type="button"
          className={`admin-content-tab-btn ${activeTab === 'contact' ? 'admin-content-tab-btn--active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <div className="admin-content-tab-btn__icon">
            <MessageCircle size={15} />
          </div>
          <span>Conciergerie & Contacts</span>
        </button>
      </nav>

      {/* ===================================================================
          TAB 1: PAGE D'ACCUEIL & HERO (WITH REAL-TIME LIVE PREVIEW)
          =================================================================== */}
      {activeTab === 'hero' && (
        <div className="admin-content-grid">
          {/* Left: Edit Form */}
          <div className="space-y-4">
            <div className="admin-card-section">
              <div className="admin-card-section__header">
                <div className="admin-card-section__lead">
                  <div className="admin-card-section__icon">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h3 className="admin-card-section__title">Textes Principaux & Accroche (Hero)</h3>
                    <p className="admin-card-section__desc">
                      Ce bloc accueille immédiatement les visiteurs dès leur arrivée sur la plateforme.
                    </p>
                  </div>
                </div>
              </div>

              {/* Surtitre & Titre */}
              <div className="admin-form-group">
                <label className="admin-form-label">
                  <span>Surtitre d'Élite (Micro-Signature)</span>
                  <span className="admin-field-badge admin-field-badge--gold">Badge Doré</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.heroMicroSignature}
                  onChange={e => handleChange('heroMicroSignature', e.target.value)}
                  placeholder="ex. TERRES D’ÉMOTIONS"
                />
                <span className="admin-form-hint">
                  Affiché en petites lettres capitales au-dessus du titre principal.
                </span>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <span>Titre d'Accroche Principal (H1)</span>
                  <span className="admin-field-badge">Titre Principal</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.heroTitle}
                  onChange={e => handleChange('heroTitle', e.target.value)}
                  placeholder="ex. Découvre le Maroc"
                />
                <span className="admin-form-hint">
                  Le titre de premier plan valorisant la richesse du Royaume.
                </span>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <span>Sous-titre Explicatif (Hero Subtitle)</span>
                </label>
                <textarea
                  rows={2}
                  className="admin-form-textarea"
                  value={formData.heroSubtitle}
                  onChange={e => handleChange('heroSubtitle', e.target.value)}
                  placeholder="ex. Un royaume. Une histoire. Un voyage."
                />
                <span className="admin-form-hint">
                  Phrase courte incitant à l'évasion et au voyage.
                </span>
              </div>

              {/* 2 Citations Poétiques */}
              <div className="admin-fields-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Quote size={13} className="text-secondary" />
                    <span>Citation Océane (Atlantique)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroOceanQuote}
                    onChange={e => handleChange('heroOceanQuote', e.target.value)}
                  />
                  <span className="admin-form-hint">Volet côte & littoral</span>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Quote size={13} style={{ color: 'var(--admin-primary)' }} />
                    <span>Citation Montagne (Haut-Atlas)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroAtlasQuote}
                    onChange={e => handleChange('heroAtlasQuote', e.target.value)}
                  />
                  <span className="admin-form-hint">Volet relief & médinas</span>
                </div>
              </div>

              {/* Signature & Compteur Live */}
              <div className="admin-fields-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Sparkles size={13} style={{ color: 'var(--admin-amber)' }} />
                    <span>Signature Institutionnelle</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.heroSignature}
                    onChange={e => handleChange('heroSignature', e.target.value)}
                    placeholder="Le Maroc vous attend..."
                  />
                  <span className="admin-form-hint">Slogan poétique en bas du hero</span>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Flame size={13} className="text-emerald" />
                    <span>Voyageurs Connectés (Compteur Live)</span>
                    <span className="admin-field-badge admin-field-badge--live">Temps Réel</span>
                  </label>
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.liveVisitorsCount}
                    onChange={e => handleChange('liveVisitorsCount', parseInt(e.target.value, 10) || 100)}
                    min={10}
                    max={10000}
                  />
                  <span className="admin-form-hint">Indicateur de réassurance et d'affluence en direct</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sticky Real-time Live Preview */}
          <aside className="admin-preview-sticky">
            <div className="admin-preview-card">
              <div className="admin-preview-card__header">
                <div className="flex items-center gap-2">
                  <Eye size={15} style={{ color: 'var(--admin-primary)' }} />
                  <span>Aperçu Réel du Hero sur la Plateforme</span>
                </div>
                <div className="admin-preview-live-indicator">
                  <span className="admin-pulse-dot" />
                  <span>Mise à jour en direct</span>
                </div>
              </div>

              {/* Simulated Hero Screen */}
              <div className="admin-preview-canvas">
                <span className="admin-preview-canvas__tag">
                  {formData.heroMicroSignature || 'TERRES D’ÉMOTIONS'}
                </span>

                <h2 className="admin-preview-canvas__title">
                  {formData.heroTitle || 'Découvre le Maroc'}
                </h2>

                <p className="admin-preview-canvas__subtitle">
                  {formData.heroSubtitle || 'Un royaume. Une histoire. Un voyage.'}
                </p>

                <div className="admin-preview-canvas__quotes">
                  {formData.heroOceanQuote && (
                    <div className="admin-preview-quote-chip">
                      <span>🌊</span>
                      <span>{formData.heroOceanQuote}</span>
                    </div>
                  )}
                  {formData.heroAtlasQuote && (
                    <div className="admin-preview-quote-chip">
                      <span>🏔️</span>
                      <span>{formData.heroAtlasQuote}</span>
                    </div>
                  )}
                </div>

                <div className="admin-preview-canvas__footer">
                  <div className="admin-preview-canvas__visitors">
                    <span className="admin-pulse-dot" />
                    <span>{formData.liveVisitorsCount} voyageurs en direct</span>
                  </div>
                  <div className="admin-preview-canvas__signature">
                    {formData.heroSignature}
                  </div>
                </div>
              </div>

              <div className="admin-preview-card__actions">
                <span>Le rendu ci-dessus s'adapte en temps réel dès votre saisie.</span>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-preview-link-btn"
                >
                  <span>Tester sur le site</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* ===================================================================
          TAB 2: BANDEAU D'ANNONCE & ALERTES
          =================================================================== */}
      {activeTab === 'announcement' && (
        <div className="admin-content-grid">
          <div className="space-y-4">
            <div className="admin-card-section">
              <div className="admin-card-section__header">
                <div className="admin-card-section__lead">
                  <div className="admin-card-section__icon">
                    <Bell size={22} />
                  </div>
                  <div>
                    <h3 className="admin-card-section__title">Bandeau d'Information Général (Top Header)</h3>
                    <p className="admin-card-section__desc">
                      Affichez un message d'alerte, une offre promotionnelle ou une annonce importante tout en haut du site.
                    </p>
                  </div>
                </div>

                {/* Luxury Switch */}
                <label className="admin-toggle-label" title="Activer ou désactiver le bandeau sur le site">
                  <input
                    type="checkbox"
                    checked={formData.announcementActive}
                    onChange={e => handleChange('announcementActive', e.target.checked)}
                    className="admin-toggle-input"
                  />
                  <span className="admin-toggle-slider" />
                  <span className="admin-toggle-text">
                    {formData.announcementActive ? (
                      <span className="text-emerald font-bold">Actif en ligne</span>
                    ) : (
                      <span className="text-secondary">Désactivé</span>
                    )}
                  </span>
                </label>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <span>Texte de l'Annonce</span>
                  <span className="admin-field-badge">Message Diffusé</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.announcementText}
                  onChange={e => handleChange('announcementText', e.target.value)}
                  placeholder="ex. 🌟 Bienvenue sur DécouvreLeMaroc : Découvrez notre nouvelle sélection de riads authentiques !"
                />
                <span className="admin-form-hint">
                  Conseil : un texte court et percutant avec un emoji donne d'excellents résultats d'engagement.
                </span>
              </div>

              <div className="admin-fields-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">Libellé du Bouton (CTA)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.announcementCtaText}
                    onChange={e => handleChange('announcementCtaText', e.target.value)}
                    placeholder="ex. Rejoindre Le Club ou En profiter"
                  />
                  <span className="admin-form-hint">Texte affiché sur la pastille d'action</span>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Lien de Destination (URL)</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.announcementCtaLink}
                    onChange={e => handleChange('announcementCtaLink', e.target.value)}
                    placeholder="ex. /club ou /p/guide-desert-maroc"
                  />
                  <span className="admin-form-hint">Chemin interne ou URL externe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Banner Preview */}
          <aside className="admin-preview-sticky">
            <div className="admin-preview-card">
              <div className="admin-preview-card__header">
                <div className="flex items-center gap-2">
                  <Eye size={15} style={{ color: 'var(--admin-primary)' }} />
                  <span>Aperçu Réel du Bandeau Haut de Page</span>
                </div>
                <span className={`admin-chip ${formData.announcementActive ? 'admin-chip--emerald' : ''}`}>
                  {formData.announcementActive ? 'En ligne' : 'Masqué'}
                </span>
              </div>

              <div style={{ padding: 20 }}>
                <div
                  className={`admin-announcement-preview-box ${
                    formData.announcementActive
                      ? 'admin-announcement-preview-box--active'
                      : 'admin-announcement-preview-box--inactive'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} className="text-terracotta shrink-0" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      {formData.announcementText || 'Aucun texte renseigné pour le moment...'}
                    </span>
                  </div>

                  {formData.announcementCtaText && (
                    <span className="admin-announcement-cta-badge">
                      <span>{formData.announcementCtaText}</span>
                      <span>→</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="admin-preview-card__actions">
                <span>{formData.announcementActive ? 'Visible tout en haut par tous les visiteurs.' : 'Invisible pour les utilisateurs tant qu’il est désactivé.'}</span>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* ===================================================================
          TAB 3: LE CLUB DÉCOUVRELEMAROC
          =================================================================== */}
      {activeTab === 'club' && (
        <div className="space-y-6">
          <div className="admin-card-section">
            <div className="admin-card-section__header">
              <div className="admin-card-section__lead">
                <div className="admin-card-section__icon">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="admin-card-section__title">Programme Privilèges "Le Club"</h3>
                  <p className="admin-card-section__desc">
                    Gérez l'argumentaire, les remises partenaires et les 4 avantages VIP mis en avant pour les voyageurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="admin-fields-row">
              <div className="admin-form-group">
                <label className="admin-form-label">Titre de la Section Club</label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.clubTitle}
                  onChange={e => handleChange('clubTitle', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <span>Pourcentage de Remise Négociée (%)</span>
                  <span className="admin-field-badge admin-field-badge--gold">Avantage Membres</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="admin-form-input"
                    value={formData.clubDiscountPercent}
                    onChange={e => handleChange('clubDiscountPercent', parseInt(e.target.value, 10) || 15)}
                    min={5}
                    max={50}
                  />
                  <span className="text-sm font-bold" style={{ color: 'var(--admin-text-heading)' }}>%</span>
                </div>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Sous-titre et Proposition de Valeur</label>
              <textarea
                rows={2}
                className="admin-form-textarea"
                value={formData.clubSubtitle}
                onChange={e => handleChange('clubSubtitle', e.target.value)}
              />
            </div>
          </div>

          {/* Interactive Editable Perks Cards */}
          <div className="admin-card-section">
            <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
              <div>
                <h4 className="font-bold text-sm" style={{ color: 'var(--admin-text-heading)' }}>
                  Les 4 Avantages Phares du Club (Personnalisables)
                </h4>
                <p className="text-xs text-secondary mt-0.5">
                  Ces cartes sont affichées sur la page Club (/club) et dans les fiches détaillées des riads.
                </p>
              </div>
              <span className="admin-chip admin-chip--amber">4 Avantages Actifs</span>
            </div>

            <div className="admin-perks-grid">
              {formData.clubPerks.map((perk, i) => (
                <div key={i} className="admin-perk-card">
                  <div className="flex items-center justify-between gap-2">
                    <span className="admin-perk-tag">{perk.tag}</span>
                    <span className="text-xs text-secondary">#0{i + 1}</span>
                  </div>

                  <div className="admin-form-group" style={{ marginBottom: 8 }}>
                    <label className="text-xs font-bold text-secondary">Titre de l'avantage</label>
                    <input
                      type="text"
                      className="admin-form-input"
                      value={perk.title}
                      onChange={e => handlePerkChange(i, 'title', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="text-xs font-bold text-secondary">Description</label>
                    <textarea
                      rows={2}
                      className="admin-form-textarea"
                      value={perk.description}
                      onChange={e => handlePerkChange(i, 'description', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 4: CONCIERGERIE & CONTACTS VIP
          =================================================================== */}
      {activeTab === 'contact' && (
        <div className="admin-content-grid">
          <div className="space-y-4">
            <div className="admin-card-section">
              <div className="admin-card-section__header">
                <div className="admin-card-section__lead">
                  <div className="admin-card-section__icon" style={{ background: '#ECFDF5', borderColor: '#A7F3D0', color: '#059669' }}>
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 className="admin-card-section__title">Coordonnées Conciergerie & Support VIP</h3>
                    <p className="admin-card-section__desc">
                      Ces coordonnées alimentent les fiches villes, le footer et le widget de support voyageur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="admin-fields-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <MessageCircle size={14} className="text-emerald" />
                    <span>Ligne WhatsApp Officielle</span>
                    <span className="admin-field-badge admin-field-badge--live">Canal N°1</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.supportWhatsapp}
                    onChange={e => handleChange('supportWhatsapp', e.target.value)}
                    placeholder="+212 661 00 00 00"
                  />
                  <span className="admin-form-hint">Format international recommandé (+212...)</span>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Phone size={14} style={{ color: 'var(--admin-primary)' }} />
                    <span>Téléphone Ligne Directe</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.supportPhone}
                    onChange={e => handleChange('supportPhone', e.target.value)}
                    placeholder="+212 522 00 00 00"
                  />
                  <span className="admin-form-hint">Standard pour appels fixes & conciergerie</span>
                </div>
              </div>

              <div className="admin-fields-row">
                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <Mail size={14} style={{ color: 'var(--admin-amber)' }} />
                    <span>Adresse Email Conciergerie</span>
                  </label>
                  <input
                    type="email"
                    className="admin-form-input"
                    value={formData.supportEmail}
                    onChange={e => handleChange('supportEmail', e.target.value)}
                    placeholder="concierge@decouvrelemaroc.com"
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">
                    <User size={14} style={{ color: 'var(--admin-primary)' }} />
                    <span>Conseiller Référent (Signature)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-form-input"
                    value={formData.supportAdvisorName}
                    onChange={e => handleChange('supportAdvisorName', e.target.value)}
                    placeholder="Mehdi Alaoui"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">
                  <Clock size={14} className="text-secondary" />
                  <span>Plage Horaire d'Assistance</span>
                </label>
                <input
                  type="text"
                  className="admin-form-input"
                  value={formData.supportHours}
                  onChange={e => handleChange('supportHours', e.target.value)}
                  placeholder="7j/7 de 8h00 à 22h00 (Heure de Casablanca)"
                />
              </div>
            </div>
          </div>

          {/* Right: Live Concierge Card Preview */}
          <aside className="admin-preview-sticky">
            <div className="admin-preview-card">
              <div className="admin-preview-card__header">
                <div className="flex items-center gap-2">
                  <Eye size={15} style={{ color: 'var(--admin-primary)' }} />
                  <span>Aperçu de la Carte Conciergerie Voyageurs</span>
                </div>
                <span className="admin-chip admin-chip--emerald">En Ligne 7j/7</span>
              </div>

              <div style={{ padding: 22 }}>
                <div className="admin-concierge-preview">
                  <div className="admin-concierge-header">
                    <div className="flex items-center gap-3">
                      <div className="admin-concierge-avatar">
                        {formData.supportAdvisorName ? formData.supportAdvisorName.charAt(0) : 'M'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
                          {formData.supportAdvisorName || 'Mehdi Alaoui'}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#D4A373' }}>
                          Responsable Conciergerie VIP
                        </div>
                      </div>
                    </div>
                    <span className="admin-pulse-dot" title="Conseiller disponible" />
                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.45, margin: 0 }}>
                    « Notre équipe locale vous accompagne pour vos réservations, transferts et bonnes tables secrètes. »
                  </p>

                  <div className="admin-concierge-channels">
                    <a
                      href={`https://wa.me/${formData.supportWhatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-concierge-pill admin-concierge-pill--whatsapp"
                    >
                      <MessageCircle size={15} />
                      <span className="font-bold">WhatsApp 7j/7</span>
                    </a>

                    <a
                      href={`tel:${formData.supportPhone}`}
                      className="admin-concierge-pill"
                    >
                      <Phone size={15} />
                      <span>{formData.supportPhone || '+212 522 00 00 00'}</span>
                    </a>
                  </div>

                  <div style={{ fontSize: '0.725rem', color: '#94A3B8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 10 }}>
                    ⏰ {formData.supportHours || '7j/7 de 8h00 à 22h00'}
                  </div>
                </div>
              </div>

              <div className="admin-preview-card__actions">
                <span>Intégré automatiquement sur toutes les fiches destinations.</span>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* 05. Sticky Floating Save Bar */}
      <div className="admin-content-save-bar">
        <div className="admin-content-save-bar__note">
          <Check size={16} className="text-emerald" />
          <span>Toute modification enregistrée prend effet immédiatement sur le portail public.</span>
        </div>

        <button
          type="button"
          className="admin-btn-primary"
          onClick={() => handleSave()}
        >
          <Save size={16} />
          <span>Enregistrer les Textes</span>
        </button>
      </div>
    </div>
  );
};

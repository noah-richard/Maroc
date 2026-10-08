import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePartner } from '../context/PartnerContext';
import { PartnerProfilePreviewModal } from '../components/partner/PartnerProfilePreviewModal';
import {
  LayoutDashboard,
  Calendar,
  Sparkles,
  BedDouble,
  DollarSign,
  MessageSquare,
  Star,
  FileCheck2,
  ShieldCheck,
  Eye,
  CheckCircle2,
  Clock,
  Save,
  Send,
  Building,
  ExternalLink,
  Menu,
  X,
  Check
} from 'lucide-react';
import './PartnerDashboardPage.css';

type DashboardTab =
  | 'overview'
  | 'offers'
  | 'bookings'
  | 'calendar'
  | 'messages'
  | 'reviews'
  | 'finance'
  | 'verification';

export const PartnerDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    partner,
    updatePartnerOffer,
    respondToReview,
    updateBookingStatus,
    toggleAvailability,
    toastMessage,
    setToastMessage,
    loginAsDemoPartner
  } = usePartner();

  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Form states for Offer editing
  const [editingPrice, setEditingPrice] = useState(partner?.offer.startingPrice || 1650);
  const [editingTitle, setEditingTitle] = useState(partner?.offer.title || '');
  const [editingDesc, setEditingDesc] = useState(partner?.offer.description || '');

  // Reply review form state
  const [reviewReplyText, setReviewReplyText] = useState<{ [id: string]: string }>({});

  // Message chat input state
  const [newMessageText, setNewMessageText] = useState('');

  useEffect(() => {
    document.title = partner
      ? `Espace Partenaire — ${partner.business.name} | DécouvreLeMaroc`
      : 'Espace Partenaire — DécouvreLeMaroc';
  }, [partner]);

  useEffect(() => {
    if (partner) {
      setEditingPrice(partner.offer.startingPrice);
      setEditingTitle(partner.offer.title);
      setEditingDesc(partner.offer.description);
    }
  }, [partner]);

  if (!partner) {
    return (
      <div className="partner-dash-empty-state">
        <div className="partner-dash-empty-card">
          <Building size={48} className="text-primary mb-3" />
          <h2 className="font-serif text-2xl font-bold text-[#0F2937]">Aucun espace partenaire actif</h2>
          <p className="text-sm text-slate-600 mt-2 mb-6 max-w-md">
            Pour accéder à l'espace de gestion de votre établissement, vous devez d'abord vous inscrire ou charger le profil de démonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="partner-btn-primary"
              onClick={() => navigate('/devenir-partenaire?onboarding=true')}
            >
              Créer mon compte partenaire
            </button>
            <button
              type="button"
              className="partner-btn-secondary"
              onClick={loginAsDemoPartner}
            >
              Charger la démo (Riad Dar El Bacha)
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSaveOffer = (e: React.FormEvent) => {
    e.preventDefault();
    updatePartnerOffer({
      startingPrice: editingPrice,
      title: editingTitle,
      description: editingDesc
    });
  };

  const handleSendReply = (reviewId: string) => {
    const text = reviewReplyText[reviewId];
    if (text && text.trim()) {
      respondToReview(reviewId, text.trim());
      setReviewReplyText(prev => ({ ...prev, [reviewId]: '' }));
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;
    setToastMessage('Votre message a été transmis à la conciergerie DécouvreLeMaroc.');
    setNewMessageText('');
  };

  return (
    <div className="partner-dash-layout">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="partner-dash-toast">
          <Sparkles size={16} className="text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER */}
      <header className="partner-dash-topbar">
        <div className="partner-dash-topbar__left">
          <button
            type="button"
            className="partner-dash-mobile-burger"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            aria-label="Ouvrir le menu de navigation"
          >
            {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="partner-dash-logo">
            <span className="font-serif font-bold text-lg text-primary">DécouvreLeMaroc</span>
            <span className="partner-dash-pro-badge">ESPACE PARTENAIRE</span>
          </Link>

          <div className="partner-dash-establishment-chip hidden md:flex">
            <Building size={14} className="text-primary" />
            <span className="font-bold text-xs text-slate-800">{partner.business.name}</span>
            <span className="text-[11px] text-slate-500">({partner.business.city})</span>
          </div>
        </div>

        <div className="partner-dash-topbar__right">
          {/* Availability Toggle */}
          <button
            type="button"
            className={`partner-dash-avail-btn ${
              partner.offer.isAvailable ? 'partner-dash-avail-btn--on' : 'partner-dash-avail-btn--off'
            }`}
            onClick={toggleAvailability}
            title="Activer ou suspendre les réservations publiques"
          >
            <span className="partner-dash-dot" />
            <span className="hidden sm:inline">
              {partner.offer.isAvailable ? 'En ligne & Réservable' : 'En pause'}
            </span>
          </button>

          {/* Preview Public Profile */}
          <button
            type="button"
            className="partner-dash-preview-btn"
            onClick={() => setIsPreviewOpen(true)}
          >
            <Eye size={15} />
            <span className="hidden sm:inline">Aperçu public</span>
          </button>

          {/* Return to main site */}
          <Link to="/" className="partner-dash-site-link text-xs" title="Retourner au site public">
            <ExternalLink size={14} />
            <span className="hidden md:inline">Voir le site</span>
          </Link>
        </div>
      </header>

      {/* BODY WITH SIDEBAR & CONTENT */}
      <div className="partner-dash-body">
        {/* SIDEBAR NAVIGATION */}
        <aside className={`partner-dash-sidebar ${mobileSidebarOpen ? 'partner-dash-sidebar--open' : ''}`}>
          <div className="partner-dash-sidebar__profile-summary">
            <div className="partner-dash-avatar">
              <img src={partner.media.coverImage} alt={partner.business.name} />
              {partner.verification.status === 'verified' && (
                <div className="partner-dash-avatar-badge" title="Partenaire Vérifié">
                  <ShieldCheck size={12} />
                </div>
              )}
            </div>
            <div>
              <h4 className="partner-dash-profile-name">{partner.business.name}</h4>
              <span className="partner-dash-profile-cat">{partner.business.subCategory}</span>
            </div>
          </div>

          <nav className="partner-dash-nav">
            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'overview' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('overview'); setMobileSidebarOpen(false); }}
            >
              <LayoutDashboard size={18} />
              <span>Tableau de bord</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'offers' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('offers'); setMobileSidebarOpen(false); }}
            >
              <BedDouble size={18} />
              <span>Mes offres & Tarifs</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'bookings' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('bookings'); setMobileSidebarOpen(false); }}
            >
              <Calendar size={18} />
              <span>Réservations reçues</span>
              {partner.bookings.filter(b => b.status === 'pending').length > 0 && (
                <span className="partner-dash-badge-count">
                  {partner.bookings.filter(b => b.status === 'pending').length}
                </span>
              )}
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'calendar' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('calendar'); setMobileSidebarOpen(false); }}
            >
              <Clock size={18} />
              <span>Disponibilités</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'messages' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('messages'); setMobileSidebarOpen(false); }}
            >
              <MessageSquare size={18} />
              <span>Messages & Conciergerie</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'reviews' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('reviews'); setMobileSidebarOpen(false); }}
            >
              <Star size={18} />
              <span>Avis clients & Notes</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'finance' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('finance'); setMobileSidebarOpen(false); }}
            >
              <DollarSign size={18} />
              <span>Finances & Versements</span>
            </button>

            <button
              type="button"
              className={`partner-dash-nav-item ${activeTab === 'verification' ? 'partner-dash-nav-item--active' : ''}`}
              onClick={() => { setActiveTab('verification'); setMobileSidebarOpen(false); }}
            >
              <FileCheck2 size={18} />
              <span>Dossier & Vérification</span>
            </button>
          </nav>

          <div className="partner-dash-sidebar-footer">
            <button
              type="button"
              className="partner-dash-demo-reset-btn"
              onClick={loginAsDemoPartner}
            >
              <span>Réinitialiser démo Dar El Bacha</span>
            </button>
          </div>
        </aside>

        {/* MAIN PANEL CONTENT */}
        <main className="partner-dash-main-panel">
          {/* =========================================================================
             TAB 1 : OVERVIEW / TABLEAU DE BORD
             ========================================================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Header Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="partner-panel-title font-serif">
                    Tableau de bord — {partner.business.name}
                  </h1>
                  <p className="partner-panel-subtitle">
                    Performances de votre établissement et réservations en temps réel.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`partner-status-pill ${
                    partner.verification.status === 'verified'
                      ? 'partner-status-pill--verified'
                      : 'partner-status-pill--pending'
                  }`}>
                    <ShieldCheck size={14} />
                    <span>{partner.verification.status === 'verified' ? 'Établissement Certifié' : 'En cours d’audit'}</span>
                  </span>
                </div>
              </div>

              {/* Completion Score Banner */}
              <div className="partner-completion-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={16} className="text-amber-500" />
                      <strong className="text-sm text-[#0F2937]">Score de visibilité du profil : {partner.stats.completionScore}%</strong>
                    </div>
                    <p className="text-xs text-slate-600 m-0">
                      Un profil complet à 100% inspire davantage confiance et bénéficie d'un meilleur référencement dans les guides régionaux.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="partner-btn-secondary text-xs px-3 py-1.5 shrink-0"
                    onClick={() => setActiveTab('offers')}
                  >
                    Améliorer mon profil
                  </button>
                </div>

                <div className="partner-completion-bar-track mt-3">
                  <div
                    className="partner-completion-bar-fill"
                    style={{ width: `${partner.stats.completionScore}%` }}
                  />
                </div>
              </div>

              {/* KPI Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Vues de la fiche</span>
                  <div className="partner-kpi-value">{partner.stats.viewsCount.toLocaleString('fr-FR')}</div>
                  <span className="partner-kpi-sub">+18% ce mois-ci</span>
                </div>

                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Réservations confirmées</span>
                  <div className="partner-kpi-value">{partner.stats.bookingsCount}</div>
                  <span className="partner-kpi-sub text-emerald-700 font-semibold">Taux d'acceptation 96%</span>
                </div>

                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Volume total généré</span>
                  <div className="partner-kpi-value text-primary font-serif">
                    {partner.financials.totalEarningsMAD.toLocaleString('fr-FR')} MAD
                  </div>
                  <span className="partner-kpi-sub">Avant commission de {partner.financials.commissionRate}%</span>
                </div>

                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Note moyenne voyageurs</span>
                  <div className="partner-kpi-value flex items-center gap-1.5">
                    <Star size={20} fill="#F59E0B" className="text-amber-400" />
                    <span>{partner.stats.rating}</span>
                  </div>
                  <span className="partner-kpi-sub">{partner.stats.reviewsCount} avis certifiés</span>
                </div>
              </div>

              {/* Recent Bookings Preview */}
              <div className="partner-card">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1EBE4]">
                  <div>
                    <h3 className="partner-card__title">Dernières réservations reçues</h3>
                    <p className="partner-card__subtitle">Séjours récents réservés via DécouvreLeMaroc</p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-bold text-primary hover:underline cursor-pointer"
                    onClick={() => setActiveTab('bookings')}
                  >
                    Voir toutes les réservations ({partner.bookings.length}) →
                  </button>
                </div>

                <div className="space-y-3">
                  {partner.bookings.slice(0, 3).map(bk => (
                    <div key={bk.id} className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-sm text-[#0F2937]">{bk.clientName}</strong>
                          <span className="text-[11px] text-slate-500 font-mono">({bk.bookingRef})</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {bk.serviceTitle} • Du <strong>{bk.dateStart}</strong> au <strong>{bk.dateEnd}</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <strong className="block text-sm text-primary">{bk.totalAmountMAD.toLocaleString('fr-FR')} MAD</strong>
                          <span className="text-[11px] text-emerald-700">Net : {bk.netPartnerAmountMAD.toLocaleString('fr-FR')} MAD</span>
                        </div>
                        <span className={`partner-booking-status-badge partner-booking-status-badge--${bk.status}`}>
                          {bk.status === 'confirmed' ? 'Confirmée' : bk.status === 'pending' ? 'En attente' : 'Terminée'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 2 : OFFRES & TARIFS
             ========================================================================= */}
          {activeTab === 'offers' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Mes Offres & Tarification Directe</h1>
                <p className="partner-panel-subtitle">
                  Ajustez vos prestations, tarifs par nuit et équipements affichés aux voyageurs.
                </p>
              </div>

              <form onSubmit={handleSaveOffer} className="partner-card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="partner-field md:col-span-2">
                    <label>Intitulé commercial de l'offre *</label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={e => setEditingTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="partner-field">
                    <label>Tarif public de départ (en MAD) *</label>
                    <input
                      type="number"
                      step="50"
                      value={editingPrice}
                      onChange={e => setEditingPrice(parseInt(e.target.value, 10) || 0)}
                      required
                    />
                    <small>Commission DécouvreLeMaroc appliquée : {partner.financials.commissionRate}%</small>
                  </div>

                  <div className="partner-field">
                    <label>Unité de facturation</label>
                    <input
                      type="text"
                      value={partner.offer.priceUnit}
                      disabled
                      className="bg-slate-50 cursor-not-allowed"
                    />
                  </div>

                  <div className="partner-field md:col-span-2">
                    <label>Description publique complète de l'offre *</label>
                    <textarea
                      rows={5}
                      value={editingDesc}
                      onChange={e => setEditingDesc(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1EBE4] flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Modifications sauvegardées automatiquement dans votre profil.
                  </span>

                  <button type="submit" className="partner-btn-primary">
                    <Save size={16} />
                    <span>Enregistrer les modifications</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* =========================================================================
             TAB 3 : RÉSERVATIONS REÇUES
             ========================================================================= */}
          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Réservations Reçues & Clients</h1>
                <p className="partner-panel-subtitle">
                  Suivez les demandes des voyageurs, acceptez ou refusez les séjours selon vos disponibilités.
                </p>
              </div>

              <div className="partner-card">
                <div className="overflow-x-auto">
                  <table className="partner-table">
                    <thead>
                      <tr>
                        <th>Réf & Voyageur</th>
                        <th>Dates du séjour</th>
                        <th>Prestation</th>
                        <th>Total brut</th>
                        <th>Commission DLM</th>
                        <th>Net Partenaire</th>
                        <th>Statut</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partner.bookings.map(bk => (
                        <tr key={bk.id}>
                          <td>
                            <strong className="text-xs text-[#0F2937] block">{bk.clientName}</strong>
                            <span className="text-[11px] text-slate-500 font-mono">{bk.bookingRef}</span>
                          </td>
                          <td>
                            <span className="text-xs text-slate-700 block">{bk.dateStart}</span>
                            <span className="text-[11px] text-slate-500">au {bk.dateEnd} ({bk.guestsCount} pers.)</span>
                          </td>
                          <td>
                            <span className="text-xs text-slate-700 line-clamp-1">{bk.serviceTitle}</span>
                          </td>
                          <td>
                            <strong className="text-xs text-slate-900">{bk.totalAmountMAD.toLocaleString('fr-FR')} MAD</strong>
                          </td>
                          <td>
                            <span className="text-xs text-slate-500">{bk.commissionAmountMAD} MAD ({bk.commissionRate}%)</span>
                          </td>
                          <td>
                            <strong className="text-xs text-emerald-700">{bk.netPartnerAmountMAD.toLocaleString('fr-FR')} MAD</strong>
                          </td>
                          <td>
                            <span className={`partner-booking-status-badge partner-booking-status-badge--${bk.status}`}>
                              {bk.status === 'confirmed' ? 'Confirmée' : bk.status === 'pending' ? 'En attente' : bk.status === 'completed' ? 'Terminée' : 'Annulée'}
                            </span>
                          </td>
                          <td className="text-right">
                            {bk.status === 'pending' ? (
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-all"
                                  onClick={() => updateBookingStatus(bk.id, 'confirmed')}
                                >
                                  Confirmer
                                </button>
                                <button
                                  type="button"
                                  className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded text-xs font-bold transition-all"
                                  onClick={() => updateBookingStatus(bk.id, 'cancelled')}
                                >
                                  Refuser
                                </button>
                              </div>
                            ) : (
                              <span className="text-xs text-slate-400">Gérée</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 4 : CALENDRIER & DISPONIBILITÉS
             ========================================================================= */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Gestion du Calendrier & Disponibilités</h1>
                <p className="partner-panel-subtitle">
                  Bloquez des dates indisponibles ou fermez l'établissement pour congés ou rénovations.
                </p>
              </div>

              <div className="partner-card">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <div className="text-xs text-emerald-900">
                      <strong>Synchronisation temps réel active :</strong> Les réservations confirmées bloquent automatiquement les chambres dans le moteur de recherche.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="partner-btn-secondary text-xs"
                    onClick={() => setToastMessage('Calendrier synchronisé avec succès.')}
                  >
                    Actualiser
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl">
                    <span className="font-bold text-slate-800 block mb-1">Semaine en cours</span>
                    <span className="text-emerald-700 font-semibold">4 suites occupées / 7 disponibles</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl">
                    <span className="font-bold text-slate-800 block mb-1">Week-end prochain</span>
                    <span className="text-amber-700 font-semibold">Taux de remplissage 85%</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl">
                    <span className="font-bold text-slate-800 block mb-1">Période des Fêtes (Décembre)</span>
                    <span className="text-slate-600">Tarif haute saison activé</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 5 : MESSAGES & CONCIERGERIE
             ========================================================================= */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Messagerie & Conciergerie DLM</h1>
                <p className="partner-panel-subtitle">
                  Échangez directement avec vos voyageurs et les coordinateurs DécouvreLeMaroc.
                </p>
              </div>

              <div className="partner-card">
                <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
                  {partner.messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`p-3.5 rounded-xl border ${
                        msg.sender === 'partner'
                          ? 'bg-[#FFF9F8] border-[#F2D7D2] ml-8'
                          : msg.sender === 'concierge'
                          ? 'bg-[#F0FDF4] border-[#BBF7D0] mr-8'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] mr-8'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <strong className="text-slate-900">{msg.senderName}</strong>
                        <span className="text-[11px] text-slate-400">{msg.timestamp}</span>
                      </div>
                      <p className="text-xs text-slate-700 m-0 leading-relaxed">{msg.content}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2 pt-3 border-t border-[#F1EBE4]">
                  <input
                    type="text"
                    className="partner-chat-input"
                    placeholder="Écrivez votre message à la conciergerie ou au voyageur..."
                    value={newMessageText}
                    onChange={e => setNewMessageText(e.target.value)}
                  />
                  <button type="submit" className="partner-btn-primary shrink-0">
                    <Send size={15} />
                    <span>Envoyer</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 6 : AVIS CLIENTS & RÉPUTATION
             ========================================================================= */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Avis Clients & Réputation</h1>
                <p className="partner-panel-subtitle">
                  Consultez les commentaires vérifiés de vos voyageurs et publiez vos réponses officielles.
                </p>
              </div>

              <div className="space-y-4">
                {partner.reviews.map(rev => (
                  <div key={rev.id} className="partner-card">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <strong className="text-sm text-[#0F2937] block">{rev.clientName}</strong>
                        <span className="text-xs text-slate-500">Voyageur ({rev.clientCountry}) • {rev.serviceTitle} • {rev.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-xs font-bold text-amber-800">
                        <Star size={13} fill="#F59E0B" />
                        <span>{rev.rating}/5</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed italic bg-[#FAF8F5] p-3 rounded-lg border border-[#F1EBE4] mb-3">
                      « {rev.comment} »
                    </p>

                    {rev.partnerReply ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs">
                        <strong className="text-emerald-900 block mb-0.5">Votre réponse officielle ({rev.replyDate}) :</strong>
                        <p className="text-emerald-800 m-0">{rev.partnerReply}</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <textarea
                          rows={2}
                          className="w-full text-xs p-2.5 border border-[#D5CBC0] rounded-lg"
                          placeholder="Rédigez votre réponse publique à cet avis..."
                          value={reviewReplyText[rev.id] || ''}
                          onChange={e => setReviewReplyText({ ...reviewReplyText, [rev.id]: e.target.value })}
                        />
                        <button
                          type="button"
                          className="partner-btn-secondary text-xs"
                          onClick={() => handleSendReply(rev.id)}
                        >
                          Publier ma réponse
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 7 : FINANCES & RELEVÉS DE VERSEMENTS
             ========================================================================= */}
          {activeTab === 'finance' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Finances, Commissions & Versements</h1>
                <p className="partner-panel-subtitle">
                  Transparence totale sur vos flux financiers, déduction des commissions et versements bancaires.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Revenus bruts cumulés</span>
                  <div className="partner-kpi-value text-primary font-serif">
                    {partner.financials.totalEarningsMAD.toLocaleString('fr-FR')} MAD
                  </div>
                  <span className="partner-kpi-sub">Depuis votre accréditation</span>
                </div>

                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">Commission DécouvreLeMaroc</span>
                  <div className="partner-kpi-value">
                    {partner.financials.commissionRate}%
                  </div>
                  <span className="partner-kpi-sub">Barème contractuel net</span>
                </div>

                <div className="partner-kpi-card">
                  <span className="partner-kpi-label">En attente de versement</span>
                  <div className="partner-kpi-value text-emerald-700">
                    {partner.financials.pendingPayoutMAD.toLocaleString('fr-FR')} MAD
                  </div>
                  <span className="partner-kpi-sub">Prochain virement : 15 Octobre 2025</span>
                </div>
              </div>

              <div className="partner-card">
                <h3 className="partner-card__title">Coordonnées bancaires enregistrées pour les versements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg">
                    <span className="text-slate-500 block">Banque réceptrice</span>
                    <strong className="text-slate-800 text-sm">{partner.financials.bankName}</strong>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg">
                    <span className="text-slate-500 block">Titulaire du compte</span>
                    <strong className="text-slate-800 text-sm">{partner.financials.accountHolder}</strong>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg md:col-span-2">
                    <span className="text-slate-500 block">Relevé d'Identité Bancaire (RIB marocain)</span>
                    <strong className="text-slate-800 font-mono text-sm">{partner.financials.rib}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
             TAB 8 : DOSSIER & VÉRIFICATION
             ========================================================================= */}
          {activeTab === 'verification' && (
            <div className="space-y-6">
              <div>
                <h1 className="partner-panel-title font-serif">Dossier Juridique & Vérification DLM</h1>
                <p className="partner-panel-subtitle">
                  Suivi de votre conformité et attribution du badge officiel « Partenaire Vérifié ».
                </p>
              </div>

              <div className="partner-card">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-4 flex items-center gap-3">
                  <ShieldCheck size={24} className="text-emerald-700 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-emerald-950">Statut : Établissement Certifié Actif</h4>
                    <p className="text-xs text-emerald-800 m-0">
                      {partner.verification.reviewerFeedback}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800 block">Identité du Responsable (CIN / Passeport)</strong>
                      <span className="text-slate-500">{partner.account.firstName} {partner.account.lastName}</span>
                    </div>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check size={14} /> Conforme
                    </span>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800 block">Registre du Commerce (RC) & ICE</strong>
                      <span className="text-slate-500">{partner.business.rcNumber} • ICE : {partner.business.iceNumber}</span>
                    </div>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check size={14} /> Conforme
                    </span>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex items-center justify-between">
                    <div>
                      <strong className="text-slate-800 block">Agrément Touristique / Classement Maison d'Hôtes</strong>
                      <span className="text-slate-500">Patente n° {partner.business.patenteNumber || '35910244'}</span>
                    </div>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check size={14} /> Conforme
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* PUBLIC PREVIEW MODAL */}
      <PartnerProfilePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        profile={partner}
      />
    </div>
  );
};

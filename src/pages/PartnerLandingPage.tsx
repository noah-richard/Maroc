import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { usePartner } from '../context/PartnerContext';
import { PARTNER_CATEGORIES } from '../types/partner';
import { PartnerProfilePreviewModal } from '../components/partner/PartnerProfilePreviewModal';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Eye,
  TrendingUp,
  Camera,
  ShieldCheck,
  Star,
  Calendar,
  Save,
  Check
} from 'lucide-react';
import './PartnerLandingPage.css';

export const PartnerLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    partner,
    onboardingDraft,
    updateDraft,
    submitOnboarding,
    toastMessage,
    setToastMessage,
    loginAsDemoPartner
  } = usePartner();

  // Wizard state (is wizard active or are we on landing presentation?)
  const [isWizardOpen, setIsWizardOpen] = useState(() => {
    return searchParams.get('onboarding') === 'true' || searchParams.has('step');
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    const s = parseInt(searchParams.get('step') || '1', 10);
    return isNaN(s) || s < 1 || s > 6 ? 1 : s;
  });

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  useEffect(() => {
    document.title = isWizardOpen
      ? `Inscription Partenaire (Étape ${currentStep}/6) — DécouvreLeMaroc`
      : 'Devenir Partenaire Officiel — Développez Votre Activité avec DécouvreLeMaroc';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isWizardOpen, currentStep]);

  // Sync step changes to URL query
  const goToStep = (step: number) => {
    setCurrentStep(step);
    setSearchParams({ onboarding: 'true', step: step.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startOnboarding = () => {
    setIsWizardOpen(true);
    goToStep(1);
  };

  const closeWizardToLanding = () => {
    setIsWizardOpen(false);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveAndExit = () => {
    setToastMessage('💾 Brouillon sauvegardé avec succès ! Vous pourrez reprendre votre inscription à tout moment.');
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitOnboarding();
    navigate('/partner/dashboard');
  };

  // Compute completion progress percentage
  const getProgressPercentage = () => {
    switch (currentStep) {
      case 1: return 16;
      case 2: return 33;
      case 3: return 50;
      case 4: return 68;
      case 5: return 84;
      case 6: return 100;
      default: return 16;
    }
  };

  // Current category info
  const activeCategoryInfo = PARTNER_CATEGORIES.find(c => c.id === onboardingDraft.category) || PARTNER_CATEGORIES[0];

  return (
    <div className="partner-landing-layout">
      {/* Universal Navigation */}
      <Navbar variant="full" />

      {/* Toast Floating Alert */}
      {toastMessage && (
        <div className="partner-floating-toast">
          <Sparkles size={16} className="text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {!isWizardOpen ? (
        /* =========================================================================
           MODE 1: LANDING PAGE DE PRÉSENTATION DE LA PROPOSITION DE VALEUR
           ========================================================================= */
        <main className="partner-landing-main">
          {/* HERO SECTION */}
          <section className="partner-hero">
            <div className="partner-hero__container">
              <div className="partner-hero__text-col">
                <div className="partner-hero__badge">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Portail Professionnel & Hospitalité Marocaine</span>
                </div>

                <h1 className="partner-hero__title font-serif">
                  Développez votre activité avec <span>Découvre Le Maroc</span>
                </h1>

                <p className="partner-hero__subtitle">
                  Présentez votre établissement, vos services ou vos expériences à des voyageurs du monde entier à la recherche de nouvelles façons de découvrir le Royaume.
                </p>

                <div className="partner-hero__cta-group">
                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={startOnboarding}
                  >
                    <span>Commencer gratuitement</span>
                    <ArrowRight size={16} />
                  </button>

                  <a href="#comment-ca-marche" className="partner-btn-secondary">
                    <span>Comment ça marche ?</span>
                  </a>
                </div>

                <div className="partner-hero__guarantees">
                  <div className="partner-hero__guarantee-item">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>0 MAD de frais d'inscription</span>
                  </div>
                  <div className="partner-hero__guarantee-item">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Commission au succès uniquement</span>
                  </div>
                  <div className="partner-hero__guarantee-item">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Validation sous 24 à 48h</span>
                  </div>
                </div>

                {/* Demo shortcut */}
                {partner ? (
                  <div className="partner-hero__existing-box">
                    <span className="text-xs text-slate-500">Déjà inscrit ?</span>
                    <button
                      type="button"
                      className="text-xs font-bold text-primary underline hover:text-[#B54231] cursor-pointer ml-1"
                      onClick={() => navigate('/partner/dashboard')}
                    >
                      Accéder à mon Espace Partenaire ({partner.business.name}) →
                    </button>
                  </div>
                ) : (
                  <div className="partner-hero__existing-box">
                    <span className="text-xs text-slate-500">Déjà inscrit ?</span>
                    <button
                      type="button"
                      className="text-xs font-bold text-primary underline hover:text-[#B54231] cursor-pointer ml-1"
                      onClick={() => {
                        loginAsDemoPartner();
                        navigate('/partner/dashboard');
                      }}
                    >
                      Connexion Espace Partenaire (Démo Pro) →
                    </button>
                  </div>
                )}
              </div>

              {/* Hero Visual Collage */}
              <div className="partner-hero__visual-col">
                <div className="partner-hero__card-mosaic">
                  <div className="partner-mosaic-item partner-mosaic-item--main">
                    <img
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80"
                      alt="Riad de luxe à Marrakech"
                    />
                    <div className="partner-mosaic-badge">
                      <span className="font-serif font-bold text-sm">Riad Dar El Bacha</span>
                      <span className="text-[11px] text-amber-300">⭐ 4.9 (34 avis) • Marrakech</span>
                    </div>
                  </div>

                  <div className="partner-mosaic-item partner-mosaic-item--secondary">
                    <img
                      src="https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=800&auto=format&fit=crop&q=80"
                      alt="Bivouac dans le désert"
                    />
                    <div className="partner-mosaic-badge">
                      <span className="font-bold text-xs">Excursion Désert Merzouga</span>
                      <span className="text-[10px] text-slate-300">Expérience certifiée</span>
                    </div>
                  </div>

                  <div className="partner-mosaic-floating-stat">
                    <div className="partner-floating-icon">
                      <TrendingUp size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <strong className="block text-sm text-[#0F2937]">+32% de réservations</strong>
                      <span className="text-[11px] text-slate-500">Moyenne constatée après vérification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION : POURQUOI DEVENIR PARTENAIRE (6 AVANTAGES) */}
          <section className="partner-section partner-section--light" id="pourquoi-devenir-partenaire">
            <div className="partner-container">
              <div className="partner-section-header text-center">
                <span className="partner-section-tag">Avantages Professionnels</span>
                <h2 className="partner-section-title font-serif">
                  Pourquoi référencer votre activité sur Découvre Le Maroc ?
                </h2>
                <p className="partner-section-subtitle">
                  Une suite complète d’outils conçue spécifiquement pour les professionnels de l'hospitalité et du tourisme marocain.
                </p>
              </div>

              <div className="partner-benefits-grid">
                {/* 01 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">01</div>
                  <div className="partner-benefit-icon">
                    <Eye size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Soyez visible</h3>
                  <p className="partner-benefit-desc">
                    Présentez votre activité à une audience qualifiée de voyageurs qui prépare ou réalise son séjour au Maroc avec nos guides et recommandations.
                  </p>
                </div>

                {/* 02 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">02</div>
                  <div className="partner-benefit-icon">
                    <Calendar size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Recevez des réservations</h3>
                  <p className="partner-benefit-desc">
                    Gérez vos disponibilités en temps réel et recevez des réservations confirmées directement depuis votre tableau de bord partenaire.
                  </p>
                </div>

                {/* 03 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">03</div>
                  <div className="partner-benefit-icon">
                    <Camera size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Présentez votre univers</h3>
                  <p className="partner-benefit-desc">
                    Photos haute résolution, descriptions d'ambiance, prestations, tarifs, horaires, équipements et informations d'accès détaillées.
                  </p>
                </div>

                {/* 04 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">04</div>
                  <div className="partner-benefit-icon">
                    <Star size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Développez votre réputation</h3>
                  <p className="partner-benefit-desc">
                    Collectez des avis vérifiés et authentiques après chaque séjour ou expérience réalisée, et répondez directement à vos clients.
                  </p>
                </div>

                {/* 05 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">05</div>
                  <div className="partner-benefit-icon">
                    <TrendingUp size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Pilotez votre activité</h3>
                  <p className="partner-benefit-desc">
                    Suivez vos vues, taux de conversion, calendrier des arrivées, revenus nets et performances financières depuis votre espace privé.
                  </p>
                </div>

                {/* 06 */}
                <div className="partner-benefit-card">
                  <div className="partner-benefit-num">06</div>
                  <div className="partner-benefit-icon">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="partner-benefit-title">Développez votre visibilité</h3>
                  <p className="partner-benefit-desc">
                    Accédez aux mises en avant privilégiées du Club DécouvreLeMaroc et aux campagnes promotionnelles sponsorisées.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION : COMMENT ÇA MARCHE (4 ÉTAPES) */}
          <section className="partner-section" id="comment-ca-marche">
            <div className="partner-container">
              <div className="partner-section-header text-center">
                <span className="partner-section-tag">Processus d'Accréditation</span>
                <h2 className="partner-section-title font-serif">
                  Un onboarding simple en 4 étapes
                </h2>
                <p className="partner-section-subtitle">
                  De la création de votre fiche à l'accueil de vos premiers voyageurs.
                </p>
              </div>

              <div className="partner-steps-grid">
                <div className="partner-step-card">
                  <div className="partner-step-badge">1</div>
                  <h3 className="partner-step-title">Inscrivez-vous</h3>
                  <p className="partner-step-desc">
                    Créez votre compte professionnel et choisissez la catégorie adaptée à votre métier.
                  </p>
                </div>

                <div className="partner-step-card">
                  <div className="partner-step-badge">2</div>
                  <h3 className="partner-step-title">Présentez votre activité</h3>
                  <p className="partner-step-desc">
                    Ajoutez vos informations pratiques, photos, offres, tarifs officiels et disponibilités.
                  </p>
                </div>

                <div className="partner-step-card">
                  <div className="partner-step-badge">3</div>
                  <h3 className="partner-step-title">Faites vérifier votre activité</h3>
                  <p className="partner-step-desc">
                    Découvre Le Maroc audite la conformité juridique et vous attribue le badge « Partenaire Vérifié ».
                  </p>
                </div>

                <div className="partner-step-card">
                  <div className="partner-step-badge">4</div>
                  <h3 className="partner-step-title">Recevez des voyageurs</h3>
                  <p className="partner-step-desc">
                    Votre profil est publié sur le portail public et commence à recevoir des réservations directes.
                  </p>
                </div>
              </div>

              <div className="partner-steps-cta text-center">
                <button
                  type="button"
                  className="partner-btn-primary mx-auto"
                  onClick={startOnboarding}
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION : MODÈLE ÉTHIQUE & COMMISSION TRANSPARENTE */}
          <section className="partner-section partner-section--light">
            <div className="partner-container">
              <div className="partner-commission-box">
                <div className="partner-commission-text">
                  <span className="partner-section-tag">Transparence Totale</span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F2937] mb-3">
                    Un modèle de rémunération 100% au succès
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Chez DécouvreLeMaroc, nous croyons à un partenariat équitable. Aucun droit d’entrée, aucun abonnement mensuel caché : vous ne réglez une commission raisonnable que lorsque nous vous apportons un client effectif.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <strong>Hébergements (Riads & Hôtels) :</strong> 10% à 12% par séjour réservé
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <strong>Activités & Excursions Désert :</strong> 12% à 15% par expérience
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <strong>Restaurants & Tables d'hôtes :</strong> 10% par réservation confirmée
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" />
                      <strong>Guides & Transports :</strong> 10% à 12% par prestation
                    </li>
                  </ul>
                </div>

                <div className="partner-commission-card">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">
                    Exemple de versement
                  </div>
                  <div className="text-2xl font-bold text-primary font-serif mb-4">
                    Réservation : 2 000 MAD
                  </div>
                  <div className="space-y-2 text-xs border-t border-b border-[#E8E2D9] py-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Commission DLM (12%) :</span>
                      <span className="font-bold text-slate-700">- 240 MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Frais bancaires ou d'encaissement :</span>
                      <span className="font-bold text-emerald-700">0 MAD (Inclus)</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-1 text-slate-900">
                      <span>Montant net versé au partenaire :</span>
                      <span className="text-emerald-700">1 760 MAD</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 m-0">
                    Versements automatisés par virement bancaire sur votre compte marocain sous 48h après la fin du séjour.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ PARTENAIRES */}
          <section className="partner-section">
            <div className="partner-container partner-container--narrow">
              <div className="partner-section-header text-center">
                <span className="partner-section-tag">Questions Fréquentes</span>
                <h2 className="partner-section-title font-serif">
                  Foire Aux Questions Partenaires
                </h2>
              </div>

              <div className="partner-faq-list">
                <div className="partner-faq-item">
                  <h4 className="partner-faq-q">Comment mon établissement est-il vérifié ?</h4>
                  <p className="partner-faq-a">
                    Après la soumission de votre dossier, nos correspondants régionaux à Casablanca, Marrakech, Fès ou Tanger examinent vos informations (RC, patente, agrément ministériel pour les guides) et s'assurent de la conformité de votre offre.
                  </p>
                </div>

                <div className="partner-faq-item">
                  <h4 className="partner-faq-q">Puis-je modifier mes tarifs et disponibilités à tout moment ?</h4>
                  <p className="partner-faq-a">
                    Oui, absolument. Votre espace partenaire vous permet de fermer des dates en temps réel, de bloquer des chambres ou d'ajuster vos tarifs en haute ou basse saison en un clic.
                  </p>
                </div>

                <div className="partner-faq-item">
                  <h4 className="partner-faq-q">Que se passe-t-il si un voyageur annule ?</h4>
                  <p className="partner-faq-a">
                    Vous choisissez votre politique d'annulation (flexible, modérée ou stricte). En cas d'annulation tardive par le client hors délais autorisés, vous êtes indemnisé conformément aux conditions convenues.
                  </p>
                </div>
              </div>

              <div className="text-center mt-10">
                <button
                  type="button"
                  className="partner-btn-primary mx-auto"
                  onClick={startOnboarding}
                >
                  <span>Créer mon profil partenaire dès maintenant</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* =========================================================================
           MODE 2: ONBOARDING PROGRESSIF (WIZARD MULTI-ÉTAPES EN 6 PHASES)
           ========================================================================= */
        <main className="partner-wizard-main">
          {/* Wizard Top Control Bar */}
          <div className="partner-wizard-bar">
            <div className="partner-wizard-bar__container">
              <button
                type="button"
                className="partner-wizard-back-btn"
                onClick={currentStep === 1 ? closeWizardToLanding : () => goToStep(currentStep - 1)}
              >
                <ArrowLeft size={16} />
                <span>{currentStep === 1 ? 'Retour à la présentation' : 'Étape précédente'}</span>
              </button>

              <div className="partner-wizard-bar__middle">
                <div className="partner-wizard-step-label">
                  <strong>Étape {currentStep} sur 6 :</strong>{' '}
                  {currentStep === 1 && 'Votre activité'}
                  {currentStep === 2 && 'Votre entreprise & contact'}
                  {currentStep === 3 && 'Votre offre & tarification'}
                  {currentStep === 4 && 'Photos & présentation'}
                  {currentStep === 5 && 'Justificatifs & vérification'}
                  {currentStep === 6 && 'Commission & finalisation'}
                </div>
                <div className="partner-wizard-progress-track">
                  <div
                    className="partner-wizard-progress-fill"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
                <span className="partner-wizard-pct">{getProgressPercentage()}% complété</span>
              </div>

              <div className="partner-wizard-bar__actions">
                <button
                  type="button"
                  className="partner-btn-ghost text-xs"
                  onClick={handleSaveAndExit}
                  title="Sauvegarder pour plus tard"
                >
                  <Save size={14} />
                  <span>Sauvegarder</span>
                </button>

                <button
                  type="button"
                  className="partner-btn-preview text-xs"
                  onClick={() => setIsPreviewModalOpen(true)}
                  title="Aperçu voyageur"
                >
                  <Eye size={14} />
                  <span>Prévisualiser mon profil</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form Content Wrapper */}
          <div className="partner-wizard-content-container">
            {/* =========================================================================
               ÉTAPE 1 : CHOIX DU TYPE D'ACTIVITÉ
               ========================================================================= */}
            {currentStep === 1 && (
              <div className="partner-wizard-step-box">
                <div className="partner-step-intro text-center">
                  <span className="partner-section-tag">Étape 1 sur 6</span>
                  <h2 className="partner-step-heading font-serif">
                    Quel type d'activité souhaitez-vous proposer ?
                  </h2>
                  <p className="partner-step-subheading">
                    Cette information nous permettra de personnaliser votre espace partenaire et les champs de votre offre.
                  </p>
                </div>

                <div className="partner-category-grid">
                  {PARTNER_CATEGORIES.map(cat => (
                    <div
                      key={cat.id}
                      className={`partner-category-card ${
                        onboardingDraft.category === cat.id ? 'partner-category-card--selected' : ''
                      }`}
                      onClick={() => updateDraft({ category: cat.id })}
                    >
                      <div className="partner-category-card__header">
                        <span className="partner-category-badge">{cat.badge}</span>
                        {onboardingDraft.category === cat.id && (
                          <div className="partner-category-checked">
                            <Check size={14} />
                          </div>
                        )}
                      </div>

                      <h3 className="partner-category-title">{cat.label}</h3>
                      <p className="partner-category-desc">{cat.subtitle}</p>
                      <div className="partner-category-examples">
                        <strong>Exemples :</strong> {cat.examples}
                      </div>

                      <div className="partner-category-commission-hint">
                        Commission moyenne : {cat.defaultCommission}% au succès
                      </div>
                    </div>
                  ))}
                </div>

                <div className="partner-wizard-nav-footer">
                  <div className="text-xs text-slate-500">
                    Sélection actuelle : <strong className="text-slate-800">{activeCategoryInfo.label}</strong>
                  </div>
                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => goToStep(2)}
                  >
                    <span>Continuer vers vos coordonnées</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
               ÉTAPE 2 : INFORMATIONS ENTREPRISE & RESPONSABLE
               ========================================================================= */}
            {currentStep === 2 && (
              <div className="partner-wizard-step-box">
                <div className="partner-step-intro">
                  <span className="partner-section-tag">Étape 2 sur 6</span>
                  <h2 className="partner-step-heading font-serif">
                    Votre Entreprise & Coordonnées du Responsable
                  </h2>
                  <p className="partner-step-subheading">
                    Ces informations permettent d'établir votre contrat partenaire et de sécuriser vos accès. Les documents légaux restent strictement confidentiels.
                  </p>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">1. Responsable du compte</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="partner-field">
                      <label>Prénom du responsable *</label>
                      <input
                        type="text"
                        placeholder="ex. Tarik"
                        value={onboardingDraft.firstName}
                        onChange={e => updateDraft({ firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="partner-field">
                      <label>Nom de famille *</label>
                      <input
                        type="text"
                        placeholder="ex. El Mansouri"
                        value={onboardingDraft.lastName}
                        onChange={e => updateDraft({ lastName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="partner-field">
                      <label>Email professionnel *</label>
                      <input
                        type="email"
                        placeholder="ex. contact@etablissement.com"
                        value={onboardingDraft.email}
                        onChange={e => updateDraft({ email: e.target.value })}
                        required
                      />
                      <small>Sert d'identifiant de connexion à votre espace partenaire</small>
                    </div>
                    <div className="partner-field">
                      <label>Téléphone professionnel / WhatsApp *</label>
                      <input
                        type="tel"
                        placeholder="+212 661 00 00 00"
                        value={onboardingDraft.phone}
                        onChange={e => updateDraft({ phone: e.target.value })}
                        required
                      />
                      <small>Pour les notifications urgentes de réservations</small>
                    </div>
                  </div>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">2. Identité de l'établissement / Entreprise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="partner-field">
                      <label>Nom commercial affiché au public *</label>
                      <input
                        type="text"
                        placeholder="ex. Riad Dar El Bacha Marrakech"
                        value={onboardingDraft.businessName}
                        onChange={e => updateDraft({ businessName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="partner-field">
                      <label>Raison sociale légale (SARL, Auto-entrepreneur, etc.)</label>
                      <input
                        type="text"
                        placeholder="ex. Dar El Bacha Hospitality SARL"
                        value={onboardingDraft.legalName}
                        onChange={e => updateDraft({ legalName: e.target.value })}
                      />
                    </div>
                    <div className="partner-field">
                      <label>Ville principale d'activité *</label>
                      <select
                        value={onboardingDraft.city}
                        onChange={e => updateDraft({ city: e.target.value })}
                      >
                        <option value="Marrakech">Marrakech</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Fès">Fès</option>
                        <option value="Tanger">Tanger</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Ouarzazate">Ouarzazate & Merzouga (Désert)</option>
                        <option value="Essaouira">Essaouira</option>
                        <option value="Chefchaouen">Chefchaouen</option>
                        <option value="Dakhla">Dakhla</option>
                        <option value="Meknès">Meknès</option>
                        <option value="Autre région">Autre région du Maroc</option>
                      </select>
                    </div>
                    <div className="partner-field">
                      <label>Adresse complète / Quartier</label>
                      <input
                        type="text"
                        placeholder="ex. 18 Rue Lalla Fatima, Médina historique"
                        value={onboardingDraft.address}
                        onChange={e => updateDraft({ address: e.target.value })}
                      />
                    </div>
                    <div className="partner-field">
                      <label>Numéro ICE (Identifiant Commun de l'Entreprise)</label>
                      <input
                        type="text"
                        placeholder="ex. 002491823000084"
                        value={onboardingDraft.iceNumber}
                        onChange={e => updateDraft({ iceNumber: e.target.value })}
                      />
                    </div>
                    <div className="partner-field">
                      <label>Numéro Registre du Commerce (RC)</label>
                      <input
                        type="text"
                        placeholder="ex. Marrakech 72190"
                        value={onboardingDraft.rcNumber}
                        onChange={e => updateDraft({ rcNumber: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="partner-wizard-nav-footer">
                  <button
                    type="button"
                    className="partner-btn-secondary"
                    onClick={() => goToStep(1)}
                  >
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => goToStep(3)}
                  >
                    <span>Continuer vers votre offre</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
               ÉTAPE 3 : OFFRE & TARIFICATION (CONDITIONNEL SELON CATÉGORIE)
               ========================================================================= */}
            {currentStep === 3 && (
              <div className="partner-wizard-step-box">
                <div className="partner-step-intro">
                  <span className="partner-section-tag">Étape 3 sur 6</span>
                  <h2 className="partner-step-heading font-serif">
                    Votre Offre, Prestations & Tarification
                  </h2>
                  <p className="partner-step-subheading">
                    Champs configurés spécialement pour votre catégorie : <strong>{activeCategoryInfo.label}</strong>.
                  </p>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">Détails de l'expérience proposée</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="partner-field md:col-span-2">
                      <label>Titre de votre offre principale *</label>
                      <input
                        type="text"
                        placeholder={
                          onboardingDraft.category === 'accommodation'
                            ? 'ex. Suite Royale avec Patio Andalou & Piscine Chauffée'
                            : onboardingDraft.category === 'restaurant'
                            ? 'ex. Menu Dégustation Gastronomique Fassie & Vins Marocains'
                            : onboardingDraft.category === 'guide'
                            ? 'ex. Immersion Historique Privée dans la Médina Médiévale'
                            : 'ex. Traversée des Dunes en 4x4 et Bivouac sous les Étoiles'
                        }
                        value={onboardingDraft.offerTitle}
                        onChange={e => updateDraft({ offerTitle: e.target.value })}
                        required
                      />
                    </div>

                    <div className="partner-field md:col-span-2">
                      <label>Accroche incitative (une phrase courte)</label>
                      <input
                        type="text"
                        placeholder="ex. L’excellence de l’hospitalité marocaine au cœur de la ville ocre"
                        value={onboardingDraft.tagline}
                        onChange={e => updateDraft({ tagline: e.target.value })}
                      />
                    </div>

                    <div className="partner-field md:col-span-2">
                      <label>Description immersive de votre offre *</label>
                      <textarea
                        rows={4}
                        placeholder="Décrivez votre cadre, l'ambiance, les saveurs ou les temps forts de votre prestation..."
                        value={onboardingDraft.description}
                        onChange={e => updateDraft({ description: e.target.value })}
                        required
                      />
                    </div>

                    {/* Pricing */}
                    <div className="partner-field">
                      <label>Tarif public de départ (en MAD) *</label>
                      <input
                        type="number"
                        min="50"
                        step="10"
                        value={onboardingDraft.startingPrice}
                        onChange={e => updateDraft({ startingPrice: parseInt(e.target.value, 10) || 0 })}
                        required
                      />
                    </div>

                    <div className="partner-field">
                      <label>Unité de facturation</label>
                      <select
                        value={onboardingDraft.priceUnit}
                        onChange={e => updateDraft({ priceUnit: e.target.value })}
                      >
                        {onboardingDraft.category === 'accommodation' && (
                          <>
                            <option value="par nuit">par nuit (chambre standard)</option>
                            <option value="par nuit (suite)">par nuit (suite de luxe)</option>
                            <option value="par séjour (privatisation)">par séjour (privatisation complète)</option>
                          </>
                        )}
                        {onboardingDraft.category !== 'accommodation' && (
                          <>
                            <option value="par personne">par personne</option>
                            <option value="par groupe">par groupe privé</option>
                            <option value="par véhicule">par véhicule / trajet</option>
                            <option value="par menu">par menu / couvert</option>
                          </>
                        )}
                      </select>
                    </div>

                    {/* Category-specific fields */}
                    {onboardingDraft.category === 'accommodation' && (
                      <>
                        <div className="partner-field">
                          <label>Heure de Check-in (Arrivée)</label>
                          <input
                            type="text"
                            placeholder="14:00"
                            value={onboardingDraft.checkInTime}
                            onChange={e => updateDraft({ checkInTime: e.target.value })}
                          />
                        </div>
                        <div className="partner-field">
                          <label>Heure de Check-out (Départ)</label>
                          <input
                            type="text"
                            placeholder="12:00"
                            value={onboardingDraft.checkOutTime}
                            onChange={e => updateDraft({ checkOutTime: e.target.value })}
                          />
                        </div>
                      </>
                    )}

                    {onboardingDraft.category === 'activity' && (
                      <>
                        <div className="partner-field">
                          <label>Durée estimée de l'activité</label>
                          <input
                            type="text"
                            placeholder="ex. 3 heures, Demi-journée, 2 jours / 1 nuit"
                            value={onboardingDraft.duration}
                            onChange={e => updateDraft({ duration: e.target.value })}
                          />
                        </div>
                        <div className="partner-field">
                          <label>Capacité maximale par groupe</label>
                          <input
                            type="number"
                            min="1"
                            value={onboardingDraft.capacity}
                            onChange={e => updateDraft({ capacity: parseInt(e.target.value, 10) || 1 })}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">Équipements & Ce qui est inclus</h3>
                  <div className="partner-field mb-4">
                    <label>Ce qui est inclus dans le prix (1 par ligne)</label>
                    <textarea
                      rows={3}
                      value={onboardingDraft.includedItems.join('\n')}
                      onChange={e => updateDraft({ includedItems: e.target.value.split('\n').filter(Boolean) })}
                      placeholder="Thé à la menthe d'accueil&#10;Petit-déjeuner traditionnel&#10;Assistance conciergerie"
                    />
                  </div>

                  <div className="partner-field">
                    <label>Ce qui n'est pas inclus (1 par ligne)</label>
                    <textarea
                      rows={2}
                      value={onboardingDraft.notIncludedItems.join('\n')}
                      onChange={e => updateDraft({ notIncludedItems: e.target.value.split('\n').filter(Boolean) })}
                      placeholder="Taxe de séjour&#10;Pourboires&#10;Dépenses personnelles"
                    />
                  </div>
                </div>

                <div className="partner-wizard-nav-footer">
                  <button
                    type="button"
                    className="partner-btn-secondary"
                    onClick={() => goToStep(2)}
                  >
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => goToStep(4)}
                  >
                    <span>Continuer vers les photos</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
               ÉTAPE 4 : PHOTOS & PRÉSENTATION VISUELLE
               ========================================================================= */}
            {currentStep === 4 && (
              <div className="partner-wizard-step-box">
                <div className="partner-step-intro">
                  <span className="partner-section-tag">Étape 4 sur 6</span>
                  <h2 className="partner-step-heading font-serif">
                    Photos & Présentation Visuelle
                  </h2>
                  <p className="partner-step-subheading">
                    Les fiches partenaires avec des photographies lumineuses et authentiques reçoivent en moyenne 3 fois plus de demandes.
                  </p>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">1. Photo principale de couverture (Haute Définition)</h3>
                  <div className="partner-field mb-3">
                    <label>URL de la photo principale *</label>
                    <input
                      type="url"
                      value={onboardingDraft.coverImage}
                      onChange={e => updateDraft({ coverImage: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                  </div>

                  {/* Image Live Preview */}
                  <div className="partner-cover-preview-box">
                    <img
                      src={onboardingDraft.coverImage || activeCategoryInfo.coverImage}
                      alt="Aperçu couverture"
                      className="partner-cover-preview-img"
                    />
                    <div className="partner-cover-preview-label">
                      <span>Aperçu de la couverture publique</span>
                    </div>
                  </div>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">2. Galerie photos complémentaires</h3>
                  <div className="partner-field mb-3">
                    <label>Liens d'images supplémentaires (1 URL par ligne)</label>
                    <textarea
                      rows={3}
                      value={onboardingDraft.gallery.join('\n')}
                      onChange={e => updateDraft({ gallery: e.target.value.split('\n').filter(Boolean) })}
                      placeholder="https://images.unsplash.com/photo-1...&#10;https://images.unsplash.com/photo-2..."
                    />
                  </div>

                  {onboardingDraft.gallery.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-2">
                      {onboardingDraft.gallery.slice(0, 4).map((img, i) => (
                        <div key={i} className="h-20 rounded-lg overflow-hidden border border-[#E8E2D9]">
                          <img src={img} alt={`Galerie ${i}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="partner-tips-card">
                  <Sparkles size={18} className="text-amber-500 shrink-0" />
                  <div className="text-xs text-slate-700">
                    <strong>Conseil DécouvreLeMaroc :</strong> Privilégiez des photos en lumière naturelle montrant les détails d’artisanat (zelliges, cuivres, patios, piscines, assiettes dressées). Évitez les filtres déformants.
                  </div>
                </div>

                <div className="partner-wizard-nav-footer">
                  <button
                    type="button"
                    className="partner-btn-secondary"
                    onClick={() => goToStep(3)}
                  >
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => goToStep(5)}
                  >
                    <span>Continuer vers la vérification</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
               ÉTAPE 5 : JUSTIFICATIFS LÉGAUX & VÉRIFICATION
               ========================================================================= */}
            {currentStep === 5 && (
              <div className="partner-wizard-step-box">
                <div className="partner-step-intro">
                  <span className="partner-section-tag">Étape 5 sur 6</span>
                  <h2 className="partner-step-heading font-serif">
                    Vérification de l'Établissement & Conformité
                  </h2>
                  <p className="partner-step-subheading">
                    DécouvreLeMaroc s'engage auprès des voyageurs sur l'authenticité de ses partenaires. Ces pièces confidentielles permettent l'attribution du badge officiel « Partenaire Vérifié ».
                  </p>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">Pièces et garanties requises</h3>
                  <div className="space-y-4">
                    <div className="partner-field">
                      <label>Numéro de CIN / Passeport du gérant légal</label>
                      <input
                        type="text"
                        placeholder="ex. BE 194820"
                        value={onboardingDraft.cinNumber}
                        onChange={e => updateDraft({ cinNumber: e.target.value })}
                      />
                      <small>Sera vérifié lors de l'établissement du protocole de partenariat</small>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl flex items-center justify-between">
                      <div>
                        <strong className="text-xs text-[#0F2937] block">Justificatif d'immatriculation d'entreprise (RC ou Patente)</strong>
                        <p className="text-[11px] text-slate-500 m-0">Atteste de votre enregistrement légal au Registre du Commerce marocain.</p>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                        <input
                          type="checkbox"
                          checked={onboardingDraft.hasBusinessDoc}
                          onChange={e => updateDraft({ hasBusinessDoc: e.target.checked })}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span>Document prêt</span>
                      </label>
                    </div>

                    <div className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl flex items-center justify-between">
                      <div>
                        <strong className="text-xs text-[#0F2937] block">Licence ou Agrément Touristique</strong>
                        <p className="text-[11px] text-slate-500 m-0">Agrément maison d'hôtes / classement hôtelier / carte professionnelle de guide.</p>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                        <input
                          type="checkbox"
                          checked={onboardingDraft.hasLicenseDoc}
                          onChange={e => updateDraft({ hasLicenseDoc: e.target.checked })}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span>Agrément actif</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">Remarques ou spécificités à l'attention de notre équipe</h3>
                  <div className="partner-field">
                    <textarea
                      rows={3}
                      placeholder="Informations supplémentaires, label écologique, adhésion à une association de riads..."
                      value={onboardingDraft.notes}
                      onChange={e => updateDraft({ notes: e.target.value })}
                    />
                  </div>
                </div>

                <div className="partner-wizard-nav-footer">
                  <button
                    type="button"
                    className="partner-btn-secondary"
                    onClick={() => goToStep(4)}
                  >
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button
                    type="button"
                    className="partner-btn-primary"
                    onClick={() => goToStep(6)}
                  >
                    <span>Continuer vers les conditions financières</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
               ÉTAPE 6 : COMMISSION, PAIEMENT & SOUMISSION FINALE
               ========================================================================= */}
            {currentStep === 6 && (
              <form onSubmit={handleFinalSubmit} className="partner-wizard-step-box">
                <div className="partner-step-intro">
                  <span className="partner-section-tag">Étape 6 sur 6 — Finalisation</span>
                  <h2 className="partner-step-heading font-serif">
                    Conditions Financières & Coordonnées Bancaires
                  </h2>
                  <p className="partner-step-subheading">
                    Configurez votre RIB marocain pour la réception automatisée de vos revenus après chaque réservation.
                  </p>
                </div>

                {/* Recap commission model */}
                <div className="partner-commission-card mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                      Votre barème contractuel convenu
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Taux appliqué : {activeCategoryInfo.defaultCommission}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">
                    La commission de {activeCategoryInfo.defaultCommission}% couvre l'assurance réservation, la mise en avant éditoriale, les outils de gestion et la conciergerie privée 7j/7.
                  </p>
                  <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E8E2D9] text-xs text-slate-700 flex justify-between items-center">
                    <span>Exemple pour une réservation de <strong>1 500 MAD</strong> :</span>
                    <strong className="text-emerald-700 font-bold">
                      Vous recevez 1 320 MAD nets
                    </strong>
                  </div>
                </div>

                <div className="partner-form-section">
                  <h3 className="partner-form-group-title">Coordonnées bancaires pour vos versements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="partner-field">
                      <label>Établissement bancaire *</label>
                      <select
                        value={onboardingDraft.bankName}
                        onChange={e => updateDraft({ bankName: e.target.value })}
                      >
                        <option value="Attijariwafa Bank">Attijariwafa Bank</option>
                        <option value="Banque Populaire (BCP)">Banque Populaire (BCP)</option>
                        <option value="Bank of Africa (BMCE)">Bank of Africa (BMCE)</option>
                        <option value="CIH Bank">CIH Bank</option>
                        <option value="Société Générale Maroc">Société Générale Maroc</option>
                        <option value="Crédit Agricole du Maroc">Crédit Agricole du Maroc</option>
                        <option value="Autre banque marocaine">Autre banque marocaine</option>
                      </select>
                    </div>

                    <div className="partner-field">
                      <label>Titulaire du compte bancaire *</label>
                      <input
                        type="text"
                        placeholder="ex. Dar El Bacha Hospitality SARL"
                        value={onboardingDraft.accountHolder}
                        onChange={e => updateDraft({ accountHolder: e.target.value })}
                        required
                      />
                    </div>

                    <div className="partner-field md:col-span-2">
                      <label>Relevé d'Identité Bancaire (RIB - 24 chiffres) *</label>
                      <input
                        type="text"
                        placeholder="007 450 0001234567890123 44"
                        value={onboardingDraft.rib}
                        onChange={e => updateDraft({ rib: e.target.value })}
                        required
                      />
                      <small>Nécessaire pour le virement direct de vos règlements clients</small>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6 text-xs text-amber-900 leading-relaxed">
                  En soumettant ce formulaire, vous confirmez l'exactitude des informations fournies et acceptez les conditions générales d'adhésion au réseau de partenaires DécouvreLeMaroc. Votre espace partenaire sera activé immédiatement.
                </div>

                <div className="partner-wizard-nav-footer">
                  <button
                    type="button"
                    className="partner-btn-secondary"
                    onClick={() => goToStep(5)}
                  >
                    <ArrowLeft size={16} />
                    <span>Retour</span>
                  </button>

                  <button
                    type="submit"
                    className="partner-btn-primary"
                  >
                    <ShieldCheck size={16} />
                    <span>Valider mon inscription & Accéder à mon Espace</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      )}

      {/* FOOTER */}
      <Footer />

      {/* PROFIL PREVIEW MODAL */}
      <PartnerProfilePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        draft={onboardingDraft}
        profile={partner}
      />
    </div>
  );
};

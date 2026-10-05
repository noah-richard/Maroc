import React, { useState } from 'react';
import { Icon } from '../common/Icon/Icon';
import './ClubSection.css';

interface AdvantageItem {
  id: string;
  icon: 'tag' | 'gift' | 'user' | 'compass';
  title: string;
  description: string;
  tag: string;
  previewExample: string;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'tarifs-membres',
    icon: 'tag',
    title: 'Des tarifs membres',
    description:
      'Des réductions et des offres négociées auprès d’hôtels, de restaurants et de prestataires participants.',
    tag: 'Tarifs préférentiels',
    previewExample: 'Ex : Jusqu’à -15% sur une sélection de riads & tables réputées'
  },
  {
    id: 'cadeaux-attentions',
    icon: 'gift',
    title: 'Des cadeaux et petites attentions',
    description:
      'Une boisson de bienvenue, une attention en chambre ou un cadeau local : des gestes pour rendre votre expérience plus agréable.',
    tag: 'Hospitalité exclusive',
    previewExample: 'Ex : Thé de bienvenue aux saveurs de l’Atlas ou douceurs artisanales'
  },
  {
    id: 'accueil-personnalise',
    icon: 'user',
    title: 'Un accueil personnalisé',
    description:
      'Une arrivée préparée et un interlocuteur identifié, selon les services proposés par chaque établissement.',
    tag: 'Contact privilégié',
    previewExample: 'Ex : Référent sur place pour vous guider dès votre check-in'
  },
  {
    id: 'services-sejour',
    icon: 'compass',
    title: 'Des services pour faciliter votre séjour',
    description:
      'Des conseils et des prestations adaptées à votre projet, avec un périmètre et des conditions clairement précisés.',
    tag: 'Sérénité & Clarté',
    previewExample: 'Ex : Recommandations d’itinéraires et assistance conciergerie locale'
  }
];

const STEPS = [
  {
    number: '01',
    stepLabel: 'Étape 1',
    title: 'Découvrez les établissements',
    description: 'Découvrez les établissements participants et leurs avantages exclusifs.'
  },
  {
    number: '02',
    stepLabel: 'Étape 2',
    title: 'Choisissez votre formule',
    description: 'Choisissez votre formule d’adhésion lorsque le club ouvrira ses portes.'
  },
  {
    number: '03',
    stepLabel: 'Étape 3',
    title: 'Bénéficiez de vos privilèges',
    description: 'Consultez les conditions de l’offre et suivez les étapes indiquées pour en bénéficier.'
  }
];

const STORAGE_KEY = 'decouvrelemaroc_club_interest_email';

export const ClubSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? 'success' : 'idle';
    } catch {
      return 'idle';
    }
  });
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner votre adresse email.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Veuillez entrer une adresse email valide (ex: nom@domaine.com).');
      return;
    }

    setStatus('loading');

    // Simulate gentle async registration
    setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, email.trim());
      } catch {
        // Continue silently
      }
      setRegisteredEmail(email.trim());
      setStatus('success');
      setEmail('');
    }, 700);
  };

  const handleResetRegistration = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Continue silently
    }
    setRegisteredEmail(null);
    setStatus('idle');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <section
      id="club"
      className="club-section"
      aria-labelledby="club-title"
    >
      {/* Delicate Moroccan-inspired ambient background elements */}
      <div className="club-section__ambient-glow" aria-hidden="true" />
      <div className="club-section__pattern-overlay" aria-hidden="true" />

      <div className="club-section__container">
        {/* =========================================================
            HEADER & EDITORIAL MANIFESTO
            ========================================================= */}
        <header className="club-section__header">
          <div className="club-section__eyebrow-wrapper">
            <span className="club-section__badge">
              <span className="club-section__badge-dot" aria-hidden="true" />
              <span>Avant-première • En préparation</span>
            </span>
          </div>

          <h2 id="club-title" className="club-section__title">
            LE CLUB DÉCOUVRELEMAROC
          </h2>

          <p className="club-section__tagline">
            Le Maroc, avec des attentions en plus.
          </p>

          <div className="club-section__lead-wrapper">
            <p className="club-section__lead">
              Nous préparons un club pour enrichir vos séjours au Maroc : des avantages sur les prix,
              des cadeaux et un accueil personnalisé auprès d’une sélection d’établissements participants.
            </p>
            <p className="club-section__sublead">
              Que vous voyagiez depuis l’Afrique, l’Europe ou l’Amérique du Nord, notre ambition est
              simple : vous aider à découvrir le Maroc en vous sentant attendu et accompagné.
            </p>
          </div>
        </header>

        {/* =========================================================
            CINEMATIC EDITORIAL SPOTLIGHT
            ========================================================= */}
        <div className="club-section__spotlight">
          <div className="club-section__spotlight-media">
            <img
              src="/images/club-hospitality.jpg"
              alt="Hospitalité marocaine raffinée dans un riad traditionnel aux chandelles"
              className="club-section__spotlight-img"
              loading="lazy"
            />
            <div className="club-section__spotlight-gradient" />
            <div className="club-section__spotlight-caption">
              <span className="club-section__spotlight-tag">
                L'art de l'accueil marocain
              </span>
              <p className="club-section__spotlight-quote">
                « Se sentir attendu, accueilli et privilégié à chaque étape de votre voyage. »
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            LES AVANTAGES QUE NOUS PRÉPARONS (4 CARDS)
            ========================================================= */}
        <div className="club-section__advantages-block">
          <div className="club-section__block-header">
            <span className="club-section__line" aria-hidden="true" />
            <h3 className="club-section__block-title">
              LES AVANTAGES QUE NOUS PRÉPARONS
            </h3>
            <span className="club-section__line" aria-hidden="true" />
          </div>

          <div className="club-section__grid" role="list">
            {ADVANTAGES.map((advantage) => (
              <article
                key={advantage.id}
                className="club-card"
                role="listitem"
              >
                <div className="club-card__header">
                  <div className="club-card__icon-wrap">
                    <Icon name={advantage.icon} size={22} />
                  </div>
                  <span className="club-card__tag">{advantage.tag}</span>
                </div>

                <h4 className="club-card__title">{advantage.title}</h4>
                <p className="club-card__desc">{advantage.description}</p>

                <div className="club-card__preview">
                  <span className="club-card__preview-dot" aria-hidden="true" />
                  <span className="club-card__preview-text">
                    {advantage.previewExample}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================================================
            COMMENT CELA FONCTIONNERA-T-IL ? (3 STEPS)
            ========================================================= */}
        <div className="club-section__steps-block">
          <div className="club-section__block-header">
            <span className="club-section__line" aria-hidden="true" />
            <h3 className="club-section__block-title">
              COMMENT CELA FONCTIONNERA-T-IL ?
            </h3>
            <span className="club-section__line" aria-hidden="true" />
          </div>

          <div className="club-steps__grid">
            {STEPS.map((step) => (
              <div key={step.number} className="club-step-card">
                <div className="club-step-card__top">
                  <span className="club-step-card__num">{step.number}</span>
                  <span className="club-step-card__pill">{step.stepLabel}</span>
                </div>
                <h4 className="club-step-card__title">{step.title}</h4>
                <p className="club-step-card__desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SOYEZ INFORMÉ DE L’OUVERTURE (LEAD CAPTURE / VIP WAITLIST)
            ========================================================= */}
        <div className="club-section__notify-block" id="club-rejoindre">
          <div className="club-notify-card">
            <div className="club-notify-card__decor" aria-hidden="true" />

            <div className="club-notify-card__content">
              <div className="club-notify-card__badge">
                <span>Liste d’attente</span>
              </div>

              <h3 className="club-notify-card__title">
                SOYEZ INFORMÉ DE L’OUVERTURE
              </h3>

              <p className="club-notify-card__desc">
                Laissez-nous votre adresse email pour recevoir les informations de lancement et découvrir les premiers avantages disponibles.
              </p>

              {status === 'success' ? (
                <div className="club-notify-card__success-state" role="status" aria-live="polite">
                  <div className="club-notify-card__success-icon">
                    <Icon name="check" size={26} />
                  </div>
                  <div className="club-notify-card__success-details">
                    <p className="club-notify-card__success-title">
                      Votre inscription est confirmée !
                    </p>
                    <p className="club-notify-card__success-sub">
                      Nous vous informerons en priorité dès l’ouverture officielle du Club à l’adresse :{' '}
                      <strong>{registeredEmail}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="club-notify-card__reset-btn"
                    onClick={handleResetRegistration}
                  >
                    Inscrire une autre adresse email
                  </button>
                </div>
              ) : (
                <form
                  className="club-notify-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Inscription pour être informé de l'ouverture du Club"
                >
                  <div className="club-notify-form__field">
                    <div className="club-notify-form__input-wrapper">
                      <span className="club-notify-form__input-icon" aria-hidden="true">
                        <Icon name="mail" size={18} />
                      </span>
                      <input
                        type="email"
                        id="club-email-input"
                        name="email"
                        className={`club-notify-form__input ${
                          status === 'error' ? 'club-notify-form__input--invalid' : ''
                        }`}
                        placeholder="votre.adresse@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        disabled={status === 'loading'}
                        aria-required="true"
                        aria-invalid={status === 'error'}
                        aria-describedby={status === 'error' ? 'club-email-error' : undefined}
                      />
                    </div>

                    <button
                      type="submit"
                      className="club-notify-form__submit-btn"
                      disabled={status === 'loading'}
                      aria-label="M’informer de l’ouverture du Club"
                    >
                      {status === 'loading' ? (
                        <span className="club-notify-form__loading-text">
                          <span className="club-notify-form__spinner" aria-hidden="true" />
                          Envoi en cours...
                        </span>
                      ) : (
                        <>
                          <span>M’informer de l’ouverture</span>
                          <Icon name="arrow-right" size={17} />
                        </>
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <div
                      id="club-email-error"
                      className="club-notify-form__error"
                      role="alert"
                    >
                      <Icon name="alert" size={15} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              )}

              {/* Legal Notice verbatim from client specification */}
              <div className="club-notify-card__legal">
                <p>
                  Le Club DécouvreLeMaroc est en cours de préparation. Les établissements participants, les avantages, les éventuels tarifs d’adhésion et les conditions seront présentés avant toute souscription. L’inscription à la liste d’intérêt est gratuite et sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;

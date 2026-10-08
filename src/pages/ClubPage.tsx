import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { ClubSection } from '../components/club/ClubSection';
import { Icon } from '../components/common/Icon/Icon';
import './ClubPage.css';

export const ClubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Le Club DécouvreLeMaroc — Avantages & Privilèges Voyageurs';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="club-page-wrapper">
      {/* 01. NAVIGATION */}
      <Navbar variant="full" />

      {/* 02. MAIN EDITORIAL CONTENT */}
      <main className="club-page-main">
        {/* Breadcrumb banner */}
        <div className="club-page-banner">
          <div className="club-page-container">
            <nav className="club-breadcrumb" aria-label="Fil d'ariane">
              <a href="/" className="club-breadcrumb-link">Accueil</a>
              <span className="club-breadcrumb-sep">/</span>
              <span className="club-breadcrumb-current">Le Club DécouvreLeMaroc</span>
            </nav>
          </div>
        </div>

        {/* The complete rich Club section */}
        <ClubSection />

        {/* Standards & Transparency box */}
        <section className="club-charter-section" aria-label="Engagements de transparence du Club">
          <div className="club-page-container">
            <div className="club-charter-card">
              <div className="club-charter-header">
                <div className="club-charter-icon">
                  <Icon name="shield-check" size={24} />
                </div>
                <div>
                  <h3 className="club-charter-title">Notre charte d’engagement & de transparence</h3>
                  <p className="club-charter-subtitle">
                    Une promesse claire entre les voyageurs, les établissements et DécouvreLeMaroc
                  </p>
                </div>
              </div>

              <div className="club-charter-grid">
                <div className="club-charter-item">
                  <h4 className="club-charter-item-title">
                    <Icon name="check" size={16} />
                    Avantages négociés et vérifiés
                  </h4>
                  <p className="club-charter-item-desc">
                    Nous n'annonçons aucune réduction ni aucun cadeau sans accord écrit préalable avec chaque établissement partenaire.
                  </p>
                </div>

                <div className="club-charter-item">
                  <h4 className="club-charter-item-title">
                    <Icon name="check" size={16} />
                    Fiches d’avantages détaillées
                  </h4>
                  <p className="club-charter-item-desc">
                    Chaque avantage précisera l’établissement, la ville, les bénéficiaires, la période de validité, les exclusions et les modalités.
                  </p>
                </div>

                <div className="club-charter-item">
                  <h4 className="club-charter-item-title">
                    <Icon name="check" size={16} />
                    Hospitalité sans distinction
                  </h4>
                  <p className="club-charter-item-desc">
                    Un accueil chaleureux pour les voyageurs africains résidant sur le continent, les diasporas en Europe et Amérique du Nord, et tous les amoureux du Maroc.
                  </p>
                </div>

                <div className="club-charter-item">
                  <h4 className="club-charter-item-title">
                    <Icon name="check" size={16} />
                    Adhésion transparente
                  </h4>
                  <p className="club-charter-item-desc">
                    L’inscription actuelle à la liste d’intérêt est 100% gratuite et sans engagement. Les formules futures seront détaillées avant toute souscription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 03. FOOTER */}
      <Footer />
    </div>
  );
};


export default ClubPage;

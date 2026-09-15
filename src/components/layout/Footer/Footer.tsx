import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__top">
          {/* BRAND */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__logo-svg">
                <path d="M18 3L3 31H33L18 3Z" fill="#C8503D" />
                <path d="M18 11L9 31H27L18 11Z" fill="#FAFAF8" />
                <path d="M18 18C15.8 18 14 21 14 25.5C14 29 15.8 31 18 31C20.2 31 22 29 22 25.5C22 21 20.2 18 18 18Z" fill="#0F2937" />
                <path d="M18 5L28.5 31H33L18 3L3 31H7.5L18 5Z" fill="#D4A373" />
              </svg>
              <span className="footer__brand-title">DecouvreLeMaroc</span>
            </div>
            <p className="footer__brand-desc">
              La plateforme de référence pour concevoir et réserver vos séjours authentiques au Maroc.
            </p>
          </div>

          {/* SITEMAP LINKS */}
          <div className="footer__links-grid">
            <div className="footer__col">
              <h4 className="footer__col-title">Explorer</h4>
              <ul className="footer__list">
                <li><a href="#hebergements">Hébergements & Riads</a></li>
                <li><a href="#voitures">Location de véhicules</a></li>
                <li><a href="#restaurants">Tables & Gastronomie</a></li>
                <li><a href="#destinations">Destinations populaires</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Villes</h4>
              <ul className="footer__list">
                <li><a href="#marrakech">Marrakech</a></li>
                <li><a href="#casablanca">Casablanca</a></li>
                <li><a href="#rabat">Rabat</a></li>
                <li><a href="#fes">Fès</a></li>
                <li><a href="#tanger">Tanger</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Assistance</h4>
              <ul className="footer__list">
                <li><a href="#partenaires">À propos</a></li>
                <li><a href="#partenaires">Devenir partenaire</a></li>
                <li><a href="#contact">Centre d'aide</a></li>
                <li><a href="#conditions">Conditions générales</a></li>
                <li><a href="#confidentialite">Politique de confidentialité</a></li>
                <li><a href="#mentions">Mentions légales</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} DecouvreLeMaroc. Tous droits réservés.
          </p>
          <p className="footer__trademark">
            Conçu avec passion pour faire rayonner le patrimoine et l'hospitalité du Maroc.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import './Navbar.css';

interface NavbarProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onNavigateSection?: (sectionId: string) => void;
  variant?: 'minimal' | 'full';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onNavigateSection,
  variant = 'full'
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isMinimal = variant === 'minimal' || location.pathname === '/';

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${
        isMinimal ? 'navbar--minimal' : 'navbar--default'
      }`}
    >
      <div className="navbar__container">
        {/* LOGO & BRAND */}
        <Link to="/" className="navbar__brand" aria-label="DecouvreLeMaroc Accueil">
          <div className="navbar__logo-icon" aria-hidden="true">
            {/* Elegant Golden Moroccan Arch Logo */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4C13 4 8 9.5 8 16.5V36H32V16.5C32 9.5 27 4 20 4Z"
                stroke="#D4A373"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M20 9C15 9 11.5 13.5 11.5 19V36H28.5V19C28.5 13.5 25 9 20 9Z"
                stroke="#E5B27E"
                strokeWidth="1.6"
                fill="none"
              />
              <path
                d="M20 14C17 14 15 17 15 21V36H25V21C25 17 23 14 20 14Z"
                stroke="#F3D5B5"
                strokeWidth="1.2"
                fill="none"
              />
              <path d="M20 2C20.5 2 21 2.5 21 3V5H19V3C19 2.5 19.5 2 20 2Z" fill="#D4A373" />
            </svg>
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name font-serif">DecouvreLeMaroc</span>
            <span className="navbar__brand-tagline">
              Voyagez. Explorez. Vivez l'authentique.
            </span>
          </div>
        </Link>

        {/* MINIMAL HEADER NAVIGATION (PO MOCKUP DIRECTIVE) */}
        {isMinimal ? (
          <div className="navbar__minimal-right">
            <nav className="navbar__minimal-nav" aria-label="Navigation principale">
              <a
                href="#partenaires"
                className="navbar__minimal-link"
                onClick={(e) => handleLinkClick(e, 'partenaires')}
              >
                À propos
              </a>
              <a
                href="#partenaires"
                className="navbar__minimal-link navbar__minimal-link--partner"
                onClick={(e) => handleLinkClick(e, 'partenaires')}
              >
                Devenir partenaire
              </a>
            </nav>

            <span className="navbar__minimal-sep" aria-hidden="true">|</span>

            {/* Language Selector */}
            <div className="navbar__lang-wrapper">
              <button
                type="button"
                className="navbar__lang-btn navbar__lang-btn--minimal"
                aria-label="Sélectionner la langue (Français)"
              >
                <span className="navbar__flag" aria-hidden="true">🇫🇷</span>
                <span className="navbar__lang-text">FR</span>
                <Icon name="chevron-down" size={13} />
              </button>
            </div>

            {/* Login Pill Button */}
            <button
              type="button"
              className="navbar__login-pill"
              onClick={() => onOpenAuth?.('login')}
              aria-label="Se connecter à votre compte"
            >
              <span>Se connecter</span>
              <div className="navbar__login-pill-icon">
                <Icon name="user" size={15} />
              </div>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="navbar__hamburger navbar__hamburger--minimal"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>
        ) : (
          /* FULL HEADER NAVIGATION FOR OTHER PAGES */
          <>
            <nav className="navbar__nav" aria-label="Navigation principale">
              <ul className="navbar__nav-list">
                <li>
                  <a href="#destinations" className="navbar__nav-link" onClick={(e) => handleLinkClick(e, 'destinations')}>
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#hebergements" className="navbar__nav-link" onClick={(e) => handleLinkClick(e, 'hebergements')}>
                    Hébergements
                  </a>
                </li>
                <li>
                  <a href="#restaurants" className="navbar__nav-link" onClick={(e) => handleLinkClick(e, 'restaurants')}>
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="#voitures" className="navbar__nav-link" onClick={(e) => handleLinkClick(e, 'voitures')}>
                    Voitures
                  </a>
                </li>
              </ul>
            </nav>

            <div className="navbar__actions">
              <button
                type="button"
                className="navbar__lang-btn"
                aria-label="Changer de langue"
              >
                <Icon name="globe" size={16} />
                <span>FR</span>
                <Icon name="chevron-down" size={13} />
              </button>

              <button
                type="button"
                className="navbar__login-pill"
                onClick={() => onOpenAuth?.('login')}
              >
                <span>Se connecter</span>
                <Icon name="user" size={15} />
              </button>

              <button
                type="button"
                className="navbar__hamburger"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="navbar__mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu Mobile">
          <nav className="navbar__mobile-nav">
            <ul className="navbar__mobile-list">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Icon name="home" size={18} />
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <a href="#partenaires" onClick={(e) => handleLinkClick(e, 'partenaires')}>
                  <Icon name="star" size={18} />
                  <span>Devenir partenaire</span>
                </a>
              </li>
              <li>
                <a href="#partenaires" onClick={(e) => handleLinkClick(e, 'partenaires')}>
                  <Icon name="map-pin" size={18} />
                  <span>À propos</span>
                </a>
              </li>
            </ul>

            <div className="navbar__mobile-divider" />

            <div className="navbar__mobile-auth">
              <button
                type="button"
                className="navbar__mobile-login-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth?.('login');
                }}
              >
                <Icon name="user" size={18} />
                <span>Se connecter</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

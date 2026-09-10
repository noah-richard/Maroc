import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import { Button } from '../../common/Button/Button';
import './Navbar.css';

interface NavbarProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onNavigateSection
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* LOGO & BRAND */}
        <Link to="/" className="navbar__brand" aria-label="DecouvreLeMaroc Accueil">
          <div className="navbar__logo-icon" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3L3 31H33L18 3Z" fill="#C8503D" />
              <path d="M18 11L9 31H27L18 11Z" fill="#FAFAF8" />
              <path d="M18 18C15.8 18 14 21 14 25.5C14 29 15.8 31 18 31C20.2 31 22 29 22 25.5C22 21 20.2 18 18 18Z" fill="#0F2937" />
              <path d="M18 5L28.5 31H33L18 3L3 31H7.5L18 5Z" fill="#D4A373" />
            </svg>
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">DecouvreLeMaroc</span>
            <span className="navbar__brand-tagline">Voyagez • Séjournez • Explorez</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="navbar__nav" aria-label="Navigation principale">
          <ul className="navbar__nav-list">
            <li>
              <a
                href="#hebergements"
                className="navbar__nav-link"
                onClick={(e) => handleLinkClick(e, 'hebergements')}
              >
                Hébergements
              </a>
            </li>
            <li>
              <a
                href="#voitures"
                className="navbar__nav-link"
                onClick={(e) => handleLinkClick(e, 'voitures')}
              >
                Voitures
              </a>
            </li>
            <li>
              <a
                href="#restaurants"
                className="navbar__nav-link"
                onClick={(e) => handleLinkClick(e, 'restaurants')}
              >
                Restaurants
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className="navbar__nav-link"
                onClick={(e) => handleLinkClick(e, 'destinations')}
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#bons-plans"
                className="navbar__nav-link"
                onClick={(e) => handleLinkClick(e, 'bons-plans')}
              >
                Bons plans
              </a>
            </li>
          </ul>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="navbar__actions">
          {/* Language Selector */}
          <button
            type="button"
            className="navbar__lang-btn"
            aria-label="Changer de langue (Actuellement Français)"
          >
            <Icon name="globe" size={17} />
            <span>FR</span>
            <Icon name="chevron-down" size={14} />
          </button>

          {/* Login Button */}
          <button
            type="button"
            className="navbar__login-btn"
            onClick={() => onOpenAuth?.('login')}
          >
            <Icon name="user" size={17} />
            <span>Se connecter</span>
          </button>

          {/* Register Button */}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onOpenAuth?.('register')}
          >
            S'inscrire
          </Button>

          {/* Mobile Menu Trigger */}
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
      </div>

      {/* MOBILE DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="navbar__mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu Mobile">
          <nav className="navbar__mobile-nav">
            <ul className="navbar__mobile-list">
              <li>
                <a href="#hebergements" onClick={(e) => handleLinkClick(e, 'hebergements')}>
                  <Icon name="home" size={18} />
                  <span>Hébergements</span>
                </a>
              </li>
              <li>
                <a href="#voitures" onClick={(e) => handleLinkClick(e, 'voitures')}>
                  <Icon name="car" size={18} />
                  <span>Voitures</span>
                </a>
              </li>
              <li>
                <a href="#restaurants" onClick={(e) => handleLinkClick(e, 'restaurants')}>
                  <Icon name="utensils" size={18} />
                  <span>Restaurants</span>
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={(e) => handleLinkClick(e, 'destinations')}>
                  <Icon name="map-pin" size={18} />
                  <span>Destinations</span>
                </a>
              </li>
              <li>
                <a href="#bons-plans" onClick={(e) => handleLinkClick(e, 'bons-plans')}>
                  <Icon name="star" size={18} />
                  <span>Bons plans</span>
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

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAuth?.('register');
                }}
                className="navbar__mobile-register-btn"
              >
                S'inscrire
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

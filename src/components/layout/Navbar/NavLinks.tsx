import React from 'react';
import { Icon } from '../../common/Icon/Icon';
import './NavLinks.css';

interface NavLinksProps {
  isMinimal: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  isMinimal,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onLinkClick,
  onOpenAuth
}) => {
  if (isMinimal) {
    return (
      <div className="navbar__minimal-right">
        <nav className="navbar__minimal-nav" aria-label="Navigation principale">
          <a
            href="#partenaires"
            className="navbar__minimal-link"
            onClick={(e) => onLinkClick(e, 'partenaires')}
          >
            À propos
          </a>
          <a
            href="#partenaires"
            className="navbar__minimal-link navbar__minimal-link--partner"
            onClick={(e) => onLinkClick(e, 'partenaires')}
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
          <span className="navbar__login-pill-icon">
            <Icon name="user" size={17} />
          </span>
          <span className="navbar__login-pill-text">Se connecter</span>
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="navbar__hamburger navbar__hamburger--minimal"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={onToggleMobileMenu}
        >
          <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>
    );
  }

  return (
    <>
      <nav className="navbar__nav" aria-label="Navigation principale">
        <ul className="navbar__nav-list">
          <li>
            <a href="#destinations" className="navbar__nav-link" onClick={(e) => onLinkClick(e, 'destinations')}>
              Destinations
            </a>
          </li>
          <li>
            <a href="#hebergements" className="navbar__nav-link" onClick={(e) => onLinkClick(e, 'hebergements')}>
              Hébergements
            </a>
          </li>
          <li>
            <a href="#restaurants" className="navbar__nav-link" onClick={(e) => onLinkClick(e, 'restaurants')}>
              Restaurants
            </a>
          </li>
          <li>
            <a href="#voitures" className="navbar__nav-link" onClick={(e) => onLinkClick(e, 'voitures')}>
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
          aria-label="Se connecter à votre compte"
        >
          <span className="navbar__login-pill-icon">
            <Icon name="user" size={17} />
          </span>
          <span className="navbar__login-pill-text">Se connecter</span>
        </button>

        <button
          type="button"
          className="navbar__hamburger"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={onToggleMobileMenu}
        >
          <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>
    </>
  );
};

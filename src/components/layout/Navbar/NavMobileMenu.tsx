import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../common/Icon/Icon';
import './NavMobileMenu.css';

interface NavMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  isOpen,
  onClose,
  onLinkClick: _onLinkClick
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="navbar__mobile-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer menu */}
      <div
        className="navbar__mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu Mobile"
      >
        <nav className="navbar__mobile-nav">
          <ul className="navbar__mobile-list">
            <li>
              <Link to="/" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap">
                  <Icon name="home" size={18} />
                </div>
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="/destinations/marrakech" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap">
                  <Icon name="map-pin" size={18} />
                </div>
                <span>Explorer Marrakech</span>
              </Link>
            </li>
            <li>
              <Link to="/destinations/casablanca" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap">
                  <Icon name="map-pin" size={18} />
                </div>
                <span>Explorer Casablanca</span>
              </Link>
            </li>
            <li>
              <Link to="/club" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap" style={{ background: '#F7EFE6', color: '#C8503D' }}>
                  <Icon name="crown" size={18} />
                </div>
                <span style={{ fontWeight: 600 }}>Le Club DécouvreLeMaroc</span>
              </Link>
            </li>
            <li>
              <Link to="/a-propos" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap">
                  <Icon name="globe" size={18} />
                </div>
                <span>À propos</span>
              </Link>
            </li>
            <li>
              <Link to="/devenir-partenaire" onClick={onClose}>
                <div className="navbar__mobile-icon-wrap" style={{ background: '#F7EFE6', color: '#C8503D' }}>
                  <Icon name="award" size={18} />
                </div>
                <span>Devenir partenaire</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};


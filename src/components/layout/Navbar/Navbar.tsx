import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { NavMobileMenu } from './NavMobileMenu';
import { VisitorCounter } from '../../common/VisitorCounter/VisitorCounter';
import './Navbar.css';

interface NavbarProps {
  onNavigateSection?: (sectionId: string) => void;
  variant?: 'minimal' | 'full';
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateSection,
  variant = 'full'
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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
        {/* Left Group: Brand Logo & Live Visitor Counter */}
        <div className="navbar__left">
          <NavBrand />
          <VisitorCounter />
        </div>

        {/* Desktop Navigation Links & Action Buttons */}
        <NavLinks
          isMinimal={isMinimal}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onLinkClick={handleLinkClick}
        />
      </div>

      {/* Mobile Drawer Menu */}
      <NavMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLinkClick={handleLinkClick}
      />
    </header>
  );
};


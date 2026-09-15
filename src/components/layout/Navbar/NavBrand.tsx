import React from 'react';
import { Link } from 'react-router-dom';
import { MoroccoDoorLogo } from './MoroccoDoorLogo';

export const NavBrand: React.FC = () => {
  return (
    <Link to="/" className="navbar__brand" aria-label="DecouvreLeMaroc — Entrer au Maroc">
      <div className="navbar__logo-icon" aria-hidden="true">
        <MoroccoDoorLogo />
      </div>
      <div className="navbar__brand-text">
        <span className="navbar__brand-name font-serif">DecouvreLeMaroc</span>
        <span className="navbar__brand-tagline">
          Voyagez. Explorez. Vivez l'authentique.
        </span>
      </div>
    </Link>
  );
};

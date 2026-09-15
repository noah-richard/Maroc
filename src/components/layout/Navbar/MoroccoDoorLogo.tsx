import React, { useState, useEffect } from 'react';
import './MoroccoDoorLogo.css';

interface MoroccoDoorLogoProps {
  className?: string;
  isOpen?: boolean;
}

export const MoroccoDoorLogo: React.FC<MoroccoDoorLogoProps> = ({
  className = '',
  isOpen = false
}) => {
  const [animating, setAnimating] = useState(true);

  // Play welcoming entry animation on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`morocco-door-logo ${animating ? 'morocco-door-logo--animating' : ''} ${
        isOpen ? 'morocco-door-logo--open' : ''
      } ${className}`}
      aria-label="Porte du Maroc — Entrer dans le Royaume"
    >
      {/* 01. LUMINOUS THRESHOLD LIGHT BEAM (Rayon doré au sol) */}
      <div className="morocco-door-logo__light-beam" aria-hidden="true" />

      {/* 02. INTERIOR PORTAL: PAYSAGE MAROCAIN RÉVÉLÉ */}
      <div className="morocco-door-logo__portal" aria-hidden="true">
        <svg
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="morocco-door-logo__interior-svg"
        >
          <defs>
            {/* Découpe exacte de l'arche outrepassée marocaine */}
            <clipPath id="morocco-door-arch-clip">
              <path d="M 8,45 L 8,24 C 7,17 14,7.5 22,5.5 C 30,7.5 37,17 36,24 L 36,45 Z" />
            </clipPath>

            {/* Ciel crépusculaire magique du Maroc */}
            <linearGradient id="morocco-sky-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E1328" />
              <stop offset="28%" stopColor="#6C1E38" />
              <stop offset="55%" stopColor="#C8503D" />
              <stop offset="78%" stopColor="#E58E38" />
              <stop offset="100%" stopColor="#F9D479" />
            </linearGradient>

            {/* Soleil éclatant du désert */}
            <radialGradient id="morocco-sun-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="35%" stopColor="#FDE68A" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
            </radialGradient>

            {/* Dorure étincelante des éléments */}
            <linearGradient id="morocco-gold-metal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBE7C6" />
              <stop offset="45%" stopColor="#D4A373" />
              <stop offset="80%" stopColor="#B37D4E" />
              <stop offset="100%" stopColor="#F2D19D" />
            </linearGradient>
          </defs>

          <g clipPath="url(#morocco-door-arch-clip)">
            {/* Fond Ciel Marocain */}
            <rect x="6" y="4" width="32" height="42" fill="url(#morocco-sky-gradient)" />

            {/* Faisceaux de lumière solaire */}
            <circle
              cx="22"
              cy="33"
              r="14"
              fill="url(#morocco-sun-radial)"
              opacity="0.8"
              className="morocco-door-logo__sun"
            />
            <circle cx="22" cy="33" r="5" fill="#FFFBEB" />

            {/* Étoile chérifienne dorée dans le ciel */}
            <g className="morocco-door-logo__star">
              <polygon
                points="22,12 23.2,14.8 26.2,15 23.8,17.2 24.5,20.2 22,18.6 19.5,20.2 20.2,17.2 17.8,15 20.8,14.8"
                fill="#FDE68A"
              />
              <circle cx="22" cy="16.2" r="1" fill="#FFFFFF" />
            </g>

            {/* Silhouette des cimes de l'Atlas */}
            <polygon
              points="6,38 12,32 16,34 22,28 28,33 33,30 38,36 38,45 6,45"
              fill="#26101E"
            />

            {/* Silhouette Minaret marocain (style Koutoubia / Tour Hassan) */}
            <rect x="13" y="27" width="3.5" height="12" fill="#180B13" />
            <rect x="13.7" y="25.2" width="2.1" height="2" fill="#180B13" />
            {/* Jamour (3 boules sacrées) */}
            <line x1="14.7" y1="23.8" x2="14.7" y2="25.2" stroke="#FDE68A" strokeWidth="0.6" />
            <circle cx="14.7" cy="24" r="0.6" fill="#FDE68A" />

            {/* Silhouette Palmier dattier */}
            <path
              d="M30 42 Q 29.5 35 30.5 30 Q 28 29 26 31 M 30.5 30 Q 30 27 28 28 M 30.5 30 Q 32 27 34 28 M 30.5 30 Q 33 29 35 32"
              stroke="#180B13"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
            />

            {/* Sol doré avec reflet de la porte */}
            <rect x="6" y="42" width="32" height="4" fill="#1D1217" />
            <ellipse cx="22" cy="43.5" rx="10" ry="1.5" fill="#FBBF24" opacity="0.65" />
          </g>
        </svg>
      </div>

      {/* 03. 3D ROTATING DOORS (Battants en cèdre sculpté et clous dorés) */}
      <div className="morocco-door-logo__doors" aria-hidden="true">
        {/* BATTANT GAUCHE */}
        <div className="morocco-door-logo__leaf-wrapper morocco-door-logo__leaf-wrapper--left">
          <svg viewBox="8 5 14 40" fill="none" className="morocco-door-logo__leaf-svg">
            <defs>
              <linearGradient id="door-wood-left" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2E160D" />
                <stop offset="50%" stopColor="#4A2617" />
                <stop offset="100%" stopColor="#351A10" />
              </linearGradient>
            </defs>
            {/* Silhouette du battant gauche épousant la demi-arche */}
            <path
              d="M 8,44.5 L 8,24 C 7.2,17.5 13.5,8 21.8,5.6 L 21.8,44.5 Z"
              fill="url(#door-wood-left)"
              stroke="#D4A373"
              strokeWidth="0.8"
            />
            {/* Panneau intérieur en cèdre ciselé */}
            <rect
              x="10"
              y="22"
              width="9.8"
              height="20"
              rx="1"
              fill="#241109"
              stroke="#B37D4E"
              strokeWidth="0.5"
            />
            {/* Motifs géométriques arabesques marocains */}
            <path
              d="M 14.9,25 L 17.5,28 L 14.9,31 L 12.3,28 Z"
              stroke="#D4A373"
              strokeWidth="0.6"
              fill="none"
            />
            <circle cx="14.9" cy="28" r="1.2" fill="#E5B27E" />

            {/* Heurtoir en anneau traditionnel marocain */}
            <circle cx="18" cy="28" r="1.6" stroke="#FDE68A" strokeWidth="0.7" fill="none" />
            <circle cx="18" cy="26.8" r="0.8" fill="#FDE68A" />

            {/* Clous hémisphériques en laiton */}
            <circle cx="9.8" cy="14" r="0.7" fill="#FDE68A" />
            <circle cx="9.8" cy="23" r="0.7" fill="#FDE68A" />
            <circle cx="9.8" cy="32" r="0.7" fill="#FDE68A" />
            <circle cx="9.8" cy="41" r="0.7" fill="#FDE68A" />
            <circle cx="20" cy="14" r="0.7" fill="#FDE68A" />
            <circle cx="20" cy="41" r="0.7" fill="#FDE68A" />
          </svg>
        </div>

        {/* BATTANT DROIT */}
        <div className="morocco-door-logo__leaf-wrapper morocco-door-logo__leaf-wrapper--right">
          <svg viewBox="22 5 14 40" fill="none" className="morocco-door-logo__leaf-svg">
            <defs>
              <linearGradient id="door-wood-right" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#351A10" />
                <stop offset="50%" stopColor="#4A2617" />
                <stop offset="100%" stopColor="#2E160D" />
              </linearGradient>
            </defs>
            {/* Silhouette du battant droit épousant la demi-arche */}
            <path
              d="M 22.2,5.6 C 30.5,8 36.8,17.5 36,24 L 36,44.5 L 22.2,44.5 Z"
              fill="url(#door-wood-right)"
              stroke="#D4A373"
              strokeWidth="0.8"
            />
            {/* Panneau intérieur en cèdre ciselé */}
            <rect
              x="24.2"
              y="22"
              width="9.8"
              height="20"
              rx="1"
              fill="#241109"
              stroke="#B37D4E"
              strokeWidth="0.5"
            />
            {/* Motifs géométriques arabesques marocains */}
            <path
              d="M 29.1,25 L 31.7,28 L 29.1,31 L 26.5,28 Z"
              stroke="#D4A373"
              strokeWidth="0.6"
              fill="none"
            />
            <circle cx="29.1" cy="28" r="1.2" fill="#E5B27E" />

            {/* Heurtoir en anneau traditionnel marocain */}
            <circle cx="26" cy="28" r="1.6" stroke="#FDE68A" strokeWidth="0.7" fill="none" />
            <circle cx="26" cy="26.8" r="0.8" fill="#FDE68A" />

            {/* Clous hémisphériques en laiton */}
            <circle cx="34.2" cy="14" r="0.7" fill="#FDE68A" />
            <circle cx="34.2" cy="23" r="0.7" fill="#FDE68A" />
            <circle cx="34.2" cy="32" r="0.7" fill="#FDE68A" />
            <circle cx="34.2" cy="41" r="0.7" fill="#FDE68A" />
            <circle cx="24" cy="14" r="0.7" fill="#FDE68A" />
            <circle cx="24" cy="41" r="0.7" fill="#FDE68A" />
          </svg>
        </div>
      </div>

      {/* 04. FIXED ORNATE MOORISH ARCH FRAME (Chambranle en arc outrepassé) */}
      <div className="morocco-door-logo__frame" aria-hidden="true">
        <svg
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="morocco-door-logo__frame-svg"
        >
          {/* Arc outrepassé extérieur sculpté */}
          <path
            d="M 5,46 L 5,23.5 C 4,14 12.5,3.5 22,1.5 C 31.5,3.5 40,14 39,23.5 L 39,46"
            stroke="#D4A373"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Moulure polylobée intérieure (arc aux festons impériaux) */}
          <path
            d="M 7.8,45 L 7.8,24 C 6.8,17 13.8,7 22,5.2 C 30.2,7 37.2,17 36.2,24 L 36.2,45"
            stroke="#F5C56B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Seuil inférieur en pierre taillée / laiton */}
          <line x1="3" y1="46" x2="41" y2="46" stroke="#D4A373" strokeWidth="2" strokeLinecap="round" />

          {/* Fleuron sommital royal (Jamour à trois sphères dorées) */}
          <line x1="22" y1="0.5" x2="22" y2="3.5" stroke="#FDE68A" strokeWidth="1" strokeLinecap="round" />
          <circle cx="22" cy="1.2" r="1.3" fill="#FDE68A" />
          <circle cx="22" cy="3.4" r="0.9" fill="#D4A373" />
        </svg>
      </div>
    </div>
  );
};

import React from 'react';

export interface Partner {
  id: string;
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

export const PARTNERS_LIST: Partner[] = [
  {
    id: 'oncf',
    name: 'ONCF',
    category: 'Transport ferroviaire',
    renderLogo: () => (
      <svg viewBox="0 0 130 40" className="partner-logo partner-logo--oncf" aria-label="Logo ONCF">
        <path d="M6 24c8-10 18-10 26 0M12 24c8-10 18-10 26 0M18 24c8-10 18-10 26 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="56" y="27" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="21" fontStyle="italic" letterSpacing="0.5" fill="currentColor">
          ONCF
        </text>
      </svg>
    )
  },
  {
    id: 'ram',
    name: 'Royal Air Maroc',
    category: 'Compagnie aérienne nationale',
    renderLogo: () => (
      <svg viewBox="0 0 140 44" className="partner-logo partner-logo--ram" aria-label="Logo Royal Air Maroc">
        <path d="M70 4l2.5 5.5 6 .8-4.3 4.2 1 6-5.2-2.8-5.2 2.8 1-6-4.3-4.2 6-.8L70 4z" fill="currentColor" />
        <path d="M50 14h40M45 18h50M54 21h32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <text x="70" y="31" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="currentColor">
          الخطوط الملكية المغربية
        </text>
        <text x="70" y="41" textAnchor="middle" fontFamily="sans-serif" fontSize="9.5" fontWeight="800" letterSpacing="0.5" fill="currentColor">
          Royal Air Maroc
        </text>
      </svg>
    )
  },
  {
    id: 'maroc-telecom',
    name: 'Maroc Telecom',
    category: 'Télécommunications',
    renderLogo: () => (
      <svg viewBox="0 0 140 40" className="partner-logo partner-logo--iam" aria-label="Logo Maroc Telecom">
        <g transform="translate(10, 4)">
          <rect x="0" y="7" width="9" height="9" transform="rotate(45 4.5 11.5)" fill="currentColor" />
          <rect x="8" y="7" width="9" height="9" transform="rotate(45 12.5 11.5)" fill="currentColor" fillOpacity="0.7" />
          <rect x="16" y="7" width="9" height="9" transform="rotate(45 20.5 11.5)" fill="currentColor" fillOpacity="0.4" />
          <rect x="24" y="7" width="9" height="9" transform="rotate(45 28.5 11.5)" fill="currentColor" fillOpacity="0.2" />
          <ellipse cx="28" cy="16" rx="26" ry="15" fill="currentColor" />
          <text x="28" y="14" textAnchor="middle" fill="#FAF8F5" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="800">
            Maroc
          </text>
          <text x="28" y="22" textAnchor="middle" fill="#FAF8F5" fontFamily="system-ui, sans-serif" fontSize="6.5" fontWeight="700">
            Telecom
          </text>
        </g>
      </svg>
    )
  },
  {
    id: 'visit-morocco',
    name: 'Visit Morocco',
    category: 'Office National Marocain du Tourisme',
    renderLogo: () => (
      <svg viewBox="0 0 135 40" className="partner-logo partner-logo--onmt" aria-label="Logo Visit Morocco">
        <g transform="translate(8, 6)">
          <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path d="M14 6v16M9 9c3 3 7 3 10 0M9 19c3-3 7-3 10 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </g>
        <text x="44" y="18" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="800" letterSpacing="-0.3" fill="currentColor">
          visit
        </text>
        <text x="44" y="30" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.8" fill="currentColor">
          morocco
        </text>
      </svg>
    )
  },
  {
    id: 'bmw',
    name: 'BMW',
    category: 'Mobilité & Location Premium',
    renderLogo: () => (
      <svg viewBox="0 0 50 50" className="partner-logo partner-logo--bmw" aria-label="Logo BMW">
        <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="2.2" fill="none" />
        <circle cx="25" cy="25" r="14" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M25 11v28M11 25h28" stroke="currentColor" strokeWidth="1.2" />
        <path d="M25 11a14 14 0 0 1 14 14h-14zM11 25a14 14 0 0 1 14-14v14z" fill="currentColor" fillOpacity="0.4" />
        <text x="18" y="9" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" fill="currentColor">B</text>
        <text x="23.5" y="8" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" fill="currentColor">M</text>
        <text x="30" y="9" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" fill="currentColor">W</text>
      </svg>
    )
  },
  {
    id: 'accor',
    name: 'ACCOR',
    category: 'Hôtellerie',
    renderLogo: () => (
      <svg viewBox="0 0 110 40" className="partner-logo partner-logo--accor" aria-label="Logo Accor">
        <path d="M55 4c3 4 8 8 13 8-6 1-10 4-13 8-3-4-7-7-13-8 5 0 10-4 13-8z" fill="currentColor" />
        <text x="55" y="33" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="13.5" fontWeight="800" letterSpacing="3" fill="currentColor">
          ACCOR
        </text>
      </svg>
    )
  },
  {
    id: 'air-arabia',
    name: 'Air Arabia',
    category: 'Compagnie aérienne',
    renderLogo: () => (
      <svg viewBox="0 0 130 40" className="partner-logo partner-logo--airarabia" aria-label="Logo Air Arabia">
        <text x="65" y="26" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.4" fill="currentColor">
          AirArabia
        </text>
      </svg>
    )
  },
  {
    id: 'booking',
    name: 'Booking.com',
    category: 'Plateforme mondiale de réservations',
    renderLogo: () => (
      <svg viewBox="0 0 150 40" className="partner-logo partner-logo--booking" aria-label="Logo Booking.com">
        <text x="75" y="26" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="17.5" fontWeight="800" letterSpacing="-0.2" fill="currentColor">
          Booking<tspan fill="#003580">.com</tspan>
        </text>
      </svg>
    )
  }
];

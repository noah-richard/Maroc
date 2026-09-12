import React, { useState } from 'react';
import './VisitorCounter.css';

const BASE_VISITORS = 20532;
const STORAGE_KEY_COUNT = 'decouvre_maroc_visitor_count';
const STORAGE_KEY_SESSION = 'decouvre_maroc_session_registered';

export const VisitorCounter: React.FC = () => {
  const [visitorCount] = useState<number>(() => {
    if (typeof window === 'undefined') return BASE_VISITORS;
    try {
      // 1. Retrieve current stored count or fallback to baseline
      const rawStored = localStorage.getItem(STORAGE_KEY_COUNT);
      let count = rawStored ? parseInt(rawStored, 10) : BASE_VISITORS;
      if (isNaN(count) || count < BASE_VISITORS) {
        count = BASE_VISITORS;
      }

      // 2. Increment count if this is a new visitor/session
      const hasRegistered = sessionStorage.getItem(STORAGE_KEY_SESSION);
      if (!hasRegistered) {
        count += 1;
        localStorage.setItem(STORAGE_KEY_COUNT, count.toString());
        sessionStorage.setItem(STORAGE_KEY_SESSION, 'true');
      }

      return count;
    } catch {
      // Fallback in private browsing if storage is restricted
      return BASE_VISITORS;
    }
  });

  // Format with dot separator: e.g. 20532 -> "20.532"
  const formattedCount = visitorCount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <div
      className="visitor-counter"
      title={`Nombre total de visiteurs : ${formattedCount}`}
      aria-label={`Compteur : vous êtes ${formattedCount} visiteurs sur le site`}
      role="status"
    >
      <span className="visitor-counter__pulse" aria-hidden="true">
        <span className="visitor-counter__dot" />
      </span>
      <span className="visitor-counter__label">
        <span className="visitor-counter__text-lead">VOUS ÊTES </span>
        <strong className="visitor-counter__number">{formattedCount}</strong>
        <span> VISITEURS</span>
      </span>
    </div>
  );
};

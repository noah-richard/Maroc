import React from 'react';
import { Link } from 'react-router-dom';
import './States.css';

interface DestinationNotFoundProps {
  slug?: string;
}

export const DestinationNotFound: React.FC<DestinationNotFoundProps> = ({ slug }) => {
  const popularCities = [
    { name: 'Marrakech', slug: 'marrakech' },
    { name: 'Casablanca', slug: 'casablanca' },
    { name: 'Fès', slug: 'fes' },
    { name: 'Tanger', slug: 'tanger' },
    { name: 'Agadir', slug: 'agadir' },
    { name: 'Essaouira', slug: 'essaouira' },
  ];

  return (
    <div className="destination-not-found-page">
      <div className="not-found-card">
        <div className="not-found-badge">404 — DESTINATION INTROUVABLE</div>
        <h1 className="not-found-title">Oups ! La ville demandée n'existe pas encore</h1>
        <p className="not-found-desc">
          {slug ? (
            <>
              La destination <strong>"{slug}"</strong> n'est pas encore répertoriée dans notre guide.
            </>
          ) : (
            'Cette destination semble introuvable ou a été déplacée.'
          )}
        </p>

        <div className="not-found-suggestions">
          <span className="suggestions-label">Explorez l'une de nos destinations phares :</span>
          <div className="suggestions-list">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                to={`/destinations/${city.slug}`}
                className="suggestion-city-chip"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home-btn">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

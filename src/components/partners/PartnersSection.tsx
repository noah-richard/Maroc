import React from 'react';
import { PARTNERS_LIST } from '../../data/partners.data';
import './PartnersSection.css';

export const PartnersSection: React.FC = () => {
  return (
    <section className="partners-section" aria-label="Partenaires officiels de DecouvreLeMaroc">
      <div className="partners-section__container">
        {/* Section Header with Delicate Horizontal Lines */}
        <div className="partners-section__header">
          <span className="partners-section__divider" />
          <h2 className="partners-section__title">NOS PARTENAIRES</h2>
          <span className="partners-section__divider" />
        </div>

        {/* Breathable Elegant Logos Strip */}
        <div className="partners-section__strip" role="list">
          {PARTNERS_LIST.map((partner) => (
            <div
              key={partner.id}
              className="partners-section__item"
              role="listitem"
              title={`${partner.name} — ${partner.category}`}
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>

        {/* Section Footer Baseline */}
        <div className="partners-section__footer">
          <span className="partners-section__footer-divider" />
          <p className="partners-section__baseline">
            Ensemble pour un Maroc plus proche de vous
          </p>
          <span className="partners-section__footer-divider" />
        </div>
      </div>
    </section>
  );
};

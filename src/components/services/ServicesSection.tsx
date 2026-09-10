import React from 'react';
import type { ServiceOffering } from '../../types/service';
import { ServiceCard } from './ServiceCard';
import { SectionHeader } from '../common/SectionHeader/SectionHeader';
import { SERVICES_DATA } from '../../data/services.data';
import { useInView } from '../../hooks/useInView';
import './ServicesSection.css';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceOffering) => void;
  onViewAll?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAll
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`services-section ${isInView ? 'is-in-view' : ''}`}
      id="services"
      aria-label="Nos services pour un voyage complet"
    >
      <div className="services-section__container">
        {/* SECTION HEADER */}
        <SectionHeader
          title="Nos services pour un voyage complet"
          linkText="Voir tous les services"
          linkHref="#services"
          onLinkClick={onViewAll}
        />

        {/* 3-COLUMN SERVICES GRID WITH STAGGER */}
        <div className="services-section__grid" role="list">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              role="listitem"
              className={`services-section__col ${isInView ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <ServiceCard
                service={service}
                onClick={onSelectService}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

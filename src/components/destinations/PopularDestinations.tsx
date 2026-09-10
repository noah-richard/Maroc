import React from 'react';
import type { Destination } from '../../types/destination';
import { DestinationCard } from './DestinationCard';
import { SectionHeader } from '../common/SectionHeader/SectionHeader';
import { POPULAR_DESTINATIONS } from '../../data/destinations.data';
import { useInView } from '../../hooks/useInView';
import './PopularDestinations.css';

interface PopularDestinationsProps {
  onSelectDestination?: (dest: Destination) => void;
  onViewAll?: () => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestination,
  onViewAll
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`popular-destinations ${isInView ? 'is-in-view' : ''}`}
      id="destinations"
      aria-label="Destinations populaires au Maroc"
    >
      <div className="popular-destinations__container">
        {/* SECTION HEADER */}
        <SectionHeader
          label="DESTINATIONS POPULAIRES"
          title="Explorez les plus belles villes du Maroc"
          linkText="Voir toutes les destinations"
          linkHref="#destinations"
          onLinkClick={onViewAll}
        />

        {/* 5-COLUMN CARDS GRID WITH STAGGERED ENTRANCE */}
        <div className="popular-destinations__grid" role="list">
          {POPULAR_DESTINATIONS.map((destination, index) => (
            <div
              key={destination.id}
              role="listitem"
              className={`popular-destinations__col ${isInView ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${index * 85}ms` }}
            >
              <DestinationCard
                destination={destination}
                onClick={onSelectDestination}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

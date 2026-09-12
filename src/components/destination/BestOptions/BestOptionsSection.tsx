import React, { useState, useMemo } from 'react';
import type { RecommendationItem, SupportContact } from '../../../types/destinationPage';
import { OptionCard } from './OptionCard';
import { ContactSupportCard } from './ContactSupportCard';
import './BestOptions.css';

interface BestOptionsSectionProps {
  recommendations: RecommendationItem[];
  supportContact: SupportContact;
  cityName: string;
  selectedCategory?: string;
}

export const BestOptionsSection: React.FC<BestOptionsSectionProps> = ({
  recommendations,
  supportContact,
  cityName,
  selectedCategory: initialCategory = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialCategory);
  const [prevCategory, setPrevCategory] = useState<string>(initialCategory);

  if (prevCategory !== initialCategory) {
    setPrevCategory(initialCategory);
    setActiveTab(initialCategory);
  }

  const categories = [
    { id: 'all', label: 'Tous les coups de cœur' },
    { id: 'hotels', label: 'Hôtels & Riads' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'sites', label: 'Incontournables' },
    { id: 'cars', label: 'Voitures' },
    { id: 'apartments', label: 'Appartements' },
  ];

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return recommendations;
    return recommendations.filter((item) => item.category === activeTab);
  }, [recommendations, activeTab]);

  return (
    <section className="best-options-section" id="best-options-section" aria-label={`Meilleures adresses à ${cityName}`}>
      <div className="best-options-container">
        {/* Section Header */}
        <div className="best-options-header">
          <div className="best-options-title-group">
            <span className="best-options-badge">LES MEILLEURES ADRESSES</span>
            <h2 className="best-options-title">Notre sélection exclusive à {cityName}</h2>
            <p className="best-options-subtitle">
              Testés, validés et recommandés par nos experts locaux pour garantir un séjour mémorable
            </p>
          </div>

          {/* Category Tabs */}
          <div className="best-options-tabs" role="tablist">
            {categories.map((tab) => {
              const count =
                tab.id === 'all'
                  ? recommendations.length
                  : recommendations.filter((i) => i.category === tab.id).length;

              if (tab.id !== 'all' && count === 0) return null;

              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`best-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  <span className="best-tab-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Layout: Options Grid + Support Card */}
        <div className="best-options-layout">
          <div className="best-options-cards-grid">
            {filteredItems.map((item) => (
              <OptionCard key={item.id} item={item} />
            ))}
          </div>

          {/* Contact Support Card */}
          <div className="best-options-sidebar">
            <ContactSupportCard contact={supportContact} cityName={cityName} />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import type { SearchCategory } from '../../types/search';
import { Icon } from '../common/Icon/Icon';
import './SearchTabs.css';

interface SearchTabsProps {
  activeCategory: SearchCategory;
  onSelectCategory: (category: SearchCategory) => void;
}

export const SearchTabs: React.FC<SearchTabsProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  const tabs: { id: SearchCategory; label: string; icon: 'home' | 'car' | 'utensils' }[] = [
    { id: 'stays', label: 'Hébergements', icon: 'home' },
    { id: 'cars', label: 'Voitures', icon: 'car' },
    { id: 'restaurants', label: 'Restaurants', icon: 'utensils' }
  ];

  return (
    <div className="search-tabs" role="tablist" aria-label="Catégories de recherche">
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`search-panel-${tab.id}`}
            id={`search-tab-${tab.id}`}
            className={`search-tab ${isActive ? 'is-active' : ''}`}
            onClick={() => onSelectCategory(tab.id)}
          >
            <Icon name={tab.icon} size={18} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

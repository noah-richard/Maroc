import React, { useState, useRef, useEffect } from 'react';
import type { CitySuggestion } from '../../types/search';
import { MOROCCAN_CITIES } from '../../data/cities.data';
import { Icon } from '../common/Icon/Icon';
import './SearchEngine.css';

interface CityAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelectCity?: (city: CitySuggestion) => void;
  placeholder?: string;
  label: string;
}

export const CityAutocomplete: React.FC<CityAutocompleteProps> = ({
  value,
  onChange,
  onSelectCity,
  placeholder = 'Ville, région, lieu...',
  label
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredCities = MOROCCAN_CITIES.filter((c) =>
    c.name.toLowerCase().includes(value.toLowerCase()) ||
    c.region.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredCities.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredCities.length - 1));
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      const selected = filteredCities[highlightedIndex];
      if (selected) {
        onChange(selected.name);
        onSelectCity?.(selected);
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="search-field city-autocomplete" ref={containerRef}>
      <label className="search-field__label">{label}</label>
      <div className="search-field__input-wrap">
        <Icon name="map-pin" size={17} className="search-field__icon" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-field__input"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
        />
      </div>

      {/* DROPDOWN POPUP */}
      {isOpen && (
        <ul className="city-autocomplete__dropdown" role="listbox">
          {filteredCities.length > 0 ? (
            filteredCities.map((city, index) => (
              <li
                key={city.name}
                role="option"
                aria-selected={highlightedIndex === index}
                className={`city-autocomplete__item ${highlightedIndex === index ? 'is-highlighted' : ''}`}
                onMouseDown={() => {
                  onChange(city.name);
                  onSelectCity?.(city);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                <Icon name="map-pin" size={15} className="city-autocomplete__item-icon" />
                <div className="city-autocomplete__item-info">
                  <span className="city-autocomplete__item-name">{city.name}</span>
                  <span className="city-autocomplete__item-region">{city.region}</span>
                </div>
              </li>
            ))
          ) : (
            <li className="city-autocomplete__empty">
              <span>Aucune destination trouvée</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

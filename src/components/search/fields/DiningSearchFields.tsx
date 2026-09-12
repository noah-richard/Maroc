import React from 'react';
import { CityAutocomplete } from '../CityAutocomplete';
import { Icon } from '../../common/Icon/Icon';
import type { CitySuggestion } from '../../../types/search';

interface DiningSearchFieldsProps {
  city: string;
  restoDate: string;
  restoTime: string;
  restoGuests: string;
  onCityChange: (val: string) => void;
  onCitySelect: (city: CitySuggestion) => void;
  onDateChange: (val: string) => void;
  onTimeChange: (val: string) => void;
  onGuestsChange: (val: string) => void;
}

export const DiningSearchFields: React.FC<DiningSearchFieldsProps> = ({
  city,
  restoDate,
  restoTime,
  restoGuests,
  onCityChange,
  onCitySelect,
  onDateChange,
  onTimeChange,
  onGuestsChange
}) => {
  return (
    <div className="search-engine__fields-grid search-engine__fields-grid--restaurants">
      <CityAutocomplete
        label="Où dîner ?"
        placeholder="Ville ou quartier..."
        value={city}
        onChange={onCityChange}
        onSelectCity={onCitySelect}
      />

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="resto-date" className="search-field__label">
          Date
        </label>
        <div className="search-field__input-wrap">
          <Icon name="calendar" size={17} className="search-field__icon" />
          <input
            id="resto-date"
            type="date"
            value={restoDate}
            onChange={(e) => onDateChange(e.target.value)}
            className="search-field__input search-field__input--date"
          />
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="resto-time" className="search-field__label">
          Créneau
        </label>
        <div className="search-field__input-wrap">
          <Icon name="utensils" size={17} className="search-field__icon" />
          <select
            id="resto-time"
            value={restoTime}
            onChange={(e) => onTimeChange(e.target.value)}
            className="search-field__select"
          >
            <option value="Déjeuner (12h30)">Déjeuner (12h30)</option>
            <option value="Déjeuner (13h30)">Déjeuner (13h30)</option>
            <option value="Dîner (20h00)">Dîner (20h00)</option>
            <option value="Dîner (21h30)">Dîner (21h30)</option>
          </select>
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="resto-guests" className="search-field__label">
          Convives
        </label>
        <div className="search-field__input-wrap">
          <Icon name="users" size={17} className="search-field__icon" />
          <select
            id="resto-guests"
            value={restoGuests}
            onChange={(e) => onGuestsChange(e.target.value)}
            className="search-field__select"
          >
            <option value="1 personne">1 personne</option>
            <option value="2 personnes">2 personnes</option>
            <option value="4 personnes">4 personnes</option>
            <option value="6+ personnes">6+ personnes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

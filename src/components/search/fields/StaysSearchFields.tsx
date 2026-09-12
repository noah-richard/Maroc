import React from 'react';
import { CityAutocomplete } from '../CityAutocomplete';
import { GuestPicker } from './GuestPicker';
import { Icon } from '../../common/Icon/Icon';
import type { CitySuggestion } from '../../../types/search';

interface StaysSearchFieldsProps {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  isGuestPickerOpen: boolean;
  onCityChange: (val: string) => void;
  onCitySelect: (city: CitySuggestion) => void;
  onCheckInChange: (val: string) => void;
  onCheckOutChange: (val: string) => void;
  onToggleGuestPicker: () => void;
  onSelectGuests: (val: string) => void;
}

export const StaysSearchFields: React.FC<StaysSearchFieldsProps> = ({
  city,
  checkIn,
  checkOut,
  guests,
  isGuestPickerOpen,
  onCityChange,
  onCitySelect,
  onCheckInChange,
  onCheckOutChange,
  onToggleGuestPicker,
  onSelectGuests
}) => {
  return (
    <div className="search-engine__fields-grid search-engine__fields-grid--stays">
      {/* 1. Où allez-vous ? */}
      <CityAutocomplete
        label="Où allez-vous ?"
        placeholder="Ville, région, lieu..."
        value={city}
        onChange={onCityChange}
        onSelectCity={onCitySelect}
      />

      <div className="search-engine__divider" aria-hidden="true" />

      {/* 2. Arrivée */}
      <div className="search-field">
        <label htmlFor="stay-checkin" className="search-field__label">
          Arrivée
        </label>
        <div className="search-field__input-wrap">
          <Icon name="calendar" size={17} className="search-field__icon" />
          <input
            id="stay-checkin"
            type="date"
            value={checkIn}
            onChange={(e) => onCheckInChange(e.target.value)}
            className="search-field__input search-field__input--date"
            placeholder="Ajouter une date"
          />
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      {/* 3. Départ */}
      <div className="search-field">
        <label htmlFor="stay-checkout" className="search-field__label">
          Départ
        </label>
        <div className="search-field__input-wrap">
          <Icon name="calendar" size={17} className="search-field__icon" />
          <input
            id="stay-checkout"
            type="date"
            value={checkOut}
            onChange={(e) => onCheckOutChange(e.target.value)}
            className="search-field__input search-field__input--date"
            placeholder="Ajouter une date"
          />
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      {/* 4. Voyageurs */}
      <GuestPicker
        value={guests}
        isOpen={isGuestPickerOpen}
        onToggle={onToggleGuestPicker}
        onSelect={onSelectGuests}
      />
    </div>
  );
};

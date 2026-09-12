import React from 'react';
import { CityAutocomplete } from '../CityAutocomplete';
import { Icon } from '../../common/Icon/Icon';
import type { CitySuggestion } from '../../../types/search';

interface CarsSearchFieldsProps {
  city: string;
  pickupDate: string;
  dropoffDate: string;
  driverAge: string;
  onCityChange: (val: string) => void;
  onCitySelect: (city: CitySuggestion) => void;
  onPickupDateChange: (val: string) => void;
  onDropoffDateChange: (val: string) => void;
  onDriverAgeChange: (val: string) => void;
}

export const CarsSearchFields: React.FC<CarsSearchFieldsProps> = ({
  city,
  pickupDate,
  dropoffDate,
  driverAge,
  onCityChange,
  onCitySelect,
  onPickupDateChange,
  onDropoffDateChange,
  onDriverAgeChange
}) => {
  return (
    <div className="search-engine__fields-grid search-engine__fields-grid--cars">
      <CityAutocomplete
        label="Prise en charge"
        placeholder="Aéroport, gare, ville..."
        value={city}
        onChange={onCityChange}
        onSelectCity={onCitySelect}
      />

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="car-pickup" className="search-field__label">
          Début location
        </label>
        <div className="search-field__input-wrap">
          <Icon name="calendar" size={17} className="search-field__icon" />
          <input
            id="car-pickup"
            type="date"
            value={pickupDate}
            onChange={(e) => onPickupDateChange(e.target.value)}
            className="search-field__input search-field__input--date"
          />
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="car-return" className="search-field__label">
          Fin location
        </label>
        <div className="search-field__input-wrap">
          <Icon name="calendar" size={17} className="search-field__icon" />
          <input
            id="car-return"
            type="date"
            value={dropoffDate}
            onChange={(e) => onDropoffDateChange(e.target.value)}
            className="search-field__input search-field__input--date"
          />
        </div>
      </div>

      <div className="search-engine__divider" aria-hidden="true" />

      <div className="search-field">
        <label htmlFor="driver-age" className="search-field__label">
          Conducteur
        </label>
        <div className="search-field__input-wrap">
          <Icon name="car" size={17} className="search-field__icon" />
          <select
            id="driver-age"
            value={driverAge}
            onChange={(e) => onDriverAgeChange(e.target.value)}
            className="search-field__select"
          >
            <option value="25 ans et +">25 ans et +</option>
            <option value="21 - 24 ans">21 - 24 ans</option>
            <option value="18 - 20 ans">18 - 20 ans</option>
          </select>
        </div>
      </div>
    </div>
  );
};

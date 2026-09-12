import React from 'react';
import { Icon } from '../../common/Icon/Icon';

interface GuestPickerProps {
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
}

const GUEST_OPTIONS = [
  '1 voyageur',
  '2 voyageurs',
  '3 voyageurs',
  '4+ voyageurs (Famille / Groupe)'
];

export const GuestPicker: React.FC<GuestPickerProps> = ({
  value,
  isOpen,
  onToggle,
  onSelect
}) => {
  return (
    <div className="search-field search-field--select">
      <label id="guests-label" className="search-field__label">
        Voyageurs
      </label>
      <div
        className="search-field__input-wrap search-field__trigger"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="guests-label"
      >
        <Icon name="users" size={17} className="search-field__icon" />
        <span className="search-field__val-text">{value}</span>
        <Icon name="chevron-down" size={14} className="search-field__chevron" />
      </div>

      {isOpen && (
        <div className="search-field__dropdown" role="listbox">
          {GUEST_OPTIONS.map((opt) => (
            <div
              key={opt}
              role="option"
              aria-selected={value === opt}
              className={`search-field__dropdown-item ${value === opt ? 'is-selected' : ''}`}
              onClick={() => onSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

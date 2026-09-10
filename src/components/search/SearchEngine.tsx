import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SearchCategory, CitySuggestion } from '../../types/search';
import { SearchTabs } from './SearchTabs';
import { CityAutocomplete } from './CityAutocomplete';
import { resolveCitySlug } from '../../data/cities.data';
import { Icon } from '../common/Icon/Icon';
import { Button } from '../common/Button/Button';
import './SearchEngine.css';

interface SearchEngineProps {
  onSearchSubmit?: (params: { category: SearchCategory; data: Record<string, any> }) => void;
}

export const SearchEngine: React.FC<SearchEngineProps> = ({ onSearchSubmit }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<SearchCategory>('stays');

  // Stays State
  const [stayCity, setStayCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [stayGuests, setStayGuests] = useState('2 voyageurs');
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);

  // Cars State
  const [carCity, setCarCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [driverAge, setDriverAge] = useState('25 ans et +');

  // Restaurants State
  const [restoCity, setRestoCity] = useState('');
  const [restoDate, setRestoDate] = useState('');
  const [restoTime, setRestoTime] = useState('Dîner (20h00)');
  const [restoGuests, setRestoGuests] = useState('2 personnes');

  // Search Feedback / Toast
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleCityPicked = (city: CitySuggestion) => {
    const slug = city.slug || resolveCitySlug(city.name);
    navigate(`/destinations/${slug}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let queryData: Record<string, any> = {};

    const rawCity =
      activeCategory === 'stays'
        ? stayCity
        : activeCategory === 'cars'
        ? carCity
        : restoCity;

    if (rawCity && rawCity.trim()) {
      const slug = resolveCitySlug(rawCity);
      navigate(`/destinations/${slug}`);
      return;
    }

    if (activeCategory === 'stays') {
      const destination = stayCity.trim() || 'Marrakech';
      queryData = { destination, checkIn, checkOut, guests: stayGuests };
      setSearchFeedback(`Recherche d'hébergements à ${destination}... Disponibilités trouvées !`);
    } else if (activeCategory === 'cars') {
      const location = carCity.trim() || 'Casablanca';
      queryData = { location, pickupDate, dropoffDate, driverAge };
      setSearchFeedback(`Recherche de véhicules à ${location}... Tarifs négociés affichés !`);
    } else {
      const location = restoCity.trim() || 'Rabat';
      queryData = { location, restoDate, restoTime, guests: restoGuests };
      setSearchFeedback(`Recherche des meilleures tables à ${location}... Tables disponibles !`);
    }

    if (onSearchSubmit) {
      onSearchSubmit({ category: activeCategory, data: queryData });
    }

    setTimeout(() => {
      setSearchFeedback(null);
    }, 4500);
  };

  return (
    <div className="search-engine" id="moteur-recherche">
      {/* CATEGORY TABS (Floating above main bar) */}
      <SearchTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* MAIN SEARCH FORM BAR */}
      <form
        className="search-engine__bar"
        onSubmit={handleSearch}
        role="search"
        aria-label="Formulaire de réservation"
      >
        {/* ========================================================
            CATEGORY 1: HÉBERGEMENTS (STAYS)
            ======================================================== */}
        {activeCategory === 'stays' && (
          <div className="search-engine__fields-grid search-engine__fields-grid--stays">
            {/* 1. Où allez-vous ? */}
            <CityAutocomplete
              label="Où allez-vous ?"
              placeholder="Ville, région, lieu..."
              value={stayCity}
              onChange={setStayCity}
              onSelectCity={handleCityPicked}
            />

            <div className="search-engine__divider" aria-hidden="true" />

            {/* 2. Arrivée */}
            <div className="search-field">
              <label htmlFor="stay-checkin" className="search-field__label">Arrivée</label>
              <div className="search-field__input-wrap">
                <Icon name="calendar" size={17} className="search-field__icon" />
                <input
                  id="stay-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="search-field__input search-field__input--date"
                  placeholder="Ajouter une date"
                />
              </div>
            </div>

            <div className="search-engine__divider" aria-hidden="true" />

            {/* 3. Départ */}
            <div className="search-field">
              <label htmlFor="stay-checkout" className="search-field__label">Départ</label>
              <div className="search-field__input-wrap">
                <Icon name="calendar" size={17} className="search-field__icon" />
                <input
                  id="stay-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="search-field__input search-field__input--date"
                  placeholder="Ajouter une date"
                />
              </div>
            </div>

            <div className="search-engine__divider" aria-hidden="true" />

            {/* 4. Voyageurs */}
            <div className="search-field search-field--select">
              <label id="guests-label" className="search-field__label">Voyageurs</label>
              <div
                className="search-field__input-wrap search-field__trigger"
                onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
                role="button"
                tabIndex={0}
                aria-haspopup="listbox"
                aria-expanded={isGuestPickerOpen}
                aria-labelledby="guests-label"
              >
                <Icon name="users" size={17} className="search-field__icon" />
                <span className="search-field__val-text">{stayGuests}</span>
                <Icon name="chevron-down" size={14} className="search-field__chevron" />
              </div>

              {isGuestPickerOpen && (
                <div className="search-field__dropdown">
                  {['1 voyageur', '2 voyageurs', '3 voyageurs', '4+ voyageurs (Famille / Groupe)'].map((opt) => (
                    <div
                      key={opt}
                      className={`search-field__dropdown-item ${stayGuests === opt ? 'is-selected' : ''}`}
                      onClick={() => {
                        setStayGuests(opt);
                        setIsGuestPickerOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            CATEGORY 2: VOITURES (CARS)
            ======================================================== */}
        {activeCategory === 'cars' && (
          <div className="search-engine__fields-grid search-engine__fields-grid--cars">
            <CityAutocomplete
              label="Prise en charge"
              placeholder="Aéroport, gare, ville..."
              value={carCity}
              onChange={setCarCity}
              onSelectCity={handleCityPicked}
            />

            <div className="search-engine__divider" aria-hidden="true" />

            <div className="search-field">
              <label htmlFor="car-pickup" className="search-field__label">Début location</label>
              <div className="search-field__input-wrap">
                <Icon name="calendar" size={17} className="search-field__icon" />
                <input
                  id="car-pickup"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="search-field__input search-field__input--date"
                />
              </div>
            </div>

            <div className="search-engine__divider" aria-hidden="true" />

            <div className="search-field">
              <label htmlFor="car-return" className="search-field__label">Fin location</label>
              <div className="search-field__input-wrap">
                <Icon name="calendar" size={17} className="search-field__icon" />
                <input
                  id="car-return"
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="search-field__input search-field__input--date"
                />
              </div>
            </div>

            <div className="search-engine__divider" aria-hidden="true" />

            <div className="search-field">
              <label htmlFor="driver-age" className="search-field__label">Conducteur</label>
              <div className="search-field__input-wrap">
                <Icon name="car" size={17} className="search-field__icon" />
                <select
                  id="driver-age"
                  value={driverAge}
                  onChange={(e) => setDriverAge(e.target.value)}
                  className="search-field__select"
                >
                  <option value="25 ans et +">25 ans et +</option>
                  <option value="21 - 24 ans">21 - 24 ans</option>
                  <option value="18 - 20 ans">18 - 20 ans</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            CATEGORY 3: RESTAURANTS
            ======================================================== */}
        {activeCategory === 'restaurants' && (
          <div className="search-engine__fields-grid search-engine__fields-grid--restaurants">
            <CityAutocomplete
              label="Où dîner ?"
              placeholder="Ville ou quartier..."
              value={restoCity}
              onChange={setRestoCity}
              onSelectCity={handleCityPicked}
            />

            <div className="search-engine__divider" aria-hidden="true" />

            <div className="search-field">
              <label htmlFor="resto-date" className="search-field__label">Date</label>
              <div className="search-field__input-wrap">
                <Icon name="calendar" size={17} className="search-field__icon" />
                <input
                  id="resto-date"
                  type="date"
                  value={restoDate}
                  onChange={(e) => setRestoDate(e.target.value)}
                  className="search-field__input search-field__input--date"
                />
              </div>
            </div>

            <div className="search-engine__divider" aria-hidden="true" />

            <div className="search-field">
              <label htmlFor="resto-time" className="search-field__label">Créneau</label>
              <div className="search-field__input-wrap">
                <Icon name="utensils" size={17} className="search-field__icon" />
                <select
                  id="resto-time"
                  value={restoTime}
                  onChange={(e) => setRestoTime(e.target.value)}
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
              <label htmlFor="resto-guests" className="search-field__label">Convives</label>
              <div className="search-field__input-wrap">
                <Icon name="users" size={17} className="search-field__icon" />
                <select
                  id="resto-guests"
                  value={restoGuests}
                  onChange={(e) => setRestoGuests(e.target.value)}
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
        )}

        {/* PRIMARY ACTION CTA: RECHERCHER */}
        <div className="search-engine__submit-wrap">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="search-engine__submit-btn"
            leftIcon={<Icon name="search" size={20} />}
          >
            Rechercher
          </Button>
        </div>
      </form>

      {/* INTERACTIVE SEARCH FEEDBACK TOAST */}
      {searchFeedback && (
        <div className="search-feedback-toast" role="status" aria-live="polite">
          <Icon name="check" size={18} />
          <span>{searchFeedback}</span>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SearchCategory, CitySuggestion } from '../../types/search';
import { SearchTabs } from './SearchTabs';
import { StaysSearchFields } from './fields/StaysSearchFields';
import { CarsSearchFields } from './fields/CarsSearchFields';
import { DiningSearchFields } from './fields/DiningSearchFields';
import { resolveCitySlug } from '../../data/cities.data';
import { Icon } from '../common/Icon/Icon';
import { Button } from '../common/Button/Button';
import './SearchEngine.css';
import './SearchFields.css';

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

  // Feedback Toast State
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
      setSearchFeedback(`Recherche de véhicules à ${location}... Véhicules disponibles affichés !`);
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
      {/* Floating Category Tabs */}
      <SearchTabs
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Search Form Bar */}
      <form
        className="search-engine__bar"
        onSubmit={handleSearch}
        role="search"
        aria-label="Formulaire de réservation"
      >
        {activeCategory === 'stays' && (
          <StaysSearchFields
            city={stayCity}
            checkIn={checkIn}
            checkOut={checkOut}
            guests={stayGuests}
            isGuestPickerOpen={isGuestPickerOpen}
            onCityChange={setStayCity}
            onCitySelect={handleCityPicked}
            onCheckInChange={setCheckIn}
            onCheckOutChange={setCheckOut}
            onToggleGuestPicker={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
            onSelectGuests={(opt) => {
              setStayGuests(opt);
              setIsGuestPickerOpen(false);
            }}
          />
        )}

        {activeCategory === 'cars' && (
          <CarsSearchFields
            city={carCity}
            pickupDate={pickupDate}
            dropoffDate={dropoffDate}
            driverAge={driverAge}
            onCityChange={setCarCity}
            onCitySelect={handleCityPicked}
            onPickupDateChange={setPickupDate}
            onDropoffDateChange={setDropoffDate}
            onDriverAgeChange={setDriverAge}
          />
        )}

        {activeCategory === 'restaurants' && (
          <DiningSearchFields
            city={restoCity}
            restoDate={restoDate}
            restoTime={restoTime}
            restoGuests={restoGuests}
            onCityChange={setRestoCity}
            onCitySelect={handleCityPicked}
            onDateChange={setRestoDate}
            onTimeChange={setRestoTime}
            onGuestsChange={setRestoGuests}
          />
        )}

        {/* Primary Action Button */}
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

      {/* Interactive Feedback Toast */}
      {searchFeedback && (
        <div className="search-feedback-toast" role="status" aria-live="polite">
          <Icon name="check" size={18} />
          <span>{searchFeedback}</span>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Icon } from '../../common/Icon/Icon';
import type { WeatherInfo } from '../../../types/destinationPage';
import './DestinationWeather.css';

interface DestinationWeatherProps {
  weather: WeatherInfo;
}

export const DestinationWeather: React.FC<DestinationWeatherProps> = ({ weather }) => {
  return (
    <div className="destination-weather" aria-label={`Météo actuelle: ${weather.temperature}°C, ${weather.condition}`}>
      <div className="destination-weather__top">
        <span className="destination-weather__icon" aria-hidden="true">
          <Icon name="sun" size={24} color="#FDB813" />
        </span>
        <span className="destination-weather__temp">{weather.temperature}°C</span>
        <span className="destination-weather__arrow" aria-hidden="true">
          <Icon name="arrow-right" size={14} />
        </span>
      </div>
      <div className="destination-weather__details">
        <span className="destination-weather__label">{weather.label}</span>
        <span className="destination-weather__condition">{weather.condition}</span>
      </div>
    </div>
  );
};

import type { CityDestination } from '../types/destinationPage';
import { marrakechDestination } from './destinations/cities/marrakech';
import { casablancaDestination } from './destinations/cities/casablanca';
import { rabatDestination } from './destinations/cities/rabat';
import { fesDestination } from './destinations/cities/fes';
import { tangerDestination } from './destinations/cities/tanger';
import { createDestinationAliases } from './destinations/cities/aliases';

const BASE_CITIES: Record<string, CityDestination> = {
  marrakech: marrakechDestination,
  casablanca: casablancaDestination,
  rabat: rabatDestination,
  fes: fesDestination,
  tanger: tangerDestination
};

export const CITY_DESTINATIONS_DATA: Record<string, CityDestination> = {
  ...BASE_CITIES,
  ...createDestinationAliases(BASE_CITIES)
};

/**
 * Récupère une destination par son slug canonique normalisé
 */
export const getDestinationBySlug = (rawSlug: string): CityDestination | null => {
  if (!rawSlug) return null;
  const normalized = rawSlug.toLowerCase().trim();
  return CITY_DESTINATIONS_DATA[normalized] || null;
};

/**
 * Retourne la liste de tous les slugs supportés
 */
export const getAllDestinationSlugs = (): string[] => {
  return Object.keys(CITY_DESTINATIONS_DATA);
};

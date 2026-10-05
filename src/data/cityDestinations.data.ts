import type { CityDestination } from '../types/destinationPage';
import { marrakechDestination } from './destinations/cities/marrakech';
import { casablancaDestination } from './destinations/cities/casablanca';
import { rabatDestination } from './destinations/cities/rabat';
import { fesDestination } from './destinations/cities/fes';
import { tangerDestination } from './destinations/cities/tanger';
import { agadirDestination } from './destinations/cities/agadir';
import { meknesDestination } from './destinations/cities/meknes';
import { ouarzazateDestination } from './destinations/cities/ouarzazate';
import { essaouiraDestination } from './destinations/cities/essaouira';

export const CITY_DESTINATIONS_DATA: Record<string, CityDestination> = {
  marrakech: marrakechDestination,
  casablanca: casablancaDestination,
  rabat: rabatDestination,
  fes: fesDestination,
  tanger: tangerDestination,
  agadir: agadirDestination,
  meknes: meknesDestination,
  ouarzazate: ouarzazateDestination,
  essaouira: essaouiraDestination
};

/**
 * Récupère une destination par son slug canonique normalisé
 */
export const getDestinationBySlug = (rawSlug: string): CityDestination | null => {
  if (!rawSlug) return null;
  const normalized = rawSlug.toLowerCase().trim();

  // 1. Check custom destinations from localStorage
  try {
    const rawCustom = localStorage.getItem('dlm_custom_city_destinations_v2');
    if (rawCustom) {
      const customMap = JSON.parse(rawCustom);
      if (customMap[normalized]) {
        return customMap[normalized];
      }
    }
  } catch (e) {
    console.warn('Error reading custom city destinations', e);
  }

  // 2. Fallback to built-in destinations
  return CITY_DESTINATIONS_DATA[normalized] || null;
};

/**
 * Retourne la liste de tous les slugs supportés (statiques + créés par admin)
 */
export const getAllDestinationSlugs = (): string[] => {
  const staticSlugs = Object.keys(CITY_DESTINATIONS_DATA);
  try {
    const rawCustom = localStorage.getItem('dlm_custom_city_destinations_v2');
    if (rawCustom) {
      const customMap = JSON.parse(rawCustom);
      const customSlugs = Object.keys(customMap);
      return Array.from(new Set([...staticSlugs, ...customSlugs]));
    }
  } catch (e) {
    console.warn('Error reading custom slugs', e);
  }
  return staticSlugs;
};

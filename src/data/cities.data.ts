import type { CitySuggestion } from '../types/search';

export const MOROCCAN_CITIES: CitySuggestion[] = [
  { name: 'Marrakech', slug: 'marrakech', region: 'Haut Atlas & Al Haouz', type: 'imperial' },
  { name: 'Casablanca', slug: 'casablanca', region: 'Grand Casablanca & Côte Atlantique', type: 'coastal' },
  { name: 'Rabat', slug: 'rabat', region: 'Rabat-Salé-Kénitra', type: 'coastal' },
  { name: 'Tanger', slug: 'tanger', region: 'Détroit de Gibraltar & Rif', type: 'coastal' },
  { name: 'Fès', slug: 'fes', region: 'Fès-Meknès', type: 'imperial' },
  { name: 'Agadir', slug: 'agadir', region: 'Souss-Massa & Baie de Taghazout', type: 'coastal' },
  { name: 'Essaouira', slug: 'essaouira', region: 'Mogador & Côte Atlantique', type: 'coastal' },
  { name: 'Chefchaouen', slug: 'chefchaouen', region: 'La Perle Bleue du Rif', type: 'mountain' },
  { name: 'Ouarzazate', slug: 'ouarzazate', region: 'Portes du Désert & Vallées du Sud', type: 'desert' },
  { name: 'Meknès', slug: 'meknes', region: 'Cité Ismaélienne & Volubilis', type: 'imperial' },
  { name: 'Dakhla', slug: 'dakhla', region: 'Lagune & Dunes Sahariennes', type: 'coastal' },
  { name: 'Merzouga', slug: 'merzouga', region: 'Erg Chebbi & Dunes du Sahara', type: 'desert' }
];

export function resolveCitySlug(cityName: string): string {
  const normalized = cityName
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const match = MOROCCAN_CITIES.find(
    (c) =>
      c.slug === normalized ||
      c.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normalized
  );

  return match?.slug || normalized;
}

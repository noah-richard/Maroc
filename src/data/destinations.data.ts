import type { Destination } from '../types/destination';

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'dest-marrakech',
    slug: 'marrakech',
    name: 'Marrakech',
    subtitle: 'La ville ocre et ses merveilles',
    imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80',
    region: 'interior',
    altText: 'Minaret de la Koutoubia et palmiers au coucher de soleil à Marrakech'
  },
  {
    id: 'dest-casablanca',
    slug: 'casablanca',
    name: 'Casablanca',
    subtitle: 'Modernité et art de vivre',
    imageUrl: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80',
    region: 'coast',
    altText: 'Majestueuse Mosquée Hassan II au bord de l’océan Atlantique à Casablanca'
  },
  {
    id: 'dest-rabat',
    slug: 'rabat',
    name: 'Rabat',
    subtitle: 'Histoire et élégance',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
    region: 'coast',
    altText: 'Tour Hassan et colonnes historiques en pierre ocre à Rabat'
  },
  {
    id: 'dest-fes',
    slug: 'fes',
    name: 'Fès',
    subtitle: 'La médina authentique',
    imageUrl: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
    region: 'interior',
    altText: 'Porte Bab Bou Jeloud et ruelles chargées d’histoire de la médina de Fès'
  },
  {
    id: 'dest-tanger',
    slug: 'tanger',
    name: 'Tanger',
    subtitle: 'Entre deux continents',
    imageUrl: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80',
    region: 'coast',
    altText: 'Médina blanche de Tanger dominant la baie et le détroit de Gibraltar'
  }
];

export const COASTAL_DESTINATIONS = [
  { name: 'Rabat', slug: 'rabat' },
  { name: 'Casablanca', slug: 'casablanca' },
  { name: 'Agadir', slug: 'agadir' },
  { name: 'Tanger', slug: 'tanger' }
];

export const MOUNTAIN_DESTINATIONS = [
  { name: 'Marrakech', slug: 'marrakech' },
  { name: 'Fès', slug: 'fes' },
  { name: 'Meknès', slug: 'meknes' },
  { name: 'Ouarzazate', slug: 'ouarzazate' },
  { name: 'Essaouira', slug: 'essaouira' }
];

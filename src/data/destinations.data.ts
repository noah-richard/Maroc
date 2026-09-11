import type { Destination } from '../types/destination';
import rabatImg from '../assets/cities/rabat.jpg';
import casablancaImg from '../assets/cities/casablanca.jpg';
import agadirImg from '../assets/cities/agadir.jpg';
import tangerImg from '../assets/cities/tanger.jpg';
import marrakechImg from '../assets/cities/marrakech.jpg';
import fesImg from '../assets/cities/fes.jpg';
import meknesImg from '../assets/cities/meknes.jpg';
import ouarzazateImg from '../assets/cities/ouarzazate.jpg';

export interface HomeDestination {
  id: string;
  name: string;
  slug: string;
  region: 'coastal' | 'inland';
  image: string;
  altText: string;
  description?: string;
}

export const COASTAL_DESTINATIONS: HomeDestination[] = [
  {
    id: 'dest-rabat',
    name: 'Rabat',
    slug: 'rabat',
    region: 'coastal',
    image: rabatImg,
    altText: 'Kasbah des Oudayas et Tour Hassan à Rabat'
  },
  {
    id: 'dest-casablanca',
    name: 'Casablanca',
    slug: 'casablanca',
    region: 'coastal',
    image: casablancaImg,
    altText: 'Mosquée Hassan II au bord de l’océan à Casablanca'
  },
  {
    id: 'dest-agadir',
    name: 'Agadir',
    slug: 'agadir',
    region: 'coastal',
    image: agadirImg,
    altText: 'Grande baie et plage dorée d’Agadir'
  },
  {
    id: 'dest-tanger',
    name: 'Tanger',
    slug: 'tanger',
    region: 'coastal',
    image: tangerImg,
    altText: 'Médina blanche et falaise dominant la mer à Tanger'
  }
];

export const INLAND_DESTINATIONS: HomeDestination[] = [
  {
    id: 'dest-marrakech',
    name: 'Marrakech',
    slug: 'marrakech',
    region: 'inland',
    image: marrakechImg,
    altText: 'Koutoubia et palmiers au coucher de soleil à Marrakech'
  },
  {
    id: 'dest-fes',
    name: 'Fès',
    slug: 'fes',
    region: 'inland',
    image: fesImg,
    altText: 'Porte Bab Bou Jeloud et médina de Fès'
  },
  {
    id: 'dest-meknes',
    name: 'Meknès',
    slug: 'meknes',
    region: 'inland',
    image: meknesImg,
    altText: 'Porte monumentale Bab Mansour à Meknès'
  },
  {
    id: 'dest-ouarzazate',
    name: 'Ouarzazate',
    slug: 'ouarzazate',
    region: 'inland',
    image: ouarzazateImg,
    altText: 'Kasbah fortifiée en terre et palmeraie à Ouarzazate'
  }
];

// Compatibility alias for mountain destinations
export const MOUNTAIN_DESTINATIONS = INLAND_DESTINATIONS;

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'dest-marrakech',
    slug: 'marrakech',
    name: 'Marrakech',
    subtitle: 'La ville ocre et ses merveilles',
    imageUrl: marrakechImg,
    region: 'interior',
    altText: 'Minaret de la Koutoubia et palmiers au coucher de soleil à Marrakech'
  },
  {
    id: 'dest-casablanca',
    slug: 'casablanca',
    name: 'Casablanca',
    subtitle: 'Modernité et art de vivre',
    imageUrl: casablancaImg,
    region: 'coast',
    altText: 'Majestueuse Mosquée Hassan II au bord de l’océan Atlantique à Casablanca'
  },
  {
    id: 'dest-rabat',
    slug: 'rabat',
    name: 'Rabat',
    subtitle: 'Histoire et élégance',
    imageUrl: rabatImg,
    region: 'coast',
    altText: 'Tour Hassan et colonnes historiques en pierre ocre à Rabat'
  },
  {
    id: 'dest-fes',
    slug: 'fes',
    name: 'Fès',
    subtitle: 'La médina authentique',
    imageUrl: fesImg,
    region: 'interior',
    altText: 'Porte Bab Bou Jeloud et ruelles chargées d’histoire de la médina de Fès'
  },
  {
    id: 'dest-tanger',
    slug: 'tanger',
    name: 'Tanger',
    subtitle: 'Entre deux continents',
    imageUrl: tangerImg,
    region: 'coast',
    altText: 'Médina blanche de Tanger dominant la baie et le détroit de Gibraltar'
  }
];

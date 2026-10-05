import type { CityDestination } from '../types/destinationPage';

import { CITY_DESTINATIONS_DATA } from './cityDestinations.data';

const STORAGE_KEY = 'dlm_custom_city_destinations_v2';

export const getCustomCityDestinations = (): Record<string, CityDestination> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.warn('Failed to load custom city destinations from storage', err);
    return {};
  }
};

export const saveCustomCityDestination = (city: CityDestination): void => {
  try {
    const current = getCustomCityDestinations();
    current[city.slug.toLowerCase().trim()] = city;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Failed to save custom city destination', err);
  }
};

export const deleteCustomCityDestination = (slug: string): void => {
  try {
    const current = getCustomCityDestinations();
    delete current[slug.toLowerCase().trim()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch (err) {
    console.error('Failed to delete custom city destination', err);
  }
};

/**
 * Construit un objet CityDestination complet et prêt à l'emploi
 * pour toute nouvelle ville ajoutée par l'administrateur.
 */
export const createDefaultCityDestination = (params: {
  name: string;
  slug: string;
  region: 'coastal' | 'inland';
  heroBadge?: string;
  heroDescription?: string;
  heroImageUrl?: string;
  temperature?: number;
  weatherCondition?: string;
}): CityDestination => {
  const cleanSlug = params.slug.toLowerCase().trim();
  const heroImage = params.heroImageUrl || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80';

  return {
    id: `city-${cleanSlug}-${Date.now()}`,
    slug: cleanSlug,
    name: params.name,
    heroBadge: params.heroBadge || (params.region === 'coastal' ? 'Perle de l’Atlantique' : 'Cité Millénaire'),
    heroDescription: params.heroDescription || `Explorez ${params.name} au cœur du Maroc, un havre d’authenticité, de riads chaleureux et d'artisanat traditionnel.`,
    seoDescription: `Guide de voyage complet pour ${params.name}, Maroc : riads sélectionnés, meilleures tables et expériences inoubliables.`,
    heroImageUrl: heroImage,
    weather: {
      temperature: params.temperature || (params.region === 'coastal' ? 24 : 27),
      condition: params.weatherCondition || 'Ensoleillé et ciel dégagé',
      label: 'Aujourd\'hui'
    },
    quickInfo: {
      climate: 'Ensoleillement exceptionnel toute l’année',
      mustSee: `Médina de ${params.name}, souks traditionnels et panoramas remarquables`,
      location: params.region === 'coastal' ? 'Façade Maritime Marocaine' : 'Cœur Historique & Terres Marocaines'
    },
    gallery: [
      {
        id: `gal-1-${cleanSlug}`,
        url: heroImage,
        alt: `Panorama de ${params.name}`,
        caption: `Vue panoramique emblématique de ${params.name}`
      },
      {
        id: `gal-2-${cleanSlug}`,
        url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&auto=format&fit=crop&q=80',
        alt: `Ruelle pittoresque à ${params.name}`,
        caption: `Architecture et ruelles traditionnelles`
      },
      {
        id: `gal-3-${cleanSlug}`,
        url: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1200&auto=format&fit=crop&q=80',
        alt: `Riad et patio à ${params.name}`,
        caption: `Hospitalité et art de vivre dans les riads`
      }
    ],
    services: {
      hotels: 48,
      restaurants: 35,
      attractions: 18,
      cars: 12,
      apartments: 22
    },
    featuredAds: [
      {
        id: `ad-1-${cleanSlug}`,
        tag: 'SÉLECTION PRESTIGE',
        title: `Séjour d'Exception à ${params.name}`,
        subtitle: 'Privilèges membres Le Club : -15% et thé d’accueil offert',
        ctaText: 'Réserver avec privilège',
        imageUrl: heroImage,
        linkHref: `/destinations/${cleanSlug}#hebergements`,
        advertiser: 'Collection Riads DécouvreLeMaroc'
      }
    ],
    staticAds: [
      {
        id: `static-1-${cleanSlug}`,
        tag: 'CONCIERGERIE',
        title: 'Chauffeur Privé & Transfert',
        subtitle: 'Accueil aéroport et circuits sur mesure',
        ctaText: 'Contacter la conciergerie',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80',
        linkHref: '#contact',
        advertiser: 'DLM Mobility'
      },
      {
        id: `static-2-${cleanSlug}`,
        tag: 'GASTRONOMIE',
        title: 'Tables Gourmandes du Terroir',
        subtitle: 'Les meilleures recettes traditionnelles',
        ctaText: 'Découvrir les adresses',
        imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80',
        linkHref: `/destinations/${cleanSlug}#restaurants`,
        advertiser: 'DLM Gastronomie'
      },
      {
        id: `static-3-${cleanSlug}`,
        tag: 'LE CLUB',
        title: 'Rejoignez Le Club VIP',
        subtitle: 'Avantages exclusifs et surclassements',
        ctaText: 'Devenir membre',
        imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80',
        linkHref: '/club',
        advertiser: 'Club DécouvreLeMaroc'
      }
    ],
    recommendations: {
      hotels: [
        {
          id: `rec-hotel-1-${cleanSlug}`,
          name: `Riad Palais ${params.name}`,
          category: 'hotels',
          imageUrl: heroImage,
          rating: 4.92,
          reviewsCount: 84,
          location: `Centre Historique, ${params.name}`,
          badge: 'Coup de Cœur',
          tags: ['Piscine', 'Terrasse panoramique', 'Petit-déjeuner inclus'],
          priceStartingFrom: 1200,
          currency: 'MAD',
          pricePeriod: 'par nuit'
        }
      ],
      restaurants: [
        {
          id: `rec-resto-1-${cleanSlug}`,
          name: `La Table de ${params.name}`,
          category: 'restaurants',
          imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80',
          rating: 4.88,
          reviewsCount: 62,
          location: `${params.name}`,
          badge: 'Gastronomique',
          tags: ['Cuisine Marocaine', 'Pastilla', 'Terrasse'],
          priceStartingFrom: 250,
          currency: 'MAD',
          pricePeriod: 'menu dégustation'
        }
      ],
      attractions: [
        {
          id: `rec-attr-1-${cleanSlug}`,
          name: `Visite Guidée des Merveilles de ${params.name}`,
          category: 'attractions',
          imageUrl: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&auto=format&fit=crop&q=80',
          rating: 4.95,
          reviewsCount: 110,
          location: `${params.name}`,
          badge: 'Incontournable',
          tags: ['Guide certifié', 'Histoire', 'Artisanat'],
          priceStartingFrom: 350,
          currency: 'MAD',
          pricePeriod: 'par groupe'
        }
      ],
      cars: [],
      apartments: []
    },
    featuredExperiences: [
      {
        id: `exp-1-${cleanSlug}`,
        tag: 'EXPÉRIENCE AUTHENTIQUE',
        tagType: 'experience',
        title: `Immersion et Secrets de ${params.name}`,
        metaInfo: 'Durée : 1 journée privée',
        imageUrl: heroImage,
        badge: 'Certifié DLM',
        rating: 4.96,
        description: `Partez avec un guide natif pour découvrir les ateliers d'artisans et panoramas secrets de ${params.name}.`
      }
    ],
    support: {
      headline: `Besoin d'aide pour votre séjour à ${params.name} ?`,
      subheadline: 'Notre conciergerie locale vous répond sur WhatsApp 7j/7.',
      whatsappNumber: '+212661000000',
      whatsappUrl: 'https://wa.me/212661000000',
      phoneNumber: '+212 522 00 00 00',
      phoneDisplay: '+212 522 00 00 00',
      availability: 'Disponible 7j/7 de 8h à 22h',
      agentAvatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      advisorName: 'Yassine & Soukaina',
      advisorRole: 'Concierges Privés Maroc'
    },
    trustPoints: [
      {
        id: 'tp-1',
        icon: 'shield-check',
        title: 'Établissements Certifiés',
        description: 'Chaque adresse est inspectée et sélectionnée selon nos standards d’accueil.'
      },
      {
        id: 'tp-2',
        icon: 'gift',
        title: 'Privilèges Le Club',
        description: 'Bénéficiez de remises négociées et d’attentions exclusives dès votre arrivée.'
      },
      {
        id: 'tp-3',
        icon: 'phone',
        title: 'Assistance 24/7 sur Place',
        description: 'Une équipe marocaine disponible pour résoudre chaque imprévu.'
      }
    ]
  };
};

/**
 * Récupère une destination par son slug en intégrant les destinations créées par les admins
 */
export const getDynamicDestinationBySlug = (rawSlug: string): CityDestination | null => {
  if (!rawSlug) return null;
  const normalized = rawSlug.toLowerCase().trim();

  // 1. Chercher d'abord dans les villes personnalisées/modifiées par l'admin
  const customCities = getCustomCityDestinations();
  if (customCities[normalized]) {
    return customCities[normalized];
  }

  // 2. Sinon, chercher dans le catalogue natif
  return CITY_DESTINATIONS_DATA[normalized] || null;
};

import type { CityDestination } from '../../../../types/destinationPage';
import { tangerRecommendations } from './recommendations';

export const tangerDestination: CityDestination = {
  id: 'dest-tanger',
  slug: 'tanger',
  name: 'Tanger',
  heroBadge: 'Carrefour des Civilisations',
  heroDescription:
    'Là où la Méditerranée embrasse l’Atlantique, une ville mythique chargée de légendes.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 23,
    condition: 'Brise du détroit ensoleillée',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Méditerranéen maritime agréable',
    mustSee: 'Cap Spartel, Grottes d’Hercule, Café Hafa, Kasbah',
    location: 'Détroit de Gibraltar'
  },
  gallery: [
    {
      id: 'gal-t-1',
      url: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1200&q=80',
      alt: 'Médina blanche de Tanger au bord du détroit',
      title: 'Baie de Tanger'
    }
  ],
  services: {
    hotels: 220,
    restaurants: 280,
    attractions: 75,
    cars: 180,
    apartments: 210
  },
  featuredAds: [
    {
      id: 'ad-t-1',
      tag: 'PALACE MYTHIQUE',
      badge: 'HÔTEL HISTORIQUE',
      title: 'El Minzah Hotel 5★ — Tanger',
      subtitle: 'Légende hispano-mauresque ayant accueilli Churchill et Matisse',
      ctaText: 'Explorer le palace',
      imageUrl:
        'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'El Minzah Collection'
    },
    {
      id: 'ad-t-2',
      tag: 'LUXE DES HAUTEURS',
      badge: 'PALACE 5 ÉTOILES',
      title: 'Fairmont Tazi Palace Tanger',
      subtitle: 'Ancien palais restauré niché au sommet des collines boisées de Tanger',
      ctaText: 'Découvrir les suites',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Fairmont Hotels'
    },
    {
      id: 'ad-t-3',
      tag: 'CHARME & JARDINS',
      badge: 'DEMEURE D’EXCEPTION',
      title: 'Villa Mabrouka — Vue sur le Détroit',
      subtitle: 'L’ancienne résidence tangéroise d’Yves Saint Laurent métamorphosée en havre secret',
      ctaText: 'Visiter la villa',
      imageUrl:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Villa Mabrouka'
    }
  ],
  staticAds: [
    {
      id: 'ad-ts-1',
      tag: 'CAFÉ HAFA',
      title: 'Thé à la menthe face à l’Espagne',
      subtitle: 'Une terrasse mythique au coucher de soleil',
      ctaText: 'En savoir plus',
      imageUrl:
        'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80',
      linkHref: '#attractions'
    },
    {
      id: 'ad-ts-2',
      tag: 'Royal Air Maroc',
      title: 'Envolez-vous vers Tanger Ibn Battouta',
      subtitle: 'Liaisons régulières vers toute l’Europe',
      ctaText: 'Réserver',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      linkHref: 'https://www.royalairmaroc.com'
    },
    {
      id: 'ad-ts-3',
      tag: 'SURF & DÉTENTE',
      title: 'Les plages d’Achakar',
      subtitle: 'Entre Atlantique et vagues sauvages',
      ctaText: 'Découvrir',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    }
  ],
  recommendations: tangerRecommendations,
  featuredExperiences: [
    {
      id: 'tfea-1',
      tag: 'LÉGENDE',
      tagType: 'highlight',
      title: 'Coucher de soleil au Café Hafa',
      metaInfo: 'Terrasse mythique dominant le détroit',
      imageUrl:
        'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre séjour à Tanger ?',
    subheadline: 'Nos conseillers vous répondent pour préparer votre escapade au détroit.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20visiter%20Tanger',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'ttrust-1',
      icon: 'palmtree',
      title: 'Porte du Maroc & de l’Afrique',
      description: 'Cosmopolite, vibrante et inspirante'
    },
    {
      id: 'ttrust-2',
      icon: 'heart',
      title: 'Panoramas uniques',
      description: 'Au carrefour de l’Atlantique et de la Méditerranée'
    },
    {
      id: 'ttrust-3',
      icon: 'shield-check',
      title: 'Sélection d’adresses vérifiées',
      description: 'Hôtels de charme et cafés mythiques recommandés'
    },
    {
      id: 'ttrust-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Accompagnement local pour votre séjour'
    }
  ]
};

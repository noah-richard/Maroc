import type { CityDestination } from '../../../../types/destinationPage';
import { casablancaRecommendations } from './recommendations';

export const casablancaDestination: CityDestination = {
  id: 'dest-casablanca',
  slug: 'casablanca',
  name: 'Casablanca',
  heroBadge: 'Métropole Économique & Océanique',
  heroDescription:
    'Dynamisme, architecture Art Déco et splendeur maritime au bord de l’Atlantique.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 24,
    condition: 'Brise marine ensoleillée',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Tempéré et océanique',
    mustSee: 'Mosquée Hassan II, Corniche d’Aïn Diab, Quartier Habous',
    location: 'Côte atlantique centrale'
  },
  gallery: [
    {
      id: 'gal-c-1',
      url: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mosquée Hassan II émergeant au-dessus de l’océan',
      title: 'Mosquée Hassan II'
    }
  ],
  services: {
    hotels: 380,
    restaurants: 520,
    attractions: 85,
    cars: 340,
    apartments: 290
  },
  featuredAds: [
    {
      id: 'ad-c-1',
      tag: 'PALACE & OCÉAN',
      badge: 'PALACE 5★',
      title: 'Four Seasons Hotel Casablanca',
      subtitle: 'Élégance côtière et suites d’exception face aux vagues de l’Atlantique',
      ctaText: 'Découvrir le palace',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Four Seasons Casablanca'
    },
    {
      id: 'ad-c-2',
      tag: 'ART DÉCO & CHARME',
      badge: 'RELAIS & CHÂTEAUX',
      title: 'Hôtel Le Doge — Relais & Châteaux',
      subtitle: 'Joyau architectural des années 1930 au cœur du quartier historique',
      ctaText: 'Explorer les chambres',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Le Doge Collection'
    },
    {
      id: 'ad-c-3',
      tag: 'BUSINESS & PRESTIGE',
      badge: 'HÔTEL 5 ÉTOILES',
      title: 'Hyatt Regency Casablanca',
      subtitle: 'Panorama spectaculaire sur la Mosquée Hassan II et la médina',
      ctaText: 'Voir les offres',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Hyatt Regency'
    },
    {
      id: 'ad-c-4',
      tag: 'GASTRONOMIE MARINE',
      badge: 'TABLE ICONIQUE',
      title: 'Le Cabestan Ocean View',
      subtitle: 'Institution gastronomique méditerranéenne en aplomb des falaises',
      ctaText: 'Réserver une table',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#restaurants',
      sponsor: 'Le Cabestan'
    }
  ],
  staticAds: [
    {
      id: 'ad-cs-1',
      tag: 'CORNICHE & DETENTE',
      title: 'Balade à Aïn Diab',
      subtitle: 'Clubs de plage, piscines d’eau de mer et terrasses',
      ctaText: 'Découvrir la corniche',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-cs-2',
      tag: 'Royal Air Maroc',
      title: 'Hub International Mohammed V',
      subtitle: 'Connexions directes vers plus de 90 destinations',
      ctaText: 'Réserver un vol',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      linkHref: 'https://www.royalairmaroc.com'
    },
    {
      id: 'ad-cs-3',
      tag: 'LOCATION PREMIUM',
      title: 'Berlines d’affaires avec chauffeur',
      subtitle: 'Service VIP aéroport et transferts d’affaires',
      ctaText: 'En savoir plus',
      imageUrl:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      linkHref: '#voitures'
    }
  ],
  recommendations: casablancaRecommendations,
  featuredExperiences: [
    {
      id: 'cfea-1',
      tag: 'INCONTOURNABLE',
      tagType: 'highlight',
      title: 'Visite guidée de la Mosquée Hassan II',
      metaInfo: 'Minaret de 210m et chef d’œuvre d’artisanat',
      imageUrl:
        'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre séjour à Casablanca ?',
    subheadline: 'Notre équipe vous accompagne pour un séjour professionnel ou touristique.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20mon%20voyage%20%C3%A0%20Casablanca',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'ctrust-1',
      icon: 'palmtree',
      title: 'Métropole dynamique',
      description: 'Le cœur battant de l’économie et de la culture marocaine'
    },
    {
      id: 'ctrust-2',
      icon: 'heart',
      title: 'Expériences océaniques',
      description: 'Corniches, architecture Art Déco et saveurs maritimes'
    },
    {
      id: 'ctrust-3',
      icon: 'shield-check',
      title: 'Sélection d’adresses vérifiées',
      description: 'Hôtels d’affaires et tables recommandés'
    },
    {
      id: 'ctrust-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Accompagnement dédié pour votre séjour'
    }
  ]
};

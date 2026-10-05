import type { CityDestination } from '../../../../types/destinationPage';
import { fesRecommendations } from './recommendations';

export const fesDestination: CityDestination = {
  id: 'dest-fes',
  slug: 'fes',
  name: 'Fès',
  heroBadge: 'Cœur Spirituel & Artisanal',
  heroDescription:
    'Plongez dans la plus grande médina piétonne du monde et son savoir-faire séculaire.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 26,
    condition: 'Ciel bleu limpide',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Méditerranéen chaud en été, frais en hiver',
    mustSee: 'Tanneries Chouara, Bab Bou Jeloud, Université Al Quaraouiyine',
    location: 'Plaine du Saïss'
  },
  gallery: [
    {
      id: 'gal-f-1',
      url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porte Bab Bou Jeloud de Fès',
      title: 'Bab Bou Jeloud'
    }
  ],
  services: {
    hotels: 240,
    restaurants: 190,
    attractions: 110,
    cars: 120,
    apartments: 160
  },
  featuredAds: [
    {
      id: 'ad-f-1',
      tag: 'RELAIS & CHÂTEAUX',
      badge: 'PATRIMOINE FASSI',
      title: 'Riad Fès — Relais & Châteaux',
      subtitle: 'Joyau de raffinement andalou au cœur de la médina millénaire',
      ctaText: 'Découvrir le riad',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Riad Fès Collection'
    },
    {
      id: 'ad-f-2',
      tag: 'PALACE PANORAMIQUE',
      badge: 'VUE IMPRENABLE',
      title: 'Palais Faraj Suites & Spa',
      subtitle: 'Palais arabo-mauresque dominant la colline de Fès El Bali',
      ctaText: 'Voir les suites',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Palais Faraj'
    },
    {
      id: 'ad-f-3',
      tag: 'DESIGN CONTEMPORAIN',
      badge: 'HÔTEL 5 ÉTOILES',
      title: 'Hôtel Sahrai & Spa Givenchy',
      subtitle: 'Architecture contemporaine signée Christophe Pillet et piscine à débordement',
      ctaText: 'Explorer l’hôtel',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Hôtel Sahrai Fès'
    }
  ],
  staticAds: [
    {
      id: 'ad-fs-1',
      tag: 'ARTISANAT DU CUIR',
      title: 'Visite des tanneries Chouara',
      subtitle: 'Un spectacle de couleurs vieux de 1 000 ans',
      ctaText: 'Explorer',
      imageUrl:
        'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
      linkHref: '#attractions'
    },
    {
      id: 'ad-fs-2',
      tag: 'Royal Air Maroc',
      title: 'Vols vers Fès Saïss',
      subtitle: 'Au départ de Paris, Londres et Casablanca',
      ctaText: 'Réserver',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      linkHref: 'https://www.royalairmaroc.com'
    },
    {
      id: 'ad-fs-3',
      tag: 'GASTRONOMIE FASSIE',
      title: 'La pastilla traditionnelle',
      subtitle: 'Dégustez le sommet de l’art culinaire marocain',
      ctaText: 'Voir les adresses',
      imageUrl:
        'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
      linkHref: '#restaurants'
    }
  ],
  recommendations: fesRecommendations,
  featuredExperiences: [
    {
      id: 'ffea-1',
      tag: 'SPIRITUALITÉ',
      tagType: 'highlight',
      title: 'Université Al Quaraouiyine',
      metaInfo: 'La plus ancienne université en activité du monde',
      imageUrl:
        'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre séjour à Fès ?',
    subheadline: 'Notre équipe locale vous oriente vers les guides certifiés.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20visiter%20F%C3%A8s',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'ftrust-1',
      icon: 'palmtree',
      title: 'Patrimoine millénaire',
      description: 'La plus vaste médina médiévale vivante au monde'
    },
    {
      id: 'ftrust-2',
      icon: 'heart',
      title: 'Artisanat d’or et de cuir',
      description: 'Des tanneries et ateliers ancestraux authentiques'
    },
    {
      id: 'ftrust-3',
      icon: 'shield-check',
      title: 'Riads d’exception',
      description: 'Demeures historiques restaurées dans les règles de l’art'
    },
    {
      id: 'ftrust-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Orientation dédiée pour vous repérer en médina'
    }
  ]
};

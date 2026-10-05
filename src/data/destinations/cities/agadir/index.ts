import type { CityDestination } from '../../../../types/destinationPage';
import { agadirRecommendations } from './recommendations';

export const agadirDestination: CityDestination = {
  id: 'dest-agadir',
  slug: 'agadir',
  name: 'Agadir',
  heroBadge: 'Perle du Souss & Baie Dorée',
  heroDescription:
    'Plages ensoleillées 300 jours par an, marina animée, surf à Taghazout et douceur de vivre au bord de l’Atlantique.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 26,
    condition: 'Ensoleillé & brise douce',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: '300 jours de soleil par an',
    mustSee: 'Kasbah Agadir Oufella, Marina, Promenade de la plage, Souk El Had, Vallée du Paradis',
    location: 'Sur la côte Atlantique sud'
  },
  gallery: [
    {
      id: 'gal-ag-1',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Plage dorée et baie d’Agadir',
      title: 'La baie d’Agadir'
    },
    {
      id: 'gal-ag-2',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort côtier à Taghazout Bay',
      title: 'Resort & Surf à Taghazout'
    },
    {
      id: 'gal-ag-3',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Vallée du Paradis et cascades naturelles',
      title: 'Vallée du Paradis'
    }
  ],
  services: {
    hotels: 160,
    restaurants: 240,
    attractions: 45,
    cars: 90,
    apartments: 180
  },
  featuredAds: [
    {
      id: 'ad-ag-1',
      tag: 'RESORT BALNÉAIRE',
      badge: '5 ÉTOILES',
      title: 'Hyatt Place Taghazout Bay',
      subtitle: 'Séjour d’exception surplombant l’océan, golf 18 trous et académie de surf',
      ctaText: 'Découvrir l’hôtel',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Taghazout Bay Resort'
    },
    {
      id: 'ad-ag-2',
      tag: 'CHARME & BIEN-ÊTRE',
      badge: 'BOUTIQUE HÔTEL',
      title: 'Riad Villa Blanche',
      subtitle: 'Atmosphère intimiste, spa traditionnel et cuisine raffinée du Souss',
      ctaText: 'Consulter la fiche',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Villa Blanche Agadir'
    }
  ],
  staticAds: [
    {
      id: 'ad-ags-1',
      tag: 'VUE PANORAMIQUE',
      title: 'Kasbah Agadir Oufella',
      subtitle: 'Téléphérique urbain et coucher de soleil sur toute la baie',
      ctaText: 'Explorer le site',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-ags-2',
      tag: 'ARTISANAT DU SUD',
      title: 'Souk El Had d’Agadir',
      subtitle: 'Huile d’argan pure, épices du Souss, vannerie et bijoux berbères',
      ctaText: 'Préparer sa visite',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    }
  ],
  recommendations: agadirRecommendations,
  featuredExperiences: [
    {
      id: 'exp-ag-1',
      tag: 'NATURE & RANDONNÉE',
      tagType: 'experience',
      title: 'Piscines naturelles de la Vallée du Paradis',
      metaInfo: 'Excursion d’une journée avec guide local',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-ag-2',
      tag: 'GLISSE & DÉTENTE',
      tagType: 'experience',
      title: 'Initiation au Surf & Yoga à Taghazout',
      metaInfo: 'Spot réputé mondialement à 20 min d’Agadir',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-ag-3',
      tag: 'PANORAMA HISTORIQUE',
      tagType: 'highlight',
      title: 'Téléphérique de la Kasbah Oufella',
      metaInfo: 'Vue à 360° sur l’Atlantique et le port',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin de conseils pour votre séjour à Agadir & Taghazout ?',
    subheadline: 'Notre conciergerie locale vous oriente vers les meilleures adresses de la côte.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20mon%20voyage%20%C3%A0%20Agadir',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'trust-ag-1',
      icon: 'palmtree',
      title: 'Climat ensoleillé garanti',
      description: 'Plus de 300 jours de douceur atlantique par an'
    },
    {
      id: 'trust-ag-2',
      icon: 'heart',
      title: 'Hospitalité chaleureuse du Souss',
      description: 'Accueil bienveillant et traditions locales préservées'
    },
    {
      id: 'trust-ag-3',
      icon: 'shield-check',
      title: 'Adresses sélectionnées sur place',
      description: 'Recommandations vérifiées auprès des professionnels'
    },
    {
      id: 'trust-ag-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Accompagnement adapté à votre profil de séjour'
    }
  ]
};

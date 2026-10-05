import type { CityDestination } from '../../../../types/destinationPage';
import { ouarzazateRecommendations } from './recommendations';

export const ouarzazateDestination: CityDestination = {
  id: 'dest-ouarzazate',
  slug: 'ouarzazate',
  name: 'Ouarzazate',
  heroBadge: 'Porte du Désert & Cité du Cinéma',
  heroDescription:
    'Kasbahs grandioses en pisé, palmeraies présahariennes, studios de cinéma légendaires et ksar millénaire d’Aït-ben-Haddou.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 27,
    condition: 'Ciel azur & soleil radieux',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Pré-saharien sec et ensoleillé',
    mustSee: 'Ksar d’Aït-ben-Haddou, Studios Atlas, Kasbah de Taourirt, Oasis de Fint, Gorges du Dadès',
    location: 'Portes du Grand Sud et confluence des vallées du Drâa et du Dadès'
  },
  gallery: [
    {
      id: 'gal-oz-1',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ksar d’Aït-ben-Haddou illuminé par la lumière dorée',
      title: 'Ksar d’Aït-ben-Haddou (UNESCO)'
    },
    {
      id: 'gal-oz-2',
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      alt: 'Kasbah de Taourirt aux façades ciselées',
      title: 'Kasbah de Taourirt'
    },
    {
      id: 'gal-oz-3',
      url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      alt: 'Studios de tournage cinématographique Atlas',
      title: 'Studios de Cinéma Atlas'
    }
  ],
  services: {
    hotels: 65,
    restaurants: 90,
    attractions: 40,
    cars: 55,
    apartments: 70
  },
  featuredAds: [
    {
      id: 'ad-oz-1',
      tag: 'PALACE DU DÉSERT',
      badge: '5 ÉTOILES',
      title: 'Hôtel Berbère Palace Ouarzazate',
      subtitle: 'Le refuge mythique des grandes productions cinématographiques internationales',
      ctaText: 'Consulter la fiche',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Berbère Palace'
    },
    {
      id: 'ad-oz-2',
      tag: 'EXPÉRIENCE UNIQUE',
      badge: 'LODGE DE CHARME',
      title: 'Ksar Ighnda Aït-ben-Haddou',
      subtitle: 'Élégance minérale face au monument classé au patrimoine mondial',
      ctaText: 'Explorer le lodge',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Ksar Ighnda'
    }
  ],
  staticAds: [
    {
      id: 'ad-ozs-1',
      tag: 'TOURNAGE LÉGENDAIRE',
      title: 'Plateaux Atlas Corporation Studios',
      subtitle: 'Décors originaux de Gladiator, La Momie, Kingdom of Heaven',
      ctaText: 'Visiter les studios',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-ozs-2',
      tag: 'NATURE & PALMERAIE',
      title: 'Oasis cachée de Fint',
      subtitle: 'Havre de fraîcheur entouré de falaises de roches volcaniques',
      ctaText: 'Découvrir l’oasis',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    }
  ],
  recommendations: ouarzazateRecommendations,
  featuredExperiences: [
    {
      id: 'exp-oz-1',
      tag: 'CINÉMA & PATRIMOINE',
      tagType: 'highlight',
      title: 'Traversée du Ksar d’Aït-ben-Haddou',
      metaInfo: 'Village fortifié préservé en pisé au bord de l’oued',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-oz-2',
      tag: 'AVENTURE 4X4',
      tagType: 'experience',
      title: 'Circuit des Kasbahs & Palmeraies du Dadès',
      metaInfo: 'Excursion vers les gorges spectaculaires et la vallée des roses',
      imageUrl:
        'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-oz-3',
      tag: 'DÉCOR ÉPIQUE',
      tagType: 'experience',
      title: 'Visite guidée des décors de films à CLA Studios',
      metaInfo: 'Immersion dans les coulisses du Hollywood marocain',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre voyage dans le Sud marocain ?',
    subheadline: 'Notre équipe locale vous oriente pour vos transferts, hébergements en kasbahs et circuits 4x4.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20organiser%20mon%20voyage%20%C3%A0%20Ouarzazate',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 8h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'trust-oz-1',
      icon: 'palmtree',
      title: 'Dépaysement et grands espaces',
      description: 'Entre monts de l’Atlas et étendues désertiques'
    },
    {
      id: 'trust-oz-2',
      icon: 'heart',
      title: 'Accueil berbère traditionnel',
      description: 'Hospitalité généreuse au cœur des oasis'
    },
    {
      id: 'trust-oz-3',
      icon: 'shield-check',
      title: 'Partenaires de transport certifiés',
      description: 'Véhicules tous terrains et chauffeurs expérimentés'
    },
    {
      id: 'trust-oz-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Suggestions d’itinéraires adaptées à la saison'
    }
  ]
};

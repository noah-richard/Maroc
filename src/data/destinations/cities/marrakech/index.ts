import type { CityDestination } from '../../../../types/destinationPage';
import { marrakechRecommendations } from './recommendations';

export const marrakechDestination: CityDestination = {
  id: 'dest-marrakech',
  slug: 'marrakech',
  name: 'Marrakech',
  heroBadge: 'Ville Impériale',
  heroDescription:
    'Entre tradition et modernité, vivez une expérience unique au cœur de la ville ocre.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 28,
    condition: 'Ciel dégagé',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Ensoleillé toute l’année',
    mustSee: 'Médina, Jardin Majorelle, Place Jemaa el-Fna',
    location: 'Au pied de l’Atlas'
  },
  gallery: [
    {
      id: 'gal-m-1',
      url: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minaret de la Koutoubia au coucher de soleil',
      title: 'La Koutoubia & palmeraie'
    },
    {
      id: 'gal-m-2',
      url: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=1200&q=80',
      alt: 'Piscine luxueuse entourée de palmiers dans un palace de Marrakech',
      title: 'Palace & Jardins'
    },
    {
      id: 'gal-m-3',
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cour intérieure d’un riad traditionnel orné de zelliges',
      title: 'Riad traditionnel'
    },
    {
      id: 'gal-m-4',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Désert d’Agafay et sommets de l’Atlas en arrière-plan',
      title: 'Désert d’Agafay'
    },
    {
      id: 'gal-m-5',
      url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      alt: 'Jardin Majorelle et son bleu cobalt iconique',
      title: 'Jardin Majorelle'
    },
    {
      id: 'gal-m-6',
      url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Place Jemaa el-Fna et souks animés au crépuscule',
      title: 'Place Jemaa el-Fna'
    }
  ],
  services: {
    hotels: 450,
    restaurants: 320,
    attractions: 120,
    cars: 200,
    apartments: 180
  },
  featuredAds: [
    {
      id: 'ad-f-1',
      tag: 'HÔTEL & SPA',
      title: 'Évadez-vous à Marrakech',
      subtitle: 'Des séjours d’exception sélectionnés pour vous',
      ctaText: 'Découvrir les offres',
      imageUrl:
        'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements'
    },
    {
      id: 'ad-f-2',
      tag: 'EXPÉRIENCE EXCLUSIVE',
      title: 'Les Secrets de la Palmeraie',
      subtitle: 'Villas de prestige avec personnel dédié et piscines privées',
      ctaText: 'Explorer la sélection',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#appartements'
    },
    {
      id: 'ad-f-3',
      tag: 'BIEN-ÊTRE & HAMMAM',
      title: 'Rituels orientaux au cœur de la Médina',
      subtitle: 'Soins traditionnels, massages à l’huile d’argan et sérénité',
      ctaText: 'Prendre rendez-vous',
      imageUrl:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#services'
    }
  ],
  staticAds: [
    {
      id: 'ad-s-1',
      tag: 'AVENTURE DANS L’ATLAS',
      title: 'Excursions & activités',
      subtitle: 'Buggy, quad et randonnées berbères',
      ctaText: 'Réservez maintenant',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-s-2',
      tag: 'Royal Air Maroc',
      title: 'Des vols directs vers Marrakech',
      subtitle: 'Volez aux couleurs du Royaume',
      ctaText: 'Voir les offres',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      linkHref: 'https://www.royalairmaroc.com'
    },
    {
      id: 'ad-s-3',
      tag: 'RIADS DE CHARME',
      title: 'Séjours riads d’exception',
      subtitle: 'Offres exclusives pour vos week-ends',
      ctaText: 'En profiter',
      imageUrl:
        'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80',
      linkHref: '#hebergements'
    }
  ],
  recommendations: marrakechRecommendations,
  featuredExperiences: [
    {
      id: 'feat-1',
      tag: 'ÉVÉNEMENT',
      tagType: 'event',
      title: 'Festival des Arts Populaires',
      metaInfo: '12 - 20 juin 2026',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'feat-2',
      tag: 'EXPÉRIENCE',
      tagType: 'experience',
      title: 'Vol en montgolfière',
      metaInfo: 'Au lever du soleil sur l’Atlas',
      imageUrl:
        'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'feat-3',
      tag: 'INCONTOURNABLE',
      tagType: 'highlight',
      title: 'Jardin Majorelle',
      metaInfo: 'Un lieu magique',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'feat-4',
      tag: 'GASTRONOMIE',
      tagType: 'gastronomy',
      title: 'Les meilleures tables',
      metaInfo: 'Découvrez notre sélection',
      imageUrl:
        'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre séjour à Marrakech ?',
    subheadline: 'Notre équipe vous accompagne pour un voyage sur mesure.',
    whatsappNumber: '+212612345678',
    whatsappUrl: 'https://wa.me/212612345678?text=Bonjour,%20je%20souhaite%20organiser%20mon%20voyage%20%C3%A0%20Marrakech',
    phoneNumber: '+212612345678',
    phoneDisplay: '+212 6 12 34 56 78',
    availability: 'Disponible 7j/7 de 8h à 22h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'trust-1',
      icon: 'palmtree',
      title: 'Une ville d’exception',
      description: 'Patrimoine, culture et modernité'
    },
    {
      id: 'trust-2',
      icon: 'heart',
      title: 'Des expériences uniques',
      description: 'Pour tous les voyageurs'
    },
    {
      id: 'trust-3',
      icon: 'shield-check',
      title: 'Réservation en toute confiance',
      description: 'Service client 7j/7'
    },
    {
      id: 'trust-4',
      icon: 'users',
      title: 'Une communauté de voyageurs',
      description: 'Des milliers d’avis vérifiés'
    }
  ]
};

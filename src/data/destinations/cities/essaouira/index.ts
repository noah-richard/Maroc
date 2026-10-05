import type { CityDestination } from '../../../../types/destinationPage';
import { essaouiraRecommendations } from './recommendations';

export const essaouiraDestination: CityDestination = {
  id: 'dest-essaouira',
  slug: 'essaouira',
  name: 'Essaouira',
  heroBadge: 'Cité des Alizés & Mogador',
  heroDescription:
    'Remparts battus par l’Atlantique, ruelles blanches et bleues, port aux barques de pêche et mélodies envoûtantes des Gnaouas.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 22,
    condition: 'Brise vivifiante & soleil',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Doux et ventilé par les alizés',
    mustSee: 'Skala de la Kasbah, Port de pêche, Médina UNESCO, Marché aux poissons, Sidi Kaouki',
    location: 'Côte atlantique, à 2h30 à l’ouest de Marrakech'
  },
  gallery: [
    {
      id: 'gal-es-1',
      url: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1200&q=80',
      alt: 'Remparts de la Skala et vagues de l’Atlantique à Essaouira',
      title: 'Skala de la Kasbah'
    },
    {
      id: 'gal-es-2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Port de pêche traditionnel et barques bleues',
      title: 'Port de pêche de Mogador'
    },
    {
      id: 'gal-es-3',
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ruelles lumineuses et ateliers d’artistes dans la médina',
      title: 'Médina des artistes'
    }
  ],
  services: {
    hotels: 110,
    restaurants: 160,
    attractions: 38,
    cars: 40,
    apartments: 140
  },
  featuredAds: [
    {
      id: 'ad-es-1',
      tag: 'RELAIS & CHÂTEAUX',
      badge: 'PALACE HISTORIQUE',
      title: 'Heure Bleue Palais Essaouira',
      subtitle: 'Piscine chauffée sur le toit avec vue imprenable sur l’océan et la médina',
      ctaText: 'Consulter la fiche',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Heure Bleue Palais'
    },
    {
      id: 'ad-es-2',
      tag: 'BISTRONOMIE MARINE',
      badge: 'TABLE EMBLÉMATIQUE',
      title: 'La Table Madada',
      subtitle: 'Cuisine raffinée associant saveurs marocaines d’antan et poissons de la criée',
      ctaText: 'Découvrir la carte',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#restaurants',
      sponsor: 'Madada Mogador'
    }
  ],
  staticAds: [
    {
      id: 'ad-ess-1',
      tag: 'GLISSE & NATURE',
      title: 'Kitesurf & Surf à Sidi Kaouki',
      subtitle: 'Vagues sauvages et cours tous niveaux sur la grande plage du Sud',
      ctaText: 'Réserver un cours',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-ess-2',
      tag: 'ARTISANAT DU THUYA',
      title: 'Ateliers de marqueterie de Mogador',
      subtitle: 'Le savoir-faire séculaire des maîtres artisans du bois de thuya',
      ctaText: 'Visiter les ateliers',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    }
  ],
  recommendations: essaouiraRecommendations,
  featuredExperiences: [
    {
      id: 'exp-es-1',
      tag: 'PATRIMOINE OCÉANIQUE',
      tagType: 'highlight',
      title: 'Coucher de soleil sur les remparts de la Skala',
      metaInfo: 'Lumière dorée face aux vagues et canons hispano-portugais',
      imageUrl:
        'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-es-2',
      tag: 'SAVEURS & CRIÉE',
      tagType: 'gastronomy',
      title: 'Dégustation de poissons grillés au port',
      metaInfo: 'Sardines fraîches, dorades et crevettes du jour',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-es-3',
      tag: 'CULTURE & MUSIQUE',
      tagType: 'experience',
      title: 'Festival Gnaoua & Musiques du Monde',
      metaInfo: 'Rendez-vous musical annuel incontournable sur les places historiques',
      imageUrl:
        'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin de conseils pour votre escapade à Essaouira ?',
    subheadline: 'Notre conciergerie locale vous guide vers les plus beaux riads et les meilleures adresses iodées.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20mon%20voyage%20%C3%A0%20Essaouira',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 20h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'trust-es-1',
      icon: 'palmtree',
      title: 'Douceur de vivre et alizés',
      description: 'Températures clémentes toute l’année face au grand large'
    },
    {
      id: 'trust-es-2',
      icon: 'heart',
      title: 'Ambiance bohème et artistique',
      description: 'Galeries d’art, musiques du monde et convivialité'
    },
    {
      id: 'trust-es-3',
      icon: 'shield-check',
      title: 'Sélection d’adresses vérifiées',
      description: 'Riads et tables recommandés pour leur authenticité'
    },
    {
      id: 'trust-es-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Accompagnement pour sports nautiques et séjours détente'
    }
  ]
};

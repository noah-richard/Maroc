import type { CityDestination } from '../../../../types/destinationPage';
import { rabatRecommendations } from './recommendations';

export const rabatDestination: CityDestination = {
  id: 'dest-rabat',
  slug: 'rabat',
  name: 'Rabat',
  heroBadge: 'Capitale Culturelle & Patrimoine UNESCO',
  heroDescription:
    'L’élégance d’une capitale royale entre remparts almohades et modernité du Grand Théâtre.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 25,
    condition: 'Ensoleillé et doux',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Doux et tempéré toute l’année',
    mustSee: 'Tour Hassan, Kasbah des Oudayas, Chellah',
    location: 'Embouchure du Bouregreg'
  },
  gallery: [
    {
      id: 'gal-r-1',
      url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tour Hassan et colonnes en pierre ocre à Rabat',
      title: 'Tour Hassan'
    }
  ],
  services: {
    hotels: 210,
    restaurants: 260,
    attractions: 95,
    cars: 150,
    apartments: 140
  },
  featuredAds: [
    {
      id: 'ad-r-1',
      tag: 'HÔTEL DE PRESTIGE',
      badge: 'PALACE & HISTOIRE',
      title: 'Séjours impériaux à Rabat',
      subtitle: 'Palaces et hôtels de maître au cœur de la capitale',
      ctaText: 'Explorer la sélection',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'La Tour Hassan Palace 5★'
    },
    {
      id: 'ad-r-2',
      tag: 'LUXE & MODERNITÉ',
      badge: 'DESIGN 5 ÉTOILES',
      title: 'The View Hotel Rabat & Spa',
      subtitle: 'Chambres panoramiques sur le Grand Théâtre et la vallée',
      ctaText: 'Découvrir les suites',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'The View Collection'
    },
    {
      id: 'ad-r-3',
      tag: 'RIAD D’EXCEPTION',
      badge: 'PATRIMOINE HISTORIQUE',
      title: 'Riad Dar El Kébira — Médina',
      subtitle: 'Maison d’hôtes de charme au pied de la Kasbah des Oudayas',
      ctaText: 'Voir le riad',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Riads de Charme Rabat'
    },
    {
      id: 'ad-r-4',
      tag: 'HAVRE DE PAIX',
      badge: 'ÉCRIN DE NATURE',
      title: 'La Villa Mandarine & Spa',
      subtitle: 'Détente absolue au milieu de 3 hectares d’orangers en fleur',
      ctaText: 'Réserver un séjour',
      imageUrl:
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Villa Mandarine'
    }
  ],
  staticAds: [
    {
      id: 'ad-rs-1',
      tag: 'CULTURE & HISTOIRE',
      title: 'Musées et trésors du Royaume',
      subtitle: 'Accédez aux collections d’art moderne et antique',
      ctaText: 'Découvrir',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      linkHref: '#attractions'
    },
    {
      id: 'ad-rs-2',
      tag: 'Royal Air Maroc',
      title: 'Vols directs vers Rabat-Salé',
      subtitle: 'Voyagez confortablement vers la capitale',
      ctaText: 'Réserver',
      imageUrl:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      linkHref: 'https://www.royalairmaroc.com'
    },
    {
      id: 'ad-rs-3',
      tag: 'MARINA DU BOUREGREG',
      title: 'Promenades nautiques et détente',
      subtitle: 'Vue sur la Kasbah des Oudayas',
      ctaText: 'En profiter',
      imageUrl:
        'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    }
  ],
  recommendations: rabatRecommendations,
  featuredExperiences: [
    {
      id: 'rfea-1',
      tag: 'HISTOIRE',
      tagType: 'highlight',
      title: 'Visite de la nécropole du Chellah',
      metaInfo: 'Vestiges romains et mérinides restaurés',
      imageUrl:
        'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’aide pour organiser votre séjour à Rabat ?',
    subheadline: 'Notre équipe dédiée répond à toutes vos questions.',
    whatsappNumber: '+212612345678',
    whatsappUrl: 'https://wa.me/212612345678',
    phoneNumber: '+212612345678',
    phoneDisplay: '+212 6 12 34 56 78',
    availability: 'Disponible 7j/7 de 8h à 22h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'rtrust-1',
      icon: 'palmtree',
      title: 'Capitale royale',
      description: 'Sécurité et raffinement culturel'
    },
    {
      id: 'rtrust-2',
      icon: 'heart',
      title: 'Patrimoine mondial UNESCO',
      description: 'Des monuments préservés d’exception'
    },
    {
      id: 'rtrust-3',
      icon: 'shield-check',
      title: 'Partenaires certifiés',
      description: 'Sélection rigoureuse des établissements'
    },
    {
      id: 'rtrust-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Équipe locale à votre écoute'
    }
  ]
};

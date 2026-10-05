import type { CityDestination } from '../../../../types/destinationPage';
import { meknesRecommendations } from './recommendations';

export const meknesDestination: CityDestination = {
  id: 'dest-meknes',
  slug: 'meknes',
  name: 'Meknès',
  heroBadge: 'Cité Impériale & Trésor Ismaélien',
  heroDescription:
    'Portes monumentales majestueuses, greniers royaux légendaires, vestiges romains de Volubilis et collines d’oliviers du Zerhoun.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=85',
  weather: {
    temperature: 23,
    condition: 'Climat tempéré & doux',
    label: "Aujourd'hui",
    iconName: 'sun'
  },
  quickInfo: {
    climate: 'Méditerranéen tempéré',
    mustSee: 'Bab Mansour, Bassin de l’Agdal, Hri Souani, Mausolée Moulay Ismaïl, Volubilis, Moulay Idriss',
    location: 'Région Fès-Meknès, au pied du Moyen Atlas'
  },
  gallery: [
    {
      id: 'gal-mk-1',
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      alt: 'Porte monumentale Bab Mansour à Meknès',
      title: 'Bab Mansour El Aleuj'
    },
    {
      id: 'gal-mk-2',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ruines antiques romaines de Volubilis',
      title: 'Cité romaine de Volubilis (UNESCO)'
    },
    {
      id: 'gal-mk-3',
      url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      alt: 'Hri Souani et écuries royales de Moulay Ismaïl',
      title: 'Hri Souani & Greniers Royaux'
    }
  ],
  services: {
    hotels: 75,
    restaurants: 130,
    attractions: 35,
    cars: 45,
    apartments: 95
  },
  featuredAds: [
    {
      id: 'ad-mk-1',
      tag: 'RIAD D’EXCEPTION',
      badge: 'CHARME IMPÉRIAL',
      title: 'Riad D’Or Meknès',
      subtitle: 'Havre de paix au cœur de la médina avec patio ciselé et terrasse panoramique',
      ctaText: 'Consulter la fiche',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#hebergements',
      sponsor: 'Riad D’Or Meknès'
    },
    {
      id: 'ad-mk-2',
      tag: 'PATRIMOINE HISTORIQUE',
      badge: 'UNESCO',
      title: 'Excursion privée à Volubilis & Moulay Idriss',
      subtitle: 'Découvrez la cité romaine antique et la cité sainte perchée sur les collines',
      ctaText: 'Découvrir le circuit',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      linkHref: '#activites',
      sponsor: 'Guides officiels du Zerhoun'
    }
  ],
  staticAds: [
    {
      id: 'ad-mks-1',
      tag: 'MONUMENT EMBLÉMATIQUE',
      title: 'Bab Mansour El Aleuj',
      subtitle: 'La plus majestueuse porte du Maghreb face à la place El Hedim',
      ctaText: 'Voir les détails',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      linkHref: '#activites'
    },
    {
      id: 'ad-mks-2',
      tag: 'PRODUITS DU TERROIR',
      title: 'Les Oliviers & Vins du Zerhoun',
      subtitle: 'Dégustation d’huiles d’olive médaillées et de produits locaux',
      ctaText: 'Découvrir le terroir',
      imageUrl:
        'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
      linkHref: '#restaurants'
    }
  ],
  recommendations: meknesRecommendations,
  featuredExperiences: [
    {
      id: 'exp-mk-1',
      tag: 'HISTOIRE & ARCHÉOLOGIE',
      tagType: 'highlight',
      title: 'Visite guidée des Mosaïques de Volubilis',
      metaInfo: 'Site archéologique romain classé UNESCO',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-mk-2',
      tag: 'PATRIMOINE ISMAÉLIEN',
      tagType: 'highlight',
      title: 'Le Bassin de l’Agdal & Hri Souani',
      metaInfo: 'Promenade au crépuscule au bord du grand bassin',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exp-mk-3',
      tag: 'CULTURE & SPIRITUALITÉ',
      tagType: 'experience',
      title: 'Moulay Idriss Zerhoun & panorama sacré',
      metaInfo: 'Village blanc perché et point de vue unique',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    }
  ],
  support: {
    headline: 'Besoin d’orientation pour votre étape à Meknès & Volubilis ?',
    subheadline: 'Nos conseillers locaux vous aident à planifier vos visites historiques et vos hébergements de charme.',
    whatsappNumber: '+212600000000',
    whatsappUrl: 'https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20des%20conseils%20pour%20visiter%20Mekn%C3%A8s',
    phoneNumber: '+212600000000',
    phoneDisplay: 'Assistance conciergerie DécouvreLeMaroc',
    availability: 'Disponible 7j/7 de 9h à 19h',
    agentAvatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  trustPoints: [
    {
      id: 'trust-mk-1',
      icon: 'palmtree',
      title: 'Patrimoine impérial préservé',
      description: 'L’une des 4 capitales historiques du Royaume'
    },
    {
      id: 'trust-mk-2',
      icon: 'heart',
      title: 'Rythme authentique et paisible',
      description: 'Une médina chaleureuse à l’abri de l’agitation'
    },
    {
      id: 'trust-mk-3',
      icon: 'shield-check',
      title: 'Guides et adresses sélectionnés',
      description: 'Mise en relation avec des professionnels agréés'
    },
    {
      id: 'trust-mk-4',
      icon: 'users',
      title: 'Conseils personnalisés',
      description: 'Itinéraires combinés Fès-Meknès-Volubilis'
    }
  ]
};

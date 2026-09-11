import type { CityDestination } from '../types/destinationPage';

export const CITY_DESTINATIONS_DATA: Record<string, CityDestination> = {
  marrakech: {
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
        subtitle: 'Des séjours d’exception aux meilleurs prix',
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
        title: 'Des vols vers Marrakech à partir de 1 200 MAD',
        subtitle: 'Volez aux couleurs du Royaume',
        ctaText: 'Voir les offres',
        imageUrl:
          'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
        linkHref: 'https://www.royalairmaroc.com'
      },
      {
        id: 'ad-s-3',
        tag: 'RIADS DE CHARME',
        title: 'Jusqu’à -30%',
        subtitle: 'Offres exclusives pour vos week-ends',
        ctaText: 'En profiter',
        imageUrl:
          'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80',
        linkHref: '#hebergements'
      }
    ],
    recommendations: {
      hotels: [
        {
          id: 'rec-h-1',
          name: 'Riad Ksar Anika',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 120,
          stars: 5,
          location: 'Médina, Marrakech',
          priceStartingFrom: 890,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        },
        {
          id: 'rec-h-2',
          name: 'Hôtel Selman Marrakech',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          rating: 4.6,
          reviewsCount: 210,
          stars: 5,
          location: 'Route de l’Ourika',
          priceStartingFrom: 2500,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: true
        },
        {
          id: 'rec-h-3',
          name: 'Riad El Fenn',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
          rating: 4.5,
          reviewsCount: 189,
          stars: 5,
          location: 'Médina, Marrakech',
          priceStartingFrom: 1200,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ],
      restaurants: [
        {
          id: 'rec-r-1',
          name: 'Le Jardin Secret Gourmet',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 340,
          stars: 5,
          location: 'Mouassine, Médina',
          priceStartingFrom: 280,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: false
        },
        {
          id: 'rec-r-2',
          name: 'Dar Moha Gastronomie',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 410,
          stars: 5,
          location: 'Riad Larrous',
          priceStartingFrom: 450,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: false
        },
        {
          id: 'rec-r-3',
          name: 'Al Fassia Guéliz',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 520,
          stars: 4,
          location: 'Guéliz, Marrakech',
          priceStartingFrom: 220,
          currency: 'MAD',
          pricePeriod: 'plat',
          isFavorite: false
        }
      ],
      attractions: [
        {
          id: 'rec-a-1',
          name: 'Jardin Majorelle & Musée YSL',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 1850,
          location: 'Guéliz, Marrakech',
          priceStartingFrom: 150,
          currency: 'MAD',
          pricePeriod: 'billet',
          isFavorite: true
        },
        {
          id: 'rec-a-2',
          name: 'Palais Bahia',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 980,
          location: 'Mellah, Médina',
          priceStartingFrom: 70,
          currency: 'MAD',
          pricePeriod: 'entrée',
          isFavorite: false
        },
        {
          id: 'rec-a-3',
          name: 'Médersa Ben Youssef',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 1120,
          location: 'Médina historique',
          priceStartingFrom: 50,
          currency: 'MAD',
          pricePeriod: 'entrée',
          isFavorite: false
        }
      ],
      cars: [
        {
          id: 'rec-c-1',
          name: 'Range Rover Velar 4x4',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 88,
          location: 'Aéroport Marrakech-Ménara',
          priceStartingFrom: 950,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        },
        {
          id: 'rec-c-2',
          name: 'Dacia Duster 4WD',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          rating: 4.6,
          reviewsCount: 145,
          location: 'Centre-ville & Hôtels',
          priceStartingFrom: 320,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        },
        {
          id: 'rec-c-3',
          name: 'Mercedes Classe C Berline',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 64,
          location: 'Livraison Riad gratuite',
          priceStartingFrom: 750,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        }
      ],
      apartments: [
        {
          id: 'rec-ap-1',
          name: 'Villa Palmeraie avec piscine privée',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 52,
          stars: 5,
          location: 'Palmeraie Triangle d’Or',
          priceStartingFrom: 3200,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: true
        },
        {
          id: 'rec-ap-2',
          name: 'Riad privatisé 4 suites',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 76,
          stars: 4,
          location: 'Bab Doukkala, Médina',
          priceStartingFrom: 1800,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        },
        {
          id: 'rec-ap-3',
          name: 'Penthouse moderne avec rooftop',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 94,
          location: 'Hivernage, Marrakech',
          priceStartingFrom: 950,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ]
    },
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
        metaInfo: 'À partir de 1 800 MAD',
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
  },

  casablanca: {
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
        sponsor: 'Le Cabestan Casablanca'
      }
    ],
    staticAds: [
      {
        id: 'ad-cs-1',
        tag: 'CORICHE & LOUNGE',
        title: 'Expériences culinaires d’exception',
        subtitle: 'Les plus belles tables face aux vagues',
        ctaText: 'Réserver',
        imageUrl:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        linkHref: '#restaurants'
      },
      {
        id: 'ad-cs-2',
        tag: 'Royal Air Maroc',
        title: 'Hub International Casablanca Mohammed V',
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
    recommendations: {
      hotels: [
        {
          id: 'rec-ch-1',
          name: 'Four Seasons Hotel Casablanca',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 290,
          stars: 5,
          location: 'Anfa, Boulevard de la Corniche',
          priceStartingFrom: 3100,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: true
        }
      ],
      restaurants: [
        {
          id: 'rec-cr-1',
          name: 'Le Cabestan Ocean View',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 680,
          stars: 5,
          location: 'Phare d’El Hank',
          priceStartingFrom: 450,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: false
        }
      ],
      attractions: [
        {
          id: 'rec-ca-1',
          name: 'Mosquée Hassan II',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 4200,
          location: 'Sidi Belyout',
          priceStartingFrom: 130,
          currency: 'MAD',
          pricePeriod: 'visite guidée',
          isFavorite: true
        }
      ],
      cars: [
        {
          id: 'rec-cc-1',
          name: 'Mercedes Classe E',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 75,
          location: 'Aéroport CMN / Gauthier',
          priceStartingFrom: 850,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        }
      ],
      apartments: [
        {
          id: 'rec-cap-1',
          name: 'Loft Marina vue mer imprenable',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 110,
          location: 'Marina Casablanca',
          priceStartingFrom: 1400,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ]
    },
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
        id: 'ctrust-1',
        icon: 'palmtree',
        title: 'Métropole dynamique',
        description: 'Le cœur battant de l’économie marocaine'
      },
      {
        id: 'ctrust-2',
        icon: 'heart',
        title: 'Expériences océaniques',
        description: 'Corniches et saveurs maritimes'
      },
      {
        id: 'ctrust-3',
        icon: 'shield-check',
        title: 'Réservation garantie',
        description: 'Annulation flexible selon établissements'
      },
      {
        id: 'ctrust-4',
        icon: 'users',
        title: 'Avis vérifiés',
        description: 'Retours de voyageurs réels'
      }
    ]
  },

  rabat: {
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
    recommendations: {
      hotels: [
        {
          id: 'rec-rh-1',
          name: 'The View Hotel Rabat',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 160,
          stars: 5,
          location: 'Avenue Annakhil, Hay Riad',
          priceStartingFrom: 1850,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ],
      restaurants: [
        {
          id: 'rec-rr-1',
          name: 'Dinarjat Médina',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 280,
          stars: 4,
          location: 'Rue El Gza, Médina',
          priceStartingFrom: 320,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: false
        }
      ],
      attractions: [
        {
          id: 'rec-ra-1',
          name: 'Kasbah des Oudayas',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 2300,
          location: 'Rabat bord de mer',
          priceStartingFrom: 0,
          currency: 'MAD',
          pricePeriod: 'accès libre',
          isFavorite: true
        }
      ],
      cars: [
        {
          id: 'rec-rc-1',
          name: 'Audi A4 Berline',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 42,
          location: 'Gare Rabat Agdal / Aéroport',
          priceStartingFrom: 700,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        }
      ],
      apartments: [
        {
          id: 'rec-rap-1',
          name: 'Appartement de standing avec jardin',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 55,
          location: 'Souissi, Rabat',
          priceStartingFrom: 1100,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ]
    },
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
  },

  fes: {
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
    recommendations: {
      hotels: [
        {
          id: 'rec-fh-1',
          name: 'Riad Fès Relais & Châteaux',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
          rating: 4.9,
          reviewsCount: 190,
          stars: 5,
          location: 'Derb Ben Slimane, Fès Médina',
          priceStartingFrom: 1650,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: true
        }
      ],
      restaurants: [
        {
          id: 'rec-fr-1',
          name: 'The Ruined Garden',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 420,
          stars: 4,
          location: 'R’cif, Médina',
          priceStartingFrom: 220,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: false
        }
      ],
      attractions: [
        {
          id: 'rec-fa-1',
          name: 'Tanneries Chouara',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 1650,
          location: 'Fès El Bali',
          priceStartingFrom: 0,
          currency: 'MAD',
          pricePeriod: 'accès libre',
          isFavorite: true
        }
      ],
      cars: [
        {
          id: 'rec-fc-1',
          name: 'Peugeot 2008 SUV',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 58,
          location: 'Aéroport Fès Saïss',
          priceStartingFrom: 360,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        }
      ],
      apartments: [
        {
          id: 'rec-fap-1',
          name: 'Dar traditionnel rénové',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 65,
          location: 'Ziat, Fès',
          priceStartingFrom: 790,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ]
    },
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
        id: 'ftrust-1',
        icon: 'palmtree',
        title: 'Patrimoine millénaire',
        description: 'La plus vaste médina médiévale vivante'
      },
      {
        id: 'ftrust-2',
        icon: 'heart',
        title: 'Artisanat d’or et de cuir',
        description: 'Des ateliers ancestraux authentiques'
      },
      {
        id: 'ftrust-3',
        icon: 'shield-check',
        title: 'Guides certifiés',
        description: 'Visites recommandées par l’Office du Tourisme'
      },
      {
        id: 'ftrust-4',
        icon: 'users',
        title: 'Avis de passionnés',
        description: 'Conseils pour explorer les ruelles'
      }
    ]
  },

  tanger: {
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
        tag: 'SURF & PLAGE',
        title: 'Côte atlantique et Cap Spartel',
        subtitle: 'Plages infinies et sessions nautiques',
        ctaText: 'Découvrir',
        imageUrl:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        linkHref: '#activites'
      }
    ],
    recommendations: {
      hotels: [
        {
          id: 'rec-th-1',
          name: 'El Minzah Hotel',
          category: 'hotels',
          imageUrl:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 210,
          stars: 5,
          location: 'Rue de la Liberté, Centre',
          priceStartingFrom: 1450,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ],
      restaurants: [
        {
          id: 'rec-tr-1',
          name: 'El Morocco Club',
          category: 'restaurants',
          imageUrl:
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 310,
          stars: 4,
          location: 'Place du Tabor, Kasbah',
          priceStartingFrom: 350,
          currency: 'MAD',
          pricePeriod: 'menu',
          isFavorite: true
        }
      ],
      attractions: [
        {
          id: 'rec-ta-1',
          name: 'Cap Spartel & Grottes d’Hercule',
          category: 'attractions',
          imageUrl:
            'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 1420,
          location: 'Route de Cap Spartel',
          priceStartingFrom: 30,
          currency: 'MAD',
          pricePeriod: 'entrée',
          isFavorite: false
        }
      ],
      cars: [
        {
          id: 'rec-tc-1',
          name: 'Volkswagen Golf 8',
          category: 'cars',
          imageUrl:
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          rating: 4.7,
          reviewsCount: 62,
          location: 'Port Tanger Ville / Aéroport',
          priceStartingFrom: 390,
          currency: 'MAD',
          pricePeriod: 'jour',
          isFavorite: false
        }
      ],
      apartments: [
        {
          id: 'rec-tap-1',
          name: 'Appartement vue baie et mer',
          category: 'apartments',
          imageUrl:
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
          rating: 4.8,
          reviewsCount: 78,
          location: 'Malabata, Tanger',
          priceStartingFrom: 980,
          currency: 'MAD',
          pricePeriod: 'nuit',
          isFavorite: false
        }
      ]
    },
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
      subheadline: 'Notre équipe locale vous conseille pour vos escapades.',
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
        id: 'ttrust-1',
        icon: 'palmtree',
        title: 'Porte de l’Afrique',
        description: 'Une énergie cosmopolite et artistique unique'
      },
      {
        id: 'ttrust-2',
        icon: 'heart',
        title: 'Deux mers en une',
        description: 'Plages atlantiques et baies méditerranéennes'
      },
      {
        id: 'ttrust-3',
        icon: 'shield-check',
        title: 'Partenaires vérifiés',
        description: 'Qualité et authenticité assurées'
      },
      {
        id: 'ttrust-4',
        icon: 'users',
        title: 'Assistance locale',
        description: 'Présence à Tanger pour vous accompagner'
      }
    ]
  }
};

// Aliases for related cities to ensure zero broken links
CITY_DESTINATIONS_DATA['agadir'] = {
  ...CITY_DESTINATIONS_DATA['casablanca'],
  id: 'dest-agadir',
  slug: 'agadir',
  name: 'Agadir',
  heroBadge: 'Perle Balnéaire du Souss',
  heroDescription: 'Plages infinies, surf de classe mondiale et douceur ensoleillée 300 jours par an.',
  heroImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85'
};

CITY_DESTINATIONS_DATA['meknes'] = {
  ...CITY_DESTINATIONS_DATA['fes'],
  id: 'dest-meknes',
  slug: 'meknes',
  name: 'Meknès',
  heroBadge: 'Cité Ismaélienne & Grenier Impérial',
  heroDescription: 'La grandeur monumentale de Bab Mansour et les ruines antiques de Volubilis.',
  heroImageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=85'
};

CITY_DESTINATIONS_DATA['ouarzazate'] = {
  ...CITY_DESTINATIONS_DATA['marrakech'],
  id: 'dest-ouarzazate',
  slug: 'ouarzazate',
  name: 'Ouarzazate',
  heroBadge: 'Porte du Sahara & Capitale du Cinéma',
  heroDescription: 'Kasbahs majestueuses de terre ocre, oasis verdoyantes et plateaux de tournage hollywoodiens.',
  heroImageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85'
};

CITY_DESTINATIONS_DATA['essaouira'] = {
  ...CITY_DESTINATIONS_DATA['tanger'],
  id: 'dest-essaouira',
  slug: 'essaouira',
  name: 'Essaouira',
  heroBadge: 'Cité des Alizés & Mogador',
  heroDescription: 'Remparts face à l’Atlantique, médina d’artistes et mélodies enivrantes du festival Gnaoua.',
  heroImageUrl: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=1920&q=85'
};

CITY_DESTINATIONS_DATA['agadir'] = {
  ...CITY_DESTINATIONS_DATA['casablanca'],
  id: 'dest-agadir',
  slug: 'agadir',
  name: 'Agadir',
  heroBadge: 'Perle du Souss & Baie Dorée',
  heroDescription: 'Plages ensoleillées 300 jours par an, marina animée et douceur de vivre le long de l’Atlantique.',
  quickInfo: {
    climate: '300 jours de soleil par an',
    mustSee: 'Kasbah Agadir Oufella, Marina, Promenade de la plage, Souk El Had',
    location: 'Sur la côte Atlantique sud'
  }
};

CITY_DESTINATIONS_DATA['meknes'] = {
  ...CITY_DESTINATIONS_DATA['fes'],
  id: 'dest-meknes',
  slug: 'meknes',
  name: 'Meknès',
  heroBadge: 'Cité Impériale & Trésor Ismaélien',
  heroDescription: 'Portes monumentales impériales, écuries royales historiques et splendeur d’une capitale millénaire.',
  quickInfo: {
    climate: 'Climat méditerranéen tempéré',
    mustSee: 'Bab Mansour, Bassin de l’Agdal, Mausolée Moulay Ismaïl, Volubilis',
    location: 'Région Fès-Meknès'
  }
};

CITY_DESTINATIONS_DATA['ouarzazate'] = {
  ...CITY_DESTINATIONS_DATA['marrakech'],
  id: 'dest-ouarzazate',
  slug: 'ouarzazate',
  name: 'Ouarzazate',
  heroBadge: 'Porte du Désert & Cité du Cinéma',
  heroDescription: 'Kasbahs magistrales en terre cuite, oasis secrètes de palmiers et studios de cinéma légendaires.',
  quickInfo: {
    climate: 'Climat pré-saharien ensoleillé',
    mustSee: 'Kasbah de Taourirt, Ksar d’Aït-ben-Haddou, Studios Atlas, Oasis de Fint',
    location: 'Aux portes du Grand Sud marocain'
  }
};

/**
 * Récupère une destination par son slug canonique normalisé
 */
export const getDestinationBySlug = (rawSlug: string): CityDestination | null => {
  if (!rawSlug) return null;
  const normalized = rawSlug.toLowerCase().trim();
  return CITY_DESTINATIONS_DATA[normalized] || null;
};

/**
 * Retourne la liste de tous les slugs supportés
 */
export const getAllDestinationSlugs = (): string[] => {
  return Object.keys(CITY_DESTINATIONS_DATA);
};

import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const marrakechRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
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
      isFavorite: false
    }
  ]
};

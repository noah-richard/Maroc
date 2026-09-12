import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const tangerRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
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
      isFavorite: false
    }
  ]
};

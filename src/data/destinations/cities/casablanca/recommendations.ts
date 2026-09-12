import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const casablancaRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
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
      isFavorite: false
    }
  ]
};

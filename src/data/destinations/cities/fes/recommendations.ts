import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const fesRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
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
      isFavorite: false
    }
  ]
};

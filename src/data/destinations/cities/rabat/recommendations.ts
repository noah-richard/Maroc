import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const rabatRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
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
      isFavorite: false
    }
  ]
};

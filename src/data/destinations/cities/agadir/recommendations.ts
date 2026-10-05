import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const agadirRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
  hotels: [
    {
      id: 'rec-agh-1',
      name: 'Riad Villa Blanche',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 140,
      stars: 5,
      location: 'Baie des Palmiers, Agadir',
      isFavorite: true,
      price: 'À partir de 1 600 MAD / nuit'
    },
    {
      id: 'rec-agh-2',
      name: 'Hyatt Place Taghazout Bay',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 220,
      stars: 5,
      location: 'Taghazout Bay Resort',
      isFavorite: false,
      price: 'À partir de 1 950 MAD / nuit'
    },
    {
      id: 'rec-agh-3',
      name: 'Paradis Plage Surf Yoga & Spa',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 185,
      stars: 4,
      location: 'Imi Ouaddar, Agadir Nord',
      isFavorite: true,
      price: 'À partir de 1 400 MAD / nuit'
    }
  ],
  restaurants: [
    {
      id: 'rec-agr-1',
      name: 'Pure Passion Restaurant',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 380,
      stars: 5,
      location: 'Marina d’Agadir',
      isFavorite: true,
      price: 'Poisson frais & cuisine méditerranéenne'
    },
    {
      id: 'rec-agr-2',
      name: 'Le Jardin d’Eau',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviewsCount: 290,
      stars: 4,
      location: 'Boulevard du 20 Août, Agadir',
      isFavorite: false,
      price: 'Cuisine marocaine & internationale'
    }
  ],
  attractions: [
    {
      id: 'rec-aga-1',
      name: 'Kasbah d’Agadir Oufella & Téléphérique',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 1250,
      location: 'Colline d’Oufella, Agadir',
      isFavorite: true,
      price: 'Accès téléphérique panoramique'
    },
    {
      id: 'rec-aga-2',
      name: 'Souk El Had',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 3100,
      location: 'Centre-ville Agadir',
      isFavorite: false,
      price: 'Plus grand marché urbain du Maroc (produits du terroir)'
    },
    {
      id: 'rec-aga-3',
      name: 'Excursion Vallée du Paradis',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 890,
      location: 'Imouzzer des Ida-Outanane',
      isFavorite: true,
      price: 'Bassins naturels d’eau turquoise & palmeraie'
    }
  ],
  cars: [
    {
      id: 'rec-agc-1',
      name: 'SUV Dacia Duster 4x2 / 4x4',
      category: 'cars',
      imageUrl:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 65,
      location: 'Aéroport Agadir Al Massira / Centre-ville',
      isFavorite: false,
      price: 'À partir de 380 MAD / jour'
    }
  ],
  apartments: [
    {
      id: 'rec-agap-1',
      name: 'Résidence Marina vue sur l’Océan',
      category: 'apartments',
      imageUrl:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 78,
      location: 'Marina d’Agadir',
      isFavorite: false,
      price: 'À partir de 950 MAD / nuit'
    }
  ]
};

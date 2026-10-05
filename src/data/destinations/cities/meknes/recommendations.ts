import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const meknesRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
  hotels: [
    {
      id: 'rec-mkh-1',
      name: 'Riad D’Or Meknès',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 160,
      stars: 4,
      location: 'Médina historique, Meknès',
      isFavorite: true,
      price: 'À partir de 850 MAD / nuit'
    },
    {
      id: 'rec-mkh-2',
      name: 'Hôtel Zaki Suites & Spa',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviewsCount: 110,
      stars: 4,
      location: 'Ville nouvelle & Vallée de l’Oued Boufekrane',
      isFavorite: false,
      price: 'À partir de 1 100 MAD / nuit'
    },
    {
      id: 'rec-mkh-3',
      name: 'Riad Ritaj Meknes',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 95,
      stars: 4,
      location: 'Quartier Sidi Amrane',
      isFavorite: true,
      price: 'À partir de 780 MAD / nuit'
    }
  ],
  restaurants: [
    {
      id: 'rec-mkr-1',
      name: 'Pavillon des Arômes',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 210,
      stars: 4,
      location: 'Place El Hedim, Meknès',
      isFavorite: true,
      price: 'Gastronomie marocaine & vue sur Bab Mansour'
    },
    {
      id: 'rec-mkr-2',
      name: 'Mille et Une Nuits',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviewsCount: 140,
      stars: 4,
      location: 'Médina de Meknès',
      isFavorite: false,
      price: 'Pastillas traditionnelles & tajines du terroir'
    }
  ],
  attractions: [
    {
      id: 'rec-mka-1',
      name: 'Bab Mansour El Aleuj',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 2200,
      location: 'Place El Hedim',
      isFavorite: true,
      price: 'Porte impériale monumentale du XVIIIe siècle'
    },
    {
      id: 'rec-mka-2',
      name: 'Site archéologique de Volubilis (UNESCO)',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 3400,
      location: 'À 30 min de Meknès (Moulay Idriss Zerhoun)',
      isFavorite: true,
      price: 'Mosaïques romaines préservées & panorama vallonné'
    },
    {
      id: 'rec-mka-3',
      name: 'Hri Souani & Bassin de l’Agdal',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 1100,
      location: 'Cité royale de Moulay Ismaïl',
      isFavorite: false,
      price: 'Greniers royaux historiques et immense réservoir d’eau'
    }
  ],
  cars: [
    {
      id: 'rec-mkc-1',
      name: 'Berline compacte pour la région Zerhoun',
      category: 'cars',
      imageUrl:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 45,
      location: 'Gare ferroviaire Meknès Al Amir / Centre-ville',
      isFavorite: false,
      price: 'À partir de 320 MAD / jour'
    }
  ],
  apartments: [
    {
      id: 'rec-mkap-1',
      name: 'Demeure d’hôtes vue sur Bab Mansour',
      category: 'apartments',
      imageUrl:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 52,
      location: 'Place El Hedim, Meknès',
      isFavorite: false,
      price: 'À partir de 650 MAD / nuit'
    }
  ]
};

import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const essaouiraRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
  hotels: [
    {
      id: 'rec-esh-1',
      name: 'Heure Bleue Palais — Relais & Châteaux',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 280,
      stars: 5,
      location: 'Entrée de la Médina, Bab Marrakech',
      isFavorite: true,
      price: 'À partir de 2 200 MAD / nuit'
    },
    {
      id: 'rec-esh-2',
      name: 'Le Médina Essaouira Thalassa Sea & Spa',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 310,
      stars: 5,
      location: 'Boulevard Mohamed V, face à la plage',
      isFavorite: false,
      price: 'À partir de 1 650 MAD / nuit'
    },
    {
      id: 'rec-esh-3',
      name: 'Riad Chbanate',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 190,
      stars: 4,
      location: 'Rue Chbanate, Médina',
      isFavorite: true,
      price: 'À partir de 1 100 MAD / nuit'
    }
  ],
  restaurants: [
    {
      id: 'rec-esr-1',
      name: 'La Table Madada',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 450,
      stars: 5,
      location: 'Rue Youssef El Fassi (sous les arcades)',
      isFavorite: true,
      price: 'Bistronomie marocaine & poissons nobles'
    },
    {
      id: 'rec-esr-2',
      name: 'Le Chalet de la Plage (depuis 1893)',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviewsCount: 520,
      stars: 4,
      location: 'Front de mer, Boulevard Mohamed V',
      isFavorite: false,
      price: 'Arrivage direct du port & terrasse les pieds dans le sable'
    }
  ],
  attractions: [
    {
      id: 'rec-esa-1',
      name: 'Skala de la Kasbah & Remparts de Mogador',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 3900,
      location: 'Front océanique de la Médina',
      isFavorite: true,
      price: 'Canons en bronze historiques face aux vagues et îles Purpuraires'
    },
    {
      id: 'rec-esa-2',
      name: 'Port de pêche traditionnel d’Essaouira',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 3100,
      location: 'Bab El Marsa',
      isFavorite: true,
      price: 'Barques bleues emblématiques et criée aux poissons'
    },
    {
      id: 'rec-esa-3',
      name: 'Plage sauvage & Surf à Sidi Kaouki',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 1400,
      location: 'À 25 km au sud d’Essaouira',
      isFavorite: false,
      price: 'Plage infinie, dunes et spots de kitesurf / surf'
    }
  ],
  cars: [
    {
      id: 'rec-esc-1',
      name: 'SUV compact bord de mer',
      category: 'cars',
      imageUrl:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 54,
      location: 'Aéroport Essaouira-Mogador ESU / Bab Marrakech',
      isFavorite: false,
      price: 'À partir de 340 MAD / jour'
    }
  ],
  apartments: [
    {
      id: 'rec-escap-1',
      name: 'Appartement bohème avec terrasse sur les remparts',
      category: 'apartments',
      imageUrl:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 65,
      location: 'Médina d’Essaouira',
      isFavorite: true,
      price: 'À partir de 750 MAD / nuit'
    }
  ]
};

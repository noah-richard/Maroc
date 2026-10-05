import type { RecommendationCategory, RecommendationItem } from '../../../../types/destinationPage';

export const ouarzazateRecommendations: Record<RecommendationCategory, RecommendationItem[]> = {
  hotels: [
    {
      id: 'rec-ozh-1',
      name: 'Berbère Palace Ouarzazate',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 320,
      stars: 5,
      location: 'Quartier Mansour Dahbi, Ouarzazate',
      isFavorite: true,
      price: 'À partir de 1 450 MAD / nuit'
    },
    {
      id: 'rec-ozh-2',
      name: 'Ksar Ighnda (Aït-ben-Haddou)',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 210,
      stars: 5,
      location: 'À l’entrée du Ksar d’Aït-ben-Haddou',
      isFavorite: true,
      price: 'À partir de 1 800 MAD / nuit'
    },
    {
      id: 'rec-ozh-3',
      name: 'Dar Kamar — Maison d’Hôtes',
      category: 'hotels',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 95,
      stars: 4,
      location: 'Au pied de la Kasbah de Taourirt',
      isFavorite: false,
      price: 'À partir de 720 MAD / nuit'
    }
  ],
  restaurants: [
    {
      id: 'rec-ozr-1',
      name: 'Chez Dimitri (Fondé en 1928)',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 420,
      stars: 4,
      location: 'Avenue Mohammed V, Ouarzazate',
      isFavorite: true,
      price: 'Table historique des équipes de cinéma internationales'
    },
    {
      id: 'rec-ozr-2',
      name: 'Restaurant Douyria',
      category: 'restaurants',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      reviewsCount: 180,
      stars: 4,
      location: 'Face à la Kasbah de Taourirt',
      isFavorite: false,
      price: 'Tajines berbères mijotés aux pruneaux et amandes'
    }
  ],
  attractions: [
    {
      id: 'rec-oza-1',
      name: 'Ksar d’Aït-ben-Haddou (UNESCO)',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 4800,
      location: 'Vallée de l’Ounila (30 km d’Ouarzazate)',
      isFavorite: true,
      price: 'Ksar emblématique en terre battue & décors de Gladiator'
    },
    {
      id: 'rec-oza-2',
      name: 'Atlas Studios & CLA Studios de Cinéma',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewsCount: 2300,
      location: 'Entrée d’Ouarzazate',
      isFavorite: true,
      price: 'Plateaux géants de tournage (Égypte antique, Jérusalem, Rome)'
    },
    {
      id: 'rec-oza-3',
      name: 'Kasbah de Taourirt',
      category: 'attractions',
      imageUrl:
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 1900,
      location: 'Centre d’Ouarzazate',
      isFavorite: false,
      price: 'Ancienne forteresse du Glaoui aux plafonds peints en bois de cèdre'
    }
  ],
  cars: [
    {
      id: 'rec-ozc-1',
      name: '4x4 Toyota Land Cruiser Prado / pistes Sud',
      category: 'cars',
      imageUrl:
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewsCount: 88,
      location: 'Aéroport Ouarzazate OZZ / Centre-ville',
      isFavorite: true,
      price: 'À partir de 650 MAD / jour (avec ou sans chauffeur)'
    }
  ],
  apartments: [
    {
      id: 'rec-ozap-1',
      name: 'Lodge authentique dans l’Oasis de Fint',
      category: 'apartments',
      imageUrl:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviewsCount: 42,
      location: 'Oasis de Fint, 15 km d’Ouarzazate',
      isFavorite: false,
      price: 'À partir de 550 MAD / nuit'
    }
  ]
};

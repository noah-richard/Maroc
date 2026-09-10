import type { ServiceOffering } from '../types/service';

export const SERVICES_DATA: ServiceOffering[] = [
  {
    id: 'service-stays',
    category: 'stays',
    title: 'Hébergements',
    description: 'Hôtels, riads, appartements, villas... pour tous les budgets.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    iconType: 'home',
    actionUrl: '#hebergements',
    altText: 'Suite luxueuse dans un riad marocain avec mobilier traditionnel en bois sculpté'
  },
  {
    id: 'service-cars',
    category: 'cars',
    title: 'Location de voitures',
    description: 'Explorez le Maroc en toute liberté avec nos véhicules sélectionnés.',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    iconType: 'car',
    actionUrl: '#voitures',
    altText: 'SUV moderne et confortable sur les routes sinueuses des montagnes de l’Atlas'
  },
  {
    id: 'service-restaurants',
    category: 'restaurants',
    title: 'Restaurants',
    description: 'Découvrez les meilleures tables près de votre destination.',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    iconType: 'utensils',
    actionUrl: '#restaurants',
    altText: 'Table raffinée en terrasse avec tajines marocains et vue panoramique sur la médina'
  }
];

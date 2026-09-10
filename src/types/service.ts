export type ServiceCategory = 'stays' | 'cars' | 'restaurants';

export interface ServiceOffering {
  id: string;
  category: ServiceCategory;
  title: string;
  description: string;
  imageUrl: string;
  iconType: 'home' | 'car' | 'utensils';
  actionUrl: string;
  altText: string;
}

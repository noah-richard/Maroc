export type DestinationRegion = 'coast' | 'mountain' | 'imperial' | 'south' | 'interior';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  region: DestinationRegion;
  altText: string;
}

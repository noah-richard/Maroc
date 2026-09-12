export interface WeatherInfo {
  temperature: number; // in °C (e.g. 28)
  condition: string; // e.g. "Ciel dégagé"
  label: string; // e.g. "Aujourd'hui"
  iconName?: string;
}

export interface QuickInfo {
  climate: string; // e.g. "Ensoleillé toute l'année"
  mustSee: string; // e.g. "Médina, Jardin Majorelle, Place Jemaa el-Fna"
  location: string; // e.g. "Au pied de l'Atlas"
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
  caption?: string;
  thumbnailUrl?: string;
}

export interface ServiceCounters {
  hotels: number; // e.g. 450
  restaurants: number; // e.g. 320
  attractions: number; // e.g. 120
  cars: number; // e.g. 200
  apartments: number; // e.g. 180
  hotelsCount?: number;
  restaurantsCount?: number;
  sitesCount?: number;
  carsCount?: number;
  apartmentsCount?: number;
}

export interface Advertisement {
  id: string;
  tag: string; // e.g. "HÔTEL & SPA"
  badge?: string; // alias
  title: string; // e.g. "Évadez-vous à Marrakech"
  subtitle: string; // e.g. "Des séjours d'exception sélectionnés pour vous"
  description?: string; // alias
  ctaText: string; // e.g. "Découvrir les offres"
  imageUrl: string;
  linkHref: string;
  ctaLink?: string; // alias
  advertiser?: string;
  sponsor?: string; // alias
}

export type RecommendationCategory =
  | 'hotels'
  | 'restaurants'
  | 'attractions'
  | 'cars'
  | 'apartments';

export interface RecommendationItem {
  id: string;
  name: string;
  title?: string; // alias
  category: RecommendationCategory;
  imageUrl: string;
  rating: number; // e.g. 4.8
  reviewsCount: number; // e.g. 120
  stars?: number; // 1-5
  location: string; // e.g. "Médina, Marrakech"
  badge?: string;
  tags?: string[];
  isFavorite?: boolean;
  link?: string;
  priceStartingFrom?: number;
  price?: string | number;
  currency?: string;
  pricePeriod?: string;
}

export interface FeaturedExperience {
  id: string;
  tag: string; // e.g. "ÉVÉNEMENT", "EXPÉRIENCE", "INCONTOURNABLE", "GASTRONOMIE"
  tagType: 'event' | 'experience' | 'highlight' | 'gastronomy';
  title: string; // e.g. "Festival des Arts Populaires"
  metaInfo: string; // e.g. "12 - 20 juin 2026", "Au lever du soleil"
  imageUrl: string;
  linkHref?: string;
  badge?: string;
  duration?: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  price?: string | number;
  link?: string;
}

export interface SupportContact {
  headline: string;
  subheadline: string;
  whatsappNumber: string;
  whatsappUrl: string;
  phoneNumber: string;
  phoneDisplay: string;
  availability: string;
  agentAvatarUrl: string;
  advisorAvatar?: string;
  advisorName?: string;
  advisorRole?: string;
  workingHours?: string;
}

export interface TrustPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CityDestination {
  id: string;
  slug: string; // URL canonical slug (e.g. "marrakech")
  name: string; // Display name (e.g. "Marrakech", "Fès")
  heroBadge: string; // e.g. "Ville Impériale", "Perle du Sud"
  heroDescription: string;
  seoDescription?: string;
  heroImageUrl: string;
  weather: WeatherInfo;
  quickInfo: QuickInfo;
  gallery: GalleryImage[];
  galleryImages?: GalleryImage[];
  services: ServiceCounters;
  featuredAds: Advertisement[]; // For the carousel
  staticAds: Advertisement[]; // 3 static banners on the right
  recommendations: Record<RecommendationCategory, RecommendationItem[]>;
  featuredExperiences: FeaturedExperience[];
  support: SupportContact;
  supportContact?: SupportContact;
  trustPoints: TrustPoint[];
}

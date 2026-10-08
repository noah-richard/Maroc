export type PartnerCategory =
  | 'accommodation'
  | 'activity'
  | 'restaurant'
  | 'transport'
  | 'guide'
  | 'agency'
  | 'craft'
  | 'culture'
  | 'other';

export interface CategoryInfo {
  id: PartnerCategory;
  label: string;
  badge: string;
  subtitle: string;
  examples: string;
  defaultCommission: number;
  coverImage: string;
}

export const PARTNER_CATEGORIES: CategoryInfo[] = [
  {
    id: 'accommodation',
    label: 'Hébergement',
    badge: 'Riads & Hôtels',
    subtitle: 'Riads traditionnels, boutique-hôtels, kasbahs, écolodges et villas de charme',
    examples: 'Riad en médina, Kasbah de l’Atlas, Villa avec piscine, Bivouac haut de gamme',
    defaultCommission: 12,
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'activity',
    label: 'Activités & Expériences',
    badge: 'Aventures & Loisirs',
    subtitle: 'Excursions sahariennes, montgolfière, randonnées dans l’Atlas, cours de cuisine, surf',
    examples: 'Bivouac dans le désert, vol en montgolfière, trek Toubkal, surf à Taghazout',
    defaultCommission: 15,
    coverImage: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'restaurant',
    label: 'Restaurant & Gastronomie',
    badge: 'Tables & Saveurs',
    subtitle: 'Restaurants gastronomiques, tables d’hôtes confidentielles, rooftops et salons de thé',
    examples: 'Dîner en patio d’oranger, cuisine fassie raffinée, rooftop vue médina',
    defaultCommission: 10,
    coverImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'transport',
    label: 'Transport & Mobilité',
    badge: 'Chauffeurs & 4x4',
    subtitle: 'Véhicules 4x4 avec chauffeur, transferts aéroports VIP, circuits inter-villes et location',
    examples: 'Transfert aéroport privé, circuit Sud Marocain en 4x4, van premium 7 places',
    defaultCommission: 12,
    coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'guide',
    label: 'Guide Touristique',
    badge: 'Patrimoine & Histoire',
    subtitle: 'Guides conférenciers agréés par le Ministère du Tourisme, historiens et guides de montagne',
    examples: 'Visite guidée médina de Fès, guide naturaliste Toubkal, conteur de Marrakech',
    defaultCommission: 10,
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'agency',
    label: 'Agence de Voyage & DMC',
    badge: 'Circuits & Réceptif',
    subtitle: 'Agences de voyages réceptives locales, concepteurs de séjours sur mesure et MICE',
    examples: 'Autotours villes impériales, séjours bien-être & spa, voyages de noces',
    defaultCommission: 12,
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'craft',
    label: 'Artisanat & Coopératives',
    badge: 'Savoir-Faire',
    subtitle: 'Coopératives d’argan féminines, maroquinerie d’art, zelliges, poterie et tapis ancestraux',
    examples: 'Atelier de tissage berbère, poterie de Fès, coopérative bio de Taliouine',
    defaultCommission: 8,
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop&q=80'
  },
  {
    id: 'culture',
    label: 'Culture & Événements',
    badge: 'Art & Spectacles',
    subtitle: 'Galeries d’art contemporain, musées privés, festivals et soirées sous tentes caïdales',
    examples: 'Spectacle équestre Fantasia, entrée musée des confluences, concert gnaoua',
    defaultCommission: 10,
    coverImage: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&auto=format&fit=crop&q=80'
  }
];

export interface PartnerBookingItem {
  id: string;
  bookingRef: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceTitle: string;
  dateStart: string;
  dateEnd?: string;
  guestsCount: number;
  totalAmountMAD: number;
  commissionRate: number;
  commissionAmountMAD: number;
  netPartnerAmountMAD: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  specialRequests?: string;
}

export interface PartnerReviewItem {
  id: string;
  clientName: string;
  clientCountry: string;
  rating: number;
  date: string;
  comment: string;
  serviceTitle: string;
  partnerReply?: string;
  replyDate?: string;
}

export interface PartnerMessageItem {
  id: string;
  sender: 'client' | 'concierge' | 'partner';
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface PartnerProfile {
  id: string;
  createdAt: string;
  updatedAt: string;
  account: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: 'owner' | 'manager' | 'staff';
  };
  business: {
    name: string;
    legalName: string;
    category: PartnerCategory;
    subCategory: string;
    city: string;
    region: string;
    address: string;
    iceNumber: string;
    rcNumber: string;
    patenteNumber?: string;
    website?: string;
    phone: string;
    email: string;
  };
  offer: {
    title: string;
    tagline: string;
    description: string;
    startingPrice: number;
    priceUnit: string;
    capacity?: number;
    duration?: string;
    amenities: string[];
    includedItems: string[];
    notIncludedItems: string[];
    checkInTime?: string;
    checkOutTime?: string;
    openingHours?: string;
    meetingPoint?: string;
    languages?: string[];
    isAvailable: boolean;
  };
  media: {
    coverImage: string;
    gallery: string[];
    videoUrl?: string;
  };
  verification: {
    status: 'draft' | 'pending' | 'in_review' | 'verified' | 'action_required' | 'rejected';
    cinProvided: boolean;
    businessDocProvided: boolean;
    licenseProvided: boolean;
    submittedAt?: string;
    verifiedAt?: string;
    reviewerFeedback?: string;
  };
  financials: {
    commissionRate: number;
    bankName: string;
    rib: string;
    accountHolder: string;
    totalEarningsMAD: number;
    pendingPayoutMAD: number;
    lastPayoutDate?: string;
  };
  stats: {
    viewsCount: number;
    bookingsCount: number;
    rating: number;
    reviewsCount: number;
    completionScore: number;
  };
  bookings: PartnerBookingItem[];
  reviews: PartnerReviewItem[];
  messages: PartnerMessageItem[];
}

export interface PartnerOnboardingDraft {
  currentStep: number;
  category: PartnerCategory;
  // Step 2: Entreprise & Responsable
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  legalName: string;
  city: string;
  address: string;
  iceNumber: string;
  rcNumber: string;
  website: string;
  // Step 3: Offre & Tarifs
  offerTitle: string;
  tagline: string;
  description: string;
  startingPrice: number;
  priceUnit: string;
  capacity: number;
  duration: string;
  amenities: string[];
  includedItems: string[];
  notIncludedItems: string[];
  checkInTime: string;
  checkOutTime: string;
  languages: string[];
  // Step 4: Médias
  coverImage: string;
  gallery: string[];
  // Step 5: Documents
  cinNumber: string;
  hasBusinessDoc: boolean;
  hasLicenseDoc: boolean;
  notes: string;
  // Step 6: Paiement & Commission
  bankName: string;
  rib: string;
  accountHolder: string;
}

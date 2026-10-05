export type AdminRole = 
  | 'super_admin'
  | 'content_manager'
  | 'partner_manager'
  | 'moderator'
  | 'security_officer';

export type AdminPermission =
  | 'admins:read'
  | 'admins:manage'
  | 'roles:manage'
  | 'content:read'
  | 'content:write'
  | 'content:publish'
  | 'partners:read'
  | 'partners:approve'
  | 'bookings:read'
  | 'bookings:manage'
  | 'finance:view'
  | 'security:audit'
  | 'settings:configure';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: AdminRole;
  department: string;
  location: string;
  status: 'active' | 'suspended' | 'pending';
  twoFactorEnabled: boolean;
  twoFactorMethod?: 'authenticator' | 'sms' | 'hardware_key';
  lastLogin: string;
  lastIp: string;
  permissions: AdminPermission[];
  createdAt: string;
  isOnline: boolean;
  phone?: string;
}

export interface AuditLog {
  id: string;
  adminId: string;
  adminName: string;
  adminAvatar: string;
  action: string;
  category: 'auth' | 'admin_management' | 'content' | 'partners' | 'security' | 'financial';
  severity: 'info' | 'warning' | 'critical';
  details: string;
  ip: string;
  timestamp: string;
}

export interface ActiveSession {
  id: string;
  adminId: string;
  adminName: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  startedAt: string;
  isCurrent: boolean;
}

export interface PartnerApplication {
  id: string;
  name: string;
  category: 'Riad & Hôtel de Charme' | 'Guide Certifié' | 'Excursion Désert & 4x4' | 'Restaurant Gastronomique' | 'Artisanat d\'Exception';
  city: string;
  contactName: string;
  email: string;
  phone: string;
  status: 'pending' | 'approved' | 'rejected';
  commissionRate: number;
  submittedAt: string;
  rating: number;
  documentsVerified: boolean;
}

export interface DestinationAdminItem {
  id: string;
  name: string;
  slug: string;
  region: 'coastal' | 'inland';
  heroBadge?: string;
  heroDescription?: string;
  heroImageUrl?: string;
  status: 'published' | 'draft' | 'archived';
  isFeatured: boolean;
  viewsThisMonth: number;
  rating: number;
  partnersCount: number;
  temperature?: number;
  weatherCondition?: string;
  bestTimeToVisit?: string;
  updatedAt: string;
}

export interface BookingAdminItem {
  id: string;
  bookingRef: string;
  clientName: string;
  clientEmail: string;
  destination: string;
  experienceTitle: string;
  startDate: string;
  endDate: string;
  guestsCount: number;
  amountMAD: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  clubTier: 'Standard' | 'Silver' | 'Gold' | 'VIP Platinum';
  createdAt: string;
}

export interface PlatformStats {
  totalRevenueMAD: number;
  revenueGrowth: number;
  monthlyBookings: number;
  bookingsGrowth: number;
  uniqueVisitors: number;
  visitorsGrowth: number;
  approvedPartners: number;
  pendingPartners: number;
  activeAdminsCount: number;
  totalAdminsCount: number;
  twoFactorRate: number;
  totalPagesCount?: number;
  totalCitiesCount?: number;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

// ==========================================
// CMS: CUSTOM PAGES & EDITORIAL CONTENT
// ==========================================
export type PageCategory = 'guide' | 'article' | 'info' | 'promo';

export interface CustomPage {
  id: string;
  slug: string; // e.g. "guide-desert-maroc"
  title: string;
  subtitle: string;
  category: PageCategory;
  coverImage: string;
  content: string; // Formatted multi-paragraph content
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
  seoTitle?: string;
  seoDescription?: string;
  author: string;
  status: 'published' | 'draft';
  views: number;
  createdAt: string;
  updatedAt: string;
}

// ==========================================
// CMS: PLATFORM CONFIGURATION & GENERAL INFO
// ==========================================
export interface PlatformContentConfig {
  // Hero Homepage
  heroTitle: string;
  heroSubtitle: string;
  heroMicroSignature: string;
  heroOceanQuote: string;
  heroAtlasQuote: string;
  heroSignature: string;
  liveVisitorsCount: number;
  
  // Top Announcement Banner
  announcementActive: boolean;
  announcementText: string;
  announcementCtaText: string;
  announcementCtaLink: string;

  // Le Club DécouvreLeMaroc
  clubTitle: string;
  clubSubtitle: string;
  clubDiscountPercent: number;
  clubPerks: { title: string; description: string; tag: string }[];

  // Support & Conciergerie
  supportWhatsapp: string;
  supportPhone: string;
  supportEmail: string;
  supportHours: string;
  supportAdvisorName: string;
}

// ==========================================
// CMS: ADVERTISING BANNERS
// ==========================================
export interface PlatformAdBanner {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  imageUrl: string;
  linkHref: string;
  advertiser: string;
  citySlug?: string;
  isActive: boolean;
}

// ==========================================
// CMS: RECOMMENDATIONS / BONNES ADRESSES
// ==========================================
export interface PlatformRecommendation {
  id: string;
  name: string;
  citySlug: string;
  category: 'hotels' | 'restaurants' | 'attractions' | 'cars' | 'apartments';
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  location: string;
  badge?: string;
  tags: string[];
  priceStartingFrom?: number;
  currency?: string;
  pricePeriod?: string;
  isPublished: boolean;
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type {
  AdminUser,
  AdminRole,
  AdminPermission,
  AuditLog,
  ActiveSession,
  PartnerApplication,
  DestinationAdminItem,
  BookingAdminItem,
  PlatformStats,
  ToastMessage,
  CustomPage,
  PlatformContentConfig,
  PlatformAdBanner,
  PlatformRecommendation
} from '../types/admin';
import {
  INITIAL_ADMINS,
  INITIAL_AUDIT_LOGS,
  INITIAL_SESSIONS,
  INITIAL_PARTNERS,
  INITIAL_DESTINATIONS,
  INITIAL_BOOKINGS,
  INITIAL_STATS,
  ROLE_DEFAULT_PERMISSIONS
} from '../data/mockAdminData';
import {
  INITIAL_PAGES,
  INITIAL_PLATFORM_CONFIG,
  INITIAL_AD_BANNERS,
  INITIAL_RECOMMENDATIONS
} from '../data/mockCmsData';
import {
  createDefaultCityDestination,
  saveCustomCityDestination,
  deleteCustomCityDestination
} from '../../data/dynamicDestinations';

export type AdminTab = 
  | 'destinations'
  | 'pages'
  | 'platform'
  | 'recommendations'
  | 'ads'
  | 'overview'
  | 'partners'
  | 'bookings'
  | 'admins'
  | 'audit'
  | 'security'
  | 'settings';

interface AdminContextType {
  // Navigation & UI
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toasts: ToastMessage[];

  // 1. CITIES & DESTINATIONS CMS
  destinations: DestinationAdminItem[];
  addCityDestination: (params: {
    name: string;
    slug: string;
    region: 'coastal' | 'inland';
    heroBadge?: string;
    heroDescription?: string;
    heroImageUrl?: string;
    temperature?: number;
    weatherCondition?: string;
    isFeatured?: boolean;
    status?: 'published' | 'draft';
  }) => void;
  updateCityDestination: (id: string, updates: Partial<DestinationAdminItem>) => void;
  deleteCityDestination: (id: string) => void;
  toggleDestinationPublish: (destId: string) => void;
  toggleDestinationFeatured: (destId: string) => void;

  // 2. PAGES DU SITE (CUSTOM PAGES) CMS
  pages: CustomPage[];
  addCustomPage: (page: Omit<CustomPage, 'id' | 'views' | 'createdAt' | 'updatedAt'>) => void;
  updateCustomPage: (id: string, updates: Partial<CustomPage>) => void;
  deleteCustomPage: (id: string) => void;
  togglePagePublish: (id: string) => void;

  // 3. PLATFORM CONTENT CONFIG
  platformConfig: PlatformContentConfig;
  updatePlatformConfig: (updates: Partial<PlatformContentConfig>) => void;

  // 4. RECOMMENDATIONS / BONNES ADRESSES CMS
  recommendations: PlatformRecommendation[];
  addRecommendation: (rec: Omit<PlatformRecommendation, 'id'>) => void;
  updateRecommendation: (id: string, updates: Partial<PlatformRecommendation>) => void;
  deleteRecommendation: (id: string) => void;

  // 5. ADVERTISING BANNERS CMS
  adBanners: PlatformAdBanner[];
  addAdBanner: (ad: Omit<PlatformAdBanner, 'id'>) => void;
  updateAdBanner: (id: string, updates: Partial<PlatformAdBanner>) => void;
  deleteAdBanner: (id: string) => void;
  toggleAdBanner: (id: string) => void;

  // 6. ADMINS & TEAM
  admins: AdminUser[];
  currentAdmin: AdminUser;
  currentAdminId: string;
  setCurrentAdminId: (id: string) => void;
  addAdmin: (data: {
    name: string;
    email: string;
    role: AdminRole;
    department: string;
    location: string;
    phone?: string;
    permissions?: AdminPermission[];
    twoFactorEnforced?: boolean;
  }) => void;
  updateAdmin: (id: string, updates: Partial<AdminUser>) => void;
  deleteAdmin: (id: string) => void;
  toggleAdminStatus: (id: string) => void;
  reset2FA: (id: string) => void;
  updatePermissions: (id: string, permissions: AdminPermission[]) => void;
  changeRole: (id: string, newRole: AdminRole) => void;

  // 7. PARTNERS & BOOKINGS & AUDIT
  partners: PartnerApplication[];
  bookings: BookingAdminItem[];
  auditLogs: AuditLog[];
  activeSessions: ActiveSession[];
  stats: PlatformStats;

  approvePartner: (partnerId: string) => void;
  rejectPartner: (partnerId: string) => void;
  updateBookingStatus: (bookingId: string, status: BookingAdminItem['status']) => void;
  terminateSession: (sessionId: string) => void;
  addAuditLog: (entry: Omit<AuditLog, 'id' | 'timestamp'>) => void;
  exportAdminsCSV: () => void;
  exportAuditCSV: () => void;

  // Feedback Helpers
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const STORAGE_KEYS = {
  DESTINATIONS: 'dlm_admin_destinations_v2',
  PAGES: 'dlm_admin_pages_v2',
  PLATFORM_CONFIG: 'dlm_platform_config_v2',
  RECOMMENDATIONS: 'dlm_admin_recommendations_v2',
  ADS: 'dlm_admin_ads_v2',
  ADMINS: 'dlm_admin_users_v2',
  LOGS: 'dlm_admin_logs_v2',
  SESSIONS: 'dlm_admin_sessions_v2',
  PARTNERS: 'dlm_admin_partners_v2',
  BOOKINGS: 'dlm_admin_bookings_v2',
  THEME: 'dlm_admin_theme_v2'
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Destinations state
  const [destinations, setDestinations] = useState<DestinationAdminItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
      if (saved) {
        const parsed: DestinationAdminItem[] = JSON.parse(saved);
        return parsed.map(item => {
          const match = INITIAL_DESTINATIONS.find(d => d.slug === item.slug || d.id === item.id);
          return {
            ...match,
            ...item,
            heroImageUrl: item.heroImageUrl || match?.heroImageUrl,
            heroBadge: item.heroBadge || match?.heroBadge,
            temperature: item.temperature || match?.temperature || 26,
            weatherCondition: item.weatherCondition || match?.weatherCondition || 'Ensoleillé'
          };
        });
      }
      return INITIAL_DESTINATIONS;
    } catch {
      return INITIAL_DESTINATIONS;
    }
  });

  // Pages state
  const [pages, setPages] = useState<CustomPage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PAGES);
      return saved ? JSON.parse(saved) : INITIAL_PAGES;
    } catch {
      return INITIAL_PAGES;
    }
  });

  // Platform Content Config state
  const [platformConfig, setPlatformConfig] = useState<PlatformContentConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PLATFORM_CONFIG);
      return saved ? JSON.parse(saved) : INITIAL_PLATFORM_CONFIG;
    } catch {
      return INITIAL_PLATFORM_CONFIG;
    }
  });

  // Recommendations state
  const [recommendations, setRecommendations] = useState<PlatformRecommendation[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECOMMENDATIONS);
      return saved ? JSON.parse(saved) : INITIAL_RECOMMENDATIONS;
    } catch {
      return INITIAL_RECOMMENDATIONS;
    }
  });

  // Ads state
  const [adBanners, setAdBanners] = useState<PlatformAdBanner[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ADS);
      return saved ? JSON.parse(saved) : INITIAL_AD_BANNERS;
    } catch {
      return INITIAL_AD_BANNERS;
    }
  });

  // Admins state
  const [admins, setAdmins] = useState<AdminUser[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ADMINS);
      return saved ? JSON.parse(saved) : INITIAL_ADMINS;
    } catch {
      return INITIAL_ADMINS;
    }
  });

  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOGS);
      return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  });

  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SESSIONS);
      return saved ? JSON.parse(saved) : INITIAL_SESSIONS;
    } catch {
      return INITIAL_SESSIONS;
    }
  });

  const [partners, setPartners] = useState<PartnerApplication[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PARTNERS);
      return saved ? JSON.parse(saved) : INITIAL_PARTNERS;
    } catch {
      return INITIAL_PARTNERS;
    }
  });

  const [bookings, setBookings] = useState<BookingAdminItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
      return 'light';
    } catch {
      return 'light';
    }
  });


  const [currentAdminId, setCurrentAdminId] = useState<string>('admin-01');
  // Default tab starts on Destinations CMS to put content directly at the center!
  const [activeTab, setActiveTab] = useState<AdminTab>('destinations');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Synchronize state with LocalStorage
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(destinations)); } catch (e) { console.warn(e); }
  }, [destinations]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.PAGES, JSON.stringify(pages)); } catch (e) { console.warn(e); }
  }, [pages]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.PLATFORM_CONFIG, JSON.stringify(platformConfig)); } catch (e) { console.warn(e); }
  }, [platformConfig]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.RECOMMENDATIONS, JSON.stringify(recommendations)); } catch (e) { console.warn(e); }
  }, [recommendations]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.ADS, JSON.stringify(adBanners)); } catch (e) { console.warn(e); }
  }, [adBanners]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.ADMINS, JSON.stringify(admins)); } catch (e) { console.warn(e); }
  }, [admins]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(auditLogs)); } catch (e) { console.warn(e); }
  }, [auditLogs]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEYS.THEME, theme); } catch (e) { console.warn(e); }
  }, [theme]);

  const currentAdmin = admins.find(a => a.id === currentAdminId) || admins[0];

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts(prev => [...prev, { ...toast, id }]);
    setTimeout(() => removeToast(id), 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addAuditLog = (entry: Omit<AuditLog, 'id' | 'timestamp'>) => {
    const newLog: AuditLog = {
      ...entry,
      id: `log-${Date.now()}`,
      timestamp: 'À l\'instant'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // ==========================================
  // 1. CITIES & DESTINATIONS CMS
  // ==========================================
  const addCityDestination = (params: {
    name: string;
    slug: string;
    region: 'coastal' | 'inland';
    heroBadge?: string;
    heroDescription?: string;
    heroImageUrl?: string;
    temperature?: number;
    weatherCondition?: string;
    isFeatured?: boolean;
    status?: 'published' | 'draft';
  }) => {
    const cleanSlug = params.slug.toLowerCase().trim().replace(/\s+/g, '-');
    const newId = `dest-${cleanSlug}`;

    const newDestItem: DestinationAdminItem = {
      id: newId,
      name: params.name,
      slug: cleanSlug,
      region: params.region,
      heroBadge: params.heroBadge,
      heroDescription: params.heroDescription,
      heroImageUrl: params.heroImageUrl,
      status: params.status || 'published',
      isFeatured: !!params.isFeatured,
      viewsThisMonth: 120,
      rating: 4.9,
      partnersCount: 5,
      temperature: params.temperature || (params.region === 'coastal' ? 24 : 27),
      weatherCondition: params.weatherCondition || 'Ensoleillé',
      updatedAt: 'À l\'instant'
    };

    setDestinations(prev => [newDestItem, ...prev]);

    // Construct full city destination for the public page and save it
    const fullCity = createDefaultCityDestination({
      name: params.name,
      slug: cleanSlug,
      region: params.region,
      heroBadge: params.heroBadge,
      heroDescription: params.heroDescription,
      heroImageUrl: params.heroImageUrl,
      temperature: params.temperature,
      weatherCondition: params.weatherCondition
    });
    saveCustomCityDestination(fullCity);

    addAuditLog({
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminAvatar: currentAdmin.avatar,
      action: `Création de la nouvelle destination "${params.name}"`,
      category: 'content',
      severity: 'info',
      details: `Nouvelle ville créée avec le slug /destinations/${cleanSlug}. Page publique générée.`,
      ip: currentAdmin.lastIp
    });

    addToast({
      type: 'success',
      title: 'Ville ajoutée avec succès !',
      message: `La destination "${params.name}" est créée et accessible via /destinations/${cleanSlug}.`
    });
  };

  const updateCityDestination = (id: string, updates: Partial<DestinationAdminItem>) => {
    setDestinations(prev =>
      prev.map(dest => {
        if (dest.id === id) {
          const updated = { ...dest, ...updates, updatedAt: 'À l\'instant' };
          
          // Also update the full city object in dynamic storage
          const fullCity = createDefaultCityDestination({
            name: updated.name,
            slug: updated.slug,
            region: updated.region,
            heroBadge: updated.heroBadge,
            heroDescription: updated.heroDescription,
            heroImageUrl: updated.heroImageUrl,
            temperature: updated.temperature,
            weatherCondition: updated.weatherCondition
          });
          saveCustomCityDestination(fullCity);

          return updated;
        }
        return dest;
      })
    );

    addToast({
      type: 'success',
      title: 'Destination mise à jour',
      message: 'Les modifications de la ville ont été publiées immédiatement.'
    });
  };

  const deleteCityDestination = (id: string) => {
    const target = destinations.find(d => d.id === id);
    if (!target) return;

    setDestinations(prev => prev.filter(d => d.id !== id));
    deleteCustomCityDestination(target.slug);

    addAuditLog({
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminAvatar: currentAdmin.avatar,
      action: `Suppression de la destination "${target.name}"`,
      category: 'content',
      severity: 'warning',
      details: `Suppression de la ville et archivage de sa page.`,
      ip: currentAdmin.lastIp
    });

    addToast({
      type: 'info',
      title: 'Destination supprimée',
      message: `La ville ${target.name} a été retirée du catalogue.`
    });
  };

  const toggleDestinationPublish = (destId: string) => {
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;
    const newStatus = dest.status === 'published' ? 'draft' : 'published';

    setDestinations(prev =>
      prev.map(d => (d.id === destId ? { ...d, status: newStatus } : d))
    );

    addToast({
      type: 'info',
      title: `Destination ${newStatus === 'published' ? 'publiée' : 'passée en brouillon'}`,
      message: `${dest.name} est maintenant ${newStatus === 'published' ? 'en ligne' : 'masquée'}.`
    });
  };

  const toggleDestinationFeatured = (destId: string) => {
    const dest = destinations.find(d => d.id === destId);
    if (!dest) return;
    const newFeatured = !dest.isFeatured;

    setDestinations(prev =>
      prev.map(d => (d.id === destId ? { ...d, isFeatured: newFeatured } : d))
    );

    addToast({
      type: 'success',
      title: newFeatured ? 'Mise en avant activée' : 'Mise en avant retirée',
      message: `${dest.name} ${newFeatured ? 'apparaît en vedette prestige.' : 'retirée de la sélection.'}`
    });
  };

  // ==========================================
  // 2. PAGES DU SITE (CUSTOM PAGES) CMS
  // ==========================================
  const addCustomPage = (page: Omit<CustomPage, 'id' | 'views' | 'createdAt' | 'updatedAt'>) => {
    const cleanSlug = page.slug.toLowerCase().trim().replace(/\s+/g, '-');
    const newPage: CustomPage = {
      ...page,
      id: `page-${Date.now()}`,
      slug: cleanSlug,
      views: 0,
      createdAt: 'Aujourd\'hui',
      updatedAt: 'À l\'instant'
    };

    setPages(prev => [newPage, ...prev]);

    addAuditLog({
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminAvatar: currentAdmin.avatar,
      action: `Création de la page "${page.title}"`,
      category: 'content',
      severity: 'info',
      details: `Nouvelle page accessible via /p/${cleanSlug}.`,
      ip: currentAdmin.lastIp
    });

    addToast({
      type: 'success',
      title: 'Nouvelle page créée !',
      message: `La page est désormais consultable sur /p/${cleanSlug}.`
    });
  };

  const updateCustomPage = (id: string, updates: Partial<CustomPage>) => {
    setPages(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updates, updatedAt: 'À l\'instant' } : p))
    );

    addToast({
      type: 'success',
      title: 'Page mise à jour',
      message: 'Les modifications de contenu ont été enregistrées.'
    });
  };

  const deleteCustomPage = (id: string) => {
    const target = pages.find(p => p.id === id);
    if (!target) return;

    setPages(prev => prev.filter(p => p.id !== id));

    addToast({
      type: 'info',
      title: 'Page supprimée',
      message: `La page "${target.title}" a été supprimée.`
    });
  };

  const togglePagePublish = (id: string) => {
    setPages(prev =>
      prev.map(p => {
        if (p.id === id) {
          const newStatus = p.status === 'published' ? 'draft' : 'published';
          return { ...p, status: newStatus };
        }
        return p;
      })
    );

    addToast({
      type: 'info',
      title: 'Statut de publication mis à jour',
      message: 'La visibilité publique de la page a été modifiée.'
    });
  };

  // ==========================================
  // 3. PLATFORM CONTENT CONFIG
  // ==========================================
  const updatePlatformConfig = (updates: Partial<PlatformContentConfig>) => {
    setPlatformConfig(prev => ({ ...prev, ...updates }));

    addAuditLog({
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminAvatar: currentAdmin.avatar,
      action: 'Mise à jour des informations de la plateforme',
      category: 'content',
      severity: 'info',
      details: `Champs modifiés: ${Object.keys(updates).join(', ')}.`,
      ip: currentAdmin.lastIp
    });

    addToast({
      type: 'success',
      title: 'Informations de la plateforme mises à jour',
      message: 'Les nouveaux textes et paramètres ont été enregistrés.'
    });
  };

  // ==========================================
  // 4. RECOMMENDATIONS / BONNES ADRESSES
  // ==========================================
  const addRecommendation = (rec: Omit<PlatformRecommendation, 'id'>) => {
    const newRec: PlatformRecommendation = {
      ...rec,
      id: `rec-${Date.now()}`
    };
    setRecommendations(prev => [newRec, ...prev]);

    addToast({
      type: 'success',
      title: 'Bonne adresse ajoutée !',
      message: `"${rec.name}" a été ajoutée aux recommandations de ${rec.citySlug}.`
    });
  };

  const updateRecommendation = (id: string, updates: Partial<PlatformRecommendation>) => {
    setRecommendations(prev =>
      prev.map(r => (r.id === id ? { ...r, ...updates } : r))
    );
    addToast({
      type: 'success',
      title: 'Recommandation mise à jour',
      message: 'Les informations de l\'adresse ont été modifiées.'
    });
  };

  const deleteRecommendation = (id: string) => {
    setRecommendations(prev => prev.filter(r => r.id !== id));
    addToast({
      type: 'info',
      title: 'Recommandation supprimée',
      message: 'L\'adresse a été retirée.'
    });
  };

  // ==========================================
  // 5. ADVERTISING BANNERS
  // ==========================================
  const addAdBanner = (ad: Omit<PlatformAdBanner, 'id'>) => {
    const newAd: PlatformAdBanner = {
      ...ad,
      id: `ad-${Date.now()}`
    };
    setAdBanners(prev => [newAd, ...prev]);
    addToast({
      type: 'success',
      title: 'Bannière publicitaire ajoutée',
      message: `La campagne "${ad.title}" est maintenant configurée.`
    });
  };

  const updateAdBanner = (id: string, updates: Partial<PlatformAdBanner>) => {
    setAdBanners(prev =>
      prev.map(a => (a.id === id ? { ...a, ...updates } : a))
    );
    addToast({
      type: 'success',
      title: 'Bannière mise à jour',
      message: 'Les modifications de la publicité ont été enregistrées.'
    });
  };

  const deleteAdBanner = (id: string) => {
    setAdBanners(prev => prev.filter(a => a.id !== id));
    addToast({
      type: 'info',
      title: 'Bannière supprimée',
      message: 'L\'encart publicitaire a été retiré.'
    });
  };

  const toggleAdBanner = (id: string) => {
    setAdBanners(prev =>
      prev.map(a => (a.id === id ? { ...a, isActive: !a.isActive } : a))
    );
  };

  // ==========================================
  // 6. ADMINS & TEAM
  // ==========================================
  const addAdmin = (data: {
    name: string;
    email: string;
    role: AdminRole;
    department: string;
    location: string;
    phone?: string;
    permissions?: AdminPermission[];
    twoFactorEnforced?: boolean;
  }) => {
    const newId = `admin-0${admins.length + 1}`;
    const avatarUrl = `https://images.unsplash.com/photo-${1534528741775 + admins.length * 1000}?w=150&auto=format&fit=crop&q=80`;

    const newAdmin: AdminUser = {
      id: newId,
      name: data.name,
      email: data.email,
      avatar: avatarUrl,
      role: data.role,
      department: data.department || 'Opérations Générales',
      location: data.location || 'Casablanca, Maroc',
      phone: data.phone || '+212 600 00 00 00',
      status: 'pending',
      twoFactorEnabled: !!data.twoFactorEnforced,
      twoFactorMethod: data.twoFactorEnforced ? 'authenticator' : undefined,
      lastLogin: 'Jamais connecté',
      lastIp: '—',
      permissions: data.permissions && data.permissions.length > 0 
        ? data.permissions 
        : ROLE_DEFAULT_PERMISSIONS[data.role],
      createdAt: 'Aujourd\'hui',
      isOnline: false
    };

    setAdmins(prev => [newAdmin, ...prev]);

    addAuditLog({
      adminId: currentAdmin.id,
      adminName: currentAdmin.name,
      adminAvatar: currentAdmin.avatar,
      action: `Invitation de l'administrateur ${data.name}`,
      category: 'admin_management',
      severity: 'info',
      details: `Rôle attribué: ${data.role}. Invitation envoyée à ${data.email}.`,
      ip: currentAdmin.lastIp
    });

    addToast({
      type: 'success',
      title: 'Administrateur invité avec succès',
      message: `Un lien d'activation a été transmis à ${data.email}.`
    });
  };

  const updateAdmin = (id: string, updates: Partial<AdminUser>) => {
    setAdmins(prev =>
      prev.map(admin => (admin.id === id ? { ...admin, ...updates } : admin))
    );
    addToast({
      type: 'success',
      title: 'Modifications enregistrées',
      message: 'Le compte a été mis à jour.'
    });
  };

  const deleteAdmin = (id: string) => {
    if (id === currentAdmin.id) {
      addToast({
        type: 'error',
        title: 'Action impossible',
        message: 'Vous ne pouvez pas supprimer votre propre compte actif.'
      });
      return;
    }
    setAdmins(prev => prev.filter(a => a.id !== id));
    addToast({
      type: 'info',
      title: 'Administrateur supprimé',
      message: 'Le compte a été révoqué.'
    });
  };

  const toggleAdminStatus = (id: string) => {
    if (id === currentAdmin.id) return;
    setAdmins(prev =>
      prev.map(a => (a.id === id ? { ...a, status: a.status === 'active' ? 'suspended' : 'active' } : a))
    );
  };

  const reset2FA = (id: string) => {
    setAdmins(prev =>
      prev.map(a => (a.id === id ? { ...a, twoFactorEnabled: false, twoFactorMethod: undefined } : a))
    );
    addToast({
      type: 'warning',
      title: '2FA réinitialisé',
      message: 'Une invitation a été envoyée.'
    });
  };

  const updatePermissions = (id: string, permissions: AdminPermission[]) => {
    setAdmins(prev =>
      prev.map(a => (a.id === id ? { ...a, permissions } : a))
    );
  };

  const changeRole = (id: string, newRole: AdminRole) => {
    setAdmins(prev =>
      prev.map(a =>
        a.id === id ? { ...a, role: newRole, permissions: ROLE_DEFAULT_PERMISSIONS[newRole] } : a
      )
    );
  };

  // Partners & Sessions
  const approvePartner = (partnerId: string) => {
    setPartners(prev =>
      prev.map(p => (p.id === partnerId ? { ...p, status: 'approved' } : p))
    );
    addToast({
      type: 'success',
      title: 'Partenaire approuvé',
      message: 'L\'établissement est désormais certifié sur la plateforme.'
    });
  };

  const rejectPartner = (partnerId: string) => {
    setPartners(prev =>
      prev.map(p => (p.id === partnerId ? { ...p, status: 'rejected' } : p))
    );
  };

  const updateBookingStatus = (bookingId: string, status: BookingAdminItem['status']) => {
    setBookings(prev =>
      prev.map(b => (b.id === bookingId ? { ...b, status } : b))
    );
  };

  const terminateSession = (sessionId: string) => {
    setActiveSessions(prev => prev.filter(s => s.id !== sessionId));
    addToast({
      type: 'info',
      title: 'Session révoquée',
      message: 'La session distante a été déconnectée.'
    });
  };

  const exportAdminsCSV = () => {
    const headers = ['ID', 'Nom', 'Email', 'Role', 'Departement', 'Ville', 'Statut'];
    const rows = admins.map(a => [a.id, `"${a.name}"`, a.email, a.role, `"${a.department}"`, `"${a.location}"`, a.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `admins_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  const exportAuditCSV = () => {
    const headers = ['ID', 'Horodatage', 'Administrateur', 'Action', 'IP'];
    const rows = auditLogs.map(l => [l.id, `"${l.timestamp}"`, `"${l.adminName}"`, `"${l.action}"`, l.ip]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = `audit_logs_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  const dynamicStats: PlatformStats = {
    ...INITIAL_STATS,
    totalAdminsCount: admins.length,
    activeAdminsCount: admins.filter(a => a.status === 'active').length,
    twoFactorRate: admins.length > 0 ? Math.round((admins.filter(a => a.twoFactorEnabled).length / admins.length) * 100) : 0,
    pendingPartners: partners.filter(p => p.status === 'pending').length,
    approvedPartners: partners.filter(p => p.status === 'approved').length,
    totalPagesCount: pages.length,
    totalCitiesCount: destinations.length
  };

  return (
    <AdminContext.Provider
      value={{
        activeTab,
        setActiveTab,
        theme,
        toggleTheme,
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        toasts,
        destinations,
        addCityDestination,
        updateCityDestination,
        deleteCityDestination,
        toggleDestinationPublish,
        toggleDestinationFeatured,
        pages,
        addCustomPage,
        updateCustomPage,
        deleteCustomPage,
        togglePagePublish,
        platformConfig,
        updatePlatformConfig,
        recommendations,
        addRecommendation,
        updateRecommendation,
        deleteRecommendation,
        adBanners,
        addAdBanner,
        updateAdBanner,
        deleteAdBanner,
        toggleAdBanner,
        admins,
        currentAdmin,
        currentAdminId,
        setCurrentAdminId,
        addAdmin,
        updateAdmin,
        deleteAdmin,
        toggleAdminStatus,
        reset2FA,
        updatePermissions,
        changeRole,
        partners,
        bookings,
        auditLogs,
        activeSessions,
        stats: dynamicStats,
        approvePartner,
        rejectPartner,
        updateBookingStatus,
        terminateSession,
        addAuditLog,
        exportAdminsCSV,
        exportAuditCSV,
        addToast,
        removeToast
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

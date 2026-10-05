import type { AdminUser, AdminRole, AdminPermission, AuditLog, ActiveSession, PartnerApplication, DestinationAdminItem, BookingAdminItem, PlatformStats } from '../types/admin';

export const ROLE_LABELS: Record<AdminRole, { label: string; badgeColor: string; description: string }> = {
  super_admin: {
    label: 'Super Administrateur',
    badgeColor: '#C8503D',
    description: 'Accès intégral à l\'ensemble du système, gestion des admins et finances.'
  },
  content_manager: {
    label: 'Gestionnaire Contenu',
    badgeColor: '#2563EB',
    description: 'Création et mise à jour des destinations, guides et médias culturels.'
  },
  partner_manager: {
    label: 'Responsable Partenaires',
    badgeColor: '#D97706',
    description: 'Validation des riads, guides, agences de transport et gestion des commissions.'
  },
  moderator: {
    label: 'Modérateur Club & Avis',
    badgeColor: '#7C3AED',
    description: 'Modération des avis clients, gestion des membres VIP et conciergerie.'
  },
  security_officer: {
    label: 'Auditeur Sécurité & IT',
    badgeColor: '#059669',
    description: 'Surveillance des sessions, politique 2FA, logs d\'audit et conformité RGPD.'
  }
};

export const PERMISSION_DESCRIPTIONS: Record<AdminPermission, { label: string; category: string }> = {
  'admins:read': { label: 'Consulter l\'annuaire des administrateurs', category: 'Administration' },
  'admins:manage': { label: 'Créer, modifier et suspendre des administrateurs', category: 'Administration' },
  'roles:manage': { label: 'Attribuer et modifier les rôles d\'accès', category: 'Administration' },
  'content:read': { label: 'Consulter les destinations et articles', category: 'Contenu' },
  'content:write': { label: 'Rédiger et éditer le contenu touristique', category: 'Contenu' },
  'content:publish': { label: 'Publier et dépublier des fiches villes', category: 'Contenu' },
  'partners:read': { label: 'Consulter la liste des partenaires', category: 'Partenariats' },
  'partners:approve': { label: 'Approuver ou rejeter les demandes de partenariat', category: 'Partenariats' },
  'bookings:read': { label: 'Voir les réservations et membres Club', category: 'Réservations' },
  'bookings:manage': { label: 'Modifier les réservations et statuts VIP', category: 'Réservations' },
  'finance:view': { label: 'Accéder aux commissions et rapports financiers', category: 'Finances' },
  'security:audit': { label: 'Consulter et exporter les journaux d\'audit', category: 'Sécurité' },
  'settings:configure': { label: 'Modifier la configuration système globale', category: 'Système' }
};

export const ROLE_DEFAULT_PERMISSIONS: Record<AdminRole, AdminPermission[]> = {
  super_admin: [
    'admins:read', 'admins:manage', 'roles:manage',
    'content:read', 'content:write', 'content:publish',
    'partners:read', 'partners:approve',
    'bookings:read', 'bookings:manage',
    'finance:view', 'security:audit', 'settings:configure'
  ],
  content_manager: [
    'admins:read',
    'content:read', 'content:write', 'content:publish',
    'partners:read',
    'bookings:read'
  ],
  partner_manager: [
    'admins:read',
    'content:read',
    'partners:read', 'partners:approve',
    'bookings:read', 'bookings:manage',
    'finance:view'
  ],
  moderator: [
    'admins:read',
    'content:read',
    'partners:read',
    'bookings:read', 'bookings:manage'
  ],
  security_officer: [
    'admins:read', 'admins:manage', 'roles:manage',
    'security:audit', 'settings:configure'
  ]
};

export const INITIAL_ADMINS: AdminUser[] = [
  {
    id: 'admin-01',
    name: 'Youssef Benjelloun',
    email: 'youssef.b@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'super_admin',
    department: 'Direction Générale',
    location: 'Casablanca, Maroc',
    status: 'active',
    twoFactorEnabled: true,
    twoFactorMethod: 'authenticator',
    lastLogin: 'Il y a 12 minutes',
    lastIp: '196.200.142.50',
    permissions: ROLE_DEFAULT_PERMISSIONS['super_admin'],
    createdAt: '15 Jan 2024',
    isOnline: true,
    phone: '+212 661 23 45 67'
  },
  {
    id: 'admin-02',
    name: 'Kenza El Alami',
    email: 'kenza.alami@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    role: 'content_manager',
    department: 'Pôle Culture & Patrimoine',
    location: 'Rabat, Maroc',
    status: 'active',
    twoFactorEnabled: true,
    twoFactorMethod: 'authenticator',
    lastLogin: 'Il y a 45 minutes',
    lastIp: '196.200.130.12',
    permissions: ROLE_DEFAULT_PERMISSIONS['content_manager'],
    createdAt: '03 Fév 2024',
    isOnline: true,
    phone: '+212 662 89 01 23'
  },
  {
    id: 'admin-03',
    name: 'Mehdi Tazi',
    email: 'mehdi.tazi@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    role: 'partner_manager',
    department: 'Hospitalité & Riads',
    location: 'Marrakech, Maroc',
    status: 'active',
    twoFactorEnabled: true,
    twoFactorMethod: 'authenticator',
    lastLogin: 'Il y a 2 heures',
    lastIp: '41.140.210.88',
    permissions: ROLE_DEFAULT_PERMISSIONS['partner_manager'],
    createdAt: '18 Mars 2024',
    isOnline: false,
    phone: '+212 663 11 22 33'
  },
  {
    id: 'admin-04',
    name: 'Amina Chraibi',
    email: 'amina.chraibi@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    role: 'moderator',
    department: 'Expérience Club & Support',
    location: 'Fès, Maroc',
    status: 'active',
    twoFactorEnabled: true,
    twoFactorMethod: 'sms',
    lastLogin: 'Il y a 4 heures',
    lastIp: '105.159.84.19',
    permissions: ROLE_DEFAULT_PERMISSIONS['moderator'],
    createdAt: '10 Avr 2024',
    isOnline: true,
    phone: '+212 664 44 55 66'
  },
  {
    id: 'admin-05',
    name: 'Othmane Berrada',
    email: 'othmane.b@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    role: 'security_officer',
    department: 'Sécurité & Infrastructure IT',
    location: 'Casablanca, Maroc',
    status: 'active',
    twoFactorEnabled: true,
    twoFactorMethod: 'hardware_key',
    lastLogin: 'Il y a 25 minutes',
    lastIp: '196.200.142.55',
    permissions: ROLE_DEFAULT_PERMISSIONS['security_officer'],
    createdAt: '01 Mai 2024',
    isOnline: true,
    phone: '+212 665 77 88 99'
  },
  {
    id: 'admin-06',
    name: 'Leila Benkaddour',
    email: 'leila.b@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    role: 'partner_manager',
    department: 'Région Nord & Tanger',
    location: 'Tanger, Maroc',
    status: 'active',
    twoFactorEnabled: false,
    lastLogin: 'Hier à 18:30',
    lastIp: '105.158.42.11',
    permissions: ROLE_DEFAULT_PERMISSIONS['partner_manager'],
    createdAt: '14 Juin 2024',
    isOnline: false,
    phone: '+212 666 99 00 11'
  },
  {
    id: 'admin-07',
    name: 'Tariq Mansouri',
    email: 'tariq.mansouri@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    role: 'content_manager',
    department: 'Circuits Sud & Sahara',
    location: 'Ouarzazate, Maroc',
    status: 'suspended',
    twoFactorEnabled: true,
    twoFactorMethod: 'authenticator',
    lastLogin: 'Il y a 6 jours',
    lastIp: '196.217.15.4',
    permissions: ROLE_DEFAULT_PERMISSIONS['content_manager'],
    createdAt: '22 Août 2024',
    isOnline: false,
    phone: '+212 667 33 44 55'
  },
  {
    id: 'admin-08',
    name: 'Salma Idrissi',
    email: 'salma.idrissi@decouvrelemaroc.com',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    role: 'moderator',
    department: 'Médiation Voyageurs',
    location: 'Agadir, Maroc',
    status: 'pending',
    twoFactorEnabled: false,
    lastLogin: 'Jamais connecté',
    lastIp: '—',
    permissions: ROLE_DEFAULT_PERMISSIONS['moderator'],
    createdAt: 'Hier à 14:15',
    isOnline: false,
    phone: '+212 668 77 12 34'
  }
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'log-01',
    adminId: 'admin-01',
    adminName: 'Youssef Benjelloun',
    adminAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    action: 'Validation du partenaire "Riad Dar Maya Essaouira"',
    category: 'partners',
    severity: 'info',
    details: 'Approbation du contrat partenaire et fixation du taux de commission à 12%.',
    ip: '196.200.142.50',
    timestamp: 'Il y a 10 minutes'
  },
  {
    id: 'log-02',
    adminId: 'admin-05',
    adminName: 'Othmane Berrada',
    adminAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    action: 'Mise à jour de la politique de sécurité 2FA',
    category: 'security',
    severity: 'warning',
    details: 'Activation de l\'exigence 2FA stricte pour tout le personnel ayant le rôle de Gestionnaire Partenaires.',
    ip: '196.200.142.55',
    timestamp: 'Il y a 32 minutes'
  },
  {
    id: 'log-03',
    adminId: 'admin-02',
    adminName: 'Kenza El Alami',
    adminAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    action: 'Publication du guide "Les Secrets de la Médina de Fès"',
    category: 'content',
    severity: 'info',
    details: 'Ajout de 14 nouvelles adresses d\'artisans dinandiers et maîtres tanneurs.',
    ip: '196.200.130.12',
    timestamp: 'Il y a 1 heure'
  },
  {
    id: 'log-04',
    adminId: 'admin-01',
    adminName: 'Youssef Benjelloun',
    adminAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    action: 'Création d\'invitation pour Salma Idrissi',
    category: 'admin_management',
    severity: 'info',
    details: 'Attribution du rôle Modérateur Club & Avis avec permissions par défaut.',
    ip: '196.200.142.50',
    timestamp: 'Hier à 14:15'
  },
  {
    id: 'log-05',
    adminId: 'admin-05',
    adminName: 'Othmane Berrada',
    adminAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    action: 'Blocage session suspecte (IP 45.130.x.x)',
    category: 'security',
    severity: 'critical',
    details: 'Tentatives répétées de connexion brute-force sur l\'API d\'administration détectées et bannies.',
    ip: '196.200.142.55',
    timestamp: 'Hier à 22:40'
  }
];

export const INITIAL_SESSIONS: ActiveSession[] = [
  {
    id: 'sess-01',
    adminId: 'admin-01',
    adminName: 'Youssef Benjelloun',
    device: 'Apple MacBook Pro M3',
    browser: 'Chrome 128 (macOS Sonoma)',
    location: 'Casablanca (Sidi Belyout)',
    ip: '196.200.142.50',
    startedAt: 'Aujourd\'hui à 08:30',
    isCurrent: true
  },
  {
    id: 'sess-02',
    adminId: 'admin-02',
    adminName: 'Kenza El Alami',
    device: 'Dell XPS 15',
    browser: 'Firefox 129 (Windows 11)',
    location: 'Rabat (Agdal)',
    ip: '196.200.130.12',
    startedAt: 'Aujourd\'hui à 09:15',
    isCurrent: false
  },
  {
    id: 'sess-03',
    adminId: 'admin-05',
    adminName: 'Othmane Berrada',
    device: 'ThinkPad X1 Carbon',
    browser: 'Brave (Ubuntu Linux)',
    location: 'Casablanca (Maârif)',
    ip: '196.200.142.55',
    startedAt: 'Aujourd\'hui à 10:02',
    isCurrent: false
  },
  {
    id: 'sess-04',
    adminId: 'admin-04',
    adminName: 'Amina Chraibi',
    device: 'iPhone 15 Pro',
    browser: 'Safari Mobile (iOS 18)',
    location: 'Fès (Médina)',
    ip: '105.159.84.19',
    startedAt: 'Aujourd\'hui à 11:20',
    isCurrent: false
  }
];

export const INITIAL_PARTNERS: PartnerApplication[] = [
  {
    id: 'part-01',
    name: 'Riad Dar Maya Luxury & Spa',
    category: 'Riad & Hôtel de Charme',
    city: 'Essaouira',
    contactName: 'Gareth Henderson & Zineb El Fassi',
    email: 'contact@darmaya-essaouira.com',
    phone: '+212 524 47 22 10',
    status: 'pending',
    commissionRate: 12,
    submittedAt: 'Aujourd\'hui à 11:30',
    rating: 4.9,
    documentsVerified: true
  },
  {
    id: 'part-02',
    name: 'Nomad Camp Sahara Luxury Bivouac',
    category: 'Excursion Désert & 4x4',
    city: 'Merzouga / Erg Chebbi',
    contactName: 'Moulay Hassan Berbiche',
    email: 'reservation@ergchebbi-luxury.ma',
    phone: '+212 661 88 99 00',
    status: 'pending',
    commissionRate: 15,
    submittedAt: 'Hier à 16:45',
    rating: 4.95,
    documentsVerified: true
  },
  {
    id: 'part-03',
    name: 'Palais Faraj Suites & Spa',
    category: 'Riad & Hôtel de Charme',
    city: 'Fès',
    contactName: 'Driss Tazi',
    email: 'direction@palaisfaraj.com',
    phone: '+212 535 63 53 56',
    status: 'pending',
    commissionRate: 14,
    submittedAt: 'Il y a 2 jours',
    rating: 4.88,
    documentsVerified: false
  },
  {
    id: 'part-04',
    name: 'La Grande Table Marocaine (Royal Mansour)',
    category: 'Restaurant Gastronomique',
    city: 'Marrakech',
    contactName: 'Karim Zouiten',
    email: 'dining@royalmansour.ma',
    phone: '+212 529 80 80 80',
    status: 'approved',
    commissionRate: 10,
    submittedAt: '02 Mars 2024',
    rating: 5.0,
    documentsVerified: true
  },
  {
    id: 'part-05',
    name: 'Atlas Guides & Trekking Toubkal',
    category: 'Guide Certifié',
    city: 'Imlil / Haut Atlas',
    contactName: 'Brahim Aït Ali',
    email: 'contact@toubkal-trekking.ma',
    phone: '+212 662 34 56 78',
    status: 'approved',
    commissionRate: 18,
    submittedAt: '12 Janv 2024',
    rating: 4.92,
    documentsVerified: true
  }
];

export const INITIAL_DESTINATIONS: DestinationAdminItem[] = [
  {
    id: 'dest-marrakech',
    name: 'Marrakech',
    slug: 'marrakech',
    region: 'inland',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 48920,
    rating: 4.9,
    partnersCount: 42,
    updatedAt: 'Hier',
    heroImageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Ville Rouge & Médina',
    temperature: 28,
    weatherCondition: 'Ensoleillé ciel bleu'
  },
  {
    id: 'dest-fes',
    name: 'Fès',
    slug: 'fes',
    region: 'inland',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 27410,
    rating: 4.85,
    partnersCount: 28,
    updatedAt: 'Il y a 3 jours',
    heroImageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Cité Spirituelle',
    temperature: 24,
    weatherCondition: 'Ensoleillé & doux'
  },
  {
    id: 'dest-tanger',
    name: 'Tanger',
    slug: 'tanger',
    region: 'coastal',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 31200,
    rating: 4.8,
    partnersCount: 24,
    updatedAt: 'Il y a 5 jours',
    heroImageUrl: 'https://images.unsplash.com/photo-1579619564365-03554adc3b99?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Porte du Détroit',
    temperature: 22,
    weatherCondition: 'Brise océanique'
  },
  {
    id: 'dest-casablanca',
    name: 'Casablanca',
    slug: 'casablanca',
    region: 'coastal',
    status: 'published',
    isFeatured: false,
    viewsThisMonth: 22800,
    rating: 4.7,
    partnersCount: 35,
    updatedAt: 'Il y a 1 semaine',
    heroImageUrl: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Hassan II & Corniche',
    temperature: 23,
    weatherCondition: 'Doux & Océan'
  },
  {
    id: 'dest-rabat',
    name: 'Rabat',
    slug: 'rabat',
    region: 'coastal',
    status: 'published',
    isFeatured: false,
    viewsThisMonth: 18450,
    rating: 4.82,
    partnersCount: 19,
    updatedAt: 'Il y a 4 jours',
    heroImageUrl: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Capitale Lumière',
    temperature: 23,
    weatherCondition: 'Ciel dégagé'
  },
  {
    id: 'dest-agadir',
    name: 'Agadir',
    slug: 'agadir',
    region: 'coastal',
    status: 'published',
    isFeatured: false,
    viewsThisMonth: 21900,
    rating: 4.65,
    partnersCount: 22,
    updatedAt: 'Il y a 2 semaines',
    heroImageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Baie Solaire',
    temperature: 26,
    weatherCondition: '300 jours de soleil'
  },
  {
    id: 'dest-ouarzazate',
    name: 'Ouarzazate',
    slug: 'ouarzazate',
    region: 'inland',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 14750,
    rating: 4.9,
    partnersCount: 14,
    updatedAt: 'Hier',
    heroImageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Porte du Désert',
    temperature: 27,
    weatherCondition: 'Chaud & Ensoleillé'
  },
  {
    id: 'dest-dakhla',
    name: 'Dakhla Lagoon',
    slug: 'dakhla',
    region: 'coastal',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 19800,
    rating: 4.94,
    partnersCount: 12,
    updatedAt: 'Il y a 2 jours',
    heroImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Lagune Paradis',
    temperature: 25,
    weatherCondition: 'Soleil & Alizés'
  },
  {
    id: 'dest-chefchaouen',
    name: 'Chefchaouen La Perle Bleue',
    slug: 'chefchaouen',
    region: 'inland',
    status: 'published',
    isFeatured: true,
    viewsThisMonth: 38200,
    rating: 4.92,
    partnersCount: 18,
    updatedAt: 'Aujourd\'hui',
    heroImageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
    heroBadge: 'Joyau Bleu du Rif',
    temperature: 21,
    weatherCondition: 'Air pur & Douceur'
  }
];

export const INITIAL_BOOKINGS: BookingAdminItem[] = [
  {
    id: 'bk-1092',
    bookingRef: 'DLM-2025-0841',
    clientName: 'Mamadou Diop',
    clientEmail: 'm.diop@dakar-capital.sn',
    destination: 'Marrakech',
    experienceTitle: 'Séjour Riad Privatif & Dîner Étoilé',
    startDate: '12 Nov 2025',
    endDate: '17 Nov 2025',
    guestsCount: 4,
    amountMAD: 28400,
    status: 'confirmed',
    clubTier: 'VIP Platinum',
    createdAt: 'Il y a 2 heures'
  },
  {
    id: 'bk-1093',
    bookingRef: 'DLM-2025-0842',
    clientName: 'Sophie de Courcelles',
    clientEmail: 's.courcelles@paris-travel.fr',
    destination: 'Désert Merzouga',
    experienceTitle: 'Expédition 4x4 & Nuit Étoilée Bivouac',
    startDate: '20 Nov 2025',
    endDate: '24 Nov 2025',
    guestsCount: 2,
    amountMAD: 16800,
    status: 'confirmed',
    clubTier: 'Gold',
    createdAt: 'Il y a 4 heures'
  },
  {
    id: 'bk-1094',
    bookingRef: 'DLM-2025-0843',
    clientName: 'Tariq Al-Sabah',
    clientEmail: 'tariq.s@invest-kw.com',
    destination: 'Fès & Meknès',
    experienceTitle: 'Circuit Impérial Privé & Maîtres Artisans',
    startDate: '01 Déc 2025',
    endDate: '07 Déc 2025',
    guestsCount: 5,
    amountMAD: 45200,
    status: 'pending',
    clubTier: 'VIP Platinum',
    createdAt: 'Hier à 19:10'
  },
  {
    id: 'bk-1095',
    bookingRef: 'DLM-2025-0844',
    clientName: 'Nadia Benmoussa',
    clientEmail: 'nadia.b@tech-montreal.ca',
    destination: 'Tanger & Chefchaouen',
    experienceTitle: 'Escapade Côtière & Médina Bleue',
    startDate: '15 Déc 2025',
    endDate: '19 Déc 2025',
    guestsCount: 2,
    amountMAD: 12500,
    status: 'confirmed',
    clubTier: 'Silver',
    createdAt: 'Hier à 11:25'
  }
];

export const INITIAL_STATS: PlatformStats = {
  totalRevenueMAD: 489500,
  revenueGrowth: 18.4,
  monthlyBookings: 1420,
  bookingsGrowth: 14.1,
  uniqueVisitors: 98450,
  visitorsGrowth: 26.5,
  approvedPartners: 184,
  pendingPartners: 3,
  activeAdminsCount: 6,
  totalAdminsCount: 8,
  twoFactorRate: 87.5
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  PartnerProfile,
  PartnerOnboardingDraft,
  PartnerBookingItem
} from '../types/partner';

const STORAGE_KEY_PROFILE = 'dlm_partner_profile_v1';
const STORAGE_KEY_DRAFT = 'dlm_partner_onboarding_draft_v1';

export const INITIAL_DEMO_PARTNER: PartnerProfile = {
  id: 'partner-dlm-001',
  createdAt: '15 Février 2025',
  updatedAt: '08 Octobre 2025',
  account: {
    firstName: 'Tarik',
    lastName: 'El Mansouri',
    email: 'contact@riaddarelbacha.com',
    phone: '+212 661 24 55 88',
    role: 'owner'
  },
  business: {
    name: 'Riad Dar El Bacha Prestige',
    legalName: 'Dar El Bacha Hospitality SARL',
    category: 'accommodation',
    subCategory: 'Riad & Palais d’Hôtes Historique',
    city: 'Marrakech',
    region: 'Marrakech-Safi',
    address: '18 Rue Dar El Bacha, Médina, 40000 Marrakech',
    iceNumber: '002491823000084',
    rcNumber: 'Marrakech 72190',
    patenteNumber: '4820193',
    website: 'https://riaddarelbacha.com',
    phone: '+212 524 38 12 00',
    email: 'direction@riaddarelbacha.com'
  },
  offer: {
    title: 'Suites Royales & Patio Andalous aux Orangers Centenaires',
    tagline: 'L’excellence de l’art de vivre marocain au cœur de la médina de Marrakech',
    description: `Demeure d’exception du XIXe siècle entièrement restaurée dans le pur respect des traditions architecturales hispano-mauresques. Zelliges ciselés à la main, plafonds en bois de cèdre peint (zouak) et fontaine de marbre blanc composent un havre de paix intemporel.

Chaque suite spacieuse dispose d’une literie haut de gamme, d’un salon marocain privé et d’une salle de bains en tadelakt traditionnel. Notre patio végétalisé accueille une piscine chauffée toute l’année et un toit-terrasse panoramique offrant une vue imprenable sur les toits de la médina et les sommets enneigés de l’Atlas.`,
    startingPrice: 1650,
    priceUnit: 'par nuit (chambre double)',
    capacity: 14,
    amenities: [
      'Piscine chauffée dans le patio',
      'Petit-déjeuner gastronomique marocain inclus',
      'Hammam traditionnel & Massages à l’huile d’argan',
      'Toit-terrasse panoramique avec solarium',
      'Connexion Wi-Fi fibre optique 500 Mb/s',
      'Climatisation réversible silencieuse',
      'Service de conciergerie privée 24h/24',
      'Transfert aéroport privé en Mercedes Classe V'
    ],
    includedItems: [
      'Thé à la menthe d’accueil royal et pâtisseries fassies',
      'Petit-déjeuner traditionnel servi sur le rooftop ou en patio',
      'Accès illimité au bassin chauffé',
      'Produits d’accueil bio aux senteurs de fleur d’oranger'
    ],
    notIncludedItems: [
      'Taxe de séjour touristique locale (25 MAD / pers / nuit)',
      'Soins et rituels hammam personnalisés',
      'Dîners gastronomiques à la carte'
    ],
    checkInTime: '14:00',
    checkOutTime: '12:00',
    openingHours: 'Réception 24h/24',
    languages: ['Français', 'Arabe', 'Anglais', 'Espagnol'],
    isAvailable: true
  },
  media: {
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=800&auto=format&fit=crop&q=80'
    ]
  },
  verification: {
    status: 'verified',
    cinProvided: true,
    businessDocProvided: true,
    licenseProvided: true,
    submittedAt: '16 Février 2025',
    verifiedAt: '18 Février 2025',
    reviewerFeedback: 'Établissement conforme à la charte d’excellence DécouvreLeMaroc. Documents RC et patente touristique validés.'
  },
  financials: {
    commissionRate: 12,
    bankName: 'Attijariwafa Bank — Agence Guéliz Marrakech',
    rib: '007 450 0001234567890123 44',
    accountHolder: 'Dar El Bacha Hospitality SARL',
    totalEarningsMAD: 64800,
    pendingPayoutMAD: 9800,
    lastPayoutDate: '30 Septembre 2025'
  },
  stats: {
    viewsCount: 4820,
    bookingsCount: 38,
    rating: 4.9,
    reviewsCount: 34,
    completionScore: 95
  },
  bookings: [
    {
      id: 'bk-part-101',
      bookingRef: 'DLM-BCH-782',
      clientName: 'Alexandre & Sophie Laurent',
      clientEmail: 'a.laurent@gmail.com',
      clientPhone: '+33 6 12 34 56 78',
      serviceTitle: 'Suite Ambre — Séjour 3 Nuits avec Petit-déjeuner',
      dateStart: '14 Octobre 2025',
      dateEnd: '17 Octobre 2025',
      guestsCount: 2,
      totalAmountMAD: 4950,
      commissionRate: 12,
      commissionAmountMAD: 594,
      netPartnerAmountMAD: 4356,
      status: 'confirmed',
      createdAt: '02 Octobre 2025',
      specialRequests: 'Arrivée tardive vers 22h30, demande de transfert aéroport.'
    },
    {
      id: 'bk-part-102',
      bookingRef: 'DLM-BCH-783',
      clientName: 'Karim Berrada',
      clientEmail: 'k.berrada@invest.ma',
      clientPhone: '+212 6 61 88 99 00',
      serviceTitle: 'Suite Royale Patio — Séjour Week-end 2 Nuits',
      dateStart: '24 Octobre 2025',
      dateEnd: '26 Octobre 2025',
      guestsCount: 2,
      totalAmountMAD: 3300,
      commissionRate: 12,
      commissionAmountMAD: 396,
      netPartnerAmountMAD: 2904,
      status: 'confirmed',
      createdAt: '05 Octobre 2025'
    },
    {
      id: 'bk-part-103',
      bookingRef: 'DLM-BCH-784',
      clientName: 'Elena Rostova',
      clientEmail: 'elena.rostova@travel.ch',
      clientPhone: '+41 79 123 45 67',
      serviceTitle: 'Suite Atlas avec Terrasse Privée — 4 Nuits',
      dateStart: '02 Novembre 2025',
      dateEnd: '06 Novembre 2025',
      guestsCount: 2,
      totalAmountMAD: 6600,
      commissionRate: 12,
      commissionAmountMAD: 792,
      netPartnerAmountMAD: 5808,
      status: 'pending',
      createdAt: '08 Octobre 2025',
      specialRequests: 'Régime végétarien pour les petits-déjeuners.'
    },
    {
      id: 'bk-part-104',
      bookingRef: 'DLM-BCH-760',
      clientName: 'Marc Dubreuil',
      clientEmail: 'm.dubreuil@free.fr',
      clientPhone: '+33 6 45 67 89 01',
      serviceTitle: 'Suite Majorelle — Séjour 2 Nuits',
      dateStart: '26 Septembre 2025',
      dateEnd: '28 Septembre 2025',
      guestsCount: 2,
      totalAmountMAD: 3300,
      commissionRate: 12,
      commissionAmountMAD: 396,
      netPartnerAmountMAD: 2904,
      status: 'completed',
      createdAt: '18 Septembre 2025'
    }
  ],
  reviews: [
    {
      id: 'rev-01',
      clientName: 'Camille & Julien V.',
      clientCountry: 'France',
      rating: 5,
      date: '29 Septembre 2025',
      serviceTitle: 'Suite Majorelle',
      comment: 'Un séjour inoubliable ! Le Riad Dar El Bacha est un véritable havre de paix au milieu de l’agitation de la médina. Le personnel est d’une gentillesse rare, le petit-déjeuner sur la terrasse était divin. Nous reviendrons sans hésiter.',
      partnerReply: 'Merci infiniment Camille & Julien pour ce retour si chaleureux ! Ce fut un plaisir immense de vous accueillir parmi nous. À très bientôt sous le soleil de Marrakech.',
      replyDate: '30 Septembre 2025'
    },
    {
      id: 'rev-02',
      clientName: 'Liam O’Connor',
      clientCountry: 'Irlande',
      rating: 5,
      date: '15 Septembre 2025',
      serviceTitle: 'Suite Ambre',
      comment: 'Superb boutique riad. The heated pool in the courtyard was fantastic after a day of exploring the souks. Impeccable attention to detail and delicious Moroccan pastries.',
      partnerReply: 'Thank you so much Liam! We are delighted that you enjoyed the heated patio pool and our hospitality.',
      replyDate: '16 Septembre 2025'
    },
    {
      id: 'rev-03',
      clientName: 'Nadia El Fassi',
      clientCountry: 'Maroc',
      rating: 4.8,
      date: '02 Septembre 2025',
      serviceTitle: 'Suite Royale Patio',
      comment: 'Très belle adresse, zelliges magnifiques et ambiance feutrée très reposante. Spa très propre et massage relaxant parfait.',
      partnerReply: 'Chokran jazilan chère Nadia pour votre confiance et au plaisir de vous revoir.',
      replyDate: '03 Septembre 2025'
    }
  ],
  messages: [
    {
      id: 'msg-01',
      sender: 'concierge',
      senderName: 'Conciergerie DécouvreLeMaroc',
      content: 'Bonjour Tarik ! Félicitations pour votre excellente note moyenne de 4.9/5 ce mois-ci. Votre riad a été sélectionné pour la mise en avant dans notre newsletter membres VIP du week-end.',
      timestamp: 'Aujourd’hui à 11:20',
      isRead: false
    },
    {
      id: 'msg-02',
      sender: 'client',
      senderName: 'Alexandre Laurent (DLM-BCH-782)',
      content: 'Bonjour, notre vol arrive à 21h50 à l’aéroport Menara. Pouvez-vous nous confirmer que votre chauffeur aura une pancarte à notre nom ? Merci d’avance !',
      timestamp: 'Hier à 16:45',
      isRead: true
    },
    {
      id: 'msg-03',
      sender: 'partner',
      senderName: 'Riad Dar El Bacha',
      content: 'Bonsoir M. Laurent, oui absolument ! Notre chauffeur Youssef vous attendra avec une pancarte à votre nom dès la sortie des bagages. Bon voyage !',
      timestamp: 'Hier à 17:10',
      isRead: true
    }
  ]
};

export const INITIAL_DRAFT: PartnerOnboardingDraft = {
  currentStep: 1,
  category: 'accommodation',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  legalName: '',
  city: 'Marrakech',
  address: '',
  iceNumber: '',
  rcNumber: '',
  website: '',
  offerTitle: '',
  tagline: '',
  description: '',
  startingPrice: 1200,
  priceUnit: 'par nuit',
  capacity: 4,
  duration: 'Journée',
  amenities: [
    'Wi-Fi haut débit',
    'Petit-déjeuner inclus',
    'Climatisation réversible',
    'Service de conciergerie'
  ],
  includedItems: ['Thé d’accueil et pâtisseries', 'Assistance locale 7j/7'],
  notIncludedItems: ['Taxe de séjour', 'Dépenses personnelles'],
  checkInTime: '14:00',
  checkOutTime: '12:00',
  languages: ['Français', 'Arabe', 'Anglais'],
  coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&auto=format&fit=crop&q=80'
  ],
  cinNumber: '',
  hasBusinessDoc: true,
  hasLicenseDoc: true,
  notes: '',
  bankName: 'Attijariwafa Bank',
  rib: '',
  accountHolder: ''
};

interface PartnerContextType {
  partner: PartnerProfile | null;
  onboardingDraft: PartnerOnboardingDraft;
  updateDraft: (data: Partial<PartnerOnboardingDraft>) => void;
  resetDraft: () => void;
  submitOnboarding: () => PartnerProfile;
  updatePartnerOffer: (data: Partial<PartnerProfile['offer']>) => void;
  respondToReview: (reviewId: string, reply: string) => void;
  updateBookingStatus: (bookingId: string, status: PartnerBookingItem['status']) => void;
  toggleAvailability: () => void;
  toastMessage: string | null;
  setToastMessage: (msg: string | null) => void;
  loginAsDemoPartner: () => void;
}

const PartnerContext = createContext<PartnerContextType | undefined>(undefined);

export const PartnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [partner, setPartner] = useState<PartnerProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      return saved ? JSON.parse(saved) : INITIAL_DEMO_PARTNER;
    } catch {
      return INITIAL_DEMO_PARTNER;
    }
  });

  const [onboardingDraft, setOnboardingDraft] = useState<PartnerOnboardingDraft>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DRAFT);
      return saved ? JSON.parse(saved) : INITIAL_DRAFT;
    } catch {
      return INITIAL_DRAFT;
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Persist partner profile
  useEffect(() => {
    if (partner) {
      try {
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(partner));
      } catch (err) {
        console.error('Error saving partner profile', err);
      }
    }
  }, [partner]);

  // Persist onboarding draft
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DRAFT, JSON.stringify(onboardingDraft));
    } catch (err) {
      console.error('Error saving onboarding draft', err);
    }
  }, [onboardingDraft]);

  const updateDraft = (data: Partial<PartnerOnboardingDraft>) => {
    setOnboardingDraft(prev => ({ ...prev, ...data }));
  };

  const resetDraft = () => {
    setOnboardingDraft(INITIAL_DRAFT);
    try {
      localStorage.removeItem(STORAGE_KEY_DRAFT);
    } catch {}
  };

  const submitOnboarding = (): PartnerProfile => {
    const d = onboardingDraft;
    const newProfile: PartnerProfile = {
      id: `partner-${Date.now()}`,
      createdAt: 'Aujourd’hui',
      updatedAt: 'Aujourd’hui',
      account: {
        firstName: d.firstName || 'Partenaire',
        lastName: d.lastName || 'DLM',
        email: d.email || 'partenaire@decouvrelemaroc.com',
        phone: d.phone || '+212 600 000000',
        role: 'owner'
      },
      business: {
        name: d.businessName || 'Mon Établissement',
        legalName: d.legalName || d.businessName || 'Entreprise SARL',
        category: d.category,
        subCategory: d.category === 'accommodation' ? 'Riad de charme' : 'Activité touristique',
        city: d.city || 'Marrakech',
        region: `${d.city || 'Marrakech'}-Région`,
        address: d.address || 'Médina historique',
        iceNumber: d.iceNumber || '0029810000000',
        rcNumber: d.rcNumber || '48201',
        website: d.website,
        phone: d.phone || '+212 600 000000',
        email: d.email || 'contact@etablissement.ma'
      },
      offer: {
        title: d.offerTitle || 'Expérience & Séjour d’Exception',
        tagline: d.tagline || 'L’hospitalité marocaine dans toute sa splendeur',
        description: d.description || 'Présentation de votre offre d’exception sur DécouvreLeMaroc.',
        startingPrice: d.startingPrice || 1200,
        priceUnit: d.priceUnit || 'par personne',
        capacity: d.capacity || 4,
        duration: d.duration || 'Demi-journée',
        amenities: d.amenities.length > 0 ? d.amenities : ['Wi-Fi', 'Accueil VIP', 'Thé offert'],
        includedItems: d.includedItems,
        notIncludedItems: d.notIncludedItems,
        checkInTime: d.checkInTime || '14:00',
        checkOutTime: d.checkOutTime || '12:00',
        languages: d.languages.length > 0 ? d.languages : ['Français', 'Arabe'],
        isAvailable: true
      },
      media: {
        coverImage: d.coverImage || 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
        gallery: d.gallery.length > 0 ? d.gallery : [
          'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&auto=format&fit=crop&q=80'
        ]
      },
      verification: {
        status: 'pending',
        cinProvided: Boolean(d.cinNumber),
        businessDocProvided: d.hasBusinessDoc,
        licenseProvided: d.hasLicenseDoc,
        submittedAt: 'Aujourd’hui',
        reviewerFeedback: 'Dossier transmis avec succès à l’équipe audit DécouvreLeMaroc. Analyse sous 24 à 48 heures.'
      },
      financials: {
        commissionRate: 12,
        bankName: d.bankName || 'Attijariwafa Bank',
        rib: d.rib || '007 000 0000000000000000 00',
        accountHolder: d.accountHolder || `${d.firstName} ${d.lastName}`,
        totalEarningsMAD: 0,
        pendingPayoutMAD: 0
      },
      stats: {
        viewsCount: 1,
        bookingsCount: 0,
        rating: 5.0,
        reviewsCount: 0,
        completionScore: 85
      },
      bookings: [],
      reviews: [],
      messages: [
        {
          id: 'welcome-msg',
          sender: 'concierge',
          senderName: 'Équipe Partenariats DécouvreLeMaroc',
          content: 'Bienvenue sur votre espace partenaire ! Votre dossier d’inscription a été reçu. Notre équipe d’accréditation vérifie vos pièces sous 24h ouvrées.',
          timestamp: 'À l’instant',
          isRead: false
        }
      ]
    };

    setPartner(newProfile);

    // Also register into admin localStorage partners so admin sees it immediately!
    try {
      const storedAdmins = localStorage.getItem('dlm_admin_partners');
      const currentList = storedAdmins ? JSON.parse(storedAdmins) : [];
      const newAdminItem = {
        id: newProfile.id,
        name: newProfile.business.name,
        category: (d.category === 'accommodation'
          ? 'Riad & Hôtel de Charme'
          : d.category === 'restaurant'
          ? 'Restaurant Gastronomique'
          : d.category === 'guide'
          ? 'Guide Certifié'
          : 'Excursion Désert & 4x4') as any,
        city: newProfile.business.city,
        contactName: `${d.firstName} ${d.lastName}`,
        email: d.email,
        phone: d.phone,
        status: 'pending',
        commissionRate: 12,
        submittedAt: 'Aujourd’hui',
        rating: 5.0,
        documentsVerified: false
      };
      localStorage.setItem('dlm_admin_partners', JSON.stringify([newAdminItem, ...currentList]));
    } catch {}

    setToastMessage('🎉 Votre dossier a été soumis avec succès ! Bienvenue dans votre Espace Partenaire.');
    return newProfile;
  };

  const updatePartnerOffer = (data: Partial<PartnerProfile['offer']>) => {
    if (!partner) return;
    setPartner(prev => {
      if (!prev) return null;
      return {
        ...prev,
        updatedAt: 'Aujourd’hui',
        offer: { ...prev.offer, ...data }
      };
    });
    setToastMessage('Vos offres ont été mises à jour avec succès.');
  };

  const respondToReview = (reviewId: string, reply: string) => {
    if (!partner) return;
    setPartner(prev => {
      if (!prev) return null;
      return {
        ...prev,
        reviews: prev.reviews.map(r => {
          if (r.id === reviewId) {
            return {
              ...r,
              partnerReply: reply,
              replyDate: 'Aujourd’hui'
            };
          }
          return r;
        })
      };
    });
    setToastMessage('Votre réponse à l’avis client a été publiée.');
  };

  const updateBookingStatus = (bookingId: string, status: PartnerBookingItem['status']) => {
    if (!partner) return;
    setPartner(prev => {
      if (!prev) return null;
      return {
        ...prev,
        bookings: prev.bookings.map(b => (b.id === bookingId ? { ...b, status } : b))
      };
    });
    const label = status === 'confirmed' ? 'confirmée' : status === 'cancelled' ? 'annulée' : 'mise à jour';
    setToastMessage(`La réservation a été ${label} avec succès.`);
  };

  const toggleAvailability = () => {
    if (!partner) return;
    setPartner(prev => {
      if (!prev) return null;
      const nextAvail = !prev.offer.isAvailable;
      return {
        ...prev,
        offer: { ...prev.offer, isAvailable: nextAvail }
      };
    });
    setToastMessage(partner.offer.isAvailable ? 'Votre offre est désormais en pause.' : 'Votre offre est désormais disponible aux réservations !');
  };

  const loginAsDemoPartner = () => {
    setPartner(INITIAL_DEMO_PARTNER);
    setToastMessage('Connecté à l’espace de démonstration Riad Dar El Bacha.');
  };

  return (
    <PartnerContext.Provider
      value={{
        partner,
        onboardingDraft,
        updateDraft,
        resetDraft,
        submitOnboarding,
        updatePartnerOffer,
        respondToReview,
        updateBookingStatus,
        toggleAvailability,
        toastMessage,
        setToastMessage,
        loginAsDemoPartner
      }}
    >
      {children}
    </PartnerContext.Provider>
  );
};

export const usePartner = (): PartnerContextType => {
  const context = useContext(PartnerContext);
  if (!context) {
    throw new Error('usePartner must be used within a PartnerProvider');
  }
  return context;
};

import type {
  CustomPage,
  PlatformContentConfig,
  PlatformAdBanner,
  PlatformRecommendation
} from '../types/admin';

export const INITIAL_PAGES: CustomPage[] = [
  {
    id: 'page-01',
    slug: 'guide-desert-maroc',
    title: 'Guide Ultime du Sahara & Bivouacs Insolites',
    subtitle: 'Tout ce qu’il faut savoir pour vivre une nuit magique sous la voûte étoilée des dunes de Merzouga et Zagora.',
    category: 'guide',
    coverImage: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=1200&auto=format&fit=crop&q=80',
    content: `Le désert marocain est une expérience qui transforme chaque voyageur. Des crêtes dorées de l’Erg Chebbi aux étendues sauvages de M’Hamid El Ghizlane, le Sahara offre un spectacle silencieux et envoûtant.\n\n### Quand partir dans le désert ?\nLa meilleure période s’étend d’octobre à avril, lorsque les températures diurnes sont douces et agréables (autour de 22°C à 26°C). Les nuits d'hiver peuvent être fraîches, ce qui rend le feu de camp et le thé à la menthe encore plus mémorables.\n\n### Quels équipements prévoir ?\nPrévoyez des vêtements légers pour la journée, un chèche pour vous protéger des brises sahariennes, des chaussures confortables et une polaire chaude pour les soirées étoilées.\n\n### Nos Bivouacs Partenaires DécouvreLeMaroc\nNos tentes de luxe sont équipées de lits douillets, salles de bains privatives et panneaux solaires discrets, garantissant confort moderne et respect absolu de la nature.`,
    highlights: [
      'Traversée des dunes à dos de dromadaire ou 4x4',
      'Dîner traditionnel autour du feu de camp au son des tambours sahraouis',
      'Lever de soleil grandiose sur l’Erg Chebbi',
      'Hébergement en campement nomade de charme'
    ],
    ctaText: 'Découvrir nos excursions désert à Ouarzazate',
    ctaLink: '/destinations/ouarzazate',
    seoTitle: 'Guide du Désert Marocain & Bivouac de Charme | DécouvreLeMaroc',
    seoDescription: 'Préparez votre séjour dans le Sahara marocain : conseils, meilleures saisons et bivouacs de luxe sélectionnés.',
    author: 'Kenza El Alami — Pôle Patrimoine',
    status: 'published',
    views: 4890,
    createdAt: '12 Septembre 2025',
    updatedAt: '02 Octobre 2025'
  },
  {
    id: 'page-02',
    slug: 'gastronomie-marocaine',
    title: 'L’Art de la Table Marocaine : Saveurs & Secrets Royaux',
    subtitle: 'Pastilla feuilletée, tajines mijotés au feu de bois, thé à la menthe d’accueil : plongez dans l’un des plus grands patrimoines culinaires mondiaux.',
    category: 'article',
    coverImage: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1200&auto=format&fit=crop&q=80',
    content: `Classée parmi les cuisines les plus raffinées de la planète, la gastronomie marocaine est un mariage délicat entre épices nobles (safran de Taliouine, cannelle, ras el-hanout) et produits du terroir d’une fraîcheur exceptionnelle.\n\n### La Pastilla Fassie\nVéritable chef-d'œuvre sucré-salé originaire de Fès, la pastilla associe pigeon ou poulet effiloché, amandes grillées concassées, cannelle et sucre glace sous une fine feuille de ouarka croustillante.\n\n### Le Rituel du Thé à la Menthe\nSymbole absolu de l'hospitalité marocaine, le thé vert Gunpowder à la menthe fraîche ("Atay") se sert chaud, versé de haut pour former une mousse onctueuse appelée la "regga".\n\n### Où Déguster les Meilleures Tables ?\nRetrouvez notre sélection de restaurants gastronomiques et tables d’hôtes confidentielles certifiées à Marrakech, Fès, Rabat et Tanger.`,
    highlights: [
      'Recettes ancestrales transmises de mère en fille',
      'Le safran bio de Taliouine et l’huile d’argan pure',
      'Ateliers de cuisine privés dans des riads de la médina'
    ],
    ctaText: 'Explorer les adresses gastronomiques de Fès',
    ctaLink: '/destinations/fes',
    seoTitle: 'Gastronomie Marocaine & Tables Étoilées | DécouvreLeMaroc',
    seoDescription: 'Découvrez la richesse culinaire du Maroc : tajines, pastillas, cornes de gazelle et adresses recommandées.',
    author: 'Chef Youssef Benjelloun',
    status: 'published',
    views: 3420,
    createdAt: '20 Août 2025',
    updatedAt: '28 Septembre 2025'
  },
  {
    id: 'page-03',
    slug: 'conseils-formalites-maroc',
    title: 'Formalités, Monnaie & Conseils Pratiques pour Votre Voyage',
    subtitle: 'Tout ce qu’il faut savoir avant de poser le pied sur le sol marocain : visa, dirhams, coutumes locales et déplacements.',
    category: 'info',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80',
    content: `Bien préparer son départ pour le Maroc assure une immersion en toute sérénité. Voici un récapitulatif des règles et astuces essentielles pour un séjour réussi.\n\n### 1. Passeport & Formalités d'Entrée\nUn passeport en cours de validité d'au moins 3 mois après la date de retour est obligatoire. Pour les ressortissants de l’Union Européenne, des USA, du Canada et de nombreux pays africains et arabes, aucun visa n'est requis pour les séjours de moins de 90 jours.\n\n### 2. Monnaie : Le Dirham Marocain (MAD)\nLa devise officielle est le Dirham Marocain (1 € ≈ 10,8 MAD). Les cartes bancaires internationales sont largement acceptées dans les hôtels et restaurants, mais nous vous conseillons d'avoir toujours quelques espèces en dirhams pour les souks, taxis et pourboires.\n\n### 3. Connexion Internet & SIM Locale\nÀ votre arrivée à l'aéroport (Casablanca, Marrakech, Tanger...), vous pouvez obtenir facilement une carte SIM prépayée marocaine (Maroc Telecom, Inwi ou Orange) pour profiter d’une 4G/5G rapide partout.`,
    highlights: [
      'Passeport valide requis (pas de visa pour séjours < 90j pour la plupart des nationalités)',
      'Change disponible dès l’arrivée dans tous les aéroports marocains',
      'Assistance conciergerie DécouvreLeMaroc disponible 7j/7'
    ],
    ctaText: 'Rejoindre Le Club DécouvreLeMaroc',
    ctaLink: '/club',
    seoTitle: 'Conseils Voyage Maroc & Formalités Pratiques | DécouvreLeMaroc',
    seoDescription: 'Informations indispensables pour voyager au Maroc : monnaie, passeport, sécurité et astuces locales.',
    author: 'Équipe Support Voyageurs',
    status: 'published',
    views: 6150,
    createdAt: '05 Juillet 2025',
    updatedAt: '01 Octobre 2025'
  },
  {
    id: 'page-04',
    slug: 'faq-voyageurs',
    title: 'Foire Aux Questions & Conciergerie Privée',
    subtitle: 'Réponses détaillées à toutes les interrogations fréquentes de nos voyageurs et membres du Club.',
    category: 'info',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
    content: `Vous préparez votre séjour ou vous êtes déjà sur place ? Retrouvez les réponses à vos questions les plus courantes.\n\n### Comment fonctionne Le Club DécouvreLeMaroc ?\nL'adhésion au Club vous donne droit à des tarifs réduits exclusifs négociés auprès de nos riads partenaires, des attentions personnalisées (thé de bienvenue, surclassement selon disponibilité) et une ligne WhatsApp dédiée avec notre conciergerie.\n\n### Les établissements sont-ils vérifiés ?\nOui, 100% des riads, guides et prestataires répertoriés sur DécouvreLeMaroc sont audités et certifiés par nos équipes locales à Casablanca, Marrakech, Fès et Tanger.\n\n### Que faire en cas d'imprévu ?\nNotre service conciergerie est joignable 7j/7 directement sur WhatsApp au +212 661 00 00 00.`,
    highlights: [
      'Accès prioritaire conciergerie WhatsApp 7j/7',
      'Réservations sans frais cachés',
      'Partenaires agréés par le Ministère du Tourisme'
    ],
    ctaText: 'Contacter notre conciergerie sur WhatsApp',
    ctaLink: 'https://wa.me/212661000000',
    seoTitle: 'FAQ & Questions Fréquentes Voyageurs | DécouvreLeMaroc',
    seoDescription: 'Toutes les réponses pour concevoir et réussir votre voyage au Maroc avec DécouvreLeMaroc.',
    author: 'Conciergerie DécouvreLeMaroc',
    status: 'published',
    views: 2980,
    createdAt: '15 Mai 2025',
    updatedAt: '25 Septembre 2025'
  }
];

export const INITIAL_PLATFORM_CONFIG: PlatformContentConfig = {
  heroTitle: 'Découvre le Maroc',
  heroSubtitle: 'Un royaume. Une histoire. Un voyage.',
  heroMicroSignature: 'TERRES D’ÉMOTIONS',
  heroOceanQuote: '« Là où l’océan révèle la beauté du Maroc »',
  heroAtlasQuote: '« Des montagnes majestueuses aux villes impériales »',
  heroSignature: 'Le Maroc vous attend...',
  liveVisitorsCount: 428,

  announcementActive: true,
  announcementText: '🌟 Bienvenue sur DécouvreLeMaroc : Découvrez notre nouvelle sélection de riads authentiques & privilèges Club !',
  announcementCtaText: 'Rejoindre Le Club',
  announcementCtaLink: '/club',

  clubTitle: 'Le Club DécouvreLeMaroc',
  clubSubtitle: 'Le Maroc, avec des attentions en plus pour chaque séjour.',
  clubDiscountPercent: 15,
  clubPerks: [
    {
      title: 'Des tarifs membres exclusifs',
      description: 'Jusqu’à -15% négociés auprès de nos riads, guides et tables gastronomiques partenaires.',
      tag: 'Économies Réelles'
    },
    {
      title: 'Petites attentions & Cadeaux d’accueil',
      description: 'Thé de bienvenue à la menthe fraîche, douceurs marocaines en chambre ou cadeau artisanal.',
      tag: 'Hospitalité Royale'
    },
    {
      title: 'Accueil personnalisé & Référent dédié',
      description: 'Check-in soigné et interlocuteur francophone sur place pour vous orienter dans la ville.',
      tag: 'Sérénité Totale'
    },
    {
      title: 'Conciergerie WhatsApp 7j/7',
      description: 'Une équipe locale à votre écoute pour vos réservations de dernière minute et conseils avisés.',
      tag: 'Assistance Immédiate'
    }
  ],

  supportWhatsapp: '+212 661 00 00 00',
  supportPhone: '+212 522 00 00 00',
  supportEmail: 'conciergerie@decouvrelemaroc.com',
  supportHours: '7j/7 de 8h à 22h',
  supportAdvisorName: 'Yassine & Soukaina'
};

export const INITIAL_AD_BANNERS: PlatformAdBanner[] = [
  {
    id: 'ad-01',
    tag: 'HÔTEL & SPA',
    title: 'Évadez-vous à Marrakech & Palmeraie',
    subtitle: 'Séjours d’exception sélectionnés pour vous avec accès spa hammam traditionnel inclus.',
    ctaText: 'Découvrir la sélection',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80',
    linkHref: '/destinations/marrakech#hebergements',
    advertiser: 'Collection Riads DécouvreLeMaroc',
    isActive: true
  },
  {
    id: 'ad-02',
    tag: 'DÉSERT SAHARA',
    title: 'Expédition 4x4 & Nuit Étoilée à Merzouga',
    subtitle: 'Vivez la magie des dunes avec bivouac de luxe et dîner nomade sous les étoiles.',
    ctaText: 'Voir le circuit désert',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=800&auto=format&fit=crop&q=80',
    linkHref: '/destinations/ouarzazate',
    advertiser: 'Nomad Camp Sahara',
    isActive: true
  },
  {
    id: 'ad-03',
    tag: 'KITESURF & OCÉAN',
    title: 'Dakhla Lagoon : Glisse & Sérénité',
    subtitle: 'Le spot mythique au cœur du désert atlantique avec matériel haut de gamme fourni.',
    ctaText: 'Réserver l’escapade',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    linkHref: '/destinations/tanger',
    advertiser: 'Dakhla Spirit Resort',
    isActive: true
  }
];

export const INITIAL_RECOMMENDATIONS: PlatformRecommendation[] = [
  {
    id: 'rec-01',
    name: 'Riad Palais Sebban & Spa',
    citySlug: 'marrakech',
    category: 'hotels',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=80',
    rating: 4.95,
    reviewsCount: 142,
    location: 'Médina, à 5 min de Jemaa El-Fna',
    badge: 'Coup de Cœur DLM',
    tags: ['Piscine chauffée', 'Hammam', 'Vue Koutoubia'],
    priceStartingFrom: 1450,
    currency: 'MAD',
    pricePeriod: 'par nuit',
    isPublished: true
  },
  {
    id: 'rec-02',
    name: 'La Grande Table Marocaine (Royal Mansour)',
    citySlug: 'marrakech',
    category: 'restaurants',
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80',
    rating: 5.0,
    reviewsCount: 98,
    location: 'Hivernage, Marrakech',
    badge: 'Chef Étoilé',
    tags: ['Gastronomie', 'Pastilla royale', 'Cadre féérique'],
    priceStartingFrom: 650,
    currency: 'MAD',
    pricePeriod: 'menu dégustation',
    isPublished: true
  },
  {
    id: 'rec-03',
    name: 'Palais Faraj Suites & Spa',
    citySlug: 'fes',
    category: 'hotels',
    imageUrl: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 88,
    location: 'Colline sud avec vue imprenable sur la médina de Fès',
    badge: 'Vue Panoramique',
    tags: ['Spa', 'Piscine', 'Architecture Mérinide'],
    priceStartingFrom: 1800,
    currency: 'MAD',
    pricePeriod: 'par nuit',
    isPublished: true
  },
  {
    id: 'rec-04',
    name: 'Circuits 4x4 Atlas & Kasbahs',
    citySlug: 'ouarzazate',
    category: 'cars',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?w=600&auto=format&fit=crop&q=80',
    rating: 4.96,
    reviewsCount: 75,
    location: 'Aït Ben Haddou & Palmeraie',
    badge: 'Aventure Certifiée',
    tags: ['Chauffeur pro', 'Climatisation', 'Carburant inclus'],
    priceStartingFrom: 1200,
    currency: 'MAD',
    pricePeriod: 'par jour',
    isPublished: true
  }
];

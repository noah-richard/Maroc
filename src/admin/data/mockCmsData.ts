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
  },
  {
    id: 'page-05',
    slug: 'a-propos',
    title: 'À Propos de DécouvreLeMaroc — L’Art du Voyage & l’Hospitalité d’Exception',
    subtitle: 'L’histoire, la vision et les engagements d’une maison dédiée au rayonnement du patrimoine marocain, des riads de charme et des expériences authentiques.',
    category: 'article',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
    content: `DécouvreLeMaroc est né d’un amour inconditionnel pour les trésors d’un Royaume millénaire et du désir profond d’offrir aux voyageurs une façon plus intime, plus juste et plus élégante de découvrir le Maroc.

### Notre Histoire : Révéler la Véritable Âme du Maroc
Trop souvent résumé à quelques clichés touristiques ou à des parcours standardisés, le Maroc recèle en réalité une diversité étourdissante de paysages, de savoir-faire et d'émotions. Des venelles tortueuses de la médina de Fès aux crêtes ocre de l'Atlas, des ruelles bleu azur de Chefchaouen aux lagunes sauvages de Dakhla, chaque région porte une identité singulière.

Fondée par des passionnés du patrimoine marocain et des professionnels de l'hospitalité d'exception, notre plateforme a pour vocation de reconnecter les voyageurs avec la noblesse de la culture chérifienne, en valorisant les adresses qui font la fierté du Royaume.

### Notre Philosophie : L’Élégance de la Diyafa (L’Hospitalité Marocaine)
Dans la tradition marocaine, l'hôte n'est pas un simple client : c'est un invité d'honneur accueilli avec bienveillance et générosité. Cette philosophie de la générosité sincère — la Diyafa — irrigue l'ensemble de notre sélection.

Nous croyons en un voyage respectueux, attentif au temps qui passe et aux artisans qui préservent des gestes séculaires : le maître maalem zelligeur, le souffleur de verre de Marrakech, la tisseuse de tapis berbère du Haut Atlas, ou le producteur d’huile d’argan biologique de la vallée du Souss.

### Une Charte de Sélection Sans Concession
Chaque riad, hôtel de charme, restaurant gastronomique, guide conférencier et prestataire de transport présenté sur DécouvreLeMaroc fait l’objet d’un processus d’audit rigoureux mené directement sur place :
- Authenticité & Architecture : respect des matériaux nobles, de l'artisanat marocain et de l'âme des lieux historiques.
- Excellence du Service : discrétion, bienveillance, disponibilité et raffinement des attentions personnalisées.
- Conformité & Sécurité : patentes touristiques officielles, assurances professionnelles et immatriculation légale au Royaume.
- Engagement Responsable : promotion des circuits courts, rémunération équitable des équipes locales et valorisation des terroirs.

### Le Club DécouvreLeMaroc : Un Cercle Privilégié pour Voyageurs Épicuriens
Parce que chaque séjour mérite d’être inoubliable, nous avons imaginé Le Club DécouvreLeMaroc : un cercle exclusif offrant des tarifs préférentiels négociés directement auprès des propriétaires, des attentions personnalisées à l'arrivée (thé d'accueil royal, pâtisseries fines, surclassement selon disponibilité) et l’accès à un service de conciergerie privée 7 jours sur 7.`,
    highlights: [
      'Sélection rigoureuse de riads, palais d’hôtes et tables confidentielles vérifiés sur le terrain',
      'Promotion d’un tourisme éthique d’art de vivre, respectueux des artisans et du patrimoine',
      'Conciergerie privée dédiée 7j/7 pour concevoir vos séjours sur mesure',
      'Relations directes en circuit court avec les propriétaires d’établissements au Maroc'
    ],
    ctaText: 'Rejoindre Le Club DécouvreLeMaroc',
    ctaLink: '/club',
    seoTitle: 'À Propos de DécouvreLeMaroc — Notre Histoire & Vision du Voyage',
    seoDescription: 'Découvrez l’histoire, les valeurs et les engagements d’excellence de DécouvreLeMaroc, la référence des voyages authentiques au Royaume.',
    author: 'La Direction Éditoriale — DécouvreLeMaroc',
    status: 'published',
    views: 5240,
    createdAt: '10 Janvier 2025',
    updatedAt: '08 Octobre 2025'
  },
  {
    id: 'page-06',
    slug: 'mentions-legales',
    title: 'Mentions Légales, Cadre Réglementaire & Protection des Données',
    subtitle: 'Informations juridiques officielles, éditeur de la plateforme DécouvreLeMaroc, hébergement, droits de propriété intellectuelle et politique de confidentialité.',
    category: 'info',
    coverImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&auto=format&fit=crop&q=80',
    content: `Conformément aux dispositions des lois en vigueur au Royaume du Maroc et aux standards internationaux de protection des consommateurs et des données privées, les présentes mentions légales définissent les conditions d'utilisation de la plateforme DécouvreLeMaroc.

### 1. Éditeur de la Plateforme
Le site internet DécouvreLeMaroc (accessible à l’adresse decouvrelemaroc.com et sur ses applications associées) est édité par la société :
- Raison sociale : DécouvreLeMaroc SARL
- Forme juridique : Société à Responsabilité Limitée au capital de 500 000 MAD
- Siège social : Boulevard Mohammed V, Résidence Al Manar, Guéliz, 40000 Marrakech, Royaume du Maroc
- Registre du Commerce (RC) : Marrakech n° 84920
- Identifiant Fiscal (IF) : 48920112 — Patente : 35910244
- Identifiant Commun de l’Entreprise (ICE) : 002891450000089
- Directeur de la publication : M. Mehdi Bennani, Co-fondateur & Directeur Général
- Service Relation Membres & Juridique : contact@decouvrelemaroc.com | Tél. : +212 (0) 524 43 00 00

### 2. Hébergement & Infrastructure Technique
L’infrastructure technique de la plateforme bénéficie des plus hauts standards de haute disponibilité, de résilience et de sécurité certifiés ISO 27001 et SOC 2 :
- Hébergeur Cloud principal : Amazon Web Services (AWS EMEA SARL) — 38 Avenue John F. Kennedy, L-1855 Luxembourg
- Réseau de distribution de contenu (CDN) & Sécurité WAF : Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, USA
- Chiffrement des flux : Certificat SSL/TLS 256 bits avec protocole HTTPS obligatoire sur l’ensemble des pages.

### 3. Propriété Intellectuelle & Droits Réservés
L’ensemble des contenus présents sur la plateforme DécouvreLeMaroc — incluant sans limitation les logos, chartes graphiques, marques déposées, textes éditoriaux, photographies, vidéos, iconographies, bases de données et codes sources — est la propriété exclusive de DécouvreLeMaroc SARL ou fait l’objet d’une licence d’exploitation officielle concédée par ses partenaires.

Toute reproduction, représentation, adaptation, extraction, diffusion ou rediffusion, totale ou partielle, de l’un quelconque de ces éléments, sur quelque support que ce soit, sans accord écrit préalable de DécouvreLeMaroc SARL est formellement interdite et constitue une contrefaçon sanctionnée par la loi marocaine n° 17-97 relative à la protection de la propriété industrielle et les conventions internationales applicables.

### 4. Protection des Données Personnelles (CNDP & RGPD)
DécouvreLeMaroc accorde une importance primordiale à la confidentialité et à la sécurité des données personnelles de ses visiteurs et membres du Club.

Le traitement des données à caractère personnel effectué sur cette plateforme est conforme aux dispositions de la loi marocaine n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel (Commission Nationale de contrôle de la protection des Données à caractère Personnel - CNDP) ainsi qu’aux exigences du Règlement Général européen sur la Protection des Données (RGPD 2016/679) :
- Finalité du traitement : gestion des demandes d'information, acheminement des réservations vers les riads partenaires, communication des privilèges Club et statistiques anonymisées.
- Non-cession des données : aucune information personnelle n’est vendue, louée ou cédée à des courtiers de données tiers.
- Exercice de vos droits : conformément à la réglementation, vous disposez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à notre Délégué à la Protection des Données : dpo@decouvrelemaroc.com.

### 5. Responsabilité & Liens Hypertextes
DécouvreLeMaroc apporte le plus grand soin à la vérification et à la mise à jour des contenus présentés. Les descriptifs, équipements et tarifs indicatifs des riads et prestataires sont fournis en collaboration directe avec les établissements partenaires. Toutefois, DécouvreLeMaroc ne saurait être tenu responsable d’éventuelles inexactitudes indépendantes de sa volonté ou de variations tarifaires appliquées unilatéralement lors de périodes de haute saison.

La plateforme peut contenir des liens vers des sites tiers (offices du tourisme, plateformes officielles des aéroports marocains). DécouvreLeMaroc décline toute responsabilité quant au contenu ou aux politiques de confidentialité de ces sites externes.

### 6. Droit Applicable & Résolution des Litiges
Les présentes mentions légales sont soumises au droit marocain. En cas de différend relatif à l’utilisation de la plateforme ou à l’exécution des services, les parties s’engagent à rechercher prioritairement une issue amiable via notre service de conciergerie. À défaut de règlement amiable, tout litige sera porté devant les tribunaux compétents du ressort du tribunal de commerce de Marrakech.`,
    highlights: [
      'Éditeur officiel immatriculé : DécouvreLeMaroc SARL au capital de 500 000 MAD',
      'Conformité stricte avec la loi CNDP n° 09-08 et les principes du RGPD européen',
      'Hébergement sécurisé ISO 27001 avec chiffrement bancaire TLS 256 bits',
      'Droit d’accès, de rectification et d’effacement sur simple email à dpo@decouvrelemaroc.com'
    ],
    ctaText: 'Contacter notre assistance juridique & conciergerie',
    ctaLink: 'mailto:contact@decouvrelemaroc.com',
    seoTitle: 'Mentions Légales & Cadre Réglementaire | DécouvreLeMaroc',
    seoDescription: 'Consultez les mentions légales, informations éditeur, politique de confidentialité CNDP et conditions d’utilisation de DécouvreLeMaroc.',
    author: 'Pôle Juridique & Conformité — DécouvreLeMaroc',
    status: 'published',
    views: 1840,
    createdAt: '10 Janvier 2025',
    updatedAt: '08 Octobre 2025'
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

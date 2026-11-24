export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "peinture",
    title: "Peinture intérieure & décoration",
    description:
      "Mise en peinture de murs, plafonds, boiseries et pose de papiers peints décoratifs avec finitions soignées.",
    image: "/images/chantier-chambre-verte.jpg",
    href: "/services/peinture",
  },
  {
    id: "sols",
    title: "Revêtements de sols & parquets",
    description:
      "Pose de parquets chaleureux, sols stratifiés ou carrelages durables adaptés à chaque pièce de vie.",
    image: "/images/chantier-mezzanine-parquet.jpg",
    href: "/services/revetements-sols",
  },
  {
    id: "renovation-complete",
    title: "Rénovation & agencement sur mesure",
    description:
      "Accompagnement global pour la transformation de cuisines, espaces commerciaux et intérieurs complets.",
    image: "/images/chantier-cuisine-noire.jpg",
    href: "/services/renovation-complete",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "elodie",
    name: "Élodie",
    quote:
      "Un travail impeccable et très propre. Nos pièces ont retrouvé de la lumière et des finitions superbes.",
    avatar: "/images/avatar-elodie.jpg",
    rating: 5,
  },
  {
    id: "thomas",
    name: "Thomas",
    quote:
      "Équipe sérieuse, ponctuelle et à l’écoute à Saint-Martin-d’Hères. Le rendu dépasse nos attentes.",
    avatar: "/images/avatar-thomas.jpg",
    rating: 5,
  },
  {
    id: "sophie",
    name: "Sophie",
    quote:
      "Devis clair, conseils pertinents et chantier livré dans les temps. Je recommande PRO’DECO les yeux fermés.",
    avatar: "/images/avatar-sophie.jpg",
    rating: 5,
  },
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterItem[] = [
  {
    id: "couloir",
    title: "Couloir & boiseries",
    category: "Peinture & Rénovation",
    beforeImage: "/images/chantier-couloir-bois-avant.jpg",
    afterImage: "/images/chantier-couloir-apres.jpg",
    description:
      "Remise à neuf complète des murs, portes et soubassements avec une finition lumineuse bleu clair et blanc.",
  },
  {
    id: "grand-espace",
    title: "Grand volume & structure",
    category: "Espaces professionnels",
    beforeImage: "/images/chantier-entrepot-avant.jpg",
    afterImage: "/images/chantier-entrepot-apres.jpg",
    description:
      "Traitement des volumes, mise en peinture des murs et charpente métallique, et éclairage homogène.",
  },
];

export const GALLERY_IMAGES: string[] = [
  "/images/chantier-chambre-verte.jpg",
  "/images/chantier-salle-montagne-1.jpg",
  "/images/chantier-bar-panoramique.jpg",
  "/images/chantier-papier-peint-bois.jpg",
  "/images/chantier-escalier-rouge.jpg",
  "/images/chantier-mezzanine-parquet.jpg",
  "/images/chantier-cuisine-bleue.jpg",
  "/images/chantier-cuisine-noire.jpg",
  "/images/chantier-cuisine-noire-2.jpg",
  "/images/chantier-entrepot-apres.jpg",
  "/images/chantier-couloir-bois-avant.jpg",
  "/images/chantier-couloir-apres.jpg",
  "/images/chantier-entrepot-avant.jpg",
  "/images/chantier-bureau-vert.jpg",
  "/images/hero-salon.jpg",
];
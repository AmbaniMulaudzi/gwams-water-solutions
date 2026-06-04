// types/index.ts

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SiteSettings {
  _id: string;
  title: string;
  description: string;
  logo?: SanityImage;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  contactPerson: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface HeroSection {
  _id: string;
  heading: string;
  subheading: string;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  backgroundImage?: SanityImage;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: any[]; // Portable Text
  icon: string;
  image?: SanityImage;
  features?: string[];
  price?: string;
  featured?: boolean;
  order?: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  image?: SanityImage;
  service?: string;
  date?: string;
}

export interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  image: SanityImage;
  category: "borehole" | "tank" | "pump" | "installation" | "repair";
  featured?: boolean;
  date?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body: any[]; // Portable Text
  mainImage?: SanityImage;
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: string[];
  publishedAt: string;
  readTime?: number;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
}

export interface ContactSubmission {
  _type: "contactSubmission";
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  location?: string;
  submittedAt: string;
  status: "new" | "read" | "responded";
}

export interface AboutSection {
  _id: string;
  heading: string;
  subheading?: string;
  body: any[]; // Portable Text
  image?: SanityImage;
  values?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  yearsExperience?: number;
  projectsCompleted?: number;
  happyClients?: number;
}

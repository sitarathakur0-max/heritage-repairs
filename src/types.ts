export interface BusinessConfig {
  businessName: string;
  phone: string;
  phoneHref: string;
  location: string;
  rating: string;
  reviewCount: string;
}

export type PageView =
  | 'home'
  | 'about'
  | 'services'
  | 'repairs'
  | 'gallery'
  | 'reviews'
  | 'faq'
  | 'contact';

export interface NavigationItem {
  id: PageView;
  label: string;
  href: string;
}

export interface RoofingService {
  id: string;
  title: string;
  summary: string;
  description: string;
  scopePoints: string[];
  iconName: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'slate' | 'pitched' | 'chimney' | 'flat' | 'gutters' | 'london';
  categoryLabel: string;
  description: string;
  image: string;
  labelBadge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

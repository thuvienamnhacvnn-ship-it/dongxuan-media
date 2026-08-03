import type { Locale } from "@/lib/constants";

export type { Locale };

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export interface NavItem {
  href: string;
  label: LocalizedString;
}

export interface ServiceItem {
  id: string;
  slug: string;
  icon: string;
  title: LocalizedString;
  short: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedStringArray;
  /** Detailed offerings for service landing */
  offerings: LocalizedStringArray;
  pattern: "brand" | "print" | "marketing" | "translate" | "ads" | "digital";
  featured: boolean;
  hasUploadForm?: boolean;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  category: string;
  title: LocalizedString;
  client: LocalizedString;
  industry: LocalizedString;
  servicesDone: LocalizedStringArray;
  description: LocalizedString;
  results?: LocalizedString;
  tags: LocalizedStringArray;
  year: string;
  accent: string;
  featured: boolean;
  hasBeforeAfter?: boolean;
}

export interface PricingPackage {
  id: string;
  slug: string;
  popular?: boolean;
  name: LocalizedString;
  price: LocalizedString;
  unit: LocalizedString;
  description: LocalizedString;
  features: LocalizedStringArray;
  cta: LocalizedString;
}

export interface PricingRow {
  id: string;
  group: "design" | "print" | "marketing" | "translation" | "website" | "packages";
  name: LocalizedString;
  price: LocalizedString;
  note?: LocalizedString;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface Testimonial {
  id: string;
  name: string;
  role: LocalizedString;
  company: string;
  quote: LocalizedString;
  rating: number;
  /** Always true for sample content until replaced */
  isDemo?: boolean;
}

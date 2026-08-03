export {
  siteConfig,
  SITE,
  getWhatsAppUrl,
  getTelHref,
  getMailtoHref,
  type SiteLocale,
} from "./site-config";

export const LOCALES = ["vi", "de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "vi";

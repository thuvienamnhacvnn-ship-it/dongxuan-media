import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/constants";

export { DEFAULT_LOCALE, LOCALES, type Locale };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const localeLabels: Record<Locale, string> = {
  vi: "VI",
  de: "DE",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  de: "Deutsch",
  en: "English",
};

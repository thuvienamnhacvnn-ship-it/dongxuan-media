import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = await getDictionary(localeParam);
  return { title: dict.pages.legal.cookieTitle };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero title={dict.pages.legal.cookieTitle} />
      <Section className="bg-paper-white">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-black/75">
          <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-ink-black">
            {dict.pages.legal.disclaimer}
          </p>
          <p>
            Cookie-Einstellungen werden im Banner am unteren Bildschirmrand
            gespeichert (localStorage-Key{" "}
            <code className="text-xs">dxm-cookie-consent</code>).
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Essential</strong> — immer aktiv (Sprache, Consent,
              Sicherheit).
            </li>
            <li>
              <strong>Analytics</strong> — nur nach Opt-in (z. B. Plausible /
              GA4 — noch nicht eingebunden).
            </li>
            <li>
              <strong>Marketing</strong> — nur nach Opt-in (Pixel / Ads — noch
              nicht eingebunden).
            </li>
          </ul>
          <p className="text-xs text-ink-black/50">
            Zum Zurücksetzen: localStorage im Browser löschen und Seite neu
            laden.
          </p>
        </div>
      </Section>
    </>
  );
}

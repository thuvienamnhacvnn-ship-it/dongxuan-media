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
  return { title: dict.pages.legal.agbTitle };
}

export default async function AgbPage({
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
      <PageHero title={dict.pages.legal.agbTitle} />
      <Section className="bg-paper-white">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-black/75">
          <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-ink-black">
            {dict.pages.legal.disclaimer}
          </p>
          <p>
            Allgemeine Geschäftsbedingungen (Platzhalter). Inhalt muss vor dem
            Live-Gang rechtlich geprüft werden: Vertragsschluss, Preise,
            Lieferzeiten, Nutzungsrechte an Designs, Haftung, Gerichtsstand.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>[CẬP NHẬT] Geltungsbereich</li>
            <li>[CẬP NHẬT] Angebot und Vertragsschluss</li>
            <li>[CẬP NHẬT] Preise und Zahlung</li>
            <li>[CẬP NHẬT] Leistungsbeschreibung Design / Druck / Digital</li>
            <li>[CẬP NHẬT] Urheberrecht und Nutzungsrechte</li>
            <li>[CẬP NHẬT] Haftung</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

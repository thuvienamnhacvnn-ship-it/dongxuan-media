import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";
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
  return { title: dict.pages.legal.impressumTitle };
}

export default async function ImpressumPage({
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
      <PageHero title={dict.pages.legal.impressumTitle} />
      <Section className="bg-paper-white">
        <div className="prose-legal mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-black/75">
          <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-ink-black">
            {dict.pages.legal.disclaimer}
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            Angaben gemäß § 5 TMG (Platzhalter)
          </h2>
          <p>
            <strong>{siteConfig.legalName}</strong>
            <br />
            {siteConfig.address.full}
            <br />
            [CẬP NHẬT] Straße, Hausnummer, PLZ
          </p>
          <p>
            Telefon: {siteConfig.contact.phoneDisplay}
            <br />
            E-Mail: {siteConfig.contact.emailDisplay}
          </p>
          <p>
            Vertreten durch: [CẬP NHẬT]
            <br />
            Umsatzsteuer-ID: [CẬP NHẬT]
            <br />
            Handelsregister: [CẬP NHẬT]
          </p>
          <p className="text-xs text-ink-black/50">
            Dieses Impressum ist ein technischer Platzhalter und keine
            rechtsgültige Auskunft.
          </p>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { PricingPreview } from "@/components/home/PricingPreview";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { CtaBand } from "@/components/home/CtaBand";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  pricingGroupLabels,
  pricingNotes,
  pricingRows,
} from "@/data/pricing";
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
  return {
    title: dict.pages.pricing.title,
    description: dict.pages.pricing.subtitle,
  };
}

const groups = [
  "design",
  "print",
  "marketing",
  "translation",
  "website",
  "packages",
] as const;

export default async function PricingPage({
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
      <PageHero
        eyebrow={dict.nav.pricing}
        title={dict.pages.pricing.title}
        subtitle={dict.pages.pricing.subtitle}
      />
      <PricingPreview locale={locale} dict={dict} />

      <Section className="bg-warm-white">
        <SectionHeader
          title={
            locale === "de"
              ? "Richtpreise nach Gruppe"
              : locale === "en"
                ? "Reference rates by group"
                : "Bảng giá theo nhóm"
          }
          subtitle={pricingNotes[locale]}
        />
        <div className="space-y-8">
          {groups.map((group) => {
            const rows = pricingRows.filter((r) => r.group === group);
            return (
              <div key={group} className="border border-ink-black/10 bg-paper-white">
                <div className="border-b border-ink-black/10 bg-ink-black px-5 py-3">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                    {pricingGroupLabels[group][locale]}
                  </h3>
                </div>
                <ul className="divide-y divide-ink-black/8">
                  {rows.map((row) => (
                    <li
                      key={row.id}
                      className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-medium text-ink-black">
                          {row.name[locale]}
                        </p>
                        {row.note && (
                          <p className="text-xs text-ink-black/45">
                            {row.note[locale]}
                          </p>
                        )}
                      </div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-red">
                        {row.price[locale]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-paper-white">
        <PriceCalculator locale={locale} quoteHref={`/${locale}/bao-gia`} />
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

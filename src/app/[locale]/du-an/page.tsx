import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
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
  return {
    title: dict.pages.projects.title,
    description: dict.pages.projects.subtitle,
  };
}

export default async function ProjectsPage({
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
        eyebrow={dict.nav.projects}
        title={dict.pages.projects.title}
        subtitle={dict.pages.projects.subtitle}
      />
      <Section className="bg-paper-white">
        <PortfolioGrid
          locale={locale}
          quoteLabel={dict.common.getQuote}
          similarLabel={dict.portfolio.similarCta}
          demoLabel={dict.portfolio.demoLabel}
        />
      </Section>
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

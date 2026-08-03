import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { Process } from "@/components/home/Process";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBand } from "@/components/home/CtaBand";
import { AnimatedDivider, HomePageShell } from "@/components/home/HomeMotion";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = await getDictionary(localeParam);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${siteConfig.url}/${localeParam}`,
      languages: {
        vi: `${siteConfig.url}/vi`,
        de: `${siteConfig.url}/de`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeParam === "vi" ? "vi_VN" : localeParam === "de" ? "de_DE" : "en_GB",
      type: "website",
      url: `${siteConfig.url}/${localeParam}`,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <HomePageShell>
      <Hero locale={locale} dict={dict} />
      <Intro dict={dict} locale={locale} />
      <AnimatedDivider />
      <FeaturedServices locale={locale} dict={dict} />
      <Process locale={locale} dict={dict} />
      <FeaturedPortfolio locale={locale} dict={dict} />
      <PricingPreview locale={locale} dict={dict} />
      <AnimatedDivider />
      <Testimonials locale={locale} dict={dict} />
      <InsightsPreview locale={locale} dict={dict} />
      <FaqSection locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </HomePageShell>
  );
}

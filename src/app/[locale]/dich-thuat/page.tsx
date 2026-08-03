import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { TranslationForm } from "@/components/forms/TranslationForm";
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
    title: dict.pages.translation.title,
    description: dict.pages.translation.subtitle,
  };
}

export default async function TranslationPage({
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
        eyebrow="VI · DE · EN"
        title={dict.pages.translation.title}
        subtitle={dict.pages.translation.subtitle}
      />

      <Section className="bg-paper-white">
        <div className="mx-auto max-w-3xl border border-ink-black/10 bg-warm-white p-6 sm:p-8">
          <TranslationForm dict={dict} />
        </div>
      </Section>
    </>
  );
}

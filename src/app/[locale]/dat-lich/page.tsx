import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { BookingForm } from "@/components/forms/BookingForm";
import { ContactCards } from "@/components/shared/ContactCards";
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
    title: dict.pages.booking.title,
    description: dict.pages.booking.subtitle,
  };
}

export default async function BookingPage({
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
        eyebrow={dict.common.bookConsult}
        title={dict.pages.booking.title}
        subtitle={dict.pages.booking.subtitle}
      />

      <Section className="bg-paper-white">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ContactCards locale={locale} dict={dict} />
          </div>
          <div className="border border-ink-black/10 bg-warm-white p-6 sm:p-8 lg:col-span-8">
            <BookingForm dict={dict} />
          </div>
        </div>
      </Section>
    </>
  );
}

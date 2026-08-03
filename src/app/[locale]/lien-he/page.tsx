import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCards } from "@/components/shared/ContactCards";
import { ContactForm } from "@/components/forms/ContactForm";
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
  return {
    title: dict.pages.contact.title,
    description: dict.pages.contact.subtitle,
  };
}

export default async function ContactPage({
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
        eyebrow={dict.nav.contact}
        title={dict.pages.contact.title}
        subtitle={dict.pages.contact.subtitle}
      />

      <Section className="bg-paper-white">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink-black">
              {dict.pages.contact.mapTitle}
            </h2>
            <div className="mt-5">
              <ContactCards locale={locale} dict={dict} />
            </div>
            <div className="mt-6 overflow-hidden border border-ink-black/10">
              <iframe
                title="Google Maps — Đồng Xuân Center Berlin"
                src={siteConfig.maps.embedUrl}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={siteConfig.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-ink-black px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-warm-white hover:bg-brand-red"
              >
                {locale === "de"
                  ? "Route planen"
                  : locale === "en"
                    ? "Get directions"
                    : "Chỉ đường"}{" "}
                →
              </a>
            </div>
          </div>

          <div className="border border-ink-black/10 bg-warm-white p-6 sm:p-8 lg:col-span-7">
            <h2 className="mb-6 font-display text-xl font-bold uppercase tracking-wide text-ink-black">
              {dict.pages.contact.formTitle}
            </h2>
            <ContactForm locale={locale} dict={dict} variant="contact" />
          </div>
        </div>
      </Section>
    </>
  );
}

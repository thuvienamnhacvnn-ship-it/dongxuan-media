import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { PrintForm } from "@/components/forms/PrintForm";
import { TranslationForm } from "@/components/forms/TranslationForm";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { serviceImages, media } from "@/data/media";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  const locales = ["vi", "de", "en"];
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title[localeParam],
    description: service.description[localeParam],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const dict = await getDictionary(locale);
  const base = `/${locale}`;
  const cover = serviceImages[service.id]?.src ?? media.hero.src;

  return (
    <>
      <PageHero
        eyebrow={dict.nav.services}
        title={service.title[locale]}
        subtitle={service.description[locale]}
        image={cover}
        locale={locale}
      />

      <Section className="bg-paper-white">
        <div className="mb-10 overflow-hidden border border-ink-black/10">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src={cover}
              alt={service.title[locale]}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-black/50 to-transparent" />
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink-black">
              {locale === "de"
                ? "Leistungsübersicht"
                : locale === "en"
                  ? "What we offer"
                  : "Hạng mục cung cấp"}
            </h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {service.offerings[locale].map((item) => (
                <li
                  key={item}
                  className="border border-ink-black/10 bg-warm-white px-4 py-3 text-sm font-medium text-ink-black transition-colors hover:border-brand-red/40 hover:bg-brand-red/5"
                >
                  {item}
                </li>
              ))}
            </ul>

            {service.id === "translation" && (
              <p className="mt-6 border-l-2 border-brand-gold bg-brand-gold/5 px-4 py-3 text-sm text-ink-black/70">
                {locale === "de"
                  ? "Beglaubigte Übersetzungen werden bei Bedarf über qualifizierte Partner organisiert — wir behaupten keine eigene Beglaubigungszulassung."
                  : locale === "en"
                    ? "Certified/sworn translation, when required, is arranged via qualified partners — we do not claim sworn certification ourselves."
                    : "Dịch thuật công chứng (nếu cần) được thực hiện thông qua đối tác đủ điều kiện — chúng tôi không tự tuyên bố cung cấp công chứng trực tiếp."}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`${base}/bao-gia?service=${service.id}`} className="gap-2">
                {dict.common.getQuote}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Link
                href={`${base}/dich-vu`}
                className="inline-flex h-11 items-center text-xs font-bold uppercase tracking-[0.16em] text-ink-black/60 hover:text-brand-red"
              >
                ← {dict.common.allServices}
              </Link>
            </div>
          </div>

          <div className="border border-ink-black/10 bg-ink-black p-6 text-warm-white lg:col-span-5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
              Deliverables
            </p>
            <ul className="mt-4 space-y-2">
              {service.deliverables[locale].map((d) => (
                <li key={d} className="border-b border-warm-white/10 py-2 text-sm text-warm-white/80">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {service.id === "print" && (
        <Section className="bg-warm-white" id="print-form">
          <h2 className="mb-6 font-display text-2xl font-bold uppercase text-ink-black">
            {locale === "de"
              ? "Druckdaten senden"
              : locale === "en"
                ? "Send print files"
                : "Gửi file cần in"}
          </h2>
          <div className="mx-auto max-w-3xl border border-ink-black/10 bg-paper-white p-6 sm:p-8">
            <PrintForm dict={dict} />
          </div>
        </Section>
      )}

      {service.id === "translation" && (
        <Section className="bg-warm-white" id="translation-form">
          <h2 className="mb-6 font-display text-2xl font-bold uppercase text-ink-black">
            {dict.pages.translation.title}
          </h2>
          <div className="mx-auto max-w-3xl border border-ink-black/10 bg-paper-white p-6 sm:p-8">
            <TranslationForm dict={dict} />
          </div>
        </Section>
      )}

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

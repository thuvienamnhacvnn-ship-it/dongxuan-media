import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Palette,
  Printer,
  Megaphone,
  Languages,
  Target,
  Monitor,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const icons: Record<string, LucideIcon> = {
  Palette,
  Printer,
  Megaphone,
  Languages,
  Target,
  Monitor,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = await getDictionary(localeParam);
  return {
    title: dict.pages.services.title,
    description: dict.pages.services.subtitle,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <PageHero
        eyebrow={dict.nav.services}
        title={dict.pages.services.title}
        subtitle={dict.pages.services.subtitle}
      />

      <Section className="bg-paper-white">
        <div className="space-y-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Palette;
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="grid scroll-mt-28 overflow-hidden border border-ink-black/10 lg:grid-cols-12"
                >
                  <div
                    className={`relative flex min-h-[180px] items-end p-7 lg:col-span-4 ${
                      i % 3 === 0
                        ? "bg-brand-red text-warm-white"
                        : i % 3 === 1
                          ? "bg-ink-black text-warm-white"
                          : "bg-brand-gold/15 text-ink-black"
                    }`}
                  >
                    <div>
                      <Icon className="mb-3 h-7 w-7" aria-hidden />
                      <p className="font-display text-4xl font-bold opacity-30">
                        0{i + 1}
                      </p>
                    </div>
                  </div>
                  <div className="bg-warm-white p-7 sm:p-8 lg:col-span-8">
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-black">
                      {service.title[locale]}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-black/70 sm:text-base">
                      {service.description[locale]}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.offerings[locale].slice(0, 6).map((o) => (
                        <li
                          key={o}
                          className="border border-ink-black/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-black/65"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`${base}/dich-vu/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-red hover:text-ink-black"
                    >
                      {dict.common.viewDetails}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

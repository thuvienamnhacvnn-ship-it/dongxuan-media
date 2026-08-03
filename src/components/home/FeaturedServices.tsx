"use client";

import Link from "next/link";
import Image from "next/image";
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
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { serviceImages } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Palette,
  Printer,
  Megaphone,
  Languages,
  Target,
  Monitor,
};

const layouts = [
  "lg:col-span-7 lg:row-span-2 min-h-[420px]",
  "lg:col-span-5 min-h-[200px]",
  "lg:col-span-5 min-h-[200px]",
  "lg:col-span-4 min-h-[280px]",
  "lg:col-span-4 min-h-[280px]",
  "lg:col-span-4 min-h-[280px]",
];

interface FeaturedServicesProps {
  locale: Locale;
  dict: Dictionary;
}

export function FeaturedServices({ locale, dict }: FeaturedServicesProps) {
  const base = `/${locale}`;

  return (
    <Section className="overflow-hidden bg-warm-white" id="services">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,160,74,0.07),_transparent_50%)]"
        aria-hidden
      />
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeader
          eyebrow={dict.servicesSection.eyebrow}
          title={dict.servicesSection.title}
          subtitle={dict.servicesSection.subtitle}
          className="mb-0"
        />
        <Reveal>
          <Button href={`${base}/dich-vu`} variant="outline" size="sm">
            {dict.common.allServices}
          </Button>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {services.map((service, index) => {
          const Icon = icons[service.icon] ?? Palette;
          const img = serviceImages[service.id] ?? serviceImages.branding;
          const isHero = index === 0;

          return (
            <StaggerItem
              key={service.id}
              className={cn(layouts[index] ?? "lg:col-span-4 min-h-[260px]")}
            >
              <TiltCard className="h-full" maxTilt={8}>
                <Link
                  href={`${base}/dich-vu/${service.slug}`}
                  className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden border border-ink-black/10 bg-ink-black text-warm-white shadow-sm transition-all duration-500 hover:border-brand-gold/40 hover:shadow-[0_32px_70px_-28px_rgba(200,16,30,0.55)]"
                >
                  {/* Shine sweep */}
                  <span
                    className="pointer-events-none absolute -left-1/2 top-0 z-20 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="absolute inset-0">
                    <Image
                      src={img.src}
                      alt={service.title[locale]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="clip-hover object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                      style={{
                        background: isHero
                          ? `linear-gradient(145deg, ${img.accent}cc 0%, rgba(17,18,22,0.75) 55%, rgba(17,18,22,0.92) 100%)`
                          : `linear-gradient(180deg, rgba(17,18,22,0.25) 0%, rgba(17,18,22,0.92) 100%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                    <div
                      className={cn(
                        "mb-4 inline-flex h-11 w-11 items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                        isHero
                          ? "bg-warm-white text-brand-red group-hover:shadow-[0_0_24px_rgba(247,243,234,0.5)]"
                          : "bg-brand-red text-warm-white group-hover:shadow-[0_0_24px_rgba(200,16,30,0.6)]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3
                      className={cn(
                        "font-display font-bold uppercase tracking-wide",
                        isHero ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                      )}
                    >
                      <span className="underline-draw">{service.title[locale]}</span>
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed text-warm-white/75 transition-colors group-hover:text-warm-white/90",
                        isHero ? "max-w-md" : "line-clamp-2"
                      )}
                    >
                      {service.short[locale]}
                    </p>
                    {isHero && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.deliverables[locale].slice(0, 4).map((d) => (
                          <li
                            key={d}
                            className="border border-warm-white/20 bg-ink-black/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-red/20"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold-light transition-all group-hover:gap-3 group-hover:text-warm-white">
                      {dict.common.viewDetails}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

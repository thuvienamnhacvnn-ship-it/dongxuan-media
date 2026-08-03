"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getFeaturedPortfolio } from "@/data/portfolio";
import { portfolioImages, media } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface FeaturedPortfolioProps {
  locale: Locale;
  dict: Dictionary;
}

export function FeaturedPortfolio({ locale, dict }: FeaturedPortfolioProps) {
  const items = getFeaturedPortfolio().slice(0, 5);
  const base = `/${locale}`;

  const spans = [
    "md:col-span-3 md:row-span-2 min-h-[360px] sm:min-h-[480px]",
    "md:col-span-3 min-h-[220px]",
    "md:col-span-3 min-h-[220px]",
    "md:col-span-2 min-h-[240px]",
    "md:col-span-4 min-h-[240px]",
  ];

  return (
    <Section className="overflow-hidden bg-ink-black text-warm-white" id="projects">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
      >
        <Image
          src={media.berlin.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-black/85" />
      </div>

      <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeader
          eyebrow={dict.portfolioSection.eyebrow}
          title={dict.portfolioSection.title}
          subtitle={dict.portfolioSection.subtitle}
          light
          className="mb-0"
        />
        <Reveal>
          <Button href={`${base}/du-an`} variant="gold" size="sm">
            {dict.common.allProjects}
          </Button>
        </Reveal>
      </div>

      <Stagger className="relative mt-12 grid gap-4 md:grid-cols-6 md:grid-rows-2">
        {items.map((item, index) => {
          const src = portfolioImages[item.id] ?? media.print.src;
          return (
            <StaggerItem
              key={item.id}
              className={cn(
                "group relative overflow-hidden border border-warm-white/10 bg-charcoal",
                spans[index] ?? "md:col-span-2 min-h-[220px]"
              )}
            >
              <Image
                src={src}
                alt={item.title[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(160deg, ${item.accent}55 0%, transparent 40%), linear-gradient(to top, #111216f0 8%, transparent 55%)`,
                }}
              />
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${item.accent}55, transparent 55%)`,
                }}
                aria-hidden
              />

              <div className="absolute right-4 top-4 h-14 w-14 border border-warm-white/20 transition-all duration-500 group-hover:rotate-12 group-hover:border-brand-gold" />
              <div
                className="absolute right-7 top-7 h-14 w-14 border transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110"
                style={{ borderColor: `${item.accent}88` }}
              />

              <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags[locale].slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-warm-white/15 bg-ink-black/45 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-warm-white/75 backdrop-blur-sm transition-colors group-hover:border-brand-gold/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-light">
                  {item.client[locale]} · {item.year}
                </p>
                <h3
                  className={cn(
                    "mt-2 font-display font-bold uppercase leading-tight tracking-wide text-warm-white",
                    index === 0 ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                  )}
                >
                  <span className="underline-draw">{item.title[locale]}</span>
                </h3>
                {index === 0 && (
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-white/70">
                    {item.description[locale]}
                  </p>
                )}
                <Link
                  href={`${base}/du-an`}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-warm-white transition-all group-hover:gap-3 hover:text-brand-gold-light"
                >
                  {dict.common.viewDetails}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

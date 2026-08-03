"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/config";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  locale?: Locale;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  locale = "vi",
}: PageHeroProps) {
  const src = image ?? media.pattern.src;

  return (
    <section className="relative overflow-hidden border-b border-ink-black/8 bg-ink-black pt-28 pb-14 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/90 to-ink-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-ink-black/30" />
      </div>

      <div
        className="pointer-events-none absolute right-8 top-28 hidden h-36 w-36 border border-brand-gold/30 lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-14 top-36 hidden h-36 w-36 border border-brand-red/40 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-light">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-warm-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-6 h-px w-20 origin-left bg-brand-gold line-draw" />
          <p className="sr-only">{locale}</p>
        </Reveal>
      </div>
    </section>
  );
}

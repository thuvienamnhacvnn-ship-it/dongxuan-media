"use client";

import { marqueeServices } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface ServiceMarqueeProps {
  locale: Locale;
  /** Overlay strip on top of the hero banner */
  onBanner?: boolean;
  className?: string;
}

function Knot() {
  return (
    <span
      className="relative mx-1 inline-flex h-3 w-3 items-center justify-center"
      aria-hidden
    >
      <span className="absolute h-2 w-2 rotate-45 border border-brand-gold/80 bg-brand-red/90 shadow-[0_0_8px_rgba(165,29,46,0.5)]" />
    </span>
  );
}

export function ServiceMarquee({
  locale,
  onBanner = false,
  className,
}: ServiceMarqueeProps) {
  const items = marqueeServices[locale];
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative z-20 overflow-hidden",
        onBanner
          ? "border-b border-brand-gold/25 bg-ink-black/55 backdrop-blur-md"
          : "border-y border-brand-gold/20 bg-ink-black",
        className
      )}
    >
      <div
        className="h-0.5 w-full bg-gradient-to-r from-brand-red-dark via-brand-red to-brand-red-dark"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-black/90 to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-black/90 to-transparent sm:w-20" />

      <div className="relative py-2.5 sm:py-3">
        <div className="marquee-track flex w-max items-center">
          {doubled.map((label, i) => (
            <div
              key={`m-${label}-${i}`}
              className="flex items-center gap-4 px-3 sm:gap-5 sm:px-5"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.32em] text-warm-white sm:text-sm md:text-base">
                {label}
              </span>
              <Knot />
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
        aria-hidden
      />
    </div>
  );
}

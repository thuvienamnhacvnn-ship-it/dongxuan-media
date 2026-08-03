"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricingPackages, pricingNotes } from "@/data/pricing";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface PricingPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function PricingPreview({ locale, dict }: PricingPreviewProps) {
  const base = `/${locale}`;

  return (
    <Section className="relative overflow-hidden bg-paper-white" id="pricing">
      <div
        className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"
        aria-hidden
      />

      <SectionHeader
        eyebrow={dict.pricingSection.eyebrow}
        title={dict.pricingSection.title}
        subtitle={dict.pricingSection.subtitle}
        align="center"
        className="relative mx-auto"
      />

      <div className="relative grid gap-5 lg:grid-cols-3">
        {pricingPackages.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 0.1}>
            <motion.div
              whileHover={{
                y: pkg.popular ? -14 : -10,
                rotate: pkg.popular ? 0 : i === 0 ? -1 : 1,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className={cn(
                "group relative flex h-full flex-col border p-6 sm:p-7 transition-shadow duration-500",
                pkg.popular
                  ? "border-brand-red bg-ink-black text-warm-white shadow-[0_28px_70px_-28px_rgba(200,16,30,0.65)] hover:shadow-[0_40px_80px_-24px_rgba(200,16,30,0.75)] lg:-translate-y-3"
                  : "border-ink-black/10 bg-warm-white text-ink-black hover:border-brand-gold/50 hover:shadow-[0_28px_60px_-28px_rgba(17,18,22,0.25)]"
              )}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-black">
                  <Sparkles className="h-3 w-3" />
                  {dict.common.popular}
                </span>
              )}

              <p
                className={cn(
                  "font-display text-xs font-bold uppercase tracking-[0.22em]",
                  pkg.popular ? "text-brand-gold-light" : "text-brand-red"
                )}
              >
                {pkg.name[locale]}
              </p>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {pkg.price[locale]}
                {pkg.unit[locale] && (
                  <span
                    className={cn(
                      "ml-1 text-sm font-semibold",
                      pkg.popular ? "text-warm-white/50" : "text-ink-black/45"
                    )}
                  >
                    {pkg.unit[locale]}
                  </span>
                )}
              </p>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  pkg.popular ? "text-warm-white/65" : "text-ink-black/60"
                )}
              >
                {pkg.description[locale]}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.features[locale].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        pkg.popular ? "text-brand-gold" : "text-brand-red"
                      )}
                    />
                    <span
                      className={
                        pkg.popular ? "text-warm-white/80" : "text-ink-black/75"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={`${base}/bao-gia?package=${pkg.slug}`}
                variant={pkg.popular ? "gold" : "primary"}
                className="mt-8 w-full"
              >
                {pkg.cta[locale]}
              </Button>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <p className="relative mt-8 text-center text-xs text-ink-black/45">
        {pricingNotes[locale]}
      </p>
    </Section>
  );
}

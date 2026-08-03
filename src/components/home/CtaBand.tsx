"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { getWhatsAppUrl } from "@/lib/site-config";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface CtaBandProps {
  locale: Locale;
  dict: Dictionary;
}

export function CtaBand({ locale, dict }: CtaBandProps) {
  const base = `/${locale}`;
  const wa = getWhatsAppUrl(locale);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={media.signage.src}
          alt={media.signage.alt[locale]}
          fill
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-brand-red/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red-dark via-brand-red/95 to-brand-red/80" />
      </div>

      {/* Animated grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(247,243,234,0.12) 48px, rgba(247,243,234,0.12) 49px)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gold/20 blur-3xl"
        animate={{ x: [0, 40, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-light">
            Đồng Xuân Media
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-warm-white sm:text-4xl lg:text-5xl [text-shadow:0_4px_24px_rgba(0,0,0,0.35)]">
            {dict.ctaSection.title}
          </h2>
          <p className="mt-4 text-base text-warm-white/85 sm:text-lg">
            {dict.ctaSection.subtitle}
          </p>
        </motion.div>
        <motion.div
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Magnetic strength={0.2}>
            <Button
              href={`${base}/dat-lich`}
              variant="gold"
              size="lg"
              className="gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              {dict.ctaSection.primary}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Magnetic>
          {wa ? (
            <Magnetic strength={0.2}>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 border border-warm-white/45 px-7 text-sm font-semibold uppercase tracking-wider text-warm-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all hover:bg-warm-white hover:text-brand-red"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.ctaSection.secondary}
              </a>
            </Magnetic>
          ) : (
            <Magnetic strength={0.2}>
              <Button
                href={`${base}/lien-he`}
                variant="outline"
                size="lg"
                className="border-warm-white/40 text-warm-white hover:border-warm-white hover:bg-warm-white/10 hover:text-warm-white"
              >
                {dict.common.contactUs}
              </Button>
            </Magnetic>
          )}
        </motion.div>
      </div>
    </section>
  );
}

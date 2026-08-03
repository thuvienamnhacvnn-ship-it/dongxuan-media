"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface TestimonialsProps {
  locale: Locale;
  dict: Dictionary;
}

export function Testimonials({ locale, dict }: TestimonialsProps) {
  return (
    <Section className="relative overflow-hidden bg-warm-white" animate={false}>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-30">
        <Image
          src={media.pattern.src}
          alt=""
          fill
          sizes="33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-warm-white" />
      </div>

      <SectionHeader
        eyebrow={dict.testimonialsSection.eyebrow}
        title={dict.testimonialsSection.title}
        subtitle={
          dict.testimonialsSection.demoNote ??
          "Nội dung demo — thay bằng đánh giá khách hàng thật trước khi go-live."
        }
        className="relative"
      />

      {/* Cascading card stack on desktop */}
      <div className="relative mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:pt-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.09}>
            <motion.blockquote
              className="group relative flex h-full flex-col border border-ink-black/10 bg-paper-white p-6 lg:-ml-3 lg:first:ml-0"
              style={{
                zIndex: i + 1,
                rotate: i % 2 === 0 ? -1.2 : 1.2,
              }}
              whileHover={{
                y: -16,
                rotate: 0,
                scale: 1.04,
                zIndex: 20,
                boxShadow: "0 32px 60px -28px rgba(200,16,30,0.35)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-3 flex items-center justify-between gap-2">
                <Quote className="h-6 w-6 text-brand-gold transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                {t.isDemo && (
                  <span className="border border-brand-gold/40 bg-brand-gold/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink-black/60">
                    Demo
                  </span>
                )}
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-3.5 w-3.5 fill-brand-gold text-brand-gold transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${idx * 40}ms` }}
                    aria-hidden
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink-black/75">
                “{t.quote[locale]}”
              </p>
              <footer className="mt-5 border-t border-ink-black/8 pt-3 transition-colors group-hover:border-brand-red/30">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-black">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-ink-black/50">
                  {t.role[locale]} · {t.company}
                </p>
              </footer>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

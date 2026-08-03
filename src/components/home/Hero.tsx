"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { RedLanterns } from "@/components/home/RedLanterns";
import { ServiceMarquee } from "@/components/home/ServiceMarquee";
import { heroSlides } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

const ease = [0.22, 1, 0.36, 1] as const;
const SLIDE_MS = 5500;

export function Hero({ locale, dict }: HeroProps) {
  const base = `/${locale}`;
  const ref = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.45]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  const current = heroSlides[slide];

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-black"
    >
      {/* Background slideshow — Hoi An & Hanoi night + studio */}
      <motion.div style={{ y: yImg }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease }}
          >
            <Image
              src={current.src}
              alt={current.alt[locale]}
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/85 to-ink-black/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-black/92 via-ink-black/20 to-ink-black/40"
          aria-hidden
        />
        <div className="film-grain absolute inset-0" aria-hidden />
      </motion.div>

      {/* Lanterns inset right — inside banner bounds */}
      <RedLanterns />

      {/* Content fills remaining section height */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-10 pt-20 sm:px-6 sm:py-12 sm:pt-24 lg:px-8 lg:pr-[min(40%,26rem)]"
      >
        {/* Large logo + compact text + CTAs */}
        <div className="flex w-full max-w-[46rem] flex-col">
          <motion.div
            className="-translate-x-[2cm] w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.55),0_8px_24px_rgba(165,29,46,0.25)] max-sm:-translate-x-[1cm]"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55, ease }}
          >
            <Link
              href={base}
              className="inline-block max-w-full transition-transform duration-300 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              aria-label="Đồng Xuân Media — Trang chủ"
            >
              <Logo variant="full" size="hero" className="max-w-full" />
            </Link>
          </motion.div>

          <motion.div
            className="mt-5 h-px w-20 origin-left bg-gradient-to-r from-brand-gold via-brand-gold-light to-transparent sm:mt-6 sm:w-24"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.28, duration: 0.55, ease }}
          />

          <motion.p
            className="mt-4 max-w-md text-[13px] leading-relaxed text-white/95 sm:mt-4 sm:text-sm [text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_4px_14px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.4 }}
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.4 }}
          >
            <Button
              href={`${base}/bao-gia`}
              size="md"
              className="w-full gap-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.45),0_12px_36px_-8px_rgba(165,29,46,0.75)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:min-w-[11rem]"
            >
              {dict.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              href={`${base}/du-an`}
              variant="outline"
              size="md"
              className="w-full border-white/40 bg-ink-black/25 text-white shadow-[0_10px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:border-brand-gold hover:bg-warm-white/10 hover:text-brand-gold-light sm:w-auto sm:min-w-[11rem]"
            >
              {dict.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            className="mt-5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <MapPin className="h-3.5 w-3.5 text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
            {dict.hero.location}
          </motion.p>
        </div>

        {/* Mobile lanterns */}
        <div className="mt-auto flex items-start justify-center gap-6 pt-8 pb-2 lg:hidden">
          <MobileRoundLantern delay={0} size={72} stringH={20} />
          <MobileRoundLantern delay={0.1} size={92} stringH={52} />
          <MobileRoundLantern delay={0.2} size={68} stringH={32} />
        </div>
      </motion.div>

      {/* Slide controls */}
      <div className="absolute bottom-16 left-4 z-30 flex flex-col gap-2 sm:bottom-20 sm:left-6 lg:left-8">
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold-light/90">
          {current.label[locale]}
        </p>
        <div className="flex items-center gap-2" role="tablist" aria-label="Banner slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === slide}
              aria-label={s.label[locale]}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === slide
                  ? "w-8 bg-brand-red shadow-[0_0_12px_rgba(200,16,30,0.7)]"
                  : "w-1.5 bg-warm-white/35 hover:bg-brand-gold/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee at bottom of banner */}
      <div className="relative z-20 w-full shrink-0">
        <ServiceMarquee locale={locale} onBanner />
      </div>
    </section>
  );
}

function MobileRoundLantern({
  delay = 0,
  size = 64,
  stringH = 24,
}: {
  delay?: number;
  size?: number;
  stringH?: number;
}) {
  const [lit, setLit] = useState(false);

  return (
    <motion.button
      type="button"
      aria-label="Đèn lồng"
      className="flex flex-col items-center bg-transparent p-0"
      style={{ transformOrigin: "top center" }}
      animate={{
        rotate: lit ? [0, 9, -7, 3, 0] : [0, 2, -1.5, 0],
      }}
      transition={{
        rotate: lit
          ? { duration: 0.9 }
          : { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay },
      }}
      onTouchStart={() => setLit(true)}
      onTouchEnd={() => setLit(false)}
      onMouseEnter={() => setLit(true)}
      onMouseLeave={() => setLit(false)}
    >
      <span
        className="w-px bg-gradient-to-b from-warm-white/40 to-brand-gold/70"
        style={{ height: stringH }}
      />
      <span className="mb-0.5 h-1.5 w-1.5 rounded-full bg-brand-gold" />
      <span
        className={`relative rounded-full transition-all duration-300 ${
          lit
            ? "bg-brand-red shadow-[0_0_28px_10px_rgba(200,16,30,0.5)]"
            : "bg-brand-red-dark shadow-[0_0_12px_2px_rgba(200,16,30,0.25)]"
        }`}
        style={{ width: size, height: size * 1.06 }}
      >
        <span
          className={`absolute left-1/2 top-1/2 h-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            lit ? "bg-brand-gold-light/40" : "bg-brand-gold/15"
          }`}
        />
      </span>
      <span className="mt-0.5 h-2.5 w-px bg-brand-gold/60" />
      <span className="h-2 w-3.5 rounded-b-full bg-brand-red" />
    </motion.button>
  );
}

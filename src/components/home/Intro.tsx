"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { MouseEvent } from "react";

interface IntroProps {
  dict: Dictionary;
  locale: Locale;
}

export function Intro({ dict, locale }: IntroProps) {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const glow = useMotionTemplate`radial-gradient(500px circle at ${mx}% ${my}%, rgba(200,16,30,0.12), transparent 50%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <Section className="section-zigzag overflow-hidden bg-paper-white" animate={false}>
      {/* Soft parchment vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(165,29,46,0.04),_transparent_55%)]"
        aria-hidden
      />
      <div
        className="relative"
        onMouseMove={onMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-8 rounded-3xl opacity-80"
          style={{ background: glow }}
          aria-hidden
        />

        {/* Editorial diagonal split */}
        <div className="relative grid items-stretch gap-0 lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center py-4 lg:col-span-6 lg:pr-12 lg:py-8">
            <Reveal>
              <SectionHeader
                eyebrow={dict.intro.eyebrow}
                title={dict.intro.title}
                className="mb-6"
              />
              <p className="text-lg leading-relaxed text-ink-black/75">
                {dict.intro.p1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-black/65">
                {dict.intro.p2}
              </p>
              <motion.p
                className="group mt-8 border-l-4 border-brand-gold bg-gradient-to-r from-brand-gold/10 to-transparent py-3 pl-4 font-display text-xl font-bold uppercase leading-snug text-ink-black sm:text-2xl"
                whileHover={{ x: 6, borderLeftWidth: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <span className="underline-draw">
                  {locale === "de"
                    ? "Wir verstehen Sprache, Kultur und Geschäft der Vietnamesen in Deutschland."
                    : locale === "en"
                      ? "We understand the language, culture and business of Vietnamese people in Germany."
                      : "Chúng tôi hiểu ngôn ngữ, văn hóa và cách kinh doanh của người Việt tại Đức."}
                </span>
              </motion.p>
            </Reveal>

            {/* Bento stats — irregular mosaic */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-6">
              {dict.intro.stats.map((stat, i) => {
                const spans = [
                  "col-span-1 sm:col-span-3",
                  "col-span-1 sm:col-span-3",
                  "col-span-1 sm:col-span-4",
                  "col-span-1 sm:col-span-2",
                ];
                return (
                  <Reveal
                    key={stat.label}
                    delay={i * 0.07}
                    className={spans[i]}
                  >
                    <motion.div
                      whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                      className={`group relative h-full overflow-hidden border p-5 ${
                        i === 0
                          ? "border-brand-red bg-brand-red text-warm-white"
                          : i === 1
                            ? "border-brand-gold/50 bg-ink-black text-warm-white"
                            : i === 2
                              ? "border-brand-gold/40 bg-brand-gold/15 text-ink-black"
                              : "border-ink-black/10 bg-warm-white text-ink-black"
                      }`}
                    >
                      <span
                        className="pointer-events-none absolute -right-2 -top-3 font-display text-5xl font-bold opacity-[0.12] transition-all duration-500 group-hover:scale-125 group-hover:opacity-25"
                        aria-hidden
                      >
                        0{i + 1}
                      </span>
                      <p className="relative font-display text-xl font-bold tracking-tight sm:text-2xl">
                        {stat.value}
                      </p>
                      <p
                        className={`relative mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
                          i < 2 ? "text-warm-white/70" : "text-ink-black/55"
                        }`}
                      >
                        {stat.label}
                      </p>
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Stacked photo collage with float */}
          <div className="relative mt-10 lg:col-span-6 lg:mt-0">
            <Reveal variant="left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <motion.div
                  className="float-slow relative z-10 ml-auto aspect-[3/4] w-[88%] overflow-hidden border border-ink-black/10 shadow-[0_40px_80px_-40px_rgba(17,18,22,0.55)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={media.berlin.src}
                    alt={media.berlin.alt[locale]}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-light">
                      Berlin · Đồng Xuân
                    </p>
                    <p className="mt-2 max-w-xs text-sm text-warm-white/90">
                      {locale === "de"
                        ? "Creative Hub im Herzen der vietnamesischen Community."
                        : locale === "en"
                          ? "Creative hub at the heart of the Vietnamese community."
                          : "Creative hub giữa trái tim cộng đồng người Việt."}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 left-0 z-20 w-[52%] overflow-hidden border-4 border-paper-white shadow-2xl sm:-bottom-8"
                  initial={{ opacity: 0, x: -30, rotate: -6 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={media.print.src}
                      alt={media.print.alt[locale]}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="pointer-events-none absolute -right-2 top-8 h-28 w-28 border border-brand-red/40 sm:-right-4"
                  animate={{ rotate: [0, 4, 0], scale: [1, 1.04, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  aria-hidden
                />
                <motion.div
                  className="pointer-events-none absolute -right-5 top-14 h-28 w-28 border border-brand-gold/50 sm:-right-8"
                  animate={{ rotate: [0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity }}
                  aria-hidden
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

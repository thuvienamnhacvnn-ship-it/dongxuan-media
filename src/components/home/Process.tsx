"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { processSteps } from "@/data/process";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface ProcessProps {
  locale: Locale;
  dict: Dictionary;
}

const STEP_MS = 1800;
const TOTAL = processSteps.length;

export function Process({ locale, dict }: ProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.35 });
  const [active, setActive] = useState(0);
  /** Steps that have been visited in the current cycle (for fill trail) */
  const [passed, setPassed] = useState<number[]>([0]);

  useEffect(() => {
    if (!inView) return;

    const id = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % TOTAL;
        setPassed((p) => {
          if (next === 0) return [0];
          return p.includes(next) ? p : [...p, next];
        });
        return next;
      });
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [inView]);

  // Reset when leaving viewport so it restarts fresh on re-enter
  useEffect(() => {
    if (!inView) {
      setActive(0);
      setPassed([0]);
    }
  }, [inView]);

  return (
    <Section className="overflow-hidden bg-warm-white/80 !py-12 sm:!py-14 lg:!py-16">
      <div ref={sectionRef}>
        <SectionHeader
          eyebrow={dict.processSection.eyebrow}
          title={dict.processSection.title}
          subtitle={dict.processSection.subtitle}
          className="mb-8 sm:mb-10"
        />

        <div className="relative">
          {/* Base track */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-5 hidden h-1 overflow-hidden rounded-full bg-ink-black/10 lg:block"
            aria-hidden
          >
            {/* Progress fill through active step */}
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"
              animate={{
                width: `${((active + 1) / TOTAL) * 100}%`,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {processSteps.map((step, i) => {
              const isActive = active === i;
              const isDone = passed.includes(i) && !isActive;
              const isUpcoming = !isActive && !isDone;

              return (
                <li key={step.id}>
                  <motion.button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setPassed((p) => {
                        const next = Array.from({ length: i + 1 }, (_, k) => k);
                        return next;
                      });
                    }}
                    className={cn(
                      "group relative h-full w-full border px-4 py-4 text-left transition-all duration-500",
                      isActive &&
                        "border-brand-red bg-brand-red text-warm-white shadow-[0_16px_40px_-16px_rgba(165,29,46,0.65)] scale-[1.02]",
                      isDone &&
                        "border-brand-gold/50 bg-brand-gold/15 text-ink-black",
                      isUpcoming &&
                        "border-ink-black/10 bg-warm-white text-ink-black/70"
                    )}
                    animate={
                      isActive
                        ? { y: -4, scale: 1.02 }
                        : { y: 0, scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <div className="mb-2.5 flex items-center gap-2.5">
                      <motion.span
                        className={cn(
                          "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center font-display text-xs font-bold ring-4 transition-colors duration-500",
                          isActive &&
                            "bg-warm-white text-brand-red ring-brand-red/30",
                          isDone &&
                            "bg-brand-gold text-ink-black ring-brand-gold/25",
                          isUpcoming &&
                            "bg-ink-black/10 text-ink-black/50 ring-paper-white"
                        )}
                        animate={
                          isActive
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(165,29,46,0.5)",
                                  "0 0 0 10px rgba(165,29,46,0)",
                                  "0 0 0 0 rgba(165,29,46,0)",
                                ],
                              }
                            : { boxShadow: "0 0 0 0 rgba(0,0,0,0)" }
                        }
                        transition={
                          isActive
                            ? { duration: 1.4, repeat: Infinity }
                            : { duration: 0.3 }
                        }
                      >
                        {step.step}
                      </motion.span>
                      <span
                        className={cn(
                          "h-px flex-1 transition-colors duration-500 lg:hidden",
                          isActive && "bg-warm-white/40",
                          isDone && "bg-brand-gold/60",
                          isUpcoming && "bg-ink-black/10"
                        )}
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-display text-sm font-bold uppercase leading-snug tracking-wide transition-colors duration-500",
                        isActive && "text-warm-white",
                        isDone && "text-ink-black",
                        isUpcoming && "text-ink-black/70"
                      )}
                    >
                      {step.title[locale]}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 line-clamp-2 text-xs leading-relaxed transition-colors duration-500",
                        isActive && "text-warm-white/85",
                        isDone && "text-ink-black/60",
                        isUpcoming && "text-ink-black/45"
                      )}
                    >
                      {step.description[locale]}
                    </p>

                    {/* Active bottom glow bar */}
                    <motion.span
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-gold"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : isDone ? 1 : 0 }}
                      transition={{ duration: 0.45 }}
                      style={{
                        backgroundColor: isActive
                          ? "var(--brand-gold-light)"
                          : "var(--brand-gold)",
                      }}
                    />
                  </motion.button>
                </li>
              );
            })}
          </ol>

          {/* Step indicator dots (mobile-friendly) */}
          <div
            className="mt-5 flex items-center justify-center gap-2"
            role="status"
            aria-live="polite"
            aria-label={`${active + 1} / ${TOTAL}`}
          >
            {processSteps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                aria-label={step.title[locale]}
                onClick={() => {
                  setActive(i);
                  setPassed(Array.from({ length: i + 1 }, (_, k) => k));
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-400",
                  i === active
                    ? "w-7 bg-brand-red"
                    : passed.includes(i)
                      ? "w-1.5 bg-brand-gold"
                      : "w-1.5 bg-ink-black/15"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

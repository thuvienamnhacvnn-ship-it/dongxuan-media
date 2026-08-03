"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
  /** Soft fade-in when section enters viewport */
  animate?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  as: Tag = "section",
  animate = true,
}: SectionProps) {
  const body = (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        containerClassName
      )}
    >
      {children}
    </div>
  );

  if (!animate) {
    return (
      <Tag id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
        {body}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={cn("relative py-16 sm:py-20 lg:py-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {body}
      </motion.div>
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  light,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl sm:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em]",
            light ? "text-brand-gold-light" : "text-brand-red"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-warm-white" : "text-ink-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-warm-white/75" : "text-ink-black/65"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-16",
          light ? "bg-brand-gold/70" : "bg-brand-gold",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}

"use client";

/**
 * Subtle page-level motion helpers for the home experience.
 * Keeps animations controlled and respects reduced motion via CSS.
 */
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function HomePageShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedDivider({ light }: { light?: boolean }) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-hidden>
      <motion.div
        className={`h-px origin-left ${
          light
            ? "bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-red/35 to-transparent"
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

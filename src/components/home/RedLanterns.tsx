"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanternProps {
  id: string;
  size: number;
  /** Cord from top of banner down to lantern */
  topOffset: number;
  delay?: number;
  label?: string;
}

function RoundLantern({
  id,
  size,
  topOffset,
  delay = 0,
  label = "Đèn lồng",
}: LanternProps) {
  const [lit, setLit] = useState(false);
  const glowId = `round-lantern-glow-${id}`;

  return (
    <motion.button
      type="button"
      aria-label={label}
      className="flex cursor-pointer flex-col items-center border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      style={{
        transformOrigin: "top center",
        width: size,
      }}
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: lit ? [0, 7, -6, 4, 0] : [0, 1.8, -1.4, 0.8, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.55 },
        y: { delay, duration: 0.55 },
        rotate: lit
          ? { duration: 1.1, ease: "easeInOut" }
          : {
              duration: 5 + delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
      }}
      onMouseEnter={() => setLit(true)}
      onMouseLeave={() => setLit(false)}
      onFocus={() => setLit(true)}
      onBlur={() => setLit(false)}
    >
      {/* Cord from banner top */}
      <span
        className="mx-auto w-px shrink-0 bg-gradient-to-b from-warm-white/45 via-brand-gold/65 to-brand-gold"
        style={{ height: topOffset }}
        aria-hidden
      />
      <span
        className="z-[1] -mb-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(241,199,91,0.7)]"
        aria-hidden
      />

      <span
        className="relative block shrink-0"
        style={{ width: size, height: size * 1.12 }}
        aria-hidden
      >
        <span
          className={cn(
            "pointer-events-none absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
            lit
              ? "h-[140%] w-[140%] bg-brand-red/45 blur-3xl"
              : "h-[95%] w-[95%] bg-brand-red/18 blur-2xl"
          )}
        />

        <svg viewBox="0 0 100 115" className="relative h-full w-full" fill="none">
          <ellipse
            cx="50"
            cy="18"
            rx="22"
            ry="7"
            fill={lit ? "#F1C75B" : "#D9A12E"}
            className="transition-colors duration-300"
          />
          <path
            d="M28 18c0 3 10 5 22 5s22-2 22-5"
            fill={lit ? "#E8B84A" : "#B8860B"}
            className="transition-colors duration-300"
          />
          <ellipse
            cx="50"
            cy="58"
            rx="36"
            ry="40"
            fill={lit ? "#E01828" : "#A30F1A"}
            className="transition-colors duration-300"
          />
          <ellipse
            cx="40"
            cy="48"
            rx="12"
            ry="16"
            fill={lit ? "rgba(255,220,180,0.22)" : "rgba(255,255,255,0.06)"}
            className="transition-colors duration-300"
          />
          {[38, 48, 58, 68, 78].map((y) => (
            <ellipse
              key={y}
              cx="50"
              cy={y}
              rx={34 - Math.abs(58 - y) * 0.12}
              ry={3.2}
              stroke={lit ? "rgba(241,199,91,0.55)" : "rgba(217,161,46,0.28)"}
              strokeWidth="1"
              className="transition-colors duration-300"
            />
          ))}
          <path
            d="M30 28c-2 10-3 20-2 30 1 10 3 20 2 28"
            stroke={lit ? "rgba(247,243,234,0.2)" : "rgba(17,18,22,0.2)"}
            strokeWidth="1"
          />
          <path
            d="M50 22v72"
            stroke={lit ? "rgba(241,199,91,0.35)" : "rgba(217,161,46,0.2)"}
            strokeWidth="1"
          />
          <path
            d="M70 28c2 10 3 20 2 30-1 10-3 20-2 28"
            stroke={lit ? "rgba(247,243,234,0.2)" : "rgba(17,18,22,0.2)"}
            strokeWidth="1"
          />
          <ellipse
            cx="50"
            cy="56"
            rx="14"
            ry="18"
            fill={lit ? "#F1C75B" : "#C8101E"}
            opacity={lit ? 0.75 : 0.2}
            style={lit ? { filter: `url(#${glowId})` } : undefined}
            className="transition-all duration-300"
          />
          <ellipse
            cx="50"
            cy="96"
            rx="14"
            ry="4.5"
            fill={lit ? "#F1C75B" : "#8E0B14"}
            className="transition-colors duration-300"
          />
          <path
            d="M50 100v8"
            stroke={lit ? "#F1C75B" : "#D9A12E"}
            strokeWidth="1.5"
            className="transition-colors duration-300"
          />
          <path
            d="M42 108c3 5 5.5 7 8 7s5-2 8-7c-2.5 1.2-5 1.8-8 1.8s-5.5-.6-8-1.8z"
            fill={lit ? "#E01828" : "#8E0B14"}
            className="transition-colors duration-300"
          />
          <defs>
            <filter id={glowId} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </span>
    </motion.button>
  );
}

/**
 * Larger lanterns on the right, cords from top, bodies hang mid-banner.
 * 1 = highest · 2 = lowest · 3 = mid
 */
export function RedLanterns({ className }: { className?: string }) {
  const lanterns: LanternProps[] = [
    {
      id: "1",
      size: 152,
      topOffset: 168, // cao nhất (thả thấp hơn)
      delay: 0.2,
      label: "Đèn lồng 1 — cao",
    },
    {
      id: "2",
      size: 176,
      topOffset: 248, // thấp nhất
      delay: 0.32,
      label: "Đèn lồng 2 — thấp",
    },
    {
      id: "3",
      size: 144,
      topOffset: 204, // cân giữa
      delay: 0.44,
      label: "Đèn lồng 3 — giữa",
    },
  ];

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[min(48%,34rem)] pr-12 pt-2 lg:block xl:pr-16",
        className
      )}
    >
      <div className="pointer-events-auto flex w-full items-start justify-center gap-7 xl:gap-9">
        {lanterns.map((l) => (
          <RoundLantern key={l.id} {...l} />
        ))}
      </div>
    </div>
  );
}

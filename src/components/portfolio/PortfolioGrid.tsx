"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { portfolio, portfolioFilters } from "@/data/portfolio";
import { portfolioImages, media } from "@/data/media";
import type { PortfolioItem } from "@/types";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function PortfolioGrid({
  locale,
  quoteLabel,
  similarLabel,
  demoLabel,
}: {
  locale: Locale;
  quoteLabel: string;
  similarLabel: string;
  demoLabel: string;
}) {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const items = useMemo(() => {
    if (filter === "all") return portfolio;
    return portfolio.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {portfolioFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition-all",
              filter === f.id
                ? "border-brand-red bg-brand-red text-warm-white shadow-[0_8px_24px_-10px_rgba(200,16,30,0.6)]"
                : "border-ink-black/15 bg-paper-white text-ink-black/70 hover:border-brand-red/40"
            )}
          >
            {f.label[locale]}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => {
          const src = portfolioImages[item.id] ?? media.print.src;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="group mb-4 w-full break-inside-avoid overflow-hidden border border-ink-black/10 bg-charcoal text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(17,18,22,0.55)]"
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  i % 3 === 0 ? "h-60" : "h-48"
                )}
              >
                <Image
                  src={src}
                  alt={item.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(160deg, ${item.accent}44, transparent 45%), linear-gradient(to top, #111216ee, transparent 55%)`,
                  }}
                />
                <span className="absolute left-3 top-3 bg-ink-black/55 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm-white/85 backdrop-blur-sm">
                  {item.industry[locale]}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold-light">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold uppercase leading-tight text-warm-white">
                    {item.title[locale]}
                  </h3>
                </div>
              </div>
              <div className="bg-warm-white p-4">
                <p className="line-clamp-2 text-sm text-ink-black/65">
                  {item.description[locale]}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-ink-black/40">
                  {demoLabel}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-black/65 p-0 backdrop-blur-md sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title[locale]}
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-warm-white/10 bg-paper-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 sm:h-64">
              <Image
                src={portfolioImages[active.id] ?? media.print.src}
                alt={active.title[locale]}
                fill
                sizes="768px"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, #111216dd, transparent 60%), linear-gradient(145deg, ${active.accent}55, transparent)`,
                }}
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-ink-black/55 text-warm-white backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              {active.hasBeforeAfter && (
                <div className="absolute bottom-3 left-3 flex gap-2 text-[10px] font-bold uppercase tracking-wider">
                  <span className="bg-warm-white/20 px-2 py-1 text-warm-white backdrop-blur-sm">
                    Before
                  </span>
                  <span className="bg-brand-gold px-2 py-1 text-ink-black">
                    After
                  </span>
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                {active.industry[locale]} · {active.year}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase text-ink-black sm:text-3xl">
                {active.title[locale]}
              </h2>
              <p className="mt-1 text-sm text-ink-black/50">
                {active.client[locale]}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-black/70">
                {active.description[locale]}
              </p>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-black/45">
                  Services
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {active.servicesDone[locale].map((s) => (
                    <li
                      key={s}
                      className="border border-ink-black/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {active.results && (
                <div className="mt-5 border-l-2 border-brand-gold pl-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    Results
                  </p>
                  <p className="mt-1 text-sm text-ink-black/70">
                    {active.results[locale]}
                  </p>
                </div>
              )}
              <p className="mt-4 text-[11px] text-ink-black/40">{demoLabel}</p>
              <Link
                href={`/${locale}/bao-gia`}
                className="mt-6 inline-flex items-center gap-1.5 bg-brand-red px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-warm-white transition-colors hover:bg-brand-red-dark"
              >
                {similarLabel || quoteLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

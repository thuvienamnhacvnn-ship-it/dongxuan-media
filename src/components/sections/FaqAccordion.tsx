"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function FaqAccordion({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="divide-y divide-ink-black/10 border border-ink-black/10 bg-paper-white">
      {faqs.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-warm-white"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm font-bold uppercase tracking-wide text-ink-black sm:text-base">
                {item.question[locale]}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-red transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-black/65">
                  {item.answer[locale]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

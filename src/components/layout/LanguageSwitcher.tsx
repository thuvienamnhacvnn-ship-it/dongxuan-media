"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, localeLabels, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
  light?: boolean;
}

export function LanguageSwitcher({
  locale,
  className,
  light,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function switchPath(next: Locale) {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/") || `/${next}`;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-sm border px-1 py-1 text-[11px] font-bold tracking-wider",
        light
          ? "border-warm-white/20 bg-ink-black/20 text-warm-white"
          : "border-ink-black/10 bg-paper-white/80 text-ink-black",
        className
      )}
      role="navigation"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={switchPath(l)}
          hrefLang={l}
          className={cn(
            "rounded-sm px-2 py-1 transition-colors",
            locale === l
              ? light
                ? "bg-brand-red text-warm-white"
                : "bg-ink-black text-warm-white"
              : light
                ? "hover:bg-warm-white/10"
                : "hover:bg-ink-black/5"
          )}
          aria-current={locale === l ? "true" : undefined}
        >
          {localeLabels[l]}
        </Link>
      ))}
    </div>
  );
}

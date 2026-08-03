"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const base = `/${locale}`;
  const inverted = isHome && !scrolled && !open;

  function isActive(href: string) {
    const path = `${base}${href}`;
    if (!href) return pathname === base || pathname === `${base}/`;
    return pathname === path || pathname.startsWith(`${path}/`);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-ink-black/8 bg-paper-white/95 shadow-[0_12px_40px_-20px_rgba(17,18,22,0.35)] backdrop-blur-xl"
          : inverted
            ? "border-b border-transparent bg-gradient-to-b from-ink-black/55 via-ink-black/20 to-transparent"
            : "border-b border-ink-black/6 bg-paper-white/85 backdrop-blur-md"
      )}
    >
      {/* Thin brand accent line */}
      <div
        className={cn(
          "h-[2px] w-full transition-opacity duration-500",
          inverted && !scrolled
            ? "bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70"
            : "bg-gradient-to-r from-brand-red via-brand-gold to-brand-red opacity-90"
        )}
        aria-hidden
      />

      <div className="mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href={base}
          className="relative z-10 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          onClick={() => setOpen(false)}
          aria-label="Đồng Xuân Media — Trang chủ"
        >
          <Logo variant="full" size="md" />
        </Link>

        {/* Desktop nav — pill rail */}
        <nav
          className={cn(
            "hidden items-center gap-0.5 rounded-full px-1.5 py-1 lg:flex",
            inverted
              ? "border border-warm-white/10 bg-ink-black/25 backdrop-blur-md"
              : "border border-ink-black/8 bg-warm-white/80"
          )}
        >
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href || "home"}
                href={`${base}${item.href}`}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 xl:px-3.5 xl:text-[12px]",
                  inverted
                    ? active
                      ? "bg-brand-red text-warm-white shadow-[0_0_20px_-4px_rgba(200,16,30,0.8)]"
                      : "text-warm-white/75 hover:bg-warm-white/10 hover:text-brand-gold-light"
                    : active
                      ? "bg-ink-black text-warm-white"
                      : "text-ink-black/65 hover:bg-ink-black/5 hover:text-brand-red"
                )}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher locale={locale} light={inverted} />
          <Button
            href={`${base}/bao-gia`}
            size="sm"
            className={cn(
              "gap-1.5",
              inverted &&
                "shadow-[0_0_24px_-6px_rgba(200,16,30,0.75)]"
            )}
          >
            {dict.common.getQuote}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} light={inverted} />
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors",
              inverted
                ? "border-warm-white/20 bg-ink-black/40 text-warm-white"
                : "border-ink-black/10 bg-paper-white text-ink-black"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[calc(2px+3.75rem)] z-40 bg-ink-black/50 backdrop-blur-sm transition-opacity sm:top-[calc(2px+4.25rem)] lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(2px+3.75rem)] z-50 border-b border-ink-black/10 bg-paper-white px-4 py-5 shadow-2xl transition-all duration-300 sm:top-[calc(2px+4.25rem)] lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <nav className="flex flex-col">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href || "home"}
                href={`${base}${item.href}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-ink-black/6 px-2 py-3.5 font-display text-base font-bold uppercase tracking-wide transition-colors",
                  active ? "text-brand-red" : "text-ink-black"
                )}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>
        <div className="mt-5" onClick={() => setOpen(false)}>
          <Button href={`${base}/bao-gia`} className="w-full gap-2">
            {dict.common.getQuote}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

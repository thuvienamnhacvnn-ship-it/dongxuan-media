import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import {
  CloudMotif,
  CornerLattice,
  SealMotif,
  WaveBorder,
  KnotDot,
} from "@/components/brand/ChineseMotifs";
import { footerNav } from "@/data/navigation";
import {
  getMailtoHref,
  getTelHref,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/site-config";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const base = `/${locale}`;
  const tel = getTelHref();
  const mail = getMailtoHref();
  const wa = getWhatsAppUrl(locale);

  const quickLinks = [
    ...footerNav.services.slice(0, 4),
    { href: "/bao-gia", label: footerNav.actions[0].label },
    { href: "/lien-he", label: { vi: "Liên hệ", de: "Kontakt", en: "Contact" } },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-wash text-warm-white">
      {/* Red wave border — Chinese lattice feel */}
      <div className="relative text-brand-red">
        <WaveBorder />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(228,200,120,0.5) 0.6px, transparent 0.6px)",
          backgroundSize: "5px 5px",
        }}
        aria-hidden
      />

      {/* Corner lattices */}
      <CornerLattice className="pointer-events-none absolute left-3 top-10 h-14 w-14 opacity-40 sm:left-6 sm:h-16 sm:w-16" />
      <CornerLattice
        flip="x"
        className="pointer-events-none absolute right-3 top-10 h-14 w-14 opacity-40 sm:right-6 sm:h-16 sm:w-16"
      />
      <CornerLattice
        flip="y"
        className="pointer-events-none absolute bottom-16 left-3 h-12 w-12 opacity-25 sm:left-6"
      />
      <CornerLattice
        flip="xy"
        className="pointer-events-none absolute bottom-16 right-3 h-12 w-12 opacity-25 sm:right-6"
      />

      {/* Soft red glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-red/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Top: brand + seal + contact compact */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <Logo variant="full" size="md" />
            <SealMotif className="mt-1 hidden h-11 w-11 opacity-70 sm:block" />
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-warm-white/70">
            {tel ? (
              <a
                href={tel}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-gold-light"
              >
                <Phone className="h-3.5 w-3.5 text-brand-red" aria-hidden />
                {siteConfig.contact.phoneDisplay}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-brand-red" aria-hidden />
                {siteConfig.contact.phoneDisplay}
              </span>
            )}
            <KnotDot className="h-3 w-3 opacity-60" />
            {mail ? (
              <a
                href={mail}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-gold-light"
              >
                <Mail className="h-3.5 w-3.5 text-brand-red" aria-hidden />
                {siteConfig.contact.emailDisplay}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-brand-red" aria-hidden />
                {siteConfig.contact.emailDisplay}
              </span>
            )}
            {wa && (
              <>
                <KnotDot className="h-3 w-3 opacity-60" />
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-gold-light"
                >
                  <MessageCircle
                    className="h-3.5 w-3.5 text-brand-red"
                    aria-hidden
                  />
                  WhatsApp
                </a>
              </>
            )}
          </div>
        </div>

        {/* Cloud divider */}
        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
          <CloudMotif className="h-6 w-16 shrink-0 opacity-70" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
        </div>

        {/* Compact links row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-warm-white/55">
              {dict.footer.tagline}
            </p>
            <p className="mt-3 flex items-start gap-2 text-xs text-warm-white/45">
              <MapPin
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-red"
                aria-hidden
              />
              {siteConfig.address.full}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
            aria-label="Footer"
          >
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={`${base}${item.href}`}
                className="text-warm-white/60 transition-colors hover:text-brand-gold-light"
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-brand-red/25 pt-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-warm-white/40">
            <span>{dict.footer.rights}</span>
            <span className="hidden text-brand-red/50 sm:inline">|</span>
            {footerNav.legal.map((item, i) => (
              <span key={item.href} className="inline-flex items-center gap-3">
                {i > 0 && (
                  <KnotDot className="hidden h-2.5 w-2.5 opacity-50 sm:block" />
                )}
                <Link
                  href={`${base}${item.href}`}
                  className="transition-colors hover:text-brand-gold-light"
                >
                  {item.label[locale]}
                </Link>
              </span>
            ))}
          </div>
          <p className="font-display text-[10px] uppercase tracking-[0.28em] text-brand-red/70">
            {dict.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}

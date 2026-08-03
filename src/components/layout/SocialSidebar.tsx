"use client";

import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

interface SocialSidebarProps {
  locale: Locale;
  dict: Dictionary;
}

/** 3D embossed brand glyphs — sharp, no soft blur filters */
function FacebookIcon3D() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="fb-face" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#6BB3FF" />
          <stop offset="40%" stopColor="#1877F2" />
          <stop offset="100%" stopColor="#0B5FCC" />
        </linearGradient>
        <linearGradient id="fb-shine" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M27 42V26.5h5.1l.76-5.9H27v-3.78c0-1.71.47-2.87 2.92-2.87H33V8.7C32.5 8.63 30.7 8.5 28.6 8.5 24.2 8.5 21.2 11.2 21.2 16.2v4.4H16.2v5.9h5v15.5H27z"
        fill="#0A4A9E"
        transform="translate(1.6 2.2)"
      />
      <path
        d="M27 42V26.5h5.1l.76-5.9H27v-3.78c0-1.71.47-2.87 2.92-2.87H33V8.7C32.5 8.63 30.7 8.5 28.6 8.5 24.2 8.5 21.2 11.2 21.2 16.2v4.4H16.2v5.9h5v15.5H27z"
        fill="url(#fb-face)"
      />
      <path
        d="M27 42V26.5h5.1l.76-5.9H27v-3.78c0-1.71.47-2.87 2.92-2.87H33V8.7C32.5 8.63 30.7 8.5 28.6 8.5 24.2 8.5 21.2 11.2 21.2 16.2v4.4H16.2v5.9h5v15.5H27z"
        fill="url(#fb-shine)"
      />
    </svg>
  );
}

function ZaloIcon3D() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="zl-face" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#4DA3FF" />
          <stop offset="45%" stopColor="#0068FF" />
          <stop offset="100%" stopColor="#0050CC" />
        </linearGradient>
        <linearGradient id="zl-shine" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Extruded bubble */}
      <path
        d="M10 12.5c0-3 2.4-5.5 5.4-5.5h17.2c3 0 5.4 2.5 5.4 5.5v14c0 3-2.4 5.5-5.4 5.5H22.2L15 38.2V32H15.4c-3 0-5.4-2.5-5.4-5.5v-14z"
        fill="#003F9E"
        transform="translate(1.5 2)"
      />
      <path
        d="M10 12.5c0-3 2.4-5.5 5.4-5.5h17.2c3 0 5.4 2.5 5.4 5.5v14c0 3-2.4 5.5-5.4 5.5H22.2L15 38.2V32H15.4c-3 0-5.4-2.5-5.4-5.5v-14z"
        fill="url(#zl-face)"
      />
      <path
        d="M10 12.5c0-3 2.4-5.5 5.4-5.5h17.2c3 0 5.4 2.5 5.4 5.5v14c0 3-2.4 5.5-5.4 5.5H22.2L15 38.2V32H15.4c-3 0-5.4-2.5-5.4-5.5v-14z"
        fill="url(#zl-shine)"
      />
      {/* Letter Z */}
      <path
        d="M17.2 15.2h13.6v3.1l-8.4 9.2h8.6v3.3H16.8v-3.1l8.4-9.2h-8z"
        fill="#fff"
      />
    </svg>
  );
}

function InstagramIcon3D() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="ig-face" x1="10%" y1="5%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="#F9CE34" />
          <stop offset="28%" stopColor="#EE2A7B" />
          <stop offset="62%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#6228D7" />
        </linearGradient>
        <linearGradient id="ig-shine" x1="30%" y1="0%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(1.5 2)" fill="#6B1460">
        <rect x="8" y="8" width="32" height="32" rx="9" />
      </g>
      <rect x="8" y="8" width="32" height="32" rx="9" fill="url(#ig-face)" />
      <circle cx="24" cy="24" r="7.2" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="33.2" cy="14.8" r="2.1" fill="#fff" />
      <path
        d="M8 17c0-5 4-9 9-9h14c5 0 9 4 9 9v0H8v0z"
        fill="url(#ig-shine)"
      />
    </svg>
  );
}

function TikTokIcon3D() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="tt-face" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="50%" stopColor="#121212" />
          <stop offset="100%" stopColor="#000" />
        </linearGradient>
      </defs>
      {/* Cyan / magenta chromatic offset — classic TikTok 3D */}
      <path
        d="M33.2 15.1a9.4 9.4 0 0 1-5.5-1.7v14.2a9.2 9.2 0 1 1-9.2-9.2c.5 0 .9.05 1.35.15v4.6a4.6 4.6 0 1 0 3.25 4.4V7.5h4.6a9.4 9.4 0 0 0 8.9 8.7v4.4z"
        fill="#25F4EE"
        transform="translate(-1.6 0.6)"
      />
      <path
        d="M33.2 15.1a9.4 9.4 0 0 1-5.5-1.7v14.2a9.2 9.2 0 1 1-9.2-9.2c.5 0 .9.05 1.35.15v4.6a4.6 4.6 0 1 0 3.25 4.4V7.5h4.6a9.4 9.4 0 0 0 8.9 8.7v4.4z"
        fill="#FE2C55"
        transform="translate(1.6 1.4)"
      />
      <path
        d="M33.2 15.1a9.4 9.4 0 0 1-5.5-1.7v14.2a9.2 9.2 0 1 1-9.2-9.2c.5 0 .9.05 1.35.15v4.6a4.6 4.6 0 1 0 3.25 4.4V7.5h4.6a9.4 9.4 0 0 0 8.9 8.7v4.4z"
        fill="url(#tt-face)"
      />
    </svg>
  );
}

function AiIcon3D() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="ai-face" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#D94A5A" />
          <stop offset="45%" stopColor="#A51D2E" />
          <stop offset="100%" stopColor="#6F0F1A" />
        </linearGradient>
        <linearGradient id="ai-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D78A" />
          <stop offset="50%" stopColor="#C4A04A" />
          <stop offset="100%" stopColor="#8B6F2E" />
        </linearGradient>
        <linearGradient id="ai-shine" x1="50%" y1="0%" x2="50%" y2="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="11.5" y="14.5" width="25" height="22" rx="7" fill="#5A0C15" transform="translate(1.4 2)" />
      <rect x="11.5" y="14.5" width="25" height="22" rx="7" fill="url(#ai-face)" />
      <rect x="11.5" y="14.5" width="25" height="22" rx="7" fill="url(#ai-shine)" />
      <rect x="22.5" y="8" width="3" height="7" rx="1.5" fill="url(#ai-gold)" />
      <circle cx="24" cy="7.2" r="2.4" fill="url(#ai-gold)" />
      <circle cx="24" cy="7.2" r="1.1" fill="#fff" />
      <circle cx="19" cy="24" r="2.6" fill="#FAF6EE" />
      <circle cx="29" cy="24" r="2.6" fill="#FAF6EE" />
      <circle cx="19.5" cy="23.6" r="1.1" fill="#161210" />
      <circle cx="29.5" cy="23.6" r="1.1" fill="#161210" />
      <circle cx="19.9" cy="23.2" r="0.45" fill="#fff" />
      <circle cx="29.9" cy="23.2" r="0.45" fill="#fff" />
      <path
        d="M19.5 30.5c1.4 1.6 3.2 2.4 4.5 2.4s3.1-.8 4.5-2.4"
        fill="none"
        stroke="url(#ai-gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="11.5" cy="25" r="2.2" fill="url(#ai-face)" />
      <circle cx="36.5" cy="25" r="2.2" fill="url(#ai-face)" />
    </svg>
  );
}

type SocialItem = {
  id: string;
  href: string;
  label: string;
  variant: "facebook" | "zalo" | "instagram" | "tiktok";
  Icon: () => ReactNode;
  delay: string;
};

function Social3DLink({
  href,
  label,
  variant,
  Icon,
  delay,
}: {
  href: string;
  label: string;
  variant: SocialItem["variant"] | "ai";
  Icon: () => ReactNode;
  delay: string;
}) {
  const style = { animationDelay: delay } as CSSProperties;
  const className = cn(
    "social-3d group relative block",
    `social-3d--${variant}`,
    !href && "cursor-default"
  );

  const inner = (
    <>
      <span className="social-3d__stage">
        <span className="social-3d__glyph">
          <Icon />
        </span>
        <span className="social-3d__specular" aria-hidden />
      </span>
      <span className="social-3d__tooltip">{label}</span>
    </>
  );

  return (
    <div className="social-float" style={style}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={label}
          title={label}
        >
          {inner}
        </a>
      ) : (
        <span className={className} aria-label={label} title={label} role="img">
          {inner}
        </span>
      )}
    </div>
  );
}

export function SocialSidebar({ locale, dict }: SocialSidebarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const base = `/${locale}`;
  const wa = getWhatsAppUrl(locale);
  const t = dict.socialSidebar;

  const socials: SocialItem[] = [
    {
      id: "facebook",
      href: siteConfig.social.facebook,
      label: "Facebook",
      variant: "facebook",
      Icon: FacebookIcon3D,
      delay: "0s",
    },
    {
      id: "zalo",
      href: siteConfig.social.zalo,
      label: "Zalo",
      variant: "zalo",
      Icon: ZaloIcon3D,
      delay: "0.35s",
    },
    {
      id: "instagram",
      href: siteConfig.social.instagram,
      label: "Instagram",
      variant: "instagram",
      Icon: InstagramIcon3D,
      delay: "0.7s",
    },
    {
      id: "tiktok",
      href: siteConfig.social.tiktok,
      label: "TikTok",
      variant: "tiktok",
      Icon: TikTokIcon3D,
      delay: "1.05s",
    },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        className="fixed left-2 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-4 sm:left-3 sm:gap-5 md:left-4 md:gap-6"
        aria-label={t.navLabel}
        style={{ perspective: "600px" }}
      >
        {socials.map(({ id, href, label, variant, Icon, delay }) => (
          <Social3DLink
            key={id}
            href={href}
            label={label}
            variant={variant}
            Icon={Icon}
            delay={delay}
          />
        ))}

        <div className="social-float" style={{ animationDelay: "1.4s" }}>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "social-3d social-3d--ai group relative block",
              open && "is-active"
            )}
            aria-label={t.aiLabel}
            aria-expanded={open}
            aria-controls={panelId}
            title={t.aiLabel}
          >
            <span className="social-3d__stage">
              <span className="social-3d__glyph">
                <AiIcon3D />
              </span>
              <span className="social-3d__specular" aria-hidden />
            </span>
            <span className="social-3d__tooltip">{t.aiLabel}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-ink-black/25 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label={t.aiTitle}
          className="fixed bottom-4 left-3 z-[70] w-[min(100vw-1.5rem,22rem)] origin-bottom-left rounded-2xl border border-ink-black/10 bg-paper-white shadow-paper sm:bottom-auto sm:left-20 sm:top-1/2 sm:w-80 sm:-translate-y-1/2"
        >
          <div className="flex items-center justify-between gap-3 rounded-t-2xl bg-silk-red px-4 py-3 text-warm-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-white/15">
                <Sparkles className="h-4 w-4 text-brand-gold-light" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">{t.aiTitle}</p>
                <p className="text-[11px] text-warm-white/70">{t.aiStatus}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-warm-white/10 transition-colors hover:bg-warm-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              aria-label={t.close}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-xl bg-warm-white px-3.5 py-3 text-sm leading-relaxed text-charcoal shadow-sm ring-1 ring-ink-black/5">
              {t.aiGreeting}
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href={`${base}/bao-gia`}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-ink-black/8 bg-paper-white px-3.5 py-2.5 text-left text-sm font-medium text-ink-black transition-colors hover:border-brand-red/30 hover:bg-brand-red/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                {t.actionQuote}
              </Link>
              <Link
                href={`${base}/dich-vu`}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-ink-black/8 bg-paper-white px-3.5 py-2.5 text-left text-sm font-medium text-ink-black transition-colors hover:border-brand-red/30 hover:bg-brand-red/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                {t.actionServices}
              </Link>
              <Link
                href={`${base}/lien-he`}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-ink-black/8 bg-paper-white px-3.5 py-2.5 text-left text-sm font-medium text-ink-black transition-colors hover:border-brand-red/30 hover:bg-brand-red/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                {t.actionContact}
              </Link>
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.actionWhatsapp}
                </a>
              )}
            </div>

            <p className="text-center text-[11px] leading-relaxed text-metal-gray">
              {t.aiHint}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

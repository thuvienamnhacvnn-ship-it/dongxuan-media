"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "dxm-cookie-consent";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

interface CookieConsentProps {
  locale: Locale;
}

const copy = {
  vi: {
    title: "Cookie",
    body: "Chúng tôi chỉ dùng cookie thiết yếu theo mặc định. Analytics và marketing chỉ bật khi bạn đồng ý.",
    essential: "Thiết yếu",
    analytics: "Analytics",
    marketing: "Marketing",
    acceptAll: "Chấp nhận tất cả",
    essentialOnly: "Chỉ thiết yếu",
    save: "Lưu lựa chọn",
    policy: "Datenschutz",
  },
  de: {
    title: "Cookies",
    body: "Standardmäßig nur essenzielle Cookies. Analytics und Marketing erst nach Zustimmung.",
    essential: "Essenziell",
    analytics: "Analytics",
    marketing: "Marketing",
    acceptAll: "Alle akzeptieren",
    essentialOnly: "Nur essenziell",
    save: "Auswahl speichern",
    policy: "Datenschutz",
  },
  en: {
    title: "Cookies",
    body: "Essential cookies only by default. Analytics and marketing load only after you opt in.",
    essential: "Essential",
    analytics: "Analytics",
    marketing: "Marketing",
    acceptAll: "Accept all",
    essentialOnly: "Essential only",
    save: "Save choices",
    policy: "Privacy",
  },
};

export function CookieConsent({ locale }: CookieConsentProps) {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function save(consent: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      window.dispatchEvent(new CustomEvent("dxm-consent", { detail: consent }));
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink-black/10 bg-paper-white/95 p-4 shadow-[0_-12px_40px_-20px_rgba(17,18,22,0.35)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-red">
            {t.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-black/70">
            {t.body}{" "}
            <Link
              href={`/${locale}/datenschutz`}
              className="underline underline-offset-2 hover:text-brand-red"
            >
              {t.policy}
            </Link>
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2 text-ink-black/50">
              <input type="checkbox" checked disabled className="accent-brand-red" />
              {t.essential}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-brand-red"
              />
              {t.analytics}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-brand-red"
              />
              {t.marketing}
            </label>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              save({ essential: true, analytics: false, marketing: false })
            }
          >
            {t.essentialOnly}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() =>
              save({ essential: true, analytics, marketing })
            }
          >
            {t.save}
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={() =>
              save({ essential: true, analytics: true, marketing: true })
            }
          >
            {t.acceptAll}
          </Button>
        </div>
      </div>
    </div>
  );
}

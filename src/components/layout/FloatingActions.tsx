"use client";

import { MessageCircle, Phone } from "lucide-react";
import { getTelHref, getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/config";

interface FloatingActionsProps {
  locale: Locale;
}

export function FloatingActions({ locale }: FloatingActionsProps) {
  const wa = getWhatsAppUrl(locale);
  const tel = getTelHref();
  const hasPhone = Boolean(siteConfig.contact.phone);
  const hasWa = Boolean(wa);

  if (!hasPhone && !hasWa) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      {hasWa && (
        <a
          href={wa!}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      )}
      {hasPhone && (
        <a
          href={tel!}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-warm-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold md:hidden"
          aria-label="Call"
        >
          <Phone className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}

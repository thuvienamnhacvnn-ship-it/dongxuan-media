import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import {
  getMailtoHref,
  getTelHref,
  getWhatsAppUrl,
  siteConfig,
} from "@/lib/site-config";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ContactCardsProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCards({ locale, dict }: ContactCardsProps) {
  const tel = getTelHref();
  const mail = getMailtoHref();
  const wa = getWhatsAppUrl(locale);

  const items: {
    icon: typeof Phone;
    label: string;
    value: string;
    href?: string | null;
    external?: boolean;
  }[] = [
    {
      icon: Phone,
      label: dict.common.callNow,
      value: siteConfig.contact.phoneDisplay,
      href: tel,
    },
    {
      icon: MessageCircle,
      label: dict.common.whatsapp,
      value: siteConfig.contact.whatsapp
        ? "WhatsApp"
        : "[CẬP NHẬT]",
      href: wa,
      external: true,
    },
    {
      icon: Mail,
      label: dict.common.email,
      value: siteConfig.contact.emailDisplay,
      href: mail,
    },
    {
      icon: MapPin,
      label: dict.common.address,
      value: siteConfig.address.full,
      href: siteConfig.maps.searchUrl,
      external: true,
    },
    {
      icon: Clock,
      label: dict.common.hours,
      value: siteConfig.hours[locale],
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        const inner = (
          <>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-red text-warm-white">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-ink-black/45">
                {item.label}
              </span>
              <span className="mt-0.5 block text-sm font-medium text-ink-black">
                {item.value}
              </span>
            </span>
          </>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-start gap-3 border border-ink-black/10 bg-paper-white p-4 transition-colors hover:border-brand-red/40"
            >
              {inner}
            </a>
          );
        }

        return (
          <div
            key={item.label}
            className="flex items-start gap-3 border border-ink-black/10 bg-paper-white p-4"
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}

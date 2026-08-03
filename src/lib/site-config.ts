/**
 * Single source of truth for contact & site settings.
 * Update these values before go-live. Do not invent real phone/email numbers.
 */
export const siteConfig = {
  name: "Đồng Xuân Media",
  nameEn: "Dong Xuan Media",
  legalName: "Đồng Xuân Media", // [CẬP NHẬT] tên pháp lý / Impressum
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dongxuanmedia.de", // [CẬP NHẬT]
  localeDefault: "vi" as const,
  locales: ["vi", "de", "en"] as const,

  contact: {
    /** Replace with real number, e.g. +49... — leave empty to hide call CTAs */
    phone: process.env.NEXT_PUBLIC_PHONE || "",
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "[CẬP NHẬT]",
    /** Digits only for wa.me, e.g. 491701234567 */
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
    email: process.env.NEXT_PUBLIC_EMAIL || "",
    emailDisplay: process.env.NEXT_PUBLIC_EMAIL || "[CẬP NHẬT]",
  },

  address: {
    line1: "Gần Đồng Xuân Center",
    line2: "Herzbergstraße area",
    city: "Berlin",
    postal: "10365",
    country: "Deutschland",
    full: "Gần Đồng Xuân Center, Berlin, Deutschland",
    note: "[CẬP NHẬT] địa chỉ đầy đủ trước khi đăng Impressum",
  },

  maps: {
    searchUrl:
      "https://www.google.com/maps/search/?api=1&query=Dong+Xuan+Center+Berlin",
    embedUrl:
      "https://maps.google.com/maps?q=Dong%20Xuan%20Center%20Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  hours: {
    vi: "Thứ 2 – Thứ 7: 10:00 – 19:00 · [CẬP NHẬT]",
    de: "Mo – Sa: 10:00 – 19:00 · [AKTUALISIEREN]",
    en: "Mon – Sat: 10:00 – 19:00 · [UPDATE]",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
    zalo: process.env.NEXT_PUBLIC_ZALO || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK || "",
  },

  whatsappDefaultMessage: {
    vi: "Xin chào ĐỒNG XUÂN MEDIA, tôi muốn được tư vấn về dịch vụ…",
    de: "Hallo DONG XUAN MEDIA, ich möchte mich zu Ihren Leistungen beraten lassen…",
    en: "Hello DONG XUAN MEDIA, I would like advice on your services…",
  },

  brand: {
    red: "#A51D2E",
    redDark: "#6F0F1A",
    gold: "#C4A04A",
    goldLight: "#E4C878",
    ink: "#161210",
    charcoal: "#2A221E",
    warmWhite: "#F3EBE0",
    paper: "#FAF6EE",
    metal: "#A89B8C",
    jade: "#3D5C54",
    lacquer: "#8B1524",
  },

  /** Max upload size in bytes (10 MB) */
  maxUploadBytes: 10 * 1024 * 1024,
  acceptedUploadTypes: [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/zip",
    "application/x-zip-compressed",
  ] as const,
  acceptedUploadExtensions: [".pdf", ".jpg", ".jpeg", ".png", ".svg", ".docx", ".zip"],
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];

export function getWhatsAppUrl(locale: SiteLocale = "vi") {
  const num = siteConfig.contact.whatsapp;
  if (!num) return null;
  const text = encodeURIComponent(siteConfig.whatsappDefaultMessage[locale]);
  return `https://wa.me/${num}?text=${text}`;
}

export function getTelHref() {
  const p = siteConfig.contact.phone;
  return p ? `tel:${p}` : null;
}

export function getMailtoHref() {
  const e = siteConfig.contact.email;
  return e ? `mailto:${e}` : null;
}

// Backwards-compatible alias used by existing components
export const SITE = {
  name: siteConfig.name,
  nameEn: siteConfig.nameEn,
  phone: siteConfig.contact.phone,
  phoneDisplay: siteConfig.contact.phoneDisplay,
  email: siteConfig.contact.emailDisplay,
  whatsapp: siteConfig.contact.whatsapp,
  mapsUrl: siteConfig.maps.searchUrl,
  mapsEmbed: siteConfig.maps.embedUrl,
  address: {
    street: siteConfig.address.line1,
    area: "Đồng Xuân Center",
    city: siteConfig.address.city,
    postal: siteConfig.address.postal,
    country: siteConfig.address.country,
    full: siteConfig.address.full,
  },
  hours: siteConfig.hours,
  social: siteConfig.social,
  tagline: {
    vi: "Thiết kế hình ảnh. Kết nối khách hàng. Phát triển doanh nghiệp.",
    de: "Visuelle Gestaltung. Kunden verbinden. Unternehmen entwickeln.",
    en: "Design visuals. Connect customers. Grow businesses.",
  },
  description: {
    vi: "Giải pháp thiết kế, in ấn, marketing, dịch thuật và quảng cáo dành cho doanh nghiệp Việt tại Đức.",
    de: "Design-, Druck-, Marketing-, Übersetzungs- und Werbelösungen für vietnamesische Unternehmen in Deutschland.",
    en: "Design, print, marketing, translation and advertising solutions for Vietnamese businesses in Germany.",
  },
} as const;

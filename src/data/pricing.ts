import type { PricingPackage, PricingRow } from "@/types";

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    slug: "starter",
    name: { vi: "Starter", de: "Starter", en: "Starter" },
    price: { vi: "Liên hệ báo giá", de: "Angebot anfragen", en: "Request quote" },
    unit: { vi: "", de: "", en: "" },
    description: {
      vi: "Phù hợp doanh nghiệp mới cần bộ nhận diện khởi đầu.",
      de: "Ideal für neue Unternehmen mit Basis-Auftritt.",
      en: "Ideal for new businesses needing a starter identity.",
    },
    features: {
      vi: [
        "Logo cơ bản",
        "Card visit",
        "Flyer",
        "Bộ file bàn giao (PDF / PNG / JPG)",
        "2 vòng chỉnh sửa",
      ],
      de: [
        "Basis-Logo",
        "Visitenkarte",
        "Flyer",
        "Übergabe-Dateien (PDF / PNG / JPG)",
        "2 Korrekturrunden",
      ],
      en: [
        "Basic logo",
        "Business card",
        "Flyer",
        "Handover files (PDF / PNG / JPG)",
        "2 revision rounds",
      ],
    },
    cta: { vi: "Chọn Starter", de: "Starter wählen", en: "Choose Starter" },
  },
  {
    id: "business",
    slug: "business",
    popular: true,
    name: { vi: "Business", de: "Business", en: "Business" },
    price: { vi: "Từ 490€", de: "Ab 490€", en: "From 490€" },
    unit: { vi: " · mẫu tham khảo", de: " · Richtwert", en: " · sample rate" },
    description: {
      vi: "Phù hợp doanh nghiệp đang hoạt động — branding + in ấn + digital setup.",
      de: "Für laufende Betriebe — Branding + Druck + Digital-Setup.",
      en: "For active businesses — branding + print + digital setup.",
    },
    features: {
      vi: [
        "Bộ nhận diện",
        "Thiết kế in ấn (menu / flyer / card)",
        "Google Business Profile",
        "Social media setup",
        "Landing page",
        "3 vòng chỉnh sửa",
      ],
      de: [
        "Corporate Identity",
        "Druckdesign (Menü / Flyer / Karte)",
        "Google Business Profile",
        "Social-Media-Setup",
        "Landingpage",
        "3 Korrekturrunden",
      ],
      en: [
        "Brand identity set",
        "Print design (menu / flyer / card)",
        "Google Business Profile",
        "Social media setup",
        "Landing page",
        "3 revision rounds",
      ],
    },
    cta: { vi: "Chọn Business", de: "Business wählen", en: "Choose Business" },
  },
  {
    id: "premium",
    slug: "premium",
    name: { vi: "Premium", de: "Premium", en: "Premium" },
    price: { vi: "Liên hệ báo giá", de: "Angebot anfragen", en: "Request quote" },
    unit: { vi: "", de: "", en: "" },
    description: {
      vi: "Giải pháp toàn diện: branding, website, marketing và hỗ trợ định kỳ.",
      de: "Rundum: Branding, Website, Marketing und laufender Support.",
      en: "Full stack: branding, website, marketing and ongoing support.",
    },
    features: {
      vi: [
        "Branding đầy đủ",
        "Website đa ngôn ngữ",
        "Marketing & nội dung MXH",
        "Quảng cáo (creative + setup)",
        "Hỗ trợ định kỳ",
        "Account manager",
      ],
      de: [
        "Volles Branding",
        "Mehrsprachige Website",
        "Marketing & Social Content",
        "Werbung (Creative + Setup)",
        "Laufender Support",
        "Account Manager",
      ],
      en: [
        "Full branding",
        "Multilingual website",
        "Marketing & social content",
        "Advertising (creative + setup)",
        "Ongoing support",
        "Account manager",
      ],
    },
    cta: { vi: "Chọn Premium", de: "Premium wählen", en: "Choose Premium" },
  },
];

/** Itemised sample rates — edit freely in this file */
export const pricingRows: PricingRow[] = [
  {
    id: "d-logo",
    group: "design",
    name: { vi: "Logo cơ bản", de: "Basis-Logo", en: "Basic logo" },
    price: { vi: "Từ 149€", de: "Ab 149€", en: "From 149€" },
  },
  {
    id: "d-ci",
    group: "design",
    name: { vi: "Bộ nhận diện", de: "Corporate Identity", en: "Brand identity set" },
    price: { vi: "Từ 490€", de: "Ab 490€", en: "From 490€" },
  },
  {
    id: "d-menu",
    group: "design",
    name: { vi: "Thiết kế menu", de: "Menü-Design", en: "Menu design" },
    price: { vi: "Từ 249€", de: "Ab 249€", en: "From 249€" },
  },
  {
    id: "p-card",
    group: "print",
    name: { vi: "In card visit (từ 100 sp)", de: "Visitenkarten (ab 100)", en: "Business cards (from 100)" },
    price: { vi: "Liên hệ", de: "Auf Anfrage", en: "On request" },
    note: {
      vi: "Phụ thuộc giấy & gia công",
      de: "Je nach Papier & Veredelung",
      en: "Depends on stock & finish",
    },
  },
  {
    id: "p-flyer",
    group: "print",
    name: { vi: "In flyer A5", de: "Flyer A5 Druck", en: "A5 flyer print" },
    price: { vi: "Từ … € / số lượng", de: "Ab … € / Auflage", en: "From … € / run" },
  },
  {
    id: "m-social",
    group: "marketing",
    name: { vi: "Quản lý social / tháng", de: "Social / Monat", en: "Social / month" },
    price: { vi: "Từ 390€", de: "Ab 390€", en: "From 390€" },
  },
  {
    id: "m-gbp",
    group: "marketing",
    name: { vi: "Google Business setup", de: "Google Business Setup", en: "Google Business setup" },
    price: { vi: "Từ 120€", de: "Ab 120€", en: "From 120€" },
  },
  {
    id: "t-page",
    group: "translation",
    name: { vi: "Dịch thuật (trang / từ)", de: "Übersetzung (Seite / Wort)", en: "Translation (page / word)" },
    price: { vi: "Liên hệ báo giá", de: "Angebot anfragen", en: "Request quote" },
    note: {
      vi: "Theo loại tài liệu & deadline",
      de: "Je nach Textart & Frist",
      en: "By document type & deadline",
    },
  },
  {
    id: "w-landing",
    group: "website",
    name: { vi: "Landing page", de: "Landingpage", en: "Landing page" },
    price: { vi: "Từ 890€", de: "Ab 890€", en: "From 890€" },
  },
  {
    id: "w-multi",
    group: "website",
    name: { vi: "Website đa ngôn ngữ", de: "Mehrsprachige Website", en: "Multilingual website" },
    price: { vi: "Từ 1.490€", de: "Ab 1.490€", en: "From 1,490€" },
  },
  {
    id: "pkg-starter",
    group: "packages",
    name: { vi: "Gói Starter", de: "Paket Starter", en: "Starter package" },
    price: { vi: "Liên hệ", de: "Auf Anfrage", en: "On request" },
  },
  {
    id: "pkg-business",
    group: "packages",
    name: { vi: "Gói Business", de: "Paket Business", en: "Business package" },
    price: { vi: "Từ 490€", de: "Ab 490€", en: "From 490€" },
  },
  {
    id: "pkg-premium",
    group: "packages",
    name: { vi: "Gói Premium", de: "Paket Premium", en: "Premium package" },
    price: { vi: "Liên hệ", de: "Auf Anfrage", en: "On request" },
  },
];

export const pricingGroupLabels = {
  design: { vi: "Thiết kế", de: "Design", en: "Design" },
  print: { vi: "In ấn", de: "Druck", en: "Print" },
  marketing: { vi: "Marketing", de: "Marketing", en: "Marketing" },
  translation: { vi: "Dịch thuật", de: "Übersetzung", en: "Translation" },
  website: { vi: "Website", de: "Website", en: "Website" },
  packages: { vi: "Gói doanh nghiệp", de: "Geschäftspakete", en: "Business packages" },
} as const;

export const pricingNotes = {
  vi: "Giá thực tế phụ thuộc vào khối lượng, thời gian, vật liệu và yêu cầu cụ thể. Các mức “Từ … €” là dữ liệu mẫu dễ chỉnh trong file data.",
  de: "Endpreise hängen von Umfang, Zeit, Material und Anforderungen ab. „Ab … €“ sind editierbare Richtwerte in den Datendateien.",
  en: "Final prices depend on volume, timeline, materials and requirements. “From … €” values are sample rates editable in data files.",
};

/**
 * Central image registry for the visual redesign.
 * Swap paths when real brand photography is available.
 */
export type HeroSlide = {
  src: string;
  alt: { vi: string; de: string; en: string };
  label: { vi: string; de: string; en: string };
};

/** Full-bleed hero slideshow — Hoi An & Hanoi night streets + brand mood */
export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hoian-night-1.jpg",
    alt: {
      vi: "Phố cổ Hội An về đêm với đèn lồng",
      de: "Hoi An Altstadt bei Nacht mit Laternen",
      en: "Hoi An ancient town at night with lanterns",
    },
    label: { vi: "Hội An · Đêm", de: "Hoi An · Nacht", en: "Hoi An · Night" },
  },
  {
    src: "/images/hoian-night-2.jpg",
    alt: {
      vi: "Hẻm phố Hội An lung linh đèn lồng",
      de: "Laternen-Gasse in Hoi An",
      en: "Lantern alley in Hoi An",
    },
    label: {
      vi: "Hội An · Phố lồng đèn",
      de: "Hoi An · Laternenstraße",
      en: "Hoi An · Lantern street",
    },
  },
  {
    src: "/images/hoian-night-3.jpg",
    alt: {
      vi: "Sông Hội An đêm với đèn hoa đăng",
      de: "Hoi An Fluss bei Nacht mit Laternen",
      en: "Hoi An river at night with floating lanterns",
    },
    label: {
      vi: "Hội An · Sông Hoài",
      de: "Hoi An · Fluss",
      en: "Hoi An · Riverside",
    },
  },
  {
    src: "/images/hanoi-night-1.jpg",
    alt: {
      vi: "Phố cổ Hà Nội về đêm",
      de: "Hanoi Altstadt bei Nacht",
      en: "Hanoi Old Quarter at night",
    },
    label: {
      vi: "Hà Nội · Phố cổ",
      de: "Hanoi · Altstadt",
      en: "Hanoi · Old Quarter",
    },
  },
  {
    src: "/images/hanoi-night-2.jpg",
    alt: {
      vi: "Ngã tư phố cổ Hà Nội lung linh ánh đèn",
      de: "Belebte Kreuzung in Hanois Altstadt bei Nacht",
      en: "Busy Hanoi Old Quarter intersection at night",
    },
    label: {
      vi: "Hà Nội · Đêm phố",
      de: "Hanoi · Nachtstraße",
      en: "Hanoi · Night street",
    },
  },
  {
    src: "/images/hero-agency.jpg",
    alt: {
      vi: "Không gian sáng tạo Đồng Xuân Media — in ấn, biển hiệu và thiết kế",
      de: "Kreativraum Dong Xuan Media — Druck, Schilder und Design",
      en: "Dong Xuan Media creative studio — print, signage and design",
    },
    label: {
      vi: "Berlin · Studio",
      de: "Berlin · Studio",
      en: "Berlin · Studio",
    },
  },
];

export const media = {
  hero: {
    src: heroSlides[0].src,
    alt: heroSlides[0].alt,
  },
  berlin: {
    src: "/images/berlin-market.jpg",
    alt: {
      vi: "Không khí đô thị châu Á tại Berlin về đêm",
      de: "Asiatisch-urbanes Berlin bei Nacht",
      en: "Asian urban atmosphere in Berlin at night",
    },
  },
  print: {
    src: "/images/print-materials.jpg",
    alt: {
      vi: "Vật liệu in ấn cao cấp: card visit, flyer, menu",
      de: "Premium-Druckmaterialien: Karten, Flyer, Menüs",
      en: "Premium print materials: cards, flyers, menus",
    },
  },
  signage: {
    src: "/images/signage-night.jpg",
    alt: {
      vi: "Biển hiệu cửa hàng ánh sáng đỏ vàng",
      de: "Ladenschild mit rotem und goldenem Licht",
      en: "Storefront signage with red and gold light",
    },
  },
  pattern: {
    src: "/images/pattern-dx.jpg",
    alt: {
      vi: "Mô típ hình học thương hiệu đỏ và vàng",
      de: "Geometrisches Markenmotiv in Rot und Gold",
      en: "Geometric brand motif in red and gold",
    },
  },
  marketing: {
    src: "/images/marketing-desk.jpg",
    alt: {
      vi: "Bàn làm việc marketing digital và social",
      de: "Digital-Marketing-Arbeitsplatz",
      en: "Digital marketing workspace",
    },
  },
  menu: {
    src: "/images/menu-mockup.jpg",
    alt: {
      vi: "Mockup menu nhà hàng cao cấp",
      de: "Premium Restaurant-Menü-Mockup",
      en: "Premium restaurant menu mockup",
    },
  },
  digital: {
    src: "/images/digital-studio.jpg",
    alt: {
      vi: "Mockup website đa thiết bị trong studio",
      de: "Website-Mockup auf mehreren Geräten",
      en: "Multi-device website mockup in studio",
    },
  },
} as const;

export const serviceImages: Record<string, { src: string; accent: string }> = {
  branding: { src: media.pattern.src, accent: "#C8101E" },
  print: { src: media.print.src, accent: "#D9A12E" },
  marketing: { src: media.marketing.src, accent: "#C8101E" },
  translation: { src: media.menu.src, accent: "#D9A12E" },
  ads: { src: media.signage.src, accent: "#C8101E" },
  digital: { src: media.digital.src, accent: "#D9A12E" },
};

export const portfolioImages: Record<string, string> = {
  "menu-vn-restaurant": media.menu.src,
  "nail-branding": media.pattern.src,
  "store-signage": media.signage.src,
  "community-flyer": media.print.src,
  "restaurant-website": media.digital.src,
  "social-campaign": media.marketing.src,
  "business-catalogue": media.print.src,
  "asian-food-packaging": media.pattern.src,
};

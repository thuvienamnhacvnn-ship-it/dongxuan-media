import type { PortfolioItem } from "@/types";

/** Demo portfolio — replace images & copy with real case studies before go-live. */
export const portfolio: PortfolioItem[] = [
  {
    id: "menu-vn-restaurant",
    slug: "menu-nha-hang-viet",
    category: "print",
    year: "2025",
    accent: "#C8101E",
    featured: true,
    hasBeforeAfter: true,
    title: {
      vi: "Menu nhà hàng Việt",
      de: "Menü für vietnamesisches Restaurant",
      en: "Vietnamese restaurant menu",
    },
    client: {
      vi: "Nhà hàng Việt · Berlin (demo)",
      de: "Vietnamesisches Restaurant · Berlin (Demo)",
      en: "Vietnamese restaurant · Berlin (demo)",
    },
    industry: {
      vi: "F&B / Nhà hàng",
      de: "Gastronomie",
      en: "F&B / Restaurant",
    },
    servicesDone: {
      vi: ["Thiết kế menu", "Dịch thuật DE", "In ấn"],
      de: ["Menü-Design", "Übersetzung DE", "Druck"],
      en: ["Menu design", "DE translation", "Print"],
    },
    description: {
      vi: "Menu song ngữ Việt–Đức, bố cục editorial hiện đại, nhóm món rõ và bảng giá dễ quét — in trên giấy mỹ thuật.",
      de: "Zweisprachiges Menü VI–DE, modernes Editorial-Layout, klare Kategorien und scannbare Preise — Kunstdruckpapier.",
      en: "Bilingual VI–DE menu, modern editorial layout, clear groups and scannable prices — art paper print.",
    },
    results: {
      vi: "Giảm câu hỏi về món từ khách Đức; file chuẩn in sẵn sàng tái bản theo mùa.",
      de: "Weniger Rückfragen deutscher Gäste; druckfertige Dateien für saisonale Neuauflagen.",
      en: "Fewer questions from German guests; print-ready files for seasonal reprints.",
    },
    tags: {
      vi: ["Menu", "In ấn", "Song ngữ", "F&B"],
      de: ["Menü", "Druck", "Zweisprachig", "Gastro"],
      en: ["Menu", "Print", "Bilingual", "F&B"],
    },
  },
  {
    id: "nail-branding",
    slug: "branding-tiem-nail-berlin",
    category: "branding",
    year: "2025",
    accent: "#D9A12E",
    featured: true,
    title: {
      vi: "Branding tiệm nail Berlin",
      de: "Branding Nagelstudio Berlin",
      en: "Nail salon branding in Berlin",
    },
    client: {
      vi: "Tiệm nail · Berlin (demo)",
      de: "Nagelstudio · Berlin (Demo)",
      en: "Nail salon · Berlin (demo)",
    },
    industry: {
      vi: "Làm đẹp / Nail",
      de: "Beauty / Nails",
      en: "Beauty / Nails",
    },
    servicesDone: {
      vi: ["Logo", "CI", "Biển hiệu", "Social templates"],
      de: ["Logo", "CI", "Schild", "Social Templates"],
      en: ["Logo", "CI", "Signage", "Social templates"],
    },
    description: {
      vi: "Nhận diện thương hiệu: logo, bảng màu, card visit, bảng giá, template Instagram và biển hiệu cửa hàng.",
      de: "Markenaufbau: Logo, Farben, Visitenkarten, Preisliste, Instagram-Templates und Ladenschild.",
      en: "Brand system: logo, colours, cards, price list, Instagram templates and storefront sign.",
    },
    results: {
      vi: "Diện mạo đồng bộ từ biển hiệu đến story; dễ đặt lịch qua visual rõ ràng.",
      de: "Konsistenter Auftritt vom Schild bis zur Story; klarere Buchungswahrnehmung.",
      en: "Consistent look from sign to stories; clearer booking perception.",
    },
    tags: {
      vi: ["Logo", "CI", "Social", "Biển hiệu"],
      de: ["Logo", "CI", "Social", "Schild"],
      en: ["Logo", "CI", "Social", "Signage"],
    },
  },
  {
    id: "store-signage",
    slug: "bien-hieu-cua-hang",
    category: "ads",
    year: "2024",
    accent: "#C8101E",
    featured: true,
    hasBeforeAfter: true,
    title: {
      vi: "Biển hiệu cửa hàng",
      de: "Ladenschilder",
      en: "Storefront signage",
    },
    client: {
      vi: "Retail · Đồng Xuân area (demo)",
      de: "Retail · Dong Xuan (Demo)",
      en: "Retail · Dong Xuan area (demo)",
    },
    industry: {
      vi: "Bán lẻ",
      de: "Einzelhandel",
      en: "Retail",
    },
    servicesDone: {
      vi: ["Thiết kế biển", "Decal", "Tư vấn vật liệu"],
      de: ["Schild-Design", "Folie", "Materialberatung"],
      en: ["Sign design", "Vinyl", "Material advice"],
    },
    description: {
      vi: "Biển LED / lightbox và decal cửa kính — dễ đọc từ xa, phù hợp không khí đô thị quanh Đồng Xuân Center.",
      de: "LED/Lightbox und Fensterfolie — aus der Distanz lesbar, urban passend zum Dong-Xuan-Umfeld.",
      en: "LED/lightbox and window vinyl — legible from distance, urban fit for the Dong Xuan area.",
    },
    results: {
      vi: "Tăng độ nhận diện mặt tiền; contrast đạt chuẩn nhìn ban ngày.",
      de: "Höhere Fassaden-Erkennbarkeit; Kontrast für Tageslicht optimiert.",
      en: "Stronger storefront recognition; contrast optimised for daylight.",
    },
    tags: {
      vi: ["Biển hiệu", "LED", "Decal", "Retail"],
      de: ["Schild", "LED", "Folie", "Retail"],
      en: ["Signage", "LED", "Vinyl", "Retail"],
    },
  },
  {
    id: "community-flyer",
    slug: "flyer-su-kien-cong-dong",
    category: "print",
    year: "2025",
    accent: "#D9A12E",
    featured: true,
    title: {
      vi: "Flyer sự kiện cộng đồng",
      de: "Community-Event-Flyer",
      en: "Community event flyer",
    },
    client: {
      vi: "Sự kiện cộng đồng · Berlin (demo)",
      de: "Community-Event · Berlin (Demo)",
      en: "Community event · Berlin (demo)",
    },
    industry: {
      vi: "Sự kiện / Cộng đồng",
      de: "Event / Community",
      en: "Event / Community",
    },
    servicesDone: {
      vi: ["Thiết kế flyer", "Poster", "In số lượng lớn"],
      de: ["Flyer-Design", "Poster", "Großauflage"],
      en: ["Flyer design", "Poster", "Large print run"],
    },
    description: {
      vi: "Bộ flyer và poster sự kiện Tết / hội chợ — thông tin đa ngôn ngữ, màu rực rỡ, giao nhanh trong Berlin.",
      de: "Flyer- und Poster-Set für Tết/Messen — mehrsprachig, farbenfroh, schnelle Berlin-Lieferung.",
      en: "Flyer and poster set for Tết/fairs — multilingual, vibrant, fast Berlin delivery.",
    },
    tags: {
      vi: ["Flyer", "Poster", "Sự kiện"],
      de: ["Flyer", "Poster", "Event"],
      en: ["Flyer", "Poster", "Event"],
    },
  },
  {
    id: "restaurant-website",
    slug: "website-nha-hang",
    category: "digital",
    year: "2025",
    accent: "#C8101E",
    featured: true,
    title: {
      vi: "Website nhà hàng",
      de: "Restaurant-Website",
      en: "Restaurant website",
    },
    client: {
      vi: "Nhà hàng · Berlin (demo)",
      de: "Restaurant · Berlin (Demo)",
      en: "Restaurant · Berlin (demo)",
    },
    industry: {
      vi: "F&B",
      de: "Gastronomie",
      en: "F&B",
    },
    servicesDone: {
      vi: ["Website VI–DE–EN", "Online menu", "Maps / SEO cơ bản"],
      de: ["Website VI–DE–EN", "Online-Menü", "Maps / Basis-SEO"],
      en: ["VI–DE–EN website", "Online menu", "Maps / basic SEO"],
    },
    description: {
      vi: "Website đa ngôn ngữ: menu online, gallery, đặt bàn và Google Maps — tối ưu mobile cho khách Berlin.",
      de: "Mehrsprachige Website: Online-Menü, Galerie, Reservierung und Maps — mobil für Berlin.",
      en: "Multilingual site: online menu, gallery, reservations and Maps — mobile-first for Berlin.",
    },
    results: {
      vi: "Khách tìm thấy giờ mở cửa và menu trên điện thoại trong vài giây.",
      de: "Gäste finden Zeiten und Menü in Sekunden auf dem Handy.",
      en: "Guests find hours and menu on mobile in seconds.",
    },
    tags: {
      vi: ["Website", "Đa ngôn ngữ", "F&B"],
      de: ["Website", "Mehrsprachig", "Gastro"],
      en: ["Website", "Multilingual", "F&B"],
    },
  },
  {
    id: "social-campaign",
    slug: "social-media-campaign",
    category: "marketing",
    year: "2025",
    accent: "#D9A12E",
    featured: true,
    title: {
      vi: "Social media campaign",
      de: "Social-Media-Kampagne",
      en: "Social media campaign",
    },
    client: {
      vi: "Thương hiệu F&B · Berlin (demo)",
      de: "F&B-Marke · Berlin (Demo)",
      en: "F&B brand · Berlin (demo)",
    },
    industry: {
      vi: "F&B / Marketing",
      de: "Gastro / Marketing",
      en: "F&B / Marketing",
    },
    servicesDone: {
      vi: ["Content plan", "Creative ads", "Meta Ads setup"],
      de: ["Content-Plan", "Ad Creatives", "Meta-Ads-Setup"],
      en: ["Content plan", "Ad creatives", "Meta ads setup"],
    },
    description: {
      vi: "Chiến dịch 4 tuần: visual feed, story templates, bộ ads A/B cho món signature và giờ thấp điểm.",
      de: "4-Wochen-Kampagne: Feed-Visuals, Story-Templates, A/B-Ads für Signature-Gerichte und Nebenzeiten.",
      en: "4-week campaign: feed visuals, story templates, A/B ads for signature dishes and off-peak hours.",
    },
    results: {
      vi: "Tăng tương tác và lưu lượng ghé quán vào khung giờ khuyến mãi (số liệu demo).",
      de: "Mehr Interaktion und Laufkundschaft in Aktionszeiten (Demo-Kennzahlen).",
      en: "Higher engagement and walk-ins in promo hours (demo metrics).",
    },
    tags: {
      vi: ["Social", "Ads", "Campaign"],
      de: ["Social", "Ads", "Kampagne"],
      en: ["Social", "Ads", "Campaign"],
    },
  },
  {
    id: "business-catalogue",
    slug: "catalogue-doanh-nghiep",
    category: "print",
    year: "2024",
    accent: "#A5A7AD",
    featured: true,
    title: {
      vi: "Catalogue doanh nghiệp",
      de: "Unternehmenskatalog",
      en: "Business catalogue",
    },
    client: {
      vi: "Doanh nghiệp dịch vụ · Berlin (demo)",
      de: "Dienstleister · Berlin (Demo)",
      en: "Service company · Berlin (demo)",
    },
    industry: {
      vi: "B2B / Dịch vụ",
      de: "B2B / Services",
      en: "B2B / Services",
    },
    servicesDone: {
      vi: ["Layout catalogue", "Dịch DE", "In offset"],
      de: ["Katalog-Layout", "Übersetzung DE", "Offsetdruck"],
      en: ["Catalogue layout", "DE translation", "Offset print"],
    },
    description: {
      vi: "Catalogue 16–24 trang: giới thiệu dịch vụ, case study ngắn, bảng giá tham khảo — in offset giấy mỹ thuật.",
      de: "16–24 Seiten: Leistungen, kurze Cases, Richtpreise — Offset auf Kunstpapier.",
      en: "16–24 pages: services, short cases, reference pricing — offset on art paper.",
    },
    tags: {
      vi: ["Catalogue", "B2B", "In ấn"],
      de: ["Katalog", "B2B", "Druck"],
      en: ["Catalogue", "B2B", "Print"],
    },
  },
  {
    id: "asian-food-packaging",
    slug: "bao-bi-thuc-pham-chau-a",
    category: "branding",
    year: "2025",
    accent: "#C8101E",
    featured: true,
    title: {
      vi: "Bao bì thực phẩm châu Á",
      de: "Asiatische Lebensmittelverpackung",
      en: "Asian food packaging",
    },
    client: {
      vi: "Thương hiệu thực phẩm · DE (demo)",
      de: "Lebensmittelmarke · DE (Demo)",
      en: "Food brand · DE (demo)",
    },
    industry: {
      vi: "Thực phẩm / FMCG",
      de: "Lebensmittel / FMCG",
      en: "Food / FMCG",
    },
    servicesDone: {
      vi: ["Packaging design", "Tem nhãn", "File in"],
      de: ["Packaging-Design", "Etiketten", "Druckdaten"],
      en: ["Packaging design", "Labels", "Print files"],
    },
    description: {
      vi: "Hệ tem nhãn và bao bì: bản sắc châu Á hiện đại, thông tin DE rõ, barcode/safe zone đạt chuẩn in.",
      de: "Etiketten- und Verpackungssystem: moderne asiatische Identität, klare DE-Infos, druckkonforme Codes/Safe Zones.",
      en: "Label and packaging system: modern Asian identity, clear DE info, print-safe codes and zones.",
    },
    results: {
      vi: "Nhận diện kệ hàng tốt hơn; file sẵn cho nhiều SKU.",
      de: "Bessere Regalerkennbarkeit; Dateien für mehrere SKUs.",
      en: "Stronger shelf recognition; files ready for multiple SKUs.",
    },
    tags: {
      vi: ["Packaging", "Tem nhãn", "FMCG"],
      de: ["Packaging", "Etikett", "FMCG"],
      en: ["Packaging", "Label", "FMCG"],
    },
  },
];

export const portfolioFilters = [
  { id: "all", label: { vi: "Tất cả", de: "Alle", en: "All" } },
  { id: "branding", label: { vi: "Thiết kế", de: "Design", en: "Design" } },
  { id: "print", label: { vi: "In ấn", de: "Druck", en: "Print" } },
  { id: "marketing", label: { vi: "Marketing", de: "Marketing", en: "Marketing" } },
  { id: "ads", label: { vi: "Quảng cáo", de: "Werbung", en: "Advertising" } },
  { id: "digital", label: { vi: "Website", de: "Website", en: "Website" } },
];

export function getFeaturedPortfolio() {
  return portfolio.filter((p) => p.featured);
}

export function getPortfolioBySlug(slug: string) {
  return portfolio.find((p) => p.slug === slug);
}

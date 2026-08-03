import type { LocalizedString } from "@/types";

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readMinutes: number;
  title: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedString[];
  tags: LocalizedString;
}

export const blogCategories = {
  design: { vi: "Thiết kế", de: "Design", en: "Design" },
  marketing: { vi: "Marketing", de: "Marketing", en: "Marketing" },
  print: { vi: "In ấn", de: "Druck", en: "Print" },
  digital: { vi: "Digital", de: "Digital", en: "Digital" },
  business: { vi: "Kinh doanh", de: "Business", en: "Business" },
} as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "thiet-ke-menu-nha-hang-viet-tai-duc",
    category: "design",
    date: "2025-11-12",
    readMinutes: 6,
    title: {
      vi: "Cách thiết kế menu hiệu quả cho nhà hàng Việt tại Đức",
      de: "So gestalten Sie ein wirksames Menü für vietnamesische Restaurants in Deutschland",
      en: "How to design an effective menu for Vietnamese restaurants in Germany",
    },
    excerpt: {
      vi: "Menu song ngữ, phân nhóm món rõ, hình ảnh vừa đủ và bảng giá dễ quét — những nguyên tắc giúp khách Đức và khách Việt đều đặt món nhanh hơn.",
      de: "Zweisprachiges Menü, klare Kategorien, dosierte Bilder und scannbare Preise — damit deutsche und vietnamesische Gäste schneller bestellen.",
      en: "Bilingual layout, clear categories, balanced imagery and scannable prices help German and Vietnamese guests order faster.",
    },
    body: [
      {
        vi: "Menu nhà hàng Việt tại Đức thường phải phục vụ hai nhóm: khách Việt quen món và khách Đức cần mô tả rõ ràng. Thiết kế tốt không chỉ đẹp — nó giảm câu hỏi lặp lại và tăng giá trị trung bình mỗi bill.",
        de: "Ein Menü in Deutschland bedient oft zwei Gruppen: vietnamesische Gäste, die Gerichte kennen, und deutsche Gäste, die klare Beschreibungen brauchen. Gutes Design senkt Rückfragen und hebt den Warenkorb.",
        en: "Menus in Germany often serve two groups: Vietnamese guests who know the dishes and German guests who need clear descriptions. Good design reduces repeated questions and lifts average ticket size.",
      },
      {
        vi: "Nên ưu tiên: (1) tên món VI + DE, (2) mô tả ngắn 1 dòng, (3) nhóm theo khai vị / phở / cơm / đồ nướng, (4) đánh dấu món signature, (5) ảnh món chỉ cho 4–6 món chủ lực để tránh rối.",
        de: "Priorisieren Sie: (1) Name VI + DE, (2) eine Zeile Beschreibung, (3) Gruppen Vorspeise / Pho / Reis / Grill, (4) Signature-Markierung, (5) Fotos nur für 4–6 Hero-Gerichte.",
        en: "Prioritise: (1) VI + DE names, (2) one-line descriptions, (3) groups for starters / pho / rice / grill, (4) signature markers, (5) photos only for 4–6 hero dishes.",
      },
      {
        vi: "Chất liệu in: giấy dày chống ẩm cho quán đông; laminate nếu cần lau thường xuyên. File PDF in chuẩn CMYK, bleed 3 mm — chúng tôi kiểm tra file trước khi in.",
        de: "Material: kräftiges Papier gegen Feuchtigkeit; Laminat bei häufigem Abwischen. Druck-PDF in CMYK mit 3 mm Beschnitt — wir prüfen Dateien vor dem Druck.",
        en: "Materials: sturdy stock for busy rooms; laminate if menus are wiped often. Print-ready PDF in CMYK with 3 mm bleed — we check files before printing.",
      },
    ],
    tags: {
      vi: "Menu, F&B, In ấn, Song ngữ",
      de: "Menü, Gastronomie, Druck, Zweisprachig",
      en: "Menu, F&B, Print, Bilingual",
    },
  },
  {
    slug: "google-business-profile-quan-trong",
    category: "marketing",
    date: "2025-10-28",
    readMinutes: 5,
    title: {
      vi: "Google Business Profile quan trọng thế nào với cửa hàng Việt tại Berlin?",
      de: "Wie wichtig ist Google Business Profile für vietnamesische Geschäfte in Berlin?",
      en: "Why Google Business Profile matters for Vietnamese shops in Berlin",
    },
    excerpt: {
      vi: "Khi khách tìm “phở gần tôi” hoặc “nail Berlin Lichtenberg”, hồ sơ Google là mặt tiền số của bạn — ảnh, giờ mở cửa, review và nút gọi.",
      de: "Wenn Gäste „Pho in der Nähe“ suchen, ist Ihr Google-Profil die digitale Schaufensterfront — Fotos, Öffnungszeiten, Bewertungen, Anruf-Button.",
      en: "When guests search “pho near me”, your Google profile is your digital storefront — photos, hours, reviews and call buttons.",
    },
    body: [
      {
        vi: "Google Business Profile (GBP) quyết định bạn có xuất hiện trên bản đồ và gói local pack hay không. Với cửa hàng quanh Đồng Xuân Center, cạnh tranh local rất cao — mô tả và ảnh chuẩn giúp bạn nổi bật.",
        de: "GBP entscheidet, ob Sie in Maps und im Local Pack erscheinen. Rund ums Dong Xuan Center ist der Wettbewerb hoch — klare Texte und Fotos helfen.",
        en: "GBP decides if you show on Maps and the local pack. Around Dong Xuan Center competition is high — clear copy and photos help you stand out.",
      },
      {
        vi: "Checklist tối thiểu: đúng category, giờ mở cửa cập nhật, ảnh menu/cửa hàng, trả lời review (VI hoặc DE), nút WhatsApp/website. Chúng tôi hỗ trợ setup và tối ưu local SEO cơ bản.",
        de: "Mindest-Checkliste: richtige Kategorie, aktuelle Zeiten, Menü-/Ladenfotos, Review-Antworten, WhatsApp/Website-Link. Wir helfen bei Setup und Basis-Local-SEO.",
        en: "Minimum checklist: correct category, updated hours, menu/store photos, review replies, WhatsApp/website links. We help with setup and basic local SEO.",
      },
    ],
    tags: {
      vi: "Google, Local SEO, Berlin",
      de: "Google, Local SEO, Berlin",
      en: "Google, Local SEO, Berlin",
    },
  },
  {
    slug: "loi-thuong-gap-bien-hieu-duc",
    category: "design",
    date: "2025-09-15",
    readMinutes: 5,
    title: {
      vi: "Những lỗi thường gặp khi làm biển hiệu tại Đức",
      de: "Häufige Fehler bei Schildern in Deutschland",
      en: "Common mistakes with storefront signage in Germany",
    },
    excerpt: {
      vi: "Chữ quá nhỏ, contrast yếu, bỏ quên quy định tòa nhà, file RGB — các lỗi khiến biển đẹp trên màn hình nhưng kém hiệu quả trên phố Berlin.",
      de: "Zu kleine Schrift, schwacher Kontrast, fehlende Hausregeln, RGB-Dateien — Fehler, die Schilder am Bildschirm gut, auf der Straße schwach machen.",
      en: "Type too small, weak contrast, ignored building rules, RGB files — mistakes that look fine on screen but fail on Berlin streets.",
    },
    body: [
      {
        vi: "Biển hiệu phải đọc được từ khoảng cách đi bộ và xe. Ưu tiên contrast cao (đỏ/vàng/đen/trắng), hạn chế font script, kiểm tra quy định của tòa nhà hoặc khu vực trước khi sản xuất.",
        de: "Schilder müssen aus Fuß- und Fahrzeugdistanz lesbar sein. Hoher Kontrast, wenig Script-Fonts, Haus- und Gebietsregeln vor Produktion prüfen.",
        en: "Signs must be legible from walking and driving distance. Prefer high contrast, limit script fonts, check building or area rules before production.",
      },
      {
        vi: "File thiết kế nên ở CMYK hoặc vector; kích thước thật 1:1. Chúng tôi hỗ trợ thiết kế + tư vấn chất liệu (LED, lightbox, decal, alu-dibond).",
        de: "Dateien in CMYK oder Vektor; echte Maßstäbe 1:1. Wir unterstützen Design und Materialberatung (LED, Lightbox, Folie, Alu-Dibond).",
        en: "Files should be CMYK or vector at true 1:1 size. We support design plus material advice (LED, lightbox, vinyl, alu-dibond).",
      },
    ],
    tags: {
      vi: "Biển hiệu, Retail, In ấn",
      de: "Schild, Retail, Druck",
      en: "Signage, Retail, Print",
    },
  },
  {
    slug: "khi-nao-lam-lai-logo",
    category: "business",
    date: "2025-08-20",
    readMinutes: 4,
    title: {
      vi: "Khi nào doanh nghiệp cần làm lại logo?",
      de: "Wann lohnt ein Logo-Relaunch?",
      en: "When should a business redesign its logo?",
    },
    excerpt: {
      vi: "Đổi địa điểm, mở chi nhánh, muốn hút khách Đức, hoặc logo mờ khi in nhỏ — đây là lúc cân nhắc rebrand có kiểm soát, không nhất thiết thay toàn bộ.",
      de: "Umzug, neuer Standort, deutsche Zielgruppe oder unscharf im Kleindruck — Gründe für einen kontrollierten Relaunch, nicht zwingend einen Totalumbau.",
      en: "New location, expansion, attracting German customers, or blurry small prints — reasons for a controlled relaunch, not always a full rebrand.",
    },
    body: [
      {
        vi: "Làm lại logo khi: (1) không scale tốt trên card visit/biển hiệu, (2) trông lỗi thời so với đối thủ, (3) đổi định vị (ví dụ từ quán bình dân sang casual fine), (4) thiếu phiên bản đơn sắc.",
        de: "Relaunch, wenn: (1) schlechte Skalierung, (2) veraltet neben Wettbewerbern, (3) neue Positionierung, (4) keine monochrome Variante.",
        en: "Relaunch when: (1) poor scaling, (2) dated vs competitors, (3) new positioning, (4) no monochrome version.",
      },
      {
        vi: "Không cần “đập đi xây lại” nếu chỉ thiếu guideline. Nhiều khách hàng của chúng tôi chỉ cần chỉnh tỷ lệ, font phụ và bộ màu để dùng nhất quán trên social và in ấn.",
        de: "Kein Totalumbau nötig, wenn nur Guidelines fehlen. Oft genügen Proportionen, Sekundärfont und Farbset für Social und Druck.",
        en: "You may not need a full rebuild — sometimes proportions, secondary type and a colour set are enough for consistent social and print use.",
      },
    ],
    tags: {
      vi: "Logo, Branding",
      de: "Logo, Branding",
      en: "Logo, Branding",
    },
  },
  {
    slug: "marketing-tiem-nail-berlin",
    category: "marketing",
    date: "2025-07-30",
    readMinutes: 6,
    title: {
      vi: "Marketing cho tiệm nail tại Berlin",
      de: "Marketing für Nagelstudios in Berlin",
      en: "Marketing for nail salons in Berlin",
    },
    excerpt: {
      vi: "Ảnh trước–sau, Google reviews, Instagram Reels và flyer khu vực — mix thực tế giúp tiệm nail Việt tại Berlin lấp lịch mà không cần quảng cáo đắt đỏ ngay từ đầu.",
      de: "Vorher-Nachher, Google-Reviews, Reels und lokale Flyer — ein realistischer Mix füllt Termine, ohne sofort teure Ads.",
      en: "Before/after shots, Google reviews, Reels and local flyers — a practical mix that fills bookings without expensive ads on day one.",
    },
    body: [
      {
        vi: "Nội dung thắng cuộc ở ngành nail là bằng chứng: nail art rõ nét, ánh sáng ổn định, giá minh bạch. Template story + highlight “Price / Booking / Address” bằng DE–VI rất hữu ích.",
        de: "In der Nail-Branche gewinnen Beweise: klare Nail-Art, stabiles Licht, transparente Preise. Story-Templates und Highlights „Preis / Buchung / Adresse“ auf DE–VI helfen.",
        en: "Nail marketing wins on proof: sharp nail art, consistent light, transparent pricing. Story templates and DE–VI highlights for price / booking / address help.",
      },
      {
        vi: "Gói Business của Đồng Xuân Media thường gồm: nhận diện nhẹ, bảng giá, setup Instagram + Google, flyer khai trương. Quảng cáo Meta có thể thêm khi đã có creative tốt.",
        de: "Unser Business-Paket umfasst oft: leichte CI, Preisliste, Instagram + Google Setup, Eröffnungsflyer. Meta Ads kommen dazu, wenn Creatives sitzen.",
        en: "Our Business package often includes light CI, price list, Instagram + Google setup, opening flyer. Meta ads can follow once creatives are strong.",
      },
    ],
    tags: {
      vi: "Nail, Social, Berlin",
      de: "Nägel, Social, Berlin",
      en: "Nail, Social, Berlin",
    },
  },
  {
    slug: "chuan-bi-file-truoc-khi-in",
    category: "print",
    date: "2025-06-18",
    readMinutes: 5,
    title: {
      vi: "Cách chuẩn bị file trước khi in",
      de: "Druckdaten richtig vorbereiten",
      en: "How to prepare files before printing",
    },
    excerpt: {
      vi: "Bleed, safe zone, CMYK, font outline — checklist ngắn giúp tránh lỗi cắt chữ và màu lệch khi in flyer, menu hay banner.",
      de: "Beschnitt, Sicherheitsabstand, CMYK, Schriften in Pfade — eine kurze Checkliste gegen abgeschnittenen Text und Farbstiche.",
      en: "Bleed, safe zone, CMYK, outlined fonts — a short checklist against cropped text and colour shifts.",
    },
    body: [
      {
        vi: "Luôn để bleed 3 mm, nội dung quan trọng cách mép ≥ 5 mm, chuyển ảnh sang CMYK hoặc để chúng tôi convert có kiểm soát. Font nên embed hoặc outline.",
        de: "Immer 3 mm Beschnitt, wichtige Inhalte ≥ 5 mm vom Rand, Bilder CMYK oder kontrolliert konvertieren. Schriften einbetten oder in Pfade.",
        en: "Always use 3 mm bleed, keep key content ≥ 5 mm from trim, use CMYK or controlled conversion. Embed or outline fonts.",
      },
      {
        vi: "Bạn có thể gửi PDF, AI, PSD, JPG qua form in ấn trên website. Team sẽ kiểm tra file và báo nếu cần chỉnh trước khi đưa máy in.",
        de: "Senden Sie PDF, AI, PSD, JPG über unser Druckformular. Wir prüfen und melden nötige Korrekturen vor dem Druck.",
        en: "Send PDF, AI, PSD or JPG via our print form. We preflight and flag fixes before the press run.",
      },
    ],
    tags: {
      vi: "In ấn, File, Prepress",
      de: "Druck, Datei, Prepress",
      en: "Print, Files, Prepress",
    },
  },
  {
    slug: "website-da-ngon-ngu-doanh-nghiep-viet",
    category: "digital",
    date: "2025-05-05",
    readMinutes: 6,
    title: {
      vi: "Website đa ngôn ngữ dành cho doanh nghiệp Việt",
      de: "Mehrsprachige Websites für vietnamesische Unternehmen",
      en: "Multilingual websites for Vietnamese businesses",
    },
    excerpt: {
      vi: "VI cho cộng đồng, DE cho khách địa phương, EN khi cần — cấu trúc đúng giúp SEO và trải nghiệm không bị “dịch máy” cứng nhắc.",
      de: "VI für die Community, DE für lokale Gäste, EN bei Bedarf — die richtige Struktur verhindert starre Maschinenübersetzung und stärkt SEO.",
      en: "VI for community, DE for local guests, EN when needed — the right structure avoids stiff machine translation and supports SEO.",
    },
    body: [
      {
        vi: "Nên tách nội dung theo locale (không nhồi cả ba ngôn ngữ trên một trang). Menu, giá, giờ mở cửa và nút WhatsApp cần nhất quán. Schema LocalBusiness giúp Google hiểu địa điểm Berlin của bạn.",
        de: "Inhalte pro Locale trennen. Menü, Preise, Zeiten und WhatsApp konsistent halten. LocalBusiness-Schema hilft Google, Ihren Berliner Standort zu verstehen.",
        en: "Split content by locale. Keep menu, prices, hours and WhatsApp consistent. LocalBusiness schema helps Google understand your Berlin location.",
      },
      {
        vi: "Đồng Xuân Media thiết kế website nhà hàng, spa, retail với VI–DE–EN, form đặt bàn/báo giá và tối ưu mobile — đúng nhịp khách tìm kiếm trên điện thoại.",
        de: "Wir bauen Restaurant-, Spa- und Retail-Sites mit VI–DE–EN, Buchungs-/Anfrageformularen und Mobile-First — passend zur Smartphone-Suche.",
        en: "We build restaurant, spa and retail sites with VI–DE–EN, booking/quote forms and mobile-first UX — matched to how people search on phones.",
      },
    ],
    tags: {
      vi: "Website, i18n, SEO",
      de: "Website, i18n, SEO",
      en: "Website, i18n, SEO",
    },
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const score = (p: BlogPost) => (p.category === current.category ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

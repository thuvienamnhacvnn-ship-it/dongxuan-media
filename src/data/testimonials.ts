import type { Testimonial } from "@/types";

/**
 * DEMO testimonials — replace with real client quotes before go-live.
 * Each item is flagged isDemo: true so UI can label them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    name: "Minh T.",
    company: "Nhà hàng Việt · Berlin",
    rating: 5,
    isDemo: true,
    role: {
      vi: "Chủ nhà hàng (demo)",
      de: "Restaurantinhaber (Demo)",
      en: "Restaurant owner (demo)",
    },
    quote: {
      vi: "Menu song ngữ và bộ ảnh món giúp khách Đức đặt dễ hơn. Quy trình làm việc rõ, giao file in đúng hẹn. — Nội dung demo, sẽ thay bằng đánh giá thật.",
      de: "Zweisprachiges Menü und Food-Fotos erleichtern deutschen Gästen die Bestellung. Klarer Ablauf, pünktliche Druckdaten. — Demo-Inhalt.",
      en: "Bilingual menu and food photos make it easier for German guests to order. Clear process, on-time print files. — Demo content.",
    },
  },
  {
    id: "demo-2",
    name: "Linh N.",
    company: "Nail Studio · Berlin",
    rating: 5,
    isDemo: true,
    role: {
      vi: "Chủ tiệm nail (demo)",
      de: "Inhaberin Nagelstudio (Demo)",
      en: "Nail salon owner (demo)",
    },
    quote: {
      vi: "Logo, bảng giá và biển hiệu giúp tiệm nhìn chuyên nghiệp hơn trên phố. Team hiểu văn hóa Việt. — Nội dung demo.",
      de: "Logo, Preisliste und Schild wirken professioneller auf der Straße. Team versteht vietnamesische Kultur. — Demo-Inhalt.",
      en: "Logo, price list and signage make the salon look more professional on the street. Team understands Vietnamese culture. — Demo content.",
    },
  },
  {
    id: "demo-3",
    name: "Hùng P.",
    company: "Cửa hàng thực phẩm Á · Berlin",
    rating: 5,
    isDemo: true,
    role: {
      vi: "Chủ cửa hàng thực phẩm (demo)",
      de: "Inhaber Asiamarkt (Demo)",
      en: "Asian grocery owner (demo)",
    },
    quote: {
      vi: "Flyer khuyến mãi và decal cửa sổ rõ ràng, in đẹp, giao trong Berlin thuận tiện. — Nội dung demo.",
      de: "Aktionsflyer und Fensterfolie klar, gut gedruckt, Lieferung in Berlin unkompliziert. — Demo-Inhalt.",
      en: "Promo flyers and window vinyl are clear, well printed, easy Berlin delivery. — Demo content.",
    },
  },
  {
    id: "demo-4",
    name: "Anna K.",
    company: "Dịch vụ & Consulting · Berlin",
    rating: 5,
    isDemo: true,
    role: {
      vi: "Doanh nghiệp dịch vụ (demo)",
      de: "Dienstleistungsunternehmen (Demo)",
      en: "Service business (demo)",
    },
    quote: {
      vi: "Website đa ngôn ngữ và bộ nhận diện giúp chúng tôi nói chuyện với khách Việt và đối tác Đức. — Nội dung demo.",
      de: "Mehrsprachige Website und CI helfen uns mit vietnamesischen Kunden und deutschen Partnern. — Demo-Inhalt.",
      en: "Multilingual website and brand system help us speak to Vietnamese clients and German partners. — Demo content.",
    },
  },
];

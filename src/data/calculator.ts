/** Rough quote estimator — editable sample rates. Not a final invoice. */
export type CalculatorServiceId =
  | "flyer"
  | "card"
  | "menu"
  | "website"
  | "social";

export interface CalculatorOption {
  id: CalculatorServiceId;
  label: { vi: string; de: string; en: string };
  base: number;
  unit: { vi: string; de: string; en: string };
  /** Multipliers applied from form fields */
  factors: {
    qty?: { threshold: number; multiplier: number }[];
    complexity?: Record<string, number>;
  };
  note: { vi: string; de: string; en: string };
}

export const calculatorServices: CalculatorOption[] = [
  {
    id: "flyer",
    label: { vi: "Flyer A5 / A6", de: "Flyer A5 / A6", en: "Flyer A5 / A6" },
    base: 89,
    unit: { vi: "€ (thiết kế + setup)", de: "€ (Design + Setup)", en: "€ (design + setup)" },
    factors: {
      qty: [
        { threshold: 500, multiplier: 1 },
        { threshold: 1000, multiplier: 1.15 },
        { threshold: 2500, multiplier: 1.35 },
      ],
      complexity: { basic: 1, double: 1.25, premium: 1.5 },
    },
    note: {
      vi: "Chưa gồm in số lượng lớn. Báo giá in theo số lượng & giấy.",
      de: "Ohne Großauflage-Druck. Druckpreis nach Menge & Papier.",
      en: "Excludes large-run print. Print priced by volume & stock.",
    },
  },
  {
    id: "card",
    label: {
      vi: "Card visit",
      de: "Visitenkarte",
      en: "Business card",
    },
    base: 69,
    unit: { vi: "€ (thiết kế 2 mặt)", de: "€ (2-seitiges Design)", en: "€ (double-sided design)" },
    factors: {
      complexity: { basic: 1, foil: 1.4, premium: 1.6 },
    },
    note: {
      vi: "Ước tính thiết kế; in offset/digital báo riêng.",
      de: "Nur Design-Schätzung; Druck separat.",
      en: "Design estimate only; print quoted separately.",
    },
  },
  {
    id: "menu",
    label: { vi: "Menu nhà hàng", de: "Restaurant-Menü", en: "Restaurant menu" },
    base: 249,
    unit: { vi: "€ (từ)", de: "€ (ab)", en: "€ (from)" },
    factors: {
      complexity: { "1-page": 1, "fold": 1.35, "booklet": 1.8 },
    },
    note: {
      vi: "Có thể gồm layout song ngữ. Dịch thuật tính riêng nếu cần.",
      de: "Optional zweisprachig. Übersetzung ggf. separat.",
      en: "May include bilingual layout. Translation extra if needed.",
    },
  },
  {
    id: "website",
    label: {
      vi: "Website / Landing",
      de: "Website / Landingpage",
      en: "Website / Landing page",
    },
    base: 890,
    unit: { vi: "€ (từ)", de: "€ (ab)", en: "€ (from)" },
    factors: {
      complexity: {
        landing: 1,
        "multi-page": 1.6,
        multilingual: 2.1,
      },
    },
    note: {
      vi: "Chưa gồm copywriting dài và quảng cáo. Hosting báo riêng.",
      de: "Ohne langen Copy und Ads. Hosting separat.",
      en: "Excludes long-form copy and ads. Hosting separate.",
    },
  },
  {
    id: "social",
    label: {
      vi: "Quản lý social (tháng)",
      de: "Social-Management (Monat)",
      en: "Social management (month)",
    },
    base: 390,
    unit: { vi: "€ / tháng (từ)", de: "€ / Monat (ab)", en: "€ / month (from)" },
    factors: {
      complexity: { "8-posts": 1, "12-posts": 1.3, "16-posts-ads": 1.75 },
    },
    note: {
      vi: "Ngân sách ads (Meta/Google) không nằm trong gói quản lý.",
      de: "Ad-Budgets (Meta/Google) nicht enthalten.",
      en: "Ad spend (Meta/Google) not included in management fee.",
    },
  },
];

export function estimatePrice(
  serviceId: CalculatorServiceId,
  complexity: string,
  qty?: number
): number {
  const svc = calculatorServices.find((s) => s.id === serviceId);
  if (!svc) return 0;
  let total = svc.base;
  if (svc.factors.complexity && complexity in svc.factors.complexity) {
    total *= svc.factors.complexity[complexity];
  }
  if (qty && svc.factors.qty) {
    const sorted = [...svc.factors.qty].sort((a, b) => b.threshold - a.threshold);
    const match = sorted.find((q) => qty >= q.threshold) ?? svc.factors.qty[0];
    total *= match.multiplier;
  }
  return Math.round(total);
}

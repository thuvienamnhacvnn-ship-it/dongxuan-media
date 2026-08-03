"use client";

import { useMemo, useState } from "react";
import {
  calculatorServices,
  estimatePrice,
  type CalculatorServiceId,
} from "@/data/calculator";
import type { Locale } from "@/i18n/config";
import { Button } from "@/components/ui/Button";

const complexityOptions: Record<
  CalculatorServiceId,
  { value: string; label: { vi: string; de: string; en: string } }[]
> = {
  flyer: [
    { value: "basic", label: { vi: "1 mặt", de: "1-seitig", en: "Single side" } },
    { value: "double", label: { vi: "2 mặt", de: "2-seitig", en: "Double side" } },
    { value: "premium", label: { vi: "Premium layout", de: "Premium-Layout", en: "Premium layout" } },
  ],
  card: [
    { value: "basic", label: { vi: "Cơ bản", de: "Basis", en: "Basic" } },
    { value: "foil", label: { vi: "Foil / đặc biệt", de: "Foil / Special", en: "Foil / special" } },
    { value: "premium", label: { vi: "Cao cấp", de: "Premium", en: "Premium" } },
  ],
  menu: [
    { value: "1-page", label: { vi: "1 trang", de: "1 Seite", en: "1 page" } },
    { value: "fold", label: { vi: "Gấp", de: "Falz", en: "Folded" } },
    { value: "booklet", label: { vi: "Booklet", de: "Heft", en: "Booklet" } },
  ],
  website: [
    { value: "landing", label: { vi: "Landing", de: "Landing", en: "Landing" } },
    { value: "multi-page", label: { vi: "Nhiều trang", de: "Mehrseitig", en: "Multi-page" } },
    { value: "multilingual", label: { vi: "Đa ngôn ngữ", de: "Mehrsprachig", en: "Multilingual" } },
  ],
  social: [
    { value: "8-posts", label: { vi: "8 bài / tháng", de: "8 Posts / Monat", en: "8 posts / month" } },
    { value: "12-posts", label: { vi: "12 bài / tháng", de: "12 Posts / Monat", en: "12 posts / month" } },
    { value: "16-posts-ads", label: { vi: "16 bài + ads setup", de: "16 Posts + Ads-Setup", en: "16 posts + ads setup" } },
  ],
};

export function PriceCalculator({
  locale,
  quoteHref,
}: {
  locale: Locale;
  quoteHref: string;
}) {
  const [serviceId, setServiceId] = useState<CalculatorServiceId>("flyer");
  const [complexity, setComplexity] = useState("basic");
  const [qty, setQty] = useState(500);

  const service = calculatorServices.find((s) => s.id === serviceId)!;
  const options = complexityOptions[serviceId];

  const estimate = useMemo(
    () => estimatePrice(serviceId, complexity, qty),
    [serviceId, complexity, qty]
  );

  return (
    <div className="border border-ink-black/10 bg-warm-white p-6 sm:p-8">
      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
        {locale === "de"
          ? "Schätzer (Demo)"
          : locale === "en"
            ? "Estimator (demo)"
            : "Ước tính (demo)"}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold uppercase text-ink-black">
        {locale === "de"
          ? "Vorläufige Preisschätzung"
          : locale === "en"
            ? "Rough price estimate"
            : "Báo giá sơ bộ"}
      </h3>
      <p className="mt-2 text-sm text-ink-black/60">
        {locale === "de"
          ? "Kein verbindliches Angebot. Nur Orientierung."
          : locale === "en"
            ? "Not a binding quote — orientation only."
            : "Không phải báo giá chính thức — chỉ mang tính định hướng."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-black/60">
            Service
          </span>
          <select
            className="w-full border border-ink-black/15 bg-paper-white px-3 py-2.5 text-sm"
            value={serviceId}
            onChange={(e) => {
              const id = e.target.value as CalculatorServiceId;
              setServiceId(id);
              setComplexity(complexityOptions[id][0].value);
            }}
          >
            {calculatorServices.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label[locale]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-black/60">
            Options
          </span>
          <select
            className="w-full border border-ink-black/15 bg-paper-white px-3 py-2.5 text-sm"
            value={complexity}
            onChange={(e) => setComplexity(e.target.value)}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label[locale]}
              </option>
            ))}
          </select>
        </label>
        {serviceId === "flyer" && (
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-black/60">
              Qty (print context)
            </span>
            <input
              type="number"
              min={100}
              step={100}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value) || 0)}
              className="w-full border border-ink-black/15 bg-paper-white px-3 py-2.5 text-sm"
            />
          </label>
        )}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-ink-black/10 pt-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-black/45">
            {locale === "de" ? "Schätzung" : locale === "en" ? "Estimate" : "Ước tính"}
          </p>
          <p className="font-display text-4xl font-bold text-ink-black">
            ~{estimate}€
          </p>
          <p className="mt-1 text-xs text-ink-black/50">{service.note[locale]}</p>
        </div>
        <Button href={quoteHref} size="lg">
          {locale === "de"
            ? "Verbindliches Angebot"
            : locale === "en"
              ? "Request formal quote"
              : "Yêu cầu báo giá chính thức"}
        </Button>
      </div>
    </div>
  );
}

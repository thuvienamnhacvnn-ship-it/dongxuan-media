import type { LocalizedString } from "@/types";

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export const faqs: FaqItem[] = [
  {
    id: "design-time",
    question: {
      vi: "Thời gian thiết kế bao lâu?",
      de: "Wie lange dauert das Design?",
      en: "How long does design take?",
    },
    answer: {
      vi: "Logo cơ bản thường 3–7 ngày làm việc. Menu, flyer hoặc bộ nhận diện có thể 1–3 tuần tùy phạm vi và số vòng chỉnh sửa. Website và gói Agency được lên timeline riêng sau brief.",
      de: "Ein Basis-Logo dauert meist 3–7 Werktage. Menüs, Flyer oder CI brauchen oft 1–3 Wochen je nach Umfang und Korrekturen. Websites und Agency-Pakete erhalten einen eigenen Zeitplan nach dem Briefing.",
      en: "A basic logo usually takes 3–7 working days. Menus, flyers or brand systems often take 1–3 weeks depending on scope and revisions. Websites and Agency packages get a custom timeline after briefing.",
    },
  },
  {
    id: "revisions",
    question: {
      vi: "Có hỗ trợ sửa thiết kế không?",
      de: "Gibt es Korrekturrunden?",
      en: "Do you include design revisions?",
    },
    answer: {
      vi: "Có. Mỗi gói gồm số vòng chỉnh sửa rõ ràng (thường 2–3 vòng). Chỉnh sửa trong phạm vi đã chốt là miễn phí theo gói; thay đổi phạm vi lớn sẽ được báo giá bổ sung.",
      de: "Ja. Jedes Paket enthält eine klare Anzahl an Korrekturrunden (meist 2–3). Änderungen im vereinbarten Scope sind inklusive; größere Scope-Änderungen werden separat angeboten.",
      en: "Yes. Each package includes a clear number of revision rounds (usually 2–3). In-scope changes are included; major scope changes are quoted separately.",
    },
  },
  {
    id: "small-print",
    question: {
      vi: "Có nhận đơn in số lượng ít không?",
      de: "Drucken Sie auch kleine Auflagen?",
      en: "Do you accept small print runs?",
    },
    answer: {
      vi: "Có. Chúng tôi nhận cả số lượng nhỏ (ví dụ card visit, flyer sự kiện) lẫn in số lượng lớn. Báo giá phụ thuộc số lượng, chất liệu và kỹ thuật in.",
      de: "Ja. Wir drucken kleine Auflagen (z. B. Visitenkarten, Event-Flyer) ebenso wie größere Mengen. Preis hängt von Auflage, Material und Druckverfahren ab.",
      en: "Yes. We handle small runs (e.g. business cards, event flyers) as well as larger quantities. Quotes depend on volume, material and print method.",
    },
  },
  {
    id: "delivery-berlin",
    question: {
      vi: "Có giao hàng trong Berlin không?",
      de: "Liefern Sie in Berlin?",
      en: "Do you deliver within Berlin?",
    },
    answer: {
      vi: "Có thể nhận tại khu vực Đồng Xuân Center hoặc thỏa thuận giao trong Berlin. Chi phí và thời gian giao phụ thuộc khối lượng và địa chỉ — sẽ ghi rõ trong báo giá.",
      de: "Abholung am Dong Xuan Center oder Lieferung in Berlin nach Absprache. Kosten und Zeit hängen von Menge und Adresse ab und stehen im Angebot.",
      en: "Pickup near Dong Xuan Center or Berlin delivery by arrangement. Cost and timing depend on volume and address and will be stated in the quote.",
    },
  },
  {
    id: "german-support",
    question: {
      vi: "Có hỗ trợ tiếng Đức không?",
      de: "Betreuen Sie auch auf Deutsch?",
      en: "Do you support German?",
    },
    answer: {
      vi: "Có. Chúng tôi giao tiếp bằng tiếng Việt, Đức và Anh — phù hợp cả chủ doanh nghiệp Việt và đối tác / khách Đức.",
      de: "Ja. Wir kommunizieren auf Vietnamesisch, Deutsch und Englisch — für vietnamesische Unternehmer und deutsche Partner/Kunden.",
      en: "Yes. We communicate in Vietnamese, German and English — for Vietnamese business owners and German partners/customers.",
    },
  },
  {
    id: "multilingual-web",
    question: {
      vi: "Có thiết kế website đa ngôn ngữ không?",
      de: "Bauen Sie mehrsprachige Websites?",
      en: "Do you build multilingual websites?",
    },
    answer: {
      vi: "Có. Website VI–DE–EN là thế mạnh của chúng tôi — cấu trúc nội dung, menu online, đặt bàn/form và SEO cơ bản theo từng ngôn ngữ.",
      de: "Ja. Mehrsprachige Websites VI–DE–EN sind eine Stärke — Content-Struktur, Online-Menü, Formulare und Basis-SEO je Sprache.",
      en: "Yes. Multilingual VI–DE–EN sites are a strength — content structure, online menus, forms and basic SEO per language.",
    },
  },
  {
    id: "free-quote",
    question: {
      vi: "Báo giá có miễn phí không?",
      de: "Ist das Angebot kostenlos?",
      en: "Is quoting free?",
    },
    answer: {
      vi: "Có. Tư vấn sơ bộ và báo giá dựa trên brief của bạn là miễn phí, không ràng buộc. Chỉ tính phí khi bạn xác nhận triển khai.",
      de: "Ja. Erstberatung und Angebot auf Basis Ihres Briefings sind kostenlos und unverbindlich. Kosten entstehen erst nach Beauftragung.",
      en: "Yes. Initial consultation and quotes based on your brief are free and non-binding. You only pay after you confirm the work.",
    },
  },
];

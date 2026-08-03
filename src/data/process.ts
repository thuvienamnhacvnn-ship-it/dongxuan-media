import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: "01",
    title: {
      vi: "Tiếp nhận yêu cầu",
      de: "Anfrage entgegennehmen",
      en: "Receive request",
    },
    description: {
      vi: "Bạn gửi brief, file thiết kế hoặc nội dung cần dịch qua form, WhatsApp hoặc email.",
      de: "Sie senden Briefing, Design-Dateien oder Übersetzungstexte per Formular, WhatsApp oder E-Mail.",
      en: "You send a brief, design files or translation content via form, WhatsApp or email.",
    },
  },
  {
    id: "2",
    step: "02",
    title: {
      vi: "Tư vấn giải pháp",
      de: "Lösung beraten",
      en: "Advise solution",
    },
    description: {
      vi: "Chúng tôi phân tích mục tiêu, gợi ý hướng thiết kế / in ấn / marketing phù hợp ngân sách.",
      de: "Wir analysieren Ihre Ziele und schlagen Design-, Druck- oder Marketingwege passend zum Budget vor.",
      en: "We analyse goals and recommend design, print or marketing paths that fit your budget.",
    },
  },
  {
    id: "3",
    step: "03",
    title: {
      vi: "Báo giá và xác nhận",
      de: "Angebot & Bestätigung",
      en: "Quote & confirm",
    },
    description: {
      vi: "Gửi báo giá rõ ràng theo hạng mục. Xác nhận phạm vi, timeline và bắt đầu dự án.",
      de: "Klares Angebot nach Positionen. Scope und Timeline bestätigen — dann Projektstart.",
      en: "Clear itemised quote. Confirm scope and timeline — then we kick off.",
    },
  },
  {
    id: "4",
    step: "04",
    title: {
      vi: "Thiết kế hoặc triển khai",
      de: "Design & Umsetzung",
      en: "Design & delivery",
    },
    description: {
      vi: "Thiết kế, dịch thuật, in ấn hoặc dựng website. Bạn review và phản hồi theo vòng chỉnh sửa.",
      de: "Design, Übersetzung, Druck oder Website-Bau. Sie reviewen und geben Feedback in Korrekturrunden.",
      en: "Design, translation, print or website build. You review and give feedback in revision rounds.",
    },
  },
  {
    id: "5",
    step: "05",
    title: {
      vi: "Bàn giao và hỗ trợ",
      de: "Übergabe & Support",
      en: "Handover & support",
    },
    description: {
      vi: "Bàn giao file gốc, bản in hoặc website live. Hỗ trợ chỉnh sửa nhỏ và tái in khi cần.",
      de: "Übergabe von Quelldateien, Druck oder Live-Website. Support bei kleinen Anpassungen und Nachdrucken.",
      en: "Handover of source files, prints or live site. Support for minor tweaks and reprints.",
    },
  },
];

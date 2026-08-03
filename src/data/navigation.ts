import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { href: "", label: { vi: "Trang chủ", de: "Startseite", en: "Home" } },
  { href: "/dich-vu", label: { vi: "Dịch vụ", de: "Leistungen", en: "Services" } },
  { href: "/du-an", label: { vi: "Dự án", de: "Projekte", en: "Projects" } },
  { href: "/bang-gia", label: { vi: "Bảng giá", de: "Preise", en: "Pricing" } },
  { href: "/kien-thuc", label: { vi: "Kiến thức", de: "Wissen", en: "Insights" } },
  { href: "/ve-chung-toi", label: { vi: "Về chúng tôi", de: "Über uns", en: "About" } },
  { href: "/lien-he", label: { vi: "Liên hệ", de: "Kontakt", en: "Contact" } },
];

export const footerNav = {
  services: [
    { href: "/dich-vu/thiet-ke", label: { vi: "Thiết kế", de: "Design", en: "Design" } },
    { href: "/dich-vu/in-an", label: { vi: "In ấn", de: "Druck", en: "Print" } },
    { href: "/dich-vu/marketing", label: { vi: "Marketing", de: "Marketing", en: "Marketing" } },
    { href: "/dich-vu/dich-thuat", label: { vi: "Dịch thuật", de: "Übersetzung", en: "Translation" } },
    { href: "/dich-vu/quang-cao", label: { vi: "Quảng cáo", de: "Werbung", en: "Advertising" } },
    { href: "/dich-vu/website-digital", label: { vi: "Website & Digital", de: "Website & Digital", en: "Website & Digital" } },
  ],
  company: [
    { href: "/ve-chung-toi", label: { vi: "Về chúng tôi", de: "Über uns", en: "About us" } },
    { href: "/du-an", label: { vi: "Dự án", de: "Projekte", en: "Projects" } },
    { href: "/bang-gia", label: { vi: "Bảng giá", de: "Preise", en: "Pricing" } },
    { href: "/kien-thuc", label: { vi: "Kiến thức", de: "Wissen", en: "Insights" } },
    { href: "/lien-he", label: { vi: "Liên hệ", de: "Kontakt", en: "Contact" } },
  ],
  actions: [
    { href: "/bao-gia", label: { vi: "Nhận báo giá", de: "Angebot anfordern", en: "Get a quote" } },
    { href: "/dich-thuat", label: { vi: "Gửi bản dịch", de: "Übersetzung senden", en: "Send translation" } },
    { href: "/dat-lich", label: { vi: "Đặt lịch tư vấn", de: "Beratung buchen", en: "Book consultation" } },
  ],
  legal: [
    { href: "/impressum", label: { vi: "Impressum", de: "Impressum", en: "Imprint" } },
    { href: "/datenschutz", label: { vi: "Datenschutz", de: "Datenschutz", en: "Privacy" } },
    { href: "/agb", label: { vi: "AGB", de: "AGB", en: "Terms" } },
    { href: "/cookie-einstellungen", label: { vi: "Cookie", de: "Cookie-Einstellungen", en: "Cookies" } },
  ],
};

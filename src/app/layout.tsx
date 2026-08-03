import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Đồng Xuân Media — Creative Agency Berlin",
    template: "%s · Đồng Xuân Media",
  },
  description:
    "Thiết kế, in ấn, marketing, dịch thuật và quảng cáo cho doanh nghiệp Việt tại Đức. Gần Đồng Xuân Center, Berlin.",
  metadataBase: new URL("https://dongxuanmedia.de"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Đồng Xuân Media",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap&subset=latin,latin-ext,vietnamese"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

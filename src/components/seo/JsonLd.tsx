import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/i18n/config";

export function JsonLd({ locale }: { locale: Locale }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/logo.png`,
    description:
      locale === "de"
        ? "Kreativagentur in Berlin für vietnamesische Unternehmen."
        : locale === "en"
          ? "Creative agency in Berlin for Vietnamese businesses."
          : "Agency sáng tạo tại Berlin cho doanh nghiệp Việt.",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
      streetAddress: siteConfig.address.full,
    },
    ...(siteConfig.contact.email
      ? { email: siteConfig.contact.email }
      : {}),
    ...(siteConfig.contact.phone
      ? { telephone: siteConfig.contact.phone }
      : {}),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/logo/logo.png`,
    url: siteConfig.url,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
      streetAddress: siteConfig.address.full,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.525,
      longitude: 13.495,
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}

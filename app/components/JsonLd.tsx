import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/herobg.png`,
    description: siteConfig.description,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Facility Management Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-AE",
  };

  const schemas = [organizationSchema, localBusinessSchema, websiteSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

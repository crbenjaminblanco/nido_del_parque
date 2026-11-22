import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localeTags } from "@/i18n/config";
import { site } from "@/config/site";
import { Hero } from "@/components/sections/hero";
import { Gallery } from "@/components/sections/gallery";
import { Stay } from "@/components/sections/stay";
import { Area } from "@/components/sections/area";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": `${site.url}/#lodging`,
        name: site.name,
        url: `${site.url}/${locale}`,
        description: t.meta.description,
        image: [`${site.url}/images/og.jpg`],
        logo: `${site.url}/images/logo.png`,
        telephone: site.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Zarcero",
          addressRegion: "Alajuela",
          postalCode: "21101",
          addressCountry: "CR",
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.maps.google,
        checkinTime: "15:00",
        checkoutTime: "11:00",
        petsAllowed: false,
        numberOfRooms: 1,
        amenityFeature: Object.values(t.stay.amenities).map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        sameAs: [site.airbnb, site.instagram],
        inLanguage: localeTags[locale],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/${locale}#website`,
        url: `${site.url}/${locale}`,
        name: site.name,
        inLanguage: localeTags[locale],
        about: { "@id": `${site.url}/#lodging` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero t={t} />
      <Gallery t={t} />
      <Stay t={t} />
      <Area t={t} />
      <Location t={t} />
      <Contact t={t} />
    </>
  );
}

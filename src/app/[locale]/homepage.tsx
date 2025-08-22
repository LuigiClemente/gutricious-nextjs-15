import { getJsonLd } from "@/utils/schema";
import { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as createMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  return createMetadata(locale, '');
}

export default function HomePage({ locale }: { locale: string }) {
  // Get the structured data for this page
  const homeJsonLd = getJsonLd(locale, 'home');
  const orgJsonLd = getJsonLd(locale, 'organization');
  const websiteJsonLd = getJsonLd(locale, 'website');

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd)
        }}
      />
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd)
        }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd)
        }}
      />
    </>
  );
}

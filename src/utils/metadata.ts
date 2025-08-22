import { Metadata, ResolvingMetadata } from 'next';
import { locales } from './languages';

// Helper function to get country name from locale
function getCountryName(locale: string): string {
  const countryMap: Record<string, string> = {
    en: 'United States',
    de: 'Germany',
    fr: 'France',
    es: 'Spain',
    pt: 'Portugal',
    it: 'Italy',
    nl: 'Netherlands'
  };
  return countryMap[locale] || 'United States';
}

type MetadataLanguageMap = {
  [key: string]: {
    title: string;
    description: string;
    keywords: string;
  }
};

// Base URL for canonical links
export const baseUrl = 'https://home.gutricious.com';

// Common metadata for all languages
export const commonMetadata = {
  applicationName: 'Gutricious',
  authors: [{ name: 'Gutricious Team' }],
  publisher: 'Gutricious',
  creator: 'Gutricious',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: 'https://res.cloudinary.com/dizm8txou/image/upload/v1715953409/about-us/static/favicons/falvicon.ico',
    apple: 'https://res.cloudinary.com/dizm8txou/image/upload/v1715953409/about-us/static/favicons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(baseUrl),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  colorScheme: 'light' as 'light',
  themeColor: '#2ae8d3',
  category: 'health',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
  },
};

// Language-specific metadata
export const metadataTranslations: MetadataLanguageMap = {
  en: {
    title: 'Gutricious - Personalized Nutrition Platform',
    description: 'Discover Gutricious\' Personalization Engine: Revolutionizing health with accessible innovations. Enhance your well-being with our cutting-edge technology and personalized care.',
    keywords: 'nutrition, personalized nutrition, gut health, health technology, microbiome, wellness, health innovation',
  },
  de: {
    title: 'Gutricious - Personalisierte Ernährungsplattform',
    description: 'Entdecken Sie die Personalisierungs-Engine von Gutricious: Revolutionierung der Gesundheit mit zugänglichen Innovationen. Verbessern Sie Ihr Wohlbefinden mit unserer hochmodernen Technologie und personalisierter Pflege.',
    keywords: 'Ernährung, personalisierte Ernährung, Darmgesundheit, Gesundheitstechnologie, Mikrobiom, Wellness, Gesundheitsinnovation',
  },
  fr: {
    title: 'Gutricious - Plateforme de Nutrition Personnalisée',
    description: 'Découvrez le Moteur de Personnalisation de Gutricious : Révolutionner la santé avec des innovations accessibles. Améliorez votre bien-être avec notre technologie de pointe et nos soins personnalisés.',
    keywords: 'nutrition, nutrition personnalisée, santé intestinale, technologie de la santé, microbiome, bien-être, innovation en matière de santé',
  },
  es: {
    title: 'Gutricious - Plataforma de Nutrición Personalizada',
    description: 'Descubra el Motor de Personalización de Gutricious: Revolucionando la salud con innovaciones accesibles. Mejore su bienestar con nuestra tecnología de vanguardia y atención personalizada.',
    keywords: 'nutrición, nutrición personalizada, salud intestinal, tecnología de la salud, microbioma, bienestar, innovación en salud',
  },
  pt: {
    title: 'Gutricious - Plataforma de Nutrição Personalizada',
    description: 'Descubra o Motor de Personalização da Gutricious: Revolucionando a saúde com inovações acessíveis. Melhore o seu bem-estar com a nossa tecnologia de ponta e cuidados personalizados.',
    keywords: 'nutrição, nutrição personalizada, saúde intestinal, tecnologia de saúde, microbioma, bem-estar, inovação em saúde',
  },
  it: {
    title: 'Gutricious - Piattaforma di Nutrizione Personalizzata',
    description: 'Scopri il Motore di Personalizzazione di Gutricious: Rivoluzionare la salute con innovazioni accessibili. Migliora il tuo benessere con la nostra tecnologia all\'avanguardia e cure personalizzate.',
    keywords: 'nutrizione, nutrizione personalizzata, salute intestinale, tecnologia per la salute, microbioma, benessere, innovazione per la salute',
  },
  nl: {
    title: 'Gutricious - Gepersonaliseerd Voedingsplatform',
    description: 'Ontdek de Personalisatie-Engine van Gutricious: Gezondheid revolutioneren met toegankelijke innovaties. Verbeter je welzijn met onze geavanceerde technologie en gepersonaliseerde zorg.',
    keywords: 'voeding, gepersonaliseerde voeding, darmgezondheid, gezondheidstechnologie, microbioom, welzijn, gezondheidsinnovatie',
  }
};

// Generate alternate language metadata for hreflang tags
export function generateAlternateLanguages(path: string = ''): Metadata['alternates'] {
  // Create a languages object with locale codes as keys
  const languageEntries = locales.map(locale => [
    locale,
    `${baseUrl}/${locale}${path}`
  ]);
  
  // Convert entries to record
  const languages = Object.fromEntries(languageEntries);
  
  return {
    canonical: `${baseUrl}${path}`,
    languages
  };
}

// Generate metadata for a specific page and language
export function generateMetadata(
  locale: string, 
  pagePath: string = '', 
  pageSpecificTitle?: string,
  pageSpecificDescription?: string
): Metadata {
  const localeMetadata = metadataTranslations[locale] || metadataTranslations['en'];
  
  // Prepare encoded parameters for dynamic OG image
  const title = encodeURIComponent(pageSpecificTitle || localeMetadata.title);
  const description = encodeURIComponent(pageSpecificDescription || localeMetadata.description);
  const dynamicOgImageUrl = `${baseUrl}/api/og?title=${title}&description=${description}&locale=${locale}`;
  
  return {
    ...commonMetadata,
    title: pageSpecificTitle || localeMetadata.title,
    description: pageSpecificDescription || localeMetadata.description,
    keywords: localeMetadata.keywords,
    alternates: generateAlternateLanguages(pagePath),
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${baseUrl}/${locale}${pagePath}`,
      siteName: 'Gutricious',
      title: pageSpecificTitle || localeMetadata.title,
      description: pageSpecificDescription || localeMetadata.description,
      images: [
        {
          url: dynamicOgImageUrl,
          width: 1200,
          height: 630,
          alt: pageSpecificTitle || localeMetadata.title,
          secureUrl: dynamicOgImageUrl,
        }
      ],
      countryName: getCountryName(locale),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gutricious',
      creator: '@gutricious',
      title: pageSpecificTitle || localeMetadata.title,
      description: pageSpecificDescription || localeMetadata.description,
      images: [dynamicOgImageUrl],
    },
    // Add additional meta tags for social networks and SEO
    other: {
      'fb:app_id': '123456789012345', // Facebook App ID
      'pinterest:pinnable': 'true',
      'pinterest:image': dynamicOgImageUrl,
      'pinterest:description': pageSpecificDescription || localeMetadata.description,
    },
  };
}

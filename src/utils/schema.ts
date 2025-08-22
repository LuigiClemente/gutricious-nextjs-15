/**
 * Schema.org utility functions for structured data
 * This helps search engines understand the content of the site
 * and may enable rich results in search listings
 */

// Language mappings for translations
const languageMappings: Record<string, string> = {
  en: 'English',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
  pt: 'Portuguese',
  it: 'Italian',
  nl: 'Dutch',
};

// Base organization schema for Gutricious
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gutricious',
  url: 'https://home.gutricious.com',
  logo: 'https://home.gutricious.com/assets/logo.png',
  sameAs: [
    'https://www.facebook.com/gutricious',
    'https://www.twitter.com/gutricious',
    'https://www.linkedin.com/company/gutricious',
    'https://www.instagram.com/gutricious'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-GUTRICIOUS',
    contactType: 'customer service',
    email: 'hello@gutricious.com',
    availableLanguage: Object.values(languageMappings)
  }
};

// Website schema 
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gutricious',
  url: 'https://home.gutricious.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://home.gutricious.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  inLanguage: Object.keys(languageMappings)
};

// Home page specific schema
export function getHomePageSchema(locale: string) {
  const localeTitles: Record<string, string> = {
    en: 'Personalized Nutrition Platform',
    de: 'Personalisierte Ernährungsplattform',
    fr: 'Plateforme de Nutrition Personnalisée',
    es: 'Plataforma de Nutrición Personalizada',
    pt: 'Plataforma de Nutrição Personalizada',
    it: 'Piattaforma di Nutrizione Personalizzata',
    nl: 'Gepersonaliseerd Voedingsplatform'
  };
  
  const title = localeTitles[locale] || localeTitles.en;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Gutricious - ${title}`,
    description: 'Discover Gutricious\' Personalization Engine: Revolutionizing health with accessible innovations.',
    url: `https://home.gutricious.com/${locale}`,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Gutricious',
      url: 'https://home.gutricious.com'
    }
  };
}

// Policy page schema (Privacy Policy, Cookie Policy, etc.)
export function getPolicyPageSchema(locale: string, policyType: 'privacy' | 'cookie' | 'terms') {
  const policyNames: Record<string, Record<string, string>> = {
    privacy: {
      en: 'Privacy Policy',
      de: 'Datenschutzrichtlinie',
      fr: 'Politique de Confidentialité',
      es: 'Política de Privacidad',
      pt: 'Política de Privacidade',
      it: 'Politica sulla Privacy',
      nl: 'Privacybeleid'
    },
    cookie: {
      en: 'Cookie Policy',
      de: 'Cookie-Richtlinie',
      fr: 'Politique des Cookies',
      es: 'Política de Cookies',
      pt: 'Política de Cookies',
      it: 'Politica dei Cookie',
      nl: 'Cookiebeleid'
    },
    terms: {
      en: 'Terms of Service',
      de: 'Nutzungsbedingungen',
      fr: 'Conditions d\'Utilisation',
      es: 'Términos de Servicio',
      pt: 'Termos de Serviço',
      it: 'Termini di Servizio',
      nl: 'Servicevoorwaarden'
    }
  };
  
  const policyName = policyNames[policyType][locale] || policyNames[policyType].en;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Gutricious - ${policyName}`,
    description: `Gutricious ${policyName} document.`,
    url: `https://home.gutricious.com/${locale}/${policyType}`,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Gutricious',
      url: 'https://home.gutricious.com'
    },
    specialty: 'Legal Information'
  };
}

// Product schema for nutrition products
export function getProductSchema(locale: string, productData: {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  priceCurrency?: string;
  availability?: string;
  category?: string;
}) {
  const { id, name, description, image, price, priceCurrency, availability, category } = productData;
  
  // Build the product schema
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    productID: id,
    url: `https://home.gutricious.com/${locale}/products/${id}`,
    inLanguage: locale,
    brand: {
      '@type': 'Brand',
      name: 'Gutricious'
    }
  };
  
  // Add price information if available
  if (price && priceCurrency) {
    schema.offers = {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability: availability || 'https://schema.org/InStock',
      url: `https://home.gutricious.com/${locale}/products/${id}`
    };
  }
  
  // Add category if available
  if (category) {
    schema.category = category;
  }
  
  return schema;
}

// FAQ schema for rich results in search
export function getFAQSchema(locale: string, questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    })),
    inLanguage: locale
  };
}

// Breadcrumb schema for better navigation representation
export function getBreadcrumbSchema(locale: string, items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('/') ? `https://home.gutricious.com${item.url}` : item.url
    }))
  };
}

// Helper function to get appropriate schema based on page type
export function getJsonLd(
  locale: string = 'en',
  pageType: 'home' | 'privacy' | 'cookie' | 'terms' | 'organization' | 'website' | 'product' | 'faq' = 'home',
  additionalData?: any
) {
  switch (pageType) {
    case 'home':
      return getHomePageSchema(locale);
    case 'privacy':
      return getPolicyPageSchema(locale, 'privacy');
    case 'cookie':
      return getPolicyPageSchema(locale, 'cookie');
    case 'terms':
      return getPolicyPageSchema(locale, 'terms');
    case 'organization':
      return organizationSchema;
    case 'website':
      return websiteSchema;
    case 'product':
      if (!additionalData) throw new Error('Product data is required for product schema');
      return getProductSchema(locale, additionalData);
    case 'faq':
      if (!additionalData || !Array.isArray(additionalData)) throw new Error('Questions array is required for FAQ schema');
      return getFAQSchema(locale, additionalData);
    default:
      return getHomePageSchema(locale);
  }
}

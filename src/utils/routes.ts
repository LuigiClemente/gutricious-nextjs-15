interface LanguageRoutes {
  home: string;
  cookies: string;
  privacy: string;
  "legal-notices": string;
}

interface Routes {
  en: LanguageRoutes;
  de: LanguageRoutes;
  nl: LanguageRoutes;
  fr: LanguageRoutes;
  es: LanguageRoutes;
  pt: LanguageRoutes;
  it: LanguageRoutes;
}

export const routes: Routes = {
  "en": {
    "home": "/",
    "cookies": "/CookiePolicy",
    "privacy": "/PrivacyPolicy",
    "legal-notices":"/terms"
  },
  "de": {
    "home": "/",
    "cookies": "/Cookie-Richtlinie",
    "privacy": "/Datenschutzrichtlinie",
    "legal-notices":"/terms"
  },
  "nl": {
    "home": "/",
    "cookies": "/Cookiebeleid",
    "privacy": "/Privacybeleid",
    "legal-notices":"/terms"
  },
  "fr": {
    "home": "/",
    "cookies": "/PolitiqueCookies",
    "privacy": "/PolitiqueConfidentialite",
    "legal-notices":"/terms"
  },
  "es": {
    "home": "/",
    "cookies": "/PoliticaCookies",
    "privacy": "/PoliticaPrivacidad",
    "legal-notices":"/terms"
  },
  "pt": {
    "home": "/",
    "cookies": "/PoliticaCookiesPT",
    "privacy": "/PoliticaPrivacidade",
    "legal-notices":"/terms"
  },
  "it": {
    "home": "/",
    "cookies": "/PoliticaCookie",
    "privacy": "/PoliticaPrivacy",
    "legal-notices":"/terms"
  }
}


export type LocalActiveType = keyof Routes;
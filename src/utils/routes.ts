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
    "home": "/home",
    "cookies": "/CookiePolicy",
    "privacy": "/PrivacyPolicy",
    "legal-notices":"/terms"
  },
  "de": {
    "home": "/home",
    "cookies": "/Cookie-Richtlinie",
    "privacy": "/Datenschutzrichtlinie",
    "legal-notices":"/terms"
  },
  "nl": {
    "home": "/home",
    "cookies": "/Cookiebeleid",
    "privacy": "/Privacybeleid",
    "legal-notices":"/terms"
  },
  "fr": {
    "home": "/home",
    "cookies": "/PolitiqueCookies",
    "privacy": "/PolitiqueConfidentialite",
    "legal-notices":"/terms"
  },
  "es": {
    "home": "/home",
    "cookies": "/PoliticaCookies",
    "privacy": "/PoliticaPrivacidad",
    "legal-notices":"/terms"
  },
  "pt": {
    "home": "/home",
    "cookies": "/PoliticaCookiesPT",
    "privacy": "/PoliticaPrivacidade",
    "legal-notices":"/terms"
  },
  "it": {
    "home": "/home",
    "cookies": "/PoliticaCookie",
    "privacy": "/PoliticaPrivacy",
    "legal-notices":"/terms"
  }
}


export type LocalActiveType = keyof Routes;

import { TERMS_DATA, SupportedLocale } from './generated-terms';
export interface Term {
  id: string
  title: string
  date: string
  slug: string
  summary: string
  content: string
}


export function getAllTerms(locale: SupportedLocale = 'en'): Term[] {
  // Get terms from bundled data instead of filesystem
  const terms = TERMS_DATA[locale] || [];
  
  // Return a copy to avoid mutations
  return [...terms];
}

export  function getTermBySlug(slug: string, locale: SupportedLocale = 'en'): Term | undefined{
  const terms =  getAllTerms(locale);
  return terms.find(term => term.slug === slug);
}
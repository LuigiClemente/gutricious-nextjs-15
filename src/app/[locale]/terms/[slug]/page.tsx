import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getTermBySlug, getAllTerms } from '@/lib/terms'
import JsonLd from '@/components/JsonLd'
import { generateMetadata as createMetadata } from '@/utils/metadata'
import TermPageClient from './TermPageClient'

// Define types
interface TermPageParams {
  slug: string;
  locale: string;
}

interface TermPageProps {
  params: Promise<TermPageParams>;
}

// Generate static params for all terms
export async function generateStaticParams() {
  // Get all terms for all supported locales
  const supportedLocales = ['en', 'de', 'fr', 'es', 'pt', 'it', 'nl'];
  const params: Array<{ locale: string; slug: string }> = [];
  
  for (const locale of supportedLocales) {
    const terms = getAllTerms(locale as any);
    terms.forEach((term) => {
      params.push({
        locale,
        slug: term.slug,
      });
    });
  }
  
  return params;
}

// Generate metadata for each term page
export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const term = getTermBySlug(slug, locale as any);
  
  if (!term) {
    return {};
  }
  
  // Extract first 160 characters for description
  const description = term.content.slice(0, 300).replace(/[\r\n#*]+/g, ' ').trim();
  
  return createMetadata(
    locale,
    `terms/${slug}`,
    `Gutricious - ${term.title}`,
    description
  );
}

// Term Schema for SEO
function getTermSchema(locale: string, term: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': term.title,
    'description': term.content.slice(0, 300).replace(/[\r\n#*]+/g, ' ').trim(),
    'inLanguage': locale,
    'datePublished': term.date,
    'dateModified': term.date,
    'mainEntity': {
      '@type': 'WebContent',
      'name': term.title,
      'text': term.content.slice(0, 1000).replace(/[\r\n#*]+/g, ' ').trim(),
      'datePublished': term.date,
      'publisher': {
        '@type': 'Organization',
        'name': 'Gutricious',
        'url': `https://home.gutricious.com/${locale}`
      }
    }
  };
}

export default async function TermPage({ params }: TermPageProps) {
  const { locale, slug } = await params;
  const term = getTermBySlug(slug, locale as any);

  if (!term) {
    notFound();
  }

  const termSchema = getTermSchema(locale, term);
  
  return (
    <>
      {/* Add structured data for SEO */}
      <JsonLd data={termSchema} />
      
      {/* Client-side interactive content */}
      <Suspense fallback={<div>Loading...</div>}>
        <TermPageClient slug={slug} locale={locale} />
      </Suspense>
    </>
  );
}

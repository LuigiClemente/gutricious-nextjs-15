import { Metadata } from 'next';
import { Suspense } from 'react';
import TermsClient from './TermsClient';
import { getAllTerms } from '@/lib/terms';
import { generateMetadata as createMetadata } from '@/utils/metadata';
import JsonLd from '@/components/JsonLd';
import BreadcrumbSchema from '@/components/Breadcrumb/BreadcrumbSchema';

// Generate metadata for this page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return createMetadata(
    locale,
    'terms',
    `Gutricious - Terms and Legal Notices`,
    'Legal documents and terms of service for Gutricious, including all policies and agreements governing the use of our services.'
  );
}

// Terms of Service Schema for SEO
function getTermsSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms and Legal Notices',
    'description': 'Legal documents and terms of service for Gutricious, including all policies and agreements governing the use of our services.',
    'inLanguage': locale,
    'datePublished': '2023-01-01',
    'dateModified': new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
    'mainEntity': {
      '@type': 'TermsAndConditions',
      'name': 'Gutricious Terms and Legal Notices',
      'offers': {
        '@type': 'Offer',
        'seller': {
          '@type': 'Organization',
          'name': 'Gutricious',
          'url': `https://home.gutricious.com/${locale}`
        }
      }
    }
  };
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const termsSchema = getTermsSchema(locale);
  
  // Define breadcrumb items for this page
  const breadcrumbItems = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Terms & Legal Notices', url: `/${locale}/terms` }
  ];
  
  return (
    <>
      {/* Add structured data for SEO */}
      <JsonLd data={termsSchema} />
      <BreadcrumbSchema items={breadcrumbItems} locale={locale} />
      
      {/* Client-side interactive content */}
      <Suspense fallback={<div>Loading...</div>}>
        <TermsClient locale={locale} />
      </Suspense>
    </>
  );
}

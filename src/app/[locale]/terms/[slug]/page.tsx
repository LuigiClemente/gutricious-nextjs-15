"use client"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { getTermBySlug, getAllTerms } from '@/lib/terms'
import ReactMarkdown from 'react-markdown'
import { useLocale } from '@/components/SimpleTranslationProvider'
import FloatingCloseButton from '@/components/FloatingCloseButton'
import React from 'react'

interface TermPageParams {
  slug: string;
  locale: string;
}

export default function TermPage({ params }: { params: Promise<TermPageParams> }) {
  // Ensure we have the slug before proceeding
  const locale = useLocale();
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const term = getTermBySlug(slug, locale as any)

  if (!term) {
    notFound()
  }

  return (
    <div className="relative min-h-screen bg-white">
      <FloatingCloseButton locale={locale} />
            
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-2xl md:text-3xl text-gray-700 font-normal mb-8">
          Last updated: {format(new Date(term.date), 'MMMM d, yyyy')}
        </div>
        
        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <ReactMarkdown
            components={{
              a: ({node, ...props}) => {
                const href = props.href || '';
                
                // Handle internal links to other terms
                if (href.startsWith('#') && href.length > 1) {
                  // Extract the slug from the href (remove the # symbol)
                  const linkedSlug = href.substring(1);
                  return (
                    <Link 
                      href={`/${locale}/terms/${linkedSlug}`} 
                      className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200"
                    >
                      {props.children}
                    </Link>
                  );
                }
                
                // Handle absolute internal links (like /PrivacyPolicy)
                if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
                  return (
                    <Link 
                      href={`/${locale}${href}`} 
                      className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200"
                    >
                      {props.children}
                    </Link>
                  );
                }
                
                // External links or other internal links
                return <a {...props} className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200" />;
              }
            }}
          >
            {term.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

"use client"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { getTermBySlug } from '@/lib/terms'
import ReactMarkdown from 'react-markdown'
import React, { useState } from 'react'
import FloatingCloseButton from '@/components/FloatingCloseButton'
import { useRouter } from 'next/navigation'

const internalLinkRegex = /\[([^\]]+)\]\(\/(terms\/[^)]+)\)/g;

export default function TermPageClient({ slug, locale }: { slug: string; locale: string }) {
  const router = useRouter();
  const term = getTermBySlug(slug, locale as any)
  const [hovered, setHovered] = useState(false)

  if (!term) {
    notFound()
  }

  // Convert internal markdown links to handle client-side routing
  const processedContent = term.content.replace(
    internalLinkRegex,
    (match, text, path) => `[${text}](/${locale}/${path})`
  );

  // Format the date
  const formattedDate = term.date ? format(new Date(term.date), 'MMMM d, yyyy') : '';


  // Return to terms list
  const handleReturn = () => {
    router.push(`/${locale}/terms`);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <FloatingCloseButton locale={locale} />
            
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        
        <div className="text-2xl md:text-3xl text-gray-700 font-normal mb-8">
          Last updated: {formattedDate}
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

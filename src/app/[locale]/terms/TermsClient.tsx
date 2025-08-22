"use client"

import Link from 'next/link';
import { getAllTerms } from '@/lib/terms';
import { useLocale, useTranslations } from '@/components/SimpleTranslationProvider';
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';

// Component to handle term titles with inline arrows
const TermTitle = ({ title }: { title: string }) => {
  // Process the title to ensure arrow stays with the last word
  const splitTitle = title.split(' ');
  const lastWord = splitTitle.pop() || '';
  const mainTitle = splitTitle.join(' ');
  
  return (
    <div className="text-center">
      <span className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-600">
        {mainTitle.length > 0 ? `${mainTitle} ` : ''}
        <span className="whitespace-nowrap">
          {lastWord}
          <span className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-600 ml-2 inline-block">
            →
          </span>
        </span>
      </span>
    </div>
  );
};

export default function TermsClient({ locale }: { locale: string }) {
  const terms = getAllTerms(locale as any);
  const t = useTranslations("Index");
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);


  return (
    <div className="min-h-screen bg-white">
      <div className="custom-container">
        <Navigation
          section={"dark"}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isLangBtnHovered={isLangBtnHovered}
          setIsLangBtnHovered={setIsLangBtnHovered}
          selectCard={()=>{}}
        />
      </div>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-36 md:mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("legalNoticesTitle")}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600">
            {t("legalNoticesSubtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {terms && Array.isArray(terms) ? terms.map((term, index) => {
            const termId = term?.id || `term-${index}`;
            const termSlug = term?.slug || '';
            const termTitle = term?.title || `Term ${index + 1}`;
            
            return (
              <div key={termId} className="mb-10 text-center">
                <Link 
                  href={`/${locale}/terms/${termSlug}`} 
                  className="inline-block w-full"
                >
                  <TermTitle title={termTitle} />
                </Link>
                <div className="border-b border-gray-400 w-full mt-4"></div>
              </div>
            );
          }) : (
            <div className="text-center py-8">
              <p className="text-xl text-gray-500">No terms available at this time.</p>
            </div>
          )}
        </div>
      </main>
      <Footer footerBg={"#2ae8d3"} selectCard={()=>{}} isOnTerms={true} />
    </div>
  );
}

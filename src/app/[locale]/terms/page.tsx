"use client"
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllTerms } from '@/lib/terms';
// import { getLocale } from 'next-intl/server';
// import { SupportedLocale } from '@/lib/generated-terms';
import { useLocale, useTranslations } from '@/components/SimpleTranslationProvider';
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer/Footer';

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

export default  function Home() {
   const locale = useLocale();
  const terms =  getAllTerms(locale as any);
  const t = useTranslations("Index");
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);

console.log({terms})
  return (
    <div className="min-h-screen bg-white ">
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
        <div className="text-center mb-12 mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
{t("legalNoticesTitle")}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600">
          {t("legalNoticesSubtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {terms.map((term) => (
            <div key={term.id} className="mb-10 text-center">
              <Link 
                href={`/${locale}/terms/${term.slug}`} 
                className="inline-block"
              >
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-600">
                    {term.title}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-600 ml-3">
                    →
                  </span>
                </div>
              </Link>
              <div className="border-b border-gray-400 w-full mt-4"></div>
            </div>
          ))}
        </div>
      </main>
        <Footer footerBg={"#2ae8d3"} selectCard={()=>{}} isOnTerms={true } />

    </div>
  );
}

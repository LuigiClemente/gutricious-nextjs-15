"use client"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { getTermBySlug, getAllTerms } from '@/lib/terms'
import ReactMarkdown from 'react-markdown'
import { useLocale } from '@/components/SimpleTranslationProvider'
import FloatingCloseButton from '@/components/FloatingCloseButton'

export default async function TermPage({ params }: any) {
  // Ensure we have the slug before proceeding
  const locale = useLocale();
  const { slug } = params
  const term =  getTermBySlug(slug ,locale as any)

  if (!term) {
    notFound()
  }

  return (
    <div className="fixed inset-0 bg-white  z-50 overflow-hidden flex justify-center items-center markdown">
      <div className="w-full h-full max-w-7xl max-h-screen overflow-auto p-4 sm:p-6 md:p-8">
        <div className="bg-white  rounded-lg shadow-2xl w-full h-full overflow-hidden">
      <FloatingCloseButton locale={locale} />
            
          <div className="p-6 sm:p-8 h-full flex flex-col">
            <h1 className="!text-5xl sm:text-3xl font-bold text-gray-900  mb-2">
              {term.title}
            </h1>
            <div className="text-sm text-gray-500  mb-6">
              Last updated: {format(new Date(term.date), 'MMMM d, yyyy')}
            </div>
            
            <div className="prose  max-w-none flex-grow overflow-y-auto text-gray-700 ">
              <ReactMarkdown>
                {term.content}
              </ReactMarkdown>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  )
}

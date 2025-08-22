import { Main } from '@/components/main'
import HomePage from './homepage';
import { Suspense } from 'react';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <>
      <Suspense fallback={null}>
        <HomePage locale={locale} />
      </Suspense>
      <Main />
    </>
  );
}

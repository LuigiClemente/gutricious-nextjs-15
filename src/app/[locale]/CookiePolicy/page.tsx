import { Metadata } from "next";
import { Suspense } from "react";
import PolicyMetadata, { generatePolicyMetadata } from "../PolicyMetadata";
import CookiePolicyClient from "./CookiePolicyClient";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return generatePolicyMetadata({ params }, 'cookie', 'CookiePolicy');
}

export default function CookiePolicy({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  // Breadcrumb items removed
  
  return (
    <>
      {/* Add structured data */}
      <Suspense fallback={null}>
        <PolicyMetadata 
          locale={locale} 
          policyType="cookie" 
          path="CookiePolicy" 
        />
      </Suspense>
      
      {/* Client-side interactive elements */}
      <CookiePolicyClient locale={locale} />
    </>
  );
}

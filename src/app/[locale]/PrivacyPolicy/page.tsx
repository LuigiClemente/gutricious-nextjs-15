import { Metadata } from "next";
import { Suspense } from "react";
import PolicyMetadata, { generatePolicyMetadata } from "../PolicyMetadata";
import PolicyClient from "./PolicyClient";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return generatePolicyMetadata({ params }, 'privacy', 'PrivacyPolicy');
}

export default function PrivacyPolicy({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <>
      {/* Add structured data */}
      <Suspense fallback={null}>
        <PolicyMetadata 
          locale={locale} 
          policyType="privacy" 
          path="PrivacyPolicy" 
        />
      </Suspense>
      
      {/* Client-side interactive elements */}
      <PolicyClient locale={locale} />
    </>
  );
}

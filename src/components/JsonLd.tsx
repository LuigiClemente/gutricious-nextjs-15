// Adding this to ensure compatibility with Server Components
import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * Component to inject JSON-LD structured data into the page head
 * This helps search engines understand the content and may enable rich results
 */
export default function JsonLd({ data }: JsonLdProps) {
  // Using Next.js compatible approach to render JSON-LD in Server Components
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      id={`jsonld-${Math.random().toString(36).substring(2, 9)}`}
    />
  );
}

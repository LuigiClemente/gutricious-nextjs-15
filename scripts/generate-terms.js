const fs = require('fs');
const path = require('path');

function readJsonArticles(locale) {
  const jsonDir = path.join(process.cwd(), 'src/data/json-legal-notices', locale);
  
  if (!fs.existsSync(jsonDir)) {
    console.warn(`No JSON articles directory found for locale: ${locale}`);
    return [];
  }
  
  const jsonFiles = fs.readdirSync(jsonDir, { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.json'))
    .map(dirent => dirent.name);
  
  const terms = [];
  
  jsonFiles.forEach(jsonFile => {
    try {
      const filePath = path.join(jsonDir, jsonFile);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const article = JSON.parse(fileContent);
      
      terms.push({
        id: article.id || jsonFile.replace('.json', ''),
        title: article.title,
        date: article.date || '2024-04-30',
        slug: article.slug,
        summary: article.summary || 'Legal terms and conditions.',
        content: article.content
      });
    } catch (error) {
      console.error(`Error reading JSON article ${jsonFile} for locale ${locale}:`, error);
    }
  });
  
  // Custom sorting function
  return terms.sort((a, b) => {
    const aIsPolicy = a.slug === 'cookie-policy' || a.slug === 'privacy-policy';
    const bIsPolicy = b.slug === 'cookie-policy' || b.slug === 'privacy-policy';
    
    if (aIsPolicy && bIsPolicy) {
      return a.slug === 'privacy-policy' ? 1 : -1;
    }
    if (aIsPolicy) return 1;
    if (bIsPolicy) return -1;
    
    return a.title.localeCompare(b.title);
  });
}

function generateTermsData() {
  console.log('🔄 Generating terms data...');
  
  const locales = ['en', 'fr', 'de', 'es', 'it', 'nl', 'pt'];
  const allTerms = {};

  locales.forEach(locale => {
    console.log(`📖 Reading terms for locale: ${locale}`);
    allTerms[locale] = readJsonArticles(locale);
    console.log(`✅ Found ${allTerms[locale].length} terms for ${locale}`);
  });

  // Ensure the lib directory exists
  const libDir = path.join(process.cwd(), 'src/lib');
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  const moduleContent = `// This file is auto-generated. Do not edit manually.
// Generated on: ${new Date().toISOString()}

import { Term } from '@/types/term';

export const TERMS_DATA: Record<string, Term[]> = ${JSON.stringify(allTerms, null, 2)} as const;

export type SupportedLocale = 'en' | 'fr' | 'de' | 'es' | 'it' | 'nl' | 'pt';
`;

  const outputPath = path.join(process.cwd(), 'src/lib/generated-terms.ts');
  fs.writeFileSync(outputPath, moduleContent);
  
  console.log('✅ Terms data generated successfully!');
  console.log(`📁 Generated file: ${outputPath}`);
}

// Run the generation
generateTermsData();
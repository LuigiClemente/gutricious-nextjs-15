const fs = require('fs');
const path = require('path');

// Define source and destination paths
const sourceCookiesDir = '/home/paulo/gutricious_terms_of_use/content/cookies';
const sourcePrivacyDir = '/home/paulo/gutricious_terms_of_use/content/privacy';
const destDir = '/home/paulo/gutricious-legal-notices/src/data/json-legal-notices';

// Define supported locales
const locales = ['en', 'fr', 'de', 'es', 'it', 'nl', 'pt'];

// Function to convert markdown to JSON
function convertMarkdownToJson(markdownContent, type, locale) {
  // Extract title from the first heading
  const titleMatch = markdownContent.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : (type === 'cookies' ? 'Cookie Policy' : 'Privacy Policy');
  
  // Create JSON object
  const jsonObject = {
    id: type === 'cookies' ? '98. Cookie Policy' : '99. Privacy Policy',
    title: type === 'cookies' ? 'Cookie Policy' : 'Privacy Policy',
    date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    slug: type === 'cookies' ? 'cookie-policy' : 'privacy-policy',
    summary: type === 'cookies' 
      ? 'Information about how we use cookies on our website'
      : 'Details about how we collect, use, and protect your personal information',
    content: markdownContent
  };
  
  return JSON.stringify(jsonObject, null, 2);
}

// Process each locale
locales.forEach(locale => {
  try {
    // Process cookies file
    const cookiesSourcePath = path.join(sourceCookiesDir, `${locale}.md`);
    const cookiesDestPath = path.join(destDir, locale, `cookie-policy.json`);
    
    if (fs.existsSync(cookiesSourcePath)) {
      const cookiesMarkdown = fs.readFileSync(cookiesSourcePath, 'utf8');
      const cookiesJson = convertMarkdownToJson(cookiesMarkdown, 'cookies', locale);
      
      // Ensure destination directory exists
      const cookiesDestDir = path.dirname(cookiesDestPath);
      if (!fs.existsSync(cookiesDestDir)) {
        fs.mkdirSync(cookiesDestDir, { recursive: true });
      }
      
      // Write JSON file
      fs.writeFileSync(cookiesDestPath, cookiesJson);
      console.log(`Converted ${locale} Cookie Policy to JSON`);
    } else {
      console.log(`Warning: ${locale} Cookie Policy not found at ${cookiesSourcePath}`);
    }
    
    // Process privacy file
    const privacySourcePath = path.join(sourcePrivacyDir, `${locale}.md`);
    const privacyDestPath = path.join(destDir, locale, `privacy-policy.json`);
    
    if (fs.existsSync(privacySourcePath)) {
      const privacyMarkdown = fs.readFileSync(privacySourcePath, 'utf8');
      const privacyJson = convertMarkdownToJson(privacyMarkdown, 'privacy', locale);
      
      // Ensure destination directory exists
      const privacyDestDir = path.dirname(privacyDestPath);
      if (!fs.existsSync(privacyDestDir)) {
        fs.mkdirSync(privacyDestDir, { recursive: true });
      }
      
      // Write JSON file
      fs.writeFileSync(privacyDestPath, privacyJson);
      console.log(`Converted ${locale} privacy policy to JSON`);
    } else {
      console.log(`Warning: ${locale} privacy policy not found at ${privacySourcePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${locale}:`, error);
  }
});

console.log('Conversion complete!');

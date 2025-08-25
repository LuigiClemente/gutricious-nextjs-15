import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function readJsonArticles(locale) {
  const jsonDir = path.join(process.cwd(), 'src/data/json-legal-notices', locale);
  console.log(`Checking directory: ${jsonDir}`);
  
  if (!fs.existsSync(jsonDir)) {
    console.warn(`No JSON articles directory found for locale: ${locale}`);
    return [];
  }
  
  try {
    const files = fs.readdirSync(jsonDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        try {
          const filePath = path.join(jsonDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(content);
        } catch (err) {
          console.error(`Error reading ${file} in ${locale}:`, err);
          return null;
        }
      })
      .filter(article => article !== null);
  } catch (err) {
    console.error(`Error reading directory ${locale}:`, err);
    return [];
  }
}

function generateTermsData() {
  // Available locales
  const locales = ['en', 'es', 'fr', 'de', 'it', 'nl', 'pt'];
  
  // Create the terms data directory if it doesn't exist
  const termsDataDir = path.join(process.cwd(), 'src/data/terms');
  if (!fs.existsSync(termsDataDir)) {
    fs.mkdirSync(termsDataDir, { recursive: true });
  }
  
  // Process each locale
  locales.forEach(locale => {
    console.log(`Processing terms for locale: ${locale}`);
    const articles = readJsonArticles(locale);
    
    // Sort articles by date, newest first
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Write the compiled data to a JSON file
    const outputPath = path.join(termsDataDir, `${locale}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
    console.log(`Terms data for ${locale} written to ${outputPath}`);
  });
  
  console.log('Terms data generation complete!');
}

try {
  // Run the generation
  console.log('Starting terms generation');
  generateTermsData();
} catch (error) {
  console.error('Error generating terms data:', error);
  process.exit(1);
}

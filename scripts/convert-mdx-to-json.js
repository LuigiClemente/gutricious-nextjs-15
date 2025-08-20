// Script to convert MDX files to JSON format
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const blogDir = path.join(process.cwd(), 'src/data/blog');
const jsonDir = path.join(process.cwd(), 'src/data/json-legal-notices');

// Make sure the JSON directory exists
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir, { recursive: true });
}

// Supported locales
const supportedLocales = ['en', 'fr', 'de', 'es', 'it', 'nl', 'pt'];

// Function to create slug from directory name
function createSlug(dirName) {
  return dirName.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Function to convert MDX to JSON
function convertMdxToJson() {
  // Read all article directories
  const articleDirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Process each locale
  supportedLocales.forEach(locale => {
    console.log(`\nProcessing ${locale} locale...`);
    
    // Create the locale-specific JSON directory
    const localeJsonDir = path.join(jsonDir, locale);
    if (!fs.existsSync(localeJsonDir)) {
      fs.mkdirSync(localeJsonDir, { recursive: true });
    }
    
    // Process each article directory
    articleDirs.forEach((articleDir) => {
      const articlePath = path.join(blogDir, articleDir);
      const localeFile = path.join(articlePath, `${locale}.mdx`);
      
      if (fs.existsSync(localeFile)) {
        try {
          const fileContent = fs.readFileSync(localeFile, 'utf8');
          const { data, content } = matter(fileContent);
          
          // Create JSON object
          const articleJson = {
            id: articleDir, // Using directory name as ID
            title: data.title || articleDir,
            date: data.date || '2024-04-30',
            slug: createSlug(articleDir),
            summary: data.summary || 'Legal terms and conditions.',
            content: content
          };
          
          // Write to JSON file
          const jsonFilename = createSlug(articleDir) + '.json';
          const jsonPath = path.join(localeJsonDir, jsonFilename);
          
          fs.writeFileSync(jsonPath, JSON.stringify(articleJson, null, 2));
          console.log(`Converted: ${locale}/${jsonFilename}`);
        } catch (error) {
          console.error(`Error converting ${articleDir} for locale ${locale}:`, error);
        }
      }
    });
  });
  
  console.log('\nConversion complete!');
}

// Run the conversion
convertMdxToJson();

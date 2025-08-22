#!/usr/bin/env node

/**
 * Test script for OG image generation
 * 
 * This script generates a URL for the OG image API with test parameters
 * and opens it in a browser to verify that the OG image generation works correctly.
 * 
 * Usage: node test-og-image.js [title] [description] [locale]
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const defaultTitle = 'Gutricious - Test Title';
const defaultDescription = 'This is a test description for the OG image generator';
const defaultLocale = 'en';

// Get parameters from command line arguments or use defaults
const title = process.argv[2] || defaultTitle;
const description = process.argv[3] || defaultDescription;
const locale = process.argv[4] || defaultLocale;

// Create the OG image URL
const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`;

console.log('\n==== OG Image Test ====\n');
console.log(`Title: ${title}`);
console.log(`Description: ${description}`);
console.log(`Locale: ${locale}`);
console.log('\nGenerated URL:');
console.log(ogImageUrl);
console.log('\nOpen this URL in your browser to test the OG image generation.');
console.log('\n=======================\n');

// Attempt to open URL automatically if in an environment with access to a browser
try {
  const { execSync } = require('child_process');
  
  // Determine the platform and open the URL accordingly
  switch (process.platform) {
    case 'darwin': // macOS
      execSync(`open "${ogImageUrl}"`);
      break;
    case 'win32': // Windows
      execSync(`start "${ogImageUrl}"`);
      break;
    default: // Linux
      execSync(`xdg-open "${ogImageUrl}"`);
      break;
  }
  
  console.log('Opened URL in browser.');
} catch (error) {
  console.log('Could not open URL automatically. Please copy and paste it into your browser.');
}

#!/bin/bash

# Ensure we're in the project root
cd "$(dirname "$0")/.." || exit 1

# Clean build artifacts
npm run clean:build

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the application
echo "Building application..."
npm run build

# Deploy to Cloudflare
echo "Deploying to Cloudflare..."
npx wrangler@4 deploy

echo "Deployment complete!"

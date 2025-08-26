import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/utils/languages';

export function middleware(request: NextRequest) {
    // Get the pathname of the request (e.g. /, /products, /en)
    const pathname = request.nextUrl.pathname;
    
    // Skip static assets completely - before any other processing
    if (pathname.includes('.')) {
        // For static assets, just add security headers
        const response = NextResponse.next();
        
        // Add security headers
        addSecurityHeaders(response);
        return response;
    }
    
    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
    
    // If it already has a locale, don't modify the request path but add security headers
    if (pathnameHasLocale) {
        const response = NextResponse.next();
        addSecurityHeaders(response);
        return response;
    }
    
    // Redirect non-locale paths to English (/en)
    // For root path '/' → '/en'
    // For other paths '/products' → '/en/products'
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    
    // Use 308 permanent redirect for better caching
    const response = NextResponse.redirect(url, { status: 308 });
    addSecurityHeaders(response);
    return response;
}

// Helper function to add security headers including Content Security Policy
function addSecurityHeaders(response: NextResponse) {
    // Add Content Security Policy to allow Umami analytics
    response.headers.set(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://umami.gutricious.com; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https://res.cloudinary.com https://imagedelivery.net; " +
        "connect-src 'self' https://umami.gutricious.com; " +
        "font-src 'self'; " +
        "frame-src 'self';"
    );
    
    // Add other security headers
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
}

export const config = {
    matcher: [
        // Only match routes that need locale prefixes
        // Explicitly exclude favicon.ico and all static files
        '/((?!api/|_next/|_vercel/|assets/|favicon\.ico|.*\..*).*)'    
    ]
};

export const runtime = 'experimental-edge';

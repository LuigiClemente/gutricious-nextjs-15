import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/utils/languages';

export function middleware(request: NextRequest) {
    // Get the pathname of the request (e.g. /, /products, /en)
    const pathname = request.nextUrl.pathname;
    
    // Skip static assets completely - before any other processing
    if (pathname.includes('.')) {
        return NextResponse.next();
    }
    
    // Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );
    
    // If it already has a locale, don't modify the request
    if (pathnameHasLocale) {
        return NextResponse.next();
    }
    
    // Redirect non-locale paths to English (/en)
    // For root path '/' → '/en'
    // For other paths '/products' → '/en/products'
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    
    // Use 308 permanent redirect for better caching
    return NextResponse.redirect(url, { status: 308 });
}

export const config = {
    matcher: [
        // Only match routes that need locale prefixes
        // Explicitly exclude favicon.ico and all static files
        '/((?!api/|_next/|_vercel/|assets/|favicon\.ico|.*\..*).*)'    
    ]
};

export const runtime = 'experimental-edge';

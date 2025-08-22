import { routes } from '@/utils/routes';
import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/utils/languages';

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    
    // Special case for root domain or IP address requests
    if (url.pathname === '/') {
        url.pathname = `/${defaultLocale}`;
        return NextResponse.redirect(url);
    }

    // Check if the pathname already starts with a locale
    const pathnameHasLocale = locales.some(
        (locale) => url.pathname.startsWith(`/${locale}/`) || url.pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    // Detect browser locale from the Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    let browserLocale = defaultLocale;

    if (acceptLanguage) {
        // Extract the first preferred language from the header
        const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0];
        if (preferredLanguage && locales.includes(preferredLanguage as any)) {
            browserLocale = preferredLanguage;
        }
    }

    // Check for locale cookie
    const localeCookie = request.cookies.get('NEXT_LOCALE');
    if (localeCookie && locales.includes(localeCookie.value)) {
        browserLocale = localeCookie.value;
    }

    // Dynamically handle redirection based on the pathname and detected locale
    let shouldRedirect = false;

    // Type-safe iteration over routes object
    for (const locale of locales) {
        // Check that locale exists in routes
        if (locale in routes) {
            const routeObj = routes[locale as keyof typeof routes];
            for (const key in routeObj) {
                if (url.pathname === routeObj[key as keyof typeof routeObj]) {
                    url.pathname = `/${locale}`; // Redirect to the root of the locale
                    shouldRedirect = true;
                    break;
                }
            }
        }
        if (shouldRedirect) break;
    }

    // If no specific route is matched, set the pathname to the browser's detected locale
    if (!shouldRedirect) {
        url.pathname = `/${browserLocale}${url.pathname}`;
    }

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'] // Ensuring the matcher excludes specific paths
};

export const runtime = 'experimental-edge';

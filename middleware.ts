import { routes } from '@/utils/routes';
import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/utils/languages';

const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

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
        if (preferredLanguage && routes[preferredLanguage]) {
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

    for (const locale in routes) {
        for (const key in routes[locale]) {
            if (url.pathname === routes[locale][key]) {
                url.pathname = `/${locale}`; // Redirect to the root of the locale
                shouldRedirect = true;
                break;
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

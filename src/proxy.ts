import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['id', 'en'];
const defaultLocale = 'id';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale path
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal resources and static files with extensions (containing dots)
    '/((?!api|_next/static|_next/image|favicon.ico|avatar.png|.*\\..*).*)',
  ],
};

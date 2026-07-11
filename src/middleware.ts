import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en', 'de', 'fr', 'nl']
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api/') ||
    pathname.includes('/images/') || 
    pathname === '/favicon.ico' || 
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }


  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameHasLocale) return NextResponse.next()

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl, 308)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static files, etc)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}

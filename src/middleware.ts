import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en', 'de', 'fr', 'nl']
const defaultLocale = 'el'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next') || 
    pathname.includes('/images/') || 
    pathname === '/favicon.ico' || 
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }


  // Redirect the new blog post from any non-el locale to /el
  if (pathname.match(/^\/(en|de|fr|nl)\/blog\/vioklimatiki-pergola-i-tentopergola/)) {
    request.nextUrl.pathname = '/el/blog/vioklimatiki-pergola-i-tentopergola'
    return NextResponse.redirect(request.nextUrl, 308)
  }

  // Redirect unsupported blog locales to /en/blog
  if (pathname.match(/^\/(de|fr|nl)\/blog/)) {
    request.nextUrl.pathname = pathname.replace(/^\/(de|fr|nl)\/blog/, '/en/blog')
    return NextResponse.redirect(request.nextUrl, 308)
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

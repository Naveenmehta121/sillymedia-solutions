import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Indexing guard for the Vercel deployment host.
 *
 * The canonical domain for this site is https://sillymediasolutions.in (see
 * site.config.ts). The site is also reachable on *.vercel.app. Search
 * engines must not index that duplicate host, so vercel.app traffic is
 * permanently redirected to the canonical domain, and any residual
 * vercel.app response still carries `X-Robots-Tag: noindex, nofollow`.
 */
function vercelRedirect(request: NextRequest): NextResponse | null {
  const host = request.headers.get('host') || '';
  if (host.endsWith('.vercel.app')) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://sillymediasolutions.in');
    return NextResponse.redirect(url, 301);
  }
  return null;
}

export function middleware(request: NextRequest) {
  const redirect = vercelRedirect(request);
  if (redirect) return redirect;

  const response = NextResponse.next();
  const host = request.headers.get('host') || '';
  if (host.endsWith('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return response;
}

export const config = {
  matcher: '/:path*',
};

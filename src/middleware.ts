import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Indexing guard for the Vercel deployment host.
 *
 * The canonical domain for this site is https://sillymedia.in (see
 * site.config.ts). Until sillymedia.in is pointed at this Vercel project,
 * the site is also reachable on *.vercel.app. Search engines must not index
 * that duplicate host, so every response served from a *.vercel.app host
 * carries `X-Robots-Tag: noindex, nofollow`. The canonical host is untouched.
 *
 * PREPARED, NOT ENABLED — 301 from vercel.app to sillymedia.in:
 * Once sillymedia.in is live on Vercel, uncomment the block below (and keep
 * the noindex header as a safety net for any residual vercel.app traffic).
 * Do NOT enable it before the domain is pointed, or vercel.app visitors
 * would be sent to the old WordPress site currently on sillymedia.in.
 */
// function vercelRedirect(request: NextRequest): NextResponse | null {
//   const host = request.headers.get('host') || '';
//   if (host.endsWith('.vercel.app')) {
//     const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://sillymedia.in');
//     return NextResponse.redirect(url, 301);
//   }
//   return null;
// }

export function middleware(request: NextRequest) {
  // const redirect = vercelRedirect(request);
  // if (redirect) return redirect;

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

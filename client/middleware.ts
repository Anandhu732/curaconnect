import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define protected routes that require authentication
const protectedRoutes = ['/dashboard', '/booking'];

// Define public routes that should redirect authenticated users
const authRoutes = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user has auth token in cookies or localStorage
  // Since middleware runs on the server, we'll check for a cookie
  const authToken = request.cookies.get('auth-token');
  const isAuthenticated = Boolean(authToken?.value);

  // Check if the current path is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.includes(pathname);

  // If user is not authenticated and trying to access protected route
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated and trying to access auth routes, redirect to dashboard
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Configure which routes should use middleware
export const config = {
  matcher: [
    // Match all routes except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
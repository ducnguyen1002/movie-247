import { NextResponse } from 'next/server';

export async function middleware(req) {
  const cacheControl = req.headers.get('Cache-Control');

  if (cacheControl) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=59');
  return response;
}

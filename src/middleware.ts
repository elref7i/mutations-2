import { NextRequest, NextResponse } from 'next/server';

//* اخليه يشتغل على ملفات
const privatePages = ['/categories', '/categories/add-category'];
export default function middleware(req: NextRequest) {
  // console.log(req.nextUrl.pathname);
  // console.log(req.nextUrl.origin);
  //*E.X
  const token = req.cookies.get('token');

  if (privatePages.includes(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next();
    }
    return NextResponse.redirect('http:localhost:3000/');
  }
  return NextResponse.next();
}

//* Value اخليه يشتغل على قيم
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

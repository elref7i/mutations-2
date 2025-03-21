import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(`${process.env.API!}/categories`);
  const payload = await response.json();

  return NextResponse.json(payload);
}
export async function POST(req: NextRequest) {
  // const jsonData = req.json();
  // const formData = req.formData();
  // const params = req.nextUrl.searchParams;
  // const searchParams = req.nextUrl.search;

  return NextResponse.json({ message: 'success' });
}

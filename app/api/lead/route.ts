import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ ok: false }, { status: 400 });
  // In a real app, forward to CRM/email/DB. For now, log server-side.
  console.log('[lead]', data);
  return NextResponse.json({ ok: true });
}
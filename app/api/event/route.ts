import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Minimal validation and safe logging; extend to use analytics/CRM later
    console.log('[event]', data?.event, { payload: data?.payload, ts: data?.ts });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
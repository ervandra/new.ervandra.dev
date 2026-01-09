"use client";
import Link from 'next/link';
import { BOOK_INTRO_URL, EMAIL_URL, WHATSAPP_URL } from '@/lib/links';
import { track } from '@/lib/analytics';

export default function ContactBlock() {
  const hasWA = Boolean(WHATSAPP_URL);
  const hasBook = Boolean(BOOK_INTRO_URL);
  const hasEmail = Boolean(EMAIL_URL);
  return (
    <section className="section">
      <div className="container card p-6">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div>
            <h3 className="text-xl font-semibold">Start a quick consult</h3>
            <p className="text-sm text-muted mt-1">Short answer is better than perfect. We’ll refine together.</p>
          </div>
          <div className="flex gap-2 md:col-span-2">
            {hasWA ? (
              <a href={WHATSAPP_URL!} className="btn btn-ghost" onClick={() => track('cta_click', { cta: 'whatsapp', location: 'contact_block' })} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            ) : (
              <Link href="/contact" className="btn btn-ghost" onClick={() => track('cta_click', { cta: 'whatsapp', location: 'contact_block' })}>WhatsApp</Link>
            )}
            {hasBook ? (
              <a href={BOOK_INTRO_URL!} className="btn btn-primary" onClick={() => track('cta_click', { cta: 'book_intro', location: 'contact_block' })} target="_blank" rel="noopener noreferrer">Book Intro</a>
            ) : (
              <Link href="/contact" className="btn btn-primary" onClick={() => track('cta_click', { cta: 'book_intro', location: 'contact_block' })}>Book Intro</Link>
            )}
            {hasEmail ? (
              <a href={EMAIL_URL!} className="btn btn-ghost" onClick={() => track('cta_click', { cta: 'email', location: 'contact_block' })}>Email</a>
            ) : (
              <Link href="/contact" className="btn btn-ghost" onClick={() => track('cta_click', { cta: 'email', location: 'contact_block' })}>Email</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
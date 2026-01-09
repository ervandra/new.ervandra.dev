"use client";
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { parseUtms, track } from '@/lib/analytics';

export default function ClientAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sent = useRef<{ [k: number]: boolean }>({});
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      const utms = parseUtms(searchParams);
      track('page_view', { path: pathname, ...utms });
      mounted.current = true;
    }

    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const percent = Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100)));
      const thresholds = [25, 50, 75, 90, 100];
      for (const t of thresholds) {
        if (!sent.current[t] && percent >= t) {
          sent.current[t] = true;
          track('scroll_depth', { path: pathname, percent: t });
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname, searchParams]);

  return null;
}
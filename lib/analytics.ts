export function track(event: string, payload?: Record<string, any>) {
  try {
    // Avoid errors during SSR
    if (typeof window === 'undefined') return;
    // Basic client-side event logging (extend to your analytics of choice)
    window.dispatchEvent(new CustomEvent('analytics:track', { detail: { event, payload, ts: Date.now() } }));
    // Optional: send to /api/event for server logging
    fetch('/api/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, payload, ts: Date.now() }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

export function parseUtms(searchParams: URLSearchParams) {
  const utm_source = searchParams.get('utm_source') || undefined;
  const utm_medium = searchParams.get('utm_medium') || undefined;
  const utm_campaign = searchParams.get('utm_campaign') || undefined;
  const utm_content = searchParams.get('utm_content') || undefined;
  const utm_term = searchParams.get('utm_term') || undefined;
  return { utm_source, utm_medium, utm_campaign, utm_content, utm_term };
}
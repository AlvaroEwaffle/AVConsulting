'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/* ─── dataLayer type ─── */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const val = params.get(key);
    if (val) utm[key] = val;
  }
  return utm;
}

/* ─── Fidelidapp API ─── */
const FIDELIDAPP_URL = process.env.NEXT_PUBLIC_FIDELIDAPP_URL ?? '';
const FIDELIDAPP_ACCOUNT_ID = process.env.NEXT_PUBLIC_FIDELIDAPP_ACCOUNT_ID ?? '';

async function sendLeadToFidelidapp(email: string, name: string, sourceTag: string) {
  if (!FIDELIDAPP_URL || !FIDELIDAPP_ACCOUNT_ID) return;
  try {
    await fetch(`${FIDELIDAPP_URL}/api/landing/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: '',
        accountId: FIDELIDAPP_ACCOUNT_ID,
        tags: sourceTag,
      }),
    });
  } catch {
    // Non-blocking, ignore errors
  }
}

/* ─── EmailCaptureForm ─── */
interface EmailCaptureFormProps {
  id?: string;
  ctaText?: string;
}

export default function EmailCaptureForm({
  id,
  ctaText = 'Suscribirme gratis',
}: EmailCaptureFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    utmRef.current = getUtmParams();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);

    trackEvent('lead_capture', { form_id: id ?? 'email-capture' });

    await Promise.allSettled([
      sendLeadToFidelidapp(email.trim(), name.trim(), id ?? 'email-capture'),
    ]);
    sessionStorage.setItem('av_lead_captured', '1');
    router.push('/gracias');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
      id={id}
    >
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/[0.05] text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors text-base"
      />
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white/[0.05] text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors text-base"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 bg-accent hover:bg-accent-hover text-white font-semibold text-lg rounded-lg transition-colors disabled:opacity-60 cursor-pointer"
      >
        {loading ? 'Enviando...' : ctaText}
      </button>
      <p className="text-sm text-white/40 text-center leading-relaxed">
        Cero spam. Una táctica práctica por semana. Te das de baja cuando quieras.
      </p>
    </form>
  );
}

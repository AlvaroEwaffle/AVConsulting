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

/* ─── Fidelidapp MCP API ─── */
const FIDELIDAPP_API_URL = process.env.NEXT_PUBLIC_FIDELIDAPP_API_URL ?? '';
const FIDELIDAPP_API_KEY = process.env.NEXT_PUBLIC_FIDELIDAPP_API_KEY ?? '';

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

async function sendLeadToFidelidapp(
  name: string,
  email: string,
  utmParams: Record<string, string>,
) {
  if (!FIDELIDAPP_API_URL || !FIDELIDAPP_API_KEY) return;
  try {
    await fetch(`${FIDELIDAPP_API_URL}/api/mcp/clients/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MCP-API-Key': FIDELIDAPP_API_KEY,
      },
      body: JSON.stringify({
        slug: 'alvaro-villena',
        clientData: { name, email, ...utmParams },
        sourceTag: 'alvarovillena.cl',
      }),
    });
  } catch {
    // Fire-and-forget
  }
}

/* ─── EmailCaptureForm ─── */
interface EmailCaptureFormProps {
  id?: string;
  ctaText?: string;
}

export default function EmailCaptureForm({
  id,
  ctaText = 'Quiero la guía gratis',
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

    await sendLeadToFidelidapp(name.trim(), email.trim(), utmRef.current);
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
        Cero spam. Solo contenido que vale la pena. Te puedes dar de baja cuando
        quieras.
      </p>
    </form>
  );
}

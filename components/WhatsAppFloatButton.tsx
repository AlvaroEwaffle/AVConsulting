'use client';

import { getLenis } from '@/lib/lenis';
import { ChevronRight } from 'lucide-react';

export default function WhatsAppFloatButton() {
  const scrollToForm = () => {
    const el = document.getElementById('cta-section');
    if (!el) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToForm}
      aria-label="Ir al formulario de diagnóstico"
      className="fixed z-[9999] right-4 sm:right-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-white/70 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition-colors duration-300 hover:border-accent/30 hover:text-white touch-manipulation sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] bottom-[calc(env(safe-area-inset-bottom)+5.5rem)]"
    >
      <span className="text-sm font-light tracking-wide">Diagnóstico gratis</span>
      <ChevronRight className="w-4 h-4 text-white/50 shrink-0" strokeWidth={2} />
    </button>
  );
}

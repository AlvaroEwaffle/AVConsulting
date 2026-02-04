'use client';

/**
 * Soft CTA — enlace/botón sutil que hace scroll a la sección de contacto.
 * Para usar al final de cada sección sin competir con el CTA principal.
 */

import { getLenis } from '@/lib/lenis';

interface SoftCTAProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SoftCTA({ className = '', children }: SoftCTAProps) {
  const scrollToCTA = () => {
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
      onClick={scrollToCTA}
      className={
        className ||
        'inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-white/70 text-sm font-light backdrop-blur-sm hover:border-accent/30 hover:text-white transition-colors duration-300'
      }
    >
      {children ?? 'Agendar diagnóstico digital'}
    </button>
  );
}

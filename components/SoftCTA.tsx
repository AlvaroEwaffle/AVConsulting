'use client';

/**
 * Soft CTA — botón que guía a la siguiente sección del relato (o al CTA final).
 * Cada sección pasa scrollTo con el id de la siguiente para mantener el storytelling.
 */

import { getLenis } from '@/lib/lenis';

interface SoftCTAProps {
  className?: string;
  children?: React.ReactNode;
  /** Id de la sección a la que hacer scroll (siguiente en el relato). Por defecto: cta-section */
  scrollTo?: string;
}

export default function SoftCTA({ className = '', children, scrollTo = 'cta-section' }: SoftCTAProps) {
  const scrollToSection = () => {
    const el = document.getElementById(scrollTo);
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
      onClick={scrollToSection}
      className={
        className ||
        'inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-white/70 text-sm font-light backdrop-blur-sm hover:border-accent/30 hover:text-white transition-colors duration-300'
      }
    >
      {children ?? 'Ver si califico para diagnóstico'}
    </button>
  );
}

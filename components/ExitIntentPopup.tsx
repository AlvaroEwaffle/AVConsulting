'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import EmailCaptureForm from './EmailCaptureForm';

const MOBILE_DELAY_MS = 45_000;

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  const shouldSuppress = useCallback(() => {
    if (typeof window === 'undefined') return true;
    return (
      sessionStorage.getItem('av_lead_captured') === '1' ||
      sessionStorage.getItem('av_popup_dismissed') === '1'
    );
  }, []);

  const trigger = useCallback(() => {
    if (shouldSuppress()) return;
    setShow(true);
  }, [shouldSuppress]);

  useEffect(() => {
    if (shouldSuppress()) return;

    // Desktop: mouse leaves viewport top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile: 45s timer
    const timer = setTimeout(trigger, MOBILE_DELAY_MS);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [trigger, shouldSuppress]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('av_popup_dismissed', '1');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0f172a] p-6 sm:p-8 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-2">
              Antes de irte...
            </h3>
            <p className="text-white/50 text-center mb-6 text-sm leading-relaxed">
              ¿Quieres ideas prácticas de IA y PM para tu negocio? Una táctica por semana, gratis.
            </p>

            <EmailCaptureForm id="exit-intent-popup" ctaText="Suscribirme al newsletter" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

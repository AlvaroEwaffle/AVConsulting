'use client';

/**
 * Sección CTA para abrir el diagnóstico de presencia digital.
 * Va después de Ofertas: "¿Cómo está tu presencia? Descúbrelo en 2 minutos."
 */

import { motion } from 'framer-motion';

interface SceneDiagnosticoCtaProps {
  onOpenDiagnostico: () => void;
}

export default function SceneDiagnosticoCta({ onOpenDiagnostico }: SceneDiagnosticoCtaProps) {
  return (
    <motion.section
      id="diagnostico-cta"
      className="min-h-[40vh] md:min-h-[50vh] snap-start flex items-center justify-center relative px-4 md:px-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container max-w-2xl mx-auto text-center">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-4">
          Antes de seguir
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 md:mb-6">
          ¿Cómo está tu presencia digital?
        </h2>
        <p className="text-base md:text-lg text-white/70 font-light mb-8 md:mb-10 max-w-lg mx-auto">
          En 2 minutos descubres en qué punto estás y qué tendría más sentido construir. Sin compromiso.
        </p>
        <button
          type="button"
          onClick={onOpenDiagnostico}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-accent/40 bg-accent/10 text-accent font-medium text-sm md:text-base hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
        >
          Hacer mi diagnóstico
        </button>
      </div>
    </motion.section>
  );
}

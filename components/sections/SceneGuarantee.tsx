'use client';

/**
 * Sección de Garantía — reduce el riesgo a prácticamente 0.
 * Una frase clara que dispara la confianza cerca del CTA.
 */

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SoftCTA from '@/components/SoftCTA';

export default function SceneGuarantee() {
  return (
    <motion.section
      className="min-h-[50vh] md:min-h-[60vh] snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container max-w-3xl mx-auto relative z-10 w-full py-12 md:py-16 text-center">
        <motion.div
          className="rounded-2xl border border-accent/20 bg-accent/[0.06] backdrop-blur-sm p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <div className="flex justify-center mb-4">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 border border-accent/30">
              <ShieldCheck className="w-7 h-7 text-accent" />
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3">
            Garantía de claridad
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Si al final del diagnóstico no ves valor, no seguimos. Te devolvemos lo que hayas pagado por el diagnóstico o no cobramos. Así de seguros estamos.
          </p>
          <div className="flex justify-center mt-8 md:mt-10">
            <SoftCTA />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

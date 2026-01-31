'use client';

/**
 * ESCENA 8 — La invitación
 * 
 * Objetivo: CTA alineado al tono.
 * Visual: Fondo limpio, un solo elemento animado (línea, punto, pulso)
 * Animación: Entrada lenta, CTA aparece último, nada grita
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import LeadQualificationForm from '@/components/LeadQualificationForm';
import BrandLogo from '@/components/BrandLogo';

export default function Scene8Invitation() {
  const [lineFilled, setLineFilled] = useState(false);
  
  return (
    <motion.section
      id="cta-section"
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setLineFilled(true)}
    >
      {/* Línea azul continua desde la sección anterior */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      {/* Elemento animado minimalista - pulso */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container max-w-4xl mx-auto text-center relative z-10 w-full h-full flex flex-col items-center justify-center py-4 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-6 md:p-8 max-w-xl mx-auto"
        >
          <p className="text-base sm:text-lg text-white/60 font-light mb-5 text-left leading-relaxed">
            Si estás listo para dejar de ser uno más y empezar a proyectar el valor real de tu trabajo, agendemos una sesión estratégica de 30 minutos. Sin compromisos, solo claridad.
          </p>
          <LeadQualificationForm
            serviceName="Sistema Digital de Alto Impacto"
            buttonText="Quiero mi sistema de alto impacto"
          />
        </motion.div>

        {/* Footer minimalista */}
        <motion.footer
          className="mt-12 md:mt-16 w-full max-w-xl mx-auto border-t border-white/5 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <BrandLogo size="sm" className="opacity-20" />
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20 font-light">
              <span>© 2026 Villelabs</span>
              <span>Design by Álvaro Villena</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.section>
  );
}

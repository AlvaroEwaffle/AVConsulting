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
      className="h-screen-fixed min-h-[100dvh] snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setLineFilled(true)}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
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

      {/* Contenedor: sin scroll interno; en móvil compacto para que todo quepa en 100dvh */}
      <div className="container max-w-5xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-4 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="w-full rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-md shadow-2xl overflow-hidden ring-1 ring-white/5 md:max-w-5xl"
        >
          <div className="grid md:grid-cols-[1fr,1.1fr] min-h-0 md:min-h-[420px]">
            {/* Copy — en móvil más compacto */}
            <div className="flex flex-col justify-center p-4 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-sm md:text-lg text-white/70 font-light leading-relaxed">
                Agenda tu <strong className="text-white font-medium">diagnóstico digital gratis</strong>: 30 min para ver qué tiene sentido construir y qué no.
              </p>
              <p className="mt-2 md:mt-4 text-xs md:text-sm text-white/50 font-light">
                Sin compromiso. No pedimos tarjeta. Si no ves valor, no seguimos.
              </p>
            </div>
            {/* Form — en móvil padding y espaciado reducido para que quepa todo (incl. reCAPTCHA y botón) */}
            <div className="flex flex-col justify-center p-4 md:p-8 lg:p-10 bg-white/[0.02]">
              <LeadQualificationForm
                serviceName="Sistema Digital de Alto Impacto"
                buttonText="Agendar diagnóstico digital"
              />
            </div>
          </div>
        </motion.div>

        <motion.footer
          className="mt-4 md:mt-12 md:mt-16 w-full max-w-xl mx-auto border-t border-white/5 pt-4 md:pt-8 flex-shrink-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <BrandLogo size="sm" className="opacity-20 w-8 h-8 md:w-auto md:h-auto" />
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/20 font-light">
              <span>© 2026 Villelabs</span>
              <a href="/privacidad" className="hover:text-white/40 transition-colors">Privacidad</a>
              <a href="/terminos" className="hover:text-white/40 transition-colors">Términos</a>
              <span>Design by Álvaro Villena</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.section>
  );
}

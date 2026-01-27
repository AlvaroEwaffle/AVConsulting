'use client';

/**
 * ESCENA 5 — Cómo se ve una web pensada así
 * 
 * Objetivo: mostrar sin explicar.
 * Visual: Mockup grande de una página
 * Animación: Scroll-driven animation, transiciones suaves, el usuario siente control
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Scene5Example() {
  const [lineFilled, setLineFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.section
      ref={ref}
      className="min-h-screen snap-start flex items-center justify-center relative px-4 md:px-6"
      style={{
        minHeight: '100dvh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      onViewportEnter={() => setLineFilled(true)}
    >
      {/* Línea azul continua desde la sección anterior */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-[#2175a1] transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          style={{ opacity }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8">
            Esto no se scrollea rápido.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light">
            Se recorre.
          </p>
        </motion.div>

        {/* Mockup que reacciona al scroll */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          style={{
            opacity,
            scale,
            y,
          }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
            {/* Simulación de página */}
            <div className="space-y-6">
              <div className="h-16 bg-white/10 rounded-lg" />
              <div className="h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-white/10 rounded-lg" />
                <div className="h-32 bg-white/10 rounded-lg" />
              </div>
              <div className="h-24 bg-white/10 rounded-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

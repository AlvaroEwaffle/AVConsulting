'use client';

/**
 * ESCENA 4 — Tu enfoque (Timeline Boutique)
 * 
 * Objetivo: explicar el proceso ágil y de alto nivel.
 * Visual: Timeline vertical con estética técnica y minimalista.
 * Animación: Crecimiento de línea y aparición secuencial de pasos.
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.5,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Scene4Focus() {
  const [lineFilled, setLineFilled] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'Briefing de Identidad',
      description: (
        <>
          Sesión estratégica para entender tu <span className="text-white font-medium">visión y ADN de marca</span>.
        </>
      ),
    },
    {
      number: '02',
      title: 'Construcción Express',
      description: (
        <>
          Desarrollo intensivo con <span className="text-white font-medium">diseño de alto nivel</span> y estética boutique.
        </>
      ),
    },
    {
      number: '03',
      title: 'Lanzamiento Estratégico',
      description: (
        <>
          Tu sitio al aire en <span className="text-white font-medium">dos semanas</span>. Listo para captar clientes de alto ticket.
        </>
      ),
    },
  ];

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6 overflow-hidden"
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

      <div className="container max-w-4xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        {/* Card Estilo Studio */}
        <motion.div 
          className="w-full bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 md:p-16 rounded-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Ruido sutil de fondo */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <motion.h2 
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-12 md:mb-16 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Trabajaremos de manera ágil
          </motion.h2>

          <motion.div 
            className="relative flex flex-col gap-12 md:gap-16"
            variants={containerVariants}
          >
            {/* Línea del timeline interna */}
            <motion.div 
              className="absolute left-[15px] md:left-[19px] top-0 w-px bg-white/10"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 3, ease: "easeOut" }}
            />

            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="flex items-start gap-6 md:gap-10 relative"
                variants={stepVariants}
              >
                {/* Número del paso */}
                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 bg-slate-950 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] md:text-xs font-bold text-white/40 tracking-tighter">
                    {step.number}
                  </span>
                </div>

                {/* Contenido del paso */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

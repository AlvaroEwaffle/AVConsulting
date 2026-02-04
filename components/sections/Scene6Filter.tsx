'use client';

/**
 * ESCENA 6 — Para quién es / para quién no
 *
 * Objetivo: filtrar.
 * Visual: Cards bordeadas con iconos, mucho aire
 * Animación: Entrada por cards con stagger
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import SoftCTA from '@/components/SoftCTA';

const IconNo = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconYes = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

export default function Scene6Filter() {
  const [lineFilled, setLineFilled] = useState(false);
  const notFor = [
    'quienes buscan lo más barato',
    'proyectos sin visión clara',
    'plantillas genéricas',
  ];

  const yesFor = [
    'marcas que buscan autoridad',
    'negocios de alto ticket',
    'quienes valoran el diseño boutique',
  ];

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setLineFilled(true)}
      variants={containerVariants}
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-6xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-10 md:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-14 md:mb-20"
          variants={titleVariants}
        >
          Esto no es para todos.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl">
          {/* NO ES para — card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 transition-colors duration-300 hover:border-white/15"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5">
                <IconNo />
              </span>
              <motion.h3
                className="text-xs md:text-sm uppercase tracking-[0.28em] text-white/25 font-bold"
                variants={cardVariants}
              >
                NO ES para
              </motion.h3>
            </div>
            <ul className="space-y-5 md:space-y-6">
              {notFor.map((item) => (
                <motion.li
                  key={item}
                  variants={cardVariants}
                  className="flex items-start gap-4"
                >
                  <IconNo />
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-white/45 pt-0.5">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SÍ ES para — card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-accent/25 bg-accent/[0.04] backdrop-blur-sm p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8 transition-colors duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(33,117,161,0.08)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-accent/30 bg-accent/10">
                <IconYes />
              </span>
              <motion.h3
                className="text-xs md:text-sm uppercase tracking-[0.28em] text-accent font-bold"
                variants={cardVariants}
              >
                SÍ ES para
              </motion.h3>
            </div>
            <ul className="space-y-5 md:space-y-6">
              {yesFor.map((item) => (
                <motion.li
                  key={item}
                  variants={cardVariants}
                  className="flex items-start gap-4"
                >
                  <IconYes />
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-white pt-0.5">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SoftCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}

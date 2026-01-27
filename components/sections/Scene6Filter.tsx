'use client';

/**
 * ESCENA 6 — Para quién es / para quién no
 * 
 * Objetivo: filtrar.
 * Visual: Tipografía grande, sin mockups, mucho aire
 * Animación: Texto entra desde lados opuestos, ritmo calmado
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Scene6Filter() {
  const [lineFilled, setLineFilled] = useState(false);
  const notFor = [
    'presupuestos bajo $500',
    'necesito algo para ayer',
    'plantillas genéricas',
  ];

  const yesFor = [
    'marcas que invierten en su imagen',
    'negocios que buscan resultados reales',
    'quienes valoran un proceso profesional',
  ];

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setLineFilled(true)}
      variants={containerVariants}
    >
      {/* Línea azul continua desde la sección anterior */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-6xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          Esto no es para todos.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* NO ES para */}
          <motion.div variants={leftVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-light text-white/40 mb-8 md:mb-12"
              variants={itemVariants}
            >
              NO ES para
            </motion.h3>
            <div className="space-y-6 md:space-y-8">
              {notFor.map((item, index) => (
                <motion.p
                  key={item}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white/60"
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* SÍ ES para */}
          <motion.div variants={rightVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-light text-accent mb-8 md:mb-12"
              variants={itemVariants}
            >
              SÍ ES para
            </motion.h3>
            <div className="space-y-6 md:space-y-8">
              {yesFor.map((item, index) => (
                <motion.p
                  key={item}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white"
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

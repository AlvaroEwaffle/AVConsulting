'use client';

/**
 * ESCENA 7 — Autoridad silenciosa
 * 
 * Objetivo: confianza sin ego.
 * Visual: Logos sutiles / nombres en texto, cards abstractas
 * Animación: Fade secuencial, nada de carruseles
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function Scene7Authority() {
  const [lineFilled, setLineFilled] = useState(false);
  const projects = [
    { name: 'Founders', type: 'que quieren elevar su marca personal' },
    { name: 'Servicios Innovadores', type: 'que necesiten un mensaje claro y atractivo' },
    { name: 'E-commerce Boutique', type: 'que busquen una experiencia de compra premium' },
    { name: 'Consultoras Premium', type: 'que necesiten proyectar autoridad y confianza' },
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

      <div className="container max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-4 md:py-8">
        <motion.div
          className="text-center mb-6 md:mb-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Trabajo con marcas que buscan elevar su estándar digital.
          </h2>
        </motion.div>

        {/* Cards abstractas de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 lg:p-8"
              variants={itemVariants}
              whileHover={{ borderColor: 'rgba(33, 117, 161, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                {project.name}
              </h3>
              <p className="text-white/60 font-light text-sm sm:text-base">
                {project.type}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo de marca sutil - refuerza autoridad */}
        <motion.div
          className="mt-8 md:mt-10 flex justify-center"
          variants={itemVariants}
        >
          <BrandLogo size="sm" className="opacity-30" />
        </motion.div>
      </div>
    </motion.section>
  );
}

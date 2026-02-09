'use client';

/**
 * ESCENA 7 — Autoridad silenciosa
 * 
 * Objetivo: confianza sin ego.
 * Visual: Logos sutiles / nombres en texto, cards abstractas
 * Animación: Fade secuencial, nada de carruseles
 */

import { motion } from 'framer-motion';
import BrandLogo from '@/components/BrandLogo';
import SoftCTA from '@/components/SoftCTA';

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
  const projects = [
    { name: 'Founders', type: 'que quieren elevar su marca personal' },
    { name: 'Servicios Innovadores', type: 'que necesiten un mensaje claro y atractivo' },
    { name: 'E-commerce Boutique', type: 'que busquen una experiencia de compra premium' },
    { name: 'Consultoras Premium', type: 'que necesiten proyectar autoridad y confianza' },
    { name: 'Coaches y Mentores', type: 'que quieran una presencia digital que refleje su valor' },
    { name: 'Marcas D2C', type: 'que busquen venta directa con identidad propia' },
  ];

  return (
    <motion.section
      id="authority"
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-4 md:py-8">
        <motion.div
          className="text-center mb-6 md:mb-8"
          variants={itemVariants}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-4 md:mb-5">
            Para marcas como la tuya.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
            Trabajo con marcas que buscan elevar su estándar digital.
          </h2>
        </motion.div>

        {/* Cards abstractas de proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 md:p-6 lg:p-8 transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                borderColor: 'rgba(33, 117, 161, 0.35)',
                boxShadow: '0 0 24px rgba(33, 117, 161, 0.06)',
              }}
              transition={{ duration: 0.35 }}
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
        <motion.div
          className="flex justify-center mt-8 md:mt-10"
          variants={itemVariants}
        >
          <SoftCTA scrollTo="garantia">Ver la garantía</SoftCTA>
        </motion.div>
      </div>
    </motion.section>
  );
}

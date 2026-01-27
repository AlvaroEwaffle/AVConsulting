'use client';

/**
 * StanceSection - Sección de "posición" o verdad incómoda
 * 
 * Muestra claramente qué NO busca y qué SÍ busca el sistema.
 * Divide visualmente entre negativos (❌) y positivos (✅)
 */

import { motion } from 'framer-motion';
import ScrollToCTA from '@/components/ScrollToCTA';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

const dividerVariants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function StanceSection() {
  return (
    <motion.section
      className="min-h-screen snap-start flex items-center justify-center px-4 md:px-6"
      style={{
        minHeight: '100dvh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="container max-w-5xl mx-auto space-y-8 md:space-y-12">
        {/* Negativos */}
        <motion.div className="space-y-3 md:space-y-4" variants={containerVariants}>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white/70"
            variants={itemVariants}
          >
            ❌ Si buscas una web "bonita"
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white/70"
            variants={itemVariants}
          >
            ❌ Si quieres solo más likes
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white/70"
            variants={itemVariants}
          >
            ❌ Si no estás dispuesto a ordenar tu oferta
          </motion.div>
        </motion.div>

        {/* Divisor */}
        <motion.div
          className="h-px bg-white/10"
          variants={dividerVariants}
        />

        {/* Positivos */}
        <motion.div className="space-y-3 md:space-y-4" variants={containerVariants}>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white"
            variants={itemVariants}
          >
            ✅ Si quieres un sistema que funcione incluso cuando no publicas
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white"
            variants={itemVariants}
          >
            ✅ Si quieres alumnos constantes
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white"
            variants={itemVariants}
          >
            ✅ Si quieres claridad
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="pt-4">
          <ScrollToCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}

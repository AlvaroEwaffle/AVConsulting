'use client';

/**
 * BreakSection - Sección que presenta el problema
 * 
 * Muestra la diferencia entre el flujo tradicional (Post → DM → Nada)
 * y el flujo correcto (Atención → Sistema → Alumnos → Retención)
 */

import { motion } from 'framer-motion';
import ScrollToCTA from '@/components/ScrollToCTA';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function BreakSection() {
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
      <div className="container max-w-5xl mx-auto space-y-8 md:space-y-10">
        <motion.div className="space-y-3 md:space-y-4" variants={containerVariants}>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/90"
            variants={itemVariants}
          >
            Instagram atrae atención.
          </motion.p>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/90"
            variants={itemVariants}
          >
            Pero no construye negocio.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4 text-white/60"
          variants={containerVariants}
        >
          <motion.div
            className="text-base sm:text-lg md:text-xl tracking-wide"
            variants={itemVariants}
          >
            Post → DM → Nada
          </motion.div>
          <motion.div
            className="text-base sm:text-lg md:text-xl text-white/90"
            variants={itemVariants}
          >
            Atención → Sistema → Alumnos → Retención
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="pt-4">
          <ScrollToCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}

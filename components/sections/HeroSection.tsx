'use client';

/**
 * HeroSection - Sección hero principal
 * 
 * Animaciones Framer Motion:
 * - Contenedor: staggerChildren para animar elementos hijos uno a uno
 * - Elementos: fade in + desplazamiento vertical suave
 */

import { motion } from 'framer-motion';
import ScrollToCTA from '@/components/ScrollToCTA';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="min-h-screen snap-start flex items-center justify-center relative px-4 md:px-6"
      style={{
        minHeight: '100dvh', // Dynamic viewport height para mobile (incluye safe areas)
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="container max-w-5xl mx-auto">
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white/90"
            variants={itemVariants}
          >
            Si tienes un negocio deportivo, probablemente no solo tienes un problema de marketing.
          </motion.p>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
            variants={itemVariants}
          >
            Tienes también un <span className="italic text-[#2175a1]">desafío</span> de fidelización.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4">
            <ScrollToCTA />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

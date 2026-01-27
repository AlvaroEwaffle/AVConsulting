'use client';

/**
 * SystemFlowSection - Sección que explica el sistema
 * 
 * Muestra el flujo: Instagram → Landing → WhatsApp → Fidelización → Recompra/Referidos
 * Presentado como una "máquina sencilla"
 */

import { motion } from 'framer-motion';
import ScrollToCTA from '@/components/ScrollToCTA';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
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
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  },
};

export default function SystemFlowSection() {
  const flowSteps = [
    'Instagram',
    'Landing',
    'WhatsApp',
    'Fidelización',
    'Recompra / Referidos',
  ];

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
      <div className="container max-w-5xl mx-auto">
        <motion.div
          className="rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-12 shadow-lg"
          variants={panelVariants}
        >
          <motion.div className="space-y-4 md:space-y-6" variants={containerVariants}>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/90"
              variants={itemVariants}
            >
              No es una página.
            </motion.p>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white"
              variants={itemVariants}
            >
              Es una máquina sencilla.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-10 grid gap-4 md:gap-5 lg:gap-6"
            variants={containerVariants}
          >
            {flowSteps.map((step, index) => (
              <div key={step}>
                <motion.div
                  className="text-sm sm:text-base md:text-lg text-white/90 bg-white/5 rounded-lg p-4 border border-white/5 hover:border-[#2175a1]/40 transition-colors"
                  variants={itemVariants}
                >
                  {step}
                </motion.div>
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="text-lg md:text-xl text-white/40 text-center py-2"
                    variants={itemVariants}
                  >
                    ↓
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="pt-6">
            <ScrollToCTA />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

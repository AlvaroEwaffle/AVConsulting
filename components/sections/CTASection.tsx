'use client';

/**
 * CTASection - Sección de llamado a la acción final
 * 
 * Incluye el formulario de calificación de leads con integraciones
 */

import { motion } from 'framer-motion';
import LeadQualificationForm from '@/components/LeadQualificationForm';

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

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export default function CTASection() {
  return (
    <motion.section
      id="cta-section"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
            variants={itemVariants}
          >
            Hablemos.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80"
            variants={itemVariants}
          >
            Veamos si tiene sentido trabajar juntos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
        >
          <LeadQualificationForm
            serviceName="Sistema Deportivo"
            buttonText="Agendar / Escribirme por WhatsApp"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

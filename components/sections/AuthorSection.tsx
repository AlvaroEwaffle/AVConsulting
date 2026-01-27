'use client';

/**
 * AuthorSection - Sección de credibilidad/autor
 * 
 * Presenta a Álvaro y establece credibilidad con un mensaje claro
 * sobre quién es y qué hace
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
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

export default function AuthorSection() {
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
      <div className="container max-w-5xl mx-auto grid gap-8 md:gap-10 md:grid-cols-[1fr,180px] lg:grid-cols-[1fr,220px] items-center">
        <motion.div className="space-y-3 md:space-y-4" variants={containerVariants}>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white"
            variants={itemVariants}
          >
            Soy Álvaro.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80"
            variants={itemVariants}
          >
            Diseño sistemas digitales para negocios que viven del movimiento, no de promesas.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70"
            variants={itemVariants}
          >
            No trabajo con todos.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4">
            <ScrollToCTA />
          </motion.div>
        </motion.div>
        <motion.div className="flex md:justify-end" variants={imageVariants}>
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(33,117,161,0.2)]">
            <Image
              src="/assets/LandingPhoto.png"
              alt="Álvaro Villena"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

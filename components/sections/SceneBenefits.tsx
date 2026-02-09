'use client';

/**
 * Trabajaremos de manera ágil — mismo diseño que "Lo que obtienes"
 * 3 pasos: Briefing, Construcción, Lanzamiento.
 */

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Rocket } from 'lucide-react';
import SoftCTA from '@/components/SoftCTA';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Briefing de Identidad',
    text: 'Sesión estratégica para entender tu visión y ADN de marca.',
  },
  {
    icon: Zap,
    title: 'Construcción Express',
    text: 'Desarrollo intensivo con diseño de alto nivel y estética boutique.',
  },
  {
    icon: Rocket,
    title: 'Lanzamiento Estratégico',
    text: 'Tu sitio al aire en dos semanas. Listo para captar clientes de alto ticket.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

export default function SceneBenefits() {
  return (
    <motion.section
      className="min-h-screen snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="container max-w-4xl mx-auto relative z-10 w-full py-16 md:py-20">
        <motion.p
          className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium text-center mb-4 md:mb-5"
          variants={itemVariants}
        >
          De la idea al lanzamiento en dos semanas.
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-white text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          Trabajaremos de manera ágil
        </motion.h2>

        <ul className="space-y-6 md:space-y-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                className="flex items-start gap-4 md:gap-6"
                variants={itemVariants}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-accent" />
                </span>
                <div className="pt-1.5">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
        <motion.div
          className="flex justify-center mt-12 md:mt-14"
          variants={itemVariants}
        >
          <SoftCTA scrollTo="testimonial">Ver qué dicen los clientes</SoftCTA>
        </motion.div>
      </div>
    </motion.section>
  );
}

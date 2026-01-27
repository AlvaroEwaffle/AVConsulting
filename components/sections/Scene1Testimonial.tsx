'use client';

/**
 * ESCENA 1.5 — Testimonio
 * 
 * Objetivo: Social proof inmediato después del Hero.
 * Animación: Typewriter effect para el testimonio + fade in para foto y datos del cliente
 */

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TestimonialData {
  text: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonial: TestimonialData = {
  text: 'Logramos crear una página fiel a nuestra identidad. No solo con un diseño atractivo, sino que capturando el mensaje que necesitábamos para capturar a potenciales clientes. Superó nuestras expectativas.',
  name: 'Johana Tapia',
  title: 'Directora de Contenidos, Ewaffle',
  avatar: 'https://ewaffle.cl/_astro/Johana.BKfweJUJ_ZpISwY.webp',
};

export default function Scene1Testimonial() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showClientInfo, setShowClientInfo] = useState(false);
  const [lineFilled, setLineFilled] = useState(false);

  useEffect(() => {
    // Iniciar typewriter cuando el componente entra en viewport
    if (isTyping && displayedText.length < testimonial.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(testimonial.text.slice(0, displayedText.length + 1));
      }, 15); // Velocidad de escritura (15ms por carácter - 100% más rápido)

      return () => clearTimeout(timeout);
    } else if (isTyping && displayedText.length === testimonial.text.length) {
      // Cuando termina de escribir, mostrar info del cliente
      setTimeout(() => {
        setShowClientInfo(true);
      }, 500);
    }
  }, [displayedText, isTyping]);

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => {
        setLineFilled(true);
        setIsTyping(true);
      }}
    >
      {/* Línea azul continua desde la sección anterior */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-4xl mx-auto relative z-10 w-full h-full flex items-center justify-center py-8 md:py-12">
        {/* Card de testimonio */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          {/* Comillas de apertura */}
          <div className="text-6xl md:text-7xl text-accent/30 font-serif mb-6 leading-none">
            "
          </div>

          {/* Texto del testimonio con typewriter */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8 md:mb-12 min-h-[120px] md:min-h-[150px]">
            {displayedText}
            {isTyping && displayedText.length < testimonial.text.length && (
              <motion.span
                className="inline-block w-0.5 h-8 md:h-10 bg-accent ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </blockquote>

          {/* Información del cliente - aparece después del typewriter */}
          <motion.div
            className="flex items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showClientInfo ? 1 : 0, y: showClientInfo ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as const }}
          >
            {/* Avatar */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-accent/20 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Nombre y título */}
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-1">
                {testimonial.name}
              </h4>
              <p className="text-sm md:text-base text-white/60 font-light">
                {testimonial.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

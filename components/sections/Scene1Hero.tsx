'use client';

/**
 * ESCENA 1 — El quiebre (Hero)
 * 
 * Objetivo: detener el scroll.
 * Animación: Entrada lenta (fade + slight scale)
 * El texto aparece después del fondo (pausa intencional)
 * Nada se mueve hasta que el usuario intenta scrollear
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Scene1Hero() {
  const [animationPhase, setAnimationPhase] = useState<'line-stop' | 'title' | 'subtitle' | 'arrow' | 'line-continue'>('line-stop');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    // Secuencia de animación:
    // 1. Línea se detiene a la mitad (0-1.5s)
    // 2. Aparece TÍTULO (1.5s)
    // 3. Aparece SUBTÍTULO (2.8s - después del título)
    // 4. Aparece FLECHA (3.5s - después del subtítulo, antes de que la línea continúe)
    // 5. Línea continúa hasta abajo (4s)
    
    const timer1 = setTimeout(() => setAnimationPhase('title'), 1500);
    const timer2 = setTimeout(() => setAnimationPhase('subtitle'), 2800);
    const timer3 = setTimeout(() => setAnimationPhase('arrow'), 3500);
    const timer4 = setTimeout(() => setAnimationPhase('line-continue'), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6"
      style={{
        opacity,
        scale,
      }}
    >
      {/* Logo de marca - esquina superior izquierda, muy sutil */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <BrandLogo size="sm" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Elemento central minimalista animado - línea vertical */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top"
        initial={{ height: 0 }}
        animate={{
          height: animationPhase === 'line-stop' 
            ? '50%' // Se detiene a la mitad
            : animationPhase === 'line-continue' || animationPhase === 'arrow'
            ? '100%' // Continúa hasta abajo y se queda completa
            : '50%' // Mantiene posición mientras aparecen texto
        }}
        transition={{
          duration: animationPhase === 'line-continue' ? 2 : 1.5,
          ease: [0.6, -0.05, 0.01, 0.99] as const,
        }}
      />

      <div className="container max-w-7xl mx-auto text-center relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        {/* TÍTULO - aparece primero después de que la línea se detiene */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 md:mb-8 lg:mb-10"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ 
            opacity: animationPhase === 'title' || animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 1 : 0,
            scale: animationPhase === 'title' || animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 1 : 0.98,
            y: animationPhase === 'title' || animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 0 : 20
          }}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          Una página web es más que una tarjeta de presentación <br className="hidden md:block" />
          <span className="italic text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-4">Es una declaración de tus valores y calidad.</span>
        </motion.h1>

        {/* SUBTÍTULO - aparece después del título */}
        <motion.div
          className="mt-4 md:mt-6 lg:mt-8 space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 1 : 0,
            y: animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 0 : 20
          }}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 1 : 0,
              y: animationPhase === 'subtitle' || animationPhase === 'arrow' || animationPhase === 'line-continue' ? 0 : 10
            }}
            transition={{ duration: 1 }}
          >
            ¿Buscas que tu página destaque, refleje tu identidad <br className="hidden md:block" />
            y logre mejores conversiones?
          </motion.p>
        </motion.div>

      </div>

      {/* Flecha animada en la parte inferior - invitando a scrollear */}
      <motion.div
        className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: animationPhase === 'arrow' || animationPhase === 'line-continue' ? 1 : 0,
          y: animationPhase === 'arrow' || animationPhase === 'line-continue' ? [0, 12, 0] : -10
        }}
        transition={{ 
          opacity: { 
            duration: 0.8, 
            delay: 3.5,
            ease: [0.6, -0.05, 0.01, 0.99] as const
          },
          y: {
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99] as const,
            delay: 4
          }
        }}
      >
        <ChevronDown 
          className="w-8 h-8 md:w-10 md:h-10 text-white/70 hover:text-white transition-colors duration-300" 
          strokeWidth={1.5}
        />
      </motion.div>
    </motion.section>
  );
}

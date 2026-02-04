'use client';

/**
 * ESCENA 1 — Hero (above the fold)
 *
 * H1 claro, subtítulo, CTA + prueba social. Las 3 ofertas están en la sección de abajo.
 * Fondo: puntos/figuras que se mueven suavemente.
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Layout, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Scene1Hero() {
  const [animationPhase, setAnimationPhase] = useState<'title' | 'subtitle' | 'cta'>('title');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 320], [1, 0]);
  const scale = useTransform(scrollY, [0, 320], [1, 0.96]);
  // Parallax suave al hacer scroll: capa lejana se mueve poco, cercana más
  const parallaxBack = useTransform(scrollY, [0, 400], [0, 15]);
  const parallaxMid = useTransform(scrollY, [0, 400], [0, 35]);
  const parallaxFront = useTransform(scrollY, [0, 400], [0, 55]);

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationPhase('subtitle'), 700);
    const t2 = setTimeout(() => setAnimationPhase('cta'), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.section
      className="min-h-screen snap-start flex items-center justify-center relative px-4 md:px-6 overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Fondo: parallax por capas — ~50% menos elementos, evitando el centro */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/30" />
        {/* Capa LEJANA — 2 puntos en bordes */}
        <motion.div className="absolute inset-0" style={{ y: parallaxBack }}>
        {[
          { left: '12%', top: '18%' },
          { left: '82%', top: '75%' },
        ].map((pos, i) => (
          <motion.div
            key={`dot-b-${i}`}
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/15"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              x: [0, 14, 0],
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
        </motion.div>
        {/* Capa MEDIA — 2 puntos en bordes */}
        <motion.div className="absolute inset-0" style={{ y: parallaxMid }}>
        {[
          { left: '8%', top: '72%' },
          { left: '88%', top: '12%' },
        ].map((pos, i) => (
          <motion.div
            key={`dot-m-${i}`}
            className="absolute w-2 h-2 md:w-4 md:h-4 rounded-full bg-white/20"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              x: [0, 24, 0],
              y: [0, -18, 0],
              opacity: [0.5, 0.85, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.35,
            }}
          />
        ))}
        </motion.div>
        {/* Capa CERCANA — 2 puntos en esquinas */}
        <motion.div className="absolute inset-0" style={{ y: parallaxFront }}>
        {[
          { left: '18%', top: '82%' },
          { left: '78%', top: '8%' },
        ].map((pos, i) => (
          <motion.div
            key={`dot-f-${i}`}
            className="absolute w-3 h-3 md:w-5 md:h-5 rounded-full bg-white/25"
            style={{ left: pos.left, top: pos.top }}
            animate={{
              x: [0, 36, 0],
              y: [0, -24, 0],
              opacity: [0.55, 0.9, 0.55],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          />
        ))}
        </motion.div>
        {/* Figuras: 1 lejana, 1 media, 1 cercana — todas en bordes, sin centro */}
        <motion.div className="absolute inset-0" style={{ y: parallaxBack }}>
        <motion.div
          className="absolute rounded-lg border border-white/10 bg-white/[0.04] w-12 h-10 md:w-14 md:h-12"
          style={{ left: '6%', top: '28%' }}
          animate={{
            x: [0, 18, 0],
            y: [0, -12, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ y: parallaxMid }}>
        <motion.div
          className="absolute rounded-lg border border-white/15 bg-white/[0.06] w-14 h-11 md:w-16 md:h-12"
          style={{ left: '80%', top: '22%' }}
          animate={{
            x: [0, 28, 0],
            y: [0, -18, 0],
            opacity: [0.55, 0.85, 0.55],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ y: parallaxFront }}>
        <motion.div
          className="absolute rounded-xl border border-white/20 bg-white/[0.08] w-16 h-12 md:w-20 md:h-14"
          style={{ left: '72%', top: '78%' }}
          animate={{
            x: [0, 40, 0],
            y: [0, -28, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
        </motion.div>
      </div>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <BrandLogo size="sm" className="opacity-60 hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 2.2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-6xl mx-auto relative z-10 w-full py-12 md:py-16 flex flex-col items-center">
        {/* H1 — directo y apelativo */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-center mb-4 md:mb-5 max-w-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: animationPhase !== 'title' ? 1 : 0,
            y: animationPhase !== 'title' ? 0 : 16,
          }}
          transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          No necesitas otra página bonita. <span className="text-accent font-medium">Necesitas una que convierta.</span>
        </motion.h1>

        {/* Refuerzo — reframe */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 text-center max-w-2xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: animationPhase === 'subtitle' || animationPhase === 'cta' ? 1 : 0,
            y: animationPhase === 'subtitle' || animationPhase === 'cta' ? 0 : 12,
          }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          No solo diseños atractivos: un sistema integrado a tu flujo de ventas que convierte.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: animationPhase === 'cta' ? 1 : 0,
            y: animationPhase === 'cta' ? 0 : 12,
          }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as const }}
        >
          <button
            type="button"
            onClick={scrollToCTA}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold text-sm md:text-base border border-accent/30 hover:shadow-[0_0_24px_rgba(33,117,161,0.3)] transition-all duration-300"
          >
            Agendar diagnóstico digital
          </button>
          {/* Prueba social: +50 proyectos */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm md:text-base text-white/50 font-light mt-8">
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <Layout className="w-4 h-4 md:w-5 md:h-5 text-accent/70 flex-shrink-0" />
              <span>Landing Pages</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 md:w-5 md:h-5 text-accent/70 flex-shrink-0" />
              <span>Webs Estratégicas</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-accent/70 flex-shrink-0" />
              <span>Plataformas Desarrolladas</span>
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 md:w-9 md:h-9 text-white/50" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

'use client';

/**
 * Fondo animado del hero — fijo en toda la landing.
 * Puntos y figuras con parallax suave al scroll; animaciones propias (flotar, opacidad).
 */

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroBackground() {
  const { scrollY, scrollYProgress } = useScroll();
  const parallaxBack = useTransform(scrollY, [0, 400], [0, 15]);
  const parallaxMid = useTransform(scrollY, [0, 400], [0, 35]);
  const parallaxFront = useTransform(scrollY, [0, 400], [0, 55]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/30" />

      {/* Línea de progreso por sección — avance del scroll */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
      <motion.div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 origin-top bg-accent"
        style={{
          scaleY: scrollYProgress,
        }}
      />

      {/* Capa LEJANA */}
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
      {/* Capa MEDIA */}
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
      {/* Capa CERCANA */}
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
      {/* Figuras */}
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
  );
}

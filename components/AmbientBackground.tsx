'use client';

/**
 * AmbientBackground — Atmospheric background for the sales letter.
 *
 * Layers (back → front):
 *  1. Radial gradient orbs — large, slow-drifting, colored glows
 *  2. Grain texture overlay — adds film-like depth
 *  3. Floating micro-particles — tiny dots with varied speeds
 *  4. Subtle grid lines — architectural feel, barely visible
 *  5. Accent light beam — follows scroll, highlights reading position
 *
 * Everything is pointer-events-none and aria-hidden.
 * Respects prefers-reduced-motion via Framer Motion's useReducedMotion.
 */

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/* ─── Particle field ─── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 6,
      drift: 10 + Math.random() * 30,
      opacity: 0.15 + Math.random() * 0.3,
    });
  }
  return particles;
}

export default function AmbientBackground() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [particles] = useState<Particle[]>(() => generateParticles(15));

  // Accent glow follows scroll
  const glowY = useTransform(scrollYProgress, [0, 1], ['5%', '90%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 0.5, 0.5, 0.2]);

  // Hide on SSR to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 1: Gradient orbs ── */}
      <div className="absolute inset-0">
        {/* Top-left orb — accent blue */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '50vw',
            height: '50vw',
            maxWidth: '600px',
            maxHeight: '600px',
            left: '-10%',
            top: '-5%',
            background: 'radial-gradient(circle, rgba(33, 117, 161, 0.22) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 30, -10, 0],
                  y: [0, 20, -15, 0],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Bottom-right orb — cooler accent */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '45vw',
            height: '45vw',
            maxWidth: '550px',
            maxHeight: '550px',
            right: '-8%',
            bottom: '15%',
            background: 'radial-gradient(circle, rgba(33, 117, 161, 0.18) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -20, 15, 0],
                  y: [0, -30, 10, 0],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {/* Center-left orb — warm tint */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '35vw',
            height: '35vw',
            maxWidth: '400px',
            maxHeight: '400px',
            left: '5%',
            top: '45%',
            background: 'radial-gradient(circle, rgba(33, 117, 161, 0.14) 0%, rgba(100, 150, 200, 0.10) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -25, 35, 0],
                }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 8,
          }}
        />
      </div>

      {/* ── Layer 2: Subtle grid ── */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Layer 3: Floating micro-particles ── */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity,
              }}
              animate={{
                y: [0, -p.drift, 0],
                x: [0, p.drift * 0.3, 0],
                opacity: [p.opacity, p.opacity * 2, p.opacity],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Layer 4: Accent glow that follows scroll ── */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: glowY,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(33, 117, 161, 0.28) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: glowOpacity,
        }}
      />

      {/* ── Layer 5: Top & bottom vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.25) 0%, transparent 12%, transparent 88%, rgba(15, 23, 42, 0.35) 100%)',
        }}
      />

      {/* ── Layer 6: Grain texture (CSS noise) ── */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}

'use client';

/**
 * ESCENA 3 — El insight
 * 
 * Objetivo: cambiar el marco mental.
 * Visual: Scroll de contenido digital que se detiene en el momento de pausa
 * Animación: Scroll suave que se detiene en el card central, que se resalta
 */

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SoftCTA from '@/components/SoftCTA';

const CARD_WIDTH = 360;
const CARD_HEIGHT = 160;
const GAP = 20;

const cards = [
  { id: 1, type: 'TikTok Post', content: '"Pov: Tu perro cree que es un gato..."' },
  { id: 2, type: 'Instagram Reel', content: '[Audio Tendencia] - 10 trucos para organizar tu escritorio.' },
  { id: 3, type: 'Twitter Thread', content: '1/15: Por qué el café frío es mejor que el caliente. Abro hilo 🧵' },
  { id: 4, type: 'YouTube Short', content: 'Reto de 24 horas viviendo en una caja de cartón.' },
  { id: 5, type: 'main', content: 'Aquí es donde tu marca se diferencia.' },
  { id: 6, type: 'Facebook Story', content: 'Tía Marta compartió una foto de un piolín: "Buen lunes".' },
  { id: 7, type: 'BeReal', content: '⚠️ Es hora de ser real. (2 min restantes)' },
  { id: 8, type: 'LinkedIn Update', content: '"Me emociona anunciar que he sido promovido a..."' },
  { id: 9, type: 'Twitch Clip', content: '¡Momento épico en el torneo de speedrun!' },
];

export default function Scene3Insight() {
  const [hasStarted, setHasStarted] = useState(false);
  const [initialY, setInitialY] = useState(1000);
  const [finalY, setFinalY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Calcular valores después de la hidratación para evitar mismatch
    const containerHeight = window.innerWidth >= 768 ? 600 : 500;
    const startY = containerHeight + 300; // Empezar desde abajo del contenedor (fuera de vista)
    
    // Calcular posición final: centrar el card principal (5to elemento, índice 4)
    // El card principal está en la posición: 4 * (CARD_HEIGHT + GAP) = 4 * 180 = 720px desde el inicio
    // El centro del contenedor visible está a: containerHeight / 2
    // Para centrar el card principal, necesitamos mover el contenedor hacia arriba (y negativo)
    // y = -(cardPosition - centerY) = -(720 - 300) = -420px
    const centerY = containerHeight / 2;
    const cardPosition = 4 * (CARD_HEIGHT + GAP); // Posición del card principal desde el inicio
    const calculatedFinalY = -(cardPosition - centerY);
    
    setInitialY(startY);
    setFinalY(calculatedFinalY);
  }, []);

  return (
    <motion.section
      id="insight"
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => {
        setTimeout(() => setHasStarted(true), 500);
      }}
    >
      <div className="container max-w-5xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        <motion.div
          className="text-center mb-4 md:mb-6 flex-shrink-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-4 md:mb-5">
            En un mar de ruido, tu web puede ser el lugar donde se detienen.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6">
            En un mundo de scroll infinito, tu marca debe diferenciarse con una experiencia única.
          </h2>
        </motion.div>

        {/* Contenedor de scroll animado */}
        <div className="relative w-full flex-1 min-h-0 flex justify-center overflow-hidden">
          {isMounted && (
            <motion.div
              className="flex flex-col gap-5"
              style={{ width: `${CARD_WIDTH}px` }}
              initial={{ y: initialY }}
              animate={hasStarted ? { y: finalY } : { y: initialY }}
              transition={{
                duration: 6,
                ease: [0.15, 0.85, 0.15, 1] as const,
              }}
            >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`w-full h-[160px] rounded-2xl flex flex-col justify-center px-8 flex-shrink-0 transition-all duration-700 ${
                  card.type === 'main'
                    ? 'bg-slate-900/40 backdrop-blur-md border border-accent/50 text-white text-lg text-center items-center shadow-[0_0_40px_rgba(33,117,161,0.2)]'
                    : 'bg-white/[0.02] border border-white/5 text-white/20 text-sm'
                }`}
                initial={card.type === 'main' ? {} : { opacity: 0.2 }}
                animate={
                  card.type === 'main' && hasStarted
                    ? {
                        boxShadow: [
                          '0 0 0px transparent',
                          '0 0 60px rgba(33, 117, 161, 0.3)',
                        ],
                        borderColor: [
                          'rgba(33, 117, 161, 0.3)',
                          'rgba(33, 117, 161, 0.6)',
                        ],
                        backgroundColor: [
                          'rgba(15, 23, 42, 0.4)',
                          'rgba(15, 23, 42, 0.6)',
                        ],
                      }
                    : {}
                }
                transition={
                  card.type === 'main'
                    ? {
                        delay: 5.5,
                        duration: 1.5,
                        ease: 'easeOut' as const,
                      }
                    : {}
                }
              >
                {card.type === 'main' ? (
                  <p className="text-xl md:text-2xl font-light">{card.content}</p>
                ) : (
                  <>
                    <span className="font-bold block mb-1 text-white/30 text-[10px] uppercase tracking-wider">
                      {card.type}
                    </span>
                    <span className="text-white/20 text-xs">{card.content}</span>
                  </>
                )}
              </motion.div>
            ))}
            </motion.div>
          )}
        </div>
        <motion.div
          className="flex justify-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SoftCTA scrollTo="filter">Ver si es para ti</SoftCTA>
        </motion.div>
      </div>
    </motion.section>
  );
}

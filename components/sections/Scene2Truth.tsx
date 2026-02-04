'use client';

/**
 * ESCENA 2 — La verdad incómoda
 * 
 * Objetivo: crear tensión.
 * Visual: Mockup móvil interactivo mostrando diferentes escenas de una landing genérica
 * Animación: Secuencia automática mostrando cómo las webs se recorren sin pensar
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Zap,
  MessageSquare,
  Mail,
  Calendar,
  Activity,
} from 'lucide-react';
import SoftCTA from '@/components/SoftCTA';

// --- Configuración de Escenas ---
const SCENES = [
  { id: 0, text: "", type: 'intro' },
  { id: 1, text: "", type: 'hero1' },
  { id: 2, text: "", type: 'action_conversion' },
  { id: 3, text: "", type: 'hero2' },
  { id: 4, text: "", type: 'action_machine' },
  { id: 5, text: "", type: 'hero3' },
];

// --- Componentes de Pantalla Interna ---

const ScreenWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`h-full w-full bg-slate-950 text-white p-6 flex flex-col relative overflow-hidden ${className}`}>
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
    />
    <div className="z-10 flex-1 flex flex-col justify-center">{children}</div>
  </div>
);

// Componente para el texto narrativo dentro del mockup
const NarrativeOverlay = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.8 } }}
    className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-xl"
  >
    <motion.p
      initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="text-center text-xl font-light leading-snug tracking-tight text-white px-2"
    >
      {text}
    </motion.p>
  </motion.div>
);

const HeroContent = ({ title, highlight }: { title: string, highlight: string }) => (
  <ScreenWrapper>
    <div className="flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        className="text-4xl font-bold leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {title} <span className="text-accent">{highlight}</span>
      </motion.h1>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 40 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-1 bg-accent mt-6 rounded-full mx-auto" 
      />
    </div>
  </ScreenWrapper>
);

const ConversionAction = () => (
  <ScreenWrapper>
    <div className="flex flex-col items-center justify-center px-6 w-full">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-2xl w-full max-w-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="h-2 w-16 bg-slate-800 rounded-full" />
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-2 bg-slate-800 rounded w-3/4" />
            <div className="h-2 bg-slate-800 rounded w-1/2" />
          </div>
          
          <motion.div 
            initial={{ backgroundColor: "rgba(30, 41, 59, 1)" }}
            animate={{ backgroundColor: "rgb(33, 117, 161)" }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="h-10 rounded-lg flex items-center justify-center font-bold text-[10px] uppercase tracking-widest text-white shadow-lg shadow-accent/20"
          >
            Agendar ahora
          </motion.div>
        </div>
      </motion.div>
      
      <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-sm">
         {[0, 1, 2].map((i) => (
           <motion.div 
             key={i}
             initial={{ y: 10, opacity: 0 }} 
             animate={{ y: 0, opacity: 1 }} 
             transition={{ delay: 0.6 + (i * 0.1) }} 
             className="h-10 bg-slate-900/50 rounded-xl border border-slate-800 flex items-center justify-center"
           >
             <div className="w-4 h-1 bg-slate-800 rounded-full" />
           </motion.div>
         ))}
      </div>
    </div>
  </ScreenWrapper>
);

const MachineAction = () => (
  <div className="h-full bg-black flex flex-col items-center justify-center p-6 gap-4">
    <motion.div 
      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-accent"
    >
      <Activity size={24} className="text-white" />
    </motion.div>
    <div className="w-full max-w-xs space-y-2 px-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.3, duration: 0.4 }}
          className="p-3 bg-slate-900 border border-white/5 rounded-lg flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="h-2 bg-slate-700 rounded w-full" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Scene2Truth() {
  const [sceneIndex, setSceneIndex] = useState(-1);
  const [isTextDone, setIsTextDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lineFilled, setLineFilled] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startSequence = () => {
    if (hasStarted) return; // Evitar múltiples inicios
    setHasStarted(true);
    setIsPlaying(true);
    setSceneIndex(0);
    setIsTextDone(false);
  };

  useEffect(() => {
    if (!isPlaying || sceneIndex === -1) return;

    if (!isTextDone) {
      // Tiempo pausado para leer el texto - MUCHO MÁS RÁPIDO
      const timer = setTimeout(() => {
        setIsTextDone(true);
      }, 1200); 
      return () => clearTimeout(timer);
    } else {
      // Tiempo pausado para ver la animación del mockup - MUCHO MÁS RÁPIDO
      const timer = setTimeout(() => {
        if (sceneIndex < SCENES.length - 1) {
          setSceneIndex(prev => prev + 1);
          setIsTextDone(false);
        } else {
          // Repetir continuamente
          setSceneIndex(0);
          setIsTextDone(false);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, sceneIndex, isTextDone]);

  const renderMockupContent = () => {
    if (sceneIndex === -1) return <div className="bg-black h-full w-full" />;

    const scene = SCENES[sceneIndex];
    let content = null;

    switch (scene.type) {
      case 'intro': content = <div className="h-full bg-slate-900 flex items-center justify-center"><Zap className="text-accent animate-pulse" size={48}/></div>; break;
      case 'hero1': content = <HeroContent title="¿Y si tu web" highlight="destacara?" />; break;
      case 'hero2': content = <HeroContent title="Impacto" highlight="Directo" />; break;
      case 'hero3': content = <HeroContent title="Ventas en" highlight="Automático" />; break;
      case 'action_conversion': content = <ConversionAction />; break;
      case 'action_machine': content = <MachineAction />; break;
      default: content = null;
    }

    return (
      <div className="h-full w-full relative">
        {content}
        <AnimatePresence>
          {!isTextDone && <NarrativeOverlay text={scene.text} />}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.section
      className="h-screen-fixed-top snap-start flex items-center justify-center relative px-4 md:px-6"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => {
        setLineFilled(true);
        // Iniciar secuencia automáticamente al entrar en viewport
        if (!hasStarted) {
          setTimeout(() => {
            startSequence();
          }, 500); // Pequeño delay para que la animación de entrada termine
        }
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

      <div className="container max-w-5xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        {/* Mockup móvil interactivo */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Glow de fondo premium */}
          <div className="absolute inset-0 bg-accent/20 blur-[60px] sm:blur-[80px] rounded-full scale-75" />
          
          {/* Frame del celular con animación sutil */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-accent/10 blur-[80px] rounded-full" />

            <div className="relative w-[280px] h-[580px] sm:w-[300px] sm:h-[620px] md:w-[320px] md:h-[660px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 overflow-hidden mx-auto">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-[100]" />
              
              <div className="w-full h-full bg-black rounded-[2.2rem] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sceneIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full"
                  >
                    {renderMockupContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-40" />
            </div>
          </motion.div>

          {/* Indicadores de progreso */}
          {isPlaying && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 flex gap-1 justify-center"
            >
              {SCENES.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === sceneIndex ? 'w-8 bg-accent' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="flex justify-center mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SoftCTA />
        </motion.div>
      </div>
    </motion.section>
  );
}

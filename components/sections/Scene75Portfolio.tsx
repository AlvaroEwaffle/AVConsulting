'use client';

/**
 * ESCENA 7.5 — Portafolio Boutique (baraja apilada)
 *
 * Cartas una encima de otra; solo se ve el título.
 * Click en una carta → se destaca y muestra imagen, categoría y enlace.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SoftCTA from '@/components/SoftCTA';
import { X } from 'lucide-react';

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Samy Studio',
    category: 'Formación de Contenido',
    image: 'https://samy-studio.com/assets/january/Fotos/IMG_4812.JPG',
    link: 'https://samy-studio.com/',
  },
  {
    title: 'Influencer Factory',
    category: 'Academia Digital',
    image: 'https://influencersfactory.com/assets/jan/BannerPrecio.svg',
    link: 'https://influencersfactory.com/',
  },
  {
    title: 'Cervecería Puchacay',
    category: 'E-commerce Artesanal',
    image: 'https://cerveceriapuchacay.cl/assets/HeroBg.D9CN-gY4_Tqj8v.webp',
    link: 'https://cerveceriapuchacay.cl/',
  },
  {
    title: 'Defensa Total',
    category: 'Servicios Legales',
    image: 'https://defensatotalabogados.cl/img/Hero.png',
    link: 'http://defensatotalabogados.cl/',
  },
  {
    title: 'Fidelidapp',
    category: 'SaaS de Fidelización',
    image: 'https://res.cloudinary.com/di92lsbym/image/upload/v1739838001/photo-1553877522-43269d4ea984_k7fgug_1_anllid.webp',
    link: 'https://www.fidelidapp.cl/',
  },
  {
    title: 'Dra. Oyarzún',
    category: 'Estética Facial Premium',
    image: 'https://draoyarzun.pages.dev/assets/HeroProfile.png',
    link: 'https://doctoraoyarzun.cl/',
  },
  {
    title: 'Ewaffle',
    category: 'Agencia de Contenidos',
    image: 'https://ewaffle.cl/assets/CoverEwaffle.png',
    link: 'https://ewaffle.cl',
  },
  {
    title: 'Conexión Industrial',
    category: 'Repositorio de Empresas Industriales',
    image: 'https://conexionindustrial.cl/bgphotos/home.png',
    link: 'https://conexionindustrial.cl/',
  },
  {
    title: 'Moca Instagram Bot',
    category: 'Automatización de Respuestas de Instagram',
    image: 'https://moca.pages.dev/logoprimario.png',
    link: 'https://moca.pages.dev/',
  },
];

const CARD_STRIP_HEIGHT = 100;
const CARD_OFFSET = 80;
const TITLE_ROW_HEIGHT = 56;
const IMAGE_STRIP_HEIGHT = 28; // ~20% de la carta cerrada: franja de imagen en B/N

function PortfolioCard({
  project,
  index,
  isActive,
  onSelect,
  onClose,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
}) {
  const [failedImage, setFailedImage] = useState(false);

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        // index 0 se queda arriba, los otros se van apilando hacia abajo
        top: isActive ? 0 : index * CARD_OFFSET,
        height: isActive ? 'min(75vh, 520px)' : CARD_STRIP_HEIGHT,
        // zIndex invertido: el primero queda “sobre” los demás
        
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      className="absolute left-0 right-0 overflow-hidden rounded-xl border border-white/10 bg-slate-900/90 shadow-xl"
    >
      {/* Entrada: barajándose desde abajo con stagger */}
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 160,
          delay: index * 0.07,
        }}
        className="absolute inset-0 flex flex-col"
      >
      {/* Cerrada: orden explícito — fila título + "Ver proyecto", debajo franja imagen 20% */}
      {!isActive && (
        <button
          type="button"
          onClick={() => onSelect()}
          className="flex h-full w-full flex-col text-left"
        >
          {/* Fila 1: Título + Ver proyecto */}
          <div
            className="flex shrink-0 items-center justify-between px-5 md:px-6"
            style={{ minHeight: TITLE_ROW_HEIGHT }}
          >
            <span className="text-base md:text-lg font-light text-white truncate pr-4">
              {project.title}
            </span>
            <span className="text-xs text-white/40 shrink-0">Ver proyecto</span>
          </div>
          {/* Fila 2: ~20% imagen en B/N */}
          <div
            className="relative w-full shrink-0 overflow-hidden"
            style={{ height: IMAGE_STRIP_HEIGHT }}
          >
            <div className="absolute inset-0 bg-slate-900/50" />
            {!failedImage && (
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setFailedImage(true)}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 grayscale"
              />
            )}
          </div>
        </button>
      )}

      {/* Expandida: tira con título para cerrar */}
      {isActive && (
        <button
          type="button"
          onClick={() => onClose()}
          className="absolute left-0 right-0 top-0 z-10 flex h-14 w-full items-center justify-between px-5 md:px-6 text-left"
        >
          <span className="text-base md:text-lg font-light text-white truncate pr-4">
            {project.title}
          </span>
          <span className="text-xs text-white/50 shrink-0">Cerrar</span>
        </button>
      )}

      {/* Contenido expandido */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col pt-14 pb-4 px-4 md:px-6"
          >
            {/* Cerrar */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors z-20"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Imagen + overlay */}
            <div className="relative flex-1 min-h-0 rounded-lg overflow-hidden mt-2 mb-4 bg-slate-800/50">
              <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_30%,rgba(33,117,161,0.12),rgba(15,23,42,0.5)_50%,rgba(2,6,23,0.95)_100%)]" />
              {!failedImage && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setFailedImage(true)}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
                  {project.category}
                </p>
                <h4 className="text-lg md:text-xl font-light text-white mt-0.5">
                  {project.title}
                </h4>
              </div>
            </div>

            {/* Enlace al proyecto */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
            >
              Ver proyecto →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Scene75Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stackHeight =
    (projects.length - 1) * CARD_OFFSET + CARD_STRIP_HEIGHT;

  return (
    <section className="min-h-screen-fixed snap-start flex flex-col items-center justify-center relative px-4 md:px-6 py-12 md:py-16 overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 z-0 pointer-events-none" />

      <div className="container max-w-2xl mx-auto relative z-10 w-full flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">
            Portafolio Seleccionado
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Proyectos que definen un nuevo estándar.
          </h3>
          <p className="mt-4 text-sm text-white/50">
            Toca una carta para ver el proyecto
          </p>
        </div>

        {/* Baraja apilada */}
        <div
          className="relative w-full"
          style={{ minHeight: stackHeight }}
        >
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              isActive={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
              onClose={() => setActiveIndex(null)}
            />
          ))}
        </div>

        <p className="text-center text-sm text-white/40 font-light mt-8 max-w-xl">
          Marcas que han confiado en mi trabajo —{' '}
          <span className="text-white/70">y han elevado su estándar</span> con una
          presencia digital más clara y convincente.
        </p>
        <div className="mt-8">
          <SoftCTA />
        </div>
      </div>
    </section>
  );
}

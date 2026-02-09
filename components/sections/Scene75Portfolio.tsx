'use client';

/**
 * ESCENA 7.5 — Portafolio Boutique
 *
 * Mobile-first: horizontal snap scroll en móvil, grid en desktop.
 * Interacción: stagger al entrar, feedback táctil (tap), grayscale → color.
 */

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import SoftCTA from '@/components/SoftCTA';

const projects = [
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
  }
];

const STAGGER_DELAY = 0.06;
const EASE_SMOOTH = [0.6, -0.05, 0.01, 0.99] as const;

function PortfolioCard({
  project,
  index,
  reducedMotion,
}: {
  project: (typeof projects)[0];
  index: number;
  reducedMotion: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const itemVariants = {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: EASE_SMOOTH,
        delay: reducedMotion ? 0 : index * STAGGER_DELAY,
      },
    },
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 touch-manipulation select-none w-full md:flex-shrink-0"
      variants={itemVariants}
      whileTap={{ scale: reducedMotion ? 1 : 0.96 }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
      }}
    >
      {/* Móvil: una card por fila (full width). Desktop: aspect 16/10 en grid */}
      <div className="aspect-[4/3] md:aspect-[16/10] w-full min-w-0 h-full">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out scale-105 group-hover:scale-100 group-active:scale-100
            ${imageLoaded ? 'opacity-100' : 'opacity-60'}
            opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-active:grayscale-0 group-active:opacity-90
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform transition-transform duration-300 group-hover:translate-y-0 group-active:translate-y-0 translate-y-0.5">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent font-medium mb-1 opacity-90 group-hover:opacity-100 group-active:opacity-100 transition-opacity">
            {project.category}
          </p>
          <h4 className="text-sm md:text-base font-light text-white">
            {project.title}
          </h4>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/25 group-active:border-accent/30 rounded-xl transition-colors duration-300 pointer-events-none" />
      </div>
    </motion.a>
  );
}

export default function Scene75Portfolio() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="min-h-[100dvh] md:h-screen-fixed snap-start flex flex-col items-center justify-center relative px-0 md:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center py-6 md:py-12 flex-1">
        <motion.div
          className="text-center mb-6 md:mb-10 px-4"
          initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3 md:mb-4">
            Resultados reales, no promesas.
          </p>
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3 md:mb-4">
            Portafolio Seleccionado
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-white">
            Proyectos que definen un nuevo estándar.
          </h3>
          <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/50 max-w-md mx-auto">
            Scroll para ver más — toca un proyecto para visitarlo.
          </p>
        </motion.div>

        {/* Móvil: una card por fila (grid 1 col). Desktop: grid 2/4 cols con scroll */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-2 px-4 md:px-0 md:max-h-[55vh] md:overflow-y-auto md:overflow-x-visible portfolio-scroll"
        >
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              reducedMotion={!!reducedMotion}
            />
          ))}
        </div>
        <div className="mt-8 md:mt-10 flex justify-center">
          <SoftCTA scrollTo="beneficios">Ver cómo trabajamos</SoftCTA>
        </div>
      </div>
    </motion.section>
  );
}

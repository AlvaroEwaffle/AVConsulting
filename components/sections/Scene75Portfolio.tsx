'use client';

/**
 * ESCENA 7.5 — Portafolio Boutique
 * 
 * Objetivo: Mostrar resultados reales y estética de alto nivel.
 * Visual: Grid de proyectos con imágenes de alta calidad y hover premium.
 */

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Samy Studio',
    category: 'Formación de Contenido',
    image: 'https://ewaffle.cl/assets/SamyStudio.png', // Imagen representativa del Hero
    link: 'https://samy-studio.com/'
  },
  {
    title: 'Influencer Factory',
    category: 'Academia Digital',
    image: 'https://ewaffle.cl/assets/InfluencerFactory.png', // Imagen representativa del Hero
    link: 'https://influencersfactory.com/'
  },
  {
    title: 'Cervecería Puchacay',
    category: 'E-commerce Artesanal',
    image: 'https://ewaffle.cl/assets/Puchacay.png', // Imagen representativa del Hero
    link: 'https://cerveceriapuchacay.cl/'
  },
  {
    title: 'Defensa Total',
    category: 'Servicios Legales',
    image: 'https://ewaffle.cl/assets/DefensaTotal.png', // Imagen representativa del Hero
    link: 'http://defensatotalabogados.cl/'
  },
  {
    title: 'Fidelidapp',
    category: 'SaaS de Fidelización',
    image: 'https://ewaffle.cl/assets/Fidelidapp.png', // Imagen representativa del Hero
    link: 'https://www.fidelidapp.cl/'
  },
  {
    title: 'Dra. Oyarzún',
    category: 'Estética Facial Premium',
    image: 'https://ewaffle.cl/assets/DraOyarzun.png', // Imagen representativa del Hero
    link: 'https://doctoraoyarzun.cl/'
  },
  {
    title: 'Ewaffle',
    category: 'Agencia de Contenidos',
    image: 'https://ewaffle.cl/_astro/LandingPhoto.Cl9_Z6_W.png',
    link: 'https://ewaffle.cl'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] as const }
  }
};

export default function Scene75Portfolio() {
  const [lineFilled, setLineFilled] = useState(false);

  return (
    <motion.section
      className="h-screen-fixed snap-start flex items-center justify-center relative px-4 md:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setLineFilled(true)}
    >
      {/* Línea azul continua desde la sección anterior */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 z-0" />
      <motion.div
        className="absolute left-1/2 top-0 w-px bg-accent transform -translate-x-1/2 origin-top z-0"
        initial={{ height: 0 }}
        animate={{ height: lineFilled ? '100%' : 0 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      />

      <div className="container max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center py-8 md:py-12">
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">
            Portafolio Seleccionado
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Proyectos que definen un nuevo estándar.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 bg-slate-900"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              {/* Imagen con overlay */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              
              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[8px] uppercase tracking-widest text-accent mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </p>
                <h4 className="text-sm md:text-base font-light text-white">
                  {project.title}
                </h4>
              </div>

              {/* Borde animado al hover */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 transition-colors duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

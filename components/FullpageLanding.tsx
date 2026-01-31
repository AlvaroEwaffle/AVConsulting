'use client';

/**
 * FullpageLanding - Componente principal de la landing
 * 
 * Este componente estructura todas las secciones en un contenedor con scroll snap.
 * Cada sección ocupa 100vh y se encaja al hacer scroll (scroll snap).
 * 
 * Configuración de scroll snap:
 * - Contenedor: `h-screen overflow-y-scroll snap-y snap-mandatory` (aplicado en globals.css al html)
 * - Cada sección: `min-h-screen snap-start` para que se encaje al llegar
 */

import Scene1Hero from './sections/Scene1Hero';
import Scene1Testimonial from './sections/Scene1Testimonial';
import Scene2Truth from './sections/Scene2Truth';
import Scene3Insight from './sections/Scene3Insight';
import Scene4Focus from './sections/Scene4Focus';
import Scene6Filter from './sections/Scene6Filter';
import Scene7Authority from './sections/Scene7Authority';
import Scene75Portfolio from './sections/Scene75Portfolio';
import Scene8Invitation from './sections/Scene8Invitation';

export default function FullpageLanding() {
  return (
    <main className="relative w-full">
      {/* 
        Landing Premium — "La página que se detiene"
        8 escenas con ritmo cinematográfico
        
        Cada sección tiene:
        - min-h-screen: Ocupa al menos 100vh
        - snap-start: Se encaja al llegar (scroll snap)
        - flex items-center justify-center: Centrado vertical y horizontal
        - Safe areas para iOS con padding-top y padding-bottom
        - Animaciones lentas, respiradas, sin loops rápidos
      */}
      <Scene1Hero />
      <Scene1Testimonial />
      <Scene2Truth />
      <Scene3Insight />
      <Scene4Focus />
      <Scene6Filter />
      <Scene7Authority />
      {/* <Scene75Portfolio /> */}
      <Scene8Invitation />
    </main>
  );
}

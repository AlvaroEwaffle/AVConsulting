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
import SceneOffers from './sections/SceneOffers';
import SceneBenefits from './sections/SceneBenefits';
import Scene1Testimonial from './sections/Scene1Testimonial';
import Scene2Truth from './sections/Scene2Truth';
import Scene3Insight from './sections/Scene3Insight';
import Scene6Filter from './sections/Scene6Filter';
import Scene7Authority from './sections/Scene7Authority';
import Scene75Portfolio from './sections/Scene75Portfolio';
import SceneGuarantee from './sections/SceneGuarantee';
import FAQSection, { productFAQs } from './sections/FAQSection';
import Scene8Invitation from './sections/Scene8Invitation';

export default function FullpageLanding() {
  return (
    <main className="relative w-full" id="inicio" aria-label="Contenido principal">
      {/* Hero → Ofertas → Portfolio → Beneficios → Prueba social → ... */}
      <Scene1Hero />
      <section id="ofertas" aria-label="Ofertas">
        <SceneOffers />
      </section>
      <section id="portafolio" aria-label="Portafolio">
        <Scene75Portfolio />
      </section>
      <section id="beneficios" aria-label="Cómo trabajamos">
        <SceneBenefits />
      </section>
      <section id="testimonial" aria-label="Testimonial">
        <Scene1Testimonial />
      </section>
      <Scene3Insight />
      <Scene2Truth />
      <Scene6Filter />
      <Scene7Authority />
      <SceneGuarantee />
      <section id="faq" aria-label="Preguntas frecuentes">
        <FAQSection
          title="Preguntas frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre el diagnóstico y las ofertas"
          faqs={productFAQs}
        />
      </section>
      <Scene8Invitation />
    </main>
  );
}

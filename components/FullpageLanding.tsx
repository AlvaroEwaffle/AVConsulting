'use client';

/**
 * FullpageLanding - Componente principal de la landing
 * 
 * Fondo animado del hero fijo en toda la página; secciones con overlay semi-transparente.
 * Scroll snap en cada sección.
 */

import { useState } from 'react';
import HeroBackground from './HeroBackground';
import DiagnosticoPresenciaDigital from './DiagnosticoPresenciaDigital';
import Scene1Hero from './sections/Scene1Hero';
import SceneOffers from './sections/SceneOffers';
import SceneDiagnosticoCta from './sections/SceneDiagnosticoCta';
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
  const [diagnosticoOpen, setDiagnosticoOpen] = useState(false);

  return (
    <main className="relative w-full" id="inicio" aria-label="Contenido principal">
      <HeroBackground />
      <div className="relative z-10">
        <Scene1Hero />
      <section id="ofertas" aria-label="Ofertas">
        <SceneOffers />
      </section>
      <SceneDiagnosticoCta onOpenDiagnostico={() => setDiagnosticoOpen(true)} />
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
      {/* Scene2Truth (mockup móvil) oculto por ahora */}
      {/* <Scene2Truth /> */}
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
      </div>
      <DiagnosticoPresenciaDigital
        open={diagnosticoOpen}
        onClose={() => setDiagnosticoOpen(false)}
      />
    </main>
  );
}

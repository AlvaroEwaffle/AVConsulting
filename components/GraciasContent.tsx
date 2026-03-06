'use client';

import Link from 'next/link';
import CalendlyButton from './CalendlyButton';
import { trackEvent } from './EmailCaptureForm';

const CHECKLIST = [
  { category: 'Estructura', items: [
    'Se entiende qué haces en los primeros 5 segundos',
    'Hay un titular claro que habla del problema del cliente',
    'El llamado a la acción principal está visible sin hacer scroll',
    'Solo hay un objetivo por página (no 5 botones distintos)',
    'La navegación no distrae del objetivo principal',
  ]},
  { category: 'Conversión', items: [
    'Hay un formulario o botón de contacto visible',
    'El CTA usa un verbo de acción, no "Enviar"',
    'Hay prueba social (testimonios, logos, números)',
    'Existe una oferta clara: qué obtiene el visitante',
    'Hay urgencia o escasez real (no inventada)',
  ]},
  { category: 'Confianza', items: [
    'Tu foto o la del equipo está visible',
    'Hay testimonios con nombre y empresa',
    'Se mencionan resultados concretos (números, %)',
    'Hay garantía o frase que reduce el riesgo',
    'Las páginas legales existen (privacidad, términos)',
  ]},
  { category: 'Técnica', items: [
    'La web carga en menos de 3 segundos',
    'Se ve bien en celular (no solo en desktop)',
    'Los textos son legibles (tamaño, contraste, espaciado)',
    'No hay links rotos ni páginas de error',
    'Tiene certificado SSL (el candado verde)',
  ]},
  { category: 'Medición', items: [
    'Google Analytics está instalado y funcionando',
    'Tienes conversiones configuradas (no solo visitas)',
    'Sabes de dónde viene tu tráfico',
    'Mides cuántos visitantes se convierten en leads',
    'Revisas los datos al menos una vez por semana',
  ]},
  { category: 'Sistema', items: [
    'Capturas emails o datos de contacto',
    'Tienes un seguimiento post-contacto (email, WhatsApp)',
  ]},
];

export default function GraciasContent() {
  return (
    <main className="w-full px-5 sm:px-6 min-h-screen">
      <div className="max-w-letter mx-auto py-12 sm:py-20 w-full">
        {/* Confirmation */}
        <section className="mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Listo. Acá está tu checklist.
          </h1>
          <p className="text-white/60 leading-relaxed">
            Los 27 puntos que reviso cuando un cliente me dice que su web no
            convierte. Revísalos uno por uno con tu web abierta al lado.
          </p>
        </section>

        {/* PDF download */}
        <section className="mb-10 sm:mb-14">
          <a
            href="/guia-diagnostico-digital.pdf"
            download
            onClick={() => trackEvent('pdf_download')}
            className="inline-flex items-center gap-3 w-full sm:w-auto text-center py-4 px-8 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-lg rounded-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar guía en PDF
          </a>
        </section>

        {/* Calendly CTA — top */}
        <section className="mb-10 sm:mb-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              ¿Quieres que lo revisemos juntos?
            </h2>
            <p className="text-white/50 mb-6 leading-relaxed">
              30 minutos. Sin compromiso. Revisamos tu web en vivo y te doy
              un plan concreto.
            </p>
            <CalendlyButton />
            <p className="text-sm text-white/40 mt-3">
              Solo 4 por semana.
            </p>
          </div>
        </section>

        {/* 27-point checklist */}
        <section className="mb-10 sm:mb-14 space-y-8">
          {CHECKLIST.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm uppercase tracking-[0.15em] text-accent font-semibold mb-4">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <label
                    key={item}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 shrink-0 rounded border-white/20 bg-white/[0.05] accent-accent cursor-pointer"
                    />
                    <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Minimal footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <span>&copy; 2026 Álvaro Villena</span>
          <div className="flex gap-4">
            <Link
              href="/"
              className="hover:text-white/60 transition-colors"
            >
              Volver al inicio
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-white/60 transition-colors"
            >
              Privacidad
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

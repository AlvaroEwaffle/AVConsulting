'use client';

import Link from 'next/link';
import CalendlyButton from './CalendlyButton';
import { trackEvent } from './EmailCaptureForm';

export default function GraciasContent() {
  return (
    <main className="w-full px-5 sm:px-6 min-h-screen">
      <div className="max-w-letter mx-auto py-12 sm:py-20 w-full">

        {/* Confirmation */}
        <section className="mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            ¡Listo! Ya estás suscrito.
          </h1>
          <p className="text-white/60 leading-relaxed">
            Cada semana te llega una táctica práctica de IA o gestión de producto.
            Sin relleno. Directo al punto.
          </p>
        </section>

        {/* What comes next */}
        <section className="mb-10 sm:mb-14 space-y-4">
          <h2 className="text-lg font-semibold text-white">¿Qué sigue?</h2>
          <div className="space-y-3 pl-1">
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold shrink-0">1.</span>
              <p className="text-white/70">Revisa tu bandeja de entrada — te llega un email de confirmación.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold shrink-0">2.</span>
              <p className="text-white/70">El próximo martes llega la primera táctica de la semana.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent font-bold shrink-0">3.</span>
              <p className="text-white/70">Si quieres ir más rápido, agenda una conversación directa conmigo acá abajo.</p>
            </div>
          </div>
        </section>

        {/* Calendly CTA */}
        <section className="mb-10 sm:mb-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              ¿Quieres conversarlo en vivo?
            </h2>
            <p className="text-white/50 mb-6 leading-relaxed">
              30 minutos. Conversamos sobre tu negocio y vemos cómo puedo ayudarte
              de forma concreta.
            </p>
            <CalendlyButton />
            <p className="text-sm text-white/40 mt-3">
              Sin compromiso. Sin letra chica.
            </p>
          </div>
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

'use client';

/**
 * LeadQualificationForm - Formulario de calificación de leads
 * 
 * Integraciones:
 * - reCAPTCHA v2 para validación
 * - Fidelidapp API para guardar el lead
 * - WhatsApp para continuar la conversación
 */

import { useState, FormEvent } from 'react';
import Script from 'next/script';

interface LeadQualificationFormProps {
  serviceName: string;
  phoneNumber?: string;
  buttonText?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      getResponse: () => string;
      reset: () => void;
    };
  }
}

export default function LeadQualificationForm({
  serviceName,
  phoneNumber = '56920115198',
  buttonText = 'Enviar y continuar con WhatsApp',
}: LeadQualificationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const sendLeadToFidelidapp = async (name: string, email: string, phone: string, business: string) => {
    try {
      const requestBody = {
        slug: 'alvaro-villena',
        clientData: {
          name: name,
          email: email || '',
          phoneNumber: phone || '',
          notes: `Negocio: ${business}`,
        },
      };

      const requestConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MCP-API-Key': '1000782937f7872abdc0e4fadc467bbcea6b353420aed09c29f036f3b0fa2056',
        },
        body: JSON.stringify(requestBody),
      };

      // Usar Promise.race con timeout para evitar que bloquee el proceso
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 5000)
      );

      const fetchPromise = fetch(
        'https://api.fidelidapp.cl/api/mcp/clients/add',
        requestConfig
      );

      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        console.error('❌ [Fidelidapp] Error al enviar lead:', errorData);
      } else {
        const result = await response.json();
        console.log('✅ [Fidelidapp] Lead enviado exitosamente:', result);
      }
    } catch (error) {
      // Silenciosamente continuar - no bloquear el proceso
      console.warn('⚠️ [Fidelidapp] No se pudo enviar el lead, continuando con el proceso:', error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!recaptchaLoaded || typeof window.grecaptcha === 'undefined') {
      alert('reCAPTCHA no está cargado. Por favor, recarga la página.');
      return;
    }

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert('Por favor, completa la verificación reCAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const business = formData.get('business') as string;

    // Enviar lead a Fidelidapp (no bloquear - fire and forget con timeout)
    // No usar await para que el proceso continúe incluso si falla
    sendLeadToFidelidapp(name, email, phone, business).catch(() => {
      // Error ya manejado en sendLeadToFidelidapp, solo continuar
    });

    // Pequeño delay para mostrar el estado de carga antes de redirigir
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Resetear reCAPTCHA y formulario de forma segura
    try {
      if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
        window.grecaptcha.reset();
      }
      if (e.currentTarget) {
        e.currentTarget.reset();
      }
    } catch (resetError) {
      console.warn('⚠️ Error al resetear formulario:', resetError);
    }

    // Redirigir a Google Calendar (siempre, incluso si Fidelidapp falló)
    window.location.href = 'https://calendar.app.google/bUooAJyEjxW4aQCT6';
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
        onLoad={() => setRecaptchaLoaded(true)}
      />
      <div className="w-full relative">
        {isSubmitting && (
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm rounded-xl z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <svg
                className="animate-spin h-12 w-12 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="text-white text-lg font-light">Procesando tu solicitud...</p>
            </div>
          </div>
        )}
        <form 
          id="leadForm" 
          className="w-full flex flex-col gap-2 md:gap-4" 
          onSubmit={handleSubmit}
        >
          {/* Nombre */}
          <div className="w-full">
            <label 
              htmlFor="name" 
              className="block text-[10px] md:text-[11px] font-medium text-white/60 mb-1 text-left uppercase tracking-[0.2em]"
            >
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-slate-800/40 border border-white/12 text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 text-sm transition-all"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label 
              htmlFor="email" 
              className="block text-[10px] md:text-[11px] font-medium text-white/60 mb-1 text-left uppercase tracking-[0.2em]"
            >
              Tu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-slate-800/40 border border-white/12 text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 text-sm transition-all"
              placeholder="Ej: juan@ejemplo.com"
            />
          </div>

          {/* WhatsApp */}
          <div className="w-full">
            <label 
              htmlFor="phone" 
              className="block text-[10px] md:text-[11px] font-medium text-white/60 mb-1 text-left uppercase tracking-[0.2em]"
            >
              Tu WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-slate-800/40 border border-white/12 text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 text-sm transition-all"
              placeholder="Ej: +56912345678"
            />
          </div>

          {/* Cuéntame sobre tu negocio */}
          <div className="w-full">
            <label 
              htmlFor="business" 
              className="block text-[10px] md:text-[11px] font-medium text-white/60 mb-1 text-left uppercase tracking-[0.2em]"
            >
              Tu negocio <span className="text-white/40 text-[10px] normal-case">(3-5 palabras)</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              required
              maxLength={50}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-slate-800/40 border border-white/12 text-white placeholder-white/25 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 text-sm transition-all"
              placeholder="Ej: Gimnasio de crossfit en Santiago"
            />
          </div>

          {/* reCAPTCHA v2 — en móvil más pequeño para que quepa todo en una pantalla */}
          <div className="flex justify-start my-2 md:my-3 scale-[0.85] md:scale-90 origin-left">
            <div
              className="g-recaptcha"
              data-sitekey="6LcizUksAAAAADl6SpTv1SRFKRD3-jCjrzHZqPU8"
              data-theme="dark"
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 border border-accent/30 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(33,117,161,0.25)] disabled:opacity-50 disabled:cursor-not-allowed mt-2 relative"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Enviando...</span>
              </span>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </>
  );
}

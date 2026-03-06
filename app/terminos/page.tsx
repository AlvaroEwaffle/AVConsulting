import Link from 'next/link';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description:
    'Términos de uso del sitio alvarovillena.cl y condiciones del diagnóstico digital y servicios de consultoría web.',
  alternates: { canonical: `${siteUrl}/terminos` },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <main className="w-full px-5 sm:px-6 min-h-screen" id="main">
      <div className="max-w-letter mx-auto py-12 sm:py-20">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          Términos de Uso
        </h1>

        <p className="text-white/40 text-sm mb-8">
          Última actualización: 4 de marzo de 2026
        </p>

        <section className="space-y-6 text-white/60 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder y utilizar este sitio web (alvarovillena.cl), aceptas
              estos términos de uso en su totalidad. Si no estás de acuerdo con
              alguna parte de estos términos, no debes utilizar este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Uso del sitio y contenido descargable
            </h2>
            <p>
              Este sitio ofrece información sobre servicios de consultoría web
              y una guía descargable gratuita (Guía de Diagnóstico Digital).
              El uso del formulario de descarga implica aceptar que la
              información proporcionada (nombre y email) será utilizada según
              lo establecido en nuestra{' '}
              <Link
                href="/privacidad"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Propiedad intelectual
            </h2>
            <p>
              Todo el contenido de este sitio, incluyendo textos, imágenes,
              diseños y la Guía de Diagnóstico Digital, es propiedad de Álvaro
              Villena / Villelabs. La guía se entrega para uso personal y no
              puede ser redistribuida, modificada o comercializada sin
              autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Servicios de consultoría
            </h2>
            <p>
              Los diagnósticos gratuitos ofrecidos a través de este sitio son
              sesiones informativas de 30 minutos sin compromiso. Los
              entregables, plazos y condiciones de servicios contratados se
              definen en acuerdos específicos firmados por ambas partes tras
              el diagnóstico inicial.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Limitación de responsabilidad
            </h2>
            <p>
              La información proporcionada en este sitio y en la guía
              descargable tiene carácter informativo y educativo. Los
              resultados específicos dependen de múltiples factores propios de
              cada negocio. No garantizamos resultados específicos derivados
              de la aplicación de las recomendaciones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en
              cualquier momento. Los cambios serán efectivos desde su
              publicación en esta página.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Contacto
            </h2>
            <p>
              Para consultas sobre estos términos o sobre un proyecto
              específico, escribe a{' '}
              <a
                href="mailto:alvaro.villena@gmail.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                alvaro.villena@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center text-accent hover:text-accent-hover font-medium text-sm transition-colors"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

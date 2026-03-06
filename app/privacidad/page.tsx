import Link from 'next/link';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de Álvaro Villena. Cómo tratamos tus datos (nombre, email) en la guía de diagnóstico digital y servicios de consultoría.',
  alternates: { canonical: `${siteUrl}/privacidad` },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <main className="w-full px-5 sm:px-6 min-h-screen" id="main">
      <div className="max-w-letter mx-auto py-12 sm:py-20">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          Política de Privacidad
        </h1>

        <p className="text-white/40 text-sm mb-8">
          Última actualización: 4 de marzo de 2026
        </p>

        <section className="space-y-6 text-white/60 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              Álvaro Villena, operando como Villelabs, con domicilio en Santiago,
              Región Metropolitana, Chile. Para cualquier consulta sobre el
              tratamiento de tus datos puedes escribir a{' '}
              <a
                href="mailto:alvaro.villena@gmail.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                alvaro.villena@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Datos que recopilamos
            </h2>
            <p>
              A través de este sitio recopilamos únicamente los datos que
              proporcionas voluntariamente al completar el formulario de
              descarga:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p>Usamos tus datos exclusivamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Enviarte la Guía de Diagnóstico Digital (27 puntos)
              </li>
              <li>
                Enviarte contenido relacionado con estrategia web y
                conversión digital (máximo 1 email semanal)
              </li>
              <li>
                Comunicarnos contigo si agendas un diagnóstico gratuito
              </li>
            </ul>
            <p className="mt-2">
              No utilizamos tus datos para publicidad de terceros ni los
              compartimos con fines de marketing ajenos.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Base legal
            </h2>
            <p>
              El tratamiento se basa en tu consentimiento explícito al
              completar el formulario. Puedes retirar tu consentimiento en
              cualquier momento escribiendo a{' '}
              <a
                href="mailto:alvaro.villena@gmail.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                alvaro.villena@gmail.com
              </a>{' '}
              o usando el enlace de baja en cualquier email que recibas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Retención de datos
            </h2>
            <p>
              Conservamos tus datos mientras mantengas tu suscripción activa.
              Si solicitas la baja o eliminas tu suscripción, tus datos serán
              eliminados en un plazo máximo de 30 días.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Servicios de terceros
            </h2>
            <p>
              Este sitio utiliza los siguientes servicios de terceros que
              pueden procesar datos:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong className="text-white/80">Google Tag Manager</strong>:
                para análisis de uso del sitio (Google Analytics)
              </li>
              <li>
                <strong className="text-white/80">Cloudflare Pages</strong>:
                para el alojamiento del sitio web
              </li>
              <li>
                <strong className="text-white/80">Fidelidapp</strong>:
                para la gestión de leads y envío de la guía
              </li>
            </ul>
            <p className="mt-2">
              Estos servicios tienen sus propias políticas de privacidad y
              operan como procesadores de datos bajo nuestras instrucciones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Cookies y tecnologías similares
            </h2>
            <p>
              Este sitio utiliza Google Tag Manager, que puede establecer
              cookies de análisis (Google Analytics) para entender cómo los
              visitantes usan el sitio. No utilizamos cookies de publicidad ni
              de seguimiento entre sitios.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Tus derechos
            </h2>
            <p>
              De acuerdo con la Ley 19.628 sobre Protección de la Vida Privada
              de Chile, tienes derecho a:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Acceder a los datos que tenemos sobre ti</li>
              <li>Solicitar la rectificación de datos incorrectos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
              <li>Oponerte al tratamiento de tus datos</li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, escribe a{' '}
              <a
                href="mailto:alvaro.villena@gmail.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                alvaro.villena@gmail.com
              </a>
              . Responderemos en un plazo máximo de 10 días hábiles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Seguridad
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para
              proteger tus datos, incluyendo cifrado en tránsito (HTTPS),
              acceso restringido y almacenamiento seguro.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Cambios a esta política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Cualquier
              cambio será publicado en esta página con la fecha de
              actualización correspondiente.
            </p>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
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

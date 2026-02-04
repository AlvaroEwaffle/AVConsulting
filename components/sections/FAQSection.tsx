'use client';

/**
 * FAQSection - Sección de preguntas frecuentes
 * 
 * Usa detalles HTML nativo para acordeón accesible
 * Incluye schema markup para SEO
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import SoftCTA from '@/components/SoftCTA';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    question: '¿Cuánto tiempo tarda en estar funcionando el sistema?',
    answer: 'La configuración inicial toma aproximadamente 3-5 días hábiles. Una vez configurado, el sistema funciona automáticamente 24/7, capturando leads incluso cuando no estás publicando.',
  },
  {
    question: '¿Necesito tener conocimientos técnicos?',
    answer: 'No, para nada. Nosotros configuramos todo por ti. Solo necesitas proporcionarnos la información de tu negocio (precios, horarios, servicios) y nosotros hacemos el resto.',
  },
  {
    question: '¿Qué incluye exactamente el sistema?',
    answer: 'El sistema incluye: landing page de registro de interesados, base de datos de contactos, integración con Instagram, sistema de derivación a WhatsApp, y seguimiento automatizado de leads.',
  },
  {
    question: '¿Funciona solo para gimnasios o también para otras academias deportivas?',
    answer: 'Funciona para cualquier negocio deportivo: gimnasios, academias de tenis, natación, artes marciales, crossfit, yoga, pilates, y más. El sistema se adapta a tu tipo de negocio.',
  },
  {
    question: '¿Qué pasa si ya tengo una página web?',
    answer: 'Perfecto. El sistema se integra con tu web existente o puede funcionar como una landing dedicada para captación. Trabajamos con lo que ya tienes y lo potenciamos.',
  },
  {
    question: '¿Hay algún costo mensual después de la implementación?',
    answer: 'Depende del plan que elijas. Tenemos opciones que incluyen mantenimiento y actualizaciones, y otras que son de pago único. Durante la conversación te explicamos todas las opciones.',
  },
];

/** FAQs para la landing de diseño web boutique / diagnóstico digital */
export const productFAQs: FAQ[] = [
  {
    question: '¿Qué es el diagnóstico digital?',
    answer: 'Es una sesión estratégica de 30 minutos donde revisamos tu negocio, tu web actual (si tienes) y tus objetivos. Definimos qué tiene sentido construir (Landing, Web o Plataforma) y qué no. Sin compromiso. Si no ves valor, no seguimos.',
  },
  {
    question: '¿Tienen precios cerrados para Landing y Web?',
    answer: 'Sí. La Landing de Conversión y la Web Estratégica tienen entregables claros y precio cerrado. La Plataforma o App a medida se cotiza después del diagnóstico, porque cada proyecto es distinto.',
  },
  {
    question: '¿En cuánto tiempo tengo mi sitio listo?',
    answer: 'Para Landing y Web estratégica trabajamos en plazos definidos (por ejemplo, dos semanas para lanzamiento base). Los plazos se confirman en el diagnóstico según tu alcance.',
  },
  {
    question: '¿Para qué tipo de negocios es?',
    answer: 'Para empresas en crecimiento que quieren claridad: founders, servicios premium, e-commerce boutique, consultoras, coaches, marcas D2C. No es para quien busca lo más barato o plantillas genéricas.',
  },
  {
    question: '¿Qué pasa si ya tengo una web?',
    answer: 'Podemos mejorarla con estructura de conversión y copy estratégico, o reemplazarla si ya no te representa. En el diagnóstico vemos qué opción tiene más sentido.',
  },
];

export default function FAQSection({
  title = 'Preguntas frecuentes',
  subtitle = 'Resolvemos las dudas más comunes sobre el sistema',
  faqs = defaultFAQs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  // Generar schema markup para SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <motion.section
        className="min-h-screen snap-start flex items-center justify-center px-4 md:px-6"
        style={{
          minHeight: '100dvh',
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container max-w-4xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" variants={containerVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div className="space-y-4" variants={containerVariants}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#2175a1]/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#2175a1] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center mt-12 md:mt-14"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SoftCTA />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

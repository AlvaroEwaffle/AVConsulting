/**
 * SEOHead - Schema markup (Organization, Service, WebSite)
 * JSON-LD en body; los crawlers lo indexan correctamente.
 */

'use client';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export default function SEOHead() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Villelabs',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icono.png`,
      width: 512,
      height: 512,
    },
    description:
      'Diseño Web Boutique de Alto Impacto. Transformamos tu identidad en un sistema digital premium que destaca y convierte.',
    founder: { '@type': 'Person', name: 'Álvaro Villena' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'alvaro.villena@gmail.com',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: ['https://www.linkedin.com/in/alvarovillena'],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-boutique`,
    name: 'Diseño Web Boutique de Alto Impacto',
    description:
      'Sistema digital premium diseñado para escalar tu autoridad y facturación en 2 semanas.',
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Web Design & Development',
    areaServed: { '@type': 'Place', name: 'Latinoamérica' },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Villelabs - Diseño Web Boutique',
    url: SITE_URL,
    description:
      'Transformamos tu identidad en un sistema digital premium que destaca y convierte.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'ReadAction',
      target: { '@type': 'EntryPoint', url: SITE_URL },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

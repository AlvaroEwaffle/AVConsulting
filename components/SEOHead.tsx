/**
 * SEOHead - Componente para agregar schema markup
 * 
 * En Next.js App Router, los scripts de schema se agregan en el body
 * pero Next.js los mueve automáticamente al head cuando es necesario.
 */

'use client';

export default function SEOHead() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://alvarovillena.cl/#organization',
    name: 'Villelabs',
    url: 'https://alvarovillena.cl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://alvarovillena.cl/icono.png',
      width: 512,
      height: 512
    },
    description: 'Diseño Web Boutique de Alto Impacto. Transformamos tu identidad en un sistema digital premium que destaca y convierte.',
    founder: {
      '@type': 'Person',
      name: 'Álvaro Villena'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'alvaro.villena@gmail.com',
      availableLanguage: ['Spanish', 'English']
    },
    sameAs: [
      'https://www.linkedin.com/in/alvarovillena',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://alvarovillena.cl/#service-boutique',
    name: 'Diseño Web Boutique de Alto Impacto',
    description: 'Sistema digital premium diseñado para escalar tu autoridad y facturación en 2 semanas.',
    provider: {
      '@id': 'https://alvarovillena.cl/#organization'
    },
    serviceType: 'Web Design & Development',
    areaServed: {
      '@type': 'Place',
      name: 'Latinoamérica'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://alvarovillena.cl/#website',
    name: 'Villelabs - Diseño Web Boutique',
    url: 'https://alvarovillena.cl',
    description: 'Transformamos tu identidad en un sistema digital premium que destaca y convierte.',
    publisher: {
      '@id': 'https://alvarovillena.cl/#organization'
    }
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

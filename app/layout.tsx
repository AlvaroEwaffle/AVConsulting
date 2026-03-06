import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvarovillena.cl";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Álvaro Villena | Webs que venden",
    template: "%s | Álvaro Villena",
  },
  description:
    "Instagram no es tu negocio. Es una vitrina prestada. Descarga la guía gratuita con los 27 puntos para transformar tu web de decoración a sistema de ventas.",
  keywords: [
    "arquitectura digital",
    "sistema de ventas web",
    "conversión web Chile",
    "diagnóstico digital",
    "web que vende",
    "Álvaro Villena",
    "dejar de depender de Instagram",
    "guía diagnóstico digital",
    "estructura digital negocio",
    "ingeniería web",
  ],
  authors: [{ name: "Álvaro Villena", url: siteUrl }],
  creator: "Álvaro Villena",
  publisher: "Álvaro Villena",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Álvaro Villena",
    title: "Álvaro Villena | Webs que venden",
    description:
      "Instagram no es tu negocio. Es una vitrina prestada. Descarga la guía con los 27 puntos para transformar tu web en un sistema de ventas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Álvaro Villena — Webs que venden",
      },
      { url: "/icono.png", width: 512, height: 512, alt: "Álvaro Villena" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Villena | Webs que venden",
    description:
      "Instagram no es tu negocio. Descarga la guía con los 27 puntos para transformar tu web en un sistema de ventas real.",
    creator: "@chokovillena",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-CL": siteUrl,
    },
  },
  icons: {
    icon: [
      { url: "/icono.png", type: "image/png", sizes: "any" },
      { url: "/icono.png", type: "image/png", sizes: "32x32" },
      { url: "/icono.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/icono.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/icono.png",
  },
  other: {
    "msapplication-TileColor": "#0f172a",
    "msapplication-TileImage": "/icono.png",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Álvaro Villena",
  },
};

/* ─── Structured Data (JSON-LD) — server-rendered ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Álvaro Villena | Webs que venden",
      description:
        "Instagram no es tu negocio. Es una vitrina prestada. Descarga la guía gratuita con los 27 puntos para transformar tu web de decoración a sistema de ventas.",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Álvaro Villena | Webs que venden",
      description:
        "Instagram no es tu negocio. Es una vitrina prestada. Descarga la guía gratuita con los 27 puntos para transformar tu web de decoración a sistema de ventas.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      inLanguage: "es",
      dateModified: "2026-03-04",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Álvaro Villena",
      url: siteUrl,
      image: `${siteUrl}/gallery/StandingLookingAtCamera.JPG`,
      jobTitle: "Consultor de Arquitectura Digital",
      description:
        "Consultor web especializado en transformar sitios decorativos en sistemas de ventas. +50 proyectos. Top 3% en Toptal.",
      knowsAbout: [
        "Arquitectura digital",
        "Conversión web",
        "Diseño web orientado a ventas",
        "Automatización con IA",
        "Consultoría Agile",
      ],
      worksFor: { "@id": `${siteUrl}/#organization` },
      sameAs: [
        "https://www.instagram.com/chokovillena",
        "https://www.linkedin.com/in/alvarovillena",
        "https://x.com/chokovillena",
        "https://www.toptal.com/project-managers/resume/alvaro-villena#B3Zxo1",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Villelabs",
      url: "https://villelab.com",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icono.png`,
        width: 512,
        height: 512,
      },
      founder: { "@id": `${siteUrl}/#person` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+56920115198",
        email: "alvaro.villena@gmail.com",
        availableLanguage: ["Spanish", "English"],
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Diagnóstico Digital y Arquitectura Web",
      description:
        "Diagnóstico de 27 puntos y rediseño de sitios web orientado a conversión. Transformamos webs decorativas en sistemas de ventas.",
      provider: { "@id": `${siteUrl}/#person` },
      serviceType: "Web Consulting & Development",
      areaServed: {
        "@type": "Place",
        name: "Chile y Latinoamérica",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Consultoría Web",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico Digital Gratuito",
              description:
                "Sesión de 30 minutos donde revisamos tu web en vivo y te entregamos un plan concreto.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guía de Diagnóstico Digital: 27 Puntos",
              description:
                "Los 27 puntos que tu web necesita cumplir para convertir visitantes en clientes.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        {/* Structured Data — server-rendered JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBTHC5VK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AmbientBackground />
        <div className="relative z-10">
          {children}
        </div>

        <WhatsAppFloatButton />
        <ExitIntentPopup />

        {/* Google Tag Manager — deferred to after interactive */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBTHC5VK');`,
          }}
        />
      </body>
    </html>
  );
}

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
    default: "Álvaro Villena | PM & IA para LATAM",
    template: "%s | Álvaro Villena",
  },
  description:
    "PM Top 3% en Toptal. Fundador de 4 negocios. Ayudo a empresas y emprendedores de LATAM a implementar IA y mejorar su gestión de producto.",
  keywords: [
    "PM LATAM",
    "gestión de producto Chile",
    "consultoría IA LATAM",
    "implementar IA empresa",
    "Agile PM Chile",
    "Toptal PM LATAM",
    "VilleLab",
    "Álvaro Villena",
    "product management Santiago",
    "IA para emprendedores LATAM",
    "operaciones con IA",
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
    title: "Álvaro Villena | PM & IA para LATAM",
    description:
      "PM Top 3% en Toptal. Fundador de 4 negocios. Ayudo a empresas y emprendedores de LATAM a implementar IA y mejorar su gestión de producto.",
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
    title: "Álvaro Villena | PM & IA para LATAM",
    description:
      "PM Top 3% Toptal. Emprendedor. Te ayudo a operar tu negocio con IA.",
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
      name: "Álvaro Villena | PM & IA para LATAM",
      description:
        "PM Top 3% en Toptal. Fundador de 4 negocios. Ayudo a empresas y emprendedores de LATAM a implementar IA y mejorar su gestión de producto.",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Álvaro Villena | PM & IA para LATAM",
      description:
        "PM Top 3% en Toptal. Fundador de 4 negocios. Ayudo a empresas y emprendedores de LATAM a implementar IA y mejorar su gestión de producto.",
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
      jobTitle: "Agile PM & AI Consultant | Top 3% Toptal",
      description:
        "PM senior Top 3% en Toptal. Fundador de 4 negocios en LATAM. Especialista en gestión de producto, implementación de IA y sistemas operacionales para empresas y emprendedores.",
      knowsAbout: [
        "Agile Project Management",
        "Product Management",
        "AI Implementation",
        "Digital Operations",
        "LATAM Business Strategy",
        "Shape Up Methodology",
        "SaaS Platforms",
        "Process Automation with AI",
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
      name: "PM & AI Consulting para LATAM",
      description:
        "Ayudo a empresas y emprendedores de LATAM a implementar IA y mejorar su gestión de producto. Newsletter semanal + sesiones de consultoría.",
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

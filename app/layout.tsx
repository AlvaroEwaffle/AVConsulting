import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import SEOHead from "@/components/SEOHead";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alvarovillena.cl";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diseño Web Boutique de Alto Impacto | Villelabs | Álvaro Villena",
    template: "%s | Villelabs",
  },
  description:
    "Transformamos tu identidad en un sistema digital premium que destaca y convierte. Diseño boutique de alto impacto implementado en 2 semanas para escalar tu autoridad y facturación.",
  keywords: [
    "diseño web boutique",
    "sistema digital de alto impacto",
    "landing page premium",
    "diseño web para founders",
    "marca personal premium",
    "conversión digital",
    "Villelabs",
    "Álvaro Villena",
    "diseño web de lujo",
    "estrategia digital boutique",
    "diagnóstico digital",
    "web estratégica",
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
    locale: "es_ES",
    url: siteUrl,
    siteName: "Villelabs - Diseño Web Boutique",
    title: "Diseño Web Boutique de Alto Impacto | Villelabs",
    description:
      "Transformamos tu identidad en un sistema digital premium que destaca y convierte. Tu marca merece una experiencia única.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villelabs - Diseño Web Boutique de Alto Impacto",
      },
      { url: "/icono.png", width: 512, height: 512, alt: "Villelabs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Boutique de Alto Impacto | Villelabs",
    description:
      "Sistema digital premium diseñado para escalar tu autoridad y facturación en 2 semanas.",
    creator: "@alvarovillena",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PBTHC5VK');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBTHC5VK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SEOHead />
        <LenisProvider>
          {children}
        </LenisProvider>
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}

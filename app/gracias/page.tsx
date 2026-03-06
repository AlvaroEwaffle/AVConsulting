import type { Metadata } from 'next';
import GraciasGuard from '@/components/GraciasGuard';
import GraciasContent from '@/components/GraciasContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const metadata: Metadata = {
  title: 'Tu checklist de diagnóstico',
  description:
    'Los 27 puntos que tu web necesita para dejar de decorar y empezar a vender. Agenda un diagnóstico gratuito.',
  alternates: { canonical: `${siteUrl}/gracias` },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Tu checklist de diagnóstico — Álvaro Villena',
    description:
      'Los 27 puntos que tu web necesita para dejar de decorar y empezar a vender.',
    url: `${siteUrl}/gracias`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function GraciasPage() {
  return (
    <GraciasGuard>
      <GraciasContent />
    </GraciasGuard>
  );
}

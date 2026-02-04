import { MessageCircle } from 'lucide-react';

function buildWhatsAppUrl(phoneE164: string, message: string) {
  const base = `https://wa.me/${phoneE164.replace(/\D/g, '')}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export default function WhatsAppFloatButton() {
  const href = buildWhatsAppUrl(
    '56920115198',
    'Hola Álvaro, quiero evaluar el diseño de una web para mi negocio. ¿Podemos hablar?'
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed z-[9999] right-4 sm:right-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-3 text-white/90 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:border-accent/35 hover:text-white touch-manipulation sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] bottom-[calc(env(safe-area-inset-bottom)+5.5rem)]"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent">
        <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <span className="hidden sm:inline text-sm font-light tracking-wide">WhatsApp</span>
    </a>
  );
}


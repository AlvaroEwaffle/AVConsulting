'use client';

import { trackEvent } from './EmailCaptureForm';

const CALENDLY_URL = 'https://capu.villelab.com/schedule/reunion-descubrimiento-con-alvaro';

interface CalendlyButtonProps {
  text?: string;
  className?: string;
}

export default function CalendlyButton({
  text = 'Agendar conversación con Álvaro',
  className,
}: CalendlyButtonProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('calendar_click')}
      className={
        className ??
        'inline-block w-full sm:w-auto text-center py-4 px-8 bg-accent hover:bg-accent-hover text-white font-semibold text-lg rounded-lg transition-colors'
      }
    >
      {text}
    </a>
  );
}

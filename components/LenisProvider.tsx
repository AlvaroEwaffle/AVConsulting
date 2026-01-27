'use client';

/**
 * LenisProvider - Componente cliente que inicializa Lenis
 * 
 * Este componente se monta en el cliente y maneja el ciclo de vida de Lenis.
 * Se inicializa después del mount y se limpia al desmontar.
 */

import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar Lenis al montar el componente
    initLenis();

    // Limpiar al desmontar
    return () => {
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}

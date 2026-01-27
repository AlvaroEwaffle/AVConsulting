/**
 * Lenis Smooth Scroll - Singleton Pattern
 * 
 * Este módulo encapsula la creación de una única instancia de Lenis
 * para evitar múltiples inicializaciones y conflictos.
 * 
 * Respetamos prefers-reduced-motion: si el usuario tiene reducción de movimiento
 * activada, no inicializamos Lenis y usamos scroll nativo.
 */

import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

/**
 * Verifica si el usuario prefiere movimiento reducido
 */
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Inicializa Lenis si no existe una instancia y el usuario no tiene reducción de movimiento
 */
export function initLenis(): Lenis | null {
  // Solo en cliente
  if (typeof window === 'undefined') return null;

  // Si ya existe una instancia, retornarla
  if (lenisInstance) return lenisInstance;

  // Si el usuario prefiere movimiento reducido, no inicializar Lenis
  if (prefersReducedMotion()) {
    return null;
  }

  // Crear nueva instancia de Lenis
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Iniciar el loop de animación usando requestAnimationFrame
  function raf(time: number) {
    lenisInstance?.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return lenisInstance;
}

/**
 * Obtiene la instancia actual de Lenis (puede ser null)
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Destruye la instancia de Lenis y limpia recursos
 */
export function destroyLenis(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

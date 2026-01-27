# Landing Page - Sistema Deportivo

Landing page de alto impacto visual con secciones a pantalla completa, scroll suave con Lenis, scroll snap y animaciones con Framer Motion.

## 🚀 Stack Técnico

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animaciones)
- **Lenis** (smooth scroll)

## 📁 Estructura del Proyecto

```
newlanding/
├── app/
│   ├── layout.tsx          # Layout raíz con LenisProvider
│   ├── page.tsx            # Página principal que renderiza FullpageLanding
│   └── globals.css         # Estilos globales + scroll snap config
├── components/
│   ├── LenisProvider.tsx   # Provider que inicializa Lenis en cliente
│   ├── FullpageLanding.tsx # Componente principal que estructura las secciones
│   └── sections/
│       ├── HeroSection.tsx         # Sección hero principal
│       ├── BreakSection.tsx       # Sección de problema
│       ├── StanceSection.tsx      # Sección de verdad incómoda
│       ├── SystemFlowSection.tsx   # Sección que explica el sistema
│       ├── AuthorSection.tsx      # Sección de credibilidad/autor
│       └── CTASection.tsx         # Sección de llamado a la acción
└── lib/
    └── lenis.ts            # Módulo singleton para Lenis
```

## 🎯 Características Principales

### 1. Secciones 100vh con Scroll Snap

Cada sección ocupa la pantalla completa y se encaja al hacer scroll:

- **Configuración en `globals.css`**: `html { scroll-snap-type: y mandatory; }`
- **En cada sección**: `className="min-h-screen snap-start"`
- **Viewport dinámico**: Usa `100dvh` para mobile (incluye safe areas de iOS)

### 2. Lenis Smooth Scroll

**Ubicación de inicialización**: `components/LenisProvider.tsx`

- **Patrón Singleton**: Una única instancia de Lenis (módulo `lib/lenis.ts`)
- **Respeto a `prefers-reduced-motion`**: Si el usuario tiene reducción de movimiento activada, no se inicializa Lenis
- **Loop con `requestAnimationFrame`**: `lenis.raf(time)` se ejecuta en cada frame
- **Limpieza automática**: Se destruye al desmontar el componente

**Configuración de Lenis**:
- `duration: 1.2`
- `smoothWheel: true`
- `smoothTouch: false` (mejor performance en mobile)

### 3. Animaciones Framer Motion

**Patrón de animaciones**:

1. **Contenedor (variants)**:
   ```typescript
   {
     hidden: {},
     visible: {
       transition: {
         staggerChildren: 0.25,  // Elementos hijos se animan uno a uno
         delayChildren: 0.1,
       },
     },
   }
   ```

2. **Elementos hijos (variants)**:
   ```typescript
   {
     hidden: { opacity: 0, y: 40 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: "easeOut" },
     },
   }
   ```

3. **Uso en componentes**:
   - `initial="hidden"`
   - `whileInView="visible"`
   - `viewport={{ once: true, amount: 0.5 }}` (solo se anima la primera vez que entra en vista)

### 4. Responsive Mobile-First

- **Breakpoints Tailwind**: `sm:`, `md:`, `lg:`
- **Safe Areas iOS**: `padding-top: env(safe-area-inset-top)`
- **Viewport dinámico**: `100dvh` en lugar de `100vh` para mejor experiencia en mobile
- **Tipografía escalable**: Tamaños de texto responsivos en cada sección

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Notas de Implementación

### Scroll Snap + Lenis

El scroll snap funciona correctamente con Lenis porque:
- Lenis suaviza el scroll pero respeta el comportamiento nativo
- El `scroll-snap-type: y mandatory` en `html` funciona junto con `snap-start` en cada sección
- No es necesario envolver el contenido en contenedores adicionales

### Prefers-Reduced-Motion

El sistema respeta las preferencias del usuario:
- Si `prefers-reduced-motion: reduce`, Lenis no se inicializa
- Las animaciones de Framer Motion se reducen automáticamente (CSS en `globals.css`)
- El scroll nativo funciona normalmente

### Mobile Optimization

- **100dvh**: Viewport dinámico que ajusta la altura considerando la barra de navegación del navegador
- **Safe Areas**: Padding automático para evitar que el contenido quede oculto detrás de notches/barras
- **Touch Smooth**: Desactivado en Lenis para mejor performance en mobile

## 🎨 Personalización

### Colores

Los colores principales están definidos en `app/globals.css`:
- `--background: #0a0a0a` (fondo oscuro)
- `--foreground: #ededed` (texto)
- `--accent: #2175a1` (color de acento)

### Contenido

Cada sección es un componente independiente en `components/sections/`. Para modificar el contenido, edita directamente cada archivo.

### Animaciones

Las variantes de animación están definidas en cada componente. Puedes ajustar:
- `staggerChildren`: Tiempo entre animaciones de hijos
- `duration`: Duración de la animación
- `ease`: Tipo de easing

## 📦 Dependencias

- `next`: Framework React
- `react` / `react-dom`: Librería UI
- `framer-motion`: Animaciones
- `lenis`: Smooth scroll
- `tailwindcss`: Estilos utility-first

## ✅ Checklist de Calidad

- [x] Cada sección tiene una idea clara y defendible
- [x] Scroll snap funciona correctamente
- [x] Lenis se inicializa solo una vez (singleton)
- [x] Respeto a `prefers-reduced-motion`
- [x] Responsive mobile-first
- [x] Safe areas iOS implementadas
- [x] Animaciones fluidas y no excesivas
- [x] Código modular y fácil de escalar
- [x] TypeScript estricto
- [x] Documentación en comentarios

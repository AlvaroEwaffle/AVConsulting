# Resumen de Cambios Pendientes para Landing_Villelabs

## Estado Actual (Commit 9551aa4)
- ✅ Versión estable funcionando
- ✅ BaseLayout con branding de Álvaro Villena (personal brand)
- ✅ Header y Footer con branding personal
- ✅ Estructura de servicios funcionando
- ✅ InstaClientes service page incluido

## Cambios Necesarios para Convertir a VilleLabs

### 1. **BRANDING - Cambiar de Personal a Agencia**

#### 1.1 Header (`src/components/layout/Header.astro`)
- ❌ **Cambiar**: Logo de `AlvaroAvatar.png` → `icono.png`
- ❌ **Cambiar**: Texto "Álvaro Villena" → "VilleLabs"
- ❌ **Cambiar**: Color del texto a `text-brand-blue`
- ✅ **Mantener**: Estructura y navegación actual

#### 1.2 Footer (`src/components/layout/Footer.astro`)
- ❌ **Cambiar**: Avatar `AlvaroAvatar.png` → Logo `icono.png`
- ❌ **Cambiar**: "Álvaro Villena" → "VilleLabs"
- ❌ **Cambiar**: Descripción personal → Descripción de agencia
- ❌ **Cambiar**: Email `hola@alvarovillena.cl` → `hola@villelabs.cl`
- ❌ **Cambiar**: Copyright "Álvaro Villena" → "VilleLabs"
- ❌ **Actualizar**: Enlaces de servicios a secciones de VilleLabs

#### 1.3 Layout Principal (`src/layouts/BaseLayout.astro` o crear `Layout.astro`)
- ❌ **Cambiar**: Título por defecto a "VilleLabs – Desarrollo de Software y Chatbots con IA"
- ❌ **Cambiar**: Descripción a contenido de agencia
- ❌ **Cambiar**: Keywords a términos de agencia (software a medida, chatbots IA, etc.)
- ❌ **Cambiar**: URL canonical de `alvarovillena.cl` → `villelabs.cl`
- ❌ **Actualizar**: Schema.org JSON-LD de Person → Organization
- ❌ **Actualizar**: Meta tags Open Graph y Twitter Cards

### 2. **HOMEPAGE - Transformar de Personal a Agencia**

#### 2.1 Hero Section (`src/pages/index.astro`)
- ❌ **Reemplazar**: Profile Header Card (avatar personal) → Hero Section profesional
- ❌ **Cambiar**: Headline a "Software a medida y chatbots con IA que generan ingresos y reducen trabajo manual"
- ❌ **Agregar**: Trust badges ("+50 empresas confían", "Resultados en 2-4 semanas", "Sin burocracia")
- ❌ **Agregar**: Imagen hero (`LandingHeroCover.png`) en lugar de avatar
- ❌ **Agregar**: Métricas clave (2-4 semanas, 50+ empresas, 100% entregables)
- ❌ **Agregar**: Social proof con logos de clientes (Fidelidapp, Ewaffle, C4i UdeC)
- ❌ **Cambiar**: CTAs a "Agenda una llamada" y "Ver proyectos reales"

#### 2.2 Secciones Nuevas a Agregar
- ❌ **Agregar**: Sección "Pricing Transparency" (precios desde $2,500, $1,500, $3,000)
- ❌ **Agregar**: Sección "Qué hacemos" (5 servicios: Apps web, Chatbots, Automatización, Micro-SaaS, Infraestructura)
- ❌ **Agregar**: Sección "Por qué trabajar con nosotros" (4 beneficios)
- ❌ **Agregar**: Sección "Chatbots Inteligentes" (detallada)
- ❌ **Agregar**: Sección "Aplicaciones a medida" (detallada)
- ❌ **Agregar**: Sección "Cómo trabajamos" (4 pasos: Definir, Especificar, Construir, Iterar)

#### 2.3 Portfolio/Proyectos (`#proyectos`)
- ❌ **Agregar**: Sección completa de "Casos y proyectos reales"
- ❌ **Agregar**: Card de **Fidelidapp**
  - Link: https://www.fidelidapp.cl/
  - Descripción: "SaaS de fidelización con puntos y campañas omnicanal"
  - Métricas: "-40% trabajo manual", "Campañas más precisas"
  - Tags: Node.js, React, WhatsApp API
- ❌ **Agregar**: Card de **Ewaffle**
  - Link: https://ewaffle.cl/
  - Descripción: "Soluciones e-learning completas: LMS, cursos gamificados, chatbots IA"
  - Métricas: "+50 empresas confían", "400+ cursos transformados", "40% mejora en calidad"
  - Tags: LMS, SCORM, OpenAI RAG, Gamificación
- ❌ **Agregar**: Card de **C4i UdeC**
  - Link: https://c4i-udec.cl/
  - Descripción: "Centro tecnológico Industry 4.0 - Soluciones tecnológicas avanzadas"
  - Tags: Industry 4.0, Tecnología

#### 2.4 Testimonios
- ❌ **Mejorar**: Testimonios existentes con métricas específicas
- ❌ **Agregar**: Testimonios de Fidelidapp, Ewaffle, C4i UdeC con estrellas y métricas

#### 2.5 FAQ Section
- ❌ **Agregar**: Sección completa de FAQ (10 preguntas frecuentes)
- ❌ **Incluir**: Preguntas sobre precios, tiempos, tecnologías, soporte, etc.

#### 2.6 Secciones a Eliminar/Reemplazar
- ❌ **Eliminar**: Profile Header Card (avatar personal)
- ❌ **Eliminar**: Metrics Section personal (100+ proyectos, 50+ landing pages, etc.)
- ❌ **Eliminar**: Service Cards personales (Catálogo, Landing Pages, Asesoría, Gerencia)
- ✅ **Mantener**: Solo InstaClientes si aplica a VilleLabs

### 3. **CONTACT PAGE - Optimizar para Lead Qualification**

#### 3.1 Formulario de Contacto (`src/pages/contacto.astro`)
- ❌ **Agregar**: Campo "Nombre" y "Apellido" (separados)
- ❌ **Agregar**: Campo "Empresa" (requerido)
- ❌ **Agregar**: Campo "Cargo"
- ❌ **Agregar**: Dropdown "Servicio de interés" (requerido)
- ❌ **Agregar**: Campo "¿Cuál es tu mayor desafío o necesidad?" (requerido)
- ❌ **Agregar**: Campo "¿Cómo nos conociste?" (opcional)
- ❌ **Agregar**: Garantía de respuesta (24 horas)
- ✅ **Mantener**: Estructura actual del formulario

### 4. **SEO Y METADATOS**

#### 4.1 Meta Tags
- ❌ **Actualizar**: Todos los títulos a formato "VilleLabs – [Página]"
- ❌ **Actualizar**: Descripciones con keywords de agencia
- ❌ **Actualizar**: Keywords a términos de software/chatbots/automatización

#### 4.2 Structured Data (Schema.org)
- ❌ **Cambiar**: De `Person` → `Organization`
- ❌ **Actualizar**: Datos de organización (VilleLabs, URL, logo, etc.)
- ❌ **Agregar**: `WebSite` schema
- ❌ **Agregar**: `Service` schemas para cada servicio
- ❌ **Agregar**: `FAQPage` schema

### 5. **ESTILOS Y COMPONENTES**

#### 5.1 Layout
- ❌ **Decidir**: ¿Usar `BaseLayout.astro` o crear nuevo `Layout.astro`?
- ❌ **Verificar**: Que `Layout.astro` (si existe) tenga las rutas correctas de Header/Footer

#### 5.2 Estilos Globales
- ✅ **Mantener**: Estilos actuales funcionando
- ❌ **Verificar**: Que `text-brand-blue` y otros colores estén definidos
- ❌ **Verificar**: Que `.container` y `.btn` estén funcionando

### 6. **CONTENIDO ESPECÍFICO**

#### 6.1 Copywriting
- ❌ **Cambiar**: Todo el copy de primera persona ("Yo", "Mi") → Tercera persona ("Nosotros", "VilleLabs")
- ❌ **Actualizar**: Promesas y beneficios para contexto de agencia
- ❌ **Agregar**: Lenguaje orientado a B2B (empresas, founders, equipos)

#### 6.2 CTAs
- ❌ **Cambiar**: "Quiero mi llamada de exploración" → "Agenda una llamada gratuita"
- ❌ **Actualizar**: Links de Calendly si es necesario
- ❌ **Verificar**: Todos los CTAs apuntan a `/contacto` o Calendly

### 7. **TECNOLOGÍA Y CONFIGURACIÓN**

#### 7.1 Dependencias
- ✅ **Verificar**: `package.json` sin conflictos
- ✅ **Verificar**: `astro.config.mjs` usando `@tailwindcss/vite` (no `@astrojs/tailwind`)
- ❌ **Verificar**: Que el build funcione correctamente

#### 7.2 Assets
- ❌ **Verificar**: Que `LandingHeroCover.png` exista en `/assets/Covers/`
- ❌ **Verificar**: Que `icono.png` exista en `/assets/`
- ❌ **Agregar**: Logos de clientes si se van a mostrar (Fidelidapp, Ewaffle, C4i UdeC)

### 8. **PRIORIDADES DE IMPLEMENTACIÓN**

#### Alta Prioridad (Core)
1. ✅ Cambiar branding en Header y Footer
2. ✅ Transformar homepage hero section
3. ✅ Agregar sección de portfolio con 3 proyectos
4. ✅ Actualizar Layout con metadatos de VilleLabs

#### Media Prioridad (Mejoras)
5. ✅ Agregar secciones: Pricing, Qué hacemos, Por qué nosotros
6. ✅ Mejorar testimonios con métricas
7. ✅ Agregar FAQ section
8. ✅ Optimizar formulario de contacto

#### Baja Prioridad (Nice to have)
9. ✅ Agregar más secciones detalladas (Chatbots, Aplicaciones)
10. ✅ Mejorar SEO con más structured data

---

## Notas Importantes

- **NO eliminar** la página de InstaClientes si es relevante para VilleLabs
- **Mantener** la estructura de componentes que funciona
- **Probar** el build después de cada cambio importante
- **Verificar** que todas las rutas funcionen correctamente
- **Asegurar** que el sitio sea responsive y mobile-friendly


# Resumen de Cambios para Convertir a VilleLabs

## Estado Actual (Commit 2ac87fe - Versión Estable)
✅ **Build funcionando correctamente**
✅ **BaseLayout con branding de Álvaro Villena (personal)**
✅ **Estructura de servicios funcionando**
✅ **Página de InstaClientes incluida**

---

## Cambios Necesarios para VilleLabs (Agencia)

### 🔴 PRIORIDAD ALTA - Branding Core

#### 1. Header (`src/components/layout/Header.astro`)
**Cambios:**
- Logo: `AlvaroAvatar.png` → `icono.png`
- Texto: "Álvaro Villena" → "VilleLabs"
- Color: `text-gray-900` → `text-brand-blue`
- Mantener estructura y navegación

#### 2. Footer (`src/components/layout/Footer.astro`)
**Cambios:**
- Avatar: `AlvaroAvatar.png` → Logo `icono.png`
- Nombre: "Álvaro Villena" → "VilleLabs"
- Descripción: Personal → "Desarrollo de Software y Chatbots con IA"
- Email: `hola@alvarovillena.cl` → `hola@villelabs.cl`
- Copyright: "Álvaro Villena" → "VilleLabs"
- Enlaces de servicios: Actualizar a secciones de agencia

#### 3. Layout Principal (`src/layouts/BaseLayout.astro`)
**Cambios:**
- Título default: "VilleLabs – Desarrollo de Software y Chatbots con IA | Chile"
- Descripción: Contenido de agencia
- Keywords: Términos de software/chatbots/automatización
- URL canonical: `alvarovillena.cl` → `villelabs.cl`
- Schema.org: `Person` → `Organization`
- Meta tags: Open Graph y Twitter Cards actualizados

---

### 🟡 PRIORIDAD MEDIA - Homepage Transformation

#### 4. Hero Section (`src/pages/index.astro`)
**Reemplazar completamente:**
- ❌ Eliminar: Profile Header Card (avatar personal)
- ❌ Eliminar: Metrics Section personal
- ❌ Eliminar: Service Cards personales

**Agregar:**
- ✅ Hero Section profesional con:
  - Headline: "Software a medida y chatbots con IA que generan ingresos y reducen trabajo manual"
  - Trust badges: "+50 empresas confían", "Resultados en 2-4 semanas", "Sin burocracia"
  - Imagen hero: `LandingHeroCover.png`
  - Métricas: 2-4 semanas, 50+ empresas, 100% entregables
  - Social proof: Logos de clientes (Fidelidapp, Ewaffle, C4i UdeC)
  - CTAs: "Agenda una llamada" y "Ver proyectos reales"

#### 5. Nuevas Secciones a Agregar

**5.1 Pricing Transparency**
- Precios desde: $2,500 (apps), $1,500 (chatbots), $3,000 (MVP)
- CTA para cotización personalizada

**5.2 Qué Hacemos**
- 5 servicios: Apps web, Chatbots, Automatización, Micro-SaaS, Infraestructura
- Descripción breve de cada uno

**5.3 Por qué Trabajar con Nosotros**
- 4 beneficios: Enfoque humano+técnico, Construcción rápida, Acompañamiento, Desarrollo con propósito

**5.4 Chatbots Inteligentes (Sección detallada)**
- Casos de uso, integración, tecnología

**5.5 Aplicaciones a Medida (Sección detallada)**
- Qué consigues, stack tecnológico

**5.6 Cómo Trabajamos**
- 4 pasos: Definir, Especificar, Construir, Iterar

#### 6. Portfolio/Proyectos (`#proyectos`)
**Agregar sección completa con 3 proyectos:**

**6.1 Fidelidapp**
- Link: https://www.fidelidapp.cl/
- Descripción: "SaaS de fidelización con puntos y campañas omnicanal"
- Métricas: "-40% trabajo manual", "Campañas más precisas"
- Tags: Node.js, React, WhatsApp API
- Card con diseño profesional

**6.2 Ewaffle**
- Link: https://ewaffle.cl/
- Descripción: "Soluciones e-learning completas: LMS, cursos gamificados, chatbots IA"
- Métricas: "+50 empresas confían", "400+ cursos transformados", "40% mejora en calidad"
- Tags: LMS, SCORM, OpenAI RAG, Gamificación

**6.3 C4i UdeC**
- Link: https://c4i-udec.cl/
- Descripción: "Centro tecnológico Industry 4.0 - Soluciones tecnológicas avanzadas"
- Tags: Industry 4.0, Tecnología

#### 7. Testimonios Mejorados
- Agregar métricas específicas a testimonios existentes
- Testimonios de Fidelidapp, Ewaffle, C4i UdeC
- Estrellas y métricas visibles

#### 8. FAQ Section
- 10 preguntas frecuentes sobre servicios
- Preguntas sobre: precios, tiempos, tecnologías, soporte, procesos

---

### 🟢 PRIORIDAD BAJA - Optimizaciones

#### 9. Contact Page (`src/pages/contacto.astro`)
**Mejorar formulario:**
- Campos: Nombre, Apellido, Empresa (req), Cargo, Servicio de interés (req), Desafío (req), Cómo nos conociste
- Garantía de respuesta 24 horas

#### 10. SEO Avanzado
- Structured data completo (Organization, WebSite, Service, FAQPage)
- Meta tags optimizados
- Sitemap actualizado

---

## Notas Importantes

⚠️ **Este repositorio actualmente es para Álvaro Villena (personal brand)**
⚠️ **Necesitamos convertir TODO el contenido a VilleLabs (agency brand)**
⚠️ **Mantener la estructura de componentes que funciona**
⚠️ **Probar build después de cada cambio importante**

---

## Orden de Implementación Recomendado

1. **Fase 1 - Branding Core** (Header, Footer, Layout)
2. **Fase 2 - Homepage Hero** (Reemplazar profile card)
3. **Fase 3 - Portfolio** (Agregar 3 proyectos)
4. **Fase 4 - Nuevas Secciones** (Pricing, Qué hacemos, etc.)
5. **Fase 5 - Optimizaciones** (Testimonios, FAQ, Contacto)


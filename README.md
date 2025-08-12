# Álvaro Villena - Innovation Coach & Digital Product Builder

Sitio web profesional para Álvaro Villena, coach de innovación y constructor de productos digitales. Transforma ideas digitales en productos listos para vender.

## 🚀 Características Principales

### ✨ **Efecto Fondo Matrix Animado**
- Fondo interactivo con partículas animadas
- Efectos de luz que pasan por las texturas
- Cambios de color en tiempo real
- Compatible con todos los dispositivos

### 🎯 **Hub de Servicios Completo**
- **E-book Interactivo** - $19 USD
- **Landing Pages de Alto Impacto** - $199 USD  
- **Asesoría Shape Up** - $499 USD
- **Gerencia Fraccional de Innovación** - Desde $1,200 USD/mes

### 📱 **Diseño Responsive y Moderno**
- Interfaz optimizada para móvil y desktop
- Navegación intuitiva con header fijo
- Componentes reutilizables y escalables
- Animaciones suaves y transiciones elegantes

### 🔧 **Funcionalidades Técnicas**
- Sistema de navegación completo
- Páginas internas detalladas para cada servicio
- Sistema de testimonios con filtros
- Formularios de contacto funcionales
- Métricas y logros destacados

## 🏗️ Estructura del Proyecto

```
alvarovillena.cl/
├── src/
│   ├── components/
│   │   ├── common/           # Componentes reutilizables
│   │   │   ├── MatrixBackground.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── TestimonialCard.astro
│   │   │   ├── MetricsBar.astro
│   │   │   └── CTAButton.astro
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   └── services/         # Componentes específicos de servicios
│   │       ├── ServiceCard.astro
│   │       └── ProcessSteps.astro
│   ├── layouts/              # Layouts de página
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── ServiceLayout.astro
│   └── pages/                # Páginas del sitio
│       ├── index.astro       # Página principal (Hub de servicios)
│       ├── servicios/        # Páginas de servicios
│       │   ├── index.astro
│       │   ├── ebook.astro
│       │   ├── landing-pages.astro
│       │   ├── asesoria.astro
│       │   └── gerencia.astro
│       ├── testimonios.astro # Página de testimonios
│       └── contacto.astro    # Página de contacto
├── public/                   # Assets estáticos
│   └── assets/
└── tailwind.config.cjs       # Configuración de Tailwind CSS
```

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno y rápido
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - Tipado estático para JavaScript
- **Canvas API** - Para efectos de fondo animados
- **Responsive Design** - Mobile-first approach

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]
cd alvarovillena.cl

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Previsualizar build de producción
- `npm run astro` - Comandos de Astro CLI

## 📱 Páginas Implementadas

### 🏠 **Página Principal (/)**
- Hero section con avatar y presentación
- Hub de servicios con 4 opciones principales
- Métricas y logros destacados
- CTAs estratégicos

### 📚 **E-book Interactivo (/servicios/ebook)**
- Descripción detallada del servicio
- Proceso de 3 pasos
- Testimonios específicos
- Precio y garantías

### 🚀 **Landing Pages (/servicios/landing-pages)**
- Beneficios y características
- Proceso de implementación
- Casos de éxito
- Garantía de conversión

### 🎯 **Asesoría Shape Up (/servicios/asesoria)**
- Explicación de la metodología
- Beneficios y resultados
- Proceso de implementación
- Testimonios de transformación

### 🏢 **Gerencia Fraccional (/servicios/gerencia)**
- Modelos de engagement
- Servicios incluidos
- Casos de éxito empresariales
- Precios flexibles

### ⭐ **Testimonios (/testimonios)**
- Filtros por servicio
- Casos de éxito detallados
- Métricas de satisfacción
- Historias de transformación

### 💬 **Contacto (/contacto)**
- Múltiples formas de contacto
- Formulario funcional
- Integración con Calendly
- Información de ubicación

## 🎨 Componentes Principales

### **MatrixBackground**
- Fondo animado tipo matrix
- Partículas con efectos de luz
- Cambios de color dinámicos
- Optimizado para rendimiento

### **ServiceCard**
- Tarjetas de servicio interactivas
- Precios y promesas destacadas
- Botones de CTA personalizados
- Efectos hover elegantes

### **HeroSection**
- Secciones hero reutilizables
- Imágenes con efectos flotantes
- CTAs personalizables
- Layout responsive

### **TestimonialCard**
- Tarjetas de testimonio
- Sistema de rating
- Información del cliente
- Filtros por servicio

## 🔧 Configuración

### Variables de Entorno
```env
# Configuración de Calendly
CALENDLY_URL=https://calendly.com/alvarovillena/llamada-exploracion

# Configuración de WhatsApp
WHATSAPP_NUMBER=+56912345678

# Configuración de Email
CONTACT_EMAIL=hola@alvarovillena.cl
```

### Personalización
- Colores principales en `tailwind.config.cjs`
- Imágenes en `public/assets/`
- Contenido en archivos `.astro`
- Estilos en `src/styles/global.css`

## 📊 Métricas y Analytics

### Métricas Implementadas
- Proyectos lanzados: 21
- Landing pages entregadas: 12
- Clientes asesorados: 30
- Programas Shape Up completados: 12
- Empresas con gerencia fraccional: 30

### Tracking
- Google Analytics (configurable)
- Eventos de conversión
- Métricas de engagement
- A/B testing preparado

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor Estático
El proyecto genera archivos estáticos que se pueden desplegar en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier servidor web estático

### Optimizaciones
- Imágenes optimizadas automáticamente
- CSS y JS minificados
- Lazy loading de componentes
- Cache headers optimizados

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Álvaro Villena** - [hola@alvarovillena.cl](mailto:hola@alvarovillena.cl)
- **WhatsApp** - [+56 9 1234 5678](https://wa.me/+56912345678)
- **LinkedIn** - [alvarovillena](https://www.linkedin.com/in/alvarovillena/)
- **Calendly** - [Agendar llamada gratuita](https://calendly.com/alvarovillena/llamada-exploracion)

---

**Transforma ideas digitales en productos listos para vender. Desde la estrategia hasta la ejecución, solo cuando lo necesitas.** 🚀


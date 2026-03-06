# Secuencia de Nurture — alvarovillena.cl

**Plataforma:** Brevo (ex-Sendinblue)
**Trigger:** Descarga de "Guia de Diagnostico Digital: 27 puntos" desde alvarovillena.cl
**Objetivo:** Llevar al lead a agendar una llamada diagnostica gratuita de 30 minutos
**Calendly:** https://calendar.app.google/Mqc1Gz3jqp4ZNwPD8
**Remitente:** Alvaro Villena <alvaro@villelab.com>
**Reply-to:** alvaro@villelab.com
**Lista Brevo:** `leads-alvarovillena-guia`
**Tag inicial:** `guia-descargada`

---

## Configuracion general en Brevo

1. Crear un **Automation Workflow** con trigger: "Contact added to list `leads-alvarovillena-guia`"
2. Cada email usa los delays indicados (Day 0, +2, +4, +7, +10)
3. Activar tracking de aperturas y clics en todos los emails
4. Agregar tags automaticos basados en engagement (ver seccion "Post-secuencia" al final)
5. Formato: HTML simple, sin plantilla pesada. Fondo blanco, texto negro, un solo boton de color. Que parezca un email personal, no un newsletter corporativo
6. Ancho maximo del email: 600px
7. Tipografia: sistema (Arial, Helvetica) a 16px minimo, line-height 1.6
8. Boton CTA: fondo `#E85D3A`, texto blanco, bordes redondeados, padding generoso

---

## Email 1: "Aca esta tu guia (y una confesion)"

| Campo | Valor |
|---|---|
| **Numero** | 1 de 5 |
| **Envio** | Day 0 — Inmediato tras suscripcion |
| **Asunto** | Aca esta tu guia (y una confesion) |
| **Preview** | La guia esta lista. Pero antes quiero contarte algo que me paso. |
| **Tag Brevo** | `email-1-enviado` |

### Cuerpo

Hola {{contact.FIRSTNAME}},

Tu guia esta lista. Aca abajo esta el link para descargarla.

Pero antes de que la abras, quiero contarte algo.

---

Hace unos anos, al principio de mi carrera, yo era parte del problema.

Hacia webs preciosas. Animaciones suaves, tipografias importadas, paletas de colores perfectas. Mis clientes estaban encantados el dia de la entrega.

Y despues... silencio.

Un dia me llamo un cliente. Dueno de una empresa mediana, buen producto, buen equipo. Me dijo algo que se me quedo grabado:

**"Alvaro, mi web es preciosa. Y no vendo nada."**

Tenia razon. Su web era un cuadro colgado en una galeria donde nadie entraba. Bonita, moderna, completamente inutil para generar clientes.

Ese dia cambie la forma en que trabajo.

Deje de construir webs bonitas y empece a construir sistemas de venta. Webs que tienen un objetivo claro, que capturan datos, que miden, que convierten visitantes en clientes.

La guia que vas a descargar resume los 27 puntos que separan una web decorativa de una web que vende. Son los mismos puntos que reviso en cada proyecto.

---

Manana te cuento que paso despues con ese cliente. Y por que su historia probablemente se parece mucho a la tuya.

Alvaro

**PD:** La guia se lee en 15 minutos. Pero te va a hacer pensar por horas.

### CTA

| Texto del boton | URL |
|---|---|
| Descargar la guia | https://alvarovillena.cl/guia-diagnostico-digital.pdf |

### Notas Brevo

- Este email debe enviarse **inmediatamente** tras la suscripcion (delay: 0 minutos)
- Usar variable de personalizacion `{{contact.FIRSTNAME}}` — configurar fallback: "Hola" (sin nombre)
- Este es el email mas importante de la secuencia. Si no se abre, los demas no importan
- Asunto alternativo para A/B test: "Tu guia + algo que nunca le cuento a nadie"
- Agregar tag `email-1-abierto` si se abre, `guia-descargada-clic` si hace clic en el PDF

---

## Email 2: "Lo que nadie te dice sobre tu web"

| Campo | Valor |
|---|---|
| **Numero** | 2 de 5 |
| **Envio** | Day +2 (48 horas despues del Email 1) |
| **Asunto** | Lo que nadie te dice sobre tu web |
| **Preview** | Hay dos tipos de webs. La mayoria son del tipo equivocado. |
| **Tag Brevo** | `email-2-enviado` |

### Cuerpo

{{contact.FIRSTNAME}},

Hay una distincion que nadie te explica cuando contratas una web.

La diferencia entre un **flyer digital** y un **sistema**.

---

Un flyer digital es lo que tiene el 90% de los negocios.

Se ve bien. Tiene fotos bonitas, colores de marca, un menu con 7 secciones. Tal vez hasta tiene animaciones.

Pero no captura datos de nadie. No mide nada. No tiene un objetivo claro. No hace seguimiento. Es como repartir volantes en la calle y cruzar los dedos.

Un sistema es otra cosa.

Un sistema tiene un flujo claro: el visitante llega, entiende que haces, ve por que deberia importarle, y tiene UNA accion concreta que tomar. El sistema captura sus datos. Mide que funciona y que no. Y hace seguimiento automatico.

La diferencia no es de presupuesto. He visto flyers digitales de $15.000 dolares y sistemas que costaron $2.000.

La diferencia es de intencion. De preguntar "que tiene que HACER esta web" antes de preguntar "como tiene que VERSE".

---

En la pagina 3 de la guia que te mande, hay una tabla que muestra exactamente los puntos que separan un flyer de un sistema.

Revisa la pagina 3. Y si tu web se parece mas al flyer... te tengo noticias.

No eres el unico. Y tiene solucion.

Alvaro

### CTA

| Texto del boton | URL |
|---|---|
| Revisar la guia | https://alvarovillena.cl/guia-diagnostico-digital.pdf |

### Notas Brevo

- Delay: 48 horas despues del Email 1
- Este email educa. No vende. El objetivo es que el lead internalice el concepto "flyer vs sistema"
- Si no abrio el Email 1, considerar reenviar Email 1 con asunto alternativo antes de enviar este
- Agregar tag `email-2-abierto` si se abre

---

## Email 3: "Esta cerveceria triplico sus ventas online"

| Campo | Valor |
|---|---|
| **Numero** | 3 de 5 |
| **Envio** | Day +4 (96 horas despues del Email 1) |
| **Asunto** | Esta cerveceria triplico sus ventas online |
| **Preview** | Tenian fotos profesionales, buen producto y cero ventas. Esto fue lo que cambio. |
| **Tag Brevo** | `email-3-enviado` |

### Cuerpo

{{contact.FIRSTNAME}},

Te quiero contar la historia de Cerveceria Puchacay.

---

Puchacay es una cerveceria artesanal con un producto excelente. Buenas recetas, buena marca, fotos profesionales.

Su web era impecable. Disenada por una agencia cara. Colores perfectos, galeria de productos con zoom, la historia del fundador, un mapa con los puntos de venta.

El problema: no vendian nada online.

Tenian trafico. La gente llegaba. Miraba. Y se iba.

Cero leads. Cero ventas por la web. Todo se seguia moviendo por Instagram y el boca a boca.

Cuando me contactaron, lo primero que hice fue preguntarles algo que nadie les habia preguntado:

**"Que quieren que haga un visitante cuando entra a su web?"**

No tenian respuesta clara. Y ese era el problema.

---

Lo que hicimos no fue hacer la web "mas bonita". Ya era bonita.

Desarmamos todo y lo reconstruimos como un sistema de conversion.

Un flujo claro: llegas, ves el producto estrella, entiendes por que es distinto, y tienes UN boton que te lleva a comprar o a dejar tus datos para ofertas.

Agregamos captura de emails. Medicion en cada paso. Seguimiento automatico para los que dejaban el carrito a medias.

El resultado: las ventas online se duplicaron en 3 meses. Y siguieron creciendo.

No fue magia. Fue dejar de tratar la web como una vitrina y empezar a tratarla como una maquina de ventas.

---

Si tu web se parece a la version anterior de Puchacay — bonita pero sin resultados — podemos conversar.

Hago 4 diagnosticos por semana. Son gratis. 30 minutos. Revisamos tu web juntos en pantalla y te muestro que esta frenando tus resultados.

Alvaro

### CTA

| Texto del boton | URL |
|---|---|
| Agendar diagnostico gratuito | https://calendar.app.google/Mqc1Gz3jqp4ZNwPD8 |

### Notas Brevo

- Delay: 96 horas despues del Email 1 (4 dias)
- **Primera mencion del Calendly.** Este es el email pivot de la secuencia
- Agregar tag `email-3-abierto` si se abre
- Agregar tag `calendly-clic` si hace clic en el boton de Calendly
- Si hace clic en Calendly, marcar como `lead-caliente` en Brevo

---

## Email 4: "El error de $10.000 que cometen todos"

| Campo | Valor |
|---|---|
| **Numero** | 4 de 5 |
| **Envio** | Day +7 (7 dias despues del Email 1) |
| **Asunto** | El error de $10.000 que cometen todos |
| **Preview** | Gastaron una fortuna en su web. No generaba ni un lead. |
| **Tag Brevo** | `email-4-enviado` |

### Cuerpo

{{contact.FIRSTNAME}},

Voy a contarte algo que veo todo el tiempo.

---

Una empresa decide que necesita una web nueva. Contrata a una agencia. Paga $5.000, $8.000, a veces $10.000 o mas.

La agencia entrega algo espectacular. Animaciones cinematograficas, video de fondo en el hero, tipografias custom, menu hamburguesa con transicion de 0.8 segundos.

El cliente esta feliz. Lo muestra en LinkedIn. Lo manda al grupo de WhatsApp de la familia.

Pasan 3 meses. Cero leads. Cero formularios completados. Cero llamadas generadas por la web.

Y entonces me llaman a mi.

---

El problema nunca fue el diseno. El diseno era impecable.

El problema fue que nadie pregunto **"que tiene que HACER esta web"** antes de construirla.

No habia un CTA claro. No habia captura de datos. No habia medicion. No habia seguimiento. No habia un flujo que llevara al visitante de "interesado" a "cliente".

Pagaron por arte. No por una herramienta.

He visto esto mas de 20 veces. Empresas que gastan fortunas en webs que nadie usa para lo que importa: generar clientes.

---

Y lo peor es que la solucion no requiere empezar de cero. A veces son 3 o 4 cambios estrategicos los que transforman una web decorativa en un sistema que vende.

Si quieres saber cuales son esos cambios para TU web, agenda una conversacion.

30 minutos. Sin compromiso. Revisamos tu web juntos y te doy un plan concreto.

Alvaro

### CTA

| Texto del boton | URL |
|---|---|
| Quiero revisar mi web | https://calendar.app.google/Mqc1Gz3jqp4ZNwPD8 |

### Notas Brevo

- Delay: 7 dias despues del Email 1
- Este email ataca la objecion "pero yo ya gaste mucho en mi web"
- Agregar tag `email-4-abierto` si se abre
- Agregar tag `calendly-clic` si hace clic en el boton
- Si el lead ya hizo clic en Calendly en el Email 3 y agendo, **excluirlo** de este email (condicion en el workflow: si tag `llamada-agendada` existe, saltar)

---

## Email 5: "Ultima cosa (y es importante)"

| Campo | Valor |
|---|---|
| **Numero** | 5 de 5 |
| **Envio** | Day +10 (10 dias despues del Email 1) |
| **Asunto** | Ultima cosa (y es importante) |
| **Preview** | No te voy a escribir mas sobre esto. Pero quiero dejarte algo claro. |
| **Tag Brevo** | `email-5-enviado` |

### Cuerpo

{{contact.FIRSTNAME}},

Este es el ultimo email de esta serie. Despues de este, no te voy a insistir mas con lo mismo.

Pero antes quiero ser directo contigo.

---

**Lo que hago:**

Transformo webs decorativas en sistemas de venta. No hago webs "bonitas". Hago webs que generan leads, que miden, que convierten visitantes en clientes.

Llevo mas de 50 proyectos. Estoy en el Top 3% de Toptal (la red de freelancers mas selectiva del mundo — aceptan a 3 de cada 100 que aplican). He trabajado con startups de 3 personas y con empresas que facturan millones.

**Para quien es:**

Para negocios que ya tienen una web pero que no les esta generando clientes. Tienes trafico pero no conversiones. Sabes que algo esta mal pero no sabes por donde empezar.

No es para ti si no tienes web todavia, o si tu web tiene menos de 6 meses (dale tiempo).

**Que pasa en la llamada:**

30 minutos. Compartimos pantalla. Revisamos tu web juntos punto por punto. Te muestro los 3 problemas mas criticos que estan frenando tus resultados. Y te doy un plan de accion concreto.

Sin compromiso. Sin pitch de venta durante la llamada. Si al final quieres que te ayude a implementarlo, hablamos. Si no, te llevas el diagnostico gratis y listo.

---

Si esto resuena, agenda. Si no, seguimos por aca.

A partir de la proxima semana empiezo a mandarte un email semanal con una idea o historia util sobre webs, conversion y marketing digital. Se llama **La Nota Semanal de Alvaro**. Corto, practico, sin relleno.

Si en algun momento no te interesa, te das de baja con un clic. Sin dramas.

Alvaro

**PD:** Solo hago 4 diagnosticos por semana. Si esta semana ya se llenaron, el link te va a mostrar la proxima fecha disponible. No es escasez inventada — es mi capacidad real.

### CTA

| Texto del boton | URL |
|---|---|
| Agendar diagnostico gratuito | https://calendar.app.google/Mqc1Gz3jqp4ZNwPD8 |

### Notas Brevo

- Delay: 10 dias despues del Email 1
- Este es el email de cierre. Tono directo pero sin presion
- Agregar tag `email-5-abierto` si se abre
- Agregar tag `calendly-clic` si hace clic en el boton
- Si el lead ya agendo llamada (tag `llamada-agendada`), **excluirlo** de este email
- Despues de este email, mover al lead a la lista `nota-semanal-alvaro` para la secuencia semanal

---

## Post-secuencia

### Transicion a "La Nota Semanal de Alvaro"

Despues del Email 5, todos los leads (excepto los que se dieron de baja) entran a la lista `nota-semanal-alvaro`.

**Formato:** Un email semanal, enviado los martes a las 10:00 AM (hora Chile). Una historia o insight sobre webs, conversion o marketing digital. Corto (300-500 palabras). Un CTA suave al final, rotando entre:
- Agendar diagnostico (Calendly)
- Responder al email con una pregunta
- Compartir con alguien que necesite esto

**Tono:** Igual que la secuencia — personal, directo, con historias. No un newsletter corporativo.

### Segmentacion por engagement

Configurar los siguientes segmentos automaticos en Brevo basados en tags:

| Segmento | Condicion | Accion |
|---|---|---|
| **Lead caliente** | Clic en Calendly en cualquier email | Tag `lead-caliente`. Prioridad en CRM. Si no agendo en 48h, enviar email recordatorio manual |
| **Lead tibio** | Abrio 3+ emails pero no hizo clic en Calendly | Tag `lead-tibio`. Mantener en Nota Semanal con frecuencia normal |
| **Lead frio** | No abrio ningun email despues del Email 3 | Tag `lead-frio`. Reducir frecuencia a 1 email cada 2 semanas. Despues de 30 dias sin apertura, mover a lista `inactivos` |
| **Convertido** | Agendo llamada (tag `llamada-agendada`) | Excluir de la secuencia de nurture. Mover a lista `pipeline-activo`. Seguimiento manual |

### Tags completos para el workflow

```
guia-descargada          → Al suscribirse
email-1-enviado          → Al enviar Email 1
email-1-abierto          → Al abrir Email 1
guia-descargada-clic     → Al hacer clic en link de la guia
email-2-enviado          → Al enviar Email 2
email-2-abierto          → Al abrir Email 2
email-3-enviado          → Al enviar Email 3
email-3-abierto          → Al abrir Email 3
calendly-clic            → Al hacer clic en cualquier link de Calendly
email-4-enviado          → Al enviar Email 4
email-4-abierto          → Al abrir Email 4
email-5-enviado          → Al enviar Email 5
email-5-abierto          → Al abrir Email 5
lead-caliente            → Clic en Calendly
lead-tibio               → 3+ aperturas, sin clic en Calendly
lead-frio                → Sin aperturas despues de Email 3
llamada-agendada         → Confirmo llamada (manual o via webhook de Calendly)
nota-semanal-activo      → Recibiendo La Nota Semanal
inactivos                → Sin engagement por 30+ dias
```

### Metricas a monitorear

| Metrica | Objetivo |
|---|---|
| Tasa de apertura Email 1 | > 60% (es el email de entrega, deberia ser alta) |
| Tasa de apertura Emails 2-5 | > 35% |
| Tasa de clic en Calendly (Email 3-5) | > 5% |
| Conversiones a llamada agendada | > 3% del total de leads |
| Tasa de baja de la secuencia | < 2% |

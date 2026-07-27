# Design System & Decisiones de Diseño (MVP)

**Proyecto**: Portafolio Profesional de Valeria — UX/Product Designer  
**Versión**: 2.0 (Neo-Brutalist Pop Editorial)  
**Fecha**: Julio 2026  

---

## 1. Resumen Ejecutivo y Propósito

El MVP de **Valeria - Product Designer Portfolio** es una plataforma web interactiva diseñada para presentar de forma impactante, distintiva y memora la trayectoria, proyectos, habilidades y metodología de trabajo de Valeria. 

El sitio adopta un estilo de diseño **Neo-Brutalist & Pop Editorial**, inspirado en interfaces retro OS / ventanas flotantes con bordes negros sólidos (2px), sombras desplazadas con borde duro (*hard offset drop shadows*), badges tipo píldora (*pills*) de alta saturación (amarillo, rosa, cian, menta) y patrones de fondo de puntos radiales (*radial dot grid*).

---



## 2. Lenguaje Visual y Sistema de Diseño



### 2.1 Estilo Estructural: Neo-Brutalist Pop Window UI

- **Ventanas Flotantes Retro (**`.neo-window`**)**: Tarjetas encuadradas con barra superior de ventana retro que incluye botones tipo semáforo (`● ● ●`), títulos en versalitas/código mono y etiqueta de versión/extensión.
- **Bordes y Sombras Desplazadas (**`.bento-card` **&** `.neo-window`**)**:
  - Bordes negros gruesos (`border-1 border-black` en modo claro, `border-1 border-white` en modo oscuro).
- **Micro-interacciones**:
  - Botones primarios (`.neo-btn-primary`) en color amarillo vibrante (`#fef08a`) con sombra desplazada negra que responde al hover con mayor relieve (`hover:shadow-[6px_6px_0px_0px_#000]`) y traslación (`hover:-translate-x-0.5 hover:-translate-y-0.5`).
  - Badges o Píldoras (`.neo-pill`) con fondo de tonos Pop pastel/vibrante, borde negro de 1.5px y sombras de 2px.



### 2.2 Paleta de Colores Pop Editorial

- **Fondo General**:
  - Light Mode: `#f7f5f0` con patrón de puntos radiales `radial-gradient(#000 1px, transparent 1px)` a 12px x 12px.
  - Dark Mode: `#0f1117` con patrón de puntos radiales `radial-gradient(#ffffff 1px, transparent 1px)`.
- **Colores de Acento Pop (Pills & Cards)**:
  - **Amarillo Pop (**`#fef08a`**)**: Color primario para botones destacados, etiquetas de introducción y encabezados.
  - **Rosa Pop (**`#fbcfe8`**)**: Utilizado para tarjetas de desafíos, formación y avisos destacados.
  - **Cian Pop (**`#bae6fd`**)**: Utilizado para propuestas de solución, especialidades y cajas de éxito.
  - **Menta Pop (**`#a7f3d0`**)**: Utilizado para métricas KPI, badges de estado y metodologías.
  - **Lila Pop (**`#e9d5ff`**)**: Utilizado para tags complementarios.
- **Neutros y Tipografía**:
  - Textos Principales: `text-black` (alta opacidad) / `text-white`
  - Textos Secundarios: `text-slate-800` / `text-slate-200`
  - Tarjetas de Ventana: `#ffffff` / `slate-900`



### 2.3 Tipografía

- **Display / Titulares**: `Outfit` (`font-display`, sans-serif con pesos 800–900 extra-black) para lograr un carácter distintivo y contemporáneo.
- **Cuerpo de Texto / UI**: `Plus Jakarta Sans` (`font-sans`, pesos 500–700 font-bold) para optimizar la legibilidad.
- **Métricas / Código / Window Bars**: `Fira Code` (`font-mono`) para títulos de ventanas, etiquetas de archivos, versiones y contadores numéricos.

---



## 3. Arquitectura de Información y Componentes

La aplicación está organizada en 4 vistas principales gestionadas mediante navegación fluida single-page:

### 3.1 Header (Navegación Global Window)

- **Branding Bar**: Título distintivo "Valeria_Portfolio" con marco de ventana retro y controles de color.
- **Navegación Desktop/Mobile**: Botones píldora con sombras sólidas e indicador de pestaña activa en color amarillo Pop.
- **Controles**: Switcher de modo claro/oscuro (Dark/Light mode) con persitencia en el DOM HTML y avatar miniatura encuadrado.



### 3.2 Pestaña "Work" (Trabajos Destacados)

- **Layout**: Disposición asimétrica Bento Grid Neo-Brutalista.
  - **Columna Izquierda (Sidebar)**: Saludo estilo ventana Valeria_Portfolio, biografía resumida, Badges de *Core Skills* en píldoras multicolor e invitación directa a contacto.
  - **Columna Derecha (Proyectos)**: Tarjetas de proyectos estilizadas como ventanas OS con filtros por categoría (*Fintech*, *Health*, *E-Commerce*).
- **Modal de Estudio de Caso**: Ventana OS emergente con marco de ventana `Case_Study.Window` que incluye:
  - Rol ejercido con pill amarilla.
  - Captura principal con borde negro.
  - **Resultados Medibles (KPIs)** en tarjeta menta `#a7f3d0` con métricas destacadas.
  - **El Desafío / Problema** en tarjeta rosa `#fbcfe8`.
  - **Metodología y Proceso de Diseño** en tarjetas con numeración en píldora.
  - **La Solución / Propuesta de Valor** en tarjeta cian `#bae6fd`.



### 3.3 Pestaña "About" (Sobre Mí)

- **Perfil Extendido**: Foto de perfil en ventana retro `VALERIA_AVATAR.PNG`, bio en ventana `ABOUT_VALERIA.TXT` y localización geográfica.
- **Filosofía de Diseño**: Caja rosa con cita de la postura profesional de Valeria.
- **Valores Profesionales**: Tarjetas Neo-Brutalistas en colores Pop (*Amarillo, Rosa, Cian*).
- **Listas de Capacidades**: Ventanas `METODOLOGIAS.LIST` y `TOOLS_STACK.CONFIG` con items marcados con checkboxes esmeraldas e índigos.



### 3.4 Pestaña "Resume" (Resumen Profesional / CV)

- **Cronología Laboral**: Ventana `EXPERIENCIA_LABORAL.LOG` con línea de tiempo visual con bordes sólidos, etiquetas de años en píldoras menta e indicadores de estado.
- **Formación Académica**: Ventana `FORMACION.EDU` con tarjetas rosa `#fbcfe8`.
- **Matriz de Fortalezas**: Ventana `SKILL_MATRIX.SYS` con barras de progreso delimitadas en negro con relleno amarillo Pop.
- **Acciones**: Botón de impresión/exportación optimizado (`window.print()`).



### 3.5 Pestaña "Contact" (Contacto & Agendamiento)

- **Formulario Directo**: Ventana `SEND_MESSAGE.EXE` con campos de entrada con bordes negros sólidos, foco en amarillo Pop y estado de mensaje enviado en tarjeta menta.
- **Widget de Agendamiento (15 min Coffee Call)**: Ventana `CALENDAR_BOOKING.SYS` con selector de fechas en tarjetas emergentes e indicador de reunión confirmada en tarjeta cian `#bae6fd`.

---



## 4. Principios de Experiencia de Usuario (UX)

1. **Estética Expresiva y memorable**: El estilo Neo-Brutalist Pop transmite personalidad, confianza y un alto grado de atención al detalle visual.
2. **Jerarquía Tipográfica y Alto Contraste**: Los bordes negros de 2px y textos en negro profundo aseguran lectura óptima y alta accesibilidad WCAG AA.
3. **Transiciones Fluídas**: Animaciones con `motion/react` (`AnimatePresence`) para evitar cambios bruscos al alternar entre pestañas.
4. **Diseño Adaptativo**: Experiencia optimizada tanto para escritorio como para pantallas móviles.

---



## 5. Stack Tecnológico

- **Framework Frontend**: React 18 con Vite.
- **Lenguaje**: TypeScript.
- **Estilos**: Tailwind CSS v4 con variables y utilidades Neo-Brutalistas personalizadas en `@theme` y `@layer`.
- **Animaciones**: `motion` (`motion/react`).
- **Iconografía**: `lucide-react`.


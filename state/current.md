# Estado actual — 2026-07-29

## Hecho
- [x] MVP SPA: Work / About / Resume / Contact
- [x] Datos mock + 3 case studies + modal + carrusel
- [x] Design system neo (sin sombras)
- [x] Booking: calendario mensual + slots 10–16
- [x] Sistema de memoria persistente
- [x] **Ruta `/demo-day`** presentación Interface School (6 slides, teclado ←→)
- [x] Dark mode eliminado → toggle **ES/EN** (`src/i18n/`)

## Pendiente
- [ ] Sincronizar `design.md` raíz con “sin sombras”
- [ ] Node/npm en PATH del usuario
- [ ] Agenda calendario real + descarga CV
- [ ] QA mobile checklist S7
- [ ] Traducir `/demo-day` si se presenta en inglés

## Blockers
- Entorno: Node vía Cursor helpers si npm no está en PATH (`skills/dev-server.md`).

## Archivos calientes
`src/index.css` · `src/components/Contact.tsx` · `src/pages/DemoDay.tsx` · `src/components/*`

## Nota UI (2026-07-31)
Primario de marca: `#8F9DE2` (antes amarillo). Form Contact: focus neutro + submit negro.
Imágenes en `public/images/` (`/images/...`) — fix prod (G5).

## Nota case study Banco (2026-08-03)
Narrativa Behance puntos 1–5 vía `caseStudySections` en `src/data.ts` (+ EN en `content.ts`). Render en `Projects.tsx`.

## Nota Shuttle Behance (2026-08-03 → 2026-08-05)
11 slides storytelling en `src/data/shuttleCaseStudy.ts` (+ EN). Compactado para lectura senior.

## Nota Banco skeleton senior (2026-08-05)
6 secciones: problema → users → rol → decisiones → UI → impacto. Pendiente: más pantallas + 1 métrica real.

## Nota Soriana case study senior (2026-08-05)
Reescrito desde Behance (cards · tracking · combos). 8 slides en `src/data/sorianaCaseStudy.ts` (+ EN). Quitado copy Lumina / métricas inventadas. Métrica citada: +10% CSAT.

## Nota Viva Aerobus white label (2026-08-07)
Nuevo proyecto Traveltech desde Behance. 6 secciones en `src/data/vivaCaseStudy.ts` (+ EN). Foco: alianza comercial, brand system Viva + funnel Shuttle. Live: shuttles.vivaaerobus.com. Sin KPIs inventados.

## Nota Contact live (2026-08-05)
Mensaje → FormSubmit (o Formspree). Meet → Calendly (`VITE_CALENDLY_URL`). Setup: `skills/contact-live.md`. Sin Calendly: horario preferido por email (Meet manual).

## Nota dark mode (2026-08-03)
Modo nocturno desactivado: `@custom-variant dark` solo con clase `.dark` (nunca se aplica) + estilos `dark:` / `html.dark` limpiados. Solo tema claro.

## Nota CV Harvard (2026-08-08)
Tab Resume = formato Harvard (serif, secciones caps, fechas a la derecha).
**Imprimir CV** abre ventana de impresión solo con el CV (`src/lib/printHarvardCv.ts`) → Guardar como PDF.
Contenido ES/EN según toggle de idioma (perfil, experiencia, educación, títulos de sección).

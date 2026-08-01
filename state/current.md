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

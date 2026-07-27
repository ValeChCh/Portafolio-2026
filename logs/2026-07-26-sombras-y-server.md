# Log 2026-07-26 — Server + sombras

**Objetivo:** Levantar local; diagnosticar connection refused; quitar sombras.

**Hecho:**
- Vite en :3000 (fallback Node Cursor; npm no en PATH).
- Causa refused = proceso muerto, no app.
- Sombras removidas: `index.css` + About/Sidebar/Contact/Resume/Projects/Header.
- Verificación: cero `shadow` en `src/`.

**Paths:** `src/index.css`, `src/components/*.{tsx}`

**Próximo sugerido:** sync `design.md` raíz; Node en PATH; deploy.

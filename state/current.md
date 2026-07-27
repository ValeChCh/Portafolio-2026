# Estado actual — 2026-07-26

## Hecho
- [x] MVP SPA: Work / About / Resume / Contact
- [x] Datos mock + 3 case studies + modal
- [x] Design system neo (ventanas, pills, botones, dark mode)
- [x] Diagrama HTML aparte (`diagrama-estructura-portfolio.html`)
- [x] Sombras eliminadas en toda la UI
- [x] Sistema de memoria persistente (`AGENTS.md` + carpetas)

## Pendiente
- [ ] Sincronizar `design.md` raíz con “sin sombras”
- [ ] Confirmar Node/npm en PATH del usuario (hoy se usa Node embebido de Cursor)
- [ ] Deploy URL pública (requisito curso D4)
- [ ] QA mobile + checklist S7
- [ ] Decidir: form real vs mock permanente
- [ ] ¿localStorage para dark mode?

## Blockers
- **Entorno:** `npm`/`node` no siempre en PATH del agente → ver `gotchas/README.md` + `skills/dev-server.md`.
- Servidor Vite puede morir entre sesiones → `ERR_CONNECTION_REFUSED` en :3000 es “server off”, no bug de app.

## Enfoque actual
Memoria/contexto instalada. Siguiente trabajo típico: pulir UI, contenido real, o deploy.

## Archivos calientes
`src/App.tsx` · `src/data.ts` · `src/index.css` · `src/components/*`

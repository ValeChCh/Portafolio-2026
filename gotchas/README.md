# Gotchas

## G1 — ERR_CONNECTION_REFUSED :3000
**Causa:** Vite no está corriendo (proceso murió / sesión cerrada). No es bug de React.  
**Fix:** `skills/dev-server.md`. Verificar con `lsof` / `curl`.

## G2 — `npm` / `node` not found (agente Cursor)
**Causa:** Node no instalado en PATH del shell del agente.  
**Fix:** Node embebido Cursor:
`/Applications/Cursor.app/Contents/Resources/app/resources/helpers/node`  
+ invocar `node_modules/vite/bin/vite.js`.  
Ideal largo plazo: instalar Node LTS vía Homebrew y usar `npm run dev`.

## G3 — `design.md` raíz desactualizado
**Causa:** Aún documenta hard shadows; código ya no las usa.  
**Fix:** Confiar en `contexto/design.md` + `src/index.css`. Actualizar raíz cuando haya tiempo.

## G4 — Contact no llega / Meet no se crea
**Mensaje:** FormSubmit exige **confirmar el email una vez** (revisar inbox). Alternativa: `VITE_FORMSPREE_ENDPOINT`.  
**Meet:** hace falta `VITE_CALENDLY_URL` con evento 15 min + Location = Google Meet. Reiniciar Vite tras `.env.local`.  
Ver `skills/contact-live.md`.

## G5 — Paths de imágenes `/src/assets/images/...`
**Causa:** Vite serve `src/` en dev; en build esos paths no existen en `dist/`.  
**Fix (2026-07-31):** archivos en `public/images/` y URLs `/images/...`. No usar `/src/assets/...` en strings.

## G6 — Cargar `node_modules` o todo el transcript
Desperdicia tokens. Nunca. Usar `AGENTS.md` routing.

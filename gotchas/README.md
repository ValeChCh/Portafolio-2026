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

## G4 — Contact “enviado” / booking “confirmado”
**Causa:** Simulación `setTimeout` / state local.  
**No es bug.** No buscar API key Gemini para esto (README AI Studio es boilerplate).

## G5 — Paths de imágenes `/src/assets/images/...`
Funciona en Vite dev; en build/deploy puede requerir mover a `public/` o imports. Probar antes de deploy.

## G6 — Cargar `node_modules` o todo el transcript
Desperdicia tokens. Nunca. Usar `AGENTS.md` routing.

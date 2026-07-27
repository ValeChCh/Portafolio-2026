# Skill: Dev server

## Cuándo
Levantar / reiniciar localhost, o `ERR_CONNECTION_REFUSED` en :3000.

## Pasos
1. `lsof -nP -iTCP:3000 -sTCP:LISTEN` — si hay proceso, abrir http://localhost:3000/
2. Si vacío: comprobar `node`/`npm` en PATH.
3. Preferido: `npm run dev` (script → Vite `--port=3000 --host=0.0.0.0`).
4. Fallback (sin npm en PATH):
   ```bash
   "/Applications/Cursor.app/Contents/Resources/app/resources/helpers/node" \
     node_modules/vite/bin/vite.js --port=3000 --host=0.0.0.0
   ```
5. Verificar: `curl -I http://localhost:3000/` → 200.
6. Dejar proceso en background; no asumir que sobrevive entre días.

## No hacer
Reinstalar deps si `node_modules` ya existe. No cambiar puerto sin actualizar este skill + `AGENTS.md`.

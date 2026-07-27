# Skill: Cerrar sesión importante

## Cuándo
Tras cambios de diseño, arquitectura, entorno, o >1 archivo significativo.

## Checklist (ejecutar en orden)
1. Actualizar `state/current.md` (hecho / pendiente / blockers).
2. Si hubo decisión durable → `decisions/YYYY-MM-DD-slug.md` + línea en `contexto/decisiones.md`.
3. Si se descubrió un bug de entorno → nota en `gotchas/README.md`.
4. Escribir `logs/YYYY-MM-DD-tema.md` (máx ~40 líneas): objetivo, cambios, paths, próximo paso.
5. No inflar `AGENTS.md` salvo invariante/routing nuevo.

## Anti-patrón
Pegar diffs enteros en logs. Preferir bullets + paths.

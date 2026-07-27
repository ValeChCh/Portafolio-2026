# ADR: Sin sombras en UI

- **Fecha:** 2026-07-26
- **Estado:** accepted

## Contexto
Sistema neo-brutalist usaba hard offset shadows en cards, botones, pills e inputs. Usuario pidió quitarlas (primero contenedores, luego controles/form).

## Decisión
Eliminar **todas** las clases `shadow-*` de `src/` (CSS utilidades + componentes). Mantener bordes 2px y colores Pop.

## Consecuencias
+ UI más plana/limpia; menos ruido visual.
− `design.md` raíz aún menciona sombras → desactualizado; usar `contexto/design.md`.
− Hover “relieve” por translate+shadow ya no aplica; hover = cambio de bg/color.

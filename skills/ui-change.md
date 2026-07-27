# Skill: Cambio de UI

## Cuándo
Colores, tipografía, componentes visuales, layout de tabs.

## Lectura mínima
1. `contexto/decisiones.md` + `contexto/design.md`
2. `src/index.css` (tokens / utilidades)
3. Solo el/los componentes tocados

## Reglas
- Reutilizar `.neo-window`, `.neo-btn-*`, `.neo-pill`, paleta `@theme`.
- **Prohibido** añadir `shadow-*` (I4).
- Una sección = un propósito; no meter cards decorativas sin necesidad.
- Dark: probar clases `dark:` existentes.
- Si cambia una decisión de diseño → entrada en `contexto/decisiones.md` + opcional ADR en `decisions/`.

## Done
Visual OK light/dark · sin sombras · sin CSS huérfano · `state/current.md` si el cambio es durable.

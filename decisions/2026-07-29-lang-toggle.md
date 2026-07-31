# ADR: Toggle ES/EN reemplaza dark mode

- **Fecha:** 2026-07-29
- **Estado:** accepted

## Contexto
El header tenía toggle de modo oscuro. El usuario pidió quitarlo y cambiar idioma ES↔EN con traducción completa del contenido.

## Decisión
- Eliminar estado `darkMode` y clase `dark` en runtime.
- `LanguageProvider` + diccionarios `src/i18n/ui.ts` y contenido EN en `src/i18n/content.ts`.
- Persistencia en `localStorage` (`valeria-portfolio-lang`).
- Botón en Header muestra `EN` / `ES` (idioma al que se cambia).

## Consecuencias
+ Portafolio usable para reclutadores EN/ES.
− Clases `dark:` residuales en CSS/markup ya no se activan (limpieza opcional).
− `/demo-day` sigue solo en español por ahora.

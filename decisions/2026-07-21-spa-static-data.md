# ADR: SPA + datos estáticos

- **Fecha:** 2026-07-21
- **Estado:** accepted

## Contexto
Portafolio MVP para demo/curso. Necesita cargar rápido y ser editable sin CMS.

## Decisión
- React SPA con tabs (`ActiveTab`), sin router.
- Contenido en `src/data.ts`, tipos en `src/types.ts`.
- Contacto y booking solo UI simulada.

## Consecuencias
+ Simple, portable, fácil de editar.
− Form no envía emails reales; analytics no existen.
− Cambios de contenido = editar TS, no panel admin.

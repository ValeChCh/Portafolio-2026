# ADR: Ruta /demo-day sin React Router

- **Fecha:** 2026-07-29
- **Estado:** accepted

## Contexto
Demo Day requiere URL independiente `/demo-day` sin alterar tabs del portafolio ni añadir dependencias.

## Decisión
En `main.tsx`, si `pathname` es `/demo-day`, montar `DemoDay` en lugar de `App`. Rewrite SPA en `vercel.json` para producción.

## Consecuencias
+ Cero deps nuevas; flujo principal intacto (I1).
− No hay client-side navigation entre `/` y `/demo-day` (full reload al cambiar URL).

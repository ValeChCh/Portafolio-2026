# Decisiones de diseño y producto (índice vivo)

Formato: `YYYY-MM-DD | decisión | por qué | impacto`.  
ADR con más detalle en `../decisions/`.

## Producto / curso

- **2026-07 | Feature principal = vista de proyectos** | Entrega Interface School Wave Delta; D2/D3/D4 en `contexto.md`. | Work tab + modal case study son el corazón del MVP.
- **2026-07 | Contenido visual no se delega** | Tono/identidad debe ser de Valeria. | IA propone layouts/microcopy; humano cierra copy e imágenes.
- **2026-07 | Datos estáticos, sin backend** | MVP demo-first. | `data.ts`; form/booking mock.
- **2026-07 | SPA por tabs, no React Router** | Simplicidad MVP. | Estado `activeTab` en App.

## Visual

- **2026-07 | Neo-Brutalist Pop + window UI** | Diferenciación vs portafolios genéricos. | Clases `.neo-*` en `index.css`.
- **2026-07-26 | Eliminar todas las sombras (contenedores, botones, pills, inputs)** | Usuario pidió limpieza visual; sombras hard offset saturaban. | Invariante I4. `design.md` raíz puede quedar desactualizado en sección sombras → confiar en este archivo + CSS.
- **2026-07 | Dark mode vía clase `dark` en html** | Tailwind dark variants. | **Reemplazado 2026-07-29** por toggle ES/EN (sin dark mode).
- **2026-07-29 | Toggle idioma ES↔EN en lugar de dark mode** | Reclutadores bilingües. | `src/i18n/*`; UI + contenido de `data.ts` traducidos; persistencia `localStorage`.

## Contenido mock

- 3 proyectos: FinDash Global, Vitality Tracker, Lumina Store (Fintech / Health / E-Commerce).
- Experiencia: NovaPay → Curando → Arise.
- Perfil: Santiago CL, remoto; email en `VALERIA_PROFILE`.

- **2026-07-29 | Ruta `/demo-day` sin router** | Demo Day independiente; no deps nuevas. | Pathname en `main.tsx` + `vercel.json`. Ver ADR.

- ¿Persistir dark mode en localStorage?
- ¿Conectar form real (Formspree/email) o dejar mock?
- ¿Actualizar `design.md` raíz para quitar menciones a shadows? (recomendado)
- ¿Assets en `/public` vs `/src/assets` (paths actuales bajo `/src/assets/images/`)?

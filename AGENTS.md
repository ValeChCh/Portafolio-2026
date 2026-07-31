# AGENTS.md — Portafolio Valeria UX/Product Designer

> Memoria operativa del agente. Máx. densidad. No reemplaza el código: apunta a él.

## Identidad

- **Qué es:** SPA portafolio profesional (React + Vite + TS + Tailwind v4 + motion).
- **Quién:** Valeria — UX/Product Designer. Estilo Neo-Brutalist Pop Editorial.
- **No es:** app con backend, CMS ni API real. Datos mock en `src/data.ts`. Contacto/booking son simulados.
- **Origen curso:** Interface School Wave Delta — ver `contexto/contexto.md` (D1–D4, feature = vista proyectos).

## Reglas de oro (contexto)

1. El context window es caro y volátil. La **memoria real vive en archivos** (`state/`, `decisions/`, `logs/`, `contexto/`).
2. **Nunca** cargar todo el historial ni todo el repo. Solo lo estrictamente necesario para la tarea.
3. Preferir **referenciar paths** antes que pegar bloques largos al prompt.
4. Al final de sesión importante: actualizar `state/`, registrar en `decisions/` si aplica, comprimir en `logs/`.
5. Procedimientos repetidos → `skills/`. Problemas recurrentes → `gotchas/`.
6. Mantener este archivo **conciso** (≤300 líneas). Detalle largo va a las carpetas.

## Invariantes (no romper sin decisión explícita)

| # | Invariante |
|---|------------|
| I1 | Navegación SPA por `activeTab` en `App.tsx`: `work \| about \| resume \| contact`. Sin router. |
| I2 | Fuente de contenido: `src/data.ts` + tipos en `src/types.ts`. No inventar APIs. |
| I3 | Tokens visuales en `src/index.css` (`.neo-window`, `.neo-btn-*`, `.neo-pill`, colores `@theme`). |
| I4 | **Sin `shadow-*`** en UI (decisión 2026-07-26). Bordes 2px + color Pop bastan. |
| I5 | Idioma ES/EN vía `LanguageProvider` (`src/i18n/`). Sin dark mode. |
| I6 | No editar `node_modules/`. No tocar `diagrama-estructura-portfolio.html` salvo pedido. |
| I7 | Copy/tono/contenido visual de Valeria: humano decide; IA propone, no cierra sin OK. |
| I8 | Contact form + calendar booking = simulación local (`setTimeout` / state). No backend. |
| I9 | `/demo-day` es presentación independiente (pathname en `main.tsx`). No usa `activeTab` ni altera el flujo principal. |

## Orden de lectura (mínimo → máximo)

**Cualquier sesión nueva (obligatorio, ~2–4 archivos):**
1. `AGENTS.md` (este)
2. `state/current.md`
3. `contexto/decisiones.md` (si la tarea toca diseño/UI)
4. Skill relevante en `skills/`

**Por tipo de tarea (añadir solo lo necesario):**

| Tarea | Leer además |
|-------|-------------|
| UI / estilo / tokens | `contexto/design.md`, `src/index.css`, componente afectado |
| Contenido / proyectos / CV | `src/data.ts`, `src/types.ts` |
| Navegación / tabs / layout app | `src/App.tsx`, `src/components/Header.tsx` |
| Feature Work / modal case study | `src/components/Projects.tsx`, `Sidebar.tsx` |
| Contacto / form | `src/components/Contact.tsx` |
| Demo Day presentación | `src/pages/DemoDay.tsx`, `src/main.tsx` (pathname) |
| Bug conocido / entorno | `gotchas/README.md` |
| Decisión histórica | `decisions/` (archivo por fecha) |
| Continuidad sesión | `logs/` más reciente |

**No cargar por defecto:** `node_modules/`, transcripts largos, `design.md` raíz completo si ya existe resumen en `contexto/`, diagramas HTML, README genérico AI Studio.

## Mapa de carpetas de memoria

```
AGENTS.md          ← control central (tú estás aquí)
contexto/          ← diseño + bitácora curso + decisiones de producto/diseño
decisions/         ← ADR ligeros (fecha + por qué)
state/             ← hecho / pendiente / blockers
skills/            ← procedimientos reutilizables
gotchas/           ← problemas + fixes
logs/              ← resúmenes de sesión comprimidos
```

## Routing de skills

| Si la tarea es… | Usar |
|-----------------|------|
| Arrancar / reiniciar local | `skills/dev-server.md` |
| Cambiar UI respetando sistema | `skills/ui-change.md` |
| Añadir/editar proyecto o perfil | `skills/edit-content.md` |
| Cerrar sesión / persistir memoria | `skills/session-close.md` |
| Investigar bug de conexión/build | `gotchas/README.md` primero |

## Arquitectura rápida (no expandir salvo necesidad)

```
main.tsx → App.tsx [activeTab, darkMode]
  Header (nav) | Footer
  work → Sidebar + Projects (+ modal)
  about → About
  resume → Resume (print)
  contact → Contact (form + booking mock)
data.ts → imports estáticos en componentes
```

Diagrama visual opcional: `diagrama-estructura-portfolio.html` (abrir en browser; no es runtime).

## Definition of Done

Una tarea está Done cuando:
- [ ] Cumple el pedido del usuario sin scope creep
- [ ] Respeta invariantes I1–I8 (o hay entrada nueva en `decisions/`)
- [ ] UI: sin sombras; tokens/clases neo existentes reutilizadas
- [ ] Sin errores obvios en el archivo tocado; hot-reload OK si hay server
- [ ] Si cambió diseño/estado relevante → `state/current.md` actualizado
- [ ] Si fue decisión durable → archivo en `decisions/` o nota en `contexto/decisiones.md`
- [ ] No se modificaron archivos ajenos a la tarea

## Comportamiento del agente con contexto

**Al inicio de sesión:** leer `AGENTS.md` + `state/current.md`. No releer todo el chat previo.
**Durante:** abrir solo archivos de la tabla de routing. Si falta info → leer 1 archivo más, no el árbol completo.
**Al decidir UI:** contrastar con `contexto/decisiones.md` y `contexto/design.md` (no con `design.md` raíz si diverge; la fuente de verdad de tokens es `src/index.css` + `contexto/`).
**Al terminar trabajo significativo:** ejecutar checklist de `skills/session-close.md`.
**Prohibido:** volcar `data.ts` entero al chat; narrar exploraciones largas; regenerar docs ya existentes sin pedido.

## Stack (referencia 1 línea)

React 19 · Vite 6 · TS · Tailwind 4 · motion/react · lucide-react · puerto dev **3000**.

## Punteros

- Diseño condensado: `contexto/design.md`
- Decisiones de diseño/producto: `contexto/decisiones.md`
- Bitácora curso: `contexto/contexto.md`
- Estado vivo: `state/current.md`
- ADR: `decisions/`
- Skills: `skills/`
- Gotchas: `gotchas/README.md`
- Logs: `logs/`

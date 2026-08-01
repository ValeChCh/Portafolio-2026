# Design — condensado (fuente operativa)

> Detalle histórico largo: `../design.md`. Tokens reales: `src/index.css`.  
> Actualizado 2026-07-26: **sin hard drop shadows**.

## Estilo

Neo-Brutalist Pop Editorial / ventanas retro OS.

- Contenedores: `.neo-window` + `.neo-window-bar` (semáforo ●●●; sin redondeado)
- Cards acento: `.bento-card*` (yellow/pink/cyan/mint)
- CTAs: `.neo-btn-primary` | `.neo-btn-secondary` | `.neo-btn-black`
- Tags: `.neo-pill`
- Bordes: `border-1 border-black` (dark: white). **No shadows.**

## Paleta


| Token      | Hex       | Uso                             |
| ---------- | --------- | ------------------------------- |
| neo-yellow | `#8F9DE2` | primario, tabs activos, botones |
| neo-pink   | `#fbcfe8` | challenge, edu, avisos          |
| neo-cyan   | `#bae6fd` | solution, éxito booking         |
| neo-mint   | `#a7f3d0` | KPIs, metodologías              |
| neo-purple | `#e9d5ff` | tags extra                      |
| bg light   | `#f7f5f0` | + dot grid                      |
| bg dark    | `#0f1117` | + dot grid                      |




## Tipo

- Display: Outfit (`font-display`) 800–900
- UI / ventanas: Plus Jakarta Sans (`font-sans`)



## IA (4 tabs)


| Tab     | Layout clave                                                                                        |
| ------- | --------------------------------------------------------------------------------------------------- |
| Work    | Sidebar 4col + Projects 8col; filtros; modal case study (KPI mint / challenge pink / solution cyan) |
| About   | avatar window + bio + valores + methodologies/tools                                                 |
| Resume  | timeline exp + edu + skill bars + `window.print()`                                                  |
| Contact | form simulado + booking 15min simulado                                                              |




## UX principles

Expresivo + alto contraste + motion en cambio de tab + responsive. WCAG AA por contraste/bordes.
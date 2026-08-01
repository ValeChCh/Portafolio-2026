# Skill: Editar contenido

## Cuándo
Perfil, skills, proyectos, experiencia, educación, metodologías, tools.

## Flujo
1. Editar constantes en `src/data.ts`.
2. Si nueva forma de dato → actualizar `src/types.ts` y el componente que lo renderiza.
3. Imágenes: poner archivos en `public/images/` y referenciar como `/images/nombre.jpg`.
4. No hardcodear textos largos en JSX si ya existen en `data.ts` (excepto valores locales de About).

## Proyectos (case study)
Campos críticos: `id`, `title`, `description`, `category`, `tags`, `image`, `role`, `challenge`, `process[]`, `solution`, `metrics[]`, `color{}`.
Categorías filtro UI: All / Banca / Traveltech / E-Commerce — alinear `project.category`.

## Done
Tipos compilables · UI refleja cambio · no tocar estilos salvo pedido.

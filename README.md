# Sinlente Films

Sitio web de Sinlente Films, productora de cine de autor independiente en Bogotá, Colombia. Sitio de una sola página con navegación por anclas, filmografía bilingüe (ES/EN) y teasers embebidos desde Vimeo.

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Sin CMS: el contenido vive tipado en [`src/data/films.ts`](src/data/films.ts) y [`src/data/content.ts`](src/data/content.ts)

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # tsc -b && vite build, genera dist/
npm run lint
```

## Contenido

- **Películas**: `src/data/films.ts` — título, sinopsis, metadatos, festivales y Vimeo ID por idioma (`es`/`en`).
- **Textos estáticos** (nav, hero, secciones): `src/data/content.ts`.
- **Assets**: `src/assets/frames/` — fotogramas optimizados a WebP.

## Deploy

Proyecto Vite estándar, sin configuración especial — Vercel/Netlify lo detectan automáticamente (`npm run build`, output `dist/`).

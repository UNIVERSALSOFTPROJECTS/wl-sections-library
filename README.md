# @wl/sections-library

Librería de secciones y UI compartida para plataformas white-label (casino).

## Qué exporta

- Secciones: `GlobalNav`, `Footer`, `ShortcutsNav`, `HeroBanner`, `FeaturedPromotions`, `Recommendations`, `SportsEvents`, `CasinoGames`, `LatestWinners`, …
- `sectionRegistry` / `sectionCatalog` / `SectionType`
- Primitivos UI: `Button`, `Carousel`, `IconButton`, …
- `theme` / `createTheme`

## Peer dependencies

El host debe proveer:

- `react` ^19
- `react-dom` ^19
- `styled-components` ^6

Envolvé la app con `ThemeProvider` (podés usar `createTheme()` de esta lib o un theme compatible).

## Install desde GitHub

Repo org: `UNIVERSALSOFTPROJECTS/wl-sections-library` (privado).

Local (SSH con host `github-universalsoft`):

```bash
npm install git+ssh://git@github-universalsoft/UNIVERSALSOFTPROJECTS/wl-sections-library.git#v0.1.4
```

En `package.json` (HTTPS; Cloudflare Pages necesita `GITHUB_TOKEN` con acceso al repo):

```json
"@wl/sections-library": "git+https://github.com/UNIVERSALSOFTPROJECTS/wl-sections-library.git#v0.1.4"
```

Al instalar desde git, el script `prepare` corre `build:lib` y genera `dist/`.

## Desarrollo local (playground)

```bash
npm install
npm run dev
```

- Docs UI: `/docs_components`
- Docs secciones: `/docs_sections`

## Build de la librería

```bash
npm run build:lib
```

Salida: `dist/wl-sections-library.js`, `dist/wl-sections-library.cjs`, tipos en `dist/library/index.d.ts`.

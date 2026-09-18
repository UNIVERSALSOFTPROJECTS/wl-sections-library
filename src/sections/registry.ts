import type { ComponentType } from "react";
import { CasinoGameFilter, CasinoGameRail, CasinoMenu, CasinoPromoCard, CasinoProviders, CasinoTournamentRail, FeaturedGames } from "./casino";
import { Footer } from "./footer";
import { GlobalNav } from "./globalNav";
import {
  CasinoGames,
  FeaturedPromotions,
  HeroBanner,
  HeroPlaceholder,
  Recommendations,
  SportsEvents,
} from "./home";
import { LatestWinners } from "./latestWinners";
import type { SectionDefinition, SectionType } from "./types";

export const sectionRegistry: Record<SectionType, ComponentType> = {
  GlobalNav,
  Footer,
  HeroBanner,
  FeaturedPromotions,
  Recommendations,
  SportsEvents,
  CasinoGames,
  LatestWinners,
  HeroPlaceholder,
  FeaturedGames,
  CasinoMenu,
  CasinoPromoCard,
  CasinoGameRail,
  CasinoGameFilter,
  CasinoProviders,
  CasinoTournamentRail,
};

export const sectionCatalog: SectionDefinition[] = [
  {
    type: "GlobalNav",
    label: "Header (GlobalNav)",
    scope: "global",
    description:
      "Header sticky de la app: menú, saldo, acciones, búsqueda y jackpots. Chrome de layout.",
  },
  {
    type: "Footer",
    label: "Footer",
    scope: "global",
    description:
      "Footer de layout: marca, redes, nav, pagos, badges y legal. Slot fijo del chrome.",
  },
  {
    type: "CasinoPromoCard",
    label: "Promo de Casino",
    scope: "casino",
    description:
      "Card de promoción del chrome de casino (layout.casino.promo). Slot fijo, no va en pages.casino.",
  },
  {
    type: "CasinoMenu",
    label: "Menú de Casino",
    scope: "casino",
    description:
      "Submenú del chrome de casino (layout.casino.menu). Items inyectables; el host navega. Slot fijo.",
  },
  {
    type: "HeroBanner",
    label: "Hero Banner",
    scope: "home",
    description:
      "Carrusel hero full-bleed con tag, título, subtítulo, descripción y CTA.",
  },
  {
    type: "FeaturedPromotions",
    label: "Promociones Destacadas",
    scope: "home",
    description: "Carrusel horizontal de promociones con badge y monto.",
  },
  {
    type: "Recommendations",
    label: "Recomendados para vos",
    scope: "home",
    description: "Carrusel de recomendaciones (live/hot) con imagen y meta.",
  },
  {
    type: "SportsEvents",
    label: "Eventos Deportivos",
    scope: "home",
    description: "Carrusel de eventos con equipos y cuotas.",
  },
  {
    type: "CasinoGames",
    label: "Juegos de Casino",
    scope: "home",
    description: "Grilla de juegos de casino con badges Nuevo/Hot/Vivo.",
  },
  {
    type: "LatestWinners",
    label: "Últimos Ganadores",
    scope: "shared",
    description:
      "Lista de ganadores con tabs Live y Top 10. Sección de página reutilizable (home, casino, etc.).",
  },
  {
    type: "HeroPlaceholder",
    label: "Hero (placeholder)",
    scope: "home",
    description: "Bloque hero de ejemplo para el editor y el runtime.",
  },
  {
    type: "FeaturedGames",
    label: "Destacados",
    scope: "casino",
    description:
      "Carrusel full-width de juegos destacados con título, dots en la fila del título y CTA.",
  },
  {
    type: "CasinoGameRail",
    label: "Riel de juegos",
    scope: "casino",
    description:
      "Carrusel reutilizable de cards de juego (Top 10, Últimos jugados, Popular Ahora, Top Juegos, Lanzamientos, Jackpots, Megaways).",
  },
  {
    type: "CasinoGameFilter",
    label: "Filtro de juegos",
    scope: "casino",
    description:
      "Chips horizontales para filtrar el catálogo de casino (Todos, Lanzamientos, Populares, etc.).",
  },
  {
    type: "CasinoProviders",
    label: "Proveedores",
    scope: "casino",
    description:
      "Título Proveedores, búsqueda y chips mock de proveedor (Todos, PRAGMATIC, DARWIN, ESPORTS).",
  },
  {
    type: "CasinoTournamentRail",
    label: "Torneos activos",
    scope: "casino",
    description:
      "Lista de torneos con título estilo CasinoGameRail y cards de premio, jugadores y tiempo.",
  },
];

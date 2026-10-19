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
import { ProfileAccountVerification } from "./profileAccountVerification";
import { ProfileIdentityVerification } from "./profileIdentityVerification";
import { ProfileHeader } from "./profileHeader";
import { ProfileMenu } from "./profileMenu";
import { ProfilePersonalInfo } from "./profilePersonalInfo";
import { ProfileReferral } from "./profileReferral";
import { ProfileRewards } from "./profileRewards";
import { ProfileVerification } from "./profileVerification";
import { ShortcutsNav } from "./shortcutsNav";
import type { SectionDefinition, SectionType } from "./types";

export const sectionRegistry: Record<SectionType, ComponentType> = {
  GlobalNav,
  Footer,
  ShortcutsNav,
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
  ProfileHeader,
  ProfileMenu,
  ProfilePersonalInfo,
  ProfileVerification,
  ProfileRewards,
  ProfileReferral,
  ProfileAccountVerification,
  ProfileIdentityVerification,
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
    type: "ShortcutsNav",
    label: "Bottom nav (ShortcutsNav)",
    scope: "global",
    description:
      "Barra inferior fija: atajos (Casino, Deportes, Home, Hípicas, Más). Chrome de layout; items inyectables para JSON/BO.",
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
    label: "Recomendados para ti",
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
  {
    type: "ProfileHeader",
    label: "Encabezado de perfil",
    scope: "shared",
    description:
      "Barra Volver y tarjeta de identidad del perfil: avatar, nivel, XP y progreso.",
  },
  {
    type: "ProfileMenu",
    label: "Menú de perfil",
    scope: "shared",
    description:
      "Menú horizontal de Mi Perfil. El host navega a la subruta; el contenido va debajo.",
  },
  {
    type: "ProfilePersonalInfo",
    label: "Información personal",
    scope: "shared",
    description:
      "Bloque de Mi Perfil: título de cuenta y tarjeta de datos personales.",
  },
  {
    type: "ProfileVerification",
    label: "Verificación de cuenta",
    scope: "shared",
    description:
      "Aviso compacto de Mi Perfil para completar identidad y domicilio.",
  },
  {
    type: "ProfileRewards",
    label: "Nivel y recompensas",
    scope: "shared",
    description:
      "Tarjeta de Mi Perfil con nivel actual, siguiente nivel y progreso de XP.",
  },
  {
    type: "ProfileReferral",
    label: "Código de referido",
    scope: "shared",
    description:
      "Tarjeta de Mi Perfil para copiar el código personal e invitar amigos.",
  },
  {
    type: "ProfileAccountVerification",
    label: "Verificación de cuenta",
    scope: "shared",
    description:
      "Pantalla de Seguridad con el estado de identidad, domicilio, email y teléfono.",
  },
  {
    type: "ProfileIdentityVerification",
    label: "Verificación de identidad",
    scope: "shared",
    description:
      "Subruta de Seguridad para cargar documento, selfie y comprobante de domicilio.",
  },
];

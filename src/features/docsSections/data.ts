export const globalNavUsageCode = `import { GlobalNav } from "@wl/sections-library";
// o en el playground:
import { GlobalNav } from "@sections/globalNav";

<GlobalNav />
<GlobalNav
  onMenuPress={() => setMenuOpen(true)}
  notificationBadge={3}
  searchPlaceholder="Buscar…"
/>`;

export const globalNavJsonExample = `{
  "layout": {
    "header": { "type": "GlobalNav" },
    "footer": { "type": "Footer" },
    "shortcutsNav": { "type": "ShortcutsNav" }
  },
  "pages": {
    "home": []
  }
}`;

export const shortcutsNavUsageCode = `import { ShortcutsNav } from "@wl/sections-library";
// o en el playground:
import { ShortcutsNav } from "@sections/shortcutsNav";

<ShortcutsNav />
<ShortcutsNav
  activeId="home"
  centerLogoSrc={brandLogo}
  onItemPress={(id) => {
    if (id === "mas") openMoreCategories();
  }}
/>`;

export const shortcutsNavJsonExample = `{
  "layout": {
    "header": { "type": "GlobalNav" },
    "footer": { "type": "Footer" },
    "shortcutsNav": { "type": "ShortcutsNav" }
  },
  "pages": {
    "home": []
  }
}`;

export const shortcutsNavProps = [
  {
    name: "items",
    type: "ShortcutsNavItem[]",
    default: "Casino / Deportes / Home / Hípicas / Más",
    description:
      "Atajos a renderizar. Orden = orden visual. Serializable para JSON/BO (id, label, kind, icon, path).",
  },
  {
    name: "activeId",
    type: "string",
    default: "—",
    description: "Item activo controlado (típicamente derivado de la ruta en el host).",
  },
  {
    name: "defaultActiveId",
    type: "string",
    default: '"home"',
    description: "Activo inicial cuando no hay activeId controlado.",
  },
  {
    name: "centerLogoSrc",
    type: "string",
    default: "whiteLogo.jpeg",
    description: "Logo del botón central (brand). El host puede pasar el de la marca.",
  },
  {
    name: "onItemPress",
    type: "(id: string) => void",
    default: "—",
    description:
      "Callback al tocar un item. El host navega / abre sheets (Más, etc.). Sin react-router en la lib.",
  },
] as const;

export const globalNavProps = [
  {
    name: "onMenuPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón menú (abre SideMenu en el layout).",
  },
  {
    name: "onDepositPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón depositar.",
  },
  {
    name: "onNotificationsPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón notificaciones.",
  },
  {
    name: "onProfilePress",
    type: "() => void",
    default: "—",
    description: "Callback de Mi Perfil dentro del menú de perfil.",
  },
  {
    name: "onVipPress",
    type: "() => void",
    default: "—",
    description: "Callback de la tarjeta Estado VIP.",
  },
  {
    name: "onWithdrawPress",
    type: "() => void",
    default: "—",
    description: "Callback de Retirar dentro del menú de perfil.",
  },
  {
    name: "onPromotionsPress",
    type: "() => void",
    default: "—",
    description: "Callback de Promociones dentro del menú de perfil.",
  },
  {
    name: "onBetHistoryPress",
    type: "() => void",
    default: "—",
    description: "Callback de Historial de Apuestas.",
  },
  {
    name: "onSettingsPress",
    type: "() => void",
    default: "—",
    description: "Callback de Configuración.",
  },
  {
    name: "onLogoutPress",
    type: "() => void",
    default: "—",
    description: "Callback de Cerrar Sesión.",
  },
  {
    name: "profile",
    type: "ProfileMenuUser",
    default: "Usuario Premium demo",
    description:
      "Datos del menú que abre el ícono de perfil: nombre, email, VIP, saldo y badge de promociones.",
  },
  {
    name: "notificationBadge",
    type: "number | string | boolean",
    default: "2",
    description: "Badge del IconButton de notificaciones.",
  },
  {
    name: "searchPlaceholder",
    type: "string",
    default: '"Buscar juegos o pregúntale a la IA..."',
    description: "Placeholder del buscador (solo UI por ahora).",
  },
  {
    name: "balanceOptions",
    type: "BalanceOption[]",
    default: "demo Bono / Retirable / Depositado",
    description: "Opciones del dropdown de saldo.",
  },
  {
    name: "balanceDefaultId",
    type: '"bonus" | "withdrawable" | "deposited"',
    default: '"withdrawable"',
    description: "Saldo seleccionado al montar.",
  },
  {
    name: "jackpots",
    type: "JackpotItem[]",
    default: "Mega + Major demo",
    description: "Fila de jackpots debajo del search.",
  },
] as const;

export const footerUsageCode = `import { Footer } from "@wl/sections-library";
// o en el playground:
import { Footer } from "@sections/footer";

<Footer />
<Footer
  tagline="Tu marca aquí"
  poweredByBrand="Universal Soft"
/>`;

export const footerJsonExample = `{
  "layout": {
    "header": { "type": "GlobalNav" },
    "footer": { "type": "Footer" },
    "shortcutsNav": { "type": "ShortcutsNav" }
  },
  "pages": {
    "home": []
  }
}`;

export const footerProps = [
  {
    name: "logoSrc",
    type: "string",
    default: "logoUniversal.png",
    description: "URL/src del logo de marca.",
  },
  {
    name: "logoAlt",
    type: "string",
    default: '"Universal Bet"',
    description: "Alt del logo.",
  },
  {
    name: "tagline",
    type: "string",
    default: "texto demo…",
    description: "Tagline bajo el logo.",
  },
  {
    name: "socialItems",
    type: "FooterSocialItem[]",
    default: "FB / X / IG / YT / Mail",
    description: "Links de redes sociales.",
  },
  {
    name: "navSections",
    type: "FooterNavSection[]",
    default: "Casino, Deportes, …",
    description: "Columnas de navegación (collapsible opcional).",
  },
  {
    name: "paymentMethods",
    type: "readonly string[]",
    default: "Visa, Mastercard, …",
    description: "Pills de métodos de pago.",
  },
  {
    name: "paymentsTitle",
    type: "string",
    default: '"Métodos de Pago"',
    description: "Título del bloque de pagos.",
  },
  {
    name: "badges",
    type: "readonly string[]",
    default: "+18, Licencia, SSL",
    description: "Badges legales / compliance.",
  },
  {
    name: "copyright",
    type: "string",
    default: "© 2026…",
    description: "Texto de copyright.",
  },
  {
    name: "poweredByLabel",
    type: "string",
    default: '"Powered by"',
    description: "Label del powered by.",
  },
  {
    name: "poweredByBrand",
    type: "string",
    default: '"Universal Soft"',
    description: "Marca del powered by.",
  },
] as const;

export const heroBannerUsageCode = `import { HeroBanner } from "@wl/sections-library";
// o en el playground:
import { HeroBanner } from "@sections/home/heroBanner";

<HeroBanner />
<HeroBanner
  slides={customSlides}
  onCtaPress={(slideId) => console.log(slideId)}
  showDots
/>`;

export const heroBannerJsonExample = `{
  "pages": {
    "home": [
      { "type": "HeroBanner" }
    ]
  }
}`;

export const heroBannerProps = [
  {
    name: "slides",
    type: "HeroBannerSlideData[]",
    default: "3 slides demo",
    description: "Slides del carrusel (tag, title, subtitle, description, cta, image).",
  },
  {
    name: "onCtaPress",
    type: "(slideId: string) => void",
    default: "—",
    description: "Callback al pulsar el CTA de un slide.",
  },
  {
    name: "loop",
    type: "boolean",
    default: "true",
    description: "Loop infinito del Carousel Embla.",
  },
  {
    name: "showDots",
    type: "boolean",
    default: "true",
    description: "Muestra dots overlay del carrusel.",
  },
] as const;

export const heroPlaceholderUsageCode = `import { HeroPlaceholder } from "@wl/sections-library";
// o en el playground:
import { HeroPlaceholder } from "@sections/home/heroPlaceholder";

<HeroPlaceholder />
<HeroPlaceholder
  title="Bienvenido"
  description="Texto configurable"
  ctaLabel="Jugar"
/>`;

export const heroPlaceholderJsonExample = `{
  "pages": {
    "home": [
      { "type": "HeroPlaceholder" }
    ]
  }
}`;

export const heroPlaceholderProps = [
  {
    name: "title",
    type: "string",
    default: '"Hero placeholder"',
    description: "Título principal del bloque.",
  },
  {
    name: "description",
    type: "string",
    default: "Texto de ejemplo…",
    description: "Descripción de soporte.",
  },
  {
    name: "ctaLabel",
    type: "string",
    default: '"Empezar"',
    description: "Label del CTA primario.",
  },
] as const;

export const featuredPromotionsUsageCode = `import { FeaturedPromotions } from "@wl/sections-library";
// o en el playground:
import { FeaturedPromotions } from "@sections/home/featuredPromotions";

<FeaturedPromotions />
`;

export const featuredPromotionsJsonExample = `{
  "pages": {
    "home": [
      { "type": "FeaturedPromotions" }
    ]
  }
}`;

export const featuredPromotionsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Promociones Destacadas 🔥\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "FeaturedPromoCardData[]",
    default: "3 promos demo",
    description: "Cards del carrusel.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const recommendationsUsageCode = `import { Recommendations } from "@wl/sections-library";
// o en el playground:
import { Recommendations } from "@sections/home/recommendations";

<Recommendations />
`;

export const recommendationsJsonExample = `{
  "pages": {
    "home": [
      { "type": "Recommendations" }
    ]
  }
}`;

export const recommendationsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Recomendados para ti\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "RecommendationCardData[]",
    default: "3 cards demo",
    description: "Cards del carrusel.",
  }
] as const;

export const sportsEventsUsageCode = `import { SportsEvents } from "@wl/sections-library";
// o en el playground:
import { SportsEvents } from "@sections/home/sportsEvents";

<SportsEvents />
`;

export const sportsEventsJsonExample = `{
  "pages": {
    "home": [
      { "type": "SportsEvents" }
    ]
  }
}`;

export const sportsEventsProps = [
  {
    name: "title",
    type: "string",
    default: "\"Eventos Deportivos\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "SportsEventCardData[]",
    default: "5 eventos demo",
    description: "Cards del carrusel.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const casinoGamesUsageCode = `import { CasinoGames } from "@wl/sections-library";
// o en el playground:
import { CasinoGames } from "@sections/home/casinoGames";

<CasinoGames />
`;

export const casinoGamesJsonExample = `{
  "pages": {
    "home": [
      { "type": "CasinoGames" }
    ]
  }
}`;

export const casinoGamesProps = [
  {
    name: "title",
    type: "string",
    default: "\"Juegos de Casino\"",
    description: "Título de la sección.",
  },
  {
    name: "items",
    type: "CasinoGameCardData[]",
    default: "6 juegos demo",
    description: "Cards de la grilla.",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "\"Ver\"",
    description: "Label del link Ver.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback del botón Ver.",
  }
] as const;

export const latestWinnersUsageCode = `import { LatestWinners } from "@wl/sections-library";
// o en el playground:
import { LatestWinners } from "@sections/latestWinners";

<LatestWinners />
`;

export const latestWinnersJsonExample = `{
  "pages": {
    "home": [{ "type": "LatestWinners" }],
    "casino": [{ "type": "LatestWinners" }],
    "casinoLive": [{ "type": "LatestWinners" }]
  }
}`;

export const latestWinnersProps = [
  {
    name: "title",
    type: "string",
    default: "\"Últimos Ganadores\"",
    description: "Título de la sección.",
  },
  {
    name: "liveItems",
    type: "LatestWinnerCardData[]",
    default: "demo live",
    description: "Items del tab Live.",
  },
  {
    name: "top10Items",
    type: "LatestWinnerCardData[]",
    default: "demo top10",
    description: "Items del tab Top 10.",
  },
  {
    name: "defaultTab",
    type: '"live" | "top10"',
    default: '"live"',
    description: "Tab activo al montar.",
  }
] as const;

export const featuredGamesUsageCode = `import { FeaturedGames } from "@wl/sections-library";
// o en el playground:
import { FeaturedGames } from "@sections/casino/featuredGames";

<FeaturedGames />
`;

export const featuredGamesJsonExample = `{
  "pages": {
    "casino": [
      { "type": "FeaturedGames" }
    ]
  }
}`;

export const featuredGamesProps = [
  {
    name: "title",
    type: "string",
    default: "\"Destacados\"",
    description: "Título de la sección (con icono sparkles y dots a la derecha).",
  },
  {
    name: "items",
    type: "FeaturedGameCardData[]",
    default: "3 cards demo",
    description: "Cards del carrusel (id, title, provider, image, badge?, ctaLabel?).",
  }
] as const;

export const casinoGameRailUsageCode = `import { CasinoGameRail } from "@wl/sections-library";
// o en el playground:
import { CasinoGameRail } from "@sections/casino/casinoGameRail";

<CasinoGameRail variant="rank" />
<CasinoGameRail variant="time" />
<CasinoGameRail variant="popular" />
<CasinoGameRail variant="topGames" />
<CasinoGameRail variant="launches" />
<CasinoGameRail variant="jackpots" />
<CasinoGameRail variant="megaways" />
<CasinoGameRail variant="forYou" />
<CasinoGameRail variant="basedOn" />
<CasinoGameRail variant="similar" />
<CasinoGameRail variant="trending" />
<CasinoGameRail variant="upcoming" />
<CasinoGameRail variant="liveTop" />
<CasinoGameRail variant="liveRoulette" />
<CasinoGameRail variant="liveBlackjack" />
<CasinoGameRail variant="liveBaccarat" />
<CasinoGameRail variant="liveGameShows" />
<CasinoGameRail variant="livePoker" />
<CasinoGameRail variant="favRecent" />
<CasinoGameRail variant="favPlayed" />
<CasinoGameRail variant="favSlots" />
<CasinoGameRail variant="favLive" />
<CasinoGameRail variant="favDiscover" />
<CasinoGameRail variant="tourSoon" />
<CasinoGameRail variant="tourMine" />
<CasinoGameRail variant="tourDone" />
`;

export const casinoGameRailJsonExample = `{
  "pages": {
    "casino": [
      { "type": "FeaturedGames" },
      { "type": "CasinoGameRail", "props": { "variant": "rank" } },
      { "type": "CasinoGameRail", "props": { "variant": "time" } },
      { "type": "LatestWinners" },
      { "type": "CasinoGameRail", "props": { "variant": "popular" } },
      { "type": "CasinoGameRail", "props": { "variant": "topGames" } },
      { "type": "CasinoProviders" },
      { "type": "CasinoGameRail", "props": { "variant": "launches" } },
      { "type": "CasinoGameRail", "props": { "variant": "jackpots" } },
      { "type": "CasinoGameRail", "props": { "variant": "megaways" } }
    ],
    "casinoRecommended": [
      { "type": "CasinoGameRail", "props": { "variant": "forYou" } },
      { "type": "CasinoGameRail", "props": { "variant": "basedOn" } },
      { "type": "CasinoGameRail", "props": { "variant": "similar" } },
      { "type": "CasinoGameRail", "props": { "variant": "trending" } },
      { "type": "CasinoGameRail", "props": { "variant": "upcoming" } }
    ],
    "casinoLive": [
      { "type": "CasinoGameFilter", "props": { "variant": "live" } },
      { "type": "CasinoGameRail", "props": { "variant": "liveTop" } },
      { "type": "CasinoGameRail", "props": { "variant": "liveRoulette" } },
      { "type": "LatestWinners" },
      { "type": "CasinoProviders" },
      { "type": "CasinoGameRail", "props": { "variant": "liveBlackjack" } },
      { "type": "CasinoGameRail", "props": { "variant": "liveBaccarat" } },
      { "type": "CasinoGameRail", "props": { "variant": "liveGameShows" } },
      { "type": "CasinoGameRail", "props": { "variant": "livePoker" } }
    ],
    "casinoFavorites": [
      { "type": "CasinoGameRail", "props": { "variant": "favRecent" } },
      { "type": "CasinoGameRail", "props": { "variant": "favPlayed" } },
      { "type": "CasinoGameRail", "props": { "variant": "favSlots" } },
      { "type": "CasinoGameRail", "props": { "variant": "favLive" } },
      { "type": "CasinoGameRail", "props": { "variant": "favDiscover" } }
    ],
    "casinoTournaments": [
      { "type": "CasinoTournamentRail", "props": { "variant": "active" } },
      { "type": "CasinoGameRail", "props": { "variant": "tourSoon" } },
      { "type": "CasinoGameRail", "props": { "variant": "tourMine" } },
      { "type": "CasinoGameRail", "props": { "variant": "tourDone" } }
    ]
  }
}`;

export const casinoGameRailProps = [
  {
    name: "variant",
    type: '"rank" | "time" | "popular" | "topGames" | "launches" | "jackpots" | "megaways" | "forYou" | "basedOn" | "similar" | "trending" | "upcoming" | "liveTop" | "liveRoulette" | "liveBlackjack" | "liveBaccarat" | "liveGameShows" | "livePoker" | "favRecent" | "favPlayed" | "favSlots" | "favLive" | "favDiscover" | "tourSoon" | "tourMine" | "tourDone"',
    default: '"rank"',
    description: "Preset: título, icono y mock de items.",
  },
  {
    name: "title",
    type: "string",
    default: "según variant",
    description: "Título de la fila. Override del preset.",
  },
  {
    name: "icon",
    type: '"trophy" | "clock" | "flame" | "sparkles" | "coins" | "gem" | "star" | "gamepad" | "users" | "trending" | "dices" | "cards" | "tent" | "spade" | "heart" | "calendar" | "target" | "check"',
    default: "según variant",
    description: "Icono serializable del título.",
  },
  {
    name: "items",
    type: "CasinoGameRailCardData[]",
    default: "mock del variant",
    description: "Cards del riel (id, title, provider, image, badge?, badgeTone?, rtp?, titleTone?, highlight?, caption?, captionTone?).",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: "según variant",
    description: "Label de la acción a la derecha del título. Finalizados usa Ver historial.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback de Ver. El host navega. Sin react-router en la lib.",
  }
] as const;

export const casinoPromoCardUsageCode = `import { CasinoPromoCard } from "@wl/sections-library";
// o en el playground:
import { CasinoPromoCard } from "@sections/casino/casinoPromoCard";

<CasinoPromoCard />
<CasinoPromoCard
  title="100% hasta $500 + 50 FS"
  onCtaPress={() => claimPromo()}
/>
`;

export const casinoPromoCardJsonExample = `{
  "layout": {
    "casino": {
      "promo": { "type": "CasinoPromoCard" },
      "menu": { "type": "CasinoMenu" }
    }
  },
  "pages": {
    "casino": []
  }
}`;

export const casinoPromoCardProps = [
  {
    name: "badge",
    type: "string",
    default: "\"Promoción\"",
    description: "Chip superior de la card.",
  },
  {
    name: "title",
    type: "string",
    default: "\"100% hasta $500 + 50 FS\"",
    description: "Título de la promo.",
  },
  {
    name: "subtitle",
    type: "string",
    default: "\"Válido hasta el 30 de abril\"",
    description: "Texto secundario (vigencia).",
  },
  {
    name: "cta",
    type: "string",
    default: "\"Reclamar\"",
    description: "Label del botón.",
  },
  {
    name: "onCtaPress",
    type: "() => void",
    default: "—",
    description: "Callback del CTA. El host reclama / navega. Sin react-router en la lib.",
  }
] as const;

export const casinoMenuUsageCode = `import { CasinoMenu } from "@wl/sections-library";
// o en el playground:
import { CasinoMenu } from "@sections/casino/casinoMenu";

<CasinoMenu />
<CasinoMenu
  activeId="lobby"
  onItemPress={(id) => navigate(pathById[id])}
/>
`;

export const casinoMenuJsonExample = `{
  "layout": {
    "casino": {
      "promo": { "type": "CasinoPromoCard" },
      "menu": { "type": "CasinoMenu" }
    }
  },
  "pages": {
    "casino": []
  }
}`;

export const casinoMenuProps = [
  {
    name: "items",
    type: "CasinoMenuItem[]",
    default: "Lobby / Para mi / En vivo / Favoritos / Torneos",
    description:
      "Items a renderizar. Orden = orden visual. Serializable para JSON/BO (id, label, icon, path, end).",
  },
  {
    name: "activeId",
    type: "string",
    default: "—",
    description: "Item activo controlado (típicamente derivado de la ruta en el host).",
  },
  {
    name: "defaultActiveId",
    type: "string",
    default: '"lobby"',
    description: "Activo inicial cuando no hay activeId controlado.",
  },
  {
    name: "onItemPress",
    type: "(id: string) => void",
    default: "—",
    description:
      "Callback al tocar un item. El host navega. Sin react-router en la lib.",
  }
] as const;

export const casinoGameFilterUsageCode = `import { CasinoGameFilter } from "@wl/sections-library";
// o en el playground:
import { CasinoGameFilter } from "@sections/casino/casinoGameFilter";

<CasinoGameFilter />
<CasinoGameFilter variant="live" />
<CasinoGameFilter
  activeId="all"
  onItemPress={(id) => setFilter(id)}
/>
`;

export const casinoGameFilterJsonExample = `{
  "pages": {
    "casino": [
      { "type": "CasinoGameFilter" },
      { "type": "FeaturedGames" }
    ],
    "casinoLive": [
      { "type": "CasinoGameFilter", "props": { "variant": "live" } }
    ]
  }
}`;

export const casinoGameFilterProps = [
  {
    name: "variant",
    type: '"lobby" | "live"',
    default: '"lobby"',
    description: "Preset de chips. lobby = categorías con icono; live = Todos / Ruleta / Blackjack / Baccarat / Game Shows / Poker.",
  },
  {
    name: "items",
    type: "CasinoGameFilterItem[]",
    default: "según variant",
    description:
      "Chips a renderizar. Orden = orden visual. Serializable para JSON/BO (id, label, icon?).",
  },
  {
    name: "activeId",
    type: "string",
    default: "—",
    description: "Chip activo controlado.",
  },
  {
    name: "defaultActiveId",
    type: "string",
    default: '"all"',
    description: "Activo inicial cuando no hay activeId controlado.",
  },
  {
    name: "onItemPress",
    type: "(id: string) => void",
    default: "—",
    description: "Callback al tocar un chip. El host filtra. Sin react-router en la lib.",
  }
] as const;

export const casinoProvidersUsageCode = `import { CasinoProviders } from "@wl/sections-library";
// o en el playground:
import { CasinoProviders } from "@sections/casino/casinoProviders";

<CasinoProviders />
<CasinoProviders
  activeId="all"
  onFilterPress={(id) => setProvider(id)}
  onSearchPress={() => openSearch()}
/>
`;

export const casinoProvidersJsonExample = `{
  "pages": {
    "casino": [
      { "type": "CasinoProviders" },
      { "type": "CasinoGameRail", "props": { "variant": "launches" } },
      { "type": "CasinoGameRail", "props": { "variant": "jackpots" } },
      { "type": "CasinoGameRail", "props": { "variant": "megaways" } }
    ]
  }
}`;

export const casinoProvidersProps = [
  {
    name: "title",
    type: "string",
    default: '"Proveedores"',
    description: "Título de la sección.",
  },
  {
    name: "filters",
    type: "CasinoProviderFilterItem[]",
    default: "Todos / PRAGMATIC / DARWIN / ESPORTS",
    description: "Chips mock de proveedor (id, label).",
  },
  {
    name: "activeId",
    type: "string",
    default: "—",
    description: "Chip activo controlado.",
  },
  {
    name: "defaultActiveId",
    type: "string",
    default: '"all"',
    description: "Activo inicial cuando no hay activeId controlado.",
  },
  {
    name: "onFilterPress",
    type: "(id: string) => void",
    default: "—",
    description: "Callback al tocar un chip. El host filtra. Sin react-router en la lib.",
  },
  {
    name: "onSearchPress",
    type: "() => void",
    default: "—",
    description: "Callback del ícono de búsqueda.",
  }
] as const;

export const casinoTournamentRailUsageCode = `import { CasinoTournamentRail } from "@wl/sections-library";
// o en el playground:
import { CasinoTournamentRail } from "@sections/casino/casinoTournamentRail";

<CasinoTournamentRail variant="active" />
<CasinoTournamentRail
  title="Torneos Activos"
  onJoinPress={(id) => joinTournament(id)}
/>
`;

export const casinoTournamentRailJsonExample = `{
  "pages": {
    "casinoTournaments": [
      { "type": "CasinoTournamentRail", "props": { "variant": "active" } }
    ]
  }
}`;

export const casinoTournamentRailProps = [
  {
    name: "variant",
    type: '"active"',
    default: '"active"',
    description: "Preset: título e items mock.",
  },
  {
    name: "title",
    type: "string",
    default: "según variant",
    description: "Título de la sección. Override del preset.",
  },
  {
    name: "items",
    type: "CasinoTournamentCardData[]",
    default: "mock del variant",
    description: "Cards (id, title, prize, players, time, tone, badge?, ctaLabel?).",
  },
  {
    name: "seeAllLabel",
    type: "string",
    default: '"Ver"',
    description: "Label de la acción a la derecha del título.",
  },
  {
    name: "onSeeAllPress",
    type: "() => void",
    default: "—",
    description: "Callback de Ver. El host navega. Sin react-router en la lib.",
  },
  {
    name: "onJoinPress",
    type: "(id: string) => void",
    default: "—",
    description: "Callback de Participar Ahora. El host resuelve la acción.",
  }
] as const;

export const profileHeaderUsageCode = `import { ProfileHeader } from "@wl/sections-library";
// o en el playground:
import { ProfileHeader } from "@sections/profileHeader";

<ProfileHeader onBack={() => navigate(-1)} />
<ProfileHeader
  name="Carlos Martínez"
  handle="@carlosmartinez"
  progress={72.5}
  onEdit={() => openEditor()}
/>`;

export const profileHeaderJsonExample = `{
  "pages": {
    "profile": [
      { "type": "ProfileHeader" }
    ]
  }
}`;

export const profileHeaderProps = [
  {
    name: "name",
    type: "string",
    default: '"Carlos Martínez"',
    description: "Nombre visible en la tarjeta.",
  },
  {
    name: "handle",
    type: "string",
    default: '"@carlosmartinez"',
    description: "Usuario, con @.",
  },
  {
    name: "vipLabel",
    type: "string",
    default: '"VIP"',
    description: "Texto del badge VIP.",
  },
  {
    name: "levelLabel",
    type: "string",
    default: '"Oro II · Nivel 8"',
    description: "Texto del badge de nivel.",
  },
  {
    name: "currentXp",
    type: "string",
    default: '"7.250 XP"',
    description: "XP actual, ya formateado.",
  },
  {
    name: "targetXp",
    type: "string",
    default: '"10.000 XP"',
    description: "XP del próximo nivel, ya formateado.",
  },
  {
    name: "progress",
    type: "number",
    default: "72.5",
    description: "Avance de 0 a 100. Se muestra como porcentaje es-AR.",
  },
  {
    name: "nextLevel",
    type: "string",
    default: '"Oro III"',
    description: "Nombre del próximo nivel.",
  },
  {
    name: "spaceLabel",
    type: "string",
    default: '"Tu espacio personal"',
    description: "Texto verde de la barra superior.",
  },
  {
    name: "onBack",
    type: "() => void",
    default: "—",
    description: "Callback de Volver. El host navega. Sin react-router en la lib.",
  },
  {
    name: "onEdit",
    type: "() => void",
    default: "—",
    description: "Callback de Editar.",
  },
] as const;

export const profileMenuUsageCode = `import { ProfileMenu } from "@wl/sections-library";
// o en el playground:
import { ProfileMenu } from "@sections/profileMenu";

<ProfileMenu activeId="profile" onItemPress={(id) => navigate(paths[id])} />`;

export const profileMenuJsonExample = `{
  "pages": {
    "profile": [
      { "type": "ProfileHeader" },
      { "type": "ProfileMenu" }
    ]
  }
}`;

export const profileMenuProps = [
  {
    name: "items",
    type: "ProfileMenuItem[]",
    default: "profileMenuItems",
    description: "Ítems del menú: id, label e icon.",
  },
  {
    name: "activeId",
    type: "string",
    default: "—",
    description: "Ítem activo. Lo controla el host según la ruta.",
  },
  {
    name: "defaultActiveId",
    type: "string",
    default: '"profile"',
    description: "Activo inicial si no hay activeId.",
  },
  {
    name: "onItemPress",
    type: "(id: string) => void",
    default: "—",
    description: "Callback del ítem. El host navega a la subruta. Sin react-router en la lib.",
  },
] as const;

export const profilePersonalInfoUsageCode = `import { ProfilePersonalInfo } from "@wl/sections-library";
// o en el playground:
import { ProfilePersonalInfo } from "@sections/profilePersonalInfo";

<ProfilePersonalInfo onEdit={() => openEditor()} />`;

export const profilePersonalInfoJsonExample = `{
  "pages": {
    "profileOverview": [
      { "type": "ProfilePersonalInfo" }
    ]
  }
}`;

export const profilePersonalInfoProps = [
  {
    name: "title",
    type: "string",
    default: '"Todo sobre tu cuenta"',
    description: "Título sobre la tarjeta.",
  },
  {
    name: "subtitle",
    type: "string",
    default: '"Tus datos, tu estado y tus beneficios. En un solo lugar."',
    description: "Bajada del título.",
  },
  {
    name: "sectionTitle",
    type: "string",
    default: '"Información personal"',
    description: "Título dentro de la tarjeta.",
  },
  {
    name: "sectionDescription",
    type: "string",
    default: '"Mantén tus datos actualizados."',
    description: "Texto bajo el título de la tarjeta.",
  },
  {
    name: "editLabel",
    type: "string",
    default: '"Editar"',
    description: "Texto del botón de edición.",
  },
  {
    name: "fields",
    type: "ProfilePersonalInfoField[]",
    default: "profilePersonalInfoFields",
    description: "Filas de datos: id, icon, label y value.",
  },
  {
    name: "privacyLabel",
    type: "string",
    default: '"Solo tú puedes ver esta información."',
    description: "Aviso al pie de la tarjeta.",
  },
  {
    name: "onEdit",
    type: "() => void",
    default: "—",
    description: "Se llama al abrir el modal de edición. El modal vive en la sección.",
  },
] as const;

export const profileVerificationUsageCode = `import { ProfileVerification } from "@wl/sections-library";
// o en el playground:
import { ProfileVerification } from "@sections/profileVerification";

<ProfileVerification onAction={() => openVerification()} />`;

export const profileVerificationJsonExample = `{
  "pages": {
    "profileOverview": [
      { "type": "ProfilePersonalInfo" },
      { "type": "ProfileVerification" }
    ]
  }
}`;

export const profileVerificationProps = [
  {
    name: "title",
    type: "string",
    default: '"Completa la verificación"',
    description: "Título del aviso.",
  },
  {
    name: "description",
    type: "string",
    default: '"Identidad y domicilio pendientes"',
    description: "Detalle bajo el título.",
  },
  {
    name: "actionLabel",
    type: "string",
    default: '"Completar"',
    description: "Texto del botón.",
  },
  {
    name: "onAction",
    type: "() => void",
    default: "—",
    description: "Callback de Completar. El host navega. Sin react-router en la lib.",
  },
] as const;

export const profileRewardsUsageCode = `import { ProfileRewards } from "@wl/sections-library";
// o en el playground:
import { ProfileRewards } from "@sections/profileRewards";

<ProfileRewards
  progress={72.5}
  onBenefits={() => openBenefits()}
  onLevelPress={() => openLevel()}
/>`;

export const profileRewardsJsonExample = `{
  "pages": {
    "profileOverview": [
      { "type": "ProfilePersonalInfo" },
      { "type": "ProfileVerification" },
      { "type": "ProfileRewards" }
    ]
  }
}`;

export const profileRewardsProps = [
  {
    name: "title",
    type: "string",
    default: '"Nivel y recompensas"',
    description: "Título de la tarjeta.",
  },
  {
    name: "benefitsLabel",
    type: "string",
    default: '"Beneficios"',
    description: "Texto del botón superior.",
  },
  {
    name: "currentLabel",
    type: "string",
    default: '"Nivel actual"',
    description: "Etiqueta sobre el nivel actual.",
  },
  {
    name: "levelName",
    type: "string",
    default: '"Oro II"',
    description: "Nombre del nivel actual.",
  },
  {
    name: "levelNumber",
    type: "string",
    default: '"Nv. 8"',
    description: "Número de nivel.",
  },
  {
    name: "nextLabel",
    type: "string",
    default: '"Siguiente nivel"',
    description: "Etiqueta del próximo nivel.",
  },
  {
    name: "nextLevel",
    type: "string",
    default: '"Oro III"',
    description: "Nombre del próximo nivel.",
  },
  {
    name: "xpLabel",
    type: "string",
    default: '"7.250 / 10.000 XP"',
    description: "XP actual y objetivo, ya formateado.",
  },
  {
    name: "progress",
    type: "number",
    default: "72.5",
    description: "Avance de 0 a 100. Se muestra como porcentaje es-AR.",
  },
  {
    name: "remainingPrefix",
    type: "string",
    default: '"Te faltan"',
    description: "Texto antes del XP restante.",
  },
  {
    name: "remainingXp",
    type: "string",
    default: '"2.750 XP"',
    description: "XP restante, en negrita.",
  },
  {
    name: "remainingSuffix",
    type: "string",
    default: '"para el siguiente nivel."',
    description: "Texto después del XP restante.",
  },
  {
    name: "onBenefits",
    type: "() => void",
    default: "—",
    description: "Callback de Beneficios. El host navega. Sin react-router en la lib.",
  },
  {
    name: "onLevelPress",
    type: "() => void",
    default: "—",
    description: "Callback del nivel actual. El host navega.",
  },
] as const;

export const profileReferralUsageCode = `import { ProfileReferral } from "@wl/sections-library";
// o en el playground:
import { ProfileReferral } from "@sections/profileReferral";

<ProfileReferral
  code="CARLOS8"
  onInvite={() => openInvite()}
  onHelp={() => openReferralHelp()}
/>`;

export const profileReferralJsonExample = `{
  "pages": {
    "profileOverview": [
      { "type": "ProfileRewards" },
      { "type": "ProfileReferral" }
    ]
  }
}`;

export const profileReferralProps = [
  {
    name: "title",
    type: "string",
    default: '"Lo bueno se comparte"',
    description: "Título de la tarjeta.",
  },
  {
    name: "description",
    type: "string",
    default: '"Invita a tus amigos con tu código personal."',
    description: "Bajada bajo el título.",
  },
  {
    name: "code",
    type: "string",
    default: '"CARLOS8"',
    description: "Código personal. Se muestra en mayúsculas.",
  },
  {
    name: "inviteLabel",
    type: "string",
    default: '"Invitar"',
    description: "Texto del botón de invitar.",
  },
  {
    name: "helpLabel",
    type: "string",
    default: '"Cómo funcionan los referidos"',
    description: "Texto del enlace inferior.",
  },
  {
    name: "onCopy",
    type: "(code: string) => void",
    default: "—",
    description: "Se llama al copiar. El componente también escribe el código en el portapapeles.",
  },
  {
    name: "onInvite",
    type: "() => void",
    default: "—",
    description: "Callback de Invitar. El host resuelve la acción.",
  },
  {
    name: "onHelp",
    type: "() => void",
    default: "—",
    description: "Callback de Cómo funcionan los referidos. El host navega.",
  },
] as const;

export const profileAccountVerificationUsageCode = `import { ProfileAccountVerification } from "@wl/sections-library";
// o en el playground:
import { ProfileAccountVerification } from "@sections/profileAccountVerification";

<ProfileAccountVerification
  onBack={() => goToProfile()}
  onItemPress={(id) => openVerification(id)}
  onExamples={() => openExamples()}
/>`;

export const profileAccountVerificationJsonExample = `{
  "pages": {
    "profileSecurity": [
      { "type": "ProfileAccountVerification" }
    ]
  }
}`;

export const profileAccountVerificationProps = [
  {
    name: "backLabel",
    type: "string",
    default: '"Volver a mi perfil"',
    description: "Texto del enlace superior.",
  },
  {
    name: "groupLabel",
    type: "string",
    default: '"Seguridad"',
    description: "Primer tramo del breadcrumb.",
  },
  {
    name: "title",
    type: "string",
    default: '"Verificación de cuenta"',
    description: "Título y segundo tramo del breadcrumb.",
  },
  {
    name: "items",
    type: "ProfileAccountVerificationItem[]",
    default: "profileAccountVerificationItems",
    description: "Filas: id, label y status pending | verified.",
  },
  {
    name: "pendingLabel",
    type: "string",
    default: '"Pendiente"',
    description: "Texto del estado pendiente.",
  },
  {
    name: "verifiedLabel",
    type: "string",
    default: '"Verificado"',
    description: "Texto del estado verificado.",
  },
  {
    name: "note",
    type: "string",
    default: '"La documentación requiere revisión..."',
    description: "Aviso bajo la lista.",
  },
  {
    name: "examplesLabel",
    type: "string",
    default: '"Ver estados de ejemplo"',
    description: "Texto del enlace inferior.",
  },
  {
    name: "onBack",
    type: "() => void",
    default: "—",
    description: "Vuelve a Mi Perfil. El host navega. Sin react-router en la lib.",
  },
  {
    name: "onItemPress",
    type: "(id: string) => void",
    default: "—",
    description: "Callback de una fila pendiente. El host abre el flujo.",
  },
  {
    name: "onExamples",
    type: "() => void",
    default: "—",
    description: "Callback de Ver estados de ejemplo.",
  },
] as const;

export const profileIdentityVerificationUsageCode = `import { ProfileIdentityVerification } from "@wl/sections-library";
// o en el playground:
import { ProfileIdentityVerification } from "@sections/profileIdentityVerification";

<ProfileIdentityVerification
  onBack={() => goToSecurity()}
  onPrepare={() => prepareVerification()}
/>`;

export const profileIdentityVerificationJsonExample = `{
  "pages": {
    "profileIdentity": [
      { "type": "ProfileIdentityVerification" }
    ]
  }
}`;

export const profileIdentityVerificationProps = [
  {
    name: "backLabel",
    type: "string",
    default: '"Volver a verificación de cuenta"',
    description: "Texto del enlace superior.",
  },
  {
    name: "title",
    type: "string",
    default: '"Verificación de identidad"',
    description: "Título de la tarjeta inicial.",
  },
  {
    name: "description",
    type: "string",
    default: '"Tu documento, una selfie y un comprobante de domicilio. Te guiamos paso a paso."',
    description: "Bajada de la tarjeta inicial.",
  },
  {
    name: "onBack",
    type: "() => void",
    default: "—",
    description: "Vuelve a Seguridad. El host navega. Sin react-router en la lib.",
  },
  {
    name: "onPrepare",
    type: "() => void",
    default: "—",
    description: "Se habilita con los 4 archivos y la confirmación. El host continúa.",
  },
] as const;




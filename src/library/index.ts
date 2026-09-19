export { theme, createTheme } from "@shared/theme/Theme";
export { sectionRegistry, sectionCatalog } from "@sections/registry";
export type {
  SectionType,
  SectionDefinition,
  SectionScope,
} from "@sections/types";

export { GlobalNav } from "@sections/globalNav";
export type {
  BalanceOption,
  BalanceVariant,
  JackpotItem,
  JackpotVariant,
} from "@sections/globalNav";
export { Footer } from "@sections/footer";
export type {
  FooterNavLink,
  FooterNavSection,
  FooterSocialId,
  FooterSocialItem,
} from "@sections/footer";
export {
  ShortcutsNav,
  shortcutsNavDefaultActiveId,
  shortcutsNavItems,
} from "@sections/shortcutsNav";
export type {
  ShortcutsNavItem,
  ShortcutsNavItemIconId,
  ShortcutsNavItemKind,
} from "@sections/shortcutsNav";

export {
  CasinoGames,
  FeaturedPromotions,
  HeroBanner,
  HeroPlaceholder,
  Recommendations,
  SportsEvents,
} from "@sections/home";
export type {
  CasinoGameBadgeVariant,
  CasinoGameCardData,
  FeaturedPromoCardData,
  HeroBannerSlideData,
  PromoBadgeVariant,
  RecommendationBadgeVariant,
  RecommendationCardData,
  SportsEventCardData,
  SportsEventOdd,
} from "@sections/home";
export { LatestWinners } from "@sections/latestWinners";
export type { LatestWinnerCardData, LatestWinnersTab } from "@sections/latestWinners";
export {
  CasinoMenu,
  CasinoPromoCard,
  CasinoGameRail,
  CasinoGameFilter,
  CasinoProviders,
  CasinoTournamentRail,
  FeaturedGames,
  casinoMenuDefaultActiveId,
  casinoMenuItems,
  casinoPromoCard,
  casinoGameFilterDefaultActiveId,
  casinoGameFilterItems,
  casinoLiveFilterItems,
  casinoProviderFilters,
  casinoProvidersDefaultActiveId,
  casinoProvidersTitle,
} from "@sections/casino";
export type {
  CasinoMenuItem,
  CasinoMenuItemIconId,
  CasinoPromoCardData,
  CasinoGameRailCardData,
  CasinoGameRailCaptionTone,
  CasinoGameRailProps,
  CasinoGameRailTitleTone,
  CasinoGameRailVariant,
  CasinoGameFilterIconId,
  CasinoGameFilterItem,
  CasinoGameFilterProps,
  CasinoGameFilterVariant,
  CasinoProviderFilterItem,
  CasinoProvidersProps,
  CasinoTournamentCardData,
  CasinoTournamentRailProps,
  CasinoTournamentRailVariant,
  CasinoTournamentTone,
  FeaturedGameCardData,
} from "@sections/casino";

export { Button } from "@shared/ui/buttons/button/Button";
export { FloatingButton } from "@shared/ui/buttons/floatingButton/FloatingButton";
export { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
export { Carousel } from "@shared/ui/carousels/carousel/Carousel";
export { GlobalContainer } from "@shared/ui/containers/globalContainer/GlobalContainer";
export { CountryFlag } from "@shared/ui/flags/countryFlag/CountryFlag";
export type { CountryCode } from "@shared/ui/flags/countryFlag/CountryFlag";
export { Switch } from "@shared/ui/inputs/switch/Switch";
export { TextInput } from "@shared/ui/inputs/textInput/TextInput";
export { OffCanvas } from "@shared/ui/overlays/offCanvas/OffCanvas";
export type { OffCanvasSide, OffCanvasSurface } from "@shared/ui/overlays/offCanvas/OffCanvas";
export { Tag } from "@shared/ui/tags/tag/Tag";

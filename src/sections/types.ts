export type SectionType =
  | "GlobalNav"
  | "Footer"
  | "ShortcutsNav"
  | "HeroBanner"
  | "FeaturedPromotions"
  | "Recommendations"
  | "SportsEvents"
  | "CasinoGames"
  | "LatestWinners"
  | "HeroPlaceholder"
  | "FeaturedGames"
  | "CasinoMenu"
  | "CasinoPromoCard"
  | "CasinoGameRail"
  | "CasinoGameFilter"
  | "CasinoProviders"
  | "CasinoTournamentRail";

export type SectionScope = "global" | "home" | "casino" | "shared";

export interface SectionDefinition {
  type: SectionType;
  label: string;
  description: string;
  scope: SectionScope;
}

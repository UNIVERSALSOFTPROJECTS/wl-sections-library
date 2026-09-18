import type { CasinoGameFilterItem, CasinoGameFilterVariant } from "./types";

export const casinoGameFilterDefaultActiveId = "all";

export const casinoGameFilterItems: CasinoGameFilterItem[] = [
  { id: "all", label: "Todos los juegos", icon: "gamepad" },
  { id: "launches", label: "Lanzamientos", icon: "bolt" },
  { id: "popular", label: "Populares", icon: "trending" },
  { id: "featured", label: "Destacados", icon: "sparkles" },
  { id: "jackpots", label: "Jackpots", icon: "crown" },
  { id: "interactive", label: "Juegos interactivos", icon: "dices" },
  { id: "bonus-buy", label: "Compra de bonus", icon: "gift" },
];

export const casinoLiveFilterItems: CasinoGameFilterItem[] = [
  { id: "all", label: "Todos" },
  { id: "roulette", label: "Ruleta" },
  { id: "blackjack", label: "Blackjack" },
  { id: "baccarat", label: "Baccarat" },
  { id: "game-shows", label: "Game Shows" },
  { id: "poker", label: "Poker" },
];

export const casinoGameFilterItemsByVariant: Record<
  CasinoGameFilterVariant,
  CasinoGameFilterItem[]
> = {
  lobby: casinoGameFilterItems,
  live: casinoLiveFilterItems,
};

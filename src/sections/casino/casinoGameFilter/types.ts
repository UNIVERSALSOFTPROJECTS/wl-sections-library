export type CasinoGameFilterVariant = "lobby" | "live";

export type CasinoGameFilterIconId =
  | "gamepad"
  | "bolt"
  | "trending"
  | "sparkles"
  | "crown"
  | "dices"
  | "gift";

export interface CasinoGameFilterItem {
  id: string;
  label: string;
  icon?: CasinoGameFilterIconId;
}

export interface CasinoGameFilterProps {
  variant?: CasinoGameFilterVariant;
  items?: CasinoGameFilterItem[];
  activeId?: string;
  defaultActiveId?: string;
  onItemPress?: (id: string) => void;
}

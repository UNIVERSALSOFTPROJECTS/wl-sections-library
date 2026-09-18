export type CasinoMenuItemIconId =
  | "gamepad"
  | "star"
  | "dices"
  | "heart"
  | "trophy";

export interface CasinoMenuItem {
  id: string;
  label: string;
  icon: CasinoMenuItemIconId;
  path?: string;
  end?: boolean;
}

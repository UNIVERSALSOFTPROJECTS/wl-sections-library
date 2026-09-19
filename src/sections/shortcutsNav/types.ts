export type ShortcutsNavItemKind = "link" | "center" | "action";

export type ShortcutsNavItemIconId =
  | "dices"
  | "trophy"
  | "flag"
  | "circlesFour";

export interface ShortcutsNavItem {
  id: string;
  label: string;
  kind: ShortcutsNavItemKind;
  icon?: ShortcutsNavItemIconId;
  path?: string;
}

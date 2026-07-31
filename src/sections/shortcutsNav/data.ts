import type { ShortcutsNavItem } from "./types";

export const shortcutsNavDefaultActiveId = "home";

export const shortcutsNavItems: ShortcutsNavItem[] = [
  { id: "casino", label: "Casino", kind: "link", icon: "dices" },
  { id: "deportes", label: "Deportes", kind: "link", icon: "trophy" },
  { id: "home", label: "Inicio", kind: "center", path: "/" },
  { id: "hipicas", label: "Hípicas", kind: "link", icon: "flag", path: "/horse-racing" },
  { id: "mas", label: "Más", kind: "action", icon: "circlesFour" },
];

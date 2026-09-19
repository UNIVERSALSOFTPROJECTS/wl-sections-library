import type { CasinoMenuItem } from "./types";

export const casinoMenuDefaultActiveId = "lobby";

export const casinoMenuItems: CasinoMenuItem[] = [
  {
    id: "lobby",
    label: "Mi\nlobby",
    path: "/casino",
    icon: "gamepad",
    end: true,
  },
  {
    id: "recommended",
    label: "Para\nmi",
    path: "/casino/recommended",
    icon: "star",
  },
  {
    id: "live",
    label: "Casino\nen vivo",
    path: "/casino/live",
    icon: "dices",
  },
  {
    id: "favorites",
    label: "Mis\nfavoritos",
    path: "/casino/favorites",
    icon: "heart",
  },
  {
    id: "tournaments",
    label: "Mis\ntorneos",
    path: "/casino/tournaments",
    icon: "trophy",
  },
];

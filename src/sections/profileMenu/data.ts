import type { ProfileMenuItem } from "./types";

export const profileMenuDefaultActiveId = "profile";

export const profileMenuItems: ProfileMenuItem[] = [
  { id: "profile", label: "Mi perfil", icon: "user" },
  { id: "transactions", label: "Transacciones", icon: "swap" },
  { id: "bonuses", label: "Bonos", icon: "gift" },
  { id: "security", label: "Seguridad", icon: "shield" },
  { id: "responsible", label: "Juego responsable", icon: "scale" },
  { id: "preferences", label: "Preferencias", icon: "sliders" },
];

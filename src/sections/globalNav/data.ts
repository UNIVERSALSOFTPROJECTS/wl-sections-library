import type { BalanceOption, BalanceVariant, JackpotItem, ProfileMenuUser } from "./types";

export const balanceOptions: BalanceOption[] = [
  { id: "bonus", label: "Bono", amount: "$ 0,00" },
  { id: "withdrawable", label: "Retirable", amount: "$ 0,00" },
  { id: "deposited", label: "Depositado", amount: "$ 0,00" },
];

export const balanceDefaultId: BalanceVariant = "withdrawable";

export const jackpotItems: JackpotItem[] = [
  {
    id: "mega",
    variant: "mega",
    label: "Mega Jackpot",
    amount: "$ 1.272.887,",
  },
  {
    id: "major",
    variant: "major",
    label: "Major Jackpot",
    amount: "$ 359.180,6",
  },
];

export const defaultProfileUser: ProfileMenuUser = {
  name: "Usuario Premium",
  email: "user@email.com",
  vipLevel: "Nivel 3 - Gold",
  vipProgress: 62,
  vipPointsRemaining: "350 pts para Nivel 4",
  balance: "$ 0.00",
  promotionsCount: 3,
};

export const defaultSearchPlaceholder = "Buscar juegos o pregúntale a la IA...";
export const defaultNotificationBadge = 2;

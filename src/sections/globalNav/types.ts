export type JackpotVariant = "mega" | "major";

export interface JackpotItem {
  id: string;
  variant: JackpotVariant;
  label: string;
  amount: string;
}

export type BalanceVariant = "bonus" | "withdrawable" | "deposited";

export interface BalanceOption {
  id: BalanceVariant;
  label: string;
  amount: string;
}

export interface ProfileMenuUser {
  name: string;
  email: string;
  vipLevel: string;
  /** 0 a 100. */
  vipProgress: number;
  vipPointsRemaining: string;
  balance: string;
  promotionsCount?: number;
}

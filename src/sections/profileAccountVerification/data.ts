import type { ProfileAccountVerificationItem } from "./types";

export const profileAccountVerificationItems: ProfileAccountVerificationItem[] = [
  { id: "identity", label: "Identidad", status: "pending" },
  { id: "address", label: "Domicilio", status: "pending" },
  { id: "email", label: "Email", status: "verified" },
  { id: "phone", label: "Teléfono", status: "verified" },
];

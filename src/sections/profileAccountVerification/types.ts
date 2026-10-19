export type ProfileAccountVerificationStatus = "pending" | "verified";

export interface ProfileAccountVerificationItem {
  id: string;
  label: string;
  status: ProfileAccountVerificationStatus;
}

export interface ProfileAccountVerificationProps {
  backLabel?: string;
  groupLabel?: string;
  title?: string;
  items?: ProfileAccountVerificationItem[];
  pendingLabel?: string;
  verifiedLabel?: string;
  note?: string;
  examplesLabel?: string;
  onBack?: () => void;
  onItemPress?: (id: string) => void;
  onExamples?: () => void;
}

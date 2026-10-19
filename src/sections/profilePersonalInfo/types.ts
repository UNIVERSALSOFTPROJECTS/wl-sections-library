export type ProfilePersonalInfoIconId =
  | "mail"
  | "phone"
  | "pin"
  | "calendar"
  | "fingerprint";

export interface ProfilePersonalInfoField {
  id: string;
  icon: ProfilePersonalInfoIconId;
  label: string;
  value: string;
}

export interface ProfileEditFormValues {
  fullName: string;
  username: string;
  email: string;
  phone: string;
  location: string;
  birthdate: string;
}

export interface ProfilePersonalInfoProps {
  title?: string;
  subtitle?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  editLabel?: string;
  fields?: ProfilePersonalInfoField[];
  privacyLabel?: string;
  onEdit?: () => void;
}

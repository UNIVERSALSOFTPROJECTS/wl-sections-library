export type ProfileMenuIconId =
  | "user"
  | "swap"
  | "gift"
  | "shield"
  | "scale"
  | "sliders";

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon: ProfileMenuIconId;
}

export interface ProfileMenuProps {
  items?: ProfileMenuItem[];
  activeId?: string;
  defaultActiveId?: string;
  onItemPress?: (id: string) => void;
}

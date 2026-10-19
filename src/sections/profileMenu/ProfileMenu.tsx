import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  GiftIcon,
  ScaleIcon,
  ShieldIcon,
  SlidersIcon,
  SwapIcon,
  UserIcon,
} from "@assets/icons";
import { profileMenuDefaultActiveId, profileMenuItems as defaultItems } from "./data";
import {
  ProfileMenuElement,
  ProfileMenuIconElement,
  ProfileMenuItemElement,
} from "./ProfileMenu.elements";
import type { ProfileMenuIconId, ProfileMenuProps } from "./types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const menuIcons: Record<ProfileMenuIconId, IconComponent> = {
  user: UserIcon,
  swap: SwapIcon,
  gift: GiftIcon,
  shield: ShieldIcon,
  scale: ScaleIcon,
  sliders: SlidersIcon,
};

export const ProfileMenu = ({
  items = defaultItems,
  activeId: controlledActiveId,
  defaultActiveId = profileMenuDefaultActiveId,
  onItemPress,
}: ProfileMenuProps) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId);
  const activeId = controlledActiveId ?? internalActiveId;
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    itemRefs.current[activeId]?.scrollIntoView({
      inline: "nearest",
      block: "nearest",
    });
  }, [activeId]);

  const handlePress = (id: string) => {
    if (controlledActiveId === undefined) {
      setInternalActiveId(id);
    }

    onItemPress?.(id);
  };

  return (
    <ProfileMenuElement aria-label="Secciones del perfil">
      {items.map((item) => {
        const Icon = menuIcons[item.icon];
        const isActive = activeId === item.id;

        return (
          <ProfileMenuItemElement
            key={item.id}
            ref={(node) => {
              itemRefs.current[item.id] = node;
            }}
            type="button"
            aria-current={isActive ? "page" : undefined}
            $active={isActive}
            onClick={() => handlePress(item.id)}
          >
            <ProfileMenuIconElement aria-hidden>
              <Icon />
            </ProfileMenuIconElement>
            {item.label}
          </ProfileMenuItemElement>
        );
      })}
    </ProfileMenuElement>
  );
};

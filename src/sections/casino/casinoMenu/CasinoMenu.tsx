import { useState, type ComponentType, type SVGProps } from "react";
import {
  DicesIcon,
  GamepadIcon,
  HeartIcon,
  OutlineStarIcon,
  TrophyIcon,
} from "@assets/icons";
import {
  casinoMenuDefaultActiveId,
  casinoMenuItems as defaultItems,
} from "./data";
import type { CasinoMenuItem, CasinoMenuItemIconId } from "./types";
import {
  CasinoMenuElement,
  CasinoMenuIconElement,
  CasinoMenuItemElement,
  CasinoMenuLabelElement,
} from "./CasinoMenu.elements";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const menuIcons: Record<CasinoMenuItemIconId, IconComponent> = {
  gamepad: GamepadIcon,
  star: OutlineStarIcon,
  dices: DicesIcon,
  heart: HeartIcon,
  trophy: TrophyIcon,
};

interface CasinoMenuProps {
  items?: CasinoMenuItem[];
  activeId?: string;
  defaultActiveId?: string;
  onItemPress?: (id: string) => void;
}

export const CasinoMenu = ({
  items = defaultItems,
  activeId: controlledActiveId,
  defaultActiveId = casinoMenuDefaultActiveId,
  onItemPress,
}: CasinoMenuProps) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId);
  const activeId = controlledActiveId ?? internalActiveId;

  const handlePress = (id: string) => {
    if (controlledActiveId === undefined) {
      setInternalActiveId(id);
    }

    onItemPress?.(id);
  };

  return (
    <CasinoMenuElement aria-label="Casino">
      {items.map((item) => {
        const Icon = menuIcons[item.icon];
        const isActive = activeId === item.id;

        return (
          <CasinoMenuItemElement
            key={item.id}
            type="button"
            aria-current={isActive ? "page" : undefined}
            aria-label={item.label.replace("\n", " ")}
            onClick={() => handlePress(item.id)}
          >
            <CasinoMenuIconElement aria-hidden $active={isActive}>
              <Icon />
            </CasinoMenuIconElement>
            <CasinoMenuLabelElement>{item.label}</CasinoMenuLabelElement>
          </CasinoMenuItemElement>
        );
      })}
    </CasinoMenuElement>
  );
};

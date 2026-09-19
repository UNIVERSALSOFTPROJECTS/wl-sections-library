import { useState, type ComponentType, type SVGProps } from "react";
import whiteLogo from "@assets/whiteLogo.jpeg";
import {
  CirclesFourIcon,
  DicesIcon,
  FlagIcon,
  TrophyIcon,
} from "@assets/icons";
import {
  shortcutsNavDefaultActiveId,
  shortcutsNavItems as defaultItems,
} from "./data";
import type { ShortcutsNavItem, ShortcutsNavItemIconId } from "./types";
import {
  ShortcutsNavActiveIndicatorElement,
  ShortcutsNavCenterButtonElement,
  ShortcutsNavCenterIconElement,
  ShortcutsNavCenterSlotElement,
  ShortcutsNavElement,
  ShortcutsNavIconElement,
  ShortcutsNavItemElement,
  ShortcutsNavLabelElement,
} from "./ShortcutsNav.elements";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const itemIcons: Record<ShortcutsNavItemIconId, IconComponent> = {
  dices: DicesIcon,
  trophy: TrophyIcon,
  flag: FlagIcon,
  circlesFour: CirclesFourIcon,
};

interface ShortcutsNavProps {
  items?: ShortcutsNavItem[];
  activeId?: string;
  defaultActiveId?: string;
  centerLogoSrc?: string;
  onItemPress?: (id: string) => void;
}

export const ShortcutsNav = ({
  items = defaultItems,
  activeId: controlledActiveId,
  defaultActiveId = shortcutsNavDefaultActiveId,
  centerLogoSrc = whiteLogo,
  onItemPress,
}: ShortcutsNavProps) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId);
  const activeId = controlledActiveId ?? internalActiveId;

  const handlePress = (id: string) => {
    if (controlledActiveId === undefined) {
      setInternalActiveId(id);
    }

    onItemPress?.(id);
  };

  return (
    <ShortcutsNavElement aria-label="Atajos">
      {items.map((item) => {
        if (item.kind === "center") {
          return (
            <ShortcutsNavCenterSlotElement key={item.id}>
              <ShortcutsNavCenterButtonElement
                type="button"
                aria-label={item.label}
                onClick={() => handlePress(item.id)}
              >
                <ShortcutsNavCenterIconElement>
                  <img src={centerLogoSrc} alt="" />
                </ShortcutsNavCenterIconElement>
              </ShortcutsNavCenterButtonElement>
            </ShortcutsNavCenterSlotElement>
          );
        }

        const Icon = item.icon ? itemIcons[item.icon] : undefined;
        const isActive = activeId === item.id;

        return (
          <ShortcutsNavItemElement
            key={item.id}
            type="button"
            $active={isActive}
            aria-current={isActive ? "page" : undefined}
            onClick={() => handlePress(item.id)}
          >
            {Icon && (
              <ShortcutsNavIconElement>
                <Icon />
              </ShortcutsNavIconElement>
            )}
            <ShortcutsNavLabelElement>{item.label}</ShortcutsNavLabelElement>
            {isActive && <ShortcutsNavActiveIndicatorElement aria-hidden />}
          </ShortcutsNavItemElement>
        );
      })}
    </ShortcutsNavElement>
  );
};

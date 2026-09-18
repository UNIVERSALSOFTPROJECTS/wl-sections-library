import { useState, type ComponentType, type SVGProps } from "react";
import {
  BoltIcon,
  CrownIcon,
  DicesIcon,
  GamepadIcon,
  GiftIcon,
  SparklesIcon,
  TrendingUpIcon,
} from "@assets/icons";
import {
  casinoGameFilterDefaultActiveId,
  casinoGameFilterItemsByVariant,
} from "./data";
import {
  CasinoGameFilterElement,
  CasinoGameFilterIconElement,
  CasinoGameFilterItemElement,
} from "./CasinoGameFilter.elements";
import type { CasinoGameFilterIconId, CasinoGameFilterProps } from "./types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const filterIcons: Record<CasinoGameFilterIconId, IconComponent> = {
  gamepad: GamepadIcon,
  bolt: BoltIcon,
  trending: TrendingUpIcon,
  sparkles: SparklesIcon,
  crown: CrownIcon,
  dices: DicesIcon,
  gift: GiftIcon,
};

export const CasinoGameFilter = ({
  variant = "lobby",
  items,
  activeId: controlledActiveId,
  defaultActiveId = casinoGameFilterDefaultActiveId,
  onItemPress,
}: CasinoGameFilterProps) => {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId);
  const activeId = controlledActiveId ?? internalActiveId;
  const resolvedItems = items ?? casinoGameFilterItemsByVariant[variant];

  const handlePress = (id: string) => {
    if (controlledActiveId === undefined) {
      setInternalActiveId(id);
    }

    onItemPress?.(id);
  };

  return (
    <CasinoGameFilterElement
      aria-label={variant === "live" ? "Filtro de casino en vivo" : "Filtro de juegos"}
    >
      {resolvedItems.map((item) => {
        const Icon = item.icon ? filterIcons[item.icon] : null;
        const isActive = activeId === item.id;

        return (
          <CasinoGameFilterItemElement
            key={item.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => handlePress(item.id)}
            $active={isActive}
          >
            {Icon ? (
              <CasinoGameFilterIconElement aria-hidden>
                <Icon />
              </CasinoGameFilterIconElement>
            ) : null}
            {item.label}
          </CasinoGameFilterItemElement>
        );
      })}
    </CasinoGameFilterElement>
  );
};

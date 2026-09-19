import type { ComponentType } from "react";
import {
    ClockIcon,
    CoinsIcon,
    DicesIcon,
    FlameIcon,
    GamepadIcon,
    GemIcon,
    CardsIcon,
    SparklesIcon,
    SpadeIcon,
    StarIcon,
    TentIcon,
    TrendingUpIcon,
    TrophyIcon,
    UsersIcon,
    HeartIcon,
    CalendarIcon,
    TargetIcon,
    CheckCircleIcon,
} from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import {
    casinoGameRailIcons,
    casinoGameRailItems,
    casinoGameRailSeeAllLabels,
    casinoGameRailTitles,
} from "./data";
import { CasinoGameRailCard } from "./CasinoGameRailCard";
import {
    CasinoGameRailElement,
    CasinoGameRailSeeAllElement,
    CasinoGameRailTitleIconElement,
} from "./CasinoGameRail.elements";
import type { CasinoGameRailIconId, CasinoGameRailProps } from "./types";

const railIcons: Record<CasinoGameRailIconId, ComponentType> = {
    trophy: TrophyIcon,
    clock: ClockIcon,
    flame: FlameIcon,
    sparkles: SparklesIcon,
    coins: CoinsIcon,
    gem: GemIcon,
    star: StarIcon,
    gamepad: GamepadIcon,
    users: UsersIcon,
    trending: TrendingUpIcon,
    dices: DicesIcon,
    cards: CardsIcon,
    tent: TentIcon,
    spade: SpadeIcon,
    heart: HeartIcon,
    calendar: CalendarIcon,
    target: TargetIcon,
    check: CheckCircleIcon,
};

export const CasinoGameRail = ({
    variant = "rank",
    title,
    icon,
    items,
    seeAllLabel,
    onSeeAllPress,
}: CasinoGameRailProps) => {
    const resolvedTitle = title ?? casinoGameRailTitles[variant];
    const resolvedIcon = icon ?? casinoGameRailIcons[variant];
    const resolvedItems = items ?? casinoGameRailItems[variant];
    const resolvedSeeAll = seeAllLabel ?? casinoGameRailSeeAllLabels[variant];
    const Icon = railIcons[resolvedIcon];

    return (
        <CasinoGameRailElement aria-label={resolvedTitle}>
            <Carousel
                title={
                    <>
                        <CasinoGameRailTitleIconElement aria-hidden $icon={resolvedIcon}>
                            <Icon />
                        </CasinoGameRailTitleIconElement>
                        {resolvedTitle}
                    </>
                }
                action={
                    <CasinoGameRailSeeAllElement type="button" onClick={onSeeAllPress}>
                        {resolvedSeeAll}
                    </CasinoGameRailSeeAllElement>
                }
                gap={12}
                slideSize="32%"
            >
                {resolvedItems.map((game) => (
                    <CasinoGameRailCard key={game.id} game={game} variant={variant} />
                ))}
            </Carousel>
        </CasinoGameRailElement>
    );
};

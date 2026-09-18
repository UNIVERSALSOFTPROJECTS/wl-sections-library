import { TrophyIcon } from "@assets/icons";
import {
    casinoTournamentRailItems,
    casinoTournamentRailSeeAllLabel,
    casinoTournamentRailTitles,
} from "./data";
import { CasinoTournamentCard } from "./CasinoTournamentCard";
import {
    CasinoTournamentRailElement,
    CasinoTournamentRailHeaderElement,
    CasinoTournamentRailListElement,
    CasinoTournamentRailSeeAllElement,
    CasinoTournamentRailTitleElement,
} from "./CasinoTournamentRail.elements";
import type { CasinoTournamentRailProps } from "./types";

export const CasinoTournamentRail = ({
    variant = "active",
    title,
    items,
    seeAllLabel = casinoTournamentRailSeeAllLabel,
    onSeeAllPress,
    onJoinPress,
}: CasinoTournamentRailProps) => {
    const resolvedTitle = title ?? casinoTournamentRailTitles[variant];
    const resolvedItems = items ?? casinoTournamentRailItems[variant];

    return (
        <CasinoTournamentRailElement aria-label={resolvedTitle}>
            <CasinoTournamentRailHeaderElement>
                <CasinoTournamentRailTitleElement>
                    <span aria-hidden>
                        <TrophyIcon />
                    </span>
                    {resolvedTitle}
                </CasinoTournamentRailTitleElement>
                <CasinoTournamentRailSeeAllElement type="button" onClick={onSeeAllPress}>
                    {seeAllLabel}
                </CasinoTournamentRailSeeAllElement>
            </CasinoTournamentRailHeaderElement>

            <CasinoTournamentRailListElement>
                {resolvedItems.map((tournament) => (
                    <CasinoTournamentCard
                        key={tournament.id}
                        tournament={tournament}
                        onJoinPress={onJoinPress}
                    />
                ))}
            </CasinoTournamentRailListElement>
        </CasinoTournamentRailElement>
    );
};

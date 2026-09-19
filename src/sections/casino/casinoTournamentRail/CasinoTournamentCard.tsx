import { TrophyIcon } from "@assets/icons";
import {
    casinoTournamentRailBadgeLabel,
    casinoTournamentRailCtaLabel,
    casinoTournamentRailPlayersLabel,
    casinoTournamentRailPrizeLabel,
    casinoTournamentRailTimeLabel,
} from "./data";
import type { CasinoTournamentCardData } from "./types";
import {
    CasinoTournamentCardBadgeDotElement,
    CasinoTournamentCardBadgeElement,
    CasinoTournamentCardCopyElement,
    CasinoTournamentCardCtaElement,
    CasinoTournamentCardElement,
    CasinoTournamentCardIconElement,
    CasinoTournamentCardStatElement,
    CasinoTournamentCardStatLabelElement,
    CasinoTournamentCardStatsElement,
    CasinoTournamentCardStatValueElement,
    CasinoTournamentCardTitleElement,
    CasinoTournamentCardTopElement,
} from "./CasinoTournamentCard.elements";

interface CasinoTournamentCardProps {
    tournament: CasinoTournamentCardData;
    onJoinPress?: (id: string) => void;
}

export const CasinoTournamentCard = ({ tournament, onJoinPress }: CasinoTournamentCardProps) => {
    const badge = tournament.badge ?? casinoTournamentRailBadgeLabel;

    return (
        <CasinoTournamentCardElement aria-label={tournament.title}>
            <CasinoTournamentCardTopElement>
                <CasinoTournamentCardCopyElement>
                    <CasinoTournamentCardTitleElement>{tournament.title}</CasinoTournamentCardTitleElement>
                    <CasinoTournamentCardBadgeElement>
                        <CasinoTournamentCardBadgeDotElement $tone={tournament.tone} />
                        {badge}
                    </CasinoTournamentCardBadgeElement>
                </CasinoTournamentCardCopyElement>
                <CasinoTournamentCardIconElement $tone={tournament.tone} aria-hidden>
                    <TrophyIcon />
                </CasinoTournamentCardIconElement>
            </CasinoTournamentCardTopElement>

            <CasinoTournamentCardStatsElement>
                <CasinoTournamentCardStatElement>
                    <CasinoTournamentCardStatLabelElement>
                        {tournament.prizeLabel ?? casinoTournamentRailPrizeLabel}
                    </CasinoTournamentCardStatLabelElement>
                    <CasinoTournamentCardStatValueElement $highlight>
                        {tournament.prize}
                    </CasinoTournamentCardStatValueElement>
                </CasinoTournamentCardStatElement>
                <CasinoTournamentCardStatElement>
                    <CasinoTournamentCardStatLabelElement>
                        {tournament.playersLabel ?? casinoTournamentRailPlayersLabel}
                    </CasinoTournamentCardStatLabelElement>
                    <CasinoTournamentCardStatValueElement>{tournament.players}</CasinoTournamentCardStatValueElement>
                </CasinoTournamentCardStatElement>
                <CasinoTournamentCardStatElement>
                    <CasinoTournamentCardStatLabelElement>
                        {tournament.timeLabel ?? casinoTournamentRailTimeLabel}
                    </CasinoTournamentCardStatLabelElement>
                    <CasinoTournamentCardStatValueElement>{tournament.time}</CasinoTournamentCardStatValueElement>
                </CasinoTournamentCardStatElement>
            </CasinoTournamentCardStatsElement>

            <CasinoTournamentCardCtaElement type="button" onClick={() => onJoinPress?.(tournament.id)}>
                {tournament.ctaLabel ?? casinoTournamentRailCtaLabel}
            </CasinoTournamentCardCtaElement>
        </CasinoTournamentCardElement>
    );
};

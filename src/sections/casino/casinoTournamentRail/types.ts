export type CasinoTournamentRailVariant = "active";

export type CasinoTournamentTone = "warning" | "brand" | "secondary";

export interface CasinoTournamentCardData {
    id: string;
    title: string;
    badge?: string;
    prize: string;
    prizeLabel?: string;
    players: string;
    playersLabel?: string;
    time: string;
    timeLabel?: string;
    ctaLabel?: string;
    tone: CasinoTournamentTone;
}

export interface CasinoTournamentRailProps {
    variant?: CasinoTournamentRailVariant;
    title?: string;
    items?: CasinoTournamentCardData[];
    seeAllLabel?: string;
    onSeeAllPress?: () => void;
    onJoinPress?: (id: string) => void;
}

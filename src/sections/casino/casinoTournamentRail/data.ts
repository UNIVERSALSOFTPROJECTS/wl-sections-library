import type {
    CasinoTournamentCardData,
    CasinoTournamentRailVariant,
} from "./types";

export const casinoTournamentRailSeeAllLabel = "Ver";
export const casinoTournamentRailBadgeLabel = "EN VIVO";
export const casinoTournamentRailPrizeLabel = "Premio";
export const casinoTournamentRailPlayersLabel = "Jugadores";
export const casinoTournamentRailTimeLabel = "Tiempo";
export const casinoTournamentRailCtaLabel = "Participar Ahora";

export const casinoTournamentRailTitles: Record<CasinoTournamentRailVariant, string> = {
    active: "Torneos Activos",
};

export const activeTournaments: CasinoTournamentCardData[] = [
    {
        id: "tournament-mega-slot",
        title: "Mega Slot Race",
        prize: "$50,000",
        players: "2847",
        time: "2h 45m",
        tone: "warning",
    },
    {
        id: "tournament-weekend",
        title: "Weekend Warriors",
        prize: "$25,000",
        players: "1532",
        time: "1d 5h",
        tone: "brand",
    },
    {
        id: "tournament-high-roller",
        title: "High Roller Challenge",
        prize: "$100,000",
        players: "876",
        time: "4h 15m",
        tone: "secondary",
    },
];

export const casinoTournamentRailItems: Record<
    CasinoTournamentRailVariant,
    CasinoTournamentCardData[]
> = {
    active: activeTournaments,
};

export type CasinoGameRailVariant =
    | "rank"
    | "time"
    | "popular"
    | "topGames"
    | "launches"
    | "jackpots"
    | "megaways"
    | "forYou"
    | "basedOn"
    | "similar"
    | "trending"
    | "upcoming"
    | "liveTop"
    | "liveRoulette"
    | "liveBlackjack"
    | "liveBaccarat"
    | "liveGameShows"
    | "livePoker"
    | "favRecent"
    | "favPlayed"
    | "favSlots"
    | "favLive"
    | "favDiscover"
    | "tourSoon"
    | "tourMine"
    | "tourDone";

export type CasinoGameRailIconId =
    | "trophy"
    | "clock"
    | "flame"
    | "sparkles"
    | "coins"
    | "gem"
    | "star"
    | "gamepad"
    | "users"
    | "trending"
    | "dices"
    | "cards"
    | "tent"
    | "spade"
    | "heart"
    | "calendar"
    | "target"
    | "check";

export type CasinoGameRailBadgeTone =
    | "gold"
    | "silver"
    | "bronze"
    | "time"
    | "hot"
    | "jackpot"
    | "vivo"
    | "nuevo"
    | "brand"
    | "show"
    | "pronto"
    | "playing"
    | "done";

export type CasinoGameRailTitleTone = "primary" | "danger" | "secondary";

export type CasinoGameRailCaptionTone = "primary" | "secondary" | "success";

export interface CasinoGameRailCardData {
    id: string;
    title: string;
    provider: string;
    image: string;
    badge?: string;
    badgeTone?: CasinoGameRailBadgeTone;
    rtp?: string;
    titleTone?: CasinoGameRailTitleTone;
    highlight?: string;
    caption?: string;
    captionTone?: CasinoGameRailCaptionTone;
}

export interface CasinoGameRailProps {
    variant?: CasinoGameRailVariant;
    title?: string;
    icon?: CasinoGameRailIconId;
    items?: CasinoGameRailCardData[];
    seeAllLabel?: string;
    onSeeAllPress?: () => void;
}

import { HeartIcon } from "@assets/icons";
import type { CasinoGameRailCardData, CasinoGameRailVariant } from "./types";
import {
    CasinoGameRailCardBadgeDotElement,
    CasinoGameRailCardBadgeElement,
    CasinoGameRailCardCaptionElement,
    CasinoGameRailCardContentElement,
    CasinoGameRailCardElement,
    CasinoGameRailCardFavoriteElement,
    CasinoGameRailCardHighlightElement,
    CasinoGameRailCardProviderElement,
    CasinoGameRailCardRtpElement,
    CasinoGameRailCardTitleElement,
} from "./CasinoGameRailCard.elements";

interface CasinoGameRailCardProps {
    game: CasinoGameRailCardData;
    variant: CasinoGameRailVariant;
}

const titleChipVariants = new Set<CasinoGameRailVariant>([
    "popular",
    "launches",
    "megaways",
    "forYou",
    "basedOn",
    "similar",
    "trending",
    "liveTop",
    "liveRoulette",
    "liveBlackjack",
    "liveBaccarat",
    "liveGameShows",
    "livePoker",
    "favRecent",
    "favPlayed",
    "favSlots",
    "favDiscover",
]);

const rtpVariants = new Set<CasinoGameRailVariant>([
    "popular",
    "forYou",
    "basedOn",
    "similar",
    "trending",
    "favSlots",
]);

const hiddenBadgeVariants = new Set<CasinoGameRailVariant>([
    "popular",
    "megaways",
    "basedOn",
    "similar",
    "favRecent",
    "favPlayed",
    "favSlots",
    "favDiscover",
]);

const footerHighlightVariants = new Set<CasinoGameRailVariant>(["jackpots", "upcoming"]);

const hiddenTitleVariants = new Set<CasinoGameRailVariant>([
    "jackpots",
    "upcoming",
    "favLive",
    "tourSoon",
    "tourMine",
    "tourDone",
]);

const favoriteHeartVariants = new Set<CasinoGameRailVariant>([
    "favRecent",
    "favPlayed",
    "favSlots",
    "favLive",
    "favDiscover",
]);

export const CasinoGameRailCard = ({ game, variant }: CasinoGameRailCardProps) => {
    const showBadge = Boolean(game.badge) && !hiddenBadgeVariants.has(variant);
    const badgeDotTone =
        game.badgeTone === "hot" || game.badgeTone === "vivo" || game.badgeTone === "show"
            ? game.badgeTone
            : null;
    const showProvider = variant === "rank" || variant === "time" || variant === "favLive";
    const titleAsChip = titleChipVariants.has(variant);
    const showHighlightFooter = footerHighlightVariants.has(variant) && Boolean(game.highlight);
    const showTitle = !hiddenTitleVariants.has(variant);
    const showHighlightOverlay = Boolean(game.highlight) && !showHighlightFooter;
    const showRtp = rtpVariants.has(variant) && Boolean(game.rtp);
    const showCaption = Boolean(game.caption);
    const showFavorite = favoriteHeartVariants.has(variant);
    const contentAlign = variant === "rank" || variant === "time" ? "start" : "center";

    return (
        <CasinoGameRailCardElement $image={game.image} aria-label={game.title}>
            {showBadge ? (
                <CasinoGameRailCardBadgeElement $tone={game.badgeTone ?? "time"}>
                    {badgeDotTone ? (
                        <CasinoGameRailCardBadgeDotElement $tone={badgeDotTone} />
                    ) : null}
                    {game.badge}
                </CasinoGameRailCardBadgeElement>
            ) : null}

            {showFavorite ? (
                <CasinoGameRailCardFavoriteElement aria-hidden>
                    <HeartIcon />
                </CasinoGameRailCardFavoriteElement>
            ) : null}

            {showHighlightOverlay ? (
                <CasinoGameRailCardHighlightElement $placement="overlay">
                    {game.highlight}
                </CasinoGameRailCardHighlightElement>
            ) : null}

            <CasinoGameRailCardContentElement $align={contentAlign}>
                {showTitle ? (
                    <CasinoGameRailCardTitleElement $asChip={titleAsChip} $tone={game.titleTone ?? "primary"}>
                        {game.title}
                    </CasinoGameRailCardTitleElement>
                ) : null}
                {showProvider ? (
                    <CasinoGameRailCardProviderElement>{game.provider}</CasinoGameRailCardProviderElement>
                ) : null}
                {showRtp ? (
                    <CasinoGameRailCardRtpElement>RTP {game.rtp}</CasinoGameRailCardRtpElement>
                ) : null}
                {showCaption ? (
                    <CasinoGameRailCardCaptionElement $tone={game.captionTone}>
                        {game.caption}
                    </CasinoGameRailCardCaptionElement>
                ) : null}
                {showHighlightFooter ? (
                    <CasinoGameRailCardHighlightElement $placement="footer">
                        {game.highlight}
                    </CasinoGameRailCardHighlightElement>
                ) : null}
            </CasinoGameRailCardContentElement>
        </CasinoGameRailCardElement>
    );
};

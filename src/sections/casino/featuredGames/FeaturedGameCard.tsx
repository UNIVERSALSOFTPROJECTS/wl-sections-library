import { HeartIcon, PlayIcon } from "@assets/icons";
import type { FeaturedGameCardData } from "./types";
import {
  FeaturedGameCardBadgeElement,
  FeaturedGameCardContentElement,
  FeaturedGameCardCtaElement,
  FeaturedGameCardElement,
  FeaturedGameCardFavoriteElement,
  FeaturedGameCardProviderElement,
  FeaturedGameCardTitleElement,
  FeaturedGameCardTopElement,
} from "./FeaturedGameCard.elements";

interface FeaturedGameCardProps {
  game: FeaturedGameCardData;
}

export const FeaturedGameCard = ({ game }: FeaturedGameCardProps) => {
  return (
    <FeaturedGameCardElement $image={game.image} aria-label={game.title}>
      <FeaturedGameCardTopElement>
        {game.badge ? (
          <FeaturedGameCardBadgeElement>{game.badge}</FeaturedGameCardBadgeElement>
        ) : (
          <span />
        )}
        <FeaturedGameCardFavoriteElement type="button" aria-label="Agregar a favoritos">
          <HeartIcon />
        </FeaturedGameCardFavoriteElement>
      </FeaturedGameCardTopElement>

      <FeaturedGameCardContentElement>
        <FeaturedGameCardTitleElement>{game.title}</FeaturedGameCardTitleElement>
        <FeaturedGameCardProviderElement>{game.provider}</FeaturedGameCardProviderElement>
        <FeaturedGameCardCtaElement type="button">
          <PlayIcon />
          {game.ctaLabel ?? "Jugar ahora"}
        </FeaturedGameCardCtaElement>
      </FeaturedGameCardContentElement>
    </FeaturedGameCardElement>
  );
};

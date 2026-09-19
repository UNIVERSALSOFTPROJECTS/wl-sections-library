import { SparklesIcon } from "@assets/icons";
import { Carousel } from "@shared/ui/carousels/carousel/Carousel";
import { defaultFeaturedGamesTitle, featuredGames as defaultItems } from "./data";
import { FeaturedGameCard } from "./FeaturedGameCard";
import {
  FeaturedGamesElement,
  FeaturedGamesTitleIconElement,
} from "./FeaturedGames.elements";
import type { FeaturedGameCardData } from "./types";

interface FeaturedGamesProps {
  title?: string;
  items?: FeaturedGameCardData[];
}

export const FeaturedGames = ({
  title = defaultFeaturedGamesTitle,
  items = defaultItems,
}: FeaturedGamesProps) => {
  return (
    <FeaturedGamesElement aria-label={title}>
      <Carousel
        title={
          <>
            <FeaturedGamesTitleIconElement aria-hidden>
              <SparklesIcon />
            </FeaturedGamesTitleIconElement>
            {title}
          </>
        }
        showDots
        dotsPlacement="title"
        dotsTone="brand"
        gap={12}
        slideSize="100%"
      >
        {items.map((game) => (
          <FeaturedGameCard key={game.id} game={game} />
        ))}
      </Carousel>
    </FeaturedGamesElement>
  );
};

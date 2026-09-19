import aviatorImage from "@assets/aviator.jpg";
import blackjackLiveImage from "@assets/placeHolders/blackjackLive.jpg";
import bonanzaImage from "@assets/placeHolders/bonanza.jpg";
import type { FeaturedGameCardData } from "./types";

export const defaultFeaturedGamesTitle = "Destacados";

export const featuredGames: FeaturedGameCardData[] = [
  {
    id: "featured-aviator",
    title: "Aviator",
    provider: "Spribe",
    image: aviatorImage,
    badge: "Hot",
    ctaLabel: "Jugar ahora",
  },
  {
    id: "featured-bonanza",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: bonanzaImage,
    badge: "Hot",
    ctaLabel: "Jugar ahora",
  },
  {
    id: "featured-blackjack",
    title: "Blackjack Live",
    provider: "Evolution",
    image: blackjackLiveImage,
    badge: "Hot",
    ctaLabel: "Jugar ahora",
  },
];

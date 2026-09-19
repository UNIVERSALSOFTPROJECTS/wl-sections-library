import { CasinoGameFilterSection } from "../components/casinoGameFilterSection/CasinoGameFilterSection";
import { CasinoGameRailSection } from "../components/casinoGameRailSection/CasinoGameRailSection";
import { CasinoGamesSection } from "../components/casinoGamesSection/CasinoGamesSection";
import { CasinoMenuSection } from "../components/casinoMenuSection/CasinoMenuSection";
import { CasinoProvidersSection } from "../components/casinoProvidersSection/CasinoProvidersSection";
import { CasinoTournamentRailSection } from "../components/casinoTournamentRailSection/CasinoTournamentRailSection";
import { CasinoPromoCardSection } from "../components/casinoPromoCardSection/CasinoPromoCardSection";
import { FeaturedGamesSection } from "../components/featuredGamesSection/FeaturedGamesSection";
import { FeaturedPromotionsSection } from "../components/featuredPromotionsSection/FeaturedPromotionsSection";
import { FooterSection } from "../components/footerSection/FooterSection";
import { GlobalNavSection } from "../components/globalNavSection/GlobalNavSection";
import { HeroBannerSection } from "../components/heroBannerSection/HeroBannerSection";
import { HeroPlaceholderSection } from "../components/heroPlaceholderSection/HeroPlaceholderSection";
import { LatestWinnersSection } from "../components/latestWinnersSection/LatestWinnersSection";
import { RecommendationsSection } from "../components/recommendationsSection/RecommendationsSection";
import { ShortcutsNavSection } from "../components/shortcutsNavSection/ShortcutsNavSection";
import { SportsEventsSection } from "../components/sportsEventsSection/SportsEventsSection";
import {
  DocsSectionsContentElement,
  DocsSectionsHeaderElement,
  DocsSectionsNavElement,
  DocsSectionsNavLinkElement,
  DocsSectionsPageElement,
  DocsSectionsSectionsElement,
  DocsSectionsSubtitleElement,
  DocsSectionsTitleElement,
} from "./DocsSectionsPage.elements";

export const DocsSectionsPage = () => {
  return (
    <DocsSectionsPageElement>
      <DocsSectionsContentElement>
        <DocsSectionsHeaderElement>
          <DocsSectionsNavElement>
            <DocsSectionsNavLinkElement to="/docs_components">
              /docs_components
            </DocsSectionsNavLinkElement>
            <DocsSectionsNavLinkElement to="/docs_sections" $active>
              /docs_sections
            </DocsSectionsNavLinkElement>
          </DocsSectionsNavElement>
          <DocsSectionsTitleElement>Sections Catalog</DocsSectionsTitleElement>
          <DocsSectionsSubtitleElement>
            Catálogo de secciones exportables (`src/sections`): type del registry,
            props y preview a ancho real.
          </DocsSectionsSubtitleElement>
        </DocsSectionsHeaderElement>

        <DocsSectionsSectionsElement>
          <GlobalNavSection />
          <FooterSection />
          <ShortcutsNavSection />
          <CasinoPromoCardSection />
          <CasinoMenuSection />
          <CasinoGameFilterSection />
          <CasinoProvidersSection />
          <HeroBannerSection />
          <FeaturedPromotionsSection />
          <RecommendationsSection />
          <SportsEventsSection />
          <CasinoGamesSection />
          <LatestWinnersSection />
          <FeaturedGamesSection />
          <CasinoGameRailSection />
          <CasinoTournamentRailSection />
          <HeroPlaceholderSection />
        </DocsSectionsSectionsElement>
      </DocsSectionsContentElement>
    </DocsSectionsPageElement>
  );
};

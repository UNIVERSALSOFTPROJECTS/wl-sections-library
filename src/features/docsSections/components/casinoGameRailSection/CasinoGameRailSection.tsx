import { CasinoGameRail } from "@sections/casino/casinoGameRail";
import { DocCodeBlock } from "../docCodeBlock/DocCodeBlock";
import { DocSection, DocSectionBlock } from "../docSection/DocSection";
import {
  DocPreviewElement,
  DocTableCellElement,
  DocTableElement,
  DocTableHeadCellElement,
  DocTableWrapperElement,
} from "../docSection/DocSection.elements";
import {
  casinoGameRailJsonExample,
  casinoGameRailProps,
  casinoGameRailUsageCode,
} from "../../data";

export const CasinoGameRailSection = () => {
  return (
    <DocSection
      title="CasinoGameRail"
      description="Riel reutilizable de juegos de casino. Type: CasinoGameRail. Un type, N instancias vía props (lobby, PARA MI, casino en vivo y favoritos)."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"CasinoGameRail"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={casinoGameRailUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={casinoGameRailJsonExample} />
      </DocSectionBlock>

      <DocSectionBlock title="Props">
        <DocTableWrapperElement>
          <DocTableElement>
            <thead>
              <tr>
                <DocTableHeadCellElement>Prop</DocTableHeadCellElement>
                <DocTableHeadCellElement>Tipo</DocTableHeadCellElement>
                <DocTableHeadCellElement>Default</DocTableHeadCellElement>
                <DocTableHeadCellElement>Descripción</DocTableHeadCellElement>
              </tr>
            </thead>
            <tbody>
              {casinoGameRailProps.map((prop) => (
                <tr key={prop.name}>
                  <DocTableCellElement>{prop.name}</DocTableCellElement>
                  <DocTableCellElement>{prop.type}</DocTableCellElement>
                  <DocTableCellElement>{prop.default}</DocTableCellElement>
                  <DocTableCellElement>{prop.description}</DocTableCellElement>
                </tr>
              ))}
            </tbody>
          </DocTableElement>
        </DocTableWrapperElement>
      </DocSectionBlock>

      <DocSectionBlock title="Preview">
        <DocPreviewElement>
          <CasinoGameRail variant="rank" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="time" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="popular" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="topGames" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="launches" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="jackpots" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="megaways" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="forYou" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="basedOn" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="similar" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="trending" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="upcoming" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="liveTop" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="liveRoulette" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="liveBlackjack" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="liveBaccarat" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="liveGameShows" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="livePoker" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="favRecent" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="favPlayed" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="favSlots" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="favLive" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="favDiscover" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="tourSoon" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="tourMine" />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameRail variant="tourDone" />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

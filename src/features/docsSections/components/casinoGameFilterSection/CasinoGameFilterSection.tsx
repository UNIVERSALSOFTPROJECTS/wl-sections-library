import { CasinoGameFilter } from "@sections/casino/casinoGameFilter";
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
  casinoGameFilterJsonExample,
  casinoGameFilterProps,
  casinoGameFilterUsageCode,
} from "../../data";

export const CasinoGameFilterSection = () => {
  return (
    <DocSection
      title="CasinoGameFilter"
      description="Filtro horizontal de categorías de casino. Type: CasinoGameFilter. Variant lobby (con iconos) o live (texto). El host filtra con onItemPress."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"CasinoGameFilter"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={casinoGameFilterUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={casinoGameFilterJsonExample} />
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
              {casinoGameFilterProps.map((prop) => (
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
          <CasinoGameFilter />
        </DocPreviewElement>
        <DocPreviewElement>
          <CasinoGameFilter variant="live" />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

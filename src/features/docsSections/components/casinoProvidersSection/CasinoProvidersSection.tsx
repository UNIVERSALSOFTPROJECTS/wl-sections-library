import { CasinoProviders } from "@sections/casino/casinoProviders";
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
  casinoProvidersJsonExample,
  casinoProvidersProps,
  casinoProvidersUsageCode,
} from "../../data";

export const CasinoProvidersSection = () => {
  return (
    <DocSection
      title="CasinoProviders"
      description="Cabecera de proveedores de casino. Type: CasinoProviders. Título, búsqueda y chips mock. Las filas de juegos son CasinoGameRail aparte en el JSON."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"CasinoProviders"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={casinoProvidersUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={casinoProvidersJsonExample} />
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
              {casinoProvidersProps.map((prop) => (
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
          <CasinoProviders />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

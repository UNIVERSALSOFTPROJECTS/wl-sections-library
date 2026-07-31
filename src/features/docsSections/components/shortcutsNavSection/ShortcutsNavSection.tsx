import { ShortcutsNav } from "@sections/shortcutsNav";
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
  shortcutsNavJsonExample,
  shortcutsNavProps,
  shortcutsNavUsageCode,
} from "../../data";

export const ShortcutsNavSection = () => {
  return (
    <DocSection
      title="ShortcutsNav"
      description="Barra inferior fija (chrome). Type en registry/JSON: ShortcutsNav. Items serializables para reordenar/cambiar opciones desde el JSON de marca."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ShortcutsNav"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={shortcutsNavUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={shortcutsNavJsonExample} />
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
              {shortcutsNavProps.map((prop) => (
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
        <DocPreviewElement $flush>
          <div style={{ position: "relative", minHeight: 96 }}>
            <ShortcutsNav />
          </div>
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

import { ProfileMenu } from "@sections/profileMenu";
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
  profileMenuJsonExample,
  profileMenuProps,
  profileMenuUsageCode,
} from "../../data";

export const ProfileMenuSection = () => {
  return (
    <DocSection
      title="ProfileMenu"
      description="Menú horizontal de Mi Perfil. Type en registry/JSON: ProfileMenu. El host cambia la subruta con onItemPress; el contenido se renderiza debajo."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ProfileMenu"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={profileMenuUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={profileMenuJsonExample} />
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
              {profileMenuProps.map((prop) => (
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
          <ProfileMenu />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

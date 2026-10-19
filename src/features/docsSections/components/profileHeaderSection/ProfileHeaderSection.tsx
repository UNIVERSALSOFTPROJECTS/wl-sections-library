import { ProfileHeader } from "@sections/profileHeader";
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
  profileHeaderJsonExample,
  profileHeaderProps,
  profileHeaderUsageCode,
} from "../../data";

export const ProfileHeaderSection = () => {
  return (
    <DocSection
      title="ProfileHeader"
      description="Encabezado de Mi Perfil. Type en registry/JSON: ProfileHeader."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ProfileHeader"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={profileHeaderUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={profileHeaderJsonExample} />
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
              {profileHeaderProps.map((prop) => (
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
          <ProfileHeader />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

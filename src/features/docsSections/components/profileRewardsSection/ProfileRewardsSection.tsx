import { ProfileRewards } from "@sections/profileRewards";
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
  profileRewardsJsonExample,
  profileRewardsProps,
  profileRewardsUsageCode,
} from "../../data";

export const ProfileRewardsSection = () => {
  return (
    <DocSection
      title="ProfileRewards"
      description="Tarjeta de nivel y recompensas de Mi Perfil. Type en registry/JSON: ProfileRewards. Va en pages.profileOverview."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ProfileRewards"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={profileRewardsUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={profileRewardsJsonExample} />
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
              {profileRewardsProps.map((prop) => (
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
          <ProfileRewards />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

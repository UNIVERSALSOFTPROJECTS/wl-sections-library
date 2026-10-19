import { ProfileAccountVerification } from "@sections/profileAccountVerification";
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
  profileAccountVerificationJsonExample,
  profileAccountVerificationProps,
  profileAccountVerificationUsageCode,
} from "../../data";

export const ProfileAccountVerificationSection = () => {
  return (
    <DocSection
      title="ProfileAccountVerification"
      description="Pantalla de Seguridad. Type en registry/JSON: ProfileAccountVerification. Va en pages.profileSecurity."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ProfileAccountVerification"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={profileAccountVerificationUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={profileAccountVerificationJsonExample} />
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
              {profileAccountVerificationProps.map((prop) => (
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
          <ProfileAccountVerification />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

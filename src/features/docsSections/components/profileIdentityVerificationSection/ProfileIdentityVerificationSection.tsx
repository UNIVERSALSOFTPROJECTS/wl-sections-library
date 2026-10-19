import { ProfileIdentityVerification } from "@sections/profileIdentityVerification";
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
  profileIdentityVerificationJsonExample,
  profileIdentityVerificationProps,
  profileIdentityVerificationUsageCode,
} from "../../data";

export const ProfileIdentityVerificationSection = () => {
  return (
    <DocSection
      title="ProfileIdentityVerification"
      description="Carga de identidad en Seguridad. Type en registry/JSON: ProfileIdentityVerification. Va en pages.profileIdentity, ruta /profile/seguridad/identidad."
    >
      <DocSectionBlock title="Type (registry / JSON)">
        <DocCodeBlock code='"ProfileIdentityVerification"' />
      </DocSectionBlock>

      <DocSectionBlock title="Uso">
        <DocCodeBlock code={profileIdentityVerificationUsageCode} />
      </DocSectionBlock>

      <DocSectionBlock title="JSON de marca (referencia)">
        <DocCodeBlock code={profileIdentityVerificationJsonExample} />
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
              {profileIdentityVerificationProps.map((prop) => (
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
          <ProfileIdentityVerification />
        </DocPreviewElement>
      </DocSectionBlock>
    </DocSection>
  );
};

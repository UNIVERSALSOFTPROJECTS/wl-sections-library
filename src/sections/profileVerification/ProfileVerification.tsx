import { ChevronForwardIcon, ShieldIcon } from "@assets/icons";
import {
  ProfileVerificationActionElement,
  ProfileVerificationActionIconElement,
  ProfileVerificationBodyElement,
  ProfileVerificationDescriptionElement,
  ProfileVerificationElement,
  ProfileVerificationIconElement,
  ProfileVerificationTextElement,
  ProfileVerificationTitleElement,
} from "./ProfileVerification.elements";
import type { ProfileVerificationProps } from "./types";

export const ProfileVerification = ({
  title = "Completa la verificación",
  description = "Identidad y domicilio pendientes",
  actionLabel = "Completar",
  onAction,
}: ProfileVerificationProps) => {
  return (
    <ProfileVerificationElement aria-label="Verificación de cuenta">
      <ProfileVerificationBodyElement>
        <ProfileVerificationIconElement aria-hidden>
          <ShieldIcon />
        </ProfileVerificationIconElement>
        <ProfileVerificationTextElement>
          <ProfileVerificationTitleElement>{title}</ProfileVerificationTitleElement>
          <ProfileVerificationDescriptionElement>
            {description}
          </ProfileVerificationDescriptionElement>
        </ProfileVerificationTextElement>
      </ProfileVerificationBodyElement>
      <ProfileVerificationActionElement type="button" onClick={onAction}>
        {actionLabel}
        <ProfileVerificationActionIconElement aria-hidden>
          <ChevronForwardIcon />
        </ProfileVerificationActionIconElement>
      </ProfileVerificationActionElement>
    </ProfileVerificationElement>
  );
};

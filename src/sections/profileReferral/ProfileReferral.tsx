import { ChevronForwardIcon, CopyIcon, GiftIcon, ShareIcon } from "@assets/icons";
import {
  ProfileReferralActionsElement,
  ProfileReferralCodeElement,
  ProfileReferralCodeValueElement,
  ProfileReferralCopyElement,
  ProfileReferralDescriptionElement,
  ProfileReferralElement,
  ProfileReferralHelpElement,
  ProfileReferralHelpIconElement,
  ProfileReferralInviteElement,
  ProfileReferralInviteIconElement,
  ProfileReferralTitleElement,
  ProfileReferralTitleIconElement,
} from "./ProfileReferral.elements";
import type { ProfileReferralProps } from "./types";

export const ProfileReferral = ({
  title = "Lo bueno se comparte",
  description = "Invita a tus amigos con tu código personal.",
  code = "CARLOS8",
  inviteLabel = "Invitar",
  helpLabel = "Cómo funcionan los referidos",
  onCopy,
  onInvite,
  onHelp,
}: ProfileReferralProps) => {
  const handleCopy = () => {
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(code);
    }

    onCopy?.(code);
  };

  return (
    <ProfileReferralElement aria-label="Código de referido">
      <ProfileReferralTitleElement>
        <ProfileReferralTitleIconElement aria-hidden>
          <GiftIcon />
        </ProfileReferralTitleIconElement>
        {title}
      </ProfileReferralTitleElement>
      <ProfileReferralDescriptionElement>{description}</ProfileReferralDescriptionElement>
      <ProfileReferralActionsElement>
        <ProfileReferralCodeElement>
          <ProfileReferralCodeValueElement>{code}</ProfileReferralCodeValueElement>
          <ProfileReferralCopyElement
            type="button"
            aria-label="Copiar código"
            onClick={handleCopy}
          >
            <CopyIcon />
          </ProfileReferralCopyElement>
        </ProfileReferralCodeElement>
        <ProfileReferralInviteElement type="button" onClick={onInvite}>
          <ProfileReferralInviteIconElement aria-hidden>
            <ShareIcon />
          </ProfileReferralInviteIconElement>
          {inviteLabel}
        </ProfileReferralInviteElement>
      </ProfileReferralActionsElement>
      <ProfileReferralHelpElement type="button" onClick={onHelp}>
        {helpLabel}
        <ProfileReferralHelpIconElement aria-hidden>
          <ChevronForwardIcon />
        </ProfileReferralHelpIconElement>
      </ProfileReferralHelpElement>
    </ProfileReferralElement>
  );
};

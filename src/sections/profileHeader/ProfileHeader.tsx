import {
  ChevronBackIcon,
  CrownIcon,
  EditIcon,
  UserIcon,
} from "@assets/icons";
import {
  ProfileHeaderAvatarElement,
  ProfileHeaderBackElement,
  ProfileHeaderBackIconElement,
  ProfileHeaderBadgeElement,
  ProfileHeaderBadgeIconElement,
  ProfileHeaderBadgesElement,
  ProfileHeaderCardElement,
  ProfileHeaderEditElement,
  ProfileHeaderEditIconElement,
  ProfileHeaderElement,
  ProfileHeaderHandleElement,
  ProfileHeaderIdentityElement,
  ProfileHeaderIdentityTextElement,
  ProfileHeaderNameElement,
  ProfileHeaderNextLevelElement,
  ProfileHeaderProgressFillElement,
  ProfileHeaderProgressLabelElement,
  ProfileHeaderProgressTrackElement,
  ProfileHeaderSpaceDotElement,
  ProfileHeaderSpaceElement,
  ProfileHeaderToolbarElement,
  ProfileHeaderXpCurrentElement,
  ProfileHeaderXpElement,
  ProfileHeaderXpRowElement,
} from "./ProfileHeader.elements";

export interface ProfileHeaderProps {
  name?: string;
  handle?: string;
  vipLabel?: string;
  levelLabel?: string;
  currentXp?: string;
  targetXp?: string;
  progress?: number;
  nextLevel?: string;
  spaceLabel?: string;
  onBack?: () => void;
  onEdit?: () => void;
}

const clampProgress = (value: number) => Math.min(100, Math.max(0, value));

const formatProgress = (value: number) =>
  `${value.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;

export const ProfileHeader = ({
  name = "Carlos Martínez",
  handle = "@carlosmartinez",
  vipLabel = "VIP",
  levelLabel = "Oro II · Nivel 8",
  currentXp = "7.250 XP",
  targetXp = "10.000 XP",
  progress = 72.5,
  nextLevel = "Oro III",
  spaceLabel = "Tu espacio personal",
  onBack,
  onEdit,
}: ProfileHeaderProps) => {
  const safeProgress = clampProgress(progress);

  return (
    <ProfileHeaderElement aria-label="Perfil">
      <ProfileHeaderToolbarElement>
        <ProfileHeaderBackElement type="button" onClick={onBack}>
          <ProfileHeaderBackIconElement aria-hidden>
            <ChevronBackIcon />
          </ProfileHeaderBackIconElement>
          Volver
        </ProfileHeaderBackElement>
        <ProfileHeaderSpaceElement>
          <ProfileHeaderSpaceDotElement aria-hidden />
          {spaceLabel}
        </ProfileHeaderSpaceElement>
      </ProfileHeaderToolbarElement>

      <ProfileHeaderCardElement>
        <ProfileHeaderIdentityElement>
          <ProfileHeaderAvatarElement aria-hidden>
            <UserIcon />
          </ProfileHeaderAvatarElement>
          <ProfileHeaderIdentityTextElement>
            <ProfileHeaderNameElement>{name}</ProfileHeaderNameElement>
            <ProfileHeaderHandleElement>{handle}</ProfileHeaderHandleElement>
          </ProfileHeaderIdentityTextElement>
          <ProfileHeaderEditElement type="button" onClick={onEdit}>
            <ProfileHeaderEditIconElement aria-hidden>
              <EditIcon />
            </ProfileHeaderEditIconElement>
            Editar
          </ProfileHeaderEditElement>
        </ProfileHeaderIdentityElement>

        <ProfileHeaderBadgesElement>
          <ProfileHeaderBadgeElement $tone="vip">
            <ProfileHeaderBadgeIconElement aria-hidden>
              <CrownIcon />
            </ProfileHeaderBadgeIconElement>
            {vipLabel}
          </ProfileHeaderBadgeElement>
          <ProfileHeaderBadgeElement $tone="level">
            <ProfileHeaderBadgeIconElement aria-hidden>
              <CrownIcon />
            </ProfileHeaderBadgeIconElement>
            {levelLabel}
          </ProfileHeaderBadgeElement>
        </ProfileHeaderBadgesElement>

        <ProfileHeaderXpRowElement>
          <ProfileHeaderXpElement>
            <ProfileHeaderXpCurrentElement>{currentXp}</ProfileHeaderXpCurrentElement>
            <span aria-hidden>|</span>
            <span>{targetXp}</span>
          </ProfileHeaderXpElement>
          <ProfileHeaderProgressLabelElement>
            {formatProgress(safeProgress)}
          </ProfileHeaderProgressLabelElement>
        </ProfileHeaderXpRowElement>

        <ProfileHeaderProgressTrackElement>
          <ProfileHeaderProgressFillElement
            $progress={safeProgress}
            role="progressbar"
            aria-valuenow={Math.round(safeProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso de nivel"
          />
        </ProfileHeaderProgressTrackElement>

        <ProfileHeaderNextLevelElement>
          Próximo nivel: {nextLevel}
        </ProfileHeaderNextLevelElement>
      </ProfileHeaderCardElement>
    </ProfileHeaderElement>
  );
};

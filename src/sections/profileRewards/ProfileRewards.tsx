import { AwardIcon, ChevronForwardIcon, MedalIcon } from "@assets/icons";
import {
  ProfileRewardsBenefitsElement,
  ProfileRewardsBenefitsIconElement,
  ProfileRewardsCaptionElement,
  ProfileRewardsElement,
  ProfileRewardsFillElement,
  ProfileRewardsHeaderElement,
  ProfileRewardsLevelChevronElement,
  ProfileRewardsLevelElement,
  ProfileRewardsLevelNameElement,
  ProfileRewardsLevelNumberElement,
  ProfileRewardsLevelTextElement,
  ProfileRewardsMedalElement,
  ProfileRewardsNextElement,
  ProfileRewardsNextValueElement,
  ProfileRewardsPanelElement,
  ProfileRewardsPercentElement,
  ProfileRewardsProgressElement,
  ProfileRewardsRemainingElement,
  ProfileRewardsRemainingXpElement,
  ProfileRewardsTitleElement,
  ProfileRewardsTitleIconElement,
  ProfileRewardsTrackElement,
  ProfileRewardsXpElement,
  ProfileRewardsXpRowElement,
} from "./ProfileRewards.elements";
import type { ProfileRewardsProps } from "./types";

const clampProgress = (value: number) => Math.min(100, Math.max(0, value));

const formatProgress = (value: number) =>
  `${value.toLocaleString("es-AR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;

export const ProfileRewards = ({
  title = "Nivel y recompensas",
  benefitsLabel = "Beneficios",
  currentLabel = "Nivel actual",
  levelName = "Oro II",
  levelNumber = "Nv. 8",
  nextLabel = "Siguiente nivel",
  nextLevel = "Oro III",
  xpLabel = "7.250 / 10.000 XP",
  progress = 72.5,
  remainingPrefix = "Te faltan",
  remainingXp = "2.750 XP",
  remainingSuffix = "para el siguiente nivel.",
  onBenefits,
  onLevelPress,
}: ProfileRewardsProps) => {
  const safeProgress = clampProgress(progress);

  return (
    <ProfileRewardsElement aria-label="Nivel y recompensas">
      <ProfileRewardsHeaderElement>
        <ProfileRewardsTitleElement>
          <ProfileRewardsTitleIconElement aria-hidden>
            <MedalIcon />
          </ProfileRewardsTitleIconElement>
          {title}
        </ProfileRewardsTitleElement>
        <ProfileRewardsBenefitsElement type="button" onClick={onBenefits}>
          {benefitsLabel}
          <ProfileRewardsBenefitsIconElement aria-hidden>
            <ChevronForwardIcon />
          </ProfileRewardsBenefitsIconElement>
        </ProfileRewardsBenefitsElement>
      </ProfileRewardsHeaderElement>

      <ProfileRewardsPanelElement>
        <ProfileRewardsLevelElement type="button" onClick={onLevelPress}>
          <ProfileRewardsMedalElement aria-hidden>
            <AwardIcon />
          </ProfileRewardsMedalElement>
          <ProfileRewardsLevelTextElement>
            <ProfileRewardsCaptionElement>{currentLabel}</ProfileRewardsCaptionElement>
            <ProfileRewardsLevelNameElement>
              {levelName}
              <ProfileRewardsLevelNumberElement>{levelNumber}</ProfileRewardsLevelNumberElement>
              <ProfileRewardsLevelChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileRewardsLevelChevronElement>
            </ProfileRewardsLevelNameElement>
          </ProfileRewardsLevelTextElement>
        </ProfileRewardsLevelElement>

        <ProfileRewardsNextElement>
          <ProfileRewardsCaptionElement>{nextLabel}</ProfileRewardsCaptionElement>
          <ProfileRewardsNextValueElement>{nextLevel}</ProfileRewardsNextValueElement>
        </ProfileRewardsNextElement>
      </ProfileRewardsPanelElement>

      <ProfileRewardsProgressElement>
        <ProfileRewardsXpRowElement>
          <ProfileRewardsXpElement>{xpLabel}</ProfileRewardsXpElement>
          <ProfileRewardsPercentElement>{formatProgress(safeProgress)}</ProfileRewardsPercentElement>
        </ProfileRewardsXpRowElement>

        <ProfileRewardsTrackElement>
          <ProfileRewardsFillElement
            $progress={safeProgress}
            role="progressbar"
            aria-valuenow={Math.round(safeProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso de nivel"
          />
        </ProfileRewardsTrackElement>

        <ProfileRewardsRemainingElement>
          {remainingPrefix}{" "}
          <ProfileRewardsRemainingXpElement>{remainingXp}</ProfileRewardsRemainingXpElement>{" "}
          {remainingSuffix}
        </ProfileRewardsRemainingElement>
      </ProfileRewardsProgressElement>
    </ProfileRewardsElement>
  );
};

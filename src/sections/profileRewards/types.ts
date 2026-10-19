export interface ProfileRewardsProps {
  title?: string;
  benefitsLabel?: string;
  currentLabel?: string;
  levelName?: string;
  levelNumber?: string;
  nextLabel?: string;
  nextLevel?: string;
  xpLabel?: string;
  progress?: number;
  remainingPrefix?: string;
  remainingXp?: string;
  remainingSuffix?: string;
  onBenefits?: () => void;
  onLevelPress?: () => void;
}

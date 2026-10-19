import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileRewardsElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileRewardsHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileRewardsTitleElement = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileRewardsTitleIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${pxToRem(18)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileRewardsBenefitsElement = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.brand.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileRewardsBenefitsIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileRewardsPanelElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[800]};
`;

export const ProfileRewardsLevelElement = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileRewardsMedalElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: color-mix(in srgb, ${({ theme }) => theme.color.warning.default} 18%, transparent);
  color: ${({ theme }) => theme.color.warning.default};
  font-size: ${pxToRem(20)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileRewardsLevelTextElement = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};
  min-width: 0;
`;

export const ProfileRewardsCaptionElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

export const ProfileRewardsLevelNameElement = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileRewardsLevelNumberElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
`;

export const ProfileRewardsLevelChevronElement = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(14)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileRewardsNextElement = styled.span`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(0.25)};
`;

export const ProfileRewardsNextValueElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
`;

export const ProfileRewardsProgressElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileRewardsXpRowElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileRewardsXpElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileRewardsPercentElement = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
`;

export const ProfileRewardsTrackElement = styled.span`
  display: block;
  width: 100%;
  height: ${pxToRem(8)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.neutral[700]};
`;

export const ProfileRewardsFillElement = styled.span<{ $progress: number }>`
  display: block;
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
`;

export const ProfileRewardsRemainingElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.3;
`;

export const ProfileRewardsRemainingXpElement = styled.strong`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

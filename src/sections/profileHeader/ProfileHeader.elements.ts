import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileHeaderElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const ProfileHeaderToolbarElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
`;

export const ProfileHeaderBackElement = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileHeaderBackIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(18)};
  line-height: 0;
`;

export const ProfileHeaderSpaceElement = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  color: ${({ theme }) => theme.color.success.default};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileHeaderSpaceDotElement = styled.span`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.success.default};
`;

export const ProfileHeaderCardElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background:
    radial-gradient(
      120% 80% at 0% 0%,
      color-mix(in srgb, ${({ theme }) => theme.color.brand.secondary} 55%, transparent),
      transparent 62%
    ),
    ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileHeaderIdentityElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
`;

export const ProfileHeaderAvatarElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(52)};
  height: ${pxToRem(52)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(24)};
  line-height: 0;
`;

export const ProfileHeaderIdentityTextElement = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};
  min-width: 0;
`;

export const ProfileHeaderNameElement = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileHeaderHandleElement = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileHeaderEditElement = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-height: ${pxToRem(36)};
  padding: ${({ theme }) => theme.spacing(0.75)} ${({ theme }) => theme.spacing(1.5)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.background.quaternary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileHeaderEditIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(14)};
  line-height: 0;
`;

export const ProfileHeaderBadgesElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileHeaderBadgeElement = styled.span<{ $tone: "vip" | "level" }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  min-height: ${pxToRem(26)};
  padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
  border: 1px solid
    ${({ theme, $tone }) =>
      $tone === "vip" ? theme.color.brand.secondary : theme.color.warning.default};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $tone }) =>
    $tone === "vip" ? theme.color.brand.secondary : "transparent"};
  color: ${({ theme, $tone }) =>
    $tone === "vip" ? theme.color.text.primary : theme.color.warning.default};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1;
`;

export const ProfileHeaderBadgeIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(12)};
  line-height: 0;
`;

export const ProfileHeaderXpRowElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileHeaderXpElement = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-width: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileHeaderXpCurrentElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const ProfileHeaderProgressLabelElement = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.brand.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
`;

export const ProfileHeaderProgressTrackElement = styled.span`
  display: block;
  width: 100%;
  height: ${pxToRem(6)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.neutral[700]};
`;

export const ProfileHeaderProgressFillElement = styled.span<{ $progress: number }>`
  display: block;
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
`;

export const ProfileHeaderNextLevelElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

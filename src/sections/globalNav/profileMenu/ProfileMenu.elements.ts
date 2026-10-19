import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileMenuRootElement = styled.div`
  position: relative;
  display: inline-flex;
`;

export const ProfileMenuPanelElement = styled.div`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing(1)});
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  display: flex;
  flex-direction: column;
  width: min(${pxToRem(300)}, calc(100vw - ${pxToRem(32)}));
  max-height: calc(100dvh - ${pxToRem(88)});
  padding: ${({ theme }) => theme.spacing(2)};
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background:
    radial-gradient(
      140% 70% at 0% 0%,
      color-mix(in srgb, ${({ theme }) => theme.color.brand.primary} 34%, transparent),
      transparent 58%
    ),
    ${({ theme }) => theme.color.neutral[900]};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

export const ProfileMenuIdentityElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  min-width: 0;
`;

export const ProfileMenuAvatarElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(44)};
  height: ${pxToRem(44)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(22)};
  line-height: 0;
`;

export const ProfileMenuIdentityTextElement = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};
  min-width: 0;
`;

export const ProfileMenuNameElement = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileMenuEmailElement = styled.span`
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileMenuVipElement = styled.button`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1.5)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  text-align: left;
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

export const ProfileMenuVipHeaderElement = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileMenuVipIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.warning.default};
  font-size: ${pxToRem(16)};
  line-height: 0;
`;

export const ProfileMenuVipTitleElement = styled.span`
  flex: 1;
  min-width: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
`;

export const ProfileMenuChevronElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(16)};
  line-height: 0;
`;

export const ProfileMenuVipLevelElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

export const ProfileMenuProgressTrackElement = styled.span`
  display: block;
  width: 100%;
  height: ${pxToRem(6)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.neutral[700]};
`;

export const ProfileMenuProgressFillElement = styled.span<{ $progress: number }>`
  display: block;
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.warning.default};
`;

export const ProfileMenuListElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileMenuItemElement = styled.button<{ $accent?: "brand" | "success" }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  min-height: ${pxToRem(44)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(0.5)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: transparent;
  color: ${({ theme, $accent }) =>
    $accent === "brand" ? theme.color.brand.primary : theme.color.text.primary};
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.background.secondary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileMenuItemIconElement = styled.span<{ $accent?: "brand" | "success" }>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $accent }) =>
    $accent === "success" ? theme.color.success.default : theme.color.brand.primary};
  font-size: ${pxToRem(18)};
  line-height: 0;
`;

export const ProfileMenuItemLabelElement = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileMenuItemValueElement = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.2;
  white-space: nowrap;
`;

export const ProfileMenuBadgeElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  padding: 0 ${({ theme }) => theme.spacing(0.75)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1;
`;

export const ProfileMenuDividerElement = styled.span`
  display: block;
  height: 1px;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  background: ${({ theme }) => theme.color.border.primary};
`;

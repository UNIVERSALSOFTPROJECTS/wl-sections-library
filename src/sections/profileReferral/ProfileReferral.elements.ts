import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileReferralElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background:
    radial-gradient(
      90% 140% at 100% 0%,
      color-mix(in srgb, ${({ theme }) => theme.color.brand.secondary} 50%, transparent),
      transparent 68%
    ),
    ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileReferralTitleElement = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileReferralTitleIconElement = styled.span`
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

export const ProfileReferralDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const ProfileReferralActionsElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;

export const ProfileReferralCodeElement = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
  min-height: ${pxToRem(48)};
  padding: 0 ${({ theme }) => theme.spacing(1.5)};
  border: 1px dashed ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileReferralCodeValueElement = styled.span`
  min-width: 0;
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: 0.08em;
  line-height: 1;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const ProfileReferralCopyElement = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(18)};
  line-height: 0;
  cursor: pointer;

  & > svg {
    width: 1em;
    height: 1em;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileReferralInviteElement = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  min-height: ${pxToRem(48)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
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

export const ProfileReferralInviteIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileReferralHelpElement = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  align-self: flex-start;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfileReferralHelpIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(14)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

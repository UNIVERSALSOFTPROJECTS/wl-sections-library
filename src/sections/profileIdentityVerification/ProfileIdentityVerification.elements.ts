import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileIdentityVerificationElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const ProfileIdentityVerificationBackElement = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const ProfileIdentityVerificationBackIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationIntroElement = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileIdentityVerificationIntroIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(18)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationIntroTextElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
  min-width: 0;
`;

export const ProfileIdentityVerificationTitleElement = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileIdentityVerificationDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileIdentityVerificationCountElement = styled.p`
  align-self: flex-start;
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1.5)}`};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.neutral[800]};
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileIdentityVerificationNoticeElement = styled.p`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileIdentityVerificationNoticeIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: ${pxToRem(1)};
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationStepElement = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileIdentityVerificationStepHeaderElement = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  text-align: left;
  cursor: pointer;
`;

export const ProfileIdentityVerificationStepIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationStepTextElement = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${pxToRem(2)};
  min-width: 0;
`;

export const ProfileIdentityVerificationStepEyebrowElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const ProfileIdentityVerificationStepTitleElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileIdentityVerificationStepChevronElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(18)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationStepBodyElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0 ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
`;

export const ProfileIdentityVerificationStepDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileIdentityVerificationSlotsElement = styled.div<{ $single: boolean }>`
  display: grid;
  grid-template-columns: ${({ $single }) =>
    $single ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"};
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export const ProfileIdentityVerificationSlotElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
`;

export const ProfileIdentityVerificationDropElement = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  min-height: ${pxToRem(148)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[800]};
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const ProfileIdentityVerificationDropIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.neutral[700]};
  color: ${({ theme }) => theme.color.brand.primary};
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationDropTitleElement = styled.span`
  max-width: 100%;
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.3;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileIdentityVerificationDropActionElement = styled.span`
  color: ${({ theme }) => theme.color.brand.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ProfileIdentityVerificationHintElement = styled.span<{ $align: "center" | "left" }>`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.3;
  text-align: ${({ $align }) => $align};
`;

export const ProfileIdentityVerificationRemoveElement = styled.button`
  align-self: center;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: underline;
  text-underline-offset: ${pxToRem(3)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const ProfileIdentityVerificationErrorElement = styled.span`
  color: ${({ theme }) => theme.color.danger.default};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  line-height: 1.3;
  text-align: center;
`;

export const ProfileIdentityVerificationFileInputElement = styled.input`
  display: none;
`;

export const ProfileIdentityVerificationCaptureElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  height: ${pxToRem(44)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[800]};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const ProfileIdentityVerificationCaptureIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationContinueElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  height: ${pxToRem(44)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.color.neutral[800]};
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:not(:disabled) {
    color: ${({ theme }) => theme.color.text.primary};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.color.neutral[700]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ProfileIdentityVerificationContinueIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationConfirmElement = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.5)};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
  cursor: pointer;
`;

export const ProfileIdentityVerificationCheckboxElement = styled.input`
  flex-shrink: 0;
  width: ${pxToRem(18)};
  height: ${pxToRem(18)};
  margin: ${pxToRem(2)} 0 0;
  accent-color: ${({ theme }) => theme.color.brand.primary};
  cursor: pointer;
`;

export const ProfileIdentityVerificationRetentionElement = styled.p`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileIdentityVerificationRetentionIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: ${pxToRem(1)};
  font-size: ${pxToRem(14)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileIdentityVerificationPrepareElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  height: ${pxToRem(48)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.button.primary.default};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.button.primary.hover};
  }

  &:disabled {
    background: ${({ theme }) => theme.color.button.primary.disabled};
    cursor: not-allowed;
  }
`;

export const ProfileIdentityVerificationPrepareIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

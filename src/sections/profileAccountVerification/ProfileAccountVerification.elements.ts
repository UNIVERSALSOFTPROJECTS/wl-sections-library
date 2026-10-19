import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileAccountVerificationElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const ProfileAccountVerificationBackElement = styled.button`
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

export const ProfileAccountVerificationBackIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileAccountVerificationIntroElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileAccountVerificationBreadcrumbElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.3;
`;

export const ProfileAccountVerificationHeadingElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const ProfileAccountVerificationTitleElement = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileAccountVerificationSummaryElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const ProfileAccountVerificationListElement = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfileAccountVerificationItemElement = styled.li`
  display: flex;
  width: 100%;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.border.soft};
  }
`;

export const ProfileAccountVerificationRowElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  min-height: ${pxToRem(64)};
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  text-align: left;
  cursor: default;

  &:is(button) {
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: ${({ theme }) => theme.color.background.secondary};
    }
  }
`;

export const ProfileAccountVerificationLabelElement = styled.span`
  min-width: 0;
`;

export const ProfileAccountVerificationPendingElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  height: ${pxToRem(28)};
  padding: 0 ${({ theme }) => theme.spacing(1.5)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
`;

export const ProfileAccountVerificationPendingIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(14)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileAccountVerificationVerifiedElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
`;

export const ProfileAccountVerificationVerifiedIconElement = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileAccountVerificationNoteElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileAccountVerificationExamplesElement = styled.button`
  align-self: flex-start;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: ${pxToRem(3)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfilePersonalInfoElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const ProfilePersonalInfoIntroElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export const ProfilePersonalInfoTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfilePersonalInfoSubtitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const ProfilePersonalInfoCardElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
`;

export const ProfilePersonalInfoCardHeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfilePersonalInfoSectionTitleElement = styled.span`
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

export const ProfilePersonalInfoSectionIconElement = styled.span`
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

export const ProfilePersonalInfoEditElement = styled.button`
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
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ProfilePersonalInfoEditIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfilePersonalInfoDescriptionElement = styled.p`
  margin: ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.4;
`;

export const ProfilePersonalInfoListElement = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ProfilePersonalInfoRowElement = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding-block: ${({ theme }) => theme.spacing(1.5)};
  border-top: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const ProfilePersonalInfoFieldIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfilePersonalInfoFieldTextElement = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.25)};
  min-width: 0;
`;

export const ProfilePersonalInfoLabelElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

export const ProfilePersonalInfoValueElement = styled.span`
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.3;
  overflow-wrap: anywhere;
`;

export const ProfilePersonalInfoPrivacyElement = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(2)} 0 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.3;
`;

export const ProfilePersonalInfoPrivacyIconElement = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  font-size: ${pxToRem(14)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

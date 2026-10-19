import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ProfileEditModalRootElement = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const ProfileEditModalBackdropElement = styled.button`
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: ${({ theme }) => theme.color.overlay};
  backdrop-filter: blur(${pxToRem(8)});
  cursor: pointer;
`;

export const ProfileEditModalPanelElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: min(100%, ${pxToRem(440)});
  max-height: calc(100dvh - ${({ theme }) => theme.spacing(4)});
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme }) => theme.color.neutral[900]};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

export const ProfileEditModalHeaderElement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ProfileEditModalIntroElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
`;

export const ProfileEditModalTitleElement = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const ProfileEditModalDescriptionElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileEditModalCloseElement = styled.button`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${pxToRem(22)};
  line-height: 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const ProfileEditModalFormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ProfileEditModalFieldElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileEditModalLabelElement = styled.label`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.2;
`;

export const ProfileEditModalInputElement = styled.input`
  width: 100%;
  height: ${pxToRem(48)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.field};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.normal};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.placeholder};
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.text.secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const ProfileEditModalNoteElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  line-height: 1.45;
`;

export const ProfileEditModalActionsElement = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const ProfileEditModalSaveElement = styled.button`
  flex: 1;
  min-width: 0;
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

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
  }

  &:active {
    background: ${({ theme }) => theme.color.button.primary.pressed};
  }
`;

export const ProfileEditModalCancelElement = styled.button`
  flex-shrink: 0;
  height: ${pxToRem(48)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.color.border.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: transparent;
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

export const ProfileEditModalBackElement = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;

export const ProfileEditModalBackIconElement = styled.span`
  display: inline-flex;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

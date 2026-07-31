import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const ShortcutsNavElement = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  min-height: ${pxToRem(64)};
  padding: ${pxToRem(10)};
  padding-bottom: max(${pxToRem(10)}, env(safe-area-inset-bottom));
  background: ${({ theme }) => theme.color.neutral[900]};
  border-top: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const ShortcutsNavItemElement = styled.button<{ $active?: boolean }>`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  min-width: 0;
  min-height: ${pxToRem(48)};
  padding: ${({ theme }) => theme.spacing(0.5)};
  padding-bottom: ${pxToRem(8)};
  border: none;
  background: transparent;
  color: ${({ theme, $active }) =>
    $active ? theme.color.brand.primary : theme.color.text.secondary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const ShortcutsNavIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(22)};
  line-height: 0;
`;

export const ShortcutsNavLabelElement = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(11)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const ShortcutsNavActiveIndicatorElement = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: ${pxToRem(28)};
  height: ${pxToRem(2)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
  transform: translateX(-50%);
`;

export const ShortcutsNavCenterSlotElement = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

export const ShortcutsNavCenterButtonElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(64)};
  height: ${pxToRem(64)};
  margin-top: ${pxToRem(-24)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  box-shadow: 0 0 ${pxToRem(18)} ${({ theme }) => theme.color.brand.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.primary};
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const ShortcutsNavCenterIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(32)};
  height: ${pxToRem(32)};
  line-height: 0;

  img {
    display: block;
    width: ${pxToRem(36)};
    height: ${pxToRem(36)};
    object-fit: contain;
    mix-blend-mode: lighten;
  }
`;

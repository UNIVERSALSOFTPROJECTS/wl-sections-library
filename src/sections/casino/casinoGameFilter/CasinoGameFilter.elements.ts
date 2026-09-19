import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const CasinoGameFilterElement = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  padding-inline: ${pxToRem(16)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior-x: contain;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CasinoGameFilterItemElement = styled.button<{ $active: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  min-height: ${pxToRem(36)};
  padding: 0 ${({ theme }) => theme.spacing(1.5)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.color.brand.primary : theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(13)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const CasinoGameFilterIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

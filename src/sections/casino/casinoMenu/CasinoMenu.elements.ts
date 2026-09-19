import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const CasinoMenuElement = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  padding-inline: ${pxToRem(16)};
  padding-block: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.color.border.primary};
`;

export const CasinoMenuItemElement = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus-visible {
    outline: none;
  }

  &:focus-visible > span:first-of-type {
    outline: 2px solid ${({ theme }) => theme.color.brand.primary};
    outline-offset: 2px;
  }
`;

export const CasinoMenuIconElement = styled.span<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  border-radius: ${({ theme }) => theme.radii.xLarge};
  background: ${({ theme, $active }) =>
    $active ? theme.color.brand.primary : theme.color.background.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(22)};
  line-height: 0;
  transition: ${({ theme }) => theme.transitions.fast};

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const CasinoMenuLabelElement = styled.span`
  max-width: 100%;
  color: inherit;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(10)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: 1.15;
  min-height: 2.3em;
  text-align: center;
  text-transform: uppercase;
  white-space: pre-line;
`;

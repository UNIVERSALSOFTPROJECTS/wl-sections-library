import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const CasinoProvidersElement = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    width: 100%;
`;

export const CasinoProvidersHeaderElement = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const CasinoProvidersTitleElement = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.2;
`;

export const CasinoProvidersSearchElement = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${pxToRem(18)};
    line-height: 0;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    & > svg {
        width: 1em;
        height: 1em;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

export const CasinoProvidersFiltersElement = styled.nav`
    display: flex;
    flex-wrap: nowrap;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    overscroll-behavior-x: contain;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CasinoProvidersFilterElement = styled.button<{ $active: boolean }>`
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    min-height: ${pxToRem(32)};
    padding: 0 ${({ theme }) => theme.spacing(1.5)};
    border: none;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active }) =>
        $active ? theme.color.brand.primary : theme.color.background.secondary};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    letter-spacing: ${pxToRem(0.3)};
    white-space: nowrap;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

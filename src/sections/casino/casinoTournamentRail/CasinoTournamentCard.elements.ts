import styled, { type DefaultTheme } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";
import type { CasinoTournamentTone } from "./types";

const toneColor = (tone: CasinoTournamentTone, theme: DefaultTheme) => {
    if (tone === "warning") {
        return theme.color.warning.default;
    }

    if (tone === "secondary") {
        return theme.color.brand.secondary;
    }

    return theme.color.brand.primary;
};

export const CasinoTournamentCardElement = styled.article`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background: ${({ theme }) => theme.color.neutral[800]};
`;

export const CasinoTournamentCardTopElement = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const CasinoTournamentCardCopyElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    min-width: 0;
`;

export const CasinoTournamentCardTitleElement = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.large};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;
`;

export const CasinoTournamentCardBadgeElement = styled.span`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: ${({ theme }) => theme.spacing(0.5)};
    min-height: ${pxToRem(20)};
    padding: 0 ${pxToRem(8)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.color.neutral[700]};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1;
    letter-spacing: ${pxToRem(0.2)};
    text-transform: uppercase;
`;

export const CasinoTournamentCardBadgeDotElement = styled.span<{ $tone: CasinoTournamentTone }>`
    flex-shrink: 0;
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $tone }) => toneColor($tone, theme)};
`;

export const CasinoTournamentCardIconElement = styled.span<{ $tone: CasinoTournamentTone }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${pxToRem(36)};
    height: ${pxToRem(36)};
    border-radius: ${({ theme }) => theme.radii.circle};
    background: ${({ theme, $tone }) => toneColor($tone, theme)};
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${pxToRem(16)};
    line-height: 0;

    & > svg {
        width: 1em;
        height: 1em;
    }
`;

export const CasinoTournamentCardStatsElement = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const CasinoTournamentCardStatElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${pxToRem(2)};
    min-height: ${pxToRem(52)};
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.radii.large};
    background: ${({ theme }) => theme.color.neutral[700]};
    text-align: center;
`;

export const CasinoTournamentCardStatLabelElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
`;

export const CasinoTournamentCardStatValueElement = styled.span<{ $highlight?: boolean }>`
    color: ${({ theme, $highlight }) =>
        $highlight ? theme.color.warning.default : theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.2;
`;

export const CasinoTournamentCardCtaElement = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: ${pxToRem(40)};
    padding: 0 ${({ theme }) => theme.spacing(2)};
    border: none;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) =>
        `linear-gradient(90deg, color-mix(in srgb, ${theme.color.brand.secondary} 22%, ${theme.color.background.primary}), color-mix(in srgb, ${theme.color.brand.secondary} 52%, ${theme.color.background.primary}))`};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

import { pxToRem } from "@shared/utils/styles-utils";
import styled, { css } from "styled-components";
import type {
    CasinoGameRailBadgeTone,
    CasinoGameRailCaptionTone,
    CasinoGameRailTitleTone,
} from "./types";

export const CasinoGameRailCardElement = styled.article<{ $image: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${pxToRem(150)};
    padding: ${({ theme }) => theme.spacing(1)};
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.xLarge};
    background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 38%,
            rgba(0, 0, 0, 0.55) 72%,
            rgba(0, 0, 0, 0.92) 100%
        ),
        url(${({ $image }) => $image}) center 58% / cover no-repeat;
`;

export const CasinoGameRailCardBadgeElement = styled.span<{
    $tone: CasinoGameRailBadgeTone;
}>`
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: ${({ theme }) => theme.spacing(0.5)};
    min-height: ${pxToRem(20)};
    padding: 0 ${pxToRem(8)};
    border-radius: ${({ theme }) => theme.radii.pill};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1;
    letter-spacing: ${pxToRem(0.2)};
    z-index: 1;

    ${({ theme, $tone }) => {
        if ($tone === "gold") {
            return css`
                background: ${theme.color.warning.default};
                color: ${theme.color.neutral[900]};
            `;
        }

        if ($tone === "silver") {
            return css`
                background: ${theme.color.neutral[200]};
                color: ${theme.color.neutral[900]};
            `;
        }

        if ($tone === "bronze") {
            return css`
                background: ${theme.color.warning.pressed};
                color: ${theme.color.text.primary};
            `;
        }

        if ($tone === "hot") {
            return css`
                background: ${theme.color.danger.default};
                text-transform: uppercase;
            `;
        }

        if ($tone === "jackpot") {
            return css`
                background: ${theme.color.warning.default};
                color: ${theme.color.neutral[900]};
                text-transform: uppercase;
            `;
        }

        if ($tone === "vivo") {
            return css`
                background: ${theme.color.success.default};
                text-transform: uppercase;
            `;
        }

        if ($tone === "nuevo") {
            return css`
                background: ${theme.color.success.default};
                text-transform: uppercase;
            `;
        }

        if ($tone === "brand") {
            return css`
                background: ${theme.color.brand.primary};
                text-transform: uppercase;
            `;
        }

        if ($tone === "show") {
            return css`
                background: ${theme.color.brand.secondary};
                text-transform: uppercase;
            `;
        }

        if ($tone === "pronto") {
            return css`
                background: ${theme.color.info.soft.border};
                text-transform: uppercase;
            `;
        }

        if ($tone === "playing") {
            return css`
                background: ${theme.color.success.default};
                text-transform: uppercase;
            `;
        }

        if ($tone === "done") {
            return css`
                background: ${theme.color.neutral[500]};
                text-transform: uppercase;
            `;
        }

        return css`
            background: ${theme.color.brand.secondary};
        `;
    }}
`;

export const CasinoGameRailCardBadgeDotElement = styled.span<{
    $tone: "hot" | "vivo" | "show";
}>`
    flex-shrink: 0;
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.color.text.primary};
    box-shadow: ${({ theme, $tone }) =>
        $tone === "vivo" ? `0 0 0 ${pxToRem(2)} ${theme.color.success.soft.border}` : "none"};
`;

export const CasinoGameRailCardHighlightElement = styled.span<{
    $placement: "overlay" | "footer";
}>`
    z-index: 1;
    color: ${({ theme }) => theme.color.warning.default};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1;
    letter-spacing: ${pxToRem(0.2)};
    white-space: nowrap;

    ${({ $placement }) =>
        $placement === "overlay" &&
        css`
            position: absolute;
            top: 46%;
            left: 50%;
            transform: translate(-50%, -50%);
        `}
`;

export const CasinoGameRailCardContentElement = styled.div<{ $align: "start" | "center" }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};
    gap: ${pxToRem(2)};
    margin-top: auto;
    text-align: ${({ $align }) => ($align === "center" ? "center" : "start")};
    z-index: 1;
`;

export const CasinoGameRailCardTitleElement = styled.h3<{
    $asChip: boolean;
    $tone: CasinoGameRailTitleTone;
}>`
    margin: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.2;

    ${({ theme, $asChip, $tone }) =>
        $asChip &&
        css`
            display: inline-flex;
            align-items: center;
            min-height: ${pxToRem(20)};
            padding: 0 ${pxToRem(8)};
            border-radius: ${theme.radii.pill};
            font-size: ${pxToRem(10)};
            font-weight: ${theme.typography.fontWeight.bold};
            background: ${$tone === "danger"
                ? theme.color.danger.default
                : $tone === "secondary"
                  ? theme.color.brand.secondary
                  : theme.color.brand.primary};
        `}
`;

export const CasinoGameRailCardProviderElement = styled.span`
    color: ${({ theme }) => theme.color.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(11)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
`;

export const CasinoGameRailCardRtpElement = styled.span`
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(11)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
`;

export const CasinoGameRailCardCaptionElement = styled.span<{
    $tone?: CasinoGameRailCaptionTone;
}>`
    color: ${({ theme, $tone }) => {
        if ($tone === "success") {
            return theme.color.success.default;
        }

        if ($tone === "primary") {
            return theme.color.text.primary;
        }

        return theme.color.text.secondary;
    }};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(11)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1.2;
`;

export const CasinoGameRailCardFavoriteElement = styled.span`
    position: absolute;
    top: ${({ theme }) => theme.spacing(1)};
    right: ${({ theme }) => theme.spacing(1)};
    z-index: 1;
    color: ${({ theme }) => theme.color.brand.primary};
    font-size: ${pxToRem(16)};
    line-height: 0;

    & > svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
        stroke: currentColor;
    }
`;

import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

interface CarouselViewportElementProps {
    $gap: number;
}

interface CarouselSlideElementProps {
    $slideSize: string;
    $gap: number;
}

export const CarouselElement = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CarouselHeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const CarouselHeaderActionsElement = styled.div`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const CarouselTitleElement = styled.h2`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    margin: 0;
    min-width: 0;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    line-height: 1.3;

    svg {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
    }
`;

export const CarouselViewportElement = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const CarouselContainerElement = styled.div<CarouselViewportElementProps>`
    display: flex;
    touch-action: pan-y pinch-zoom;
    margin-left: ${({ $gap }) => pxToRem(-$gap)};
`;

export const CarouselSlideElement = styled.div<CarouselSlideElementProps>`
    position: relative;
    flex: 0 0 ${({ $slideSize }) => $slideSize};
    min-width: 0;
    padding-left: ${({ $gap }) => pxToRem($gap)};
`;

export const CarouselArrowPrevElement = styled.div`
    position: absolute;
    top: 50%;
    left: ${pxToRem(8)};
    z-index: 1;
    transform: translateY(-50%);
`;

export const CarouselArrowNextElement = styled.div`
    position: absolute;
    top: 50%;
    right: ${pxToRem(8)};
    z-index: 1;
    transform: translateY(-50%);
`;

export const CarouselDotsElement = styled.div<{
    $overlay?: boolean;
    $bottom?: number;
    $inHeader?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ $inHeader }) => ($inHeader ? "flex-end" : "center")};
    gap: ${({ theme }) => theme.spacing(1)};
    margin-top: ${({ theme, $overlay, $inHeader }) =>
        $overlay || $inHeader ? 0 : theme.spacing(2)};
    flex-shrink: 0;

    ${({ $overlay, $bottom = 12 }) =>
        $overlay &&
        `
        position: absolute;
        left: 0;
        right: 0;
        bottom: ${pxToRem($bottom)};
        z-index: 2;
    `}
`;

export type CarouselDotsPlacement = "bottom" | "overlay" | "title";
export type CarouselDotsTone = "light" | "brand";

export const CarouselDotElement = styled.button<{
    $active: boolean;
    $tone: CarouselDotsTone;
}>`
    width: ${({ $active }) => ($active ? pxToRem(24) : pxToRem(8))};
    height: ${pxToRem(8)};
    padding: 0;
    border: none;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active, $tone }) => {
        if (!$active) return theme.color.text.secondary;
        return $tone === "brand" ? theme.color.brand.primary : theme.color.text.primary;
    }};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

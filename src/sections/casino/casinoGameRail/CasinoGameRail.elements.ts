import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";
import type { CasinoGameRailIconId } from "./types";

export const CasinoGameRailElement = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CasinoGameRailTitleIconElement = styled.span<{ $icon: CasinoGameRailIconId }>`
    display: inline-flex;
    color: ${({ theme, $icon }) => {
        if ($icon === "clock") {
            return theme.color.text.secondary;
        }

        if ($icon === "gem" || $icon === "users") {
            return theme.color.info.soft.border;
        }

        if ($icon === "gamepad") {
            return theme.color.danger.default;
        }

        if ($icon === "dices" || $icon === "cards" || $icon === "spade") {
            return theme.color.text.primary;
        }

        if ($icon === "tent") {
            return theme.color.danger.default;
        }

        if ($icon === "heart") {
            return theme.color.brand.primary;
        }

        if ($icon === "calendar" || $icon === "check") {
            return theme.color.text.primary;
        }

        if ($icon === "target") {
            return theme.color.danger.default;
        }

        return theme.color.warning.default;
    }};

    & > svg {
        fill: ${({ $icon }) => ($icon === "heart" ? "currentColor" : "none")};
    }
`;

export const CasinoGameRailSeeAllElement = styled.button`
    display: inline-flex;
    align-items: center;
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.brand.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    line-height: 1;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand.primary};
        outline-offset: 2px;
    }
`;

import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export const CasinoTournamentRailElement = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CasinoTournamentRailHeaderElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const CasinoTournamentRailTitleElement = styled.h2`
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
        color: ${({ theme }) => theme.color.warning.default};
    }
`;

export const CasinoTournamentRailSeeAllElement = styled.button`
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

export const CasinoTournamentRailListElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1.5)};
    width: 100%;
`;

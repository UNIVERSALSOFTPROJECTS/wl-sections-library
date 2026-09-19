import styled from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

const promoGradient =
  "linear-gradient(90deg, #F54900 0%, #E7000B 48%, #E60076 100%)";

export const CasinoPromoCardElement = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  border: none;
  border-radius: ${pxToRem(24)};
  background: ${promoGradient};
  box-shadow:
    0 ${pxToRem(4)} ${pxToRem(6)} ${pxToRem(-4)} rgba(0, 0, 0, 0.1),
    0 ${pxToRem(10)} ${pxToRem(15)} ${pxToRem(-3)} rgba(0, 0, 0, 0.1);
`;

export const CasinoPromoCopyElement = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const CasinoPromoBadgeElement = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${pxToRem(4)} ${pxToRem(10)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(10)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  letter-spacing: ${pxToRem(0.4)};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const CasinoPromoTitleElement = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.75)};
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(16)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const CasinoPromoTitleIconElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${pxToRem(16)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const CasinoPromoSubtitleElement = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.3;
  opacity: 0.92;
`;

export const CasinoPromoCtaElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  height: ${pxToRem(32)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.neutral[50]};
  color: #e7000b;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(11)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${pxToRem(0.3)};
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.color.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.primary};
    outline-offset: 2px;
  }
`;

export const CasinoPromoGiftElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};
  border-radius: ${({ theme }) => theme.radii.circle};
  background: rgba(255, 255, 255, 0.18);
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(24)};
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

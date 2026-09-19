import { pxToRem } from "@shared/utils/styles-utils";
import styled from "styled-components";

export const FeaturedGameCardElement = styled.article<{ $image: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: ${pxToRem(248)};
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  border-radius: ${pxToRem(20)};
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08) 0%,
      rgba(40, 0, 40, 0.35) 48%,
      rgba(50, 0, 70, 0.88) 100%
    ),
    url(${({ $image }) => $image}) center 58% / cover no-repeat;
`;

export const FeaturedGameCardTopElement = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const FeaturedGameCardBadgeElement = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(24)};
  padding: 0 ${pxToRem(10)};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.danger.default};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(10)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${pxToRem(0.4)};
  line-height: 1;
  text-transform: uppercase;
`;

export const FeaturedGameCardFavoriteElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: rgba(255, 255, 255, 0.16);
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${pxToRem(18)};
  line-height: 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  & > svg {
    width: 1em;
    height: 1em;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.primary};
    outline-offset: 2px;
  }
`;

export const FeaturedGameCardContentElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing(0.5)};
  margin-top: auto;
`;

export const FeaturedGameCardTitleElement = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(22)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 1.2;
`;

export const FeaturedGameCardProviderElement = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1.2;
`;

export const FeaturedGameCardCtaElement = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  height: ${pxToRem(44)};
  margin-top: ${({ theme }) => theme.spacing(1.5)};
  padding: 0 ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.color.brand.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${pxToRem(13)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: ${pxToRem(0.4)};
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  & > svg {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
  }

  &:hover {
    background: ${({ theme }) => theme.color.button.primary.hover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.text.primary};
    outline-offset: 2px;
  }
`;

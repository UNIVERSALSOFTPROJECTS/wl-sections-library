import styled, { keyframes } from "styled-components";
import { pxToRem } from "@shared/utils/styles-utils";

export type LoaderSize = "sm" | "md" | "lg";
export type LoaderTone = "brand" | "neutral";

interface LoaderElementProps {
  $size: LoaderSize;
}

interface LoaderSpinnerElementProps extends LoaderElementProps {
  $tone: LoaderTone;
}

const SIZE_PX: Record<LoaderSize, number> = {
  sm: 16,
  md: 24,
  lg: 40,
};

const BORDER_PX: Record<LoaderSize, number> = {
  sm: 2,
  md: 2.5,
  lg: 3,
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderElement = styled.span<LoaderElementProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => pxToRem(SIZE_PX[$size])};
  height: ${({ $size }) => pxToRem(SIZE_PX[$size])};
`;

export const LoaderSpinnerElement = styled.span<LoaderSpinnerElementProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-style: solid;
  border-width: ${({ $size }) => pxToRem(BORDER_PX[$size])};
  border-color: ${({ theme, $tone }) =>
    $tone === "neutral"
      ? `color-mix(in srgb, ${theme.color.neutral[300]} 25%, transparent)`
      : `color-mix(in srgb, ${theme.color.brand.primary} 25%, transparent)`};
  border-top-color: ${({ theme, $tone }) =>
    $tone === "neutral" ? theme.color.neutral[300] : theme.color.brand.primary};
  animation: ${spin} 0.7s linear infinite;
`;

export const LoaderFullscreenElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  background: ${({ theme }) => theme.color.background.primary};
`;

import {
  LoaderElement,
  LoaderFullscreenElement,
  LoaderSpinnerElement,
} from "./Loader.elements";
import type { LoaderSize, LoaderTone } from "./Loader.elements";

interface LoaderProps {
  size?: LoaderSize;
  tone?: LoaderTone;
  /** Accesible name for screen readers. */
  label?: string;
  /** Centra el spinner a pantalla completa (ej. bootstrap de la app). */
  fullscreen?: boolean;
}

export const Loader = ({
  size = "md",
  tone = "brand",
  label = "Cargando",
  fullscreen = false,
}: LoaderProps) => {
  const spinner = (
    <LoaderElement $size={size} role="status" aria-label={label} aria-live="polite">
      <LoaderSpinnerElement $size={size} $tone={tone} aria-hidden />
    </LoaderElement>
  );

  if (fullscreen) {
    return <LoaderFullscreenElement>{spinner}</LoaderFullscreenElement>;
  }

  return spinner;
};

export type { LoaderSize, LoaderTone };

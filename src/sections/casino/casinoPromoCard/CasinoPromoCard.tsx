import { GiftIcon } from "@assets/icons";
import { casinoPromoCard as defaultPromo } from "./data";
import {
  CasinoPromoBadgeElement,
  CasinoPromoCardElement,
  CasinoPromoCopyElement,
  CasinoPromoCtaElement,
  CasinoPromoGiftElement,
  CasinoPromoSubtitleElement,
  CasinoPromoTitleElement,
  CasinoPromoTitleIconElement,
} from "./CasinoPromoCard.elements";

interface CasinoPromoCardProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  onCtaPress?: () => void;
}

export const CasinoPromoCard = ({
  badge = defaultPromo.badge,
  title = defaultPromo.title,
  subtitle = defaultPromo.subtitle,
  cta = defaultPromo.cta,
  onCtaPress,
}: CasinoPromoCardProps) => {
  return (
    <CasinoPromoCardElement aria-label={badge}>
      <CasinoPromoCopyElement>
        <CasinoPromoBadgeElement>{badge}</CasinoPromoBadgeElement>
        <CasinoPromoTitleElement>
          <CasinoPromoTitleIconElement aria-hidden>
            <GiftIcon />
          </CasinoPromoTitleIconElement>
          {title}
        </CasinoPromoTitleElement>
        <CasinoPromoSubtitleElement>{subtitle}</CasinoPromoSubtitleElement>
        <CasinoPromoCtaElement type="button" onClick={onCtaPress}>
          {cta}
        </CasinoPromoCtaElement>
      </CasinoPromoCopyElement>
      <CasinoPromoGiftElement aria-hidden>
        <GiftIcon />
      </CasinoPromoGiftElement>
    </CasinoPromoCardElement>
  );
};

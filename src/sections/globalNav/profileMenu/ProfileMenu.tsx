import { useEffect, useRef, useState } from "react";
import {
  ChevronForwardIcon,
  CrownIcon,
  DownloadIcon,
  GiftIcon,
  LogoutIcon,
  SettingsIcon,
  TrendingUpIcon,
  UploadIcon,
  UserIcon,
  WalletIcon,
} from "@assets/icons";
import { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
import { defaultProfileUser } from "../data";
import type { ProfileMenuUser } from "../types";
import {
  ProfileMenuAvatarElement,
  ProfileMenuBadgeElement,
  ProfileMenuChevronElement,
  ProfileMenuDividerElement,
  ProfileMenuEmailElement,
  ProfileMenuIdentityElement,
  ProfileMenuIdentityTextElement,
  ProfileMenuItemElement,
  ProfileMenuItemIconElement,
  ProfileMenuItemLabelElement,
  ProfileMenuItemValueElement,
  ProfileMenuListElement,
  ProfileMenuNameElement,
  ProfileMenuPanelElement,
  ProfileMenuProgressFillElement,
  ProfileMenuProgressTrackElement,
  ProfileMenuRootElement,
  ProfileMenuVipElement,
  ProfileMenuVipHeaderElement,
  ProfileMenuVipIconElement,
  ProfileMenuVipLevelElement,
  ProfileMenuVipTitleElement,
} from "./ProfileMenu.elements";

interface ProfileMenuProps {
  user?: ProfileMenuUser;
  onVipPress?: () => void;
  onDepositPress?: () => void;
  onWithdrawPress?: () => void;
  onProfilePress?: () => void;
  onPromotionsPress?: () => void;
  onBetHistoryPress?: () => void;
  onSettingsPress?: () => void;
  onLogoutPress?: () => void;
}

const clampProgress = (value: number) => Math.min(100, Math.max(0, value));

export const ProfileMenu = ({
  user = defaultProfileUser,
  onVipPress,
  onDepositPress,
  onWithdrawPress,
  onProfilePress,
  onPromotionsPress,
  onBetHistoryPress,
  onSettingsPress,
  onLogoutPress,
}: ProfileMenuProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const progress = clampProgress(user.vipProgress);
  const promotionsCount = user.promotionsCount ?? 0;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const run = (action?: () => void) => {
    setOpen(false);
    action?.();
  };

  return (
    <ProfileMenuRootElement ref={rootRef}>
      <IconButton
        icon={<UserIcon />}
        variant="ghost"
        shape="rounded"
        aria-label="Perfil"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      />

      {open && (
        <ProfileMenuPanelElement role="menu" aria-label="Menú de perfil">
          <ProfileMenuIdentityElement>
            <ProfileMenuAvatarElement aria-hidden>
              <UserIcon />
            </ProfileMenuAvatarElement>
            <ProfileMenuIdentityTextElement>
              <ProfileMenuNameElement>{user.name}</ProfileMenuNameElement>
              <ProfileMenuEmailElement>{user.email}</ProfileMenuEmailElement>
            </ProfileMenuIdentityTextElement>
          </ProfileMenuIdentityElement>

          <ProfileMenuVipElement type="button" onClick={() => run(onVipPress)}>
            <ProfileMenuVipHeaderElement>
              <ProfileMenuVipIconElement aria-hidden>
                <CrownIcon />
              </ProfileMenuVipIconElement>
              <ProfileMenuVipTitleElement>Estado VIP</ProfileMenuVipTitleElement>
              <ProfileMenuChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileMenuChevronElement>
            </ProfileMenuVipHeaderElement>
            <ProfileMenuVipLevelElement>{user.vipLevel}</ProfileMenuVipLevelElement>
            <ProfileMenuProgressTrackElement>
              <ProfileMenuProgressFillElement
                $progress={progress}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progreso VIP"
              />
            </ProfileMenuProgressTrackElement>
            <ProfileMenuVipLevelElement>{user.vipPointsRemaining}</ProfileMenuVipLevelElement>
          </ProfileMenuVipElement>

          <ProfileMenuListElement>
            <ProfileMenuItemElement as="div">
              <ProfileMenuItemIconElement aria-hidden>
                <WalletIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Saldo Total</ProfileMenuItemLabelElement>
              <ProfileMenuItemValueElement>{user.balance}</ProfileMenuItemValueElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              onClick={() => run(onDepositPress)}
            >
              <ProfileMenuItemIconElement $accent="success" aria-hidden>
                <DownloadIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Depositar</ProfileMenuItemLabelElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              onClick={() => run(onWithdrawPress)}
            >
              <ProfileMenuItemIconElement aria-hidden>
                <UploadIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Retirar</ProfileMenuItemLabelElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              onClick={() => run(onProfilePress)}
            >
              <ProfileMenuItemIconElement aria-hidden>
                <UserIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Mi Perfil</ProfileMenuItemLabelElement>
              <ProfileMenuChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileMenuChevronElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              aria-label={
                promotionsCount > 0
                  ? `Promociones, ${promotionsCount}`
                  : "Promociones"
              }
              onClick={() => run(onPromotionsPress)}
            >
              <ProfileMenuItemIconElement aria-hidden>
                <GiftIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Promociones</ProfileMenuItemLabelElement>
              {promotionsCount > 0 && (
                <ProfileMenuBadgeElement>{promotionsCount}</ProfileMenuBadgeElement>
              )}
              <ProfileMenuChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileMenuChevronElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              onClick={() => run(onBetHistoryPress)}
            >
              <ProfileMenuItemIconElement aria-hidden>
                <TrendingUpIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Historial de Apuestas</ProfileMenuItemLabelElement>
              <ProfileMenuChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileMenuChevronElement>
            </ProfileMenuItemElement>

            <ProfileMenuItemElement
              type="button"
              role="menuitem"
              onClick={() => run(onSettingsPress)}
            >
              <ProfileMenuItemIconElement aria-hidden>
                <SettingsIcon />
              </ProfileMenuItemIconElement>
              <ProfileMenuItemLabelElement>Configuración</ProfileMenuItemLabelElement>
              <ProfileMenuChevronElement aria-hidden>
                <ChevronForwardIcon />
              </ProfileMenuChevronElement>
            </ProfileMenuItemElement>
          </ProfileMenuListElement>

          <ProfileMenuDividerElement />

          <ProfileMenuItemElement
            type="button"
            role="menuitem"
            $accent="brand"
            onClick={() => run(onLogoutPress)}
          >
            <ProfileMenuItemIconElement aria-hidden>
              <LogoutIcon />
            </ProfileMenuItemIconElement>
            <ProfileMenuItemLabelElement>Cerrar Sesión</ProfileMenuItemLabelElement>
          </ProfileMenuItemElement>
        </ProfileMenuPanelElement>
      )}
    </ProfileMenuRootElement>
  );
};

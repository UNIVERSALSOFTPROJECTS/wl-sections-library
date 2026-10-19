import {
  BellIcon,
  DownloadIcon,
  MenuIcon,
  SearchIcon,
  SparklesIcon,
} from "@assets/icons";
import { IconButton } from "@shared/ui/buttons/iconButton/IconButton";
import {
  balanceDefaultId,
  balanceOptions as defaultBalanceOptions,
  defaultNotificationBadge,
  defaultProfileUser,
  defaultSearchPlaceholder,
  jackpotItems as defaultJackpotItems,
} from "./data";
import type { BalanceOption, BalanceVariant, JackpotItem, ProfileMenuUser } from "./types";
import { BalanceChip } from "./balanceChip/BalanceChip";
import { JackpotCard } from "./jackpotCard/JackpotCard";
import { ProfileMenu } from "./profileMenu/ProfileMenu";
import {
  GlobalNavElement,
  GlobalNavGroupElement,
  GlobalNavJackpotsRowElement,
  GlobalNavSearchElement,
  GlobalNavSearchIconElement,
  GlobalNavSearchInputElement,
  GlobalNavSearchTrailingIconElement,
  GlobalNavTopRowElement,
} from "./GlobalNav.elements";

interface GlobalNavProps {
  onMenuPress?: () => void;
  onDepositPress?: () => void;
  onNotificationsPress?: () => void;
  onProfilePress?: () => void;
  onVipPress?: () => void;
  onWithdrawPress?: () => void;
  onPromotionsPress?: () => void;
  onBetHistoryPress?: () => void;
  onSettingsPress?: () => void;
  onLogoutPress?: () => void;
  profile?: ProfileMenuUser;
  notificationBadge?: number | string | boolean;
  searchPlaceholder?: string;
  balanceOptions?: BalanceOption[];
  balanceDefaultId?: BalanceVariant;
  jackpots?: JackpotItem[];
}

export const GlobalNav = ({
  onMenuPress,
  onDepositPress,
  onNotificationsPress,
  onProfilePress,
  onVipPress,
  onWithdrawPress,
  onPromotionsPress,
  onBetHistoryPress,
  onSettingsPress,
  onLogoutPress,
  profile = defaultProfileUser,
  notificationBadge = defaultNotificationBadge,
  searchPlaceholder = defaultSearchPlaceholder,
  balanceOptions = defaultBalanceOptions,
  balanceDefaultId: balanceId = balanceDefaultId,
  jackpots = defaultJackpotItems,
}: GlobalNavProps) => {
  return (
    <GlobalNavElement aria-label="Navegación global">
      <GlobalNavTopRowElement>
        <IconButton
          icon={<MenuIcon />}
          shape="rounded"
          aria-label="Menú"
          onClick={onMenuPress}
        />

        <GlobalNavGroupElement>
          <BalanceChip options={balanceOptions} defaultId={balanceId} />
          <IconButton
            icon={<DownloadIcon />}
            variant="brand"
            shape="rounded"
            aria-label="Depositar"
            onClick={onDepositPress}
          />
          <IconButton
            icon={<BellIcon />}
            shape="rounded"
            badge={notificationBadge}
            aria-label="Notificaciones"
            onClick={onNotificationsPress}
          />
          <ProfileMenu
            user={profile}
            onVipPress={onVipPress}
            onDepositPress={onDepositPress}
            onWithdrawPress={onWithdrawPress}
            onProfilePress={onProfilePress}
            onPromotionsPress={onPromotionsPress}
            onBetHistoryPress={onBetHistoryPress}
            onSettingsPress={onSettingsPress}
            onLogoutPress={onLogoutPress}
          />
        </GlobalNavGroupElement>
      </GlobalNavTopRowElement>

      <GlobalNavSearchElement>
        <GlobalNavSearchIconElement aria-hidden>
          <SearchIcon />
        </GlobalNavSearchIconElement>
        <GlobalNavSearchInputElement
          type="search"
          placeholder={searchPlaceholder}
          readOnly
          aria-label={searchPlaceholder}
        />
        <GlobalNavSearchTrailingIconElement aria-hidden>
          <SparklesIcon />
        </GlobalNavSearchTrailingIconElement>
      </GlobalNavSearchElement>

      <GlobalNavJackpotsRowElement>
        {jackpots.map((item) => (
          <JackpotCard
            key={item.id}
            variant={item.variant}
            label={item.label}
            amount={item.amount}
          />
        ))}
      </GlobalNavJackpotsRowElement>
    </GlobalNavElement>
  );
};

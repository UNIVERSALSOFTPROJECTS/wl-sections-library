export interface ProfileReferralProps {
  title?: string;
  description?: string;
  code?: string;
  inviteLabel?: string;
  helpLabel?: string;
  onCopy?: (code: string) => void;
  onInvite?: () => void;
  onHelp?: () => void;
}

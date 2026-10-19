import { CheckCircleIcon, ChevronBackIcon, ChevronForwardIcon } from "@assets/icons";
import { profileAccountVerificationItems as defaultItems } from "./data";
import {
  ProfileAccountVerificationBackElement,
  ProfileAccountVerificationBackIconElement,
  ProfileAccountVerificationBreadcrumbElement,
  ProfileAccountVerificationElement,
  ProfileAccountVerificationExamplesElement,
  ProfileAccountVerificationHeadingElement,
  ProfileAccountVerificationIntroElement,
  ProfileAccountVerificationItemElement,
  ProfileAccountVerificationLabelElement,
  ProfileAccountVerificationListElement,
  ProfileAccountVerificationNoteElement,
  ProfileAccountVerificationPendingElement,
  ProfileAccountVerificationPendingIconElement,
  ProfileAccountVerificationRowElement,
  ProfileAccountVerificationSummaryElement,
  ProfileAccountVerificationTitleElement,
  ProfileAccountVerificationVerifiedElement,
  ProfileAccountVerificationVerifiedIconElement,
} from "./ProfileAccountVerification.elements";
import type { ProfileAccountVerificationItem, ProfileAccountVerificationProps } from "./types";

const formatSummary = (completed: number, total: number) =>
  `${completed} de ${total} verificaciones completadas`;

const VerificationRow = ({
  item,
  pendingLabel,
  verifiedLabel,
  onItemPress,
}: {
  item: ProfileAccountVerificationItem;
  pendingLabel: string;
  verifiedLabel: string;
  onItemPress?: (id: string) => void;
}) => {
  const pending = item.status === "pending";
  const status = pending ? (
    <ProfileAccountVerificationPendingElement>
      {pendingLabel}
      <ProfileAccountVerificationPendingIconElement aria-hidden>
        <ChevronForwardIcon />
      </ProfileAccountVerificationPendingIconElement>
    </ProfileAccountVerificationPendingElement>
  ) : (
    <ProfileAccountVerificationVerifiedElement>
      <ProfileAccountVerificationVerifiedIconElement aria-hidden>
        <CheckCircleIcon />
      </ProfileAccountVerificationVerifiedIconElement>
      {verifiedLabel}
    </ProfileAccountVerificationVerifiedElement>
  );

  if (pending) {
    return (
      <ProfileAccountVerificationRowElement
        as="button"
        type="button"
        aria-label={`${item.label}, ${pendingLabel}`}
        onClick={() => onItemPress?.(item.id)}
      >
        <ProfileAccountVerificationLabelElement>{item.label}</ProfileAccountVerificationLabelElement>
        {status}
      </ProfileAccountVerificationRowElement>
    );
  }

  return (
    <ProfileAccountVerificationRowElement>
      <ProfileAccountVerificationLabelElement>{item.label}</ProfileAccountVerificationLabelElement>
      {status}
    </ProfileAccountVerificationRowElement>
  );
};

export const ProfileAccountVerification = ({
  backLabel = "Volver a mi perfil",
  groupLabel = "Seguridad",
  title = "Verificación de cuenta",
  items = defaultItems,
  pendingLabel = "Pendiente",
  verifiedLabel = "Verificado",
  note = "La documentación requiere revisión. Cargar archivos no implica que tu identidad o domicilio estén verificados.",
  examplesLabel = "Ver estados de ejemplo",
  onBack,
  onItemPress,
  onExamples,
}: ProfileAccountVerificationProps) => {
  const completed = items.filter((item) => item.status === "verified").length;

  return (
    <ProfileAccountVerificationElement aria-label={title}>
      <ProfileAccountVerificationBackElement type="button" onClick={onBack}>
        <ProfileAccountVerificationBackIconElement aria-hidden>
          <ChevronBackIcon />
        </ProfileAccountVerificationBackIconElement>
        {backLabel}
      </ProfileAccountVerificationBackElement>

      <ProfileAccountVerificationIntroElement>
        <ProfileAccountVerificationBreadcrumbElement>
          {groupLabel} / {title}
        </ProfileAccountVerificationBreadcrumbElement>
        <ProfileAccountVerificationHeadingElement>
          <ProfileAccountVerificationTitleElement>{title}</ProfileAccountVerificationTitleElement>
          <ProfileAccountVerificationSummaryElement>
            {formatSummary(completed, items.length)}
          </ProfileAccountVerificationSummaryElement>
        </ProfileAccountVerificationHeadingElement>
      </ProfileAccountVerificationIntroElement>

      <ProfileAccountVerificationListElement>
        {items.map((item) => (
          <ProfileAccountVerificationItemElement key={item.id}>
            <VerificationRow
              item={item}
              pendingLabel={pendingLabel}
              verifiedLabel={verifiedLabel}
              onItemPress={onItemPress}
            />
          </ProfileAccountVerificationItemElement>
        ))}
      </ProfileAccountVerificationListElement>

      <ProfileAccountVerificationNoteElement>{note}</ProfileAccountVerificationNoteElement>

      <ProfileAccountVerificationExamplesElement type="button" onClick={onExamples}>
        {examplesLabel}
      </ProfileAccountVerificationExamplesElement>
    </ProfileAccountVerificationElement>
  );
};

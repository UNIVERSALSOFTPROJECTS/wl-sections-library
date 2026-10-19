import { useState, type ComponentType, type SVGProps } from "react";
import {
  CalendarIcon,
  ChevronForwardIcon,
  FingerprintIcon,
  LockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@assets/icons";
import { buildProfileEditFormValues, profilePersonalInfoFields as defaultFields } from "./data";
import { ProfileEditModal } from "./profileEditModal/ProfileEditModal";
import {
  ProfilePersonalInfoCardElement,
  ProfilePersonalInfoCardHeaderElement,
  ProfilePersonalInfoDescriptionElement,
  ProfilePersonalInfoEditElement,
  ProfilePersonalInfoEditIconElement,
  ProfilePersonalInfoElement,
  ProfilePersonalInfoFieldIconElement,
  ProfilePersonalInfoFieldTextElement,
  ProfilePersonalInfoIntroElement,
  ProfilePersonalInfoLabelElement,
  ProfilePersonalInfoListElement,
  ProfilePersonalInfoPrivacyElement,
  ProfilePersonalInfoPrivacyIconElement,
  ProfilePersonalInfoRowElement,
  ProfilePersonalInfoSectionIconElement,
  ProfilePersonalInfoSectionTitleElement,
  ProfilePersonalInfoSubtitleElement,
  ProfilePersonalInfoTitleElement,
  ProfilePersonalInfoValueElement,
} from "./ProfilePersonalInfo.elements";
import type {
  ProfileEditFormValues,
  ProfilePersonalInfoIconId,
  ProfilePersonalInfoProps,
} from "./types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

const fieldIcons: Record<ProfilePersonalInfoIconId, IconComponent> = {
  mail: MailIcon,
  phone: PhoneIcon,
  pin: MapPinIcon,
  calendar: CalendarIcon,
  fingerprint: FingerprintIcon,
};

export const ProfilePersonalInfo = ({
  title = "Todo sobre tu cuenta",
  subtitle = "Tus datos, tu estado y tus beneficios. En un solo lugar.",
  sectionTitle = "Información personal",
  sectionDescription = "Mantén tus datos actualizados.",
  editLabel = "Editar",
  fields = defaultFields,
  privacyLabel = "Solo tú puedes ver esta información.",
  onEdit,
}: ProfilePersonalInfoProps) => {
  const [editOpen, setEditOpen] = useState(false);
  const [savedValues, setSavedValues] = useState<ProfileEditFormValues>(() =>
    buildProfileEditFormValues(fields),
  );

  const displayedFields = fields.map((field) => {
    if (field.id === "email") return { ...field, value: savedValues.email };
    if (field.id === "phone") return { ...field, value: savedValues.phone };
    if (field.id === "location") return { ...field, value: savedValues.location };
    if (field.id === "birthdate" && savedValues.birthdate.trim()) {
      return { ...field, value: savedValues.birthdate };
    }
    return field;
  });

  const handleEdit = () => {
    setEditOpen(true);
    onEdit?.();
  };

  return (
    <ProfilePersonalInfoElement aria-label="Información personal">
      <ProfilePersonalInfoIntroElement>
        <ProfilePersonalInfoTitleElement>{title}</ProfilePersonalInfoTitleElement>
        <ProfilePersonalInfoSubtitleElement>{subtitle}</ProfilePersonalInfoSubtitleElement>
      </ProfilePersonalInfoIntroElement>

      <ProfilePersonalInfoCardElement>
        <ProfilePersonalInfoCardHeaderElement>
          <ProfilePersonalInfoSectionTitleElement>
            <ProfilePersonalInfoSectionIconElement aria-hidden>
              <UserIcon />
            </ProfilePersonalInfoSectionIconElement>
            {sectionTitle}
          </ProfilePersonalInfoSectionTitleElement>
          <ProfilePersonalInfoEditElement type="button" onClick={handleEdit}>
            {editLabel}
            <ProfilePersonalInfoEditIconElement aria-hidden>
              <ChevronForwardIcon />
            </ProfilePersonalInfoEditIconElement>
          </ProfilePersonalInfoEditElement>
        </ProfilePersonalInfoCardHeaderElement>

        <ProfilePersonalInfoDescriptionElement>
          {sectionDescription}
        </ProfilePersonalInfoDescriptionElement>

        <ProfilePersonalInfoListElement>
          {displayedFields.map((field) => {
            const Icon = fieldIcons[field.icon];

            return (
              <ProfilePersonalInfoRowElement key={field.id}>
                <ProfilePersonalInfoFieldIconElement aria-hidden>
                  <Icon />
                </ProfilePersonalInfoFieldIconElement>
                <ProfilePersonalInfoFieldTextElement>
                  <ProfilePersonalInfoLabelElement>{field.label}</ProfilePersonalInfoLabelElement>
                  <ProfilePersonalInfoValueElement>{field.value}</ProfilePersonalInfoValueElement>
                </ProfilePersonalInfoFieldTextElement>
              </ProfilePersonalInfoRowElement>
            );
          })}
        </ProfilePersonalInfoListElement>

        <ProfilePersonalInfoPrivacyElement>
          <ProfilePersonalInfoPrivacyIconElement aria-hidden>
            <LockIcon />
          </ProfilePersonalInfoPrivacyIconElement>
          {privacyLabel}
        </ProfilePersonalInfoPrivacyElement>
      </ProfilePersonalInfoCardElement>

      {editOpen && (
        <ProfileEditModal
          values={savedValues}
          onClose={() => setEditOpen(false)}
          onSave={(next) => {
            setSavedValues(next);
            setEditOpen(false);
          }}
        />
      )}
    </ProfilePersonalInfoElement>
  );
};

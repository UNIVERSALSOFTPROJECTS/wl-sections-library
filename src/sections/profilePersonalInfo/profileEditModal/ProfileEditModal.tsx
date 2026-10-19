import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronBackIcon, CloseIcon } from "@assets/icons";
import type { ProfileEditFormValues } from "../types";
import {
  ProfileEditModalActionsElement,
  ProfileEditModalBackElement,
  ProfileEditModalBackIconElement,
  ProfileEditModalBackdropElement,
  ProfileEditModalCancelElement,
  ProfileEditModalCloseElement,
  ProfileEditModalDescriptionElement,
  ProfileEditModalFieldElement,
  ProfileEditModalFormElement,
  ProfileEditModalHeaderElement,
  ProfileEditModalInputElement,
  ProfileEditModalIntroElement,
  ProfileEditModalLabelElement,
  ProfileEditModalNoteElement,
  ProfileEditModalPanelElement,
  ProfileEditModalRootElement,
  ProfileEditModalSaveElement,
  ProfileEditModalTitleElement,
} from "./ProfileEditModal.elements";

interface ProfileEditField {
  id: keyof ProfileEditFormValues;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
}

const editFields: ProfileEditField[] = [
  { id: "fullName", label: "Nombre completo", type: "text", autoComplete: "name" },
  { id: "username", label: "Nombre de usuario", type: "text", autoComplete: "username" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Teléfono", type: "tel", autoComplete: "tel" },
  { id: "location", label: "Ubicación", type: "text", autoComplete: "address-level2" },
  { id: "birthdate", label: "Fecha de nacimiento", type: "text", autoComplete: "bday" },
];

interface ProfileEditModalProps {
  values: ProfileEditFormValues;
  onClose: () => void;
  onSave: (values: ProfileEditFormValues) => void;
}

export const ProfileEditModal = ({ values, onClose, onSave }: ProfileEditModalProps) => {
  const titleId = useId();
  const baseId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(values);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <ProfileEditModalRootElement>
      <ProfileEditModalBackdropElement type="button" aria-label="Cerrar" onClick={onClose} />
      <ProfileEditModalPanelElement
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <ProfileEditModalHeaderElement>
          <ProfileEditModalIntroElement>
            <ProfileEditModalTitleElement id={titleId}>
              Editar mi perfil
            </ProfileEditModalTitleElement>
            <ProfileEditModalDescriptionElement>
              Actualiza tus datos personales. Tu documento se gestiona desde Seguridad.
            </ProfileEditModalDescriptionElement>
          </ProfileEditModalIntroElement>
          <ProfileEditModalCloseElement type="button" aria-label="Cerrar" onClick={onClose}>
            <CloseIcon aria-hidden />
          </ProfileEditModalCloseElement>
        </ProfileEditModalHeaderElement>

        <ProfileEditModalFormElement
          aria-label="Editar mi perfil"
          onSubmit={(event) => {
            event.preventDefault();
            onSave(draft);
          }}
        >
          {editFields.map((field, index) => (
            <ProfileEditModalFieldElement key={field.id}>
              <ProfileEditModalLabelElement htmlFor={`${baseId}-${field.id}`}>
                {field.label}
              </ProfileEditModalLabelElement>
              <ProfileEditModalInputElement
                ref={index === 0 ? firstFieldRef : undefined}
                id={`${baseId}-${field.id}`}
                type={field.type}
                autoComplete={field.autoComplete}
                value={draft[field.id]}
                onChange={(event) =>
                  setDraft((current) => ({ ...current, [field.id]: event.target.value }))
                }
              />
            </ProfileEditModalFieldElement>
          ))}

          <ProfileEditModalNoteElement>
            En una cuenta real, los cambios de email y teléfono requieren una nueva verificación.
          </ProfileEditModalNoteElement>

          <ProfileEditModalActionsElement>
            <ProfileEditModalSaveElement type="submit">Guardar cambios</ProfileEditModalSaveElement>
            <ProfileEditModalCancelElement type="button" onClick={onClose}>
              Cancelar
            </ProfileEditModalCancelElement>
          </ProfileEditModalActionsElement>
        </ProfileEditModalFormElement>

        <ProfileEditModalBackElement type="button" onClick={onClose}>
          <ProfileEditModalBackIconElement aria-hidden>
            <ChevronBackIcon />
          </ProfileEditModalBackIconElement>
          Volver a mi cuenta
        </ProfileEditModalBackElement>
      </ProfileEditModalPanelElement>
    </ProfileEditModalRootElement>,
    document.body,
  );
};

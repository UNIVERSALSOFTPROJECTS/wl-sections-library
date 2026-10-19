import { useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  CameraIcon,
  ChevronBackIcon,
  ChevronDownIcon,
  ChevronForwardIcon,
  ChevronUpIcon,
  DocumentTextIcon,
  HomeIcon,
  InfoIcon,
  LockIcon,
  ShieldIcon,
  UploadIcon,
} from "@assets/icons";
import {
  ProfileIdentityVerificationBackElement,
  ProfileIdentityVerificationBackIconElement,
  ProfileIdentityVerificationCaptureElement,
  ProfileIdentityVerificationCaptureIconElement,
  ProfileIdentityVerificationCheckboxElement,
  ProfileIdentityVerificationConfirmElement,
  ProfileIdentityVerificationContinueElement,
  ProfileIdentityVerificationContinueIconElement,
  ProfileIdentityVerificationCountElement,
  ProfileIdentityVerificationDescriptionElement,
  ProfileIdentityVerificationDropActionElement,
  ProfileIdentityVerificationDropElement,
  ProfileIdentityVerificationDropIconElement,
  ProfileIdentityVerificationDropTitleElement,
  ProfileIdentityVerificationElement,
  ProfileIdentityVerificationErrorElement,
  ProfileIdentityVerificationFileInputElement,
  ProfileIdentityVerificationHintElement,
  ProfileIdentityVerificationIntroElement,
  ProfileIdentityVerificationIntroIconElement,
  ProfileIdentityVerificationIntroTextElement,
  ProfileIdentityVerificationNoticeElement,
  ProfileIdentityVerificationNoticeIconElement,
  ProfileIdentityVerificationPrepareElement,
  ProfileIdentityVerificationPrepareIconElement,
  ProfileIdentityVerificationRemoveElement,
  ProfileIdentityVerificationRetentionElement,
  ProfileIdentityVerificationRetentionIconElement,
  ProfileIdentityVerificationSlotElement,
  ProfileIdentityVerificationSlotsElement,
  ProfileIdentityVerificationStepBodyElement,
  ProfileIdentityVerificationStepChevronElement,
  ProfileIdentityVerificationStepDescriptionElement,
  ProfileIdentityVerificationStepElement,
  ProfileIdentityVerificationStepEyebrowElement,
  ProfileIdentityVerificationStepHeaderElement,
  ProfileIdentityVerificationStepIconElement,
  ProfileIdentityVerificationStepTextElement,
  ProfileIdentityVerificationStepTitleElement,
  ProfileIdentityVerificationTitleElement,
} from "./ProfileIdentityVerification.elements";
import type { ProfileIdentityVerificationProps } from "./types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

type SlotId = "front" | "back" | "selfie" | "address";
type StepId = 1 | 2 | 3;

interface StepConfig {
  id: StepId;
  eyebrow: string;
  title: string;
  description: string;
  slots: SlotId[];
  continueLabel?: string;
  next?: StepId;
  imagesOnly?: boolean;
  captureLabel?: string;
}

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const DOCUMENT_HINT = "JPG, PNG, WEBP o PDF · Máx. 10 MB";
const IMAGE_HINT = "JPG, PNG o WEBP · Máx. 10 MB";
const DOCUMENT_ERROR = "Usa JPG, PNG, WEBP o PDF de hasta 10 MB.";
const IMAGE_ERROR = "Usa JPG, PNG o WEBP de hasta 10 MB.";
const DOCUMENT_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "pdf"];
const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const DOCUMENT_ACCEPT = ".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf";
const IMAGE_ACCEPT = ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp";

const slotLabels: Record<SlotId, string> = {
  front: "Frente del documento",
  back: "Reverso del documento",
  selfie: "Selfie",
  address: "Comprobante de domicilio",
};

const steps: StepConfig[] = [
  {
    id: 1,
    eyebrow: "Paso 1",
    title: "Documento de identidad",
    description:
      "Carga ambos lados del mismo documento, vigente y con los cuatro bordes visibles. Evita reflejos y fotos borrosas.",
    slots: ["front", "back"],
    continueLabel: "Continuar con la selfie",
    next: 2,
  },
  {
    id: 2,
    eyebrow: "Paso 2",
    title: "Tu selfie",
    description:
      "Muestra tu rostro completo, con buena luz y sin lentes oscuros. Puedes tomar una foto o elegir una que ya tengas.",
    slots: ["selfie"],
    continueLabel: "Continuar con domicilio",
    next: 3,
    imagesOnly: true,
    captureLabel: "Tomar selfie",
  },
  {
    id: 3,
    eyebrow: "Paso 3",
    title: "Prueba de domicilio",
    description:
      "Sube una factura o un resumen a tu nombre, reciente y con la dirección visible. Evita recortes y fotos borrosas.",
    slots: ["address"],
  },
];

const stepIcons: Record<StepId, IconComponent> = {
  1: DocumentTextIcon,
  2: CameraIcon,
  3: HomeIcon,
};

const isAcceptedFile = (file: File, imagesOnly: boolean) => {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  const allowed = imagesOnly ? IMAGE_EXTENSIONS : DOCUMENT_EXTENSIONS;
  return allowed.includes(extension) && file.size <= MAX_FILE_BYTES;
};

const FileSlot = ({
  label,
  hint,
  accept,
  align,
  fileName,
  error,
  onSelect,
  onClear,
}: {
  label: string;
  hint: string;
  accept: string;
  align: "center" | "left";
  fileName?: string;
  error?: string;
  onSelect: (file: File) => void;
  onClear: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <ProfileIdentityVerificationSlotElement>
      <ProfileIdentityVerificationDropElement
        type="button"
        aria-label={fileName ? `Reemplazar ${label}` : `Elegir archivo de ${label}`}
        onClick={() => inputRef.current?.click()}
      >
        <ProfileIdentityVerificationDropIconElement aria-hidden>
          <UploadIcon />
        </ProfileIdentityVerificationDropIconElement>
        <ProfileIdentityVerificationDropTitleElement>
          {fileName ?? label}
        </ProfileIdentityVerificationDropTitleElement>
        <ProfileIdentityVerificationDropActionElement>
          {fileName ? "Reemplazar" : "Elegir archivo"}
        </ProfileIdentityVerificationDropActionElement>
      </ProfileIdentityVerificationDropElement>
      <ProfileIdentityVerificationFileInputElement
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={(event) => {
          const file = event.target.files?.[0];
          event.target.value = "";
          if (file) {
            onSelect(file);
          }
        }}
      />
      <ProfileIdentityVerificationHintElement $align={align}>{hint}</ProfileIdentityVerificationHintElement>
      {fileName && (
        <ProfileIdentityVerificationRemoveElement type="button" onClick={onClear}>
          Quitar
        </ProfileIdentityVerificationRemoveElement>
      )}
      {error && <ProfileIdentityVerificationErrorElement>{error}</ProfileIdentityVerificationErrorElement>}
    </ProfileIdentityVerificationSlotElement>
  );
};

const CaptureButton = ({
  label,
  onSelect,
}: {
  label: string;
  onSelect: (file: File) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <ProfileIdentityVerificationCaptureElement type="button" onClick={() => inputRef.current?.click()}>
        <ProfileIdentityVerificationCaptureIconElement aria-hidden>
          <CameraIcon />
        </ProfileIdentityVerificationCaptureIconElement>
        {label}
      </ProfileIdentityVerificationCaptureElement>
      <ProfileIdentityVerificationFileInputElement
        ref={inputRef}
        type="file"
        accept={IMAGE_ACCEPT}
        capture="user"
        onChange={(event) => {
          const file = event.target.files?.[0];
          event.target.value = "";
          if (file) {
            onSelect(file);
          }
        }}
      />
    </>
  );
};

export const ProfileIdentityVerification = ({
  backLabel = "Volver a verificación de cuenta",
  title = "Verificación de identidad",
  description = "Tu documento, una selfie y un comprobante de domicilio. Te guiamos paso a paso.",
  onBack,
  onPrepare,
}: ProfileIdentityVerificationProps) => {
  const [files, setFiles] = useState<Partial<Record<SlotId, string>>>({});
  const [errors, setErrors] = useState<Partial<Record<SlotId, string>>>({});
  const [openStep, setOpenStep] = useState<StepId | null>(1);
  const [confirmed, setConfirmed] = useState(false);

  const fileCount = Object.keys(files).length;
  const ready = fileCount === 4 && confirmed;

  const handleSelect = (slotId: SlotId, file: File, imagesOnly: boolean) => {
    if (!isAcceptedFile(file, imagesOnly)) {
      setErrors((current) => ({
        ...current,
        [slotId]: imagesOnly ? IMAGE_ERROR : DOCUMENT_ERROR,
      }));
      return;
    }

    setFiles((current) => ({ ...current, [slotId]: file.name }));
    setErrors((current) => ({ ...current, [slotId]: undefined }));
  };

  const handleClear = (slotId: SlotId) => {
    setFiles((current) => {
      const next = { ...current };
      delete next[slotId];
      return next;
    });
    setErrors((current) => ({ ...current, [slotId]: undefined }));
  };

  return (
    <ProfileIdentityVerificationElement aria-label={title}>
      <ProfileIdentityVerificationBackElement type="button" onClick={onBack}>
        <ProfileIdentityVerificationBackIconElement aria-hidden>
          <ChevronBackIcon />
        </ProfileIdentityVerificationBackIconElement>
        {backLabel}
      </ProfileIdentityVerificationBackElement>

      <ProfileIdentityVerificationIntroElement>
        <ProfileIdentityVerificationIntroIconElement aria-hidden>
          <ShieldIcon />
        </ProfileIdentityVerificationIntroIconElement>
        <ProfileIdentityVerificationIntroTextElement>
          <ProfileIdentityVerificationTitleElement>{title}</ProfileIdentityVerificationTitleElement>
          <ProfileIdentityVerificationDescriptionElement>
            {description}
          </ProfileIdentityVerificationDescriptionElement>
        </ProfileIdentityVerificationIntroTextElement>
      </ProfileIdentityVerificationIntroElement>

      <ProfileIdentityVerificationCountElement aria-live="polite">
        {fileCount} de 4 archivos
      </ProfileIdentityVerificationCountElement>

      <ProfileIdentityVerificationNoticeElement>
        <ProfileIdentityVerificationNoticeIconElement aria-hidden>
          <InfoIcon />
        </ProfileIdentityVerificationNoticeIconElement>
        Demostración: usa archivos de prueba, no documentación real. Los archivos quedan solo en
        esta página y no se envían a un servidor.
      </ProfileIdentityVerificationNoticeElement>

      {steps.map((step) => {
        const open = openStep === step.id;
        const StepIcon = stepIcons[step.id];
        const imagesOnly = Boolean(step.imagesOnly);

        return (
          <ProfileIdentityVerificationStepElement key={step.id} id={`profile-identity-step-${step.id}`}>
            <ProfileIdentityVerificationStepHeaderElement
              type="button"
              aria-expanded={open}
              onClick={() => setOpenStep(open ? null : step.id)}
            >
              <ProfileIdentityVerificationStepIconElement aria-hidden>
                <StepIcon />
              </ProfileIdentityVerificationStepIconElement>
              <ProfileIdentityVerificationStepTextElement>
                <ProfileIdentityVerificationStepEyebrowElement>
                  {step.eyebrow}
                </ProfileIdentityVerificationStepEyebrowElement>
                <ProfileIdentityVerificationStepTitleElement>
                  {step.title}
                </ProfileIdentityVerificationStepTitleElement>
              </ProfileIdentityVerificationStepTextElement>
              <ProfileIdentityVerificationStepChevronElement aria-hidden>
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </ProfileIdentityVerificationStepChevronElement>
            </ProfileIdentityVerificationStepHeaderElement>

            {open && (
              <ProfileIdentityVerificationStepBodyElement>
                <ProfileIdentityVerificationStepDescriptionElement>
                  {step.description}
                </ProfileIdentityVerificationStepDescriptionElement>
                <ProfileIdentityVerificationSlotsElement $single={step.slots.length === 1}>
                  {step.slots.map((slotId) => (
                    <FileSlot
                      key={slotId}
                      label={slotLabels[slotId]}
                      hint={imagesOnly ? IMAGE_HINT : DOCUMENT_HINT}
                      accept={imagesOnly ? IMAGE_ACCEPT : DOCUMENT_ACCEPT}
                      align={step.slots.length === 1 ? "left" : "center"}
                      fileName={files[slotId]}
                      error={errors[slotId]}
                      onSelect={(file) => handleSelect(slotId, file, imagesOnly)}
                      onClear={() => handleClear(slotId)}
                    />
                  ))}
                </ProfileIdentityVerificationSlotsElement>
                {step.captureLabel && (
                  <CaptureButton
                    label={step.captureLabel}
                    onSelect={(file) => {
                      const slotId = step.slots[0];
                      if (slotId) {
                        handleSelect(slotId, file, true);
                      }
                    }}
                  />
                )}
                {step.continueLabel && step.next && (
                  <ProfileIdentityVerificationContinueElement
                    type="button"
                    onClick={() => {
                      const next = step.next;
                      if (!next) {
                        return;
                      }
                      setOpenStep(next);
                      requestAnimationFrame(() => {
                        document.getElementById(`profile-identity-step-${next}`)?.scrollIntoView({
                          block: "nearest",
                        });
                      });
                    }}
                  >
                    {step.continueLabel}
                    <ProfileIdentityVerificationContinueIconElement aria-hidden>
                      <ChevronForwardIcon />
                    </ProfileIdentityVerificationContinueIconElement>
                  </ProfileIdentityVerificationContinueElement>
                )}
              </ProfileIdentityVerificationStepBodyElement>
            )}
          </ProfileIdentityVerificationStepElement>
        );
      })}

      <ProfileIdentityVerificationConfirmElement>
        <ProfileIdentityVerificationCheckboxElement
          type="checkbox"
          checked={confirmed}
          onChange={(event) => setConfirmed(event.target.checked)}
        />
        Revisé los cuatro archivos y confirmo que corresponden a la misma persona y que la
        información es legible.
      </ProfileIdentityVerificationConfirmElement>

      <ProfileIdentityVerificationRetentionElement>
        <ProfileIdentityVerificationRetentionIconElement aria-hidden>
          <LockIcon />
        </ProfileIdentityVerificationRetentionIconElement>
        Puedes reemplazar o eliminar tus archivos antes de continuar. Este prototipo no los
        conserva al salir de la cuenta o recargar.
      </ProfileIdentityVerificationRetentionElement>

      <ProfileIdentityVerificationPrepareElement type="button" disabled={!ready} onClick={onPrepare}>
        <ProfileIdentityVerificationPrepareIconElement aria-hidden>
          <ShieldIcon />
        </ProfileIdentityVerificationPrepareIconElement>
        Preparar verificación
      </ProfileIdentityVerificationPrepareElement>
    </ProfileIdentityVerificationElement>
  );
};

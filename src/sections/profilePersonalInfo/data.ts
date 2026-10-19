import type { ProfileEditFormValues, ProfilePersonalInfoField } from "./types";

export const buildProfileEditFormValues = (
  fields: ProfilePersonalInfoField[],
): ProfileEditFormValues => ({
  fullName: "Carlos Martínez",
  username: "carlosmartinez",
  email: fields.find((field) => field.id === "email")?.value ?? "",
  phone: fields.find((field) => field.id === "phone")?.value ?? "",
  location: fields.find((field) => field.id === "location")?.value ?? "",
  birthdate: "",
});

export const profilePersonalInfoFields: ProfilePersonalInfoField[] = [
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: "carlos.martinez@email.com",
  },
  {
    id: "phone",
    icon: "phone",
    label: "Teléfono",
    value: "+54 11 2345-6789",
  },
  {
    id: "location",
    icon: "pin",
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
  },
  {
    id: "birthdate",
    icon: "calendar",
    label: "Fecha de nacimiento",
    value: "6/8/1994",
  },
  {
    id: "document",
    icon: "fingerprint",
    label: "Documento de identidad",
    value: "DNI · •••• 4821",
  },
  {
    id: "memberSince",
    icon: "calendar",
    label: "Miembro desde",
    value: "Marzo de 2024",
  },
];

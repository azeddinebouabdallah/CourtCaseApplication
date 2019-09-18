import * as Yup from "yup";

const petitionsAttachmentsForm: IFormElement[] = [
  {
    type: "file",
    name: "attachments",
    label: "Petitions Attachments:",
    validation: {} as any
  }
];

export { petitionsAttachmentsForm };

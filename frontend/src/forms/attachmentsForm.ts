import * as Yup from "yup";

const attachmentsForm: IFormElement[] = [
  {
    type: "file",
    name: "attachments",
    label: "Parties Attachments:",
    validation: {} as any
  }
];

export { attachmentsForm };

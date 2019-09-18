import * as Yup from "yup";

const newTestForm: IFormElement[] = [
  {
    type: "text",
    name: "email",
    label: "Email",
    validation: Yup.string().required("First name is required")
  }
];

export { newTestForm };

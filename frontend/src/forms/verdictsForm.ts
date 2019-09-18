import * as Yup from "yup";

const verdictsForm: IFormElement[] = [
  {
    type: "multiline_text",
    name: "verdict",
    label: "Verdict:",
    validation: Yup.string().required("This field is required")
  }
];

export { verdictsForm };

import * as Yup from "yup";

const decisionsForm: IFormElement[] = [
  {
    type: "number",
    name: "decisionNumber",
    label: "Decision number: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "decision_date",
    label: "Date: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "source",
    label: "Source: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "decision",
    label: "Decision: ",
    validation: Yup.string().required("This field is required")
  },
  {
    ///   links: string[];
    type: "picker",
    name: "links",
    label: "Links: ",
    validation: Yup.string().required("This field is required")
  }
];

export { decisionsForm };

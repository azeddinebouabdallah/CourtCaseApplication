import * as Yup from "yup";

const noticesForm: IFormElement[] = [
  {
    type: "number",
    name: "noticeNumber",
    label: "Notice number:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "type",
    label: "Type:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "registrationDate",
    label: "Registration date:",
    validation: Yup.string().required("This field is required")
  },
  {
    ///   links: string[];
    type: "picker",
    name: "links",
    label: "Links:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "picker",
    name: "parties",
    label: "Party:",
    validation: Yup.string().required("This field is required")
  }
];

export { noticesForm };

import * as Yup from "yup";

const petitionsForm: IFormElement[] = [
  {
    type: "text",
    name: "subject",
    label: "Subject: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "petition_date",
    label: "Petition date: ",
    validation: Yup.string().required("This field is required")
  },
  {
    ///   links: string[];
    type: "picker",
    name: "links",
    label: "Links: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "applicant",
    label: "Applicant: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "positionNumber",
    label: "Position number: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "decisionNumber",
    label: "Decision number: ",
    validation: Yup.string().required("This field is required")
  },
  {
    //multilineeee (text field - description)
    type: "text",
    name: "decisionAbstract",
    label: "Decision abstract: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "session_date",
    label: "Session date: ",
    validation: Yup.string().required("This field is required")
  }
];

export { petitionsForm };

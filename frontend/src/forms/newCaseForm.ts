import * as Yup from "yup";

const options = [
  {
    key: 1,
    text: "Open"
  },
  {
    key: 2,
    text: "in progress"
  },
  {
    key: 3,
    text: "in dispute"
  }
];

const newCaseForm: IFormElement[] = [
  {
    type: "text",
    name: "caseNumber",
    label: "Case Number:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "subject",
    label: "Subject:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "fileLocation",
    label: "File Location:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "claimedAmount",
    label: "Claimed Amount: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "submitDate",
    label: "Submit Date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "registrationDate",
    label: "Registration Date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "firstSessionDate",
    label: "First Session Date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "dropdown",
    name: "caseStatus",
    label: "Case Status:",
    validation: Yup.string().required("This field is required"),
    options: options
  },
  {
    type: "date",
    name: "nextSessionDate",
    label: "Next Session Date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "hall",
    label: "Hall",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "secretaryName",
    label: "Secretary Name:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "latestSessionDate",
    label: "Latest session date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "rootCaseNumber",
    label: "Root case number: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "dateOfAssignation",
    label: "Date of assignation:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "meetingDate",
    label: "Meeting date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "date",
    name: "dueDate",
    label: "Due date:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "managedBy",
    label: "Managed by: ",
    validation: Yup.string().required("This field is required"),
    options: options
  },
  {
    type: "number",
    name: "paymentAmount",
    label: "Payment Amount:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "paymentStatus",
    label: "Payment Status:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "picker",
    name: "partiesNames",
    label: "Parties Names:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "picker",
    name: "partiesAddresses",
    label: "Parties Addresses:",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "picker",
    name: "notes",
    label: "Notes:",
    validation: Yup.string().required("This field is required")
  }
];

export { newCaseForm };

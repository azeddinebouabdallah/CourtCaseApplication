import * as Yup from "yup";

const claimsForm: IFormElement[] = [
  {
    type: "number",
    name: "initialClaimAmount",
    label: "Initial claim amount: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "currentClaimAmount",
    label: "Current claim amount: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "balanceClaimAmount",
    label: "Balance claim amount: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "claimDetails",
    label: "Claim details: ",
    validation: Yup.string().required("This field is required")
  }
];

export { claimsForm };

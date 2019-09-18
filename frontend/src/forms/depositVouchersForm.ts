import * as Yup from "yup";

const depositVouchersForm: IFormElement[] = [
  {
    type: "number",
    name: "year",
    label: "Year: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "text",
    name: "type",
    label: "Type: ",
    validation: Yup.string().required("This field is required")
  },
  {
    type: "number",
    name: "amount",
    label: "Amount: ",
    validation: Yup.string().required("This field is required")
  }
];

export { depositVouchersForm };

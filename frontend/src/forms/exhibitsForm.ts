import * as Yup from "yup";

const exhibitsForm: IFormElement[] = [
  {
    type: "multiline_text",
    name: "description",
    label: "Description",
    validation: Yup.string().required("This field is required")
  }
];

export { exhibitsForm };

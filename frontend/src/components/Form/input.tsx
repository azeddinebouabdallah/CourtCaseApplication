import React from "react";
import { TextField } from "office-ui-fabric-react";
import { FormikErrors } from "formik";

interface IProps {
  label: string;
  error?: string | FormikErrors<any>;
  onChange: IFormikChangeEvent;
  value: string | undefined;
  name: string;
  onBlur: IFormikBlurEvent;
  type: string;
}
const FormInput = ({
  label,
  error,
  onChange,
  onBlur,
  value,
  name,
  type
}: IProps) => (
  <React.Fragment>
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      label={label}
      errorMessage={error as string}
      type={type}
    />
  </React.Fragment>
);
export default FormInput;

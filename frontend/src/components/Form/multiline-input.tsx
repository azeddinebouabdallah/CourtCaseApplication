import React from "react";
import { TextField } from "office-ui-fabric-react";
import { FormikErrors } from "formik";
import { TextFieldNew } from "../../styled";

interface IProps {
  label: string;
  error?: string | FormikErrors<any>;
  onChange: IFormikChangeEvent;
  value: string | undefined;
  name: string;
  onBlur: IFormikBlurEvent;
  type: string;
}
const FormMultiInput = ({
  label,
  error,
  onChange,
  onBlur,
  value,
  name,
  type
}: IProps) => (
  <React.Fragment>
    <TextFieldNew
      multiline
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      label={label}
      errorMessage={error as string}
      type={type}
      resizable={false}
      autoAdjustHeight
    />
  </React.Fragment>
);
export default FormMultiInput;

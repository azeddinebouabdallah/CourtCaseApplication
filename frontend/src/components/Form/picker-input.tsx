import React from "react";
import { FormikErrors } from "formik";
import { Label } from "office-ui-fabric-react";
import { Picker } from "./picker";

interface IProps {
  label: string;
  onChange: IFormikChangeEvent;
  onBlur: IFormikBlurEvent;
}
const PickerInput = ({ label, onChange }: IProps) => (
  <React.Fragment>
    <Label>{label}</Label>
    {/* <Picker /> */}
    </React.Fragment>
);
export default PickerInput;

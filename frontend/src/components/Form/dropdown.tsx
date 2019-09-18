import React, { FormEvent } from "react";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react";
import { FormikErrors } from "formik";

interface IProps {
  label: string;
  error?: string | FormikErrors<any>;
  onChange: IFormikChangeEvent;
  value: Date;
  name: string;
  onBlur: IFormikBlurEvent;
  options?: IDropdownOption[];
}

const handleChangeValue = (
  onChange: IFormikChangeEvent,
  name: string,
  onBlur: IFormikBlurEvent
) => (
  event: FormEvent<HTMLDivElement>,
  option: IDropdownOption | undefined
) => {
  if (event) {
    if (onChange && option) {
      onChange({
        target: {
          value: option.text,
          name
        }
      } as any);
      if (onBlur) {
        onBlur({
          target: {
            name
          }
        } as any);
      }
    }
  }
};

const FormDropdown = ({
  label,
  error,
  onChange,
  onBlur,
  name,
  options
}: IProps) => (
  <Dropdown
    label={label}
    options={options || []}
    onChange={handleChangeValue(onChange, name, onBlur)}
    ariaLabel="aria label default"
    errorMessage={error as string}
  />
);

export default FormDropdown;

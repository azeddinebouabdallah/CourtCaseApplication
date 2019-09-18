import React from "react";
import { DatePicker, DelayedRender } from "office-ui-fabric-react";
import { FormikErrors } from "formik";

interface IProps {
  label: string;
  error?: string | FormikErrors<any>;
  onChange: IFormikChangeEvent;
  value: Date;
  name: string;
  onBlur: IFormikBlurEvent;
}

const handleChangeDate = (
  onChange: IFormikChangeEvent,
  name: string,
  onBlur: IFormikBlurEvent
) => (date: Date | null | undefined) => {
  if (date) {
    if (onChange) {
      onChange({
        target: {
          value: date,
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

const styleFunction = (
  error: string | FormikErrors<any> | undefined
) => () => ({
  textField: error
    ? {
        selectors: {
          " div": { borderColor: "rgb(164, 38, 44)" },
          " div:hover": { borderColor: "rgb(164, 38, 44)" }
        }
      }
    : {}
});

const FormDateInput = ({
  label,
  error,
  onChange,
  onBlur,
  value,
  name
}: IProps) => (
  <React.Fragment>
    <DatePicker
      label={label}
      onSelectDate={handleChangeDate(onChange, name, onBlur)}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      styles={styleFunction(error)}
      value={value}
    />
    {error && (
      <div role="alert">
        <DelayedRender>
          <p className="ms-TextField-errorMessage">
            <span className="custom-error" data-automation-id="error-message">{error}</span>
          </p>
        </DelayedRender>
      </div>
    )}
  </React.Fragment>
);
export default FormDateInput;

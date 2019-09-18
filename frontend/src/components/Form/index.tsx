import React, { Component } from "react";
import _ from "lodash";
import * as Yup from "yup";
import { Formik, FormikProps, FormikValues } from "formik";
import FormInput from "./input";
import {
  Layout,
  SHADOWS,
  FabricLabel,
  COLORS,
  FabricButton
} from "../../styled";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";
import { observer, inject } from "mobx-react";
import PromiseStore from "../../store/PromiseStore";
import Forms from "../../forms";
import Loader from "../loader";
import FormDateInput from "./dateInput";
import FormDropdown from "./dropdown";
import FormMultiInput from "./multiline-input";
import { Picker } from "./picker";
import PickerInput from "./picker-input";
import RootStore from "../../store/RootStore";
import MultiFileInput from "./multifile-input";
import config from "../../lib/config";

interface IProps {
  formTitle: string;
  buttonText: string;
  title?: string;
  width?: string;
  handleAfterSubmit?: () => void;
}

interface IInjectedProps {
  form: { [key: string]: PromiseStore };
  store: RootStore;

  extraProps?: { [key: string]: string | number };
}

@inject("store")
// ({ store }) => ({
//   form: store.form,
//   store
// }))
@observer
class Form extends Component<IProps & IInjectedProps> {
  _formik: React.RefObject<Formik>;

  form: IFormElement[];

  constructor(props: IProps & IInjectedProps) {
    super(props);

    const { formTitle } = props;

    this._formik = React.createRef();

    this.form = Forms[formTitle];
  }

  handleSubmit = async (data: FormikValues) => {
    console.log(data, "AAAAAA");
    if (data.notes) {
      let tempArray: string[] = [];
      data.notes.forEach((element: any) => {
        tempArray.push(`${element.name}`);
      });
      data.notes = tempArray;
    }
    if (data.partiesNames) {
      let tempArray: string[] = [];
      data.partiesNames.forEach((element: any) => {
        tempArray.push(`${element.name}`);
      });
      data.partiesNames = tempArray;
    }
    if (data.partiesAddresses) {
      let tempArray: string[] = [];
      data.partiesAddresses.forEach((element: any) => {
        tempArray.push(`${element.name}`);
      });
      data.partiesAddresses = tempArray;
    }
    if (data.links) {
      let tempArray: string[] = [];
      data.links.forEach((element: any) => {
        tempArray.push(`${element.name}`);
      });
      data.links = tempArray;
    }
    if (data.parties) {
      let tempArray: string[] = [];
      data.parties.forEach((element: any) => {
        tempArray.push(`${element.name}`);
      });
      data.parties = tempArray;
    }

    console.log(data, "BBBBBBB");

    const { form, formTitle, extraProps, handleAfterSubmit } = this.props;
    const { store } = this.props;

    const formRequest = this.props.store.form[formTitle];

    const formController = _.get(this, "_formik.current");

    console.log(formRequest, formController, "ZZZZZZZZZZZZ");

    const constructedRequest = {
      ...data,

      ...(extraProps || {})
    };

    if (store.getCaseParties.caseId) {
      constructedRequest.caseId = store.getCaseParties.caseId;
    }

    if (data.attachments) {
      let fData = new FormData();
      fData.append("caseId", constructedRequest["caseId"]);
      Object.values(data.attachments).map((item: any) => {
        fData.append("file", item);
      });

      const response = await fetch(`${config.endpoints.api}${formRequest.endpoint.uri}`, {
        method: formRequest.endpoint.method,
        body: fData
      });

      if (response && response.status === 201) {
        // const data = await response.json();
        // console.log(data);
        // if (store && data.case) {
        //   store.getCaseParties.__hardSetCase(data.case.id);
        // }
      }
      if (handleAfterSubmit) handleAfterSubmit();

    } else {

      await formRequest.fetch(constructedRequest).then((response: any) => {
        if (response && response.status < 300) {
          const data = response.data;
          if (store && data.case) {
            store.getCaseParties.__hardSetCase(data.case.id);
          }
        }
        if (handleAfterSubmit) handleAfterSubmit();
      });
    }

    formController.setSubmitting(false);
  };

  render() {
    const { store, formTitle, title, buttonText } = this.props;

    const requestForm = store.form[formTitle];

    const responseError = _.get(requestForm, "error.message");

    const validationSchemaBase: IValidationSchemaBase = {};

    const initialValues: FormikValues = {};

    this.form.forEach((item: IFormElement) => {
      validationSchemaBase[item.name] = item.validation;

      initialValues[item.name] = item.initialValue;
    });
    // console.log(validationSchemaBase);
    return (
      <Layout displayFlex justifyCenter width={"100%"}>
        <Layout displayFlex justifyCenter alignCenter>
          <Layout
            displayFlex
            column
            justifyCenter
            //boxShadow={SHADOWS.FORM}
            padding={"20px"}
            width={this.props.width ? this.props.width : "300px"}
          >
            {title ? (
              <Layout
                borderBottom={"1.5px solid" + COLORS.LIGHT_GREY}
                displayFlex
                margin={"0px 0px 20px 0px"}
              >
                <FabricLabel
                  color={COLORS.PRIMARY}
                  fontSize={25}
                  center
                  bold
                  marginBottom={20}
                >
                  {title}
                </FabricLabel>{" "}
              </Layout>
            ) : (
              ""
            )}
            <Formik
              onSubmit={this.handleSubmit}
              validationSchema={Yup.object().shape(validationSchemaBase)}
              initialValues={initialValues}
              ref={this._formik}
            >
              {(props: FormikProps<FormikValues>) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  submitCount
                } = props;
                let leftColumn: IFormElement[] = [];
                let rightColumn: IFormElement[] = [];
                if (this.form.length >= 8) {
                  leftColumn = this.form.slice(0, this.form.length / 2);
                  rightColumn = this.form.slice(
                    this.form.length / 2,
                    this.form.length
                  );
                } else {
                  rightColumn = this.form;
                }
                const hasBeenSubmitted = submitCount > 0;
                return (
                  <form onSubmit={handleSubmit}>
                    {responseError && (
                      <Layout width="100%" margin="0 0 10px 0">
                        <MessageBar
                          messageBarType={MessageBarType.error}
                          isMultiline
                        >
                          {responseError}
                        </MessageBar>
                      </Layout>
                    )}

                    {!!store.form.success && (
                      <Layout width="100%" margin="0 0 10px 0">
                        <MessageBar
                          messageBarType={MessageBarType.success}
                          isMultiline
                        >
                          Success [TODO: Handle messages]
                        </MessageBar>
                      </Layout>
                    )}
                    <Layout displayFlex row justifyBetween>
                      {leftColumn.length > 0 && (
                        <Layout margin="0 20px 0 0" width={"100%"}>
                          {leftColumn.map((elem: IFormElement) => {
                            switch (elem.type) {
                              case "date":
                                return (
                                  <FormDateInput
                                    key={elem.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[elem.name]}
                                    label={elem.label}
                                    error={
                                      !!touched[elem.name] || hasBeenSubmitted
                                        ? errors[elem.name]
                                        : undefined
                                    }
                                    name={elem.name}
                                  />
                                );
                              case "file":
                                return (
                                  <MultiFileInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[elem.name]}
                                    name={elem.name}
                                    label={elem.label}
                                  />
                                );
                              case "dropdown":
                                return (
                                  <FormDropdown
                                    key={elem.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[elem.name]}
                                    label={elem.label}
                                    error={
                                      !!touched[elem.name] || hasBeenSubmitted
                                        ? errors[elem.name]
                                        : undefined
                                    }
                                    name={elem.name}
                                    options={elem.options}
                                  />
                                );
                              case "multiline_text":
                                return (
                                  <FormMultiInput
                                    type={elem.type}
                                    key={elem.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[elem.name]}
                                    label={elem.label}
                                    error={
                                      !!touched[elem.name] || hasBeenSubmitted
                                        ? errors[elem.name]
                                        : undefined
                                    }
                                    name={elem.name}
                                  />
                                );
                              case "picker":
                                return (
                                  <Picker
                                    key={elem.name}
                                    label={elem.label}
                                    error={
                                      !!touched[elem.name] || hasBeenSubmitted
                                        ? errors[elem.name]
                                        : undefined
                                    }
                                    value={values[elem.name]}
                                    onChange={handleChange}
                                    name={elem.name}
                                  />
                                );
                              // case "picker":
                              //   return <Picker selectedItems={values} />;
                              default:
                                return (
                                  <FormInput
                                    type={elem.type}
                                    key={elem.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[elem.name]}
                                    label={elem.label}
                                    error={
                                      !!touched[elem.name] || hasBeenSubmitted
                                        ? errors[elem.name]
                                        : undefined
                                    }
                                    name={elem.name}
                                  />
                                );
                            }
                          })}
                        </Layout>
                      )}
                      <Layout width={"100%"}>
                        {rightColumn.map((elem: IFormElement) => {
                          switch (elem.type) {
                            case "date":
                              return (
                                <FormDateInput
                                  key={elem.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[elem.name]}
                                  label={elem.label}
                                  error={
                                    !!touched[elem.name] || hasBeenSubmitted
                                      ? errors[elem.name]
                                      : undefined
                                  }
                                  name={elem.name}
                                />
                              );
                            case "dropdown":
                              return (
                                <FormDropdown
                                  key={elem.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[elem.name]}
                                  label={elem.label}
                                  error={
                                    !!touched[elem.name] || hasBeenSubmitted
                                      ? errors[elem.name]
                                      : undefined
                                  }
                                  name={elem.name}
                                  options={elem.options}
                                />
                              );
                            case "multiline_text":
                              return (
                                <FormMultiInput
                                  type={elem.type}
                                  key={elem.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[elem.name]}
                                  label={elem.label}
                                  error={
                                    !!touched[elem.name] || hasBeenSubmitted
                                      ? errors[elem.name]
                                      : undefined
                                  }
                                  name={elem.name}
                                />
                              );
                            case "file":
                              return (
                                <MultiFileInput
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[elem.name]}
                                  name={elem.name}
                                  label={elem.label}
                                />
                              );
                            case "picker":
                              return (
                                <Picker
                                  key={elem.name}
                                  label={elem.label}
                                  error={
                                    !!touched[elem.name] || hasBeenSubmitted
                                      ? errors[elem.name]
                                      : undefined
                                  }
                                  value={values[elem.name]}
                                  onChange={handleChange}
                                  name={elem.name}
                                />
                              );
                            default:
                              return (
                                <FormInput
                                  type={elem.type}
                                  key={elem.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values[elem.name]}
                                  label={elem.label}
                                  error={
                                    !!touched[elem.name] || hasBeenSubmitted
                                      ? errors[elem.name]
                                      : undefined
                                  }
                                  name={elem.name}
                                />
                              );
                          }
                        })}
                      </Layout>
                    </Layout>

                    <Layout
                      width="100%"
                      displayFlex
                      row
                      alignCenter
                      justifyEnd
                      padding="20px 0 0 0"
                      marginBottom={"20px"}
                    >
                      {isSubmitting && <Loader />}

                      <FabricButton
                        disabled={isSubmitting}
                        text={buttonText}
                        type="submit"
                        color={COLORS.PRIMARY}
                        marginBottom={20}
                        width={"30%"}
                      />
                    </Layout>
                  </form>
                );
              }}
            </Formik>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default (Form as unknown) as React.ComponentClass<IProps>;

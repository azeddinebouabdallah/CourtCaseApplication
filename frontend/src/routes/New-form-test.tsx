import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";

@inject("store")
class newTestForm extends React.Component {
  render(): JSX.Element {
    return (
      <Form formTitle="newTestForm" title={"Test"} buttonText={"Submit"} />
    );
  }
}

export default newTestForm;

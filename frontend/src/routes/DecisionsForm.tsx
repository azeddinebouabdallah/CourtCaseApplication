import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import RootStore from "../store/RootStore";

interface IProps {
  store?: RootStore;
}

@inject("store")
class DecisionsForm extends React.Component<IProps> {
  handleAfterSubmit = () => {
    const { store } = this.props;
    if (store) {
      store.getStepper.setCurrentStep("5");
    }
  };

  render(): JSX.Element {
    return (
      <Form
        formTitle="decisionsForm"
        buttonText={"Submit"}
        width={"800px"}
        handleAfterSubmit={this.handleAfterSubmit}
      />
    );
  }
}

export default DecisionsForm;

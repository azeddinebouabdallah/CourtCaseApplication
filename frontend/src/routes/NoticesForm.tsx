import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import RootStore from "../store/RootStore";

interface IProps {
  store?: RootStore;
}

@inject("store")
class NoticesForm extends React.Component<IProps> {
  handleAfterSubmit = () => {
    const { store } = this.props;
    if (store) {
      store.getStepper.setCurrentStep('4')
    }
  };

  render(): JSX.Element {
    return (
      <Form
        formTitle="noticesForm"
        buttonText={"Submit"}
        width={"800px"}
        handleAfterSubmit={this.handleAfterSubmit}
      />
    );
  }
}

export default NoticesForm;

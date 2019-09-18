import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import RootStore from "../store/RootStore";

interface IProps {
  store?: RootStore;
  history?: {
    push(url: string): void;
  };
}

@inject("store")
class AttachmentsForm extends React.Component<IProps> {
  handleAfterSubmit = () => {
    const { history, store } = this.props;
    if (store) {
      store.getStepper.setCurrentStep('2')
    }
    if (history) history.push("/exhibits");
  };

  render(): JSX.Element {
    return (
        <Form
            formTitle="attachmentsForm"
            buttonText={"Submit"}
            width={"800px"}
            handleAfterSubmit={this.handleAfterSubmit}
        />
    );
  }
}

export default AttachmentsForm;

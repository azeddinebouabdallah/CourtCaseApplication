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
class PetitionsAttachmentsForm extends React.Component<IProps> {
  handleAfterSubmit = () => {
    const { history, store } = this.props;
    if (store) {
      store.getStepper.setCurrentStep('7')
    }
    if (history) history.push("/verdicts");
  };

  render(): JSX.Element {
    return (
        <Form
            formTitle="petitionsAttachmentsForm"
            buttonText={"Submit"}
            width={"800px"}
            handleAfterSubmit={this.handleAfterSubmit}
        />
    );
  }
}

export default PetitionsAttachmentsForm;

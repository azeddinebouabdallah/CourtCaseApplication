import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import { Layout } from "../styled/index";
import RootStore from "../store/RootStore";

interface IProps {
  store?: RootStore;
  history?: {
    push(url: string): void;
  };
}

@inject("store")
class NewCaseForm extends React.Component<IProps> {
  handleAfterSubmit = () => {
    const { store, history } = this.props;
    if (store) {
      // store.getCaseParties.setCaseId();
      // Unlock all steps
      store.getStepper.setLocked(false);
      store.getStepper.setCurrentStep("1");
    }
    if (history) history.push("/attachments");
  };
  render(): JSX.Element {
    return (
      <Layout justifyCenter alignCenter displayFlex>
        <Form
          formTitle="newCaseForm"
          // title={"Create new case"}
          buttonText={"Submit"}
          width={"800px"}
          handleAfterSubmit={this.handleAfterSubmit}
        />
      </Layout>
    );
  }
}

export default NewCaseForm;

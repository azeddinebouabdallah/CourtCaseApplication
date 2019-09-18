import { inject } from "mobx-react";
import React from "react";
import Form from "../components/Form";
import RootStore from "../store/RootStore";
import Navigation from "../components/sideNavigation";
import { Layout } from "../styled/index";
import casePreviewData from "../constants/preview";

interface IProps {
  store?: RootStore;
  history?: {
    push(url: string): void;
  };
}

interface IState {
  caseData: any[];
}

@inject("store")
class ExhibitsForm extends React.Component<IProps, IState> {
  public state = {
    caseData: []
  };
  public componentWillMount() {
    const {
      location: { pathname }
    } = window;
    const { store } = this.props;
    if (store) {
      store.getCaseParties
        .fetch({
          id: pathname.substring(14) || `${store.getCaseParties.caseId}`
        })
        .then(() => {
          store.getCaseParties.setCaseId();
          this.setState({ caseData: casePreviewData(store) });
        });
    }
  }
  handleAfterSubmit = () => {
    const { history, store } = this.props;
    if (store) {
      store.getStepper.setCurrentStep('3')
    }
    if (history) history.push("/notices");
  };

  render(): JSX.Element {
    const { store } = this.props;
    return (
      <Form
        formTitle="exhibitsForm"
        buttonText={"Submit"}
        width={"800px"}
        handleAfterSubmit={this.handleAfterSubmit}
      />
    );
  }
}

export default ExhibitsForm;

import React from "react";
import { Layout, FabricButton, COLORS } from "../styled";
import Navigation from "../components/sideNavigation";
import { createNewCase } from "../constants/create";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import RootStore from "../store/RootStore";
import Header from "../components/header";

interface IProps {
  store: RootStore;
}

interface IState {
  caseData: any[];
}

class CreateCase extends React.Component<IProps, IState> {
  public state = {
    caseData: []
  };

  clearStepper = () => {
    const { store }: { store: RootStore } = this.props;
    if (store) {
      store.getStepper.setLocked(true);
      store.getStepper.setCurrentStep("0");

      store.getCaseParties.__hardSetCase("0");
    }
  };

  componentDidMount = () => {
    this.clearStepper();
  };

  componentWillUnmount = () => {
    this.clearStepper();
  };

  render(): JSX.Element {
    const { caseData } = this.state;
    return (
      <Layout>
        <Navigation
          items={createNewCase}
          store={this.props.store}
          disabling={true}
        />
      </Layout>
    );
  }
}

const enhance = compose<IProps, IState>(
  inject("store"),
  observer
);

export default enhance(CreateCase);
// export default Case;

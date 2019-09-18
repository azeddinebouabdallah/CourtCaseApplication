import React from "react";
import { Layout } from "../styled";
import Navigation from "../components/sideNavigation";
import casePreviewData from "../constants/preview";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import RootStore from "../store/RootStore";

interface IProps {
  store: RootStore;
}

interface IState {
  caseData: any[];
}

@inject('store')
class Case extends React.Component<IProps, IState> {
  public state = {
    caseData: []
  };
  public componentWillMount() {
    const {
      location: { pathname }
    } = window;
    const { store } = this.props;
    store.getCaseParties
      .fetch({
        id: pathname.substring(14)
      })
      .then(() => {
        store.getCaseParties.setData();
        this.setState({ caseData: casePreviewData(store) });
      });
  }
  render(): JSX.Element {
    const { caseData } = this.state;
    return (
      <Layout displayFlex column justifyCenter>
        <Navigation store={this.props.store} items={caseData} disabling={false} />
      </Layout>
    );
  }
}

const enhance = compose<IProps, IState>(
  inject("store"),
  observer
);

export default enhance(Case);
// export default Case;

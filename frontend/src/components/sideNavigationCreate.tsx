import {
  Pivot,
  PivotItem,
  IStyleSet,
  IPivotStyles,
  Modal
} from "office-ui-fabric-react";
import React from "react";
import { IPreview } from "../constants/preview";
import { Layout, COLORS, FabricButton } from "../styled";
import { IUserTable } from "../interfaces/userInterface";
import { observer, inject } from "mobx-react";
import { loadTheme } from "office-ui-fabric-react";
import RootStore from "../store/RootStore";

loadTheme({
  palette: {
    themePrimary: COLORS.PRIMARY
  }
});

const pivotStyles: Partial<IStyleSet<IPivotStyles>> = {
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0px 20px 20px"
  },
  itemContainer: {
    display: "flex",
    backgroundColor: "gray",
    position: "absolute",
    top: "0px",
    left: "100px"
  },
  linkIsSelected: {
    background: "white"
  },
  linkContent: {
    fontSize: "18px"
  }
};

interface IProps {
  items: IPreview[];
  store: RootStore;
  disabling: boolean;
}

@observer
class Navigation extends React.Component<IProps> {
  state = {
    openModal: false
  };

  get currentStepKey() {
    return this.props.store.getStepper.currentStep || "0";
  }

  get currentComponent() {
    const currentItem = this.props.items[Number(this.currentStepKey)];
    return currentItem ? currentItem.component : null;
  }

  closeModal = () => {
    this.setState({ openModal: false });
  };

  openModal = () => {
    this.setState({ openModal: true });
  };

  onLinkClick = (item: any) => {
    if (this.props.store.getStepper.locked && this.props.disabling) {
      this.openModal()
      return;
    }
    this.props.store.getStepper.setCurrentStep(item.props.itemKey);
  };

  render(): JSX.Element {
    const { items } = this.props;
    return (
      <Layout displayFlex row>
        <Layout displayFlex column>
          <Pivot
            styles={pivotStyles}
            selectedKey={this.currentStepKey}
            onLinkClick={this.onLinkClick}
          >
            {items.map(item => {
              console.log('Tu sam', 'Testing 102', item)
              return (
                <PivotItem
                  headerText={item.headerText}
                  headerButtonProps={{
                    "data-order": item.headerButtonProps.dataOrder,
                    "data-title": item.headerButtonProps.dataTitle
                  }}
                  itemKey={item.key}
                />
              );
            })}
          </Pivot>
          <FabricButton text="Submit" marginTop={20} />
        </Layout>
        <Layout width="100%">{this.currentComponent}</Layout>
        <Modal
          styles={{
            main: { padding: 50 },
            scrollableContent: { height: 70 }
          }}
          isOpen={this.state.openModal}
          onDismiss={this.closeModal}
          isBlocking={false}
        >
          <h3>Please fill in parties form</h3>

          <FabricButton text={"Got it"} onClick={this.closeModal} marginTop={20} />
        </Modal>
      </Layout>
    );
  }
}

export default Navigation;

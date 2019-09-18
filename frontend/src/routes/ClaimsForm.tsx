import { inject } from "mobx-react";
import React from "react";
import { compose } from "recompose";
import { Modal } from "office-ui-fabric-react";
import Form from "../components/Form";
import { FabricButton } from "../styled";
import { withRouter } from "react-router";
import RootStore from "../store/RootStore";

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}

class ClaimsForm extends React.Component<IProps> {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });
  closeModal = () => this.setState({ open: false });

  onModalClose = () => {
    this.closeModal()
    const { history } = this.props;
    history.push("/");
  }

  handleAfterSubmit = () => {
    this.openModal();
  };

  render(): JSX.Element {
    return (
      <>
        <Form
          formTitle="claimsForm"
          buttonText={"Submit"}
          width={"800px"}
          handleAfterSubmit={this.handleAfterSubmit}
        />

        <Modal
          styles={{
            main: { padding: 50 },
            scrollableContent: { height: 70 }
          }}
          isOpen={this.state.open}
          onDismiss={this.onModalClose}
          isBlocking={false}
        >
          <h3>Creating was completed successfully</h3>

          <FabricButton
            text={"Got it"}
            onClick={this.onModalClose}
            marginTop={20}
          />
        </Modal>
      </>
    );
  }
}

const enhance = compose<IProps, {}>(
  inject("store"),
  withRouter
);

export default enhance(ClaimsForm);


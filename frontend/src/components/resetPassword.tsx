import React from "react";
import {
  Layout,
  FabricButton,
  FabricInput,
  FabricLabel,
  COLORS
} from "../styled/index";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import RootStore from "../store/RootStore";
import routes from "../constants/routes";

interface IState {
  password: string;
  errors: {
    password?: string;
  };
}

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}
class ResetPassword extends React.Component<IProps, IState> {
  public state: IState = {
    password: "",
    errors: {
      password: ""
    }
  };

  public handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ password: target.value });
  };

  public resetErrors = () => {
    this.setState({
      errors: {
        password: ""
      }
    });
  };
  public resetFormValues = () => {
    this.setState({
      password: "",
      errors: {
        password: ""
      }
    });
  };

  public validateInputs = () => {
    const { password, errors } = this.state;
    let valid = true;
    const formErrors = Object.assign({}, errors);
    formErrors.password = "";

    if (password === "") {
      formErrors.password = "Password is required field";
      valid = false;
    }

    this.setState({ errors: formErrors });
    return valid;
  };

  public handleSubmit = () => {
    if (this.validateInputs()) {
      this.resetPassword();
      this.resetFormValues();
    }
  };
  public resetPassword = () => {
    const { store } = this.props;
    const { password } = this.state;
    const {
      location: { pathname }
    } = window;
    store.resetPassword
      .fetch({
        password: password,
        resetToken: pathname.substring(16)
      })
      .then(() => {
        const message: IMessage = store.resetPassword.resetPassword();
        // console.log(message);
        this.props.history.push(routes.LOGIN);
        store.notification.setMessage(message.text, message.status);
      });
  };

  render(): JSX.Element {
    const { password, errors } = this.state;
    return (
      <Layout justifyCenter alignCenter displayFlex height={"100vh"}>
        <Layout
          height={"300px"}
          width={"350px"}
          boxShadow={"0 0 16px 0px rgba(0, 0, 0, 0.23)"}
          padding={"20px"}
          borderRadius={"5px"}
          justifyCenter
          displayFlex
          column
        >
          <Layout
            borderBottom={"1.5px solid" + COLORS.LIGHT_GREY}
            displayFlex
            margin={"0px 0px 20px 0px"}
          >
            <FabricLabel
              color={COLORS.PRIMARY}
              fontSize={25}
              center
              bold
              marginBottom={20}
            >
              Enter your new password
            </FabricLabel>
          </Layout>
          <FabricInput
            marginBottom={20}
            label="Password: "
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={e => this.handleOnChange(e)}
            errorMessage={errors.password}
          />
          <FabricButton
            text="Submit"
            type="submit"
            color={COLORS.PRIMARY}
            onClick={this.handleSubmit}
          />
        </Layout>
      </Layout>
    );
  }
}

const enhance = compose<IProps, IState>(
  inject("store"),
  observer
);

export default enhance(ResetPassword);

import React from "react";
import {
  Layout,
  FabricInput,
  FabricButton,
  FabricLabel,
  COLORS
} from "../styled/index";
import { inject, observer } from "mobx-react";
import { compose } from "recompose";
import RootStore from "../store/RootStore";

interface IState {
  email: string;
  errors: {
    email?: string;
  };
}

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}
class ForgotPassword extends React.Component<IProps, IState> {
  public state: IState = {
    email: "",
    errors: {
      email: ""
    }
  };

  public handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ email: target.value });
  };

  public resetErrors = () => {
    this.setState({
      errors: {
        email: ""
      }
    });
  };
  public resetFormValues = () => {
    this.setState({
      email: "",
      errors: {
        email: ""
      }
    });
  };

  public validateEmail = (email: string) => {
    // eslint-disable-next-line
    const emailRegExp = /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegExp.test(email);
  };

  public validateInputs = () => {
    const { email, errors } = this.state;
    let valid = true;
    const formErrors = Object.assign({}, errors);
    formErrors.email = "";
    if (email === "") {
      formErrors.email = "Email is required field";
      valid = false;
    }

    if (!this.validateEmail(email)) {
      formErrors.email = "Email is not valid";
      valid = false;
    }

    this.setState({ errors: formErrors });
    return valid;
  };

  public handleSubmit = () => {
    if (this.validateInputs()) {
      this.forgotPassword();
      this.resetFormValues();
    }
  };

  public forgotPassword = () => {
    const { store } = this.props;
    const { email } = this.state;
    store.forgotPassword
      .fetch({
        email: email
      })
      .then(() => {
        const message: IMessage = store.forgotPassword.sendMail();
        if (message.status >= 400 && message.status <= 499) {
          this.setState({
            errors: {
              email: message.text
            }
          });
        }
        store.notification.setMessage(message.text, message.status);
      });
  };

  render(): JSX.Element {
    const { email, errors } = this.state;
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
            column
            margin={"0px 0px 20px 0px"}
            centerText
          >
            <FabricLabel
              fontSize={30}
              center
              bold
              marginBottom={20}
              color={COLORS.PRIMARY}
            >
              Forgot password
            </FabricLabel>
            <FabricLabel fontSize={14} center marginBottom={20}>
              The reset password link will be sent to the entered email.
            </FabricLabel>
          </Layout>
          <FabricInput
            marginBottom={20}
            label="Email: "
            placeholder="jonh@doe.com"
            name="email"
            value={email}
            onChange={e => this.handleOnChange(e)}
            errorMessage={errors.email}
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

export default enhance(ForgotPassword);

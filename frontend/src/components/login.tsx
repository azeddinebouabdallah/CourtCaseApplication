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
import "react-toastify/dist/ReactToastify.css";

interface IState {
  email: string;
  password: string;
  errors: {
    email?: string;
    password?: string;
  };
}

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}
class Login extends React.Component<IProps, IState> {
  public state: IState = {
    email: "",
    password: "",
    errors: {
      email: "",
      password: ""
    }
  };

  public handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ): void => {
    const target = event.target as HTMLTextAreaElement;
    switch (name) {
      case "email":
        this.setState({ email: target.value });
        break;
      case "password":
        this.setState({ password: target.value });
        break;
      default:
        return;
    }
  };

  public resetErrors = () => {
    this.setState({
      errors: {
        email: "",
        password: ""
      }
    });
  };
  public resetFormValues = () => {
    this.setState({
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    });
  };
  public validateEmail = (email: string) => {
    // eslint-disable-next-line
    const emailRegExp = /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegExp.test(email);
  };
  public validateInputs = () => {
    const { email, password, errors } = this.state;
    let valid = true;
    const formErrors = Object.assign({}, errors);
    formErrors.email = "";
    formErrors.password = "";

    if (!this.validateEmail(email)) {
      formErrors.email = "Email is not valid";
      valid = false;
    }

    if (email === "") {
      formErrors.email = "Email is required field";
      valid = false;
    }

    if (password === "") {
      formErrors.password = "Password is required field";
      valid = false;
    }

    this.setState({ errors: formErrors });
    return valid;
  };

  public handleSubmit = () => {
    if (this.validateInputs()) {
      this.login();
      this.resetFormValues();
    }
  };

  public writeMessage(message: string) {
    const { errors } = this.state;
    const formErrors = Object.assign({}, errors);
    formErrors.email = message;
    formErrors.password = message;
    this.setState({ errors: formErrors });
  }
  public login = () => {
    const { store, history } = this.props;
    const { email, password, errors } = this.state;
    const formErrors = Object.assign({}, errors);
    store.loginUser
      .fetch({
        email: email,
        password: password
      })
      .then(() => {
        const message = store.loginUser.userLogin(); // samo data
        if (message.status >= 400 && message.status <= 499) {
          formErrors.email = message.text;
          formErrors.password = message.text;
          this.setState({ errors: formErrors });
        } else if (message.status === 200) {
          history.push(routes.APP);
        }
        store.notification.setMessage(message.text, message.status);
      });
  };

  render(): JSX.Element {
    const { email, password, errors } = this.state;
    return (
      <Layout justifyCenter alignCenter displayFlex height={"100vh"}>
        <Layout
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
              Log in with your account
            </FabricLabel>
          </Layout>
          <FabricInput
            label="Email: "
            marginBottom={10}
            placeholder="example@email.com"
            name="email"
            onChange={e => this.handleOnChange(e, "email")}
            value={email}
            errorMessage={errors.email}
          />
          <FabricInput
            marginBottom={20}
            label="Password: "
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={e => this.handleOnChange(e, "password")}
            errorMessage={errors.password}
          />
          <FabricButton
            text="Login"
            color={COLORS.PRIMARY}
            type="submit"
            marginBottom={20}
            onClick={this.handleSubmit}
          />
          <Layout
            borderTop={"1.5px solid" + COLORS.LIGHT_GREY}
            displayFlex
            padding={"10px 0px 0px 0px"}
          >
            <a href="/forgot-password">
              {" "}
              <FabricLabel pointer>Forgot your password?</FabricLabel>{" "}
            </a>
          </Layout>
          <a href="/create-account">
              {" "}
              <FabricLabel pointer>Register?</FabricLabel>{" "}
            </a>
        </Layout>
      </Layout>
    );
  }
}

const enhance = compose<IProps, IState>(
  inject("store"),
  observer
);

export default enhance(Login);

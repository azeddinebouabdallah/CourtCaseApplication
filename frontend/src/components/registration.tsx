import React from "react";
import {
  Layout,
  FabricButton,
  FabricInput,
  FabricLabel,
  COLORS
} from "../styled";
import { observer, inject } from "mobx-react";
import { compose } from "recompose";
import RootStore from "../store/RootStore";
import routes from "../constants/routes";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  };
}

interface IProps {
  store: RootStore;
  history: {
    push(url: string): void;
  };
}

class Registration extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    };
  }

  public handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ): void => {
    const target = event.target as HTMLTextAreaElement;
    switch (name) {
      case "firstName":
        this.setState({ firstName: target.value });
        break;
      case "lastName":
        this.setState({ lastName: target.value });
        break;
      case "email":
        this.setState({ email: target.value });
        return;
      case "password":
        this.setState({ password: target.value });
        return;
      case "passwordConfirm":
        this.setState({ passwordConfirm: target.value });
        return;
      default:
        return;
    }
  };

  public validateEmail = (email: string) => {
    // eslint-disable-next-line
    const emailRegExp = /(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegExp.test(email);
  };

  public resetErrors = () => {
    this.setState({
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }
    });
  };

  public resetFormValues = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    });
  };

  public validateInputs = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      errors
    } = this.state;
    let valid = true;
    const formErrors = Object.assign({}, errors);
    formErrors.firstName = "";
    formErrors.lastName = "";
    formErrors.email = "";
    formErrors.password = "";
    formErrors.passwordConfirm = "";
    const insertedEmail = this.validateEmail(email !== undefined ? email : "");

    if (!insertedEmail) {
      formErrors.email = "This is not a valid email address";
      valid = false;
    }

    if (firstName === "") {
      formErrors.firstName = "First name is required field";
      valid = false;
    }
    if (lastName === "") {
      formErrors.lastName = "Last name is required field";
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

    if (passwordConfirm === "") {
      formErrors.passwordConfirm = "Confirm password is required field";
      valid = false;
    }

    if (password !== passwordConfirm) {
      formErrors.passwordConfirm = "Passwords do not match";
      valid = false;
    }

    this.setState({ errors: formErrors });
    return valid;
  };

  public handleSubmit = () => {
    if (this.validateInputs()) {
      this.signup();
    }
  };

  public signup = () => {
    const { store } = this.props;
    const { firstName, lastName, email, password } = this.state;
    store.postUser
      .fetch({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: "lawyer"
      })
      .then(() => {
        const message: IMessage = store.postUser.userRegister();
        if (message.status >= 400 && message.status <= 499) {
          this.setState({
            errors: {
              email: message.text
            }
          });
        } else if (message.status === 200) {
          this.resetFormValues();
          this.resetErrors();
          this.props.history.push(routes.LOGIN);
        }
        store.notification.setMessage(message.text, message.status);
      });
  };

  render(): JSX.Element {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      errors
    } = this.state;
    return (
      <Layout
        width={"100%"}
        height={"100vh"}
        displayFlex
        justifyCenter
        alignCenter
      >
        <Layout
          displayFlex
          justifyCenter
          column
          boxShadow={"0 0 16px 0px rgba(0, 0, 0, 0.23);"}
          padding={"30px"}
          borderRadius={"5px"}
          width={"350px"}
        >
          <Layout
            borderBottom={"1.5px solid" + COLORS.LIGHT_GREY}
            displayFlex
            margin={"0px 0px 10px 0px"}
          >
            <FabricLabel
              color={COLORS.PRIMARY}
              fontSize={25}
              bold
              center
              marginBottom={30}
            >
              Register new user
            </FabricLabel>
          </Layout>
          <FabricInput
            label="First name: "
            marginBottom={10}
            placeholder="John"
            name="firstName"
            onChange={e => this.handleOnChange(e, "firstName")}
            value={firstName}
            errorMessage={errors.firstName}
          />
          <FabricInput
            label="Last name: "
            marginBottom={10}
            placeholder="Doe"
            name="lastName"
            onChange={e => this.handleOnChange(e, "lastName")}
            value={lastName}
            errorMessage={errors.lastName}
          />
          <FabricInput
            label="Email: "
            marginBottom={10}
            placeholder="john.doe@gmail.com"
            name="email"
            onChange={e => this.handleOnChange(e, "email")}
            value={email}
            errorMessage={errors.email}
          />
          <FabricInput
            type="password"
            label="Password: "
            marginBottom={10}
            placeholder="******"
            name="password"
            onChange={e => this.handleOnChange(e, "password")}
            errorMessage={errors.password}
            value={password}
          />
          <FabricInput
            type="password"
            marginBottom={20}
            label="Confirm password: "
            placeholder="******"
            name="passwordConfirm"
            onChange={e => this.handleOnChange(e, "passwordConfirm")}
            errorMessage={errors.passwordConfirm}
            value={passwordConfirm}
          />
          <FabricButton
            color={COLORS.PRIMARY}
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </FabricButton>
        </Layout>
      </Layout>
    );
  }
}

const enhance = compose<IProps, IState>(
  inject("store"),
  observer
);

export default enhance(Registration);

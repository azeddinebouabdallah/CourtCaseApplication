import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import NextSessions from "./NextSessions";
import Login from "../components/login";
import Registration from "../components/registration";
import ForgotPassword from "../components/forgotPassword";
import ResetPassword from "../components/resetPassword";
import newTestForm from "./New-form-test";
import newCaseForm from "./NewCaseForm";
import attachmentsForm from "./AttachmentsForm";
import petitionsAttachmentsForm from "./petitionsAttachmentsForm";
import CasePreview from "./Case";
import exhibitsForm from "./ExhibitsForm";
import noticesForm from "./NoticesForm";
import decisionsForm from "./DecisionsForm";
import petitionsForm from "./PetitionsForm";
import verdictsForm from "./VerdictsForm";
import depositVouchersForm from "./DepositVouchersForm";
import claimsForm from "./ClaimsForm";
import Header from "../components/header";
import CreateCase from "./CreateCase";
import Menu from "../components/Menu";
import SevenDays from "../components/sevendays/sevenDays"

class Router extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/create-account" component={Registration} />
          <Route
            exact={true}
            path="/reset-password/:resetToken"
            component={ResetPassword}
          />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/nextsessions" component={SevenDays} />
          <Route
            exact={true}
            path="/forgot-password"
            component={ForgotPassword}
          />
          <Route exact={true} path="/test" component={newTestForm} />
          <Route exact={true} path="/create-case" component={newCaseForm} />
          <Route
            exact={true}
            path="/preview-case/:id"
            component={CasePreview}
          />
          <Route exact={true} path="/attachments" component={attachmentsForm} />
          <Route exact={true} path="/attachmentsPetition" component={petitionsAttachmentsForm} />
          <Route exact={true} path="/exhibits" component={exhibitsForm} />
          <Route exact={true} path="/notices" component={noticesForm} />
          <Route exact={true} path="/decisions" component={decisionsForm} />
          <Route exact={true} path="/petitions" component={petitionsForm} />
          <Route exact={true} path="/verdicts" component={verdictsForm} />
          <Route
            exact={true}
            path="/deposit-vouchers"
            component={depositVouchersForm}
          />
          <Route exact={true} path="/claims" component={claimsForm} />
          <Route exact={true} path="/create" component={CreateCase} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

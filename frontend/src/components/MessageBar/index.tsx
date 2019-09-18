import React, { Component } from "react";
import { MessageBar, MessageBarType } from "office-ui-fabric-react";
import { Layout } from "../../styled";

const ErrorBar = (responseError: string): JSX.Element => (
  <Layout width="100%" margin="0 0 10px 0">
    <MessageBar messageBarType={MessageBarType.error} isMultiline>
      {responseError}
    </MessageBar>
  </Layout>
);

export default ErrorBar;

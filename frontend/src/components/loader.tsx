import React from "react";
import { Spinner, SpinnerSize } from "office-ui-fabric-react";
import { Layout } from "../styled";

const Loader = (): JSX.Element => (
  <Layout margin="0 20px 0 0">
    <Spinner size={SpinnerSize.medium} />
  </Layout>
);

export default Loader;

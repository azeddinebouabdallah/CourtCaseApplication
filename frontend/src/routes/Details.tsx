import { inject } from "mobx-react";
import React from "react";
import Table from "../components/table";
import { IUserTable } from "../interfaces/userInterface";
import Header from "../components/header";
import DataList from "../components/table";
import { initializeIcons } from "@uifabric/icons";
import { Layout } from "../styled";

initializeIcons();

type TableProps = {
  [key: string]: string;
};
interface IProps {
  history: {
    push(url: string): void;
  };
}
@inject("store")
class Home extends React.Component {
  render(): JSX.Element {
    // const userItems_vol2: IUserTable[] = [
    //   { case_number: 123, subject: 'detail', claimed_amount: 134, registration_date: '2019-07-30', case_status: 'casestatus1' },
    //   { case_number: 234, subject: 'detail2', claimed_amount: 265, registration_date: '2019-07-30', case_status: 'casestatus2' },
    //   { case_number: 345, subject: 'info', claimed_amount: 343, registration_date: '2019-07-30', case_status: 'casestatus3' },
    // ];
    // const userItems: TableProps[] = createTableProps(userItems_vol2);
    return (
      <Layout displayFlex column>
        {/* <Header /> */}
        {/*
        <DataList items={userItems} />
        */}
      </Layout>
    );
  }
}

export default Home;

import { IColumn } from "office-ui-fabric-react";

export const depositVouchersColumns: IColumn[] = [
  {
    key: "dv1",
    name: "Year",
    fieldName: "year",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "dv2",
    name: "Type",
    fieldName: "type",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "dv3",
    name: "Amount",
    fieldName: "amount",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  }
];

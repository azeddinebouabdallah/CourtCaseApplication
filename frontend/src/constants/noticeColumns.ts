import { IColumn } from "office-ui-fabric-react";

export const noticesColumns: IColumn[] = [
  {
    key: "notice1",
    name: "noticeNumber",
    fieldName: "noticeNumber",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "notice2",
    name: "Type",
    fieldName: "type",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "notice3",
    name: "Registration date",
    fieldName: "registrationDate",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "date"
  },
  {
    key: "notice4",
    name: "Links",
    fieldName: "links",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "array"
  },
  {
    key: "notice5",
    name: "Party",
    fieldName: "parties",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "array"
  }
];

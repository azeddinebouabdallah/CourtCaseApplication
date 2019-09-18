import { IColumn } from "office-ui-fabric-react";

export const decisionsColumns: IColumn[] = [
  {
    key: "decisions1",
    name: "decisionNumber",
    fieldName: "decisionNumber",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "decisions2",
    name: "Date",
    fieldName: "date",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "date"
  },
  {
    key: "decisions3",
    name: "Source",
    fieldName: "source",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "decisions4",
    name: "Decision",
    fieldName: "decision",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "decisions5",
    name: "Links",
    fieldName: "links",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "array"
  }
];

import { IColumn } from "office-ui-fabric-react";

export const attachmentsColumns: IColumn[] = [
  {
    key: "attachment",
    name: "Parties attachments",
    fieldName: "url",
    minWidth: 150,
    maxWidth: 600,
    isResizable: true,
    data: "button"
  }
];

import { IColumn } from "office-ui-fabric-react";

export const petitionsAttachmentsColumns: IColumn[] = [
  {
    key: "attachment",
    name: "Petitions attachments",
    fieldName: "url",
    minWidth: 150,
    maxWidth: 600,
    isResizable: true,
    data: "button"
  }
];

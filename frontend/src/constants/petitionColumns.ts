import { IColumn } from "office-ui-fabric-react";

export const petitionColumns: IColumn[] = [
  {
    key: "petitions1",
    name: "Petition date",
    fieldName: "petitionDate",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "date"
  },
  {
    key: "petitions2",
    name: "Subject",
    fieldName: "subject",
    minWidth: 90,
    maxWidth: 110,
    isResizable: true
  },
  {
    key: "decisions5",
    name: "Links",
    fieldName: "links",
    minWidth: 60,
    maxWidth: 80,
    isResizable: true,
    data: "array"
  },
  {
    key: "petitions4",
    name: "Applicant",
    fieldName: "applicant",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "petitions5",
    name: "Position number",
    fieldName: "positionNumber",
    minWidth: 80,
    maxWidth: 90,
    isResizable: true
  },
  {
    key: "petitions6",
    name: "decisionNumber",
    fieldName: "decisionNumber",
    minWidth: 60,
    maxWidth: 80,
    isResizable: true
  },
  {
    key: "petitions7",
    name: "decisionAbstract",
    fieldName: "decisionAbstract",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "petitions8",
    name: "Session date",
    fieldName: "sessionDate",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true,
    data: "date"
  }
];

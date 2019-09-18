import { IColumn } from "office-ui-fabric-react";

export const claimsColumns: IColumn[] = [
  {
    key: "claims1",
    name: "Initial claim amount",
    fieldName: "initialClaimAmount",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "claims2",
    name: "Current claim amount",
    fieldName: "currentClaimAmount",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "claims3",
    name: "Balance claim amount",
    fieldName: "balanceClaimAmount",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  },
  {
    key: "claims4",
    name: "Claim details",
    fieldName: "claimDetails",
    minWidth: 150,
    maxWidth: 170,
    isResizable: true
  }
];

import React from "react";
import Table from "../components/table";
import RootStore from "../store/RootStore";
import { partiesColumns } from "./partiesColumns";
import { ICase } from "./caseInterfaces";
import { attachmentsColumns } from "./attachmentsColumns";
import { exhibitsColumns } from "./exhibitsColumns";
import { noticesColumns } from "./noticeColumns";
import { decisionsColumns } from "./decisionsColumns";
import { petitionColumns } from "./petitionColumns";
import { verdictsColumns } from "./verdictsColumns";
import { depositVouchersColumns } from "./depositVouchersColumns";
import { claimsColumns } from "./claimsColumns";
import { Observer } from "mobx-react";
import NewCaseForm from "../routes/NewCaseForm";
import { petitionsAttachmentsColumns } from "./petitionsAttachmentsColumns";

export interface IPreview {
  key: string;
  headerText: string;
  headerButtonProps: {
    dataOrder: number;
    dataTitle: string;
  };
  component: JSX.Element;
}

export default function casePreviewData(store: RootStore): IPreview[] {
  const caseData: ICase = JSON.parse(store.getCaseParties.caseData || "{}");
  console.log("test",caseData )
  /* const testing:any = caseData;
  let stringic: string = testing.notes[0];
  const objNotes = JSON.parse(stringic)
  testing.notes = [];
  testing.notes.push(objNotes.name)
 */
  // console.log("depositVouchers[]", caseData.depositVouchers);
  return [
    {
      key: "0",
      headerText: "Parties",
      headerButtonProps: {
        dataOrder: 1,
        dataTitle: "Parties"
      },
      component: <Table items={[caseData]} columns={partiesColumns} reverse />
    },
    {
      key: "1",
      headerText: "Attachments",
      headerButtonProps: {
        dataOrder: 2,
        dataTitle: "Attachments"
      },
      component: <Table items={caseData.attachments} columns={attachmentsColumns} />
    },
    {
      key: "2",
      headerText: "Exhibits",
      headerButtonProps: {
        dataOrder: 3,
        dataTitle: "Exhibits"
      },
      component: <Table items={caseData.exhibits} columns={exhibitsColumns} />
    },
    {
      key: "3",
      headerText: "Notices",
      headerButtonProps: {
        dataOrder: 4,
        dataTitle: "Notices"
      },
      component: <Table items={caseData.notices} columns={noticesColumns} />
    },
    {
      key: "4",
      headerText: "Decisions",
      headerButtonProps: {
        dataOrder: 5,
        dataTitle: "Decisions"
      },
      component: <Table items={caseData.decisions} columns={decisionsColumns} />
    },
    {
      key: "5",
      headerText: "Petitions",
      headerButtonProps: {
        dataOrder: 6,
        dataTitle: "Petitions"
      },
      component: <Table items={caseData.petitions} columns={petitionColumns} />
    },
    {
      key: "6",
      headerText: "Attachments",
      headerButtonProps: {
        dataOrder: 7,
        dataTitle: "Attachments"
      },
      component: <Table items={caseData.petitionsAttachments} columns={petitionsAttachmentsColumns} />
    },
    {
      key: "7",
      headerText: "Verditcs",
      headerButtonProps: {
        dataOrder: 8,
        dataTitle: "Verditcs",
      },
      component: <Table items={caseData.verdicts} columns={verdictsColumns} />
    },
    {
      key: "8",
      headerText: "Deposit vouchers",
      headerButtonProps: {
        dataOrder: 9,
        dataTitle: "Deposit vouchers"
      },
      component: (
        <Table
          items={caseData.depositVouchers}
          columns={depositVouchersColumns}
        />
      )
    },
    {
      key: "9",
      headerText: "Claims",
      headerButtonProps: {
        dataOrder: 10,
        dataTitle: "Claims"
      },
      component: <Table items={caseData.claims} columns={claimsColumns} />
    }
  ];
}

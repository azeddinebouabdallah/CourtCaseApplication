import React from "react";
import Table from "../components/table";

import NewCaseForm from "../routes/NewCaseForm";
import ExhibitsForm from "../routes/ExhibitsForm";
import NoticesForm from "../routes/NoticesForm";
import DecisionsForm from "../routes/DecisionsForm";
import PetitionsForm from "../routes/PetitionsForm";
import VerdictsForm from "../routes/VerdictsForm";
import DepositVouchersForm from "../routes/DepositVouchersForm";
import ClaimsForm from "../routes/ClaimsForm";
import AttachmentsForm from "../routes/AttachmentsForm";
import PetitionsAttachmentsForm from "../routes/petitionsAttachmentsForm";
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

export const createNewCase: IPreview[] = [
  {
    key: "0",
    headerText: "Parties",
    headerButtonProps: {
      dataOrder: 1,
      dataTitle: "Parties"
    },
    component: <NewCaseForm />
  },
  {
    key: "1",
    headerText: "Parties Attachments",
    headerButtonProps: {
      dataOrder: 2,
      dataTitle: "Attachments"
    },
    component: <AttachmentsForm />
  },
  {
    key: "2",
    headerText: "Exhibits",
    headerButtonProps: {
      dataOrder: 3,
      dataTitle: "Exhibits"
    },
    component: <ExhibitsForm />
  },
  {
    key: "3",
    headerText: "Notices",
    headerButtonProps: {
      dataOrder: 4,
      dataTitle: "Notices"
    },
    component: <NoticesForm />
  },
  {
    key: "4",
    headerText: "Decisions",
    headerButtonProps: {
      dataOrder: 5,
      dataTitle: "Decisions"
    },
    component: <DecisionsForm />
  },
  {
    key: "5",
    headerText: "Petitions",
    headerButtonProps: {
      dataOrder: 6,
      dataTitle: "Petitions"
    },
    component: <PetitionsForm />
  },
  {
    key: "6",
    headerText: "Petitions Attachments",
    headerButtonProps: {
      dataOrder: 7,
      dataTitle: "petitionsAttachments"
    },
    component: <PetitionsAttachmentsForm />
  },
  {
    key: "7",
    headerText: "Verditcs",
    headerButtonProps: {
      dataOrder: 8,
      dataTitle: "Verditcs"
    },
    component: <VerdictsForm />
  },
  {
    key: "8",
    headerText: "Deposit vouchers",
    headerButtonProps: {
      dataOrder: 9,
      dataTitle: "Deposit vouchers"
    },
    component: <DepositVouchersForm />
  },
  {
    key: "9",
    headerText: "Claims",
    headerButtonProps: {
      dataOrder: 10,
      dataTitle: "Claims"
    },
    component: <ClaimsForm />
  }
];

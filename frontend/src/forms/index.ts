import { newTestForm } from "./new-test-form";
import { newCaseForm } from "./newCaseForm";
import { attachmentsForm } from "./attachmentsForm";
import { petitionsAttachmentsForm } from "./petitionsAttachmentsForm";
import { exhibitsForm } from "./exhibitsForm";
import { noticesForm } from "./noticesForm";
import { decisionsForm } from "./decisionsForm";
import { petitionsForm } from "./petitionsForm";
import { verdictsForm } from "./verdictsForm";
import { depositVouchersForm } from "./depositVouchersForm";
import { claimsForm } from "./claimsForm";

const Forms: { [key: string]: IFormElement[] } = {
  newTestForm,
  newCaseForm,
  attachmentsForm,
  petitionsAttachmentsForm,
  exhibitsForm,
  noticesForm,
  decisionsForm,
  petitionsForm,
  verdictsForm,
  depositVouchersForm,
  claimsForm
};

export default Forms;

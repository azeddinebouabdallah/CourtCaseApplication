import { decorate, action, observable } from "mobx";
import PromiseStore from "./PromiseStore";
import { ICase } from "../constants/caseInterfaces";

export default class CaseStore extends PromiseStore {
  caseData: string = "";
  caseId: string | { [key: string]: string } = "0";

  setData = () => {
    if (this.success && this.data) {
      const _case = (this.data as unknown) as ICase;
      if (_case.decisions && _case.decisions.length)
        _case.lastDecisions =
          _case.decisions[_case.decisions.length - 1].decision;
      // console.log(JSON.stringify(_case));
      this.caseData = JSON.stringify(_case as ICase);
      this.caseId = this.data.id;
      // console.log("CASE STORE", this.caseData);
    }
  };

  setCaseId = () => {
    if (this.success && this.data) {
      console.log(this.data.id);
      this.caseId = this.data.id;
    }
  };

  __hardSetCase = (caseId: string) => {
    this.caseId = caseId;
  };
}

decorate(CaseStore, {
  caseData: observable,
  caseId: observable,
  setData: action
});

// if (this.success && this.data) {
//   this.caseData = (this.data as unknown) as ICase;
//   console.log(
//     "DECISION",
//     this.caseData.decisions as IDecision,
//     this.caseData.decisions && this.caseData.decisions[0]
//       ? this.caseData.decisions[this.caseData.decisions.length - 1].decision
//       : "nema"
//   );
//   this.caseData.lastDecisions = this.caseData.decisions
//     ? this.caseData.decisions[this.caseData.decisions.length - 1].decision
//     : "";
//   this.caseId = this.data.id;
//   console.log("CASE STORE", this.caseData);
// }

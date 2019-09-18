import { decorate, action, observable } from "mobx";

import { IStepper } from "../constants/caseInterfaces";

export default class StepperStore implements IStepper {
  currentStep = "";
  locked = true;
  constructor() {
    this.currentStep = "0";
    this.locked = true;
  }

  setCurrentStep = (currentStep: string) => {
    this.currentStep = currentStep;
  };

  setLocked = (isLocked: boolean) => {
    this.locked = isLocked;
  };
}

decorate(StepperStore, {
  currentStep: observable,
  locked: observable,
  setCurrentStep: action,
  setLocked: action
});

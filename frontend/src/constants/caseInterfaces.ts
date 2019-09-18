export interface ICase {
  caseNumber?: string;
  subject?: string;
  fileLocation?: string;
  claimedAmount?: number;
  submitDate?: Date;
  registrationDate?: Date;
  firstSessionDate?: Date;
  caseStatus?: string;
  nextSessionDate?: Date;
  hall?: string;
  secretaryName?: string;
  lastDecisions?: string;
  latestSessionDate?: Date;
  rootCaseNumber?: string;
  dateOfAssignation?: Date;
  meetingDate?: Date;
  dueDate?: Date;
  managedBy?: string;
  paymentAmount?: number;
  links: any[];
  paymentStatus?: string;
  latestDecisions?: IDecision[];
  claims?: IClaim[];
  decisions?: IDecision[];
  depositVouchers?: IDepositVoucher[];
  exhibits?: IExhibit[];
  notices?: INotice[];
  petitions?: IPetition[];
  verdicts?: IVerdict[];
  attachments?: any;
  petitionsAttachments?: any;

}

export interface IStepper {
  currentStep: string;
  setCurrentStep: (currentStep: string) => void;
}

export interface IExhibit {
  description?: string;
}

export interface IVerdict {
  verdict?: string;
}

export interface IClaim {
  initialClaimAmount?: Number;
  currentClaimAmount?: Number;
  balanceClaimAmount?: Number;
  claimDetails?: string;
}

export interface IDecision {
  decisionNumber?: number;
  date?: Date;
  source?: string;
  decision?: string;
  links?: string;
}

export interface IDepositVoucher {
  year?: Number;
  type?: string;
  amount?: Number;
}

export interface IFile {
  url?: string;
  author?: string;
}

export interface INotice {
  noticeNumber?: string;
  type?: string;
  registrationDate?: Date;
  links?: string;
  parties?: string;
}

export interface IPetition {
  petitionDate?: Date;
  subject?: string;
  links?: string[];
  applicant?: string;
  positionNumber?: number;
  decisionNumber?: number;
  decisionAbstract?: string;
  sessionDate?: Date;
}

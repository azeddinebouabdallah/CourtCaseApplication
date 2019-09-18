import { ApiModelProperty } from '@nestjs/swagger';
import { DecisionDto } from './decision/decision.docs';

export class CaseDto {
  @ApiModelProperty({ required: false, description: 'case number' })
  id: number;

  @ApiModelProperty({ required: false, description: 'case number' })
  caseNumber: string;

  @ApiModelProperty({ required: false, description: 'subject' })
  subject: string;

  @ApiModelProperty({ required: false, description: 'file location' })
  fileLocation: string;

  @ApiModelProperty({ required: false, description: 'claimed amount' })
  claimedAmount: number;

  @ApiModelProperty({ required: false, description: 'submit date' })
  submitDate: Date;

  @ApiModelProperty({ required: false, description: 'registration date' })
  registrationDate: Date;

  @ApiModelProperty({ required: false, description: 'first session date' })
  firstSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'case status' })
  caseStatus: string;

  @ApiModelProperty({ required: false, description: 'next session date' })
  nextSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'hall' })
  hall: string;

  @ApiModelProperty({ required: false, description: 'secretary name' })
  secretaryName: string;

  // @ApiModelProperty({ required: false, description: 'last decision' })
  // lastDecisions: DecisionDto;

  @ApiModelProperty({ required: false, description: 'latest session date' })
  latestSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'root case number' })
  rootCaseNumber: string;

  @ApiModelProperty({ required: false, description: 'date of assignation' })
  dateOfAssignation: Date;

  @ApiModelProperty({ required: false, description: 'meeting date' })
  meetingDate: Date;

  @ApiModelProperty({ required: false, description: 'due date' })
  dueDate: Date;

  @ApiModelProperty({ required: false, description: 'managed by' })
  managedBy: string;

  @ApiModelProperty({ required: false, description: 'payment amount' })
  paymentAmount: number;

  @ApiModelProperty({ required: false, description: 'payment status' })
  paymentStatus: string; // mozda enum

  @ApiModelProperty({ required: false, description: 'parties addresses' })
  partiesAddresses: string[];

  @ApiModelProperty({ required: false, description: 'parties names' })
  partiesNames: string[];

  @ApiModelProperty({ required: false, description: 'notes' })
  notes: string[];

  @ApiModelProperty({ required: false, description: 'attachements' })
  attachments: FileDto[];

  @ApiModelProperty({ required: false, description: 'petitionsAttachements' })
  petitionsAttachments: FileDto[];

  @ApiModelProperty({ required: false, description: 'exhibits' })
  exhibits: ExhibitDto[];

  @ApiModelProperty({ required: false, description: 'notices' })
  notices: NoticeDto[];

  @ApiModelProperty({ required: false, description: 'decisions' })
  decisions: DecisionDto[];

  @ApiModelProperty({ required: false, description: 'petitions' })
  petitions: PetitionDto[];

  @ApiModelProperty({ required: false, description: 'verdicts' })
  verdicts: VerdictDto[];

  @ApiModelProperty({ required: false, description: 'depositVouchers' })
  depositVouchers: DepositVoucherDto[];

  @ApiModelProperty({ required: false, description: 'claims' })
  claims: ClaimDto[];
}

export class CreateCaseDto {
  @ApiModelProperty({ required: false, description: 'case number' })
  caseNumber: string;

  @ApiModelProperty({ required: false, description: 'subject' })
  subject: string;

  @ApiModelProperty({ required: false, description: 'file location' })
  fileLocation: string;

  @ApiModelProperty({ required: false, description: 'claimed amount' })
  claimedAmount: number;

  @ApiModelProperty({ required: false, description: 'submit date' })
  submitDate: Date;

  @ApiModelProperty({ required: false, description: 'registration date' })
  registrationDate: Date;

  @ApiModelProperty({ required: false, description: 'first session date' })
  firstSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'case status' })
  caseStatus: string;

  @ApiModelProperty({ required: false, description: 'next session date' })
  nextSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'hall' })
  hall: string;

  @ApiModelProperty({ required: false, description: 'secretary name' })
  secretaryName: string;

  @ApiModelProperty({ required: false, description: 'latest session date' })
  latestSessionDate: Date;

  @ApiModelProperty({ required: false, description: 'root case number' })
  rootCaseNumber: string;

  @ApiModelProperty({ required: false, description: 'date of assignation' })
  dateOfAssignation: Date;

  @ApiModelProperty({ required: false, description: 'meeting date' })
  meetingDate: Date;

  @ApiModelProperty({ required: false, description: 'due date' })
  dueDate: Date;

  @ApiModelProperty({ required: false, description: 'managed by' })
  managedBy: string;

  @ApiModelProperty({ required: false, description: 'payment amount' })
  paymentAmount: number;

  @ApiModelProperty({ required: false, description: 'payment status' })
  paymentStatus: string; // mozda enum

  @ApiModelProperty({ required: false, description: 'parties addresses' })
  partiesAddresses: string[];

  @ApiModelProperty({ required: false, description: 'parties names' })
  partiesNames: string[];

  @ApiModelProperty({ required: false, description: 'notes' })
  notes: string[];
}

export class FileDto {
  @ApiModelProperty({ required: false, description: 'url' })
  url: string;

  @ApiModelProperty({ required: false, description: 'author' })
  author: string;

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class ClaimDto {
  @ApiModelProperty({ required: false, description: 'initial amount' })
  initialClaimAmount: Number;

  @ApiModelProperty({ required: false, description: 'current claim amount' })
  currentClaimAmount: Number;

  @ApiModelProperty({ required: false, description: 'balance claim amount' })
  balanceClaimAmount: Number;

  @ApiModelProperty({ required: false, description: 'claim details' })
  claimDetails: string;

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class DepositVoucherDto {
  @ApiModelProperty({ required: false, description: 'year' })
  year: Number;

  @ApiModelProperty({ required: false, description: 'type' })
  type: string;

  @ApiModelProperty({ required: false, description: 'amount' })
  amount: Number;

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class ExhibitDto {
  @ApiModelProperty({ required: false, description: 'description' })
  description: string;
  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class NoticeDto {
  @ApiModelProperty({ required: false, description: 'notice number' })
  noticeNumber: string;

  @ApiModelProperty({ required: false, description: 'type' })
  type: string;

  @ApiModelProperty({ required: false, description: 'registration date' })
  registrationDate: Date;

  @ApiModelProperty({ required: false, description: 'links' })
  links: string[];

  @ApiModelProperty({ required: false, description: 'parties' })
  parties: string[];

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class PetitionDto {
  @ApiModelProperty({ required: false, description: 'petition date' })
  petitionDate: Date;

  @ApiModelProperty({ required: false, description: 'subject' })
  subject: string;

  @ApiModelProperty({ required: false, description: 'links' })
  links: string[];

  @ApiModelProperty({ required: false, description: 'applicant' })
  applicant: string;

  @ApiModelProperty({ required: false, description: 'position number' })
  positionNumber: number;

  @ApiModelProperty({ required: false, description: 'decision number' })
  decisionNumber: number;

  @ApiModelProperty({ required: false, description: 'decision abstract' })
  decisionAbstract: string;

  @ApiModelProperty({ required: false, description: 'session date' })
  sessionDate: Date;

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

export class VerdictDto {
  @ApiModelProperty({ required: false, description: '' })
  verdict: string;

  @ApiModelProperty({ required: false, description: 'case id' })
  caseId: string;
}

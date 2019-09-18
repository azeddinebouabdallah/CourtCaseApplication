import {
  Column,
  Model,
  Table,
  CreatedAt,
  DataType,
  HasMany,
  NotNull,
  HasOne,
  BeforeCreate,
} from 'sequelize-typescript';
import { StatusEnum } from './enum/case.status';
import { File } from './file/file.entity';
import { Exhibit } from './exhibit/exhibits.entity';
import { Notice } from './notice/notices.entity';
import { Decision } from './decision/decisions.entity';
import { Petition } from './petition/petitions.entity';
import { Verdict } from './verdict/verdicts.entity';
import { DepositVoucher } from './depositVoucher/deposit.vouchers.entity';
import { Claim } from './claim/claims.entity';
import { Attachment } from './attachment/attachment.entity';

@Table
export class Case extends Model<Case> {
  @Column
  caseNumber: string;

  @Column
  subject: string;

  @Column
  fileLocation: string;

  @Column
  claimedAmount: number;

  @Column
  submitDate: Date;

  @Column
  registrationDate: Date;

  @Column
  firstSessionDate: Date;

  @Column({
    type: DataType.ENUM,
    values: StatusEnum,
  })
  caseStatus: string;

  @Column
  nextSessionDate: Date;

  @Column
  hall: string;

  @Column
  secretaryName: string;

  // @HasOne(() => Decision)
  // lastDecisions: Decision;

  @Column
  latestSessionDate: Date;

  @Column
  rootCaseNumber: string;

  @Column
  dateOfAssignation: Date;

  @Column
  meetingDate: Date;

  @Column
  dueDate: Date;

  @Column
  managedBy: string;

  @Column
  paymentAmount: number;

  @Column
  paymentStatus: string; // mozda enum

  @Column(DataType.ARRAY(DataType.STRING))
  partiesAddresses: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  partiesNames: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  notes: string[];

  @HasMany(() => File, {as: 'attachments'})
  attachments: File[];

  
  @HasMany(() => File, {as: 'petitionsAttachments'})
  petitionsAttachments: File[];

  @HasMany(() => Exhibit)
  exhibits: Exhibit[];

  @HasMany(() => Notice)
  notices: Notice[];

  @HasMany(() => Decision)
  decisions: Decision[];

  @HasMany(() => Petition)
  petitions: Petition[];

  @HasMany(() => Verdict)
  verdicts: Verdict[];

  @HasMany(() => DepositVoucher)
  depositVouchers: DepositVoucher[];

  @HasMany(() => Claim)
  claims: Claim[];

  @CreatedAt
  creationDate: Date;
}

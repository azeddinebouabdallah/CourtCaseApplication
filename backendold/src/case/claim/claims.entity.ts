import {
  Column,
  Model,
  Table,
  CreatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Case } from '../case.entity';
@Table
export class Claim extends Model<Claim> {
  @Column
  initialClaimAmount: Number;

  @Column
  currentClaimAmount: Number;

  @Column
  balanceClaimAmount: Number;

  @Column
  claimDetails: string;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

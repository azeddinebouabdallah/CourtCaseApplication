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
export class DepositVoucher extends Model<DepositVoucher> {
  @Column
  year: Number;

  @Column
  type: string;

  @Column
  amount: Number;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

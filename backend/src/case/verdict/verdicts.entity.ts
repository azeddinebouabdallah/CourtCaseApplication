import {
  Column,
  Model,
  Table,
  CreatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Petition } from '../petition/petitions.entity';
import { Case } from '../case.entity';
@Table
export class Verdict extends Model<Verdict> {
  @Column
  verdict: string;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

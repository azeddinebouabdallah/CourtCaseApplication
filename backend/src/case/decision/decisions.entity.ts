import {
  Column,
  Model,
  Table,
  CreatedAt,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Case } from '../case.entity';
@Table
export class Decision extends Model<Decision> {
  @Column
  decisionNumber: number;

  @Column
  date: Date;

  @Column
  source: string;

  @Column
  decision: string;

  @Column(DataType.ARRAY(DataType.STRING))
  links: string[];

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

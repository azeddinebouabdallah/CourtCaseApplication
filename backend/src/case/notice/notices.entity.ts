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
export class Notice extends Model<Notice> {
  @Column
  noticeNumber: string;

  @Column
  type: string;

  @Column
  registrationDate: Date;

  @Column(DataType.ARRAY(DataType.STRING))
  links: string[];

  @Column(DataType.ARRAY(DataType.STRING))
  parties: string[];

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

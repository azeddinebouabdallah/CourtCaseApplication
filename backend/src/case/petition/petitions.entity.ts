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
export class Petition extends Model<Petition> {
  @Column
  petitionDate: Date;

  @Column
  subject: string;

  @Column(DataType.ARRAY(DataType.STRING))
  links: string[];

  @Column
  applicant: string;

  @Column
  positionNumber: number;

  @Column
  decisionNumber: number;

  @Column
  decisionAbstract: string;

  @Column
  sessionDate: Date;

  @CreatedAt
  creationDate: Date;

  @ForeignKey(() => Case)
  @Column
  caseId: number;

  @BelongsTo(() => Case, 'caseId')
  case: Case;
}

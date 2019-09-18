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
  export class Attachment extends Model<Attachment> {
    @Column
    url: string;
  
    @Column
    author: string;
  
    @CreatedAt
    creationDate: Date;
  
    @ForeignKey(() => Case)
    @Column
    caseId: number;
  
    @BelongsTo(() => Case, 'caseId')
    case: Case;
  }
  
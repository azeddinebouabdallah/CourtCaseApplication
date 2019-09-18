import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Settings extends Model<Settings> {
  @Column
  appVersion: string;
}

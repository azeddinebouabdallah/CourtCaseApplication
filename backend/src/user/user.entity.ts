import {
  Column,
  Model,
  Table,
  CreatedAt,
  BeforeCreate,
  DataType,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { RolesEnum } from './user.roles';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @BeforeCreate
  static hashPassword(user: User) {
    user.password = bcrypt.hashSync(user.password, 10);
  }

  @Column
  password: string;

  @Column
  resetToken: string;

  @Column({
    type: DataType.ENUM,
    values: RolesEnum,
  })
  role: string;

  @CreatedAt
  creationDate: Date;
}

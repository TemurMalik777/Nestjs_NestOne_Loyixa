import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "../../roles/models/role.model";

interface IUserRoleCreateAttr {
  userId: number;
  roleId: number;
}

@Table({ tableName: "user-role" })
export class UserRole extends Model<UserRole, IUserRoleCreateAttr> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  declare roleId: number;
}

import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/models/role.model";
import { UserRole } from "./user-role.model";

interface IUserCreateAttr {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}

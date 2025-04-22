import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRole } from "src/users/models/user-role.model";
import { User } from "src/users/models/user.model";

interface IRoleCreateAttr {
  value: string;
  discription: string;
}

@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRoleCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare value: string;

  @Column({
    type: DataType.STRING,
  })
  declare discription: string;

  @BelongsToMany(() => User, () => UserRole)
  declare users: User[];
}

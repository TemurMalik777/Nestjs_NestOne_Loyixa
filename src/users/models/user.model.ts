import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { UserRole } from "./user-role.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreateAttr {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreateAttr> {
  @ApiProperty({
    example:1,
    description: "Foydalanuvchi unikal ID raqami"
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi"
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "user1@mail.uz",
    description: "Foydalanuvchi email"
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;


  @ApiProperty({
    example: "Uzbek",
    description: "Foydalanuvchi paroli"
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: "false",
    description: "Foydalanuvchi faolligi",
    default: false
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}

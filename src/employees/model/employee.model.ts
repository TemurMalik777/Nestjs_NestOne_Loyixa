import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Building } from "../../buildings/model/building.model";

interface IEmployeeCreateAttr {
  full_name: string;
  position: string;
  phone_number: string;
  hired_at: Date;
  // companyId: number;
}

@Table({ tableName: "employee" })
export class Employee extends Model<Employee, IEmployeeCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
  })
  full_name: string;

  @Column({
    type: DataType.STRING(50),
  })
  position: string;

  @Column({
    type: DataType.STRING(30),
  })
  phone_number: string;

  @Column({
    type: DataType.DATE,
  })
  hired_at: Date;

  // @ForeignKey(() => Employee)
  // @Column({
  //   type: DataType.INTEGER,
  //   onDelete: "CASCADE",
  // })
  // employeesId: number;

  // @BelongsTo(() => Building, { foreignKey: "buildingId", as: "Building" })
  // building: Building;
}

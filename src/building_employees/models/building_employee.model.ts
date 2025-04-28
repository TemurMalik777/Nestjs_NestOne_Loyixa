import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Building } from "../../buildings/model/building.model";
import { Employee } from "../../employees/model/employee.model";

interface IBuildingEmployeeCreateAttr {
  buildingId: number;
  employeeId: number;
  role: string;
  assigned_at: Date;
}

@Table({ tableName: "building-employee" })
export class BuildingEmployee extends Model<
  BuildingEmployee,
  IBuildingEmployeeCreateAttr
> {
  @ForeignKey(() => Building)
  @Column({ type: DataType.INTEGER })
  buildingId: number;

  // @BelongsTo(() => Building) // <<-- BU KERAK
  // building: Building;

  @ForeignKey(() => Employee)
  @Column({ type: DataType.INTEGER })
  employeeId: number;

  // @BelongsTo(() => Employee) // <<-- BU KERAK
  // employee: Employee;

  @Column({
    type: DataType.STRING,
  })
  role: string;

  @Column({
    type: DataType.DATE,
  })
  assigned_at: Date;

  // @BelongsTo(() => Building, { foreignKey: 'buildingId', as: 'building' })
  // building: Building;

  // @BelongsTo(() => Employee, { foreignKey: 'employeeId', as: 'employee' })
  // employee: Employee;
}

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Employee } from "../../employees/model/employee.model";
import { BuildingEmployee } from "../../building_employees/models/building_employee.model";

interface IBuildingsCreateAttr {
  name: string;
  address: string;
  started_at: Date;
  finished_at: Date;
}

@Table({ tableName: "building" })
export class Building extends Model<Building, IBuildingsCreateAttr> {
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
  })
  declare address: string;

  @Column({
    type: DataType.DATE,
  })
  declare started_at: Date;

  @Column({
    type: DataType.DATE,
  })
  declare finished_at: Date;

  // @HasMany(() => Employee, { foreignKey: "employeesId", as: "employees" })
  // employees: Employee[];

  // @HasMany(() => BuildingEmployee, {
  //   foreignKey: "buildingId",
  //   as: "buildingEmployees",
  // })
  // buildingEmployees: BuildingEmployee[];
}

import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Employee } from "src/employees/model/employee.model";

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
  name: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.DATE,
  })
  started_at: Date;

  @Column({
    type: DataType.DATE,
  })
  finished_at: Date;

  @HasMany(() => Employee, { foreignKey: "companyId", as: "employees" })
  employees: Employee[];
}

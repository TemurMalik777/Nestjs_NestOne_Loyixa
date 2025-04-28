import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Company } from "../../company/models/company.model";
import { Driver } from "../../driver/model/driver.model";
import { MachineDriver } from "../../machine-driver/model/machine-driver.model";

interface IMachineCreateAttr {
  model: string;
  name: string;
  companyId: number;
  image: string;
}

@Table({ tableName: "machine" })
export class Machine extends Model<Machine, IMachineCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare model: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare companyId: number;

  @Column({
    type: DataType.STRING,
  })
  declare image: string;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(() => Driver, () => MachineDriver)
  drivers: Driver[];
}

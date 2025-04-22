import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { MachineDriver } from "src/machine-driver/model/machine-driver.model";
import { Machine } from "src/machine/models/machine.model";

interface IDriverCreateAttr {
  first_name: string;
  last_name: string;
  phone: string;
  driver_license: string;
}

@Table({ tableName: "driver" })
export class Driver extends Model<Driver, IDriverCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone: string;

  @Column({
    type: DataType.STRING,
  })
  declare driver_license: string;

  @BelongsToMany(() => Machine, () => MachineDriver)
  declare machines: Machine[];
}

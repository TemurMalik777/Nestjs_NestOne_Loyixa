import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Driver } from "../../driver/model/driver.model";
import { Machine } from "../../machine/models/machine.model";

interface IMachineDriverCreateAttr {
  driverId: number;
  machineId: number;
}

@Table({ tableName: "machine-driver" })
export class MachineDriver extends Model<
  MachineDriver,
  IMachineDriverCreateAttr
> {
  @ForeignKey(() => Driver)
  @Column({ type: DataType.INTEGER })
  driverId: number;

  @ForeignKey(() => Machine)
  @Column({ type: DataType.INTEGER })
  machineId: number;

  @BelongsTo(() => Machine)
  machine: Machine;

  @BelongsTo(() => Driver)
  drivers: Driver;
}

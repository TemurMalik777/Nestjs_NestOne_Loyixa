import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Company } from "../../company/models/company.model";

interface BuilderCreationAttr {
  full_name: string;
  brith_day: Date;
  salary: number;
  companyId: number;
}

@Table({ tableName: "builder" })
export class Builder extends Model<Builder, BuilderCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @Column({
    type: DataType.DATE,
  })
  declare brith_day: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare salary: number;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}

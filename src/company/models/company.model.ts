import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "src/builder/models/builder.model";
import { Machine } from "src/machine/models/machine.model";

interface CompanyCreationAttr {
  // company modyle yartaishda kerak bo'ladigan atrebutlar
  name: string;
  phone: string;
  email: string;
  address: string;
}
// Table yartyabmiz //freezeTableName--Ko'plka utqazishni cheklaydi
@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  declare name: string;
  @Column({
    type: DataType.STRING(15),
  })
  declare phone: string;
  @Column({
    type: DataType.STRING(50),
  })
  declare email: string;
  @Column({
    type: DataType.STRING,
  })
  declare address: string;

  @HasMany(() => Builder)
  builder: Builder[];

  @HasMany(()=> Machine)
  machine: Machine[]
}

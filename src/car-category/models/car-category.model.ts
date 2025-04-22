import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CarCategoryCreationAttr {
  name: string;
  description: string;
  isActive: boolean;
}

@Table({ tableName: "carcategory" })
//Table yaratishda Uzidan uzni Model k..
export class CarCategory extends Model<CarCategory, CarCategoryCreationAttr> {
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
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare isActive: boolean;

}

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IMaterialCreateAttr {
  name: string;
  unit: string;
  price_per_unit: number;
}

@Table({ tableName: "materia" })
export class Material extends Model<Material, IMaterialCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  unit: string;

  @Column({
    type: DataType.STRING,
  })
  price_per_unit: number;
}

import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBuildingMaterialCreateAttr {
  buildingId: number;
  materialId: number;
  quantity: number;
  delivered_at: Date;
}

@Table({ tableName: "building-material" })
export class BuildingMaterial extends Model<
  BuildingMaterial,
  IBuildingMaterialCreateAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  buildingId: number;

  @Column({
    type: DataType.INTEGER,
  })
  materialId: number;

  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @Column({
    type: DataType.DATE,
  })
  delivered_at: Date;
}

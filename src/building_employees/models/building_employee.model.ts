import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Building } from "src/buildings/model/building.model"
import { Employee } from "src/employees/model/employee.model"


interface IBuildingEmployeeCreateAttr{
    buildingId: number
    employeeId: number
    role: string
    assigned_at: Date
}

@Table({tableName: "building-employee"})
export class BuildingEmployee extends Model<
BuildingEmployee, IBuildingEmployeeCreateAttr
> {
   @ForeignKey(()=> Building)
   @Column({type: DataType.INTEGER})
    buildingId: number

    @ForeignKey(()=>Employee)
    @Column({type: DataType.INTEGER})
    employeeId: number

    
}

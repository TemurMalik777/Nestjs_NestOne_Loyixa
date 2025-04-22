import { Injectable } from '@nestjs/common';
import { CreateBuildingEmployeeDto } from './dto/create-building_employee.dto';
import { UpdateBuildingEmployeeDto } from './dto/update-building_employee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingEmployee } from './models/building_employee.model';

@Injectable()
export class BuildingEmployeesService {
  constructor(@InjectModel(BuildingEmployee) private buildingEmployeeModule: typeof BuildingEmployee){}
  async create(createBuildingEmployeeDto: CreateBuildingEmployeeDto) {
    return this.buildingEmployeeModule.create(createBuildingEmployeeDto)
  }

  async findAll() {
    return this.buildingEmployeeModule.findAll({include: {all: true}})
  }

  async findOne(id: number):Promise<BuildingEmployee | null> {
    return this.buildingEmployeeModule.findByPk(id)
  }

  async update(
    id: number, 
    updateBuildingEmployeeDto: UpdateBuildingEmployeeDto
  ):Promise<BuildingEmployee | null> {
    const updateBuildingEmployee = await this.buildingEmployeeModule.update(updateBuildingEmployeeDto, {
      where: {id},
      returning: true
    })
    return updateBuildingEmployee[1][0]
  }

  async remove(id: number) {
    const deleteBuildingEmployee = await this.buildingEmployeeModule.destroy({where: {id}})
    if (deleteBuildingEmployee > 0) {
      return "Building-Employees uchirildi"
    }
    return "Bunday Building-Employees mavjud emas"
  }
}

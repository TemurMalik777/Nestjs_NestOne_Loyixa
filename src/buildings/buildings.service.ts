import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Building } from './model/building.model';

@Injectable()
export class BuildingsService {
  constructor(@InjectModel(Building) private builderModule: typeof Building){}
  
  async createBuilding(createBuildingDto: CreateBuildingDto):Promise<Building> {
    const builder = await this.builderModule.create(createBuildingDto)
    return builder
  }

  async findAllBuilding():Promise<Building[]> {
    return this.builderModule.findAll({include: {all:true}})
  }

  async findOneBuilding(id: number):Promise<Building | null> {
    return this.builderModule.findByPk(id)
  }

  async updateBuildingDto(id: number, updateBuildingDto: UpdateBuildingDto):Promise<Building | null> {
    const updateBuilding = await this.builderModule.update(updateBuildingDto,
      {where: {id}, returning: true}
    )
    return updateBuilding[1][0]
  }

  async remove(id: number) {
    const deleteBuilding = await this.builderModule.destroy({where: {id}})
    if (deleteBuilding>0) {
      return "Building topilmadi"
    }
    return "Bunday Building mavjud emas"
  }
}

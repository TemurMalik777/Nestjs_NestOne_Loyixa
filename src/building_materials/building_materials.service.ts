import { Injectable } from '@nestjs/common';
import { CreateBuildingMaterialDto } from './dto/create-building_material.dto';
import { UpdateBuildingMaterialDto } from './dto/update-building_material.dto';

@Injectable()
export class BuildingMaterialsService {
  create(createBuildingMaterialDto: CreateBuildingMaterialDto) {
    return 'This action adds a new buildingMaterial';
  }

  findAll() {
    return `This action returns all buildingMaterials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingMaterial`;
  }

  update(id: number, updateBuildingMaterialDto: UpdateBuildingMaterialDto) {
    return `This action updates a #${id} buildingMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingMaterial`;
  }
}

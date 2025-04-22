import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Material } from './models/material.model';

@Injectable()
export class MaterialsService {
  constructor(@InjectModel(Material) private readonly materiaslModule: typeof Material){}


  async create(createMaterialDto: CreateMaterialDto) : Promise<Material> {
      return await this.materiaslModule.create(createMaterialDto);
    }

  findAll() {
    return this.materiaslModule.findAll({include: {all:true}})
  }

  findOne(id: number) {
    return `This action returns a #${id} material`;
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return `This action updates a #${id} material`;
  }

  remove(id: number) {
    return `This action removes a #${id} material`;
  }
}

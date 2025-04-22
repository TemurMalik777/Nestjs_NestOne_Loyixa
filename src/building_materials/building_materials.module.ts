import { Module } from '@nestjs/common';
import { BuildingMaterialsService } from './building_materials.service';
import { BuildingMaterialsController } from './building_materials.controller';

@Module({
  controllers: [BuildingMaterialsController],
  providers: [BuildingMaterialsService],
})
export class BuildingMaterialsModule {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingMaterialDto } from './create-building_material.dto';

export class UpdateBuildingMaterialDto extends PartialType(CreateBuildingMaterialDto) {}

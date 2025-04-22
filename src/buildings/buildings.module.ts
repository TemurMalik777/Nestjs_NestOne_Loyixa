import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Building } from './model/building.model';

@Module({
  imports: [SequelizeModule.forFeature([Building])],
  controllers: [BuildingsController],
  providers: [BuildingsService],
  exports: [BuildingsService]
})
export class BuildingsModule {}

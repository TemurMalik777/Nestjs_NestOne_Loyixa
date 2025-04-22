import { Module } from '@nestjs/common';
import { CarCategoryService } from './car-category.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarCategoryController } from './car-category.controller';
import { CarCategory } from './models/car-category.model';

@Module({
  imports: [SequelizeModule.forFeature([CarCategory])],
  controllers: [CarCategoryController],
  providers: [CarCategoryService],
  exports: []
})
export class CarCategoryModule {}

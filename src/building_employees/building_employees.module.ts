import { Module } from '@nestjs/common';
import { BuildingEmployeesService } from './building_employees.service';
import { BuildingEmployeesController } from './building_employees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BuildingEmployee } from './models/building_employee.model';

@Module({
  imports: [SequelizeModule.forFeature([BuildingEmployee])],
  controllers: [BuildingEmployeesController],
  providers: [BuildingEmployeesService],
})
export class BuildingEmployeesModule {}

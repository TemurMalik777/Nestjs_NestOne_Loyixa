import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './model/employee.model';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports:[SequelizeModule.forFeature([Employee]), BuildingsModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}

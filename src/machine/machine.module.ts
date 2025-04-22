import { Module } from "@nestjs/common";
import { MachineService } from "./machine.service";
import { MachineController } from "./machine.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Machine } from "./models/machine.model";
import { CompanyModule } from "src/company/company.module";

@Module({
  imports: [SequelizeModule.forFeature([Machine]), CompanyModule],
  controllers: [MachineController],
  providers: [MachineService],
  exports: [],
})
export class MachineModule {}

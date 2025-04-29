import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { CarCategoryModule } from "./car-category/car-category.module";
import { CarCategory } from "./car-category/models/car-category.model";
import { BuilderModule } from "./builder/builder.module";
import { Builder } from "./builder/models/builder.model";
import { MachineModule } from "./machine/machine.module";
import { DriverModule } from "./driver/driver.module";
import { Driver } from "./driver/model/driver.model";
import { Machine } from "./machine/models/machine.model";
import { MachineDriverModule } from "./machine-driver/machine-driver.module";
import { MachineDriver } from "./machine-driver/model/machine-driver.model";
import { EmployeesModule } from "./employees/employees.module";
import { Employee } from "./employees/model/employee.model";
import { BuildingsModule } from "./buildings/buildings.module";
import { Building } from "./buildings/model/building.model";
import { BuildingEmployeesModule } from "./building_employees/building_employees.module";
import { BuildingEmployee } from "./building_employees/models/building_employee.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { UserRole } from "./users/models/user-role.model";
import { AuthModule } from './auth/auth.module';
import { MaterialsModule } from './materials/materials.module';
import { Material } from "./materials/models/material.model";
import { BuildingMaterialsModule } from './building_materials/building_materials.module';
import { BuildingMaterial } from "./building_materials/models/building_material.model";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Company,
        CarCategory,
        Builder,
        Driver,
        Machine,
        MachineDriver,
        Employee,
        Building,
        BuildingEmployee,
        Role,
        User,
        UserRole,
        Material,
        BuildingEmployee,
        BuildingMaterial
      ], // qaysi models dan foydalyotganimizni nest elon qilish
      autoLoadModels: true, //bu orqali Sequelize avtomatik models arrayidagi modellardan foydalanadi.
      sync: { alter: true }, // bu dev rejimida foydalaniladi, agar modelda o‘zgarish bo‘lsa, ularni bazada avtomatik moslashtiradi.
      logging: false, //ture //bu yerda malumotler bazasagi ulanish qanday bo'lganini ko'rsatadi terminlada
    }),
    CompanyModule, //loyixada yartilgan tabel shu yerda yatish kerak bo'ladi
    CarCategoryModule,
    BuilderModule,
    MachineModule,
    DriverModule,
    MachineDriverModule,
    EmployeesModule,
    BuildingsModule,
    BuildingEmployeesModule,
    RolesModule,
    UsersModule,
    AuthModule,
    MaterialsModule,
    BuildingMaterialsModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

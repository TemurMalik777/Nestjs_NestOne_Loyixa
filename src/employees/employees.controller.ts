import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";

@Controller("employees")
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAllEmployee();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.employeesService.findOneEmployee(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ) {
    return this.employeesService.updateEmployeeDto(+id, updateEmployeeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.employeesService.remove(+id);
  }
}

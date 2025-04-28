import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Employee } from "./model/employee.model";
import { BuildingsService } from "../buildings/buildings.service";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee) private employeeModule: typeof Employee,
    private readonly buildingService: BuildingsService
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const { companyId } = createEmployeeDto;
    const company = await this.buildingService.findOneBuilding(companyId);
    if (!company) {
      throw new BadRequestException("Bunday Building  topilmadi");
    }
    return this.employeeModule.create(createEmployeeDto);
  }

  async findAllEmployee(): Promise<Employee[]> {
    return this.employeeModule.findAll({ include: { all: true } });
  }

  async findOneEmployee(id: number): Promise<Employee | null> {
    return this.employeeModule.findByPk(id);
  }

  async updateEmployeeDto(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto
  ): Promise<Employee | null> {
    const updateEmployee = await this.employeeModule.update(updateEmployeeDto, {
      where: { id },
      returning: true,
    });
    return updateEmployee[1][0];
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}

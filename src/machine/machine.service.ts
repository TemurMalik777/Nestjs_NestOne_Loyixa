import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Machine } from "./models/machine.model";
import { CompanyService } from "src/company/company.service";

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine) private machineModule: typeof Machine,
    private readonly companyService: CompanyService 
  ) {}

  async createMachine(createMachineDto: CreateMachineDto) {
    const { companyId } = createMachineDto;
    const machine = await this.companyService.findOneCompanies(companyId);
    if (!machine) {
      throw new BadRequestException("Bunday mashina mavjud emas");
    }
    return this.machineModule.create(createMachineDto);
  }

  async findAllMachine(): Promise<Machine[]> {
    return this.machineModule.findAll({ include: { all: true } });
  }

  async findOneMachine(id: number): Promise<Machine | null> {
    return this.machineModule.findByPk(id);
  }

  async updateMachineDto(
    id: number,
    updateMachineDto: UpdateMachineDto
  ): Promise<Machine | null> {
    const updateMachine = await this.machineModule.update(updateMachineDto, {
      where: { id },
      returning: true,
    });
    return updateMachine[1][0];
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}
